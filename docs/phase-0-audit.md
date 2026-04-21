# Abroadways Phase 0 Audit

Date: 2026-04-19  
Workspace: `C:\Users\HP\Documents\Codex\2026-04-19-you-are-working-on-the-abroadways`

This document is a Phase 0 audit only. No homepage redesign, no broad rebrand pass, no footer work, and no structural refactor were performed as part of this phase. The only deliverable is this audit and planning document.

## SECTION 1 - REPO STRUCTURE

### Top-level folders

- `.github/`
- `Backend/`
- `dist/`
- `node_modules/`
- `public/`
- `src/`

### Frontend structure

- Entry: `src/main.tsx`
- App router: `src/App.tsx`
- Shared layouts:
  - `src/layout/PublicLayout.tsx`
  - `src/layout/AuthLayout.tsx`
  - `src/layout/IeltsBlogLayout.tsx`
  - `src/layout/AdminDashboardLayout.tsx`
  - `src/layout/TopUniversities.tsx`
  - `src/layout/MastersTopCourses.tsx`
  - `src/layout/UniversityLayout.tsx`
- Pages:
  - `src/pages/*`
  - grouped exam pages in `src/pages/IELTS`, `src/pages/GRE`, `src/pages/SAT`
  - grouped university detail pages in `src/pages/Universities`
- Shared components:
  - `src/components/*`
  - large content subsystems live under nested folders like `src/components/ielts`, `src/components/gre`, `src/components/universities`, `src/components/exams`, `src/components/TOEFL_pages`, `src/components/GMAT`, `src/components/Duolingo`
- Data/content sources:
  - `src/data/*`
  - `src/BlogData/*`

### Backend structure

- Server entry: `Backend/server.js`
- Database: `Backend/lib/db.js`
- Config:
  - `Backend/config/passport-setup.js`
- Controllers:
  - auth, admin, admin panel, blogs, events, event booking, chat, courses, exams, questions, sessions, results, reports, banners, about-us
- Models:
  - user, blog, event, eventBooking, chat, course, exam, question, session, result, aboutUs, adBanner, enrollment
- Middleware:
  - auth, role restriction, error handling, subscription middleware
- Routes:
  - `authRoutes.js`
  - `adminRoutes.js`
  - `adminPanelRoutes.js`
  - `blogRoutes.js`
  - `eventRoutes.js`
  - `eventBookingRoutes.js`
  - `chatRoutes.js`
  - `courseRoutes.js`
  - `examRoutes.js`
  - `questionRoutes.js`
  - `sessionRoutes.js`
  - `resultRoutes.js`
  - `reportRoutes.js`
  - `aboutUsRoutes.js`
  - `adBannerRoutes.js`

### Routing structure

- Frontend router uses `react-router`
- Public site is wrapped by `PublicLayout`
- Auth pages are wrapped by `AuthLayout`
- IELTS and most exam/article pages use `IeltsBlogLayout`
- Admin area is wrapped by `ProtectedRoute` and `AdminDashboardLayout`

### Styling system used

- Vite + React + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- shadcn/ui style setup via `components.json`
- CSS variables defined in `src/index.css`
- Alias `@` points to `src`
- Current global theme direction is blue/premium-oriented, but many inner pages still use older purple/gray styles or one-off styling

### Content/data source patterns

- Static TS arrays and JSON are heavily used for user-facing content:
  - `src/data/universities.ts`
  - `src/data/masters.ts`
  - `src/data/navigation.ts`
  - `src/data/studyGuides.ts`
  - `src/data/blog-posts.ts`
  - `src/data/blogDetails.ts`
  - `src/BlogData/*.json`
- Many components also keep content inline inside component files
- API-backed frontend areas are partial rather than site-wide:
  - auth
  - admin users
  - admin blogs
  - admin events
  - chat/AI sessions
  - public events feed component exists but is not the current public event page

## SECTION 2 - PAGE + ROUTE MAP

### Route count summary

- Public route entries in `src/App.tsx`: 102
- Admin route entries in `src/App.tsx`: 11
- Total route entries: 113

Notes:

- This count is based on route declarations in `src/App.tsx`
- It includes aliases and deep content routes
- It does not mean 113 unique UX-ready pages; some are legacy aliases, some are wrappers, and some are partially inconsistent

