# Redirects — status

The live WordPress sitemap (`/wp-sitemap.xml`) was crawled on 2026-11-16. Every URL in it is mapped in `scripts/redirects.mjs`; run `node scripts/redirects.mjs` to regenerate `vercel.json` after edits. `vercel.json` sets `trailingSlash: true`, so non-slash variants redirect to the slash version first.

## Mapped (all 301)
- Old AC repair, heating/furnace repair, new install, emergency services → new service pages
- `/contact/`, `/maintenance-plan/`, `/meet-corbin/` → same paths on the new site (no redirect needed)
- Service-area hub + St. George, Washington, Cedar City, Enterprise, Santa Clara, Ivins → `/service-areas/<city>/`
- 3 blog posts → `/blog/<same-slug>/`
- `/category/*`, `/feed/` → `/blog/`; `/author/*` → `/meet-corbin/`; WP sitemaps → `/sitemap-index.xml`

## Needs a decision
| Old URL | Currently redirects to | Question |
|---|---|---|
| `/hvac-service-areas-st-george-to-cedar-city-ut/hvac-service-in-veyo-utah/` | `/service-areas/` | Veyo had two pages on the old site. Build a Veyo city page? |
| `/hvac-service-areas-st-george-to-cedar-city-ut/hvac-repair-in-veyo-utah/` | `/service-areas/` | (same) |
| `/hvac-service-areas-st-george-to-cedar-city-ut/hvac-repair-in-la-verkin-utah/` | `/service-areas/` | Build a La Verkin page? (Hurricane page mentions La Verkin.) |
| `/hvac-service-areas-st-george-to-cedar-city-ut/hvac-repair-in-toquerville-utah/` | `/service-areas/` | Build a Toquerville page? (Hurricane page mentions it.) |
| `/services/`, `/home/`, `/about/` | `/`, `/`, `/meet-corbin/` | Not in the sitemap; added as common WordPress guesses. Check Search Console for other 404s after launch. |

## After launch
- Check Google Search Console > Pages > Not found (404) for a few weeks and add any stragglers.
- Old pages and images under `/wp-content/uploads/` are not redirected.
