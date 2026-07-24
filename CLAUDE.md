# Export Global — Astro Theme

## Commands

```bash
npm run dev      # start dev server at localhost:4321
npm run build    # production build + generate sitemap
npm run preview  # preview the build locally
```

The `convert` and `patch` scripts in `package.json` are one-time migration tools (HTML → Astro). Do not re-run them — they will overwrite manual edits.

## Architecture

### Styles
Split into three files, all imported via `src/styles/global.css`:

| File | Purpose |
|---|---|
| `src/styles/base.css` | All shared styles — layout, nav, typography, components, media queries |
| `src/styles/home.css` | Homepage-only styles — hero, bento cards, stats, pain/gain grid, mentor |
| `src/styles/webinar.css` | Webinar page-only styles — countdown, registration card, agenda |

**Do not** add shared styles to `home.css` or `webinar.css`. Everything reused across pages goes in `base.css`.

Breakpoints: `max-width: 980px` (tablet) and `max-width: 760px` (mobile).

### Components
Located in `src/components/`:

- `Header.astro` — sticky nav with mobile hamburger drawer
- `Footer.astro` — footer grid + copyright (uses `new Date().getFullYear()`)
- `BaseLayout.astro` — HTML shell, accepts `title`, `description`, `isHome` props
- `BlogPost.astro` — layout for MDX blog articles (in `src/layouts/`)
- `SiteScripts.astro` — all shared JS: scroll/nav, reveal animations, count-up, contact form, newsletter form, webinar countdown
- `CtaStrip.astro` — CTA band used on about, consultancy, case pages, blog articles. Props: `title`, `description`, `primaryHref`, `primaryLabel`, `secondaryHref`, `secondaryLabel`, `paddedTop`
- `ConsultForm.astro` — consultation form used on all 5 service pages. Props: `formId`, `successId`, `defaultService`
- `AuthorBox.astro` — author byline for blog articles
- `FounderPortrait.astro` — optimised `<Image />` for Daniel Carter portrait. Props: `variant` (`mentor` | `host` | `byline` | `author`)
- `PostCard.astro` — blog index card
- `RelatedPosts.astro` — related posts strip at bottom of blog articles

### Pages
| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/contact` | `src/pages/contact.astro` |
| `/consultancy` | `src/pages/consultancy.astro` |
| `/webinar` | `src/pages/webinar.astro` |
| `/blog` | `src/pages/blog.astro` |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` (MDX collection) |
| `/case-studies` | `src/pages/case-studies.astro` |
| `/case-*` | `src/pages/case-agrotrade.astro` etc. |
| `/service-*` | `src/pages/service-buyer-sourcing.astro` etc. |

### Blog Content
Blog posts live in `src/content/blog/` as `.md` files. The collection schema is defined in `src/content.config.ts`.

Required frontmatter:
```yaml
---
title: "Post title"
description: "SEO description"
tag: "Logistics"          # shown as category label
emoji: "🚢"
image: "/blog/my-post.png"
pubDate: 2026-06-10
readTime: "6 min read"
featured: false           # true = featured card on blog index
lead: "Opening paragraph shown in hero."
relatedSlugs: ["other-post-slug"]
---
```

Blog images go in `public/blog/` and are referenced as `/blog/filename.png`.

### Assets
- `src/assets/founder-daniel-carter.png` — source for Astro image optimisation (used via `FounderPortrait.astro`)
- `public/` — static assets served as-is: favicons, team photos, blog images
- Team photos: `public/team-aisha-morgan.png`, `public/team-raj-kapoor.png`, `public/team-elena-lopez.png`

## Key Decisions

- **No UI framework** — pure Astro with vanilla JS in `SiteScripts.astro`
- **No `<img>` on the founder portrait** — always use `FounderPortrait` component for Astro image optimisation
- **Case study pages are static `.astro` files** — not a content collection (only 4 cases)
- **`site` in `astro.config.mjs`** — update to the real domain before deploying; required for sitemap
- **Redirects** in `astro.config.mjs` — old `/blog-*` URLs redirect to `/blog/*` for backward compatibility
