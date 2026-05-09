# Smart Air Cargo - Deployment Guide

## Overview

- **Frontend**: React (Vite) → Vercel
- **Backend**: Django → Render
- **Database**: MySQL → Render's managed MySQL or PostgreSQL

---

## Phase 1: ✅ Production Setup (Completed)

### Backend Changes

1. **Updated `backend/requirements.txt`**
   - Added `gunicorn` - WSGI server for production
   - Added `whitenoise` - Serve static files efficiently
   - Added `dj-database-url` - Parse database URLs from environment

2. **Created `backend/.gitignore`**
   - Excludes sensitive files, Python cache, and environment files

3. **Created `backend/Procfile`**

   ```
   web: gunicorn core.wsgi
   release: python manage.py migrate
   ```

   - Tells Render how to start your app
   - Runs migrations before each deployment

4. **Updated `backend/core/settings.py`**
   - Added `WhiteNoiseMiddleware` for static file serving
   - Added `STATIC_ROOT` configuration
   - Added `STATICFILES_STORAGE` compression

### Frontend Changes

1. **Created `frontend/.env.production`**
   - Points to your Render backend API URL
   - Used during Vercel build process

2. **Updated `frontend/src/api/axios.js`**
   - Now uses `VITE_API_URL` environment variable
   - Defaults to `http://localhost:8000` for local development

### Root Project

- **Updated `.gitignore`** - Comprehensive file exclusions for Git

---

## Phase 2: ✅ GitHub Setup (Completed)

- Repository pushed to GitHub
- Code is ready for deployment

---

## Phase 3: ✅ Database Setup (Completed)

### Backend Changes

1. **Updated `backend/requirements.txt`**
   - Added `psycopg2-binary` - PostgreSQL driver for production

2. **Updated `backend/core/settings.py`**
   - Imported `dj_database_url`
   - Configured flexible database support:
     - **Production** (Render): Uses `DATABASE_URL` environment variable → PostgreSQL
     - **Local Dev**: Uses `DB_*` environment variables → MySQL

3. **Updated `backend/.env.example`**
   - Added comments for both MySQL and PostgreSQL configurations

### Database Created on Render

✅ **PostgreSQL Database**: `smart_air_cargo_db`
✅ **Connection String**:

```
postgresql://smart_air_cargo_db_user:ctYay2XjJgfzcy0QETnoA6JCGl8ZDL3G@dpg-d7vki41o3t8c73d1rfdg-a.oregon-postgres.render.com/smart_air_cargo_db
```

**See [PHASE3-DATABASE.md](PHASE3-DATABASE.md) for detailed database setup instructions.**

---

## Phase 4: Deploy Backend to Render (Ready to Deploy)

### Database Connected ✅

- PostgreSQL created on Render
- Connection string ready
- Django settings configured for automatic database selection

### Next Actions

1. Create Web Service on Render
2. Connect GitHub repository
3. Configure environment variables (including DATABASE_URL above)
4. Deploy!

**See [PHASE4-BACKEND-DEPLOY.md](PHASE4-BACKEND-DEPLOY.md) for step-by-step deployment instructions.**

---

## Next Steps (Phase 5-7)

### Phase 2: GitHub Setup

1. Initialize git repository
2. Create GitHub repository
3. Push code to GitHub

### Phase 3: Database Setup

- Create PostgreSQL or MySQL database on Render
- Get connection string

### Phase 4: Deploy Backend to Render

- Connect GitHub repo
- Set environment variables
- Deploy

### Phase 5: Deploy Frontend to Vercel

- Import GitHub repo
- Configure build settings
- Deploy

### Phase 6: Connect Frontend & Backend

- Update CORS settings on backend
- Verify API connectivity

### Phase 7: Testing

- Test API endpoints
- Test database connectivity
- Test full application flow

---

## Environment Variables Reference

### Backend (Render)

```
DJANGO_SECRET_KEY=<generate-new-key>
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=your-api.onrender.com,yourdomain.com
DATABASE_URL=<postgres-or-mysql-connection-string>
CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app
DEFAULT_FROM_EMAIL=info@smartaircargo.net
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your-email
EMAIL_HOST_PASSWORD=your-password
```

### Frontend (Vercel)

```
VITE_API_URL=https://your-api.onrender.com
```

---

## Notes

- Never commit `.env` files to Git
- Use `.env.example` as template for new developers
- Run `python manage.py collectstatic` locally to test static files
- Test locally before deploying to production