### Primary public navigation routes

| Route | Current page/component | Current role |
|---|---|---|
| `/` | `HomePage` | Premium blue homepage with partial redesign already in place |
| `/higher-education` | `HigherEducationPage` | Higher education overview landing page |
| `/blog` | `BlogPage` | Static featured article landing page, not backend-driven |
| `/event` | `EventPage` | Static event landing page with coming-soon orientation |
| `/resources` | `ResourcesPage` | Resource hub with links to calculators, SOP, AbroadAI, exam guides |
| `/about` | `AboutPage` | About/company page |
| `/contact` | `ContactPage` | Contact page with static enquiry form |

### Higher Education routes

#### Higher education landing and dynamic listing routes

- `/higher-education`
  - Higher education overview
- `/study-abroad/:country/cities/:city`
  - Dynamic university listing by country + city via `TopUniversities`
- `/study-abroad/:country/courses/:course`
  - Dynamic top-course listing via `MastersTopCourses`

#### USA university detail routes

- `/study-abroad/usa/universities/harvard-university`
- `/study-abroad/usa/universities/stanford-university`
- `/study-abroad/usa/universities/yale-university`
- `/study-abroad/usa/universities/columbia-university`
- `/study-abroad/usa/universities/mit`

#### UK university detail routes

- `/study-abroad/uk/universities/oxford-university`
- `/study-abroad/uk/universities/cambridge-university`
- `/study-abroad/uk/universities/manchester-university`
- `/study-abroad/uk/universities/edinburgh-university`
- `/study-abroad/uk/universities/kings-college-london`
- `/study-abroad/uk/universities/imperial-college-london`

#### Canada university detail routes

- `/study-abroad/canada/universities/ubc`
- `/study-abroad/canada/universities/mcgill-university`
- `/study-abroad/canada/universities/university-of-alberta`
- `/study-abroad/canada/universities/university-of-montreal`
- `/study-abroad/canada/universities/university-of-ottawa`
- `/study-abroad/canada/universities/university-of-toronto`

#### Australia university detail routes

- `/study-abroad/australia/universities/macquarie-university`
- `/study-abroad/australia/universities/monash-university`
- `/study-abroad/australia/universities/university-of-sydney`
- `/study-abroad/australia/universities/university-of-melbourne`
- `/study-abroad/australia/universities/uq`

#### Current higher education behavior

- Overview page is mostly static and uses current blue brand direction
- Dynamic listing pages use local data arrays and shared cards/filters
- University detail pages are static content pages, many still in Bangla
- Navigation exposes countries and courses, but a lot of dropdown items route back to overview or to dynamic pages rather than dedicated country hubs

### Exam routes

#### Exam hub

- `/exams/overview`

#### IELTS

- `/exams/ielts/overview`
- `/exams/ielts/types`
- `/exams/ielts/eligibility`
- `/exams/ielts/registration`
- `/exams/ielts/results`
- `/exams/ielts/syllabus`
- `/exams/ielts/slot-booking`
- `/exams/ielts/dates`
- `/exams/ielts/fees`
- `/exams/ielts/centers`
- `/exams/ielts/practice/listening`
- `/exams/ielts/practice/reading`
- `/exams/ielts/practice/speaking`
- `/exams/ielts/practice/writing`
- `/exams/ielts/practice/all-in-one`

#### TOEFL

- `/exams/toefl/overview`
- `/exams/toefl/registration`
- `/exams/toefl/syllabus`
- `/exams/toefl/preparation`
- `/exams/toefl/result`

#### GRE

- `/exams/gre/overview`
- `/exams/gre/registration`
- `/exams/gre/syllabus`
- `/exams/gre/slot-booking`
- `/exams/gre/preparation`

#### PTE

- `/exams/pte/overview`

#### GMAT

- `/exams/gmat/overview`
- `/exams/gmat/preparation`
- `/exams/gmat/registration`
- `/exams/gmat/sample-question`
- `/exams/gmat/syllabus`

#### SAT

- `/exams/sat/preparation`
- `/exams/sat/eligibility`
- `/exams/sat/registration`
- `/exams/sat/syllabus`

#### Duolingo

