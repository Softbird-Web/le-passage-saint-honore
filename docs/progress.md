# Progress — Le Passage Saint-Honoré

## Done ✅
- [x] Project scaffold (Next.js 16.2.4 + Tailwind v4 + GSAP + Lenis)
- [x] lib/brand.ts — fully filled with all client data
- [x] lib/utils.ts, styles/figma-tokens.css (placeholder tokens)
- [x] LenisProvider + AnimationInit wired in layout.tsx
- [x] Page routes: home + privatisation only (brunch/terrasse/recrutement deleted)
- [x] Directory structure: components/, public/images/, docs/
- [x] Image audit: 29 photos selected, compressed, categorized in public/images/
- [x] docs/image-manifest.md written

## Client data status
- [x] Name, address, phone, email
- [x] Opening hours: tous les jours 6h30 – 2h00
- [x] Booking URL: https://lepassagesainthonore.fr/fr/booking (TheFork widget ID not found — use URL)
- [x] Instagram: @lepassagesthonore
- [ ] TheFork widget ID (pending — client to provide or use URL link)
- [ ] Spotify playlist URL (client to provide)
- [ ] Menu PDF (client to provide — button hidden until ready)
- [ ] Private hire room photos — Salle 1 + Salle 2 (not in client folder)
- [ ] Private hire room capacity (client to confirm)
- [ ] Instagram Curator.io embed ID (set up during build)

## Pending — Design System
- [ ] Run HUE on lecafeblanc.com → docs/design-system/
- [ ] Update figma-tokens.css with real HUE tokens
- [ ] Update fonts in layout.tsx (Cormorant + Josefin Sans)

## Pending — Build
### Homepage (14 sections)
- [ ] Navbar (Osmo glass effect)
- [ ] HeroSection
- [ ] InfiniteScrollBanner (GSAP marquee)
- [ ] BrunchSection
- [ ] TerrasseSection
- [ ] HistoireSection (⚠️ user has scroll-driven idea — wait for input)
- [ ] EnvironnementSection
- [ ] GallerySection (Osmo Lightbox)
- [ ] PrivatisationTeaser
- [ ] PlaylistSection (Spotify)
- [ ] TestimonialsSection (Swiper)
- [ ] InstagramSection (Curator.io or static)
- [ ] CareersSection
- [ ] ContactSection
- [ ] FinalCTA
- [ ] Footer

### Privatisation page
- [ ] /privatisation page
- [ ] PrivateHireForm + Server Action (Resend)

## Pending — Infrastructure
- [ ] git init + push to github.com/Softbird-Web/le-passage-saint-honore
- [ ] vercel link + env vars (RESEND_API_KEY, NEXT_PUBLIC_SITE_URL)
- [ ] npm install resend swiper

## Pending — QA & Launch
- [ ] npx tsc --noEmit → 0 errors
- [ ] npx next build → clean
- [ ] Mobile QA (390px, 768px, 1280px)
- [ ] Forms test end-to-end
- [ ] Custom domain lepassagesainthonore.fr
