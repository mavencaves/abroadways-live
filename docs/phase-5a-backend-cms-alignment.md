# Phase 5A - Backend / CMS Alignment Audit

## Scope
- Audit existing backend/admin systems already present
- Map public pages that are still static
- Identify the safest first public data wiring step
- Keep UI and backend redesign out of scope

## Backend Capability Map

### Auth
- Backend routes:
  - `POST /api/v1/auth/register`
  - `POST /api/v1/auth/login`
  - `GET /api/v1/auth/me`
- Files:
  - `backend/routes/authRoutes.js`
  - `backend/controllers/authController.js`
  - `backend/middleware/authMiddleware.js`
  - `backend/models/userModel.js`
- Status:
  - Email/password auth is active
  - OAuth helper exists in frontend, but backend social routes are disabled

### Admin users + dashboard
- Backend routes:
  - `GET /api/v1/admin/dashboard/overview`
  - `GET/POST /api/v1/admin/users`
  - `PUT/DELETE /api/v1/admin/users/:id`
- Files:
  - `backend/routes/adminRoutes.js`
  - `backend/controllers/adminController.js`
- Frontend consumers:
  - `src/pages/dashboard/admin/DashBoardOverview.tsx`
  - `src/pages/dashboard/admin/UsersPage.tsx`
- Status:
  - Functional API exists
  - Admin UI is API-backed
  - UI copy still contains Bangla/mojibake and should be cleaned later

### Blogs
- Backend routes:
  - `GET /api/v1/blogs`
  - `GET /api/v1/blogs/:id`
  - `POST /api/v1/blogs`
  - `PUT /api/v1/blogs/:id`
  - `DELETE /api/v1/blogs/:id`
- Files:
  - `backend/routes/blogRoutes.js`
  - `backend/controllers/blogController.js`
  - `backend/models/blogModel.js`
- Frontend admin consumer:
  - `src/pages/dashboard/admin/BlogsPage.tsx`
- Public status:
  - Public blog page is still static
  - Blog detail pages are not structured around backend blog ids yet
  - Blog is suitable for later wiring, but needs public listing/detail IA decisions

### Events
- Backend routes:
  - `GET /api/v1/events`
  - `GET /api/v1/events/:id`
  - `POST /api/v1/events`
  - `PUT /api/v1/events/:id`
  - `DELETE /api/v1/events/:id`
- Files:
  - `backend/routes/eventRoutes.js`
  - `backend/controllers/eventController.js`
  - `backend/models/eventModel.js`
- Frontend admin consumer:
  - `src/pages/dashboard/admin/EventsPage.tsx`
- Public status:
  - Public event surfaces existed but were mostly static
  - This is the safest first subsystem to wire because admin CRUD already works and the public event page can consume a simple list safely

### Event bookings
- Backend routes:
  - `POST /api/v1/event-bookings`
  - `GET /api/v1/event-bookings/:eventId`
- Files:
  - `backend/routes/eventBookingRoutes.js`
  - `backend/controllers/eventBookingController.js`
  - `backend/models/eventBookingModel.js`
- Status:
  - Create booking requires auth
  - No public guest booking flow is wired yet
  - Good candidate for a later lead/operations phase

### Courses
- Backend routes:
  - `POST /api/v1/courses`
  - `GET /api/v1/courses`
  - `POST /api/v1/courses/:id/lessons`
  - `GET /api/v1/courses/:courseId`
  - `GET /api/v1/courses/:courseId/lessons`
- Files:
  - `backend/routes/courseRoutes.js`
  - `backend/controllers/courseController.js`
  - `backend/models/courseModel.js`
  - `backend/models/enrollmentModel.js`
- Frontend status:
  - Admin courses page is still static/mock
  - Public `CoursesLandingPage` is static
  - Backend course system exists, but frontend is not aligned yet

### Exams
- Backend files exist:
  - `backend/routes/examRoutes.js`
  - `backend/controllers/examController.js`
  - `backend/models/examModel.js`
  - related question/session/result/report routes and models
