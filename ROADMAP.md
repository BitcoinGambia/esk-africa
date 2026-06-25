# ESK Africa — Vanilla → Next.js Migration Roadmap

> **Status:** Research complete · Implementation not started
> **Last updated:** 2026-06-24
> **Stack:** Next.js 16.2.9 · React 19.2.4 · TypeScript 5 · Tailwind v4 · App Router · Turbopack

This is a living document. We tick checkpoints as we complete them. Nothing here is built yet — this is the agreed plan derived from the bundled Next.js 16 docs (`node_modules/next/dist/docs/`) and 2026 web research.

**Core principle:** This is a **1-to-1 replica** of the existing vanilla site. Smooth scroll (Lenis) + GSAP animations come later as a separate phase to be discussed — they are not the focus of the core port.

## Working Rules (non-negotiable)
- **No monologuing.** Write code, don't explain it. No play-by-play.
- **No git writes.** Never commit or push. The user handles all git.
- **Lean & simple.** Minimal, readable code. If it can be 10 lines, don't make it 100. No over-engineering.
- **Comments are fine** — short section labels like the vanilla CSS, not prose/explanations.
- **Arrow functions by default** — `const X = () => {}` with a trailing `export default X;`, not `export default function`.
- **Match the vanilla site exactly.** Don't add scope. Detect-and-mention, never detect-and-implement.

---

## 0. Research Findings (the "2026 way")

These are the load-bearing conclusions that shaped every decision below. Sources at the bottom.

