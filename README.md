# Simplydatatechs — Premium Course Landing Website

A modern, premium SaaS-style marketing site built with **React 19, Vite,
TypeScript, Tailwind CSS, React Router, Axios, and Framer Motion**. Features
3D tilt cards, animated gradients, glassmorphism, scroll/reveal animations,
mouse-parallax, and lazy-loaded imagery.

## Tech stack

- React 19 + TypeScript
- Vite 6 (dev server + build)
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

## What's included

**Home page sections:** animated hero (mouse-parallax 3D glass cards) · trusted-by
marquee · animated stat counters · interactive service cards (3D tilt) · about
section (3D image + feature list) · process/how-it-works · featured courses ·
image gallery · company timeline · pricing tiers · glass testimonials · FAQ
accordion · newsletter · image-backed CTA.

**Pages / routes**

| Path              | Page              |
| ----------------- | ----------------- |
| `/`               | Home              |
| `/courses`        | Course catalogue (filter + search) |
| `/courses/:slug`  | Course detail (syllabus + enquiry form) |
| `/contact`        | Contact / enquiry |
| `*`               | 404 Not Found     |

## Premium UI toolkit (`src/components/ui`)

`Reveal` (scroll reveal) · `TiltCard` (pointer-driven 3D tilt) ·
`AnimatedCounter` · `GlowBackground` · `Marquee` · `LazyImage` (skeleton +
fade-in) · `PageLoader` · `ScrollProgress` · `Icon` (inline SVG set) ·
`SectionHeading` · plus `Button`, `Card`, `Container`, `Section`, `Spinner`.

## Project structure

```
src/
  api/            # axios client, mock API, placeholder catalogue data
  components/
    layout/       # Navbar, Footer, Logo, Layout (loader + scroll progress)
    sections/     # Hero, Services, About, Process, Gallery, Timeline,
                  # Pricing, Testimonials, FAQ, Newsletter, CTA, Stats,
                  # LogoCloud, FeaturedCourses, CourseCard/Grid, LeadForm
    ui/           # reusable premium primitives (see above)
  config/         # site.ts (branding) · images.ts (photo sources)
  hooks/          # useCourses, useAsync
  pages/          # Home, Courses, CourseDetail, Contact, NotFound
  types/ utils/   # shared types + helpers
public/           # favicon, og-image, robots.txt, sitemap.xml
```

## Branding

All brand strings live in **`src/config/site.ts`** and **`index.html`**.
Update those to rebrand across the whole app.

## Images & licensing

Photographic images are referenced from the **Unsplash CDN** (see
`src/config/images.ts`) and are used under the [Unsplash License](https://unsplash.com/license)
(free for commercial/non-commercial use, no attribution required). They are
loaded with `loading="lazy"`, `decoding="async"`, sized via URL params, and
served as WebP for performance.

> To fully self-host (recommended for production/offline builds), download each
> image into `public/media/` and repoint the constants in `images.ts` at the
> local paths. All icons, illustrations, gradients, and decorative visuals are
> original (inline SVG / CSS) and require no third-party licensing.

## Performance & accessibility

- Native lazy loading + async decoding on images; WebP format; skeletons to
  avoid layout shift.
- `prefers-reduced-motion` respected globally (animations disabled).
- Semantic landmarks, focus-visible rings, `aria-*` on interactive controls.

## Notes & limitations

- Course/testimonial/FAQ data is mock/placeholder (`src/api/`). Swap the mock
  function bodies for real `apiClient` calls when a backend exists — consuming
  components won't change.
- Form + newsletter submissions are simulated (logged to console).
