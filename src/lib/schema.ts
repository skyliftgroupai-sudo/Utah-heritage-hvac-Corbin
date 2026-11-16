import { business, SITE_URL, sameAs } from '../data/business';
import { cityList } from '../data/areas-list';
import type { FAQ } from '../data/types';
import { plain } from './md';
import type { Crumb } from '../components/Breadcrumbs.astro';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/meet-corbin/#corbin-allen`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Node = Record<string, unknown>;

export const areaServed = (): Node[] => [
  ...cityList.map((c) => ({ '@type': 'City', name: `${c.name}, UT`, containedInPlace: { '@type': 'AdministrativeArea', name: `${c.county}, Utah` } })),
  ...business.counties.map((c) => ({ '@type': 'AdministrativeArea', name: `${c}, Utah` })),
];

export function businessNode(logoUrl: string, imageUrl: string): Node {
  return {
    '@type': 'HVACBusiness',
    '@id': BUSINESS_ID,
    name: business.name,
    alternateName: business.longName,
    url: `${SITE_URL}/`,
    logo: logoUrl,
    image: imageUrl,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: '$$',
    description: business.blurb,
    slogan: business.taglines.primary,
    foundingDate: String(business.foundingYear),
    founder: { '@id': PERSON_ID },
    areaServed: areaServed(),
    address: { '@type': 'PostalAddress', addressRegion: 'UT', addressCountry: 'US' },
    openingHoursSpecification: business.hoursSchema.map((h) => ({ '@type': 'OpeningHoursSpecification', ...h })),
    knowsAbout: ['Air conditioning repair', 'Furnace repair', 'Heat pumps', 'Ductless mini splits', 'HVAC maintenance', 'Commercial rooftop units', 'Indoor air quality', 'Ductwork'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function personNode(): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: business.owner,
    jobTitle: 'Owner',
    worksFor: { '@id': BUSINESS_ID },
    url: `${SITE_URL}/meet-corbin/`,
    knowsAbout: ['HVAC installation', 'HVAC diagnostics', 'Furnace repair', 'Air conditioning repair', 'Heat pumps', 'Ductwork', 'Commercial HVAC'],
    homeLocation: { '@type': 'Place', name: 'Enterprise, Utah' },
  };
}

export function breadcrumbNode(url: string, items: Crumb[]): Node {
  const all = [{ label: 'Home', href: '/' }, ...items];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${SITE_URL}${c.href}` })),
  };
}

export function faqNode(url: string, faqs: FAQ[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
}

export function serviceNode(url: string, s: { name: string; serviceType: string; description: string; audience: 'residential' | 'business' }): Node {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    provider: { '@id': BUSINESS_ID },
    areaServed: areaServed(),
    audience: s.audience === 'business'
      ? { '@type': 'BusinessAudience', audienceType: 'Businesses and commercial property owners' }
      : { '@type': 'Audience', audienceType: 'Homeowners' },
    url,
  };
}

export function offerCatalogNode(url: string, name: string, items: { name: string; href: string }[]): Node {
  return {
    '@type': 'OfferCatalog',
    '@id': `${url}#catalog`,
    name,
    itemListElement: items.map((it) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: it.name, url: `${SITE_URL}${it.href}`, provider: { '@id': BUSINESS_ID } },
    })),
  };
}
