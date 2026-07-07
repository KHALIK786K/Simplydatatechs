# Simplydatatechs — Premium Course Platform

A modern, premium SaaS-style marketing site built with **React 19, Vite,
TypeScript, Tailwind CSS, React Router, Axios, and Framer Motion**. Features
a custom neural-node logo, 3D tilt cards, mouse-parallax, animated gradients,
glassmorphism, scroll/reveal animations, lazy-loaded photography, and a rich
section library.

## Tech stack

- React 19 + TypeScript
- Vite 6 (dev server + production build with code splitting)
- Tailwind CSS 3 (custom design tokens)
- React Router 7
- Axios (API client)
- Framer Motion (animations, parallax, reveals)
- React Hook Form (form validation)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Logo system

Custom neural-node logo representing AI, data connectivity, and cloud:
- **Favicon**: `public/favicon.svg` (square icon)
- **OG Image**: `public/og-image.svg` (social sharing)
- **Components**: `Logo` (horizontal), `LogoIcon` (square), `LogoMark` (raw SVG)
- Animated hover (spring rotation) via Framer Motion

## Home page sections (17 total)

1. **Hero** — animated gradient, mouse-parallax 3D glass cards, real photos, animated counters
2. **LogoCloud** — infinite marquee of partner wordmarks
3. **Stats** — animated counter row with gradient text
4. **Services** — 6 interactive tilt cards with images, stats, and hover reveals
5. **About** — dual images, feature list, mini stats row
6. **Process** — 4-step journey with image panel
7. **Featured Courses** — top courses grid
8. **TechStack** — categorized tools on dark background
9. **Gallery** — masonry-style image grid with hover overlays
10. **Team** — 6 member tilt cards with bios
11. **Timeline** — alternating milestones with icons and inline counters
12. **Achievements** — 6 big stat counters + 4 award cards
13. **Pricing** — 3 tiers with highlighted "most popular"
14. **Testimonials** — glass cards with photos, star ratings, quotes
15. **FAQ** — animated accordion (8 questions)
16. **Newsletter** — email capture with validation and success state
17. **CTA** — image-backed call to action

## Pages / routes

| Path              | Page              |
| ----------------- | ----------------- |
| `/`               | Home (17 sections)|
| `/courses`        | Course catalogue (hero, filter, search, image strip) |
| `/courses/:slug`  | Course detail (hero, highlights, curriculum, stats, sidebar form) |
| `/contact`        | Contact (hero, cards, image, mini stats, enquiry form) |
| `*`               | 404 (animated logo, gradient text, dark background) |

## Premium UI toolkit (`src/components/ui`)

`Reveal` · `TiltCard` · `AnimatedCounter` · `GlowBackground` · `Marquee` ·
`LazyImage` · `PageLoader` · `ScrollProgress` · `Icon` (18 inline SVG icons) ·
`SectionHeading` · `Button` · `Card` · `Container` · `Section` · `Spinner`

## Images & licensing

32 photographic images referenced from the **Unsplash CDN** (`src/config/images.ts`)
under the [Unsplash License](https://unsplash.com/license). All served as WebP
with lazy loading and skeleton fade-in. To self-host, download into `public/media/`
and repoint the constants. All icons, logo, illustrations, and decorative visuals
are original inline SVG/CSS.

## Performance & accessibility

- Code splitting (vendor, motion, app chunks)
- Native lazy loading + async decoding on images
- WebP format via Unsplash CDN params
- Skeleton shimmer for layout stability
- `prefers-reduced-motion` respected globally
- Semantic landmarks, focus-visible rings, `aria-*` attributes
- Scroll progress bar and page loader

## Branding

All brand strings in `src/config/site.ts` and `index.html`. Update those two
locations to rebrand the entire app.
