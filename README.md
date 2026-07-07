# Digital Marketer Portfolio

A React + Vite portfolio site for a digital marketing professional. Theme: **"Signal & Ledger"** — an ink-navy dashboard aesthetic with a warm gold accent and an electric-blue "signal" accent, built around a live-style metrics ticker.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  assets/
    profile.png          → your photo, shown in the hero
  components/
    Header.jsx / .css     → sticky nav
    Hero.jsx   / .css     → intro + portrait + badge
    Ticker.jsx / .css     → the scrolling "live metrics" strip
    About.jsx  / .css
    Services.jsx / .css
    Projects.jsx / .css   → renders src/data/projects.json
    Skills.jsx / .css
    Testimonials.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
  data/
    site.json             → all text content: profile, about, services, skills, testimonials
    projects.json          → your case studies / project list
  App.jsx
  index.css               → design tokens (colors, fonts, spacing) + shared utility classes
```

## Replacing the dummy data

**Projects** — edit `src/data/projects.json`. Each entry looks like:

```json
{
  "id": 1,
  "client": "Client Name",
  "category": "Paid Social + Meta Ads",
  "summary": "One or two sentences on what you did and why it mattered.",
  "metrics": [
    { "label": "ROAS", "value": "4.8x" },
    { "label": "CTR", "value": "3.1%" }
  ],
  "tags": ["Meta Ads", "Funnel CRO"],
  "year": "2025",
  "image": "/projects/project-1.png"
}
```

Add, remove, or reorder entries freely — the grid re-renders automatically.

**Results graphs / screenshots** — each project card shows a graph image at the top (click it to view full-size), and there's a dedicated **Results** section (`src/components/Results.jsx`) further down the page for your monthly/overall performance graphs — the kind of screenshots you'd pull from Meta Ads Manager, GA4, Klaviyo, Looker Studio, etc. Both use the same dummy-chart placeholders for now.

To use your own images in the **Results** section:
1. Screenshot your graph (monthly traffic, overall ROAS, spend vs. revenue, funnel, etc.).
2. Drop it into `public/results/`, e.g. `public/results/q2-overview.png`.
3. Add or edit an entry in `src/data/results.json`:
   ```json
   {
     "id": 5,
     "title": "Q2 Overview — Spend vs. Revenue",
     "period": "Apr – Jun 2026",
     "image": "/results/q2-overview.png"
   }
   ```
Add as many entries as you like — the grid re-renders automatically, and each opens full-size in a lightbox on click.

To use your own images on individual **project cards**, follow the same pattern with `public/projects/` and the `"image"` field in `projects.json` (see below).

**Everything else** (name, tagline, bio, services, skills, tools, testimonials, contact info, social links) lives in `src/data/site.json`. Edit the values there — no need to touch component code.

**Your photo** — replace `src/assets/profile.png` with your own image (same filename, or update the import in `src/components/Hero.jsx`).

## Design notes

- Colors, fonts, and spacing are defined once as CSS custom properties in `src/index.css` under `:root` — change a value there to restyle the whole site.
- The ticker in `Ticker.jsx` reads from `site.json → ticker` and loops seamlessly (the list is duplicated once for the marquee effect).
- Respects `prefers-reduced-motion` (ticker and page-scroll animations turn off automatically).
