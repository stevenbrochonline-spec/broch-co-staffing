const express = require('express');
const crypto = require('crypto');
const { getDb } = require('../db/init');
const router = express.Router();

// Simple session store (in-memory — use proper sessions in production)
const sessions = new Map();

function authMiddleware(req, res, next) {
  const token = req.headers['x-admin-token'] || req.query.token;
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

  const hash = crypto.createHash('sha256').update(password).digest('hex');
  const db = getDb();
  try {
    const user = db.prepare('SELECT * FROM admin_users WHERE username = ? AND password_hash = ?').get(username, hash);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, { id: user.id, username: user.username });
    res.json({ success: true, token });
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
  const token = req.headers['x-admin-token'] || req.query.token;
  if (token) sessions.delete(token);
  res.json({ success: true });
});

module.exports = router;
