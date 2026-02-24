# StockMarketApp

**StockMarketApp** is a Next.js‑based single‑page application built in TypeScript.  
It provides a responsive, component‑driven UI for browsing stock‑market related data.  
This repository contains the front‑end implementation that is served from the
`stockmarket/` subdirectory.

---

## 🧱 Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS (see `postcss.config.mjs`)
- ESLint (see `eslint.config.mjs`)
- React 18+
- Server/client components (`'use client'` is used in interactive widgets)
- Utilities/constant helpers under `lib/`

---

## 📁 Directory layout

stockmarket/
├─ app/ # Next.js “app” directory, entrypoint layout.tsx, pages
├─ components/ # UI components
│ ├─ ui/
│ │ ├─ UserDropdown.tsx
│ │ └─ NavItems.tsx
│ └─ …other shared pieces…
├─ lib/
│ ├─ constants.ts # application constants (e.g. NAV_ITEMS)
│ └─ utils.ts # helper functions
├─ public/ # static assets
│ └─ assets/
├─ styles/ (via globals.css)
├─ next.config.ts
├─ tsconfig.json
└─ package.json


- `components/ui/UserDropdown.tsx` – authenticated user menu, avatar, logout handler.
- `components/ui/NavItems.tsx` – renders navigation links based on
  [`NAV_ITEMS`](stockmarket/lib/constants.ts).

The root `stockmarket/` folder contains all source code; the outer repository
root only holds a simple top‑level `README.md`.

---

## 🚀 Getting started

### Prerequisites

- Node.js 18+ (LTS)
- npm or Yarn

### Install

```bash
cd stockmarket
npm ci            

Development
npm run dev        # starts Next.js development server on http://localhost:3000

Production build
npm run build      # compiles the project (see `package.json` scripts)
npm start          # starts the production server

The .next/ directory is generated automatically; the dev/ tree you see in the
workspace is produced during development and can be ignored/added to .gitignore.

🛠️ Utilities & constants
stockmarket/lib/constants.ts: exports NAV_ITEMS used by navigation components.
stockmarket/lib/utils.ts: common helper functions (e.g. string formatting,
date utilities, etc.). Import as needed from components or pages.
🧩 Key components
UserDropdown – encapsulates the authenticated user’s avatar, profile
preview, and sign‑out logic. Renders sub‑navigation via <NavItems />.
NavItems – builds a <ul> of links from NAV_ITEMS. Highlights the active
route using usePathname from next/navigation.
All visual elements rely on the shared ui/ primitives (buttons, avatars,
dropdowns) located in components/ui.


🧩 Key components
UserDropdown – encapsulates the authenticated user’s avatar, profile
preview, and sign‑out logic. Renders sub‑navigation via <NavItems />.
NavItems – builds a <ul> of links from NAV_ITEMS. Highlights the active
route using usePathname from next/navigation.
All visual elements rely on the shared ui/ primitives (buttons, avatars,
dropdowns) located in components/ui.