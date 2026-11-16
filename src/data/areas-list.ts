// Lightweight city list (no copy) for nav, footer, forms and schema.
export const cityList = [
  { slug: 'st-george', name: 'St. George', county: 'Washington County' },
  { slug: 'washington', name: 'Washington', county: 'Washington County' },
  { slug: 'hurricane', name: 'Hurricane', county: 'Washington County' },
  { slug: 'santa-clara', name: 'Santa Clara', county: 'Washington County' },
  { slug: 'ivins', name: 'Ivins', county: 'Washington County' },
  { slug: 'enterprise', name: 'Enterprise', county: 'Washington County' },
  { slug: 'cedar-city', name: 'Cedar City', county: 'Iron County' },
] as const;
export type CitySlug = (typeof cityList)[number]['slug'];
export const cityHref = (slug: string) => `/service-areas/${slug}/`;
