# Smart Air Cargo

Phase 1 implementation for a React frontend connected to a Django REST API and MySQL database.

This project currently pins Django `5.0.x` because the local database is MariaDB `10.4.x`.
Django `5.1+` requires MariaDB `10.5+`; upgrade MariaDB before moving the backend past Django 5.0.

## Project Structure

```text
backend/
  core/                 Django settings and URLs
  api/                  DRF serializers, views, routes
  apps/
    quotes/             Quote model and Django admin
    services/           Editable services
    site_settings/      Editable phone, address, hero/about content

frontend/
  src/
    api/axios.js
    components/
    pages/
```

The original static files remain at the repository root as a visual/content reference.

## Backend Setup

```powershell
cd backend
copy .env.example .env
.\.venv\Scripts\activate
```

Create the MySQL database:

```sql
CREATE DATABASE smart_air_cargo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Then run:

```powershell
python manage.py migrate
python manage.py createsuperuser
python manage.py seed_initial_content
python manage.py runserver
```

Admin panel:

```text
http://127.0.0.1:8000/admin/
```

API endpoints:

```text
GET    /api/health/
POST   /api/quotes/
GET    /api/quotes/          admin only
PATCH  /api/quotes/:id/      admin only, update status
GET    /api/services/
POST   /api/services/        admin only
PUT    /api/services/:id/    admin only
GET    /api/settings/
PUT    /api/settings/        admin only
```

## Frontend Setup

```powershell
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://127.0.0.1:5173/
```

Use `VITE_API_BASE_URL` if the backend runs somewhere else:

```powershell
$env:VITE_API_BASE_URL="http://127.0.0.1:8000/api"
npm run dev
```
