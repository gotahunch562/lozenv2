#!/usr/bin/env node
/**
 * One-time / maintenance patches for pages that use shared components.
 * Run after convert-html.mjs if you need to re-apply component wiring.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PAGES = path.resolve(__dirname, '../src/pages');

const serviceConfig = {
  'service-buyer-sourcing.astro': {
    highlight: 'global buyer sourcing',
    selected: 'Global Buyer Sourcing',
  },
  'service-market-research.astro': {
    highlight: 'market research & entry',
    selected: 'Market Research & Entry',
  },
  'service-licensing-documentation.astro': {
    highlight: 'licensing & documentation',
    selected: 'Licensing & Documentation',
  },
  'service-shipping-logistics.astro': {
    highlight: 'shipping & logistics',
    selected: 'Shipping & Logistics',
  },
  'service-payments-lc.astro': {
    highlight: 'payments & lc',
    selected: 'Payments & LC',
  },
};

function patchServicePage(file, { highlight, selected }) {
  let content = fs.readFileSync(path.join(PAGES, file), 'utf8');
  content = content.replace(
    /^---\nimport BaseLayout from '\.\.\/layouts\/BaseLayout\.astro';\n---/,
    `---\nimport BaseLayout from '../layouts/BaseLayout.astro';\nimport ConsultForm from '../components/ConsultForm.astro';\n---`
  );
  content = content.replace(/href="\/#consult"/g, 'href="#consult"');
  content = content.replace(/href="\/#how"/g, 'href="#how"');
  content = content.replace(/class="check reveal"/g, 'class="check"');
  content = content.replace(
    /<section id="consult" class="cta-sec">[\s\S]*?<\/section>\n<\/BaseLayout>/,
    `<ConsultForm serviceHighlight="${highlight}" selectedService="${selected}" />\n</BaseLayout>`
  );
  fs.writeFileSync(path.join(PAGES, file), content);
  console.log(`  ✓ ${file}`);
}

function patchCtaStrip(file, props) {
  let content = fs.readFileSync(path.join(PAGES, file), 'utf8');
  if (!content.includes('CtaStrip')) {
    content = content.replace(
      /^---\nimport BaseLayout from '\.\.\/layouts\/BaseLayout\.astro';\n---/,
      `---\nimport BaseLayout from '../layouts/BaseLayout.astro';\nimport CtaStrip from '../components/CtaStrip.astro';\n---`
    );
  }
  const block = new RegExp(
    `<section(?: style="padding-top:0")?>\\s*<div class="wrap">\\s*<div class="cta-strip reveal">[\\s\\S]*?<\\/section>`
  );
  const replacement = `<CtaStrip\n  title="${props.title}"\n  description="${props.description}"\n  primaryHref="${props.primaryHref}"\n  primaryLabel="${props.primaryLabel ?? 'Get a Free Consultation →'}"\n  secondaryHref="${props.secondaryHref}"\n  secondaryLabel="${props.secondaryLabel ?? 'Join the free webinar'}"\n  paddedTop={${props.paddedTop ?? false}}\n/>`;
  content = content.replace(block, replacement);
  fs.writeFileSync(path.join(PAGES, file), content);
  console.log(`  ✓ ${file}`);
}

console.log('Patching service pages...');
for (const [file, config] of Object.entries(serviceConfig)) {
  patchServicePage(file, config);
}

console.log('Patching CTA strips...');
const ctaPages = {
  'about.astro': {
    title: 'Ready to take your products global?',
    description:
      "Book a free consultation and we'll map out exactly how we can help you export profitably.",
    primaryHref: '/contact',
    secondaryHref: '/webinar',
  },
  'consultancy.astro': {
    title: 'Ready to take your products global?',
    description:
      "Book a free consultation and we'll map out exactly how we can help you export profitably.",
    primaryHref: '/contact',
    secondaryHref: '/webinar',
  },
  'case-studies.astro': {
    title: 'Ready to take your products global?',
    description:
      "Book a free consultation and we'll map out exactly how we can help you export profitably.",
    primaryHref: '/contact',
    secondaryHref: '/webinar',
  },
  'case-agrotrade.astro': {
    title: 'Want results like AgroTrade?',
    description:
      'We can help with market research and buyer sourcing for your business too. Book a free consultation to find out how.',
    primaryHref: '/contact',
    secondaryHref: '/consultancy',
    secondaryLabel: 'View consultancy options',
  },
  'case-meridian.astro': {
    title: 'Want results like Meridian Textiles?',
    description:
      'We can help with corporate consultancy for your business too. Book a free consultation to find out how.',
    primaryHref: '/contact',
    secondaryHref: '/consultancy',
    secondaryLabel: 'View consultancy options',
  },
  'case-northwind.astro': {
    title: 'Want results like Northwind Co.?',
    description:
      'We can help with payments and letters of credit for your business too. Book a free consultation to find out how.',
    primaryHref: '/contact',
    secondaryHref: '/consultancy',
    secondaryLabel: 'View consultancy options',
  },
  'case-pioneer.astro': {
    title: 'Want results like Pioneer Works?',
    description:
      'We can help with licensing and documentation for your business too. Book a free consultation to find out how.',
    primaryHref: '/contact',
    secondaryHref: '/consultancy',
    secondaryLabel: 'View consultancy options',
  },
  'webinar.astro': {
    title: 'Seats fill up every week',
    description:
      'Reserve yours now and get the workbook, Zoom link, and a calendar reminder by email.',
    primaryHref: '#register',
    primaryLabel: 'Reserve my free seat →',
    secondaryHref: '/#services',
    secondaryLabel: 'Explore our services',
    paddedTop: true,
  },
};

for (const [file, props] of Object.entries(ctaPages)) {
  patchCtaStrip(file, props);
}

console.log('Done.');
