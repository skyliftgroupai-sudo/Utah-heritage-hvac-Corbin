// Single source of truth for NAP + entity facts. Every page, schema block, llms.txt and the footer read from here.
export const SITE_URL = 'https://utahheritagehvac.com';

/** Feature flags — flip to true once the client confirms. */
export const FLAGS = {
  SHOW_FAMILY_NAMES: false,
  SHOW_FINANCING: false,
} as const;

export const business = {
  name: 'Utah Heritage HVAC',
  longName: 'Utah Heritage HVAC of Southern Utah',
  owner: 'Corbin Allen',
  ownerTitle: 'Owner',
  phone: '(801) 661-5412',
  phoneHref: 'tel:+18016615412',
  phoneE164: '+18016615412',
  email: 'utahheritagehvac@gmail.com',
  baseTown: 'Enterprise, UT',
  foundingYear: 2026,
  careerStartYear: 2006,
  taglines: {
    primary: 'Comfort Built for Red Rock Country',
    trusted: "Southern Utah's Trusted HVAC",
    craft: 'Serving Southern Utah with Honesty & Craft',
  },
  blurb:
    'Locally owned heating and air conditioning service for St. George, Cedar City and the rest of Washington and Iron County. Upfront pricing, no travel fees.',
  proofPoints: [
    'Licensed & insured',
    '20+ years owner experience',
    'Free estimates',
    'Same-day service when available',
    'Upfront pricing before work starts',
    'No travel fees',
  ],
  emergencyLine: 'Emergency service available',
  /** Pulled from the current utahheritagehvac.com contact page. [CLIENT TO PROVIDE: confirm hours are still current] */
  hours: [
    { days: 'Monday – Saturday', open: '7:00 AM', close: '7:00 PM' },
    { days: 'Sunday', open: null, close: null },
  ],
  hoursSchema: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '19:00' },
  ],
  /** [CLIENT TO PROVIDE: Utah contractor license number (optional)] */
  licenseNumber: '',
  social: {
    /** [CLIENT TO PROVIDE: Facebook page URL] */
    facebook: '',
    /** [CLIENT TO PROVIDE: Instagram profile URL] */
    instagram: '',
    /** Google Business Profile (Maps place link, CID from the share link the client sent). */
    gbp: 'https://www.google.com/maps?cid=15005902072726020070',
  },
  /** Opens the Google Business Profile, where the reviews live. */
  gbpReviewsUrl: 'https://share.google/O4URQ4CrhoDzj3ejs',
  /** Exact name on the Google Business Profile. Map embeds search this so Google shows the business card. */
  gbpName: 'Utah Heritage HVAC of Southern Utah LLC',
  counties: ['Washington County', 'Iron County'],
} as const;

export const sameAs = [business.social.gbp, business.social.facebook, business.social.instagram].filter(Boolean);

export const LAST_UPDATED = '2026-11-16';

export function formatDate(iso: string) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