### Next.js 16 / App Router (from bundled version-specific docs)
- **Server Components are the default.** Every file in `app/` is a Server Component unless it has `"use client"`. Page content (text, images, headings) stays server-rendered → this is what gives us SEO for free.
- **`"use client"` is a boundary, not a per-file tag.** Once a file is marked client, everything it imports joins the client bundle. So we push `"use client"` to the *interactive leaves* (carousels, scroll providers, animated wrappers), never to a page or layout.
- **Server → Client interleaving:** A Server Component can be passed as `children` to a Client Component and still render on the server. This is exactly how a smooth-scroll/animation provider wraps server-rendered content without poisoning it.
- **SEO is API-driven:** `export const metadata` (static) or `generateMetadata` (dynamic) per `layout`/`page`. Plus file conventions: `opengraph-image`, `twitter-image`, `robots`, `sitemap`, `favicon`/`icon`. These only work in Server Components.
- **Images:** `next/image` for size optimization, lazy loading, WebP, and layout-shift prevention. Local images in `public/`; remote images need `images.remotePatterns` in `next.config.ts` (this is the seam for the future CRM).
- **Fonts:** `next/font` self-hosts fonts, removes external requests, prevents layout shift. The vanilla site loads Space Grotesk from Google Fonts — we move that to `next/font`.
- **`app/` is unopinionated about non-route files;** colocation is safe (a route isn't public until `page.tsx`/`route.ts` exists). Private folders use `_prefix`; route groups use `(group)`.

### Lenis + GSAP (2026 — from web research) — *later phase, for reference*
- ⚠️ **Retired packages — DO NOT install:** `@studio-freight/lenis`, `@studio-freight/react-lenis`, `@studio-freight/hamo`. Studio Freight → Darkroom Engineering.
- ✅ **Current packages:** `lenis` (import React bindings from `lenis/react`), `gsap`, `@gsap/react` (gives the `useGSAP()` hook).
- **Single RAF loop:** drive Lenis from GSAP's ticker. Set Lenis `autoRaf: false`, then `gsap.ticker.add(...)` calling `lenis.raf(time * 1000)`. Prevents scroll jitter.
- **`useGSAP()`** auto-reverts the GSAP context on unmount (kills ScrollTriggers) — the correct App Router cleanup pattern. Register plugins at module scope: `gsap.registerPlugin(ScrollTrigger, useGSAP)`.
- **Accessibility:** always honor `prefers-reduced-motion` (~25% of macOS/iOS users) — bail out of animations when set.
- Both the scroll provider and any animated component are `"use client"`; the layout/page stay Server Components.

### Architecture consensus (2026)
- **Feature/section-based organization.** Keep `app/` for routing only; put real code in `components/`, `features/` (or `sections/`), `lib/`, `content/`, `styles/`.
- **Client components at the leaves**, Server Components everywhere else.

---

## 1. Agreed Decisions (locked)

| Decision | Choice | Implication |
|---|---|---|
| Scope | **1-to-1 replica** | Match the vanilla site exactly. Animations are additive and come later. |
| Content layer | **Hardcoded for now** | Content lives in components/section files. CRM deferred — but we keep section components dumb/props-driven so a later content swap is contained. |
| Sequencing | **Vertical slice first** | Stand up structure → port the **home page** fully as the template → replicate to other pages. |
| Styling | **Vanilla CSS, kept as-is** | The original `main.css` + page CSS are inlined into `app/globals.css` and components use the original class names. Tailwind translation was tried and abandoned — it broke the intricate named-grid layouts. Tailwind stays available for new work; use canonical v4 utilities (`z-9999`, not `z-[9999]`). |
| Images | Plain `<img>` | Match vanilla 1-to-1. `next/image` with `fill` broke layouts and spammed warnings; revisit later only if needed. |
| Reference | `public/esk/` | The full vanilla site (6 pages, CSS, JS, images) is preserved there as the source of truth during the port. **Deleted after the transition.** |
| Images | `public/images/` | Already copied here. Paths are `/images/...` (the vanilla `/assets/images/...` minus `assets`). |

**CRM seam (not built now, but not blocked):** section components receive their data as props/typed objects rather than hardcoding strings inline where avoidable. Images go through `next/image`. When the CRM arrives, we add `images.remotePatterns` + a data source and feed the same component props. No component rewrite.

---

## 2. Target Project Structure

```
esk/
├── app/                          # routing only
│   ├── layout.tsx                # root layout (Server) — fonts, <html>, providers, base metadata
│   ├── globals.css               # Tailwind import + vanilla CSS (scoped per page)
│   ├── icon.png                  # favicon (company logo) — Next metadata convention
│   ├── page.tsx                  # home — composes home sections
│   ├── robots.ts                 # generated robots (Phase 4)
│   ├── sitemap.ts                # generated sitemap (Phase 4)
│   ├── not-found.tsx             # 404 (Phase 4)
│   ├── about/page.tsx
│   ├── kitchen/page.tsx
│   ├── living/page.tsx
│   ├── commercial/page.tsx
│   └── drywall/page.tsx
│
├── components/
│   ├── layout/                   # Nav (+overlay), Footer, LoadingScreen, Cursor
│   ├── ui/                       # small reusable bits (as needed)
│   └── providers/                # client providers (Lenis/GSAP smooth-scroll — Phase 5)
│
├── sections/                     # one folder per page; one component per section
│   ├── home/                     # Hero, Philosophy, Services, Process, Clients, Benefits, Vision, Projects, Cta
│   ├── about/                    # Hero, Team, Beliefs, Vision
│   ├── shared/                   # ServiceHero, Gallery (reused by service pages)
│   ├── kitchen/ living/ commercial/ drywall/   # per-page galleryItems.ts data
│
├── hooks/                        # custom hooks (e.g. useScrollAnimation wrapping useGSAP — Phase 5)
│
├── lib/                          # pure utilities/config only (created when first needed)
│
├── public/
│   ├── images/                   # site images (paths: /images/...)
│   └── esk/                      # ← vanilla reference site (delete in Phase 6)
│
├── next.config.ts                # images.remotePatterns (Unsplash for drywall)
└── ROADMAP.md
```

> **Structure rationale (2026 best practice):** `app/` = routing only. UI components in `components/` (animation-powered components live here too). Page sections in `sections/`. Custom animation hooks (e.g. `useScrollAnimation` wrapping `useGSAP`) go in `hooks/`, **not** `lib/`. Client providers (Lenis/GSAP) in `components/providers/`. `lib/` is reserved for pure helpers/config and is created only when something actually needs it — no empty placeholder folders.

---

## 3. Phased Checkpoints

### Phase 0 — Research & Plan ✅
- [x] Read bundled Next.js 16 docs (project structure, metadata, server/client, images, fonts, production checklist)
- [x] Research Lenis + GSAP 2026 integration (confirm current packages, RAF sync, a11y)
- [x] Confirm decisions (content / sequencing / tokens)
- [x] Write this roadmap

### Phase 1 — Foundation (structure + tooling) ✅
- [x] Create folder skeleton from §2
- [x] Configure path alias `@/*` (verify `tsconfig.json`)
- [x] Add Prettier + confirm ESLint (`eslint-config-next`)
- [x] Inline vanilla `main.css` + `home.css` into `app/globals.css` (CSS kept as-is)
- [x] Set up `next/font` for Space Grotesk; remove Google Fonts `<link>`
- [x] Base `app/layout.tsx`: `<html lang>`, font var, default `metadata`, render `{children}`

### Phase 2 — Home Page Vertical Slice (the proven template) ✅
- [x] Layout chrome: `Nav` + overlay (client), `Footer`, `LoadingScreen` (client), `Cursor` (client)
- [x] Port home sections to `sections/home/`: Hero (client), Philosophy, Services (client), Process, Clients, Benefits, Vision + Featured Projects (client), CTA
- [x] Keep original markup + class names; plain `<img>` (1-to-1 with vanilla)
- [x] Home SEO: default `metadata` in layout
- [x] Build passes clean
- [x] Convert images to `next/image` (`fill` + `sizes`; logos `width/height`)
- [x] **Checkpoint review** with you — visual parity confirmed

### Phase 3 — Replicate to Remaining Pages ✅
- [x] `about` (Hero, Team, Beliefs, Vision, CTA) + per-page metadata
- [x] `kitchen` (Hero, Gallery, CTA) + metadata
- [x] `living` (Hero, Gallery, CTA) + metadata
- [x] `commercial` (Hero, Gallery, CTA) + metadata
- [x] `drywall` (Hero, Gallery) + metadata
- [x] Extract shared `ServiceHero` + `Gallery` into `sections/shared/`
- [x] Scope page CSS via wrapper classes (`page-home`, `page-about`, `page-kitchen`, …) to resolve `.hero`/`.vision`/`.gallery` collisions in shared `globals.css`
- [x] `images.remotePatterns` for drywall's Unsplash images
- [x] Build: all 6 routes prerender clean

### Phase 4 — SEO & Production Hardening
- [x] `sitemap.ts`, `robots.ts` (domain: `https://eskafrica.com`)
- [x] Default `opengraph-image.png` (logo on brand bg) → OG + Twitter
- [x] JSON-LD `LocalBusiness` (The Gambia & West Africa, contact wired)
- [x] `metadataBase`, canonical URLs, Open Graph/Twitter in root + per page
- [x] Favicon via `app/icon.png` (company logo) — done earlier
- [x] `next build` clean; all SEO endpoints prerender (`/robots.txt`, `/sitemap.xml`, `/opengraph-image.png`)
- [x] Accessibility pass (jsx-a11y lint clean; one `<h1>` per page; thumb buttons labelled)
- [x] Lighthouse — signed off

### Phase 5 — Smooth Scroll & Reveals ✅
- [x] Lenis smooth scroll via `components/providers/SmoothScroll.tsx` (`ReactLenis`, `autoRaf:false`, driven by GSAP ticker, single RAF loop)
- [x] Mount provider in root layout wrapping content (layout stays Server)
- [x] Scroll reveals via `IntersectionObserver` (`components/motion/RevealOnView.tsx`) toggling `.is-revealed` — no JS animation lib driving them
- [x] Section titles slide up from bottom (`[data-reveal="title"]`)
- [x] Images: overlay wipes left → right (`[data-reveal="image"]::after`)
- [x] Image placeholder silhouette (bordered) behind every revealed image (`::before`) for slow networks — all sections except home hero
- [x] Reveal delay (~0.15s) so it fires slightly after entering view
- [x] `prefers-reduced-motion` bailout; build clean

---

## 4. Dependencies to Add (when we reach the phase)

| Package | Phase | Why |
|---|---|---|
| `prettier` (+ plugin) | 1 | Formatting (dev) |
| `lenis` | 5 | Smooth scroll (current pkg; `lenis/react` for bindings) |
| `gsap` | 5 | Animation engine + ScrollTrigger |
| `@gsap/react` | 5 | `useGSAP()` hook (auto-cleanup) |
| *(CMS SDK)* | 6 | Deferred until CRM decision |

---

## 5. Open Questions / Risks
- **Loading screen:** the vanilla site has a JS-driven loading screen — decide whether to keep it (and whether it should block hydration). Note the docs' `preventing-flash-before-hydration` guidance.
- **Carousels (Hero, Featured Projects):** these are `setInterval`-driven in vanilla JS → reimplement as client components; confirm whether to keep current timing/behavior exactly.
- **Image counts:** Featured Projects ("The Hive") and team images need final counts/paths before wiring `next/image`.
- **Asset weight:** confirm we re-export images to WebP/AVIF via `next/image` rather than shipping the existing files as-is.

---

## 6. Sources
- Bundled Next.js 16 docs: `node_modules/next/dist/docs/01-app/...` (project-structure, metadata-and-og-images, server-and-client-components, images, fonts, production-checklist)
- [Smooth Scrolling in Next.js with Lenis & GSAP (2026 Guide) — DevDreaming](https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap)
- [How to implement Lenis in Next.js — Bridger Tower](https://bridger.to/lenis-nextjs)
- [Pattern(s) for synchronizing ScrollTrigger and Lenis — GSAP Forums](https://gsap.com/community/forums/topic/40426-patterns-for-synchronizing-scrolltrigger-and-lenis-in-reactnext/)
- [Guide to GSAP ScrollTrigger with useGSAP — Medium](https://medium.com/@ccjayanti/guide-to-using-gsap-scrolltrigger-in-next-js-with-usegsap-c48d6011f04a)
- [Architecting Large-Scale Next.js Applications — DEV](https://dev.to/addwebsolutionpvtltd/architecting-large-scale-nextjs-applications-folder-structure-patterns-best-practices-2dpj)
- [Next.js Project Structure 2026 — GroovyWeb](https://www.groovyweb.co/blog/nextjs-project-structure-full-stack)
- [Reusable Architecture for Large Next.js Applications — freeCodeCamp](https://www.freecodecamp.org/news/reusable-architecture-for-large-nextjs-applications/)
