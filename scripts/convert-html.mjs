import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_DIR = path.resolve(__dirname, '../../export-global-html');
const OUT_DIR = path.resolve(__dirname, '../src/pages');
const STYLES_SRC = path.resolve(HTML_DIR, 'styles.css');
const BASE_CSS = path.resolve(__dirname, '../src/styles/base.css');

const PAGE_MAP = {
  'index-3.html': 'index.astro',
  'about.html': 'about.astro',
  'contact.html': 'contact.astro',
  'consultancy.html': 'consultancy.astro',
  'webinar.html': 'webinar.astro',
  'blog.html': 'blog.astro',
  'case-studies.html': 'case-studies.astro',
  'case-agrotrade.html': 'case-agrotrade.astro',
  'case-meridian.html': 'case-meridian.astro',
  'case-northwind.html': 'case-northwind.astro',
  'case-pioneer.html': 'case-pioneer.astro',
  'service-buyer-sourcing.html': 'service-buyer-sourcing.astro',
  'service-market-research.html': 'service-market-research.astro',
  'service-licensing-documentation.html': 'service-licensing-documentation.astro',
  'service-shipping-logistics.html': 'service-shipping-logistics.astro',
  'service-payments-lc.html': 'service-payments-lc.astro',
};

/** Pages that use Astro components — convert only updates title/description/body shell. */
const COMPONENT_PAGES = new Set([
  'about.astro',
  'consultancy.astro',
  'case-studies.astro',
  'case-agrotrade.astro',
  'case-meridian.astro',
  'case-northwind.astro',
  'case-pioneer.astro',
  'service-buyer-sourcing.astro',
  'service-market-research.astro',
  'service-licensing-documentation.astro',
  'service-shipping-logistics.astro',
  'service-payments-lc.astro',
]);

function extractMeta(html, name) {
  const match = html.match(new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, 'i'));
  return match?.[1] ?? '';
}

function extractTitle(html) {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  return match?.[1] ?? 'Exporta Global';
}

function extractMainContent(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) return '';

  let body = bodyMatch[1];
  body = body.replace(/<header[\s\S]*?<\/header>/i, '');
  body = body.replace(/<div class="mobile-panel"[\s\S]*?<\/div>/i, '');
  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

  const footerStart = body.indexOf('<footer');
  if (footerStart === -1) return body.trim();

  const contentCandidates = [
    body.indexOf('<!-- ============ HERO'),
    body.indexOf('<section class="hero"'),
    body.indexOf('<section class="page-hero"'),
    body.indexOf('<section class="article-hero"'),
    body.indexOf('<div class="marquee"'),
    body.indexOf('<section '),
  ].filter((index) => index >= 0);

  const start = contentCandidates.length ? Math.min(...contentCandidates) : 0;
  return body.slice(start, footerStart).trim();
}

function rewriteLinks(html) {
  return html
    .replace(/href="index-3\.html([^"]*)"/g, (_, hash) => `href="/${hash}"`)
    .replace(/href="([^":#][^"]*?)\.html([^"]*)"/g, (_, slug, hash) => `href="/${slug}${hash}"`)
    .replace(/src="(?!https?:\/\/|\/)([^"]+)"/g, 'src="/$1"')
    .replace(/onsubmit="return false"/g, '')
    .replace(/class="check reveal"/g, 'class="check"');
}

function escapeForFrontmatter(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function buildPage(htmlFile, outFile) {
  if (COMPONENT_PAGES.has(outFile)) {
    console.log(`  ⊘ ${outFile} (skipped — uses components)`);
    return;
  }

  const html = fs.readFileSync(path.join(HTML_DIR, htmlFile), 'utf8');
  const title = extractTitle(html);
  const description = extractMeta(html, 'description');
  const content = rewriteLinks(extractMainContent(html));

  const astro = `---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="${escapeForFrontmatter(title)}" description="${escapeForFrontmatter(description)}">
${content}
</BaseLayout>
`;

  fs.writeFileSync(path.join(OUT_DIR, outFile), astro);
  console.log(`  ✓ ${outFile}`);
}

function syncBaseStyles() {
  fs.copyFileSync(STYLES_SRC, BASE_CSS);
  console.log('  ✓ src/styles/base.css (synced from export-global-html/styles.css)');
}

fs.mkdirSync(OUT_DIR, { recursive: true });

console.log('Syncing base styles...');
syncBaseStyles();

console.log('Converting pages...');
for (const [htmlFile, outFile] of Object.entries(PAGE_MAP)) {
  buildPage(htmlFile, outFile);
}

console.log(`Done — ${Object.keys(PAGE_MAP).length} pages processed.`);
