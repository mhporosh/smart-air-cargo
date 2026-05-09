# Phase 4: Deploy Backend to Render

## Overview

Deploy your Django backend to Render and connect it to your PostgreSQL database.

---

## Step 1: Create Render Web Service

1. **Go to [render.com](https://render.com)** and sign in
2. **Click "New +"** button in top right
3. **Select "Web Service"**
4. **Connect GitHub Repository**:
   - Click "Connect account" if needed
   - Find and select `smart-air-cargo` repository
   - Click "Connect"

---

## Step 2: Configure Web Service

Fill in the following details:

### Basic Information

- **Name**: `smart-air-cargo-api`
- **Environment**: `Python 3`
- **Region**: `Oregon` (or closest to you)
- **Branch**: `main`
- **Build Command**:
  ```
  pip install -r requirements.txt && python backend/manage.py migrate
  ```
- **Start Command**:
  ```
  gunicorn core.wsgi --chdir backend
  ```

### Plan

- **Free** (for testing) or **Paid** ($7/month)
- Free plan has limitations (gets paused after 15 min inactivity)

---

## Step 3: Add Environment Variables

**Click "Advanced"** to expand, then **"Add Environment Variable"** for each:

### Critical Variables

#### 1. Database (Required)

```
DATABASE_URL
postgresql://smart_air_cargo_db_user:ctYay2XjJgfzcy0QETnoA6JCGl8ZDL3G@dpg-d7vki41o3t8c73d1rfdg-a.oregon-postgres.render.com/smart_air_cargo_db
```

_(Copy-paste the URL you provided)_

#### 2. Django Secret Key (Generate New)

```
DJANGO_SECRET_KEY
```

Generate a secure key:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Copy the output and paste as value.

#### 3. Debug Mode

```
DJANGO_DEBUG
False
```

(Always False in production!)

#### 4. Allowed Hosts

```
DJANGO_ALLOWED_HOSTS
smart-air-cargo-api.onrender.com
```

_(Render will provide your exact URL after deployment)_

#### 5. CORS Configuration (Update Later)

```
CORS_ALLOWED_ORIGINS
http://localhost:5173,http://localhost:3000
```

_(Will update with Vercel URL in Phase 5)_

### Optional Email Configuration

```
DEFAULT_FROM_EMAIL
info@smartaircargo.net

EMAIL_BACKEND
django.core.mail.backends.console.EmailBackend

EMAIL_HOST
smtp.gmail.com

EMAIL_PORT
587

EMAIL_HOST_USER
your-email@gmail.com

EMAIL_HOST_PASSWORD
your-app-password

EMAIL_USE_TLS
True
```

---

## Step 4: Deploy

1. **Scroll to bottom**
2. **Click "Create Web Service"**
3. **Wait for deployment** (takes 3-5 minutes)
   - Watch the logs in real-time
   - Render will:
     - Install dependencies from `requirements.txt`
     - Run database migrations
     - Start your Gunicorn server

### Expected Log Messages

```
Building...
Running build command: pip install -r requirements.txt...
Successfully installed Django, gunicorn, etc...
Running: python backend/manage.py migrate
Operations to perform...
Running migrations...
Applying sites.Site.add_name_to_site...
Creating wsgi application object...
Server started successfully on 0.0.0.0:8080
```

---

## Step 5: Verify Deployment

1. **Get your backend URL**:
   - Render shows: `https://smart-air-cargo-api.onrender.com`
   - Copy this URL

2. **Test the API**:

   ```
   https://smart-air-cargo-api.onrender.com/admin/
   ```

   Should show Django admin login (great sign!)

3. **Check Health**:
   ```
   curl https://smart-air-cargo-api.onrender.com/api/
   ```
   Should return JSON response (no 404 errors)

---

## Step 6: Update Django Settings

Once you have your Render URL:

1. **Go to Render Dashboard** → Your Web Service
2. **Copy the full URL** (e.g., `https://smart-air-cargo-api.onrender.com`)
3. **Update environment variable**:
   - `DJANGO_ALLOWED_HOSTS` = `smart-air-cargo-api.onrender.com`

---

## Step 7: Troubleshooting

### Build Fails - "requirements.txt not found"

**Solution**: Build command should be:

```
pip install -r backend/requirements.txt && python backend/manage.py migrate
```

or

```
cd backend && pip install -r requirements.txt && python manage.py migrate
```

### Database Connection Error

**Check**:

1. DATABASE_URL is exactly correct (copy-paste again)
2. PostgreSQL database still exists on Render
3. Wait 1-2 minutes (sometimes takes time to initialize)

### 500 Error After Deployment

**Check logs**:

1. Click "Logs" tab in Render
2. Look for Python error messages
3. Common issues:
   - Missing environment variables
   - Database migration failed
   - Secret key issues

### Application keeps restarting

**Check**:

1. Free plan requirements: Add `max_requests: 1000` to Gunicorn
2. Memory issues: Upgrade to paid plan
3. View logs for actual error

---

## Important Notes

⚠️ **First Deploy Tips**

- Migrations run automatically (via Procfile)
- If migrations fail, see Logs tab
- You can restart service manually if needed
- Changes to `requirements.txt` trigger new deployment automatically

✅ **Your Database is Ready**

- All Django tables created automatically
- You can manage data via `/admin/`
- PostgreSQL connection is secure and encrypted

🔄 **Redeploying**

- Just push changes to GitHub `main` branch
- Render auto-deploys within 1-2 minutes
- No downtime for code changes

---

## Next Steps

1. ✅ Backend deployed to Render
2. 📝 Save your backend URL: `https://smart-air-cargo-api.onrender.com`
3. 🚀 Proceed to Phase 5 - Deploy Frontend to Vercel

---

## Environment Variables Summary

| Variable               | Value                | Notes                    |
| ---------------------- | -------------------- | ------------------------ |
| `DATABASE_URL`         | Your PostgreSQL URL  | From Render DB           |
| `DJANGO_SECRET_KEY`    | Generated secure key | Keep secret!             |
| `DJANGO_DEBUG`         | False                | Never True in production |
| `DJANGO_ALLOWED_HOSTS` | Your Render domain   | Will be provided         |
| `CORS_ALLOWED_ORIGINS` | Vercel frontend URL  | Update in Phase 5        |

---

**Status**: Ready for Phase 4 Deployment
**Time Estimate**: 10-15 minutes
**Next**: Phase 5 - Deploy Frontend to Vercel
