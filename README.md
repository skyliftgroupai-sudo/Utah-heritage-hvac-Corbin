# Utah Heritage HVAC website

Astro 5 + Tailwind CSS v4, static output, deployed on Vercel.

## Commands
```bash
npm install
npm run dev        # local dev server
npm run build      # build + QA checks (fails on SEO/content errors)
npm run preview    # serve dist/ at http://localhost:4321
```

## Where things live
- `src/data/business.ts` — name, phone, email, hours, socials, flags. Single source of truth.
- `src/data/services-*.ts`, `extra-copy.ts` — copy for every service page (unique per page).
- `src/data/hubs.ts`, `faq-pages.ts`, `areas.ts` — hub, FAQ and city page copy.
- `src/data/coupons.ts`, `reviews.ts`, `photos.ts` — offers, reviews, photo map.
- `src/content/blog/*.md` — blog posts (content collection).
- `src/lib/schema.ts` — JSON-LD graph builders. `src/lib/llms.ts` — builds `/llms.txt` and `/llms-full.txt`.
- `scripts/postbuild-checks.mjs` — one H1, unique titles/metas, lengths, canonical, JSON-LD, broken links, banned words. Writes `qa-report.json`.
- `scripts/redirects.mjs` — old-URL 301 map → `vercel.json`.

## Environment variables (Vercel)
- `PUBLIC_FORM_ENDPOINT` — GoHighLevel inbound webhook. Forms POST here, then go to `/thank-you/`.
- `PUBLIC_GA4_ID` — GA4 measurement ID. Loaded after page idle. Events: `click_to_call` (tel links), `generate_lead` (thank-you page).

See `CLIENT_PLACEHOLDERS.md` for everything still needed from the client and `REDIRECTS_TODO.md` for redirect decisions.
