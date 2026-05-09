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

## Next Steps (Phase 2-7)

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
