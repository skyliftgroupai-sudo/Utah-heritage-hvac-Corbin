import type { PhotoKey, PhotoNeed } from './photos';

export type Category = 'air-conditioning' | 'heating' | 'maintenance-plan' | 'commercial';

export interface FAQ { q: string; a: string }

export interface Service {
  category: Category;
  slug: string;
  /** Short name used in breadcrumbs, cards and nav. */
  name: string;
  /** One line for hub grids. */
  short: string;
  title: string;
  meta: string;
  h1: string;
  sub: string;
  /** 40–60 words. The AI-citation snippet. */
  quickAnswer: string;
  intro: string[];
  signsHeading: string;
  signs: string[];
  /** Diagnose → Upfront price → You decide → We fix it right, each in this service's words. */
  process: [string, string, string, string];
  localHeading: string;
  local: string[];
  whyUs: string[];
  /** Optional extra section (e.g. a table or checklist). */
  extra?: { heading: string; body?: string[]; list?: string[]; table?: { head: string[]; rows: string[][] } };
  more?: { heading: string; body: string[] };
  faqs: FAQ[];
  related: string[];
  coupon: string;
  audience: 'residential' | 'business';
  serviceType: string;
  photo: PhotoKey | PhotoNeed;
  photoAlt?: string;
}

export interface FaqPage {
  category: Exclude<Category, 'commercial'>;
  slug: 'faqs';
  name: string;
  title: string;
  meta: string;
  h1: string;
  sub: string;
  intro: string;
  groups: { heading: string; faqs: FAQ[] }[];
  related: string[];
}

export interface Hub {
  category: Category;
  name: string;
  title: string;
  meta: string;
  h1: string;
  eyebrow: string;
  sub: string;
  quickAnswer: string;
  intro: string[];
  sections: { heading: string; body: string[]; list?: string[] }[];
  faqs: FAQ[];
  photo: PhotoKey | PhotoNeed;
}

export interface Area {
  slug: string;
  name: string;
  county: 'Washington County' | 'Iron County';
  title: string;
  meta: string;
  h1: string;
  sub: string;
  quickAnswer: string;
  intro: string[];
  climateHeading: string;
  climate: string[];
  homesHeading: string;
  homes: string[];
  servicesNote: string;
  faqs: FAQ[];
  nearby: string[];
  geo: { lat: number; lng: number };
  photo: PhotoKey | PhotoNeed;
}
