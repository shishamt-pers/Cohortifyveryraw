# Cohortify — Student Mentorship & Networking Platform

> **Where Ambition Meets Alliance**  
> A live mentorship and networking platform designed for students aged 13–16 and their parents.

---

## 🚀 How to Start the Project

Follow these steps to get the website running locally on your computer:

### 1. Prerequisites
Make sure you have **Node.js** (version 18.x or higher) installed on your system.
You can check by opening your terminal or PowerShell and typing:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Open a terminal in the project root directory and run:
```bash
npm install
```
*(If you prefer `pnpm` or `yarn`, you can run `pnpm install` or `yarn install`.)*

### 3. Start Development Server
Run the following command to start Vite's live-reloading dev server:
```bash
npm run dev
```

Once started, open your browser and navigate to:
```
http://localhost:5173
```
The website will load immediately with fast Hot Module Replacement (HMR).

### 4. Build for Production
To generate an optimized, production-ready static build:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

### 5. Preview Production Build
To test the production build locally:
```bash
npm run preview
```

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom OKLCH color palettes & dark mode
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **State & Context**: React Context API (`ThemeContext`, `EnrollContext`)
- **Localization**: [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
- **Icons**: [Remix Icon](https://remixicon.com/) & [Font Awesome](https://fontawesome.com/)
- **Typography**: [Google Fonts](https://fonts.google.com/) — *Bricolage Grotesque*, *Plus Jakarta Sans*, *Pacifico*

---

## 📁 Project Structure

```
.
├── index.html                   # Root HTML entry point with fonts & metadata
├── package.json                 # Project dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── public/                      # Static assets
│   └── favicon.svg              # Cohortify logo favicon
├── src/                         # Application source code
│   ├── App.tsx                  # Root application component & providers
│   ├── main.tsx                 # React DOM mount entry
│   ├── index.css                # Global stylesheet, OKLCH variables, animations
│   ├── components/
│   │   ├── base/                # Reusable UI primitives
│   │   │   ├── Counter.tsx      # Animated number counter on scroll
│   │   │   ├── EnrollButton.tsx # Standardized enrollment CTA button
│   │   │   ├── Reveal.tsx       # IntersectionObserver scroll fade-in
│   │   │   ├── SectionHeading.tsx # Uniform section headers
│   │   │   └── StarRating.tsx   # Star rating component
│   │   └── feature/             # Feature-level components
│   │       ├── EnrollModal.tsx  # Interactive seat-booking modal dialog
│   │       ├── Footer.tsx       # Site footer with links and contact info
│   │       └── Navbar.tsx       # Sticky navbar with theme toggle & mobile menu
│   ├── context/
│   │   ├── EnrollContext.tsx    # Modal open/close and selected plan state
│   │   └── ThemeContext.tsx     # Light/Dark mode state with localStorage sync
│   ├── i18n/                    # Localization setup
│   │   ├── index.ts
│   │   └── local/index.ts
│   ├── mocks/                   # Editable data and site content
│   │   ├── benefits.ts          # "Kya Milega" benefits list
│   │   ├── people.ts            # Mentor, host, and guest profiles
│   │   ├── pricing.ts           # Pricing plans and FAQ questions/answers
│   │   ├── session.ts           # Upcoming session date, time, and seat counters
│   │   ├── site.ts              # Brand info, social links, contact info
│   │   └── social.ts            # Testimonials and previous session gallery
│   ├── pages/
│   │   ├── home/
│   │   │   ├── components/      # Modular section components
│   │   │   │   ├── CtaBanner.tsx
│   │   │   │   ├── Faq.tsx
│   │   │   │   ├── Gallery.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── HostGuests.tsx
│   │   │   │   ├── MentorSection.tsx
│   │   │   │   ├── Pricing.tsx
│   │   │   │   ├── ProofStrip.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── UpcomingSession.tsx
│   │   │   │   └── WhatYouGet.tsx
│   │   │   └── page.tsx         # Home landing page
│   │   └── NotFound.tsx         # Branded 404 page with return-to-home links
│   └── router/
│       ├── config.tsx           # Route mapping definitions
│       └── index.ts             # AppRoutes component & navigate resolver
├── tailwind.config.js           # Tailwind theme configuration
├── tsconfig.json                # TypeScript project configuration
├── tsconfig.node.json           # TypeScript configuration for Vite
└── vite.config.ts               # Vite configuration with '@' alias
```

---

## 🗺️ Routing & Navigation

The application uses **React Router DOM** configured in `src/router/config.tsx` with smooth hash scrolling in `src/pages/home/page.tsx`:

| Path | Element / Section | Description |
|---|---|---|
| `/` or `/home` | `<Home />` | Full landing page |
| `/upcoming-session` | `<Home />` (auto-scrolls to `#upcoming-session`) | Upcoming session details & booking |
| `/what-you-get` | `<Home />` (auto-scrolls to `#what-you-get`) | Benefits & curriculum highlights |
| `/mentor` | `<Home />` (auto-scrolls to `#mentor`) | Topper student mentor profile |
| `/host` | `<Home />` (auto-scrolls to `#host`) | Session host and guest information |
| `/gallery` | `<Home />` (auto-scrolls to `#gallery`) | Photo gallery of previous cohorts |
| `/testimonials` | `<Home />` (auto-scrolls to `#testimonials`) | Student & parent reviews |
| `/pricing` | `<Home />` (auto-scrolls to `#pricing`) | Single session & 4-month pass pricing |
| `/faq` | `<Home />` (auto-scrolls to `#faq`) | Frequently asked questions |
| `*` | `<NotFound />` | Branded 404 error page with quick recovery links |

---

## ✨ Key Features

1. **Light & Dark Theme Toggle**:
   - Automatically detects user's system preferences (`prefers-color-scheme`).
   - Click the Sun/Moon icon in the navbar to toggle themes instantly.
   - Preference is saved in `localStorage`.

2. **Interactive Enrollment Modal (`EnrollModal.tsx`)**:
   - Opens when clicking any "Enroll Now" or "Book Seat" button across the page.
   - Accepts Student Name, School, WhatsApp number, and selected plan.
   - Saves submitted registrations locally (`localStorage.cohortify_enrollments`) with instant confirmation so submissions never get lost.

3. **Smooth Scroll & Micro-Interactions**:
   - Header smoothly transitions into frosted glass on scroll.
   - Animated statistics counters (`Counter.tsx`) trigger as you scroll into view.
   - Cards and sections fade and slide up cleanly (`Reveal.tsx`).
   - Accordion for FAQs allows expanding/collapsing answers.
   - Interactive gallery with thumbnail selection.

4. **Mobile Responsive**:
   - Mobile slide-out navigation drawer with backdrop blur.
   - Touch-friendly layout adapting across mobile, tablet, and desktop viewports.

---

## ✏️ How to Customize Site Content

All data is separated into clean, typed mock files in `src/mocks/`:

- **Change Brand Name, Phone, Email, Socials**:
  Edit `src/mocks/site.ts`.
- **Change Upcoming Session Date, Time, Seat Count**:
  Edit `src/mocks/session.ts`.
- **Update Mentor, Host, or Guests**:
  Edit `src/mocks/people.ts`.
- **Change Pricing or FAQs**:
  Edit `src/mocks/pricing.ts`.
- **Update Reviews or Gallery Images**:
  Edit `src/mocks/social.ts`.

---

## 🚢 Deployment

You can deploy this project to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```
*Framework Preset*: Vite  
*Build Command*: `npm run build`  
*Output Directory*: `dist`

### Netlify
Connect your repository in the Netlify dashboard:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

---

© 2026 Cohortify. Built for students and parents.
