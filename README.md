# Exporta Global — Astro Site

Export-import consultancy website built with [Astro](https://astro.build) v6, converted from the static HTML templates in `../export-global-html`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Build static site to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run convert` | Sync base CSS + re-convert HTML pages (skips component pages) |
| `npm run patch` | Re-apply shared component wiring to pages |

## Project structure

```
src/
  components/   Header, Footer, CtaStrip, ConsultForm, AuthorBox, FounderPortrait, SiteScripts
  content/blog/ MDX blog posts (edit these — no Astro files needed)
  layouts/    BaseLayout.astro, BlogPost.astro
  pages/      Static pages + blog/[slug].astro
  styles/
    base.css    Shared styles (synced from export-global-html/styles.css)
    home.css    Homepage-only styles
    webinar.css Webinar page styles
    global.css  Imports the above
public/         favicon and other static files
src/assets/     founder-daniel-carter.png (optimized via astro:assets)
```

## Blog posts (MDX)

Add or edit posts in `src/content/blog/` as `.mdx` files:

```mdx
---
title: "Your Post Title"
description: "SEO description"
tag: "Buyer Sourcing"
emoji: "🌍"
pubDate: 2026-06-02
readTime: "7 min read"
featured: false
lead: "Opening paragraph shown below the title."
relatedSlugs: ["other-post-slug"]
---

## Your heading

Post body in Markdown…
```

Posts publish at `/blog/your-file-name/` (filename without extension = slug).

Old URLs (`/blog-find-overseas-buyers`, etc.) redirect to the new `/blog/…` paths.

## Configuration

Update `site` in `astro.config.mjs` to your production domain before deploying. Sitemap is generated automatically via `@astrojs/sitemap`.

## License

MIT — see [LICENSE](LICENSE).

## Pages

All 19 HTML pages are converted:

- `/` — Home (from `index-3.html`)
- `/about`, `/contact`, `/consultancy`, `/webinar`, `/blog`
- `/case-studies` and individual case study pages
- `/service-*` service detail pages
- `/blog-*` blog article pages

## Assets

Static assets live in `public/`. The founder portrait is in `src/assets/founder-daniel-carter.png` and optimized via `FounderPortrait.astro`.


