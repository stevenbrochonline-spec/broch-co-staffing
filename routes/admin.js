const express = require('express');
const crypto = require('crypto');
const { getDb } = require('../db/init');
const { verifyPassword } = require('../lib/password');
const router = express.Router();

const COOKIE_NAME = 'admin_session';
const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours
const isProd = process.env.NODE_ENV === 'production' || !!process.env.VERCEL;

// Allowed status transitions per resource.
const INQUIRY_STATUSES = ['new', 'contacted', 'closed'];
const CONSULTATION_STATUSES = ['pending', 'confirmed', 'completed', 'cancelled'];

// Simple session store (in-memory — use proper sessions in production)
const sessions = new Map();

// Read the admin token from the x-admin-token header or the httpOnly cookie.
function getToken(req) {
  const header = req.headers['x-admin-token'];
  if (header) return header;
  const raw = req.headers.cookie;
  if (!raw) return null;
  const match = raw
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  return match ? decodeURIComponent(match.slice(COOKIE_NAME.length + 1)) : null;
}

function setSessionCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/admin',
    maxAge: SESSION_TTL_MS,
  });
}

function authMiddleware(req, res, next) {
  const token = getToken(req);
  if (token && sessions.has(token)) {
    req.adminUser = sessions.get(token);
    return next();
  }
  if (req.path === '/login' || req.path === '/api/login') return next();
  res.redirect('/admin/login');
}

router.use(authMiddleware);

// Login page
router.get('/login', (req, res) => {
  res.render('admin/login');
});

// Login API
router.post('/api/login', express.json(), (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Missing credentials' });
  }

  const db = getDb();
  try {
    const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username);
    if (!user || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, { id: user.id, username: user.username });
    setSessionCookie(res, token);
    res.json({ success: true });
  } finally {
    db.close();
  }
});

// Dashboard
router.get('/', (req, res) => {
  const db = getDb();
  try {
    const inquiries = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
    const consultations = db.prepare('SELECT * FROM consultations ORDER BY created_at DESC').all();
    const stats = {
      totalInquiries: inquiries.length,
      newInquiries: inquiries.filter(i => i.status === 'new').length,
      totalConsultations: consultations.length,
      pendingConsultations: consultations.filter(c => c.status === 'pending').length,
    };
    res.render('admin/dashboard', { inquiries, consultations, stats });
  } finally {
    db.close();
  }
});

// Update inquiry status
router.patch('/api/inquiries/:id', express.json(), (req, res) => {
  const { status } = req.body;
  if (!INQUIRY_STATUSES.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }
  const db = getDb();
  try {
    db.prepare('UPDATE inquiries SET status = ? WHERE id = ?').run(status, req.params.id);
    res.json({ success: true });
  } finally {
    db.close();
  }
});

// Update consultation status
router.patch('/api/consultations/:id', express.json(), (req, res) => {
  const { status } = req.body;
  if (!CONSULTATION_STATUSES.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }
  const db = getDb();
  try {
    db.prepare('UPDATE consultations SET status = ? WHERE id = ?').run(status, req.params.id);
    res.json({ success: true });
  } finally {
    db.close();
  }
});

// Logout
router.post('/api/logout', (req, res) => {
  const token = getToken(req);
  if (token) sessions.delete(token);
  res.clearCookie(COOKIE_NAME, { path: '/admin' });
  res.json({ success: true });
});

module.exports = router;