- `/exams/duolingo/fees`
- `/exams/duolingo/preparation`
- `/exams/duolingo/sample`
- `/exams/duolingo/syllabus`

#### Current exam behavior

- Exam overview is relatively modernized
- Many deep exam pages still use Bangla copy, off-brand layouts, and stale internal link patterns
- Several exam pages still use old breadcrumb paths like `/study-abroad/exams/...` even though actual routes are `/exams/...`

### Resources, tools, and content routes

- `/resources/sop`
- `/resources/sop/phd`
- `/resources/eligibility`
- `/resources/books/ielts`
- `/resources/books/gre`
- `/resources/books/pte`
- `/resources/recommendation-letter/masters`
- `/visa-predictor`
- `/calculator/cost`
- `/calculator/cgpa`
- `/knowledge-center`
- `/ielts-resources`

Current behavior:

- Top-level `ResourcesPage` is modernized
- Deep resources vary widely in language and quality
- Some pages are premium-ready, others are legacy and Bangla-heavy

### AI-related routes

- `/abroadai`
- `/abroadways-ai`
- `/mavencave-ai`

All three routes currently render `src/pages/MavenCaveAi.tsx`.

Current behavior:

- Public AI page UI is branded as AbroadAI at the visible level
- File/component naming is still legacy
- Backend chat sessions require authentication
- The page is publicly reachable, so anonymous users can hit a 401-driven degraded experience immediately

### Auth routes

- `/login`
- `/signup`

Current behavior:

- Frontend auth exists
- Login/register use `authApi`
- UI still contains Bangla and older purple styling
- Google/Facebook buttons are present in frontend, but backend auth routes currently expose only register/login/me

### Other public routes

- `/about`
- `/contact`
- `/careers`
- `/bookseat`
- `/counsellor-home`
- `/counsellor-modal`
- `/counsellor-referral`
- `/testimonials/counseling`
- `/products/facilities`
- `/products/finance`
- `/mavencave-freeClass`
- `/mavencave-digest`
- `/offers/ielts-masterclass`
- `/privacy-policy`
- `/terms`
- `/refund-policy`

Current behavior:

- Several of these are legacy marketing or promotional routes that still reflect Maven-era IA
- Some are likely candidates for consolidation in later phases, but should not be removed without redirects and nav review

### Admin/dashboard routes

- `/admin/dashboard`
- `/admin/dashboard/users`
- `/admin/dashboard/blogs`
- `/admin/dashboard/events`
- `/admin/dashboard/ads`
- `/admin/dashboard/ai-query`
- `/admin/dashboard/courses`
- `/admin/dashboard/settings`
- `/admin/dashboard/general`
- `/admin/dashboard/integration`

Current behavior:

- Admin shell exists and is routed
- Frontend allows `admin`, `content-manager`, and `course-manager` into the admin area
- Backend permissions differ by endpoint, so not every admin page is equally usable for non-admin roles

## SECTION 3 - COMPONENT MAP

### Site-wide shell

- `src/components/navbar.tsx`
  - Main nav, multi-level dropdowns, mobile sheet, auth-aware CTA/account button
- `src/components/footer.tsx`
  - Dense premium footer, trust badge, discovery columns, social/contact/CTA blocks
- `src/layout/PublicLayout.tsx`
  - Wraps all public pages with navbar and footer

### Homepage system

- `src/pages/HomePage.tsx`
  - Assembles the homepage using shared blocks
- `src/components/hero.tsx`
  - Main hero, trust badge, primary CTAs, AI teaser panel
- `src/components/services.tsx`
  - Service cards
- `src/components/why-abroadways.tsx`
  - Trust and value proposition grid
- `src/components/stats.tsx`
  - Numeric proof / destination support block
- `src/components/classes-section.tsx`
  - Consultation booking style section
- `src/components/whatsapp-cta.tsx`
  - WhatsApp prompt
- `src/components/lead-form.tsx`
  - Frontend-only callback lead form
- `src/components/experts.tsx`
  - Advisor/team proof
- `src/components/guides.tsx`
  - Guide/resource cards
- `src/components/success-stories.tsx`
  - Testimonials/success content
- `src/components/faq.tsx`
  - FAQ section
