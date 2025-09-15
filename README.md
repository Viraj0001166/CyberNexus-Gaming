# CyberNexus Gaming

A cyberpunk-inspired Web UI where reality meets digital dreams. This repo includes the static front‑end, Tailwind design system, and a lightweight Express server for local development.

## ✨ Highlights (UI/UX)

- Strong visual identity with neon gradients, glow shadows, and cyberpunk typography (Orbitron, Inter, Exo 2).
- Mobile-first responsive layout using Tailwind breakpoints (sm → 2xl).
- Layered depth via surfaces, backdrop blurs, and subtle micro-interactions.
- Reusable components: headers, cards, grids, modals, and CTAs.
- Accessibility-first: semantic HTML, color contrast, keyboard focus states.
- SEO-ready: meta tags, Open Graph, sitemap, robots, and PWA manifest.

## 🧱 Tech Stack

- HTML5, Vanilla JavaScript
- Tailwind CSS 3.x (CLI build)
- Node.js + Express for local static serving

## 📋 Prerequisites

- Node.js (v16.x or higher)
- npm

## 🛠️ Installation

See “Getting Started” below for install and run commands.

## 🧭 Getting Started

1) Install dependencies
```bash
npm install
```

2) Build CSS
```bash
npm run build     # production (minified)
npm run dev       # watch CSS during development
```

3) Run the local server
```bash
npm start         # http://localhost:3000
```

The landing `index.html` is a splash screen that auto‑redirects to `pages/nexus_core_homepage.html`.

## 🔧 NPM Scripts

- `npm run build:css`       Build CSS (non‑minified)
- `npm run build:css:prod`  Build CSS (minified)
- `npm run build`           Production build shortcut
- `npm run watch:css`       Watch Tailwind and rebuild on changes
- `npm run dev`             Alias to watch CSS continuously
- `npm start`               Run local Express server on port 3000

## 📁 Project Structure

```
cybernexus_gaming/
├─ css/
│  ├─ tailwind.css          # Tailwind source
│  └─ main.css              # Compiled CSS (generated)
├─ pages/
│  ├─ nexus_core_homepage.html
│  ├─ digital_marketplace_shop.html
│  ├─ tournament_arena_competitive_hub.html
│  ├─ command_center_dashboard.html
│  ├─ identity_matrix_about.html
│  └─ access_portal_authentication.html
├─ public/
│  ├─ favicon.ico
│  ├─ manifest.json
│  ├─ env.js
│  ├─ security.js
│  └─ dhws-data-injector.js
├─ index.html               # Splash/redirect page
├─ server.js                # Local Express server (port 3000)
├─ tailwind.config.js       # Design tokens & theme
├─ package.json             # Scripts & deps
└─ README.md
```

## 🎨 Design System (Tailwind)

Core tokens and utilities are defined in `tailwind.config.js`:

- Colors: `primary` (electric blue), `secondary` (neon purple), `accent` (hot pink), `success`, `warning`, `error`, `surface`, `background`, `text`.
- Typography: `Orbitron` (headlines), `Inter` (body), `Exo 2` (CTAs), `mono` (code/accents).
- Shadows: soft glow families like `shadow-glow-primary`, `shadow-glow-secondary`, and depth `shadow-cyber-depth`.
- Motion: keyframes `glow`, `float`, and `pulse-slow` for subtle, accessible micro‑interactions.
- UX: transition timing `ease-out` alias `transition-smooth`, backdrop blur `backdrop-blur-cyber`, and radii `rounded-cyber`/`rounded-cyber-lg`.

Customize or extend tokens in `tailwind.config.js` and rebuild CSS with `npm run build` or `npm run dev`.


## 📦 Build for Production

Build the CSS for production:

```bash
npm run build:css
# or
yarn build:css
```


## 📱 Responsive Design

- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

## 🧭 Accessibility (A11y)

- Semantic landmarks: header, nav, main sections, and footer.
- Sufficient color contrast ensured by token selection; avoid ad‑hoc hex values.
- Keyboard‑friendly focus states and button semantics.
- Images use `alt` text and graceful fallbacks.

## 📈 Performance

- Tailwind CLI builds a single `css/main.css`.
- Use `npm run build` before deployment to minify CSS.
- Prefer optimized images and `loading="lazy"` where applicable.

## 🔐 Security

- Static front‑end—no secrets in the repo. If you add keys, store them in server‑side env vars or a secure secrets manager.
- `public/env.js` can expose non‑sensitive config for client runtime.

## 🌐 SEO & Metadata

- `index.html` includes meta description, theme color, Open Graph, and manifest.
- `robots.txt` and `public/sitemap.xml` are included; customize domains/paths as needed.

## 🚢 Deployment

Option A: Static hosting (Netlify/Vercel)
- Build CSS: `npm run build`
- Deploy the repository; set `css/main.css` as the compiled output.

Option B: Node server
- Run `npm start` on your host (uses `server.js`, port 3000).

## 👥 Contributing

1) Create a feature branch.
2) Follow the design tokens and Tailwind conventions.
3) Submit a PR with screenshots and a brief UX rationale.

## 🧾 License

MIT License. See `LICENSE` (or update `package.json` if you change the license).

## 🏷️ Branding & Credits

- 2025 TaliyTechnologies. All rights reserved.
- Design by Viraj Srivastav.
- Built with HTML + Tailwind CSS.

If you use this template publicly, please keep the attribution or link back to this repo.
