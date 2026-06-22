const Database = require('better-sqlite3');
const path = require('path');
const { hashPassword } = require('../lib/password');

const DB_PATH = process.env.VERCEL
  ? path.join('/tmp', 'broch.db')
  : path.join(__dirname, 'broch.db');

function getDb() {
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  return db;
}

function initialize() {
  const db = getDb();

  db.exec(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      country TEXT,
      service TEXT,
      message TEXT,
      status TEXT DEFAULT 'new',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS consultations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      preferred_date TEXT,
      preferred_time TEXT,
      service TEXT,
      country TEXT,
      notes TEXT,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed admin strictly from environment. No hard-coded credentials.
  const adminUser = process.env.ADMIN_USERNAME;
  const adminPass = process.env.ADMIN_PASSWORD;
  if (adminUser && adminPass) {
    const hash = hashPassword(adminPass);
    db.prepare(
      `INSERT INTO admin_users (username, password_hash) VALUES (?, ?)
       ON CONFLICT(username) DO UPDATE SET password_hash = excluded.password_hash`
    ).run(adminUser, hash);
  } else {
    console.warn(
      '[WARN] ADMIN_USERNAME and/or ADMIN_PASSWORD not set — no admin user seeded. ' +
      'Admin login is disabled until both environment variables are provided.'
    );
  }

  db.close();
}

module.exports = { getDb, initialize };