- `src/components/cta.tsx`
  - Final CTA section

### Higher Education shared system

- `src/pages/HigherEducationPage.tsx`
  - Higher education overview
- `src/layout/TopUniversities.tsx`
  - Dynamic city/country university listing
- `src/layout/MastersTopCourses.tsx`
  - Dynamic course listing
- `src/layout/UniversityLayout.tsx`
  - Shared wrapper for university detail pages
- `src/components/usa-masters/SearchStats.tsx`
  - Listing result stats
- `src/components/usa-masters/UniversityCard.tsx`
  - Shared university card
- `src/components/usa-masters/FilterSidebar.tsx`
  - Listing filters
- `src/components/MastersFilterSidebar.tsx`
  - Course listing filters
- `src/components/usa-masters/ExploreCoursesSection.tsx`
  - Related course exploration block
- `src/components/usa-masters/StudyOptionsAccordion.tsx`
  - Study options accordion
- `src/components/universities/*`
  - Shared university detail blocks and content sections

### Exams/shared content system

- `src/pages/Exams.tsx`
  - Exams overview page
- `src/components/exams/*`
  - Exam hero, stats, cards, grid, testimonials, schedules
- `src/layout/IeltsBlogLayout.tsx`
  - Wrapper for many IELTS and exam-related content pages
- `src/components/ielts/*`
  - Huge content system for IELTS detail pages
- `src/components/gre/*`
  - GRE detail content
- `src/components/pte/*`
  - PTE detail content
- `src/components/toefl/*`
  - TOEFL detail content
- `src/components/SAT/*`
  - SAT detail content
- `src/components/GMAT/*`
  - GMAT detail content
- `src/components/Duolingo/*`
  - Duolingo detail content

### Resources/forms/tools

- `src/pages/ResourcesPage.tsx`
  - Resource hub landing
- `src/pages/SOP.tsx`, `src/pages/SOPPhD.tsx`, `src/pages/LorMasters.tsx`
  - Resource/article style pages
- `src/pages/VisaPredictor.tsx`
  - Tool/feature surface
- `src/pages/CGPACalculatorPage.tsx`
  - Calculator
- `src/pages/CostPage.tsx`
  - Cost planning page
- `src/pages/Elegibility/*`
  - Eligibility checker flow

### Admin/shared management system

- `src/layout/AdminDashboardLayout.tsx`
  - Admin shell
- `src/components/app-sidebar.tsx`
  - Admin navigation
- `src/components/site-header.tsx`
  - Admin header
- `src/pages/dashboard/admin/*`
  - Users, blogs, events, settings, general, integration, overview, courses
- `src/components/ads-admin dashboard/AdsPage.tsx`
  - Ad/banner admin page
- `src/components/Ai_Queries-admin dashboard/AiQueriesPage.tsx`
  - AI queries admin surface

## SECTION 4 - CONTENT / BRAND AUDIT

### Bangla scan summary

- Files containing Bengali characters: 304
- Frontend files containing Bengali characters: 302
- Backend files containing Bengali characters: 2

Important note:

- Not every occurrence is necessarily visible UI; some are comments or sample data
- However, a very large portion of these are clearly user-facing pages, labels, breadcrumbs, cards, JSON content, or admin UI strings

### Bangla-heavy areas by subsystem

#### Higher Education

- `src/data/universities.ts`
- `src/data/masters.ts`
- `src/pages/HarvardReact.tsx`
- most files in `src/pages/Universities/*`
- multiple files in `src/components/universities/*`

Current issue:

- Higher Education is the single largest risk area for content inconsistency because overview/list pages are partly modernized but deep university pages still contain large Bangla content blocks

#### Exams

- `src/pages/GREPage.tsx`
- `src/pages/PTEPage.tsx`
- `src/pages/TOEFLPage.tsx`
- most files in:
  - `src/pages/IELTS/*`
  - `src/pages/GRE/*`
  - `src/pages/SAT/*`
  - `src/components/ielts/*`
  - `src/components/gre/*`
  - `src/components/pte/*`
  - `src/components/toefl/*`
  - `src/components/SAT/*`
  - `src/components/GMAT/*`
  - `src/components/Duolingo/*`
  - `src/components/gre_books/*`
  - `src/components/pte_books/*`

