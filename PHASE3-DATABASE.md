# Phase 3: Database Setup on Render

## Overview

This phase sets up a PostgreSQL database on Render that will be used by your Django backend in production.

---

## Why PostgreSQL?

- **Better for production**: More robust than MySQL for web applications
- **Render-friendly**: Native support with excellent integration
- **Cost-effective**: Free tier available
- **Scalable**: Better performance under load

---

## Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Click **Sign up**
3. Choose **Sign up with GitHub** (recommended, since you pushed your repo)
4. Authorize Render to access your GitHub account

---

## Step 2: Create PostgreSQL Database

### Method A: Via Render Dashboard

1. In Render dashboard, click **New +** button
2. Select **PostgreSQL**
3. Fill in details:
   - **Name**: `smart-air-cargo-db`
   - **Database**: `smart_air_cargo`
   - **User**: `postgres` (auto-generated)
   - **Region**: Choose closest to your users
   - **Postgres Version**: Latest (15+)
   - **SSL Mode**: Require

4. Click **Create Database**

5. **Copy the External Database URL**:
   - It looks like: `postgresql://user:password@host:5432/dbname`
   - **Save this** - you'll need it in Phase 4

### Database Pricing

- **Free tier**: Free, but limited to 90 days
- **Paid tier**: $7/month - recommended for production

---

## Step 3: Configure Django for PostgreSQL

### Your Backend Already Updated!

✅ `requirements.txt` - Added `psycopg2-binary`
✅ `core/settings.py` - Now supports both MySQL (local) and PostgreSQL (production)

The configuration automatically:

- Uses `DATABASE_URL` if available (Render production)
- Falls back to `DB_*` environment variables (local MySQL)

---

## Step 4: Test Locally (Optional but Recommended)

### Option 1: Keep Using Local MySQL

No changes needed! Your local `.env` still uses MySQL.

### Option 2: Test PostgreSQL Locally

If you want to test with PostgreSQL before deploying:

1. **Install PostgreSQL locally** (Windows):

   ```bash
   # Download from https://www.postgresql.org/download/windows/
   # Or use: choco install postgresql
   ```

2. **Create local PostgreSQL database**:

   ```bash
   psql -U postgres
   CREATE DATABASE smart_air_cargo;
   \q
   ```

3. **Update `.env` with PostgreSQL connection**:

   ```
   DATABASE_URL=postgresql://postgres:your_password@127.0.0.1:5432/smart_air_cargo
   DB_NAME=smart_air_cargo
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_HOST=127.0.0.1
   DB_PORT=5432
   ```

4. **Run migrations**:
   ```bash
   cd backend
   python manage.py migrate
   ```

---

## Step 5: Environment Variables for Render (Phase 4)

When you deploy to Render in Phase 4, you'll add:

```
DATABASE_URL=postgresql://user:password@host:port/database
```

(Copy from Step 2)

---

## Database Connection Details

### Format

```
postgresql://USERNAME:PASSWORD@HOSTNAME:PORT/DATABASE
```

### Example

```
postgresql://postgres:abc123xyz@ew-portland-postgresql.render.com:5432/smart_air_cargo_db
```

### Where to Find

- **Render Dashboard** → Your PostgreSQL Database → External Database URL
- Copy the entire URL (it includes credentials)

---

## Important Security Notes

⚠️ **Never commit DATABASE_URL to Git**

- It contains your password
- Use `.env` file (which is in `.gitignore`)
- Render provides it securely via environment variables

✅ **Credentials are secure on Render**

- Render manages credentials securely
- Only accessible via environment variables
- Automatically rotated if needed

---

## Next Steps

After database is created:

1. **Copy the External Database URL**
2. **Proceed to Phase 4** - Deploy Backend to Render
3. Add `DATABASE_URL` as environment variable during deployment

---

## Troubleshooting

### Connection Refused

- Check if database is still running
- Verify IP whitelist (Render allows all IPs by default)

### Authentication Failed

- Confirm username and password
- Copy the full connection string exactly

### Database Already Exists

- Render automatically creates the database name specified

---

## Database Storage

- **Free tier**: 256 MB
- **Standard tier**: Unlimited
- **Data persistence**: Your data persists even if service is paused

---

**Status**: ✅ Phase 3 Complete (Setup ready)
**Next**: Phase 4 - Deploy Backend to Render
