# Broch & Co. — Staffing Website

Express + EJS website for Broch & Co. Elite Household Staffing, with a public marketing
site, contact/booking forms, and a simple admin dashboard.

## Stack
- Express 4 + EJS (server-rendered views)
- better-sqlite3 (SQLite)
- helmet, express-rate-limit, express-validator
- Deployed on Vercel (`@vercel/node`)

## Setup

```bash
npm install
cp .env.example .env   # then edit .env with real values
npm run dev            # or: npm start
```

The app runs at http://localhost:3000.

### Environment variables
See `.env.example`. Required for admin login:

| Variable         | Purpose                                                            |
| ---------------- | ----------------------------------------------------------------- |
| `ADMIN_USERNAME` | Admin login username. Seeded into the DB on boot.                 |
| `ADMIN_PASSWORD` | Admin login password (stored salted+hashed with scrypt).          |
| `NODE_ENV`       | Set to `production` so the session cookie is marked `Secure`.     |

If `ADMIN_USERNAME`/`ADMIN_PASSWORD` are not set, **no admin user is created** and the
server logs a warning — admin login stays disabled until both are provided.

## Admin login

- **Local:** put `ADMIN_USERNAME` / `ADMIN_PASSWORD` in `.env`, start the app, and go to
  http://localhost:3000/admin/login.
- **Production (Vercel):** set `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `NODE_ENV=production`
  as Project Environment Variables (Production scope), redeploy, then log in at
  `/admin/login`.

Authentication uses an `httpOnly` session cookie (`SameSite=Lax`, `Secure` in production).
No token is placed in the URL.

> **Known limitation (tracked for a follow-up PR):** sessions are stored in memory and the
> SQLite database lives in `/tmp` on Vercel, which is ephemeral and per-instance. Form
> submissions and logins are not durable in the serverless deployment yet — a hosted
> database and shared session store are planned next.