Current issue:

- Exams have route coverage and content depth, but the language layer is still very mixed and often tied to wrong breadcrumb paths or older design patterns

#### Resources and article-style content

- `src/pages/LorMasters.tsx`
- `src/pages/SOPPhD.tsx`
- `src/pages/CGPACalculatorPage.tsx`
- `src/pages/CostPage.tsx`
- `src/components/lor-masters/*`
- `src/components/sop/*`
- `src/components/sop/phd/*`
- `src/data/blogDetails.ts`
- `src/data/blog-posts.ts`
- `src/BlogData/*.json`

#### Auth and admin UI

- `src/pages/LoginPage.tsx`
- `src/pages/SignUpPage.tsx`
- several files in `src/pages/dashboard/admin/*`
- `src/components/app-sidebar.tsx`
- `src/components/Ai_Queries-admin dashboard/AiQueriesPage.tsx`
- `src/components/ads-admin dashboard/AdsPage.tsx`

#### Misc legacy/marketing surfaces

- `src/components/MavencaveFreeClass/*`
- `src/components/MavencaveAdvantage/*`
- `src/pages/Careers.tsx`
- `src/pages/DigestPage.tsx`
- `src/components/digest/*`
- `src/components/CounselorPage/*`
- `src/components/KnoledgeCenter/*`

### Legacy branding scan summary

- Files containing `Maven`, `Mavencave`, `MavenCave`, or `mavencave`: 10

#### Explicit legacy branding file list

- `Backend/package.json`
- `Backend/package-lock.json`
- `src/App.tsx`
- `src/pages/index.tsx`
- `src/pages/MavenCaveAi.tsx`
- `src/pages/FinancePage.tsx`
- `src/components/finance/MavencaveFinanceSection.tsx`
- `src/components/MavencaveAdvantage/MavencaveAdvantage.tsx`
- `src/components/MavencaveFreeClass/MavencaveFreeClass.tsx`
- `src/components/MavencaveFreeClass/FirstPart.tsx`

### Pages/components with weak or inconsistent English

- `src/pages/LoginPage.tsx`
- `src/pages/SignUpPage.tsx`
- large parts of exam pages where English and Bangla are mixed
- older university detail pages where headings, stats, labels, and long-form copy are inconsistent
- older resource/article pages that mix premium English headlines with Bangla body copy or legacy widgets

### Pages/components that still feel off-brand

- Auth pages still look purple/legacy instead of premium blue Abroadways
- Deep exam pages are inconsistent in typography, breadcrumbs, spacing, and CTA quality
- Many university detail pages use older visual patterns that do not match current blue premium direction
- Legacy marketing pages such as finance, free class, digest, and product pages still reflect Maven-era IA

## SECTION 5 - FUNCTIONAL AUDIT

### Existing functional systems present

#### Authentication

- Frontend:
  - `src/hooks/useAuth.tsx`
  - `src/components/ProtectedRoute.tsx`
  - `/login`
  - `/signup`
- Backend:
  - `/api/v1/auth/register`
  - `/api/v1/auth/login`
  - `/api/v1/auth/me`
- Storage:
  - JWT stored in `localStorage` as `auth_token`

#### Role-based admin/backend

- Frontend protected admin area exists
- Backend supports role restriction via middleware
- Roles observed:
  - `admin`
  - `content-manager`
  - `course-manager`
  - `user`

#### Blogs CRUD

- Backend API exists:
  - `/api/v1/blogs`
- Frontend admin page exists:
  - `src/pages/dashboard/admin/BlogsPage.tsx`

Current mismatch:

- Public blog page is static and not wired to backend blog CRUD

#### Events CRUD

- Backend API exists:
  - `/api/v1/events`
  - `/api/v1/event-bookings`
- Frontend admin page exists:
  - `src/pages/dashboard/admin/EventsPage.tsx`
- Public event API consumer exists:
  - `src/components/EventPage/UpcomingEvent.tsx`

Current mismatch:

- The current public `/event` page uses static content and `ComingSoonSection`, not the API-driven event listing component

#### AI / chat

- Frontend chat page exists:
  - `src/pages/MavenCaveAi.tsx`
