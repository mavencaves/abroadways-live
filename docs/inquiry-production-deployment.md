# Inquiry Production Deployment

## Frontend

Set this environment variable in Vercel for the production frontend:

`VITE_API_BASE_URL=https://your-backend-domain.example.com`

Notes:

- The value must be the public backend origin only, without `/api/v1`
- Example: `https://api.abroadways.com.bd`
- Local development should continue to use `http://localhost:5000`

## Backend

Set these environment variables in the backend host:

- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `JWT_EXPIRE`
- `CORS_ORIGINS`

Recommended `CORS_ORIGINS` value:

`https://www.abroadways.com.bd,https://abroadways.com.bd`

Add preview or staging frontend domains to `CORS_ORIGINS` if those environments need live API access.

## Inquiry endpoint

The public inquiry forms submit to:

`POST /api/v1/inquiries`

This is used by:

- Homepage lead form
- Homepage consultation form
- Contact page form

## Important live-site blocker

The currently live `https://www.abroadways.com.bd` content still shows demo form copy, which indicates the production frontend is not yet updated to the newer inquiry-enabled build from this repo.

The live deployment must therefore include both:

1. A redeploy of the updated frontend build
2. A valid `VITE_API_BASE_URL` pointing to the real backend that serves `/api/v1/inquiries`
