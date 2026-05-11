# Smart Air Cargo Services

## Project Overview

Smart Air Cargo Services (SACS) is an international freight forwarding platform connecting Bangladesh to 140+ global airports. The project consists of:

- **Frontend**: React 19 + Vite + Tailwind CSS
- **Backend**: Django 5.0 + Django REST Framework + MySQL
- **Deployment**: Render (cloud platform)

## Technology Stack

### Frontend

- **React 19** - Modern UI framework
- **Vite 6** - Fast build tool
- **React Router 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library (optional)

### Backend

- **Django 5.0** - Python web framework
- **Django REST Framework** - RESTful API development
- **MySQL/MariaDB** - Database (local) / PostgreSQL (production)
- **django-cors-headers** - Cross-origin resource sharing
- **python-dotenv** - Environment variable management

## Project Structure

```
smart-air-cargo/
├── backend/                    # Django REST API
│   ├── core/                   # Settings, URLs, ASGI/WSGI
│   ├── api/                    # API serializers, views, routes
│   ├── apps/
│   │   ├── quotes/            # Quote management
│   │   ├── services/          # Service management
│   │   └── site_settings/     # Dynamic site configuration
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env.example           # Environment template
│   └── Procfile               # Production server config
│
├── frontend/                   # React + Vite app
│   ├── src/
│   │   ├── pages/             # Page components (Home, Admin)
│   │   ├── api/               # Axios configuration
│   │   ├── home/              # Home page utilities
│   │   ├── App.jsx            # Root component
│   │   ├── main.jsx           # Entry point with routing
│   │   └── styles.css         # Global styles
│   ├── public/                # Static assets
│   ├── vite.config.js         # Vite configuration
│   ├── tailwind.config.js     # Tailwind configuration
│   ├── package.json
│   └── .env.production        # Production API URL
│
├── package.json               # Root project metadata
├── README.md                  # Project overview
├── render.yaml                # Render deployment config
└── .gitignore                 # Git ignore rules
```

## Getting Started

### Prerequisites

- **Python 3.9+** (for backend)
- **Node.js 18+** (for frontend)
- **MySQL 5.7+** or **MariaDB 10.4+** (for local database)
- **Git**

### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Create virtual environment**

   ```bash
   python -m venv .venv
   .\.venv\Scripts\activate  # Windows
   source .venv/bin/activate  # macOS/Linux
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment**

   ```bash
   copy .env.example .env  # Windows
   cp .env.example .env    # macOS/Linux
   # Edit .env with your local database credentials
   ```

5. **Create database**

   ```sql
   CREATE DATABASE smart_air_cargo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

6. **Run migrations**

   ```bash
   python manage.py migrate
   ```

7. **Create superuser**

   ```bash
   python manage.py createsuperuser
   ```

8. **Load initial data**

   ```bash
   python manage.py seed_initial_content
   ```

9. **Start development server**
   ```bash
   python manage.py runserver
   # Server runs on http://127.0.0.1:8000
   ```

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # App runs on http://127.0.0.1:5173
   ```

4. **Build for production**
   ```bash
   npm run build
   # Output in dist/ directory
   ```

## API Routes

### Available Endpoints

#### Quotes

- `GET /api/quotes/` - List all quotes (admin only)
- `POST /api/quotes/` - Create new quote (public)
- `PATCH /api/quotes/{id}/` - Update quote status (admin only)

#### Services

- `GET /api/services/` - List all services (public)
- `POST /api/services/` - Create service (admin only)
- `GET /api/services/{id}/` - Get service details (public)
- `PUT /api/services/{id}/` - Update service (admin only)
- `DELETE /api/services/{id}/` - Delete service (admin only)

#### Site Settings

- `GET /api/settings/` - Get all site settings (public)
- `POST /api/settings/` - Create setting (admin only)
- `PUT /api/settings/{key}/` - Update setting (admin only)

#### Health Check

- `GET /api/health/` - API health status (public)

### API Base URL

**Development**: `http://127.0.0.1:8000/api`
**Production**: Set `VITE_API_URL` in `.env.production`

## Frontend Components

### Pages

#### Home Component (`src/pages/Home.jsx`)

The main landing page with the following sections:

- **HeroSection** - Main headline and CTA buttons
- **TickerSection** - Scrolling service marquee
- **ServicesSection** - Core services with cards
- **FooterSection** - Company info, links, and contact details

**Key Features:**