- Frontend API client exists:
  - `chatApi` in `src/lib/api.ts`
- Backend protected chat API exists:
  - `/api/v1/chat/sessions`
  - `/api/v1/chat/sessions/:id`
  - `/api/v1/chat/sessions/:id/messages`
- Backend persistence:
  - `Backend/models/chatModel.js`
- Model provider:
  - Google Gemini via `Backend/controllers/chatController.js`

Current state:

- This is partially functional, not just a mock UI
- It requires auth
- It uses Gemini API env configuration

#### Courses / exam backend

- Backend route families exist:
  - `/api/v1/courses`
  - `/api/v1/exams`
  - `/api/v1/questions`
  - `/api/v1/sessions`
  - `/api/v1/results`
  - `/api/v1/reports`

Current state:

- These suggest training/mock-exam/course infrastructure
- Frontend integration is limited or admin-oriented in the current site
- This likely relates to prior coaching/course product functionality

#### About us / banners / admin panel APIs

- Backend APIs exist:
  - `/api/v1/about-us`
  - `/api/v1/banners`
  - `/api/v1/admin-panel`

Current state:

- These appear largely unused by the current public frontend

### Missing or partial systems

#### Lead forms

- Contact form is static
- Homepage lead form is static
- Consultation request UI exists, but no active API integration is present in the main public forms

#### Upload/media system

- No clear site-wide media upload pipeline is wired in the frontend
- Some file/audio upload experiments exist in isolated pages like IELTS speaking
- No dedicated storage pipeline such as Cloudinary/S3/multer is visible in the backend audit

#### OAuth

- Frontend login/signup exposes Google and Facebook buttons
- Backend auth routes currently only define register/login/me
- `getOAuthUrl("google")` and `getOAuthUrl("facebook")` will point to routes that are not mounted

This is a real functional inconsistency, not just a copy issue.

## SECTION 6 - HIGHER EDUCATION AUDIT

### Pages that belong to Higher Education

- `src/pages/HigherEducationPage.tsx`
- `src/layout/TopUniversities.tsx`
- `src/layout/MastersTopCourses.tsx`
- `src/layout/UniversityLayout.tsx`
- `src/pages/Universities/*`
- `src/components/universities/*`
- `src/components/usa-masters/*`
- `src/components/MastersFilterSidebar.tsx`
- `src/data/universities.ts`
- `src/data/masters.ts`
- `src/lib/higher-education.ts`

### How it is structured now

- One overview page at `/higher-education`
- Dynamic city-based listing route
- Dynamic course-based listing route
- Many static university detail pages
- Navigation dropdown acts as the main entry layer for countries/universities/courses

### Content types present

- Higher education overview
- Destination highlights
- City-based university listings
- Course-based program listings
- University detail pages
- Ranking snippets
- intake/admission blocks
- eligibility blocks
- top courses blocks
- FAQ blocks

### What is reusable

- Listing shells
- University card system
- filter sidebars
- shared university layout
- shared university header/tabs/sidebar
- local structured data arrays

### What is missing

- Dedicated country landing pages for UK, Canada, Australia, Europe, USA
- Dedicated Europe country sub-pages
- A consistent scholarship layer within higher education
- A consistent CTA system across every university page
- Complete English normalization across deep university content

### Current subsystem state

- Overview and listing layers are salvageable
- Shared component structure is reusable
- Deep university content still needs a large translation + content cleanup pass
- Higher Education should be treated as a subsystem in later phases, not edited one file at a time without shared standards

## SECTION 7 - EXAMS + RESOURCES AUDIT

### Exam pages identified

- `src/pages/Exams.tsx`
- IELTS pages under `src/pages/IELTS/*`
- GRE pages under `src/pages/GRE/*`
- SAT pages under `src/pages/SAT/*`
- `src/pages/PTEPage.tsx`
- `src/pages/TOEFLPage.tsx`
- `src/pages/GREPage.tsx`
- GMAT and Duolingo page wrappers/components under `src/components/*`

### Resource pages identified

