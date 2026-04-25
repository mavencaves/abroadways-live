# Abroadways Launch Checklist

## Frontend deployment: Vercel

- Set `VITE_API_BASE_URL` to the public backend origin, for example `https://api.abroadways.com.bd`
- Redeploy the latest production branch after env updates
- Confirm SPA rewrites are active for:
  - `/`
  - `/abroadai`
  - `/login`
  - `/signup`
  - `/student/*`
  - `/dashboard/*`
- Verify the production `<head>` renders:
  - title
  - meta description
  - Open Graph tags
  - canonical URL
  - favicon

## Backend deployment: Render

- Set:
  - `NODE_ENV=production`
  - `PORT`
  - `MONGO_URI`
  - `JWT_SECRET`
  - `JWT_EXPIRE`
  - `CORS_ORIGINS=https://abroadways.com.bd,https://www.abroadways.com.bd`
  - `BACKEND_BASE_URL=https://api.abroadways.com.bd`
  - `FRONTEND_BASE_URL=https://www.abroadways.com.bd`
- Confirm Render is serving:
  - `/api/v1/auth/*`
  - `/api/v1/inquiries/*`
  - `/api/v1/student/*`
  - `/api/v1/appointments/*`
  - `/api/v1/service-orders/*`
  - `/api/v1/notifications/*`
  - `/api/v1/chat/*`

## MongoDB Atlas

- Confirm the production cluster is reachable from Render
- Add the Render outbound IP or allow the required network range
- Verify production database collections exist and are writable:
  - users
  - inquiries
  - studentprofiles
  - appointments
  - serviceorders
  - notifications
  - communicationlogs
  - chats
  - inquirytemplates
  - blogs
  - events

## Cloudinary

- Set:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
  - `CLOUDINARY_FOLDER=abroadways`
- Confirm uploads work for:
  - media library images
  - student documents
- Verify raw document URLs open publicly for PDF and document assets

## SMTP / email

- Set:
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `SMTP_FROM`
- Send live test emails for:
  - inquiry template email
  - appointment confirmed
  - document review outcome
  - payment success and failure

## SSLCommerz

- Set:
  - `SSLCOMMERZ_STORE_ID`
  - `SSLCOMMERZ_STORE_PASSWORD`
  - `SSLCOMMERZ_SANDBOX=false` for live launch
- Confirm callback URLs are registered exactly:
  - `https://api.abroadways.com.bd/api/v1/service-orders/payment/sslcommerz/success`
  - `https://api.abroadways.com.bd/api/v1/service-orders/payment/sslcommerz/fail`
  - `https://api.abroadways.com.bd/api/v1/service-orders/payment/sslcommerz/cancel`

## Gemini / AI

- Set:
  - `GEMINI_API_KEY`
- Verify:
  - `/abroadai` demo response works
  - `/student/abroadai` authenticated chat works
  - `/dashboard/ai` monitoring loads without API errors
- Confirm disclaimer is visible:
  - `AbroadAI provides guidance, not final visa or admission decisions.`

## Public launch QA

- Home page loads with no console-breaking errors
- Study abroad landing and region pages load
- Exams pages load
- Resources pages load
- Blog listing and blog detail pages load
- Event listing page loads from backend data
- About page loads from backend data or safe fallback
- Contact and inquiry forms submit successfully
- 404 page renders for unknown routes
- Unauthorized page renders for wrong-role protected routes

## Student portal QA

- Signup creates a `user` account and redirects into `/student/dashboard`
- Login persists `auth_token` and `auth_user`
- Profile save works
- Document upload works for:
  - image
  - PDF
  - allowed document files
- Appointment booking works without double booking
- Service request and payments flow work
- Notifications load and mark read
- AI history loads

## Admin dashboard QA

- Admin and content-manager can enter `/dashboard`
- Student users cannot enter `/dashboard`
- Inquiries CRM loads and updates:
  - status
  - notes
  - tasks
  - reminders
  - assignment
- Blogs CMS loads, creates, edits, deletes
- Events CMS loads, creates, edits, deletes
- Templates page loads and saves template changes
- Media library uploads and deletes assets
- Documents review page approves and rejects documents
- Orders and payments pages load live data
- Notifications page loads and marks items read

## Launch blockers to clear before DNS cutover

- Production backend domain confirmed
- Production frontend domain confirmed
- CORS matches both root and `www`
- SMTP live credentials validated
- SSLCommerz live credentials validated
- Cloudinary live credentials validated
- MongoDB Atlas network access validated
- Final smoke test complete on both `abroadways.com.bd` and `www.abroadways.com.bd`
