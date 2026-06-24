# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single service: an Express 4 + EJS server-rendered marketing site for
"Broch & Co." household staffing, backed by a local SQLite file via `better-sqlite3`.

Run/build/test commands live in `package.json` and `README.md` — use those as the source
of truth. Quick reference:

- Run (dev, hot reload): `npm run dev` (serves http://localhost:3000)
- Run (prod-style): `npm start`
- There is **no lint script and no automated test suite** in this repo.

Non-obvious notes:

- **Admin login requires `.env`.** `.env` is gitignored, so a fresh VM won't have it.
  Without `ADMIN_USERNAME` + `ADMIN_PASSWORD`, the server still boots and the public site
  (incl. the contact/booking forms) works fine, but `/admin/login` is disabled and the
  server logs a `[WARN] ... no admin user seeded`. To enable admin, create `.env` with:
  ```
  ADMIN_USERNAME=admin
  ADMIN_PASSWORD=devpassword123
  ```
  The admin user is (re)seeded from these values into the DB on every boot.
- The SQLite DB file is created at `db/broch.db` locally (gitignored). It persists between
  restarts; delete it to reset all inquiries/consultations/admin data.
- Admin sessions are stored in memory, so restarting the dev server logs you out.
- `npm run dev` uses `node --watch`, which restarts on file changes but does **not** pick up
  newly installed dependencies — rerun `npm install` and restart the server for those.