- `src/pages/ResourcesPage.tsx`
- `src/pages/SOP.tsx`
- `src/pages/SOPPhD.tsx`
- `src/pages/LorMasters.tsx`
- `src/pages/VisaPredictor.tsx`
- `src/pages/CGPACalculatorPage.tsx`
- `src/pages/CostPage.tsx`
- `src/pages/Elegibility/*`
- `src/components/gre_books/GreBooks.tsx`
- `src/components/pte_books/PteBooks.tsx`

### What is in Bangla

- Large portions of exam bodies, labels, breadcrumbs, sidebars, and article/support blocks
- Many resource/article pages and JSON content
- Several admin strings and auth labels

### What still uses old branding

- AI/product route aliases
- finance/product/free-class/digest legacy surfaces
- some deep content still references Mavencave or legacy product naming

### What is salvageable

- Exam route coverage
- Exams overview shell
- Shared UI primitives
- Many page wrappers/layout shells
- Resource hub landing page
- SOP/eligibility/calculator/product surfaces as concepts

### What needs redesign or full cleanup later

- Deep exam copy and breadcrumb system
- Broken path references to `/study-abroad/exams/...`
- Bangla-heavy exam/resource long-form pages
- Legacy product/marketing pages that do not align with Abroadways IA

## SECTION 8 - AI / ABROADAI AUDIT

### Where Mavencave AI currently exists

- Main page file:
  - `src/pages/MavenCaveAi.tsx`
- Export barrel:
  - `src/pages/index.tsx`
- App route usage:
  - `src/App.tsx`

### Related code/components/routes

- Public routes:
  - `/abroadai`
  - `/abroadways-ai`
  - `/mavencave-ai`
- Frontend API client:
  - `chatApi` in `src/lib/api.ts`
- Backend:
  - `Backend/routes/chatRoutes.js`
  - `Backend/controllers/chatController.js`
  - `Backend/models/chatModel.js`

### Current implementation status

- Frontend is real, not just a placeholder
- Backend is real, not just mocked
- Chat history is persisted per authenticated user
- Gemini integration is implemented with retry logic

### Current issues

- File naming is still legacy (`MavenCaveAi.tsx`)
- Public page and private backend requirements are mismatched
- Anonymous users are not cleanly handled
- The AI feature is functional enough to preserve, but it should be repurposed carefully rather than rebuilt from scratch

### Later-phase repurposing guidance

- Keep the backend chat/session foundation
- Rebrand UI and naming to AbroadAI
- Add guest-safe gating or sign-in-aware UX
- Keep existing routes as aliases if needed, but make `/abroadai` the canonical route

## SECTION 9 - RISKS

### File rename risks

- Files such as `MavenCaveAi.tsx`, `MavencaveAdvantage`, `MavencaveFreeClass`, and finance components still carry legacy names in imports and barrels
- Safe visible-text cleanup is easy
- Safe file renaming requires coordinated import updates and route review

### Route dependency risks

- Many internal links and breadcrumbs still reference old path patterns like `/study-abroad/exams/...`
- Removing legacy routes too early could break hidden links, cards, or dropdown entries
- AI route aliases should not be removed before a canonical redirect strategy is set

### Shared component risks

- `navbar.tsx`, `footer.tsx`, `cta.tsx`, `IeltsBlogLayout.tsx`, and `UniversityLayout.tsx` influence many pages at once
- Aggressive edits there can create repo-wide regressions quickly

### Backend coupling risks

- Public admin assumptions do not always match backend permissions
- Frontend OAuth buttons are ahead of backend routing
- AI frontend depends on protected backend chat
- Events/blog admin exists, but public pages are not consistently consuming those APIs

### Content structure risks

- Higher Education and Exams contain very large hardcoded content surfaces
- Content is not centrally managed; much of it lives inline in components
- Broad automated translation or brand replace across these files could easily break formatting, JSX, breadcrumb data, or structured lists

### Specific high-risk inconsistencies already identified

- Public blog page is static while admin blog CRUD exists
- Public event page is static while API-backed events/admin events exist
- OAuth buttons likely point to missing routes
- Content-manager/course-manager can enter admin shell, but some backend admin endpoints are admin-only
- A large set of exam/resource breadcrumbs and support links target non-existent `/study-abroad/exams/...` pages

## SECTION 10 - FINAL TARGET IA (PROPOSED, NOT IMPLEMENTED)

### Recommended primary IA

