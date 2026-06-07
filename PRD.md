# Product Requirement Document (PRD)

## 1. Overview
This PRD defines requirements for the **Premium Developer Portfolio** application (React + Django REST Framework).

### 1.1 Product Summary
A responsive, glassmorphism-styled portfolio website that includes:
- Hero section with CTAs (View Projects, Download Resume, Contact)
- About section
- Skills section with animated progress bars
- Projects section that fetches projects from a backend API (with fallback)
- Contact form that posts messages to a backend API
- Footer and a sticky navigation bar for section scrolling

### 1.2 Goals
- Provide an attractive, modern portfolio UX with smooth animations.
- Demonstrate full-stack capabilities via real API integration.
- Validate and store contact messages in a backend database.
- Serve portfolio content (projects) from Django models via DRF.

### 1.3 Non-goals (for this phase)
- Multi-page routing beyond the single landing page.
- Authentication / user accounts.
- Complex blog UI (backend supports listing blog posts; frontend UI not implemented in this scope).

---

## 2. Users & Use Cases
### 2.1 Primary Users
- Prospective employers / recruiters
- Potential clients

### 2.2 User Stories
1. As a visitor, I want to navigate to sections (About/Skills/Projects/Contact) quickly using a sticky navbar.
2. As a visitor, I want to see selected projects with descriptions, tech tags, and links.
3. As a visitor, I want to send a contact message using a form with clear success/error feedback.
4. As a visitor, I want the site to load fast and look premium on mobile and desktop.

---

## 3. Functional Requirements

### 3.1 Frontend (React)
#### 3.1.1 Layout & Navigation
- Single landing page containing sections in this order:
  1) Hero
  2) About
  3) Skills
  4) Projects
  5) Contact
  6) Footer
- Sticky navbar with section links:
  - About → `#about`
  - Skills → `#skills`
  - Projects → `#projects`
  - Contact → `#contact`

#### 3.1.2 Hero Section
- Display developer name and short value proposition.
- Include CTAs:
  - “View Projects” → anchors to `#projects`
  - “Download Resume” → link to `/dist/assets/Nihal%20Resume.pdf` (current implementation)
  - “Contact Me” → anchors to `#contact`

#### 3.1.3 About Section
- Render premium glass cards with description and education/experience placeholders.
- Include a “Technologies” pill list.

#### 3.1.4 Skills Section
- Render two cards (Core, Tools & Platform).
- Each skill shows:
  - Icon
  - Name
  - Animated progress bar to a numeric percentage.
- Animation library: Framer Motion.

#### 3.1.5 Projects Section
- Fetch projects from backend on load.
- If the fetch fails, show a predefined fallback set of project cards.
- Each project card shows:
  - Title
  - Description
  - Tech tags (from `technologies` array)
  - Optional GitHub and Live Demo buttons if URLs exist.

Backend integration details:
- Uses Axios client created by `createHttpClient(apiBaseUrl)`.
- Projects endpoint used by frontend:
  - `GET /api/projects/`

#### 3.1.6 Contact Section
- Contact form fields:
  - Name (required)
  - Email (required, email type)
  - Message (required, min length 10)
- On submit:
  - Calls backend:
    - `POST /api/contact/`
- Show status:
  - idle
  - submitting
  - success
  - error
- On success: clear form and return to idle after a short delay.

#### 3.1.7 SEO / Metadata
- Minimum requirement: accessible headings per section.
- Current project includes `react-helmet-async` in app bootstrap (metadata to be defined in a follow-up).

#### 3.1.8 Theme
- Force dark mode by default.
- Theme provider stores `theme: 'dark'`.

> Note: A separate light/dark toggle is not currently implemented; dark mode is forced.

---

### 3.2 Backend (Django + DRF)
#### 3.2.1 APIs
**Projects API**
- Endpoint: `GET /api/projects/`
- Behavior:
  - Returns up to 50 projects ordered by newest (via model ordering).
- Serializer includes:
  - `id`, `title`, `description`, `technologies`, `github_url`, `live_url`, `image_url`

**Contact API**
- Endpoint: `POST /api/contact/`
- Request body:
  - `name` (required)
  - `email` (required, email format)
  - `message` (required)
- Validation rules (server-side):
  - Message cannot be empty/whitespace
  - Message must be at least 10 characters
  - Required fields must be present
- Response:
  - On success: `{ "success": true }` with HTTP 201

**Blogs API (backend support only)**
- Endpoint: `GET /api/blogs/`
- Supports optional query param `category` (case-insensitive)
- Not currently wired to a frontend page.

#### 3.2.2 Data Models
- `Project`
  - `title`, `description`, `technologies` (JSON), optional `github_url`, `live_url`, `image_url`
- `ContactMessage`
  - `name`, `email`, `message`, `created_at`
- `BlogPost`
  - `title`, `excerpt`, `content`, `category`, `created_at`

#### 3.2.3 Admin
- Django admin registrations exist for:
  - `Project`
  - `ContactMessage`
  - (Blog admin exists)

---

## 4. Non-functional Requirements
### 4.1 Performance
- Projects fetch should be quick and capped to 50 results.
- Frontend should display fallback projects if API fails to avoid blank UI.

### 4.2 Security & Compliance
- Input validation for contact form is enforced server-side.
- CORS enabled for cross-origin requests (`CORS_ALLOW_ALL_ORIGINS = True` in current settings).
- CSRF settings exist (default middleware). If frontend uses pure Axios without CSRF token, CORS handling is the primary gate in current design.

### 4.3 Compatibility
- Frontend uses modern browser APIs; intended for current desktop/mobile browsers.
- Backend uses Django 5.1+ and DRF.

---

## 5. API Reference (Current Implementation)
### Base URL
- Frontend reads `VITE_API_BASE_URL` (default `http://127.0.0.1:8000`).

### Projects
- `GET {apiBaseUrl}/api/projects/`

**Response: 200**
- Array of projects with fields:
  - `id`, `title`, `description`, `technologies`, `github_url`, `live_url`, `image_url`

### Contact
- `POST {apiBaseUrl}/api/contact/`

**Request Body**
- `{ "name": string, "email": string, "message": string }`

**Response: 201**
- `{ "success": true }`

**Error Responses**
- DRF validation errors (HTTP 400) for missing/invalid fields.

---

## 6. Analytics / Logging
- Frontend logs errors to console in contact submit.
- Backend currently does not specify structured logging requirements.

---

## 7. Acceptance Criteria
1. Visiting `/` shows all portfolio sections in correct order.
2. Projects section:
   - Successfully loads projects from backend.
   - Falls back to hardcoded projects if API fails.
3. Contact form:
   - Submitting valid data returns success state.
   - Submitting invalid data (e.g., message < 10 chars) returns error state.
4. Navbar links scroll to correct sections (anchors).
5. Site is responsive and visually consistent (glass/premium look maintained).

---

## 8. Implementation Notes (Known Gaps)
- README mentions PostgreSQL-ready settings, but current Django settings use SQLite by default.
- Theme provider forces dark mode; a toggle UI is not present.
- Blog API exists but no blog UI page is implemented.

---

## 9. Dependencies
### Frontend
- React 18, Vite
- Tailwind CSS
- Framer Motion
- Axios
- react-helmet-async

### Backend
- Django 5.1.x
- Django REST Framework
- django-cors-headers

---

## 10. Change Log
- Initial PRD created based on current codebase structure and API usage.

