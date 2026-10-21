# Star Rider Academy — homepage demo

Custom-coded demo of the Star Rider Academy website (Gold Coast), built to the client's Figma direction
("acit" prototype) with the structure and interaction patterns of ces.tech.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · plain CSS · GSAP ScrollTrigger + Lenis for motion (no Tailwind, no Elementor, no page builder).
**Type:** Hanken Grotesk (display/body) + DM Mono (labels, buttons) — the closest free pair to CES's Monument Grotesk / Semi-Mono.
Static output — deploys anywhere (Vercel, Netlify, Cloudflare Pages, any Node host).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Open the folder in Emdash (or any editor) and the agent can work on it directly.

## Deploy to Vercel

```bash
npx vercel        # preview link
npx vercel --prod # production
```

## Structure

```
app/
  layout.tsx                      fonts, metadata
  globals.css                     design tokens + all component styles
  page.tsx                        homepage
  courses/cyber-security-ai/      example course page
components/
  Header.tsx                      sticky header, CES-style mega menu, mobile drawer
  Hero.tsx                        auto-rotating hero slider (pause on hover)
  Reveal.tsx                      scroll-in reveal (IntersectionObserver)
  Footer.tsx
lib/data.ts                       all copy, nav, courses, events, news — edit here
public/brand/                     Star Rider Academy logo (colour, white, mark)
(media)                           all photos/videos are hot-linked from Pexels (free licence) for the demo —
                                  self-host or replace with college media before launch; URLs live in lib/data.ts
```

## Design notes

- Palette and geometry measured from the client's Figma: blue gradient `#0c35b0 → #0a84d8`, dot field,
  pink `#ec1e79`, cyan `#12c6e8`, deep navy `#070b2e`, Inter typeface.
- Star Rider brand: chrome wordmark + magenta swoosh (logo rebuilt from the supplied mark).
- Sections 1–3 follow the Figma one-to-one (hero slider, statement with inline pill images + glowing
  contact cards, three pathway cards). Everything below follows ces.tech (card grids, event cards,
  quote band, stats, news list, CTA).

## Placeholders to replace

RTO / CRICOS numbers · intake dates · event dates · email address · Pexels media (see `lib/data.ts`).
