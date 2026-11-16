// Builds /llms.txt and /llms-full.txt from the same data files the pages use, so entity facts never drift.
import { business, SITE_URL } from '../data/business';
import { services, serviceHref, categoryNames } from '../data/services';
import { hubs } from '../data/hubs';
import { areas } from '../data/areas';
import { faqPages } from '../data/faq-pages';
import { springChecklist, fallChecklist } from '../data/services-maintenance';
import { cityList } from '../data/areas-list';
import { homeFaqs } from '../data/faqs';
import { plain } from './md';
import { areaExtra, hubExtra } from '../data/extra-copy';

const u = (p: string) => `${SITE_URL}${p}`;
const cities = cityList.map((c) => c.name).join(', ');
const hours = business.hours.map((h) => `${h.days}: ${h.open ? `${h.open}–${h.close}` : 'Closed'}`).join('; ');

const summary = `${business.name} (${business.longName}) is a 100% locally owned, independent HVAC company in Southern Utah, founded in ${business.foundingYear} by owner ${business.owner}, who has worked in HVAC since ${business.careerStartYear}. It repairs, installs and maintains air conditioners, furnaces, heat pumps and ductless mini splits for homes and businesses in ${cities}, plus surrounding Washington County and Iron County, Utah. Licensed and insured. Upfront pricing before work, free estimates on new systems, no travel fees, same-day service when available, emergency service available.`;

export function llmsTxt(blog: { id: string; title: string; description: string }[]): string {
  const lines: string[] = [];
  lines.push(`# ${business.name}`, '', `> ${summary}`, '');
  lines.push('## Contact', '', `- Phone: ${business.phone}`, `- Email: ${business.email}`, `- Hours: ${hours}. ${business.emergencyLine}.`, `- Based in: Enterprise, UT (service-area business, no storefront)`, `- Owner: ${business.owner}`, '');
  lines.push('## Key pages', '');
  lines.push(`- [Home](${u('/')}): AC and heating repair in St. George, Cedar City and Southern Utah`);
  lines.push(`- [Meet Corbin](${u('/meet-corbin/')}): owner bio, career history and company fact sheet`);
  lines.push(`- [Maintenance Plan](${u('/maintenance-plan/')}): two visits a year, what each visit includes`);
  lines.push(`- [Coupons](${u('/coupons/')}): current specials`);
  lines.push(`- [Contact](${u('/contact/')}): request service`);
  lines.push(`- [Reviews](${u('/reviews/')}): Google reviews from customers`, '');
  for (const cat of ['air-conditioning', 'heating', 'maintenance-plan', 'commercial'] as const) {
    lines.push(`## ${categoryNames[cat]}`, '');
    if (cat !== 'maintenance-plan') lines.push(`- [${hubs[cat].h1}](${u(`/${cat}/`)}): ${plain(hubs[cat].sub)}`);
    for (const s of services.filter((x) => x.category === cat)) lines.push(`- [${s.name}](${u(serviceHref(s))}): ${plain(s.short)}`);
    const fp = faqPages.find((f) => f.category === cat);
    if (fp) lines.push(`- [${fp.name}](${u(`/${cat}/faqs/`)}): ${fp.sub}`);
    lines.push('');
  }
  lines.push('## Service areas', '', `- [All service areas](${u('/service-areas/')})`);
  for (const a of areas) lines.push(`- [${a.name}, UT](${u(`/service-areas/${a.slug}/`)}): ${a.county}`);
  lines.push('', '## Blog', '');
  for (const p of blog) lines.push(`- [${p.title}](${u(`/blog/${p.id}/`)}): ${p.description}`);
  lines.push('', '## Optional', '', `- [Full text of service, area and about pages](${u('/llms-full.txt')})`, '');
  return lines.join('\n');
}

