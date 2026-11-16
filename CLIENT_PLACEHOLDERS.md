# Client placeholders — Utah Heritage HVAC

Everything below needs a real value from the client before launch. Most live in `src/data/` so one edit updates every page, the schema, `llms.txt` and the footer.

## Business facts — `src/data/business.ts`
| Line | Item | Current state |
|---|---|---|
| 38 | Hours | Using Mon–Sat 7 AM–7 PM, Sun closed (copied from the current live site). **Confirm.** |
| 46 | Utah contractor license # | Empty (optional). Shows in footer/trust bar/schema once filled. |
| 49 | Facebook URL | Empty — icon hidden until set. |
| 51 | Instagram URL | Empty — icon hidden until set. |
| 53 | Google Business Profile URL | Empty — added to schema `sameAs` once set. |
| 56 | GBP "read reviews" link | Falls back to a Google Maps search for the business name. Replace with the direct review link. |
| 6–9 | Flags | `SHOW_FAMILY_NAMES` (Lauren, Elijah, Nicholas) and `SHOW_FINANCING` are both `false` until confirmed. |

## Coupons — `src/data/coupons.ts`
| Line | Item |
|---|---|
| 15, 17 | Spring AC Tune-Up: offer + expiry |
| 23, 25 | Fall Furnace Tune-Up: offer + expiry |
| 31, 33 | Repair Visit Savings: offer + expiry |
| 39, 41 | New System Install: offer + expiry |
| 47, 49 | Commercial Maintenance Agreement: offer + expiry |

No dollar amounts were invented. Fine print is generic and should be checked.

## Photos — `src/data/photos.ts` (rendered as labeled gray boxes until supplied)
| Line | Needed shot | Used on |
|---|---|---|
| 31 | Corbin explaining a repair to a homeowner | Every service page "Why choose us", Meet Corbin |
| 32 | Commercial rooftop unit service | Homepage commercial block, all commercial pages |
| 33 | Thermostat or zoning control panel | Efficiency Audit |
| 34 | Dirty vs. clean air filter | Indoor Air Quality pages, homepage IAQ block |
| 35 | Company truck or van | (spare) |

Real photos already in use: Corbin portrait (homepage owner section, Meet Corbin, blog author box), AC condenser install, five furnace/coil install shots, mini split indoor + outdoor (from client files in Downloads).

**Logo:** `src/assets/brand/logo.webp` is cropped from a client photo watermark (252 px). Replace with the original logo file (SVG or a large PNG) for a sharper header, favicons and OG image, then run `node scripts/make-icons.mjs`.

## Other
| File:line | Item |
|---|---|
| `src/data/reviews.ts:2` | Review text copied verbatim from the live homepage. Confirm it matches Google word for word. |
| `src/pages/index.astro:245` | Financing block (hidden behind `SHOW_FINANCING`): partner, terms, approval language. |
| `src/pages/maintenance-plan/index.astro:72` | Can a plan price be shown? Currently "Call for your quote". |
| `src/pages/privacy-policy.astro:13` | Attorney review of privacy policy (includes SMS/TCPA language). |
| `src/pages/terms.astro:13` | Attorney review of terms. |
| `public/indexnow-key.txt:1` | Generate an IndexNow key, put it in the file and rename the file to `<key>.txt`. |
| `.env` (Vercel) | `PUBLIC_FORM_ENDPOINT` (GoHighLevel webhook) and `PUBLIC_GA4_ID`. Until the endpoint is set, forms skip posting and go straight to `/thank-you/`. |
