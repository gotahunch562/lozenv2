# Lozen Advisory

Production website for [Lozen Advisory](https://www.lozenadvisory.com).

Lozen Advisory provides institutional advisory services focused on AI accountability, board governance, human attribution, AI investment risk, workforce materiality, and disclosure-independent governance.

## Technology

* Astro
* TypeScript
* Markdown content collections
* Vercel
* Resend
* Pages CMS

## Requirements

* Node.js 22.x
* npm

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
src/
├── components/          Shared site components and forms
├── content/
│   ├── blog/            Blog articles
│   └── news/            News and press releases
├── layouts/             Shared page and article layouts
├── pages/
│   ├── api/             Server-side API routes
│   └── services/        Advisory service pages
└── styles/              Global and page-specific styles

public/
├── blog/                Blog and article images
├── download/            Public reports, briefs, and tools
├── robots.txt           Search crawler instructions
├── apple-touch-icon.png
└── apple-touch-icon-precomposed.png
```

## Advisory services

The website currently presents five services:

1. Board AI Governance Advisory
2. CFO AI Investment Advisory
3. Algorithmic Accountability Risk
4. Name Standard℠ Advisory
5. AI Workforce Materiality Briefing

## Forms

Contact and briefing submissions are handled by:

```text
src/pages/api/inquiry.ts
```

Service-page forms use the shared component:

```text
src/components/ConsultForm.astro
```

All inquiry forms submit to the same API endpoint:

```text
/api/inquiry
```

Email delivery is provided through Resend.

Required environment variables:

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL="Lozen Advisory Website <hello@reply.lozenadvisory.com>"
RESEND_TO_EMAIL="hello@lozenadvisory.com"
```

The verified Resend sending domain is:

```text
reply.lozenadvisory.com
```

Do not commit API keys or local environment files.

## Content management

Pages CMS is configured in:

```text
.pages.yml
```

Blog content is stored in:

```text
src/content/blog/
```

News and press content is stored in:

```text
src/content/news/
```

Blog media belongs in:

```text
public/blog/
```

Markdown image paths should use the public URL format:

```text
/blog/filename.webp
```

Downloadable reports, briefs, spreadsheets, and tools belong in:

```text
public/download/
```

## Routes and redirects

Public routes are generated from files in `src/pages/` and from Astro content collections.

Permanent redirects are maintained in:

```text
vercel.json
```

When a route changes, update internal links to the current destination rather than relying on redirects for ordinary site navigation.

The project uses trailing slashes for internal routes:

```text
/about/
/services/
/contact/
```

The homepage remains the root route:

```text
/
```

## Sitemap and robots

The canonical production domain is configured in:

```text
astro.config.mjs
```

The production sitemap is available at:

```text
https://www.lozenadvisory.com/sitemap-index.xml
https://www.lozenadvisory.com/sitemap-0.xml
```

Crawler instructions are available at:

```text
https://www.lozenadvisory.com/robots.txt
```

The sitemap uses July 28, 2026 as the initial site-wide modification date for the production relaunch.

## Accessibility

The shared base layout provides a single main landmark:

```html
<main id="main-content">
```

Page headings should follow a logical hierarchy:

```text
H1 — page title
H2 — major section
H3 — subsection or card title
```

Do not use heading levels only for visual sizing. Preserve visual styles through CSS classes.

## Deployment

The production site deploys to Vercel from the `main` branch.

Before pushing production changes:

```bash
git pull --rebase origin main
npm run build
git push origin main
```

After deployment, verify:

```text
https://www.lozenadvisory.com/
https://www.lozenadvisory.com/robots.txt
https://www.lozenadvisory.com/sitemap-index.xml
https://www.lozenadvisory.com/sitemap-0.xml
```

For form-related changes, test:

* Contact form
* Request Briefing form
* One service-page briefing form
* Successful email delivery
* Reply-To behavior
* Visible validation and failure handling

## Generated directories

The following local build and deployment directories should remain excluded from Git:

```text
.astro/
.vercel/
dist/
```

## Repository workflow

Work directly on `main` unless a separate branch is explicitly required.

Before pushing changes:

```bash
git status
git diff --check
git pull --rebase origin main
git push origin main
```

Do not commit generated output, environment files, API keys, or local Vercel configuration.

## Ownership

Website content, proprietary frameworks, reports, trademarks, service materials, and other original intellectual property are owned by Lozen Advisory LLC unless otherwise stated.
