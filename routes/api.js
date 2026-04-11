const express = require('express');
const { body, validationResult } = require('express-validator');
const { getDb } = require('../db/init');
const router = express.Router();

// Contact form submission
router.post('/contact', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional({ checkFalsy: true }).trim().escape(),
  body('country').optional({ checkFalsy: true }).trim().escape(),
  body('service').optional({ checkFalsy: true }).trim().escape(),
  body('message').trim().notEmpty().escape(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, phone, country, service, message } = req.body;
  const db = getDb();
  try {
    const stmt = db.prepare(
      'INSERT INTO inquiries (name, email, phone, country, service, message) VALUES (?, ?, ?, ?, ?, ?)'
    );
    stmt.run(name, email, phone || null, country || null, service || null, message);
    res.json({ success: true, message: 'Thank you. We will be in touch shortly.' });
  } finally {
    db.close();
  }
});

// Consultation booking
router.post('/book', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional({ checkFalsy: true }).trim().escape(),
  body('preferred_date').trim().notEmpty().escape(),
  body('preferred_time').trim().notEmpty().escape(),
  body('service').trim().notEmpty().escape(),
  body('country').optional({ checkFalsy: true }).trim().escape(),
  body('notes').optional({ checkFalsy: true }).trim().escape(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, phone, preferred_date, preferred_time, service, country, notes } = req.body;
  const db = getDb();
  try {
    const stmt = db.prepare(
      'INSERT INTO consultations (name, email, phone, preferred_date, preferred_time, service, country, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    stmt.run(name, email, phone || null, preferred_date, preferred_time, service, country || null, notes || null);
    res.json({ success: true, message: 'Consultation booked. We will confirm within 24 hours.' });
  } finally {
    db.close();
  }
});

module.exports = router;
