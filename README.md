# Hijab Ahmad — Portfolio Website

Assignment 01 — Web Technologies (BS CS F24, Faculty of Information and Technology).
A fully static, multi-page personal portfolio built with plain HTML, CSS, and JavaScript — no backend, no framework.

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero intro, highlights, featured projects |
| About | `about.html` | Bio and a timeline of my journey |
| Projects | `projects.html` | Filterable project grid (All / AI-ML / Security / Web) |
| Skills | `skills.html` | Accordion of skill groups |
| Contact | `contact.html` | Validated contact form + location map |

## Tech

- **HTML5** — semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — one external stylesheet (`css/styles.css`), CSS Grid + Flexbox, responsive via media queries
- **JavaScript** — `js/script.js`, no libraries:
  - Hamburger menu for mobile nav
  - Client-side contact form validation (name / email / message)
  - Project filter by category
  - Accordion on the Skills page

## Folder structure

```
portfolio-site/
├── index.html
├── about.html
├── projects.html
├── skills.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
```

## Running it

No build step — open `index.html` in a browser, or serve the folder with any static server.

## Before submitting

- [ ] Replace the placeholder email in `contact.html` with a real one
- [ ] Swap in real GitHub repo links on `projects.html` where the URL currently points to the profile
- [ ] Push to GitHub with the feature branches below merged into `main`

## Branch history

- `feature-markup` — HTML structure for all 5 pages
- `feature-styles` — stylesheet, layout, responsive rules
- `feature-interactivity` — nav toggle, form validation, filter, accordion