- Public status:
  - Current exam content pages are content-driven, not backend-driven
  - Exam backend appears closer to a testing/practice engine than public CMS content

### About Us
- Backend routes:
  - `GET /api/v1/about-us`
  - `POST /api/v1/about-us`
  - `PUT /api/v1/about-us/:id`
- Files:
  - `backend/routes/aboutUsRoutes.js`
  - `backend/controllers/aboutUsController.js`
  - `backend/models/aboutUsModel.js`
- Public status:
  - Public About page is still hardcoded
  - Admin-side dedicated UI is not clearly implemented yet

### Banners
- Backend routes:
  - `GET /api/v1/banners`
  - `POST /api/v1/banners`
  - `PUT /api/v1/banners/:id`
  - `DELETE /api/v1/banners/:id`
- Files:
  - `backend/routes/adBannerRoutes.js`
  - `backend/controllers/adBannerController.js`
  - `backend/models/adBannerModel.js`
- Frontend status:
  - Admin ads page is currently mock/static
  - Public homepage/banner consumption is not wired

### Chat
- Backend routes:
  - `GET/POST /api/v1/chat/sessions`
  - `GET/PATCH/DELETE /api/v1/chat/sessions/:id`
  - `POST /api/v1/chat/sessions/:id/messages`
- Files:
  - `backend/routes/chatRoutes.js`
  - `backend/controllers/chatController.js`
  - `backend/models/chatModel.js`
  - `backend/models/sessionModel.js`
- Frontend status:
  - Public AbroadAI page already consumes chat APIs
  - Chat routes are protected, so guest users cannot use the live backend without signing in

## Frontend Admin -> Backend Mapping

### Already wired
- `BlogsPage` -> `blogsApi`
- `EventsPage` -> `eventsApi`
- `DashBoardOverview` -> `adminApi.getDashboardOverview`
- `UsersPage` -> `adminApi` user endpoints
- `MavenCaveAi.tsx` -> `chatApi`

### Present but not aligned
- `courses-page.tsx` is static/mock while real course APIs exist
- `AdsPage.tsx` is static/mock while banner APIs exist
- About Us has backend CRUD, but public page is static and admin editing UI is not clearly surfaced

## Public Static vs Backend Mismatches

### Public pages still static despite backend support
- `/blog` is static while blog CRUD exists
- `/event` was largely static while event CRUD exists
- `/about` is static while About Us CRUD exists
- banner-managed content is not surfaced publicly
- course pages are static while course APIs exist

### Auth mismatch
- Frontend exposes OAuth URL helpers
- Backend auth routes only support register/login/me

### Chat mismatch
- AbroadAI public page looks publicly accessible
- Chat API requires auth for every operation

## Safest First Wiring Decision
- Safest first subsystem: `Event`

### Why Event is safer than Blog right now
- Public event page only needs a simple list
- Admin event CRUD is already API-backed
- Event model is small and predictable
- Blog would benefit from a stronger public detail-page strategy before full wiring

## Phase 5A Implementation
- Wired the public event page to consume `/api/v1/events`
- Kept a safe local fallback event list so the public page still works when API data is unavailable or empty
- Did not alter backend logic

## Recommended Phase 5B

### Highest-value next steps
1. Wire public blog listing to `/api/v1/blogs` with graceful fallback
2. Decide blog detail strategy:
   - backend `_id` route
   - or public slug field addition
3. Clean admin-facing Bangla/mojibake in:
   - dashboard overview
   - users
   - blogs
   - events
   - ads
   - courses
4. Align About page with `/api/v1/about-us`
5. Replace mock ads admin with real banner CRUD
6. Replace mock courses admin with real course CRUD

## Deferred Intentionally
- No homepage visual redesign
- No navbar/footer work
- No Higher Education or Exams content changes
- No backend schema refactor
- No guest event-booking flow
- No auth/OAuth backend expansion