- Home
- Higher Education
- Blog
- Event
- Resources
- About Us
- Contact
- AbroadAI

### Recommended placement for Exams

Recommended:

- Keep exams as a major subsystem under `Resources` in navigation, with strong entry points from:
  - homepage
  - footer
  - Higher Education pages
  - AbroadAI prompts

Reason:

- The final requested top nav is already crowded
- Exams are highly valuable for SEO and conversion, but they work best as a content and preparation subsystem rather than a top-nav competitor to the main consultancy journey
- Existing `/exams/*` routes should remain for SEO and deep-link continuity even if the nav label moves under `Resources`

Suggested IA detail:

- Higher Education
  - Overview
  - Study in UK
  - Study in Canada
  - Study in Australia
  - Study in USA
  - Study in Europe
  - Top Universities
  - Top Courses
- Resources
  - Overview
  - Exams
  - SOP and LOR
  - Eligibility Checker
  - Visa Predictor
  - Cost Calculator
  - CGPA Calculator
  - Books and Guides
- AbroadAI
  - Free study abroad assistant

## SECTION 11 - PHASED EXECUTION PLAN

### Phase 1 - UI Foundation

- Freeze current route/file structure
- Standardize global typography, spacing, and shared CTA language
- Normalize trust badge styling for `UKVI Approved LanguageCert Test Centre`
- Unify auth, form, and basic layout styling with the current premium blue system
- Do not start heavy content translation yet beyond shared shell fixes

### Phase 2 - UX / Navigation

- Finalize top nav IA
- Move exams under the chosen IA position while preserving `/exams/*` URLs
- Clean legacy nav items and aliases carefully
- Review all footer and CTA routing
- Fix broken or outdated internal links

### Phase 3 - Higher Education Redesign

- Treat Higher Education as a subsystem
- Standardize overview, country, listing, course, and university detail presentation
- Translate and normalize deep university content
- Add missing country landing pages if needed

### Phase 4 - Exams / Resources Cleanup

- Translate all exam/resource Bangla content
- Fix breadcrumb/data/link path mismatches
- Improve exam/resource IA and CTAs
- Preserve exam SEO routes while cleaning UX

### Phase 5 - Admin / Backend Alignment

- Audit admin role permissions against frontend access
- Align blog/events/about-us/banner management flows
- Decide which CMS-like APIs are actually in use
- Reduce dead or duplicate admin surfaces

### Phase 6 - User System

- Clean login/signup UX
- Decide whether OAuth stays, ships properly, or is hidden until backend support is restored
- Improve authenticated user flows and role-aware UI behavior

### Phase 7 - AbroadAI Frontend

- Rename visible IA and component labels cleanly to AbroadAI
- Make AI page guest-safe
- Improve AI landing UX, CTA entry points, and integration across the site

### Phase 8 - AbroadAI Backend

- Keep current chat/session foundation
- Improve auth handling, error states, session management, and prompt controls
- Add admin/reporting visibility if required

### Phase 9 - Lead / Operations Backend

- Connect contact, callback, and consultation forms to real backend storage
- Decide CRM or internal lead pipeline
- Add submission validation, notification, and operational follow-up workflows

## Recommended next phase

Recommended immediate next step:

- Phase 1 UI Foundation

Reason:

- The repo is not ready for a safe full-content sweep yet
- Shared shell consistency, auth cleanup, route hygiene, and trust badge standardization will reduce risk before translating and redesigning deeper subsystems

## Appendix A - Most Important Route / Content Problem Areas

- Auth pages: Bangla + old purple styling + likely broken OAuth buttons
- Higher Education detail pages: large Bangla content surface
- Exam pages: widespread Bangla and broken old breadcrumb paths
- Blog/events: backend CRUD exists, public pages mostly static
- AI: real backend exists, but public/anonymous UX is not aligned with auth requirements
- Legacy Maven marketing routes still live in public IA

## Appendix B - Key Reusable Systems Worth Preserving

- Tailwind + shadcn/ui foundation
- Current premium blue theme tokens in `src/index.css`
- PublicLayout / AdminDashboardLayout shells
- Higher Education shared listing/detail architecture
- Exam route coverage and content taxonomy
- Backend auth/admin/blog/event/chat infrastructure