- Professional React component structure
- Reusable sub-components (ServiceCard, SocialLink)
- Data-driven rendering with `.map()`
- Proper event handling and accessibility attributes

#### Admin Component (`src/pages/Admin.jsx`)

Dashboard for viewing quote requests from the backend API.

### Routing

Routes are defined in `src/main.jsx`:

- `/` - Home page
- `/admin` - Admin dashboard

## Environment Variables

### Frontend (.env files)

**Development** (`.env.local`):

```
VITE_API_URL=http://localhost:8000
```

**Production** (`.env.production`):

```
VITE_API_URL=https://api.smartaircargo.net
```

### Backend (.env file)

```
# Django Settings
DJANGO_SECRET_KEY=your-secret-key-here
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# Database Configuration
DB_NAME=smart_air_cargo
DB_USER=root
DB_PASSWORD=your-password
DB_HOST=127.0.0.1
DB_PORT=3306

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# Email Configuration
DEFAULT_FROM_EMAIL=info@smartaircargo.net
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_HOST_USER=info@smartaircargo.net
EMAIL_HOST_PASSWORD=your-email-password
EMAIL_USE_TLS=True
```

## Coding Standards

### Frontend

**Component Structure**:

```jsx
/**
 * ComponentName Component
 * Description of what this component does
 */
function ComponentName({ prop1, prop2 }) {
  // Logic here

  return (
    // JSX here
  );
}

export default ComponentName;
```

**Naming Conventions**:

- Components: PascalCase (e.g., `HeroSection`, `ServiceCard`)
- Functions/variables: camelCase (e.g., `smoothScroll`, `getQuotePayload`)
- CSS classes: kebab-case (e.g., `hero-title`, `service-card`)

**Best Practices**:

- Use functional components with hooks
- Avoid `dangerouslySetInnerHTML` (use safe JSX)
- Add `aria-label` and `role` attributes for accessibility
- Use `onClick` instead of `onclick`
- Use `className` instead of `class`
- Keep components focused and single-responsibility

### Backend

**Models**:

- Use descriptive field names
- Add `help_text` and `verbose_name` for admin readability
- Include `created_at`, `updated_at` timestamps where appropriate
- Add `__str__()` method for readable object representation

**Views**:

- Separate serializer classes for different actions
- Use appropriate permission classes
- Add docstrings to view methods
- Handle errors gracefully with proper HTTP status codes

**Serializers**:

- Validate data thoroughly
- Use nested serializers for relationships
- Add custom validation methods as needed

## Testing & Quality Assurance

### Frontend

- Run ESLint for code quality (when configured)
- Test components in different browsers
- Verify responsive design on all breakpoints
- Test API integration in Admin dashboard

### Backend

- Run Django tests: `python manage.py test`
- Check database migrations work correctly
- Test API endpoints with curl or Postman
- Verify email notifications are sent

## Deployment

### Render Deployment (Recommended)

The project is configured for Render using `render.yaml`:

1. **Frontend**: Static site on Render
2. **Backend**: Web service on Render with PostgreSQL database

**Key Configuration**:

- Backend buildCommand: `pip install -r requirements.txt && python manage.py migrate && python manage.py createsuperuser`
- Frontend buildCommand: `cd frontend && npm install && npm run build`

See `render.yaml` for detailed configuration.

## Troubleshooting

### Common Issues

**API Connection Error**

- Ensure backend is running on `http://127.0.0.1:8000`
- Check CORS settings in `backend/.env`
- Verify `VITE_API_URL` in frontend `.env.local`

**Database Connection Error**

- Verify MySQL/MariaDB is running
- Check database credentials in `.env`
- Ensure database is created: `CREATE DATABASE smart_air_cargo;`

**Node Modules Issues**

- Clear cache: `npm cache clean --force`
- Delete `node_modules`: `rm -rf frontend/node_modules`
- Reinstall: `cd frontend && npm install`

**Python Virtual Environment Issues**

- Delete venv: `rm -rf backend/.venv`
- Recreate: `python -m venv backend/.venv`
- Reactivate and reinstall dependencies

## Contributing

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make changes following coding standards
3. Test thoroughly before committing
4. Write clear commit messages
5. Create a pull request with description

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Django Documentation](https://docs.djangoproject.com)
- [Django REST Framework](https://www.django-rest-framework.org)
- [Tailwind CSS](https://tailwindcss.com)

## License

PROPRIETARY - All rights reserved by Smart Air Cargo Services

---

**Last Updated**: May 2026  
**Maintainer**: Smart Air Cargo Services Team
