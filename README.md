# ✦ Divaa's Vault ✦ — Red Wine Edition 🍷

A beautiful PWA password generator built with Next.js 14. Features a rich red wine aesthetic, offline support, and "Add to Home Screen" capability.

---

## Features

- 🔐 Password generator with configurable length (1–100 characters)
- ✅ Toggle uppercase, lowercase, numbers, and symbols
- 📋 One-click copy to clipboard
- 📱 PWA — installable on iOS and Android home screens
- 🌐 Works offline via service worker
- 🍷 Red wine (#722F37) theme throughout

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Plain CSS (no dependencies)
- **PWA:** `manifest.json` + `sw.js` service worker
- **Output:** Static export (`next build` → `out/` folder)

---

## Local Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Install & Run

```bash
# Install dependencies
pnpm install
# or
npm install

# Start development server (default port 3000)
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js and configures everything.

### Option 2 — Vercel Dashboard (recommended)

1. Push this project to a GitHub / GitLab / Bitbucket repo
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects Next.js — no configuration needed
4. Click **Deploy**

> **Note:** The project uses `output: 'export'` (static HTML export). Vercel will serve the `out/` folder as a static site. If you want server-side features later, remove `output: 'export'` from `next.config.mjs`.

---

## Project Structure

```
divaas-vault/
├── app/
│   ├── globals.css       # All styles — wine red theme
│   ├── layout.tsx        # Root layout, PWA meta tags, SW registration
│   └── page.tsx          # Password generator UI (client component)
├── public/
│   ├── manifest.json     # PWA manifest (name, theme color, icons)
│   ├── sw.js             # Service worker (offline caching)
│   ├── icon-192.png      # Home screen icon 192×192
│   └── icon-512.png      # Home screen icon 512×512
├── next.config.mjs       # Static export config
├── tsconfig.json
└── package.json
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server on port 3000 |
| `pnpm build` | Build static export to `out/` |
| `pnpm start` | Serve the production build |
| `pnpm typecheck` | Run TypeScript checks |

---

## PWA — Add to Home Screen

**iOS (Safari):** Tap the Share button → "Add to Home Screen"  
**Android (Chrome):** Tap the three-dot menu → "Add to Home Screen" or wait for the install banner

Theme color `#722F37` is applied to the browser chrome and splash screen automatically.

---

## Customization

| What | Where |
|------|-------|
| Colors / theme | `app/globals.css` — change `#722F37` throughout |
| App name | `public/manifest.json` → `name` and `app/layout.tsx` → `metadata.title` |
| Symbol set | `app/page.tsx` → `SYMBOLS` constant |
| Icons | Replace `public/icon-192.png` and `public/icon-512.png` |
