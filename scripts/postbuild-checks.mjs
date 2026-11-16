// Build-time QA. Fails the build (exit 1) on SEO/content errors. Run automatically by `npm run build`.
// Checks: one H1, unique titles + metas, title/meta length, canonical, JSON-LD parses, internal links resolve,
// banned words/claims, and word counts. Writes a report to qa-report.json.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const errors = [];
const warnings = [];
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else files.push(p);
  }
})(DIST);

const htmlFiles = files.filter((f) => f.endsWith('.html'));
const textFiles = files.filter((f) => /\.(html|txt|xml)$/.test(f));
const routeOf = (f) => '/' + path.relative(DIST, f).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '/');
const exists = new Set(htmlFiles.map(routeOf));
files.forEach((f) => exists.add('/' + path.relative(DIST, f).replace(/\\/g, '/')));

const BANNED = [
  'plumb', '24/7', '24 hours', 'around the clock', 'elevate', 'unlock', 'seamless', 'cutting-edge', 'state-of-the-art', 'top-notch',
  'world-class', "in today's fast-paced world", 'look no further', 'delve', 'embark', 'journey', 'tapestry', 'realm', 'testament',
  'navigate the', 'peace of mind is just a call away', 'your trusted partner', "we've got you covered", 'game-changer', 'ensure optimal',
  'a breath of fresh air', 'rest assured', 'nestled', 'boasts', 'unparalleled', 'robust', 'comprehensive solutions', 'tailored solutions',
  "whether you're",
];
const stripTags = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
const SKIP_SEO = new Set(['/404/', '/_styleguide/', '/thank-you/']);
const titles = new Map();
const metas = new Map();
const report = { pages: [], bannedHits: [], brokenLinks: [], jsonLdErrors: [] };

for (const f of htmlFiles) {
  const route = routeOf(f);
  const html = fs.readFileSync(f, 'utf8');
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] ?? '';
  const meta = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] ?? '';
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const text = stripTags(html.replace(/<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>|<nav[\s\S]*?<\/nav>|<form[\s\S]*?<\/form>/gi, ' '));
  const words = text.split(/\s+/).filter((w) => /[a-z]/i.test(w)).length;
  report.pages.push({ route, h1s, titleLen: title.length, metaLen: meta.length, words });

  if (h1s !== 1) errors.push(`${route}: ${h1s} <h1> tags`);
  if (!canonical) errors.push(`${route}: missing canonical`);
  if (!SKIP_SEO.has(route)) {
    const t = title.replace(/&amp;/g, '&');
    const m = meta.replace(/&amp;/g, '&');
    if (t.length > 60) errors.push(`${route}: title ${t.length} chars: "${t}"`);
    if (m.length < 120 || m.length > 160) errors.push(`${route}: meta description ${m.length} chars`);
    else if (m.length < 140 || m.length > 155) warnings.push(`${route}: meta ${m.length} chars (target 140–155)`);
    if (titles.has(t)) errors.push(`duplicate title on ${route} and ${titles.get(t)}`);
    if (metas.has(m)) errors.push(`duplicate meta on ${route} and ${metas.get(m)}`);
    titles.set(t, route);
    metas.set(m, route);
  }

  for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(json);
      const graph = data['@graph'] || [];
      if (!graph.length) throw new Error('empty @graph');
      if (JSON.stringify(data).includes('streetAddress')) throw new Error('streetAddress present');
      if (JSON.stringify(data).includes('AggregateRating')) throw new Error('AggregateRating present');
    } catch (e) {
      report.jsonLdErrors.push(`${route}: ${e.message}`);
      errors.push(`${route}: JSON-LD ${e.message}`);
    }
  }

  for (const [, href] of html.matchAll(/href="([^"#?]*)(?:[#?][^"]*)?"/g)) {
    if (!href || !href.startsWith('/') || href.startsWith('//')) continue;
    if (!exists.has(href)) {
      report.brokenLinks.push(`${route} -> ${href}`);
      errors.push(`${route}: broken internal link ${href}`);
    }
  }
}

for (const f of textFiles) {
  const route = routeOf(f);
  if (route.startsWith('/_astro')) continue;
  const raw = fs.readFileSync(f, 'utf8');
  const text = (f.endsWith('.html') ? stripTags(raw) : raw).toLowerCase();
  for (const w of BANNED) {
    const re = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}`, 'g');
    const n = (text.match(re) || []).length;
    if (n) {
      report.bannedHits.push(`${route}: "${w}" x${n}`);
      errors.push(`${route}: banned phrase "${w}" x${n}`);
    }
  }
}

fs.writeFileSync('qa-report.json', JSON.stringify({ errors, warnings, ...report }, null, 2));
console.log(`\nQA: ${htmlFiles.length} pages checked, ${errors.length} errors, ${warnings.length} warnings`);
warnings.slice(0, 40).forEach((w) => console.log('  warn  ' + w));
errors.forEach((e) => console.log('  ERROR ' + e));
if (errors.length) process.exit(1);
console.log('QA passed: one H1 per page, unique titles/metas, JSON-LD valid, no broken internal links, no banned phrases.');
