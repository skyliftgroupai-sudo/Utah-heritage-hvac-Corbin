import { acServices } from './services-ac';
import { heatingServices } from './services-heating';
import { maintenanceServices } from './services-maintenance';
import { commercialServices } from './services-commercial';
import type { Category, Service } from './types';

import { extraCopy } from './extra-copy';

export const services: Service[] = [...acServices, ...heatingServices, ...maintenanceServices, ...commercialServices].map((s) => ({
  ...s,
  more: s.more ?? extraCopy[`/${s.category}/${s.slug}/`],
}));

export const categoryNames: Record<Category, string> = {
  'air-conditioning': 'Air Conditioning',
  heating: 'Heating',
  'maintenance-plan': 'Maintenance Plan',
  commercial: 'Commercial',
};

export const serviceHref = (s: Pick<Service, 'category' | 'slug'>) => `/${s.category}/${s.slug}/`;
export const byCategory = (c: Category) => services.filter((s) => s.category === c);
export const findByHref = (href: string) => services.find((s) => serviceHref(s) === href);
