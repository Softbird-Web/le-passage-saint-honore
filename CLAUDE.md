# Passage Saint-Honoré — Project Brain

## Session Start (read in order)
1. `docs/progress.md` — what's done, what's next
2. `vibe-coding-instructions/11-restaurant-websites/RESTAURANT-PLAYBOOK.md` — process guide
3. `docs/image-manifest.md` — before any image work

## Session End
1. Update `docs/progress.md` with what shipped
2. Update `docs/image-manifest.md` if images changed
3. Commit completed section: `feat: add [section] section`
4. Push to trigger Vercel preview

## 2nd Brain
Location: ~/Desktop/eldar-design-development-cc/vibe-coding/
Session start: read `vibe-coding-instructions/11-restaurant-websites/RESTAURANT-PLAYBOOK.md` + `BRAIN.md`.

## Stack
- Next.js 16.2.4, TypeScript, Tailwind CSS v4
- Vercel deploy via GitHub push (branch: main)
- HUE design system → `docs/design-system/design-model.yaml` (run on cafeblanc.fr)
- shadcn/ui for structural components
- Aceternity UI for motion/drama components

## Libraries (exact import paths)
```
gsap@3.15.0        → import gsap from 'gsap'
                     import { ScrollTrigger } from 'gsap/ScrollTrigger'
lenis@1.3.23       → DYNAMIC IMPORT ONLY inside useEffect (ESM-only!)
motion@12.38.0     → import { useAnimate } from 'motion/react'
framer-motion      → Aceternity peer dep — do not use directly
clsx@2.1.1         → import { type ClassValue, clsx } from 'clsx'
tailwind-merge     → import { twMerge } from 'tailwind-merge'
```

## File Structure
```
app/
  globals.css             ← @import "../styles/figma-tokens.css" THEN @import "tailwindcss"
  layout.tsx              ← Navbar + Footer + LenisProvider + AnimationInit
  page.tsx                ← home sections only, no logic
  brunch/page.tsx
  terrasse/page.tsx
  privatisation/page.tsx  ← private hire + inquiry form
  recrutement/page.tsx    ← careers + application form
  [page]/actions.ts       ← Server Actions for forms
components/
  providers/
    LenisProvider.tsx     ← dynamic import of lenis inside useEffect
    AnimationInit.tsx     ← GSAP scroll reveal via data-anim-section
  layout/
    Navbar.tsx
    Footer.tsx
  sections/               ← one file per section
  forms/                  ← PrivateHireForm.tsx, CareersForm.tsx
  ui/                     ← shadcn + Aceternity components
lib/
  brand.ts                ← ALL restaurant data here — never hardcode elsewhere
  utils.ts                ← cn() helper
styles/
  figma-tokens.css        ← CSS vars from HUE design-model.yaml
public/
  images/
    hero/
    food/
    ambiance/
    terrace/
    private-hire/
    team/
docs/
  progress.md
  image-manifest.md
  design-system/
    design-model.yaml     ← HUE output (pending)
    SKILL.md
```

## Design System
- Source: `docs/design-system/design-model.yaml` (generate via HUE on cafeblanc.fr)
- CSS vars in `styles/figma-tokens.css` — placeholder values until HUE runs
- Fonts: `--font-heading` (Playfair Display placeholder), `--font-body` (Inter placeholder)
- Update layout.tsx fonts after HUE output

## Image System
- All images in `public/images/[category]/`
- Manifest: `docs/image-manifest.md` — check before choosing a photo
- Always `next/image` — never `<img>`
- `fill` prop requires a sized `relative` parent
- Compress: `sips -Z 1920 [src] --setProperty formatOptions 50 --out [dest]`

## Brand Config
- `lib/brand.ts` — currently has: Instagram handle, contact email, pages flags, booking system
- Pending from client: phone, address, hours, TheFork widget ID, hero photos, room details

## Forms
- Server Actions in `app/privatisation/actions.ts` + `app/recrutement/actions.ts`
- Email via Resend → `RESEND_API_KEY` in Vercel env
- shadcn/ui: form, input, textarea, select, button, toast

## Animation Contract
```
<section data-anim-section>           ← reveal on scroll
  <div data-anim-item>...</div>       ← staggers with siblings
</section>
<section data-anim-section="hero">    ← plays immediately (no scroll trigger)
```

## Critical Pitfalls
- Lenis: MUST be dynamic `import('lenis')` inside useEffect — ESM-only
- Vercel build: `tailwindcss` + `@tailwindcss/postcss` in `dependencies` not devDependencies ✅ (already fixed)
- TheFork widget: wrap `<script>` in useEffect — SSR breaks otherwise
- Never `new Date()` / `Math.random()` in render body — defer to useEffect
- Next 16: middleware is `proxy.ts` not `middleware.ts` (not needed here — no i18n)
- `maskImage`: inline styles only, not Tailwind classes

## Git Rules
- Branch: main (direct commits approved)
- One commit per completed section: `feat: add [section] section`
- Never auto-commit/push without approval
- Stage specific files only — never `git add -A`

## Pending from Client
- [ ] TheFork widget ID
- [ ] Full address + Google Maps URL
- [ ] Opening hours
- [ ] Hero video or photo
- [ ] Private hire room details (names, descriptions, capacity)
- [ ] Photo delivery (raw folder for image audit)
