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