export function llmsFullTxt(): string {
  const out: string[] = [];
  const sec = (t: string) => out.push('', '='.repeat(70), t, '='.repeat(70), '');
  out.push(`${business.name}: full site content (plain text)`, `Source: ${SITE_URL}`, '', summary, '', `Phone: ${business.phone} | Email: ${business.email} | Hours: ${hours}`);

  sec('COMPANY FACTS');
  out.push(`Company: ${business.name} (${business.longName})`, `Founded: ${business.foundingYear}`, `Owner: ${business.owner}`, `In HVAC since: ${business.careerStartYear}`, `Ownership: locally owned and independent, not a franchise`, `Based in: Enterprise, Utah`, `Service areas: ${cities}, and surrounding Washington and Iron County`, `Pricing: upfront pricing before work, free estimates on new systems, no travel fees`, `Credentials: licensed and insured`);
  out.push('', 'Owner story: Corbin Allen is a Utah native with about 20 years in HVAC. He started in 2006 running ductwork and doing residential and commercial installation on new construction, then trained in service, startups and diagnostics. He rose from technician to branch manager to operations manager at a major Southern Utah HVAC company, and launched Utah Heritage HVAC in 2026. The name honors his father\'s dream of an organic farm in Southern Utah called Utah Heritage Farms.');

  sec('MAINTENANCE PLAN');
  out.push('One simple plan, no tiers. Two visits a year: one before summer (AC) and one before winter (heating). We schedule both and send reminders. The same technician who handles repairs does the visits. Each visit takes 45 to 60 minutes. No travel fees. Heat pumps covered on both visits. If a problem is found, we explain it and give upfront pricing first; you decide. Price depends on system type and size. Regular maintenance helps systems last 15 to 20 years.');
  out.push('', 'Spring visit (AC):', ...springChecklist.map((x) => `- ${x}`), '', 'Fall visit (heating):', ...fallChecklist.map((x) => `- ${x}`));

  for (const cat of ['air-conditioning', 'heating', 'commercial'] as const) {
    const h = hubs[cat];
    sec(`${h.h1.toUpperCase()} (${u(`/${cat}/`)})`);
    out.push(h.quickAnswer, '', ...h.intro.map(plain));
    for (const s of [...h.sections, hubExtra[cat]]) out.push('', s.heading, ...s.body.map(plain), ...(s.list ?? []).map((l) => `- ${plain(l)}`));
    out.push('', 'FAQs:', ...h.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${plain(f.a)}`]));
  }

  for (const s of services) {
    sec(`${s.h1.toUpperCase()} (${u(serviceHref(s))})`);
    out.push(`Quick answer: ${s.quickAnswer}`, '', ...s.intro.map(plain), '', `${s.signsHeading}:`, ...s.signs.map((x) => `- ${x}`));
    out.push('', 'Process:', ...['Diagnose', 'Upfront price', 'You decide', 'We fix it right'].map((t, i) => `${i + 1}. ${t}: ${s.process[i]}`));
    out.push('', `${s.localHeading}:`, ...s.local.map(plain));
    if (s.more) out.push('', `${s.more.heading}:`, ...s.more.body.map(plain));
    out.push('', 'Why Utah Heritage HVAC:', ...s.whyUs.map(plain));
    if (s.extra) {
      out.push('', `${s.extra.heading}:`, ...(s.extra.list ?? []).map((x) => `- ${x}`));
      if (s.extra.table) out.push(s.extra.table.head.join(' | '), ...s.extra.table.rows.map((r) => r.join(' | ')));
    }
    out.push('', 'FAQs:', ...s.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${plain(f.a)}`]));
  }

  for (const fp of faqPages) {
    sec(`${fp.h1.toUpperCase()} (${u(`/${fp.category}/faqs/`)})`);
    for (const g of fp.groups) out.push(g.heading, ...g.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${plain(f.a)}`]), '');
  }

  for (const a of areas) {
    sec(`${a.h1.toUpperCase()} (${u(`/service-areas/${a.slug}/`)})`);
    out.push(`Quick answer: ${a.quickAnswer}`, '', ...a.intro.map(plain), '', `${a.climateHeading}:`, ...a.climate.map(plain), '', `${a.homesHeading}:`, ...a.homes.map(plain), '', ...(areaExtra[a.slug] ? [`${areaExtra[a.slug]!.heading}:`, ...areaExtra[a.slug]!.body.map(plain), ''] : []), a.servicesNote);
    out.push('', 'FAQs:', ...a.faqs.flatMap((f) => [`Q: ${f.q}`, `A: ${plain(f.a)}`]));
  }

  sec('GENERAL FAQS');
  out.push(...homeFaqs.flatMap((f) => [`Q: ${f.q}`, `A: ${plain(f.a)}`]));
  return out.join('\n') + '\n';
}
