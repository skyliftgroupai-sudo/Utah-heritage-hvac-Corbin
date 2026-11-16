export interface NavLink { label: string; href: string }
export interface NavGroup extends NavLink { children?: NavLink[] }

export const mainNav: NavGroup[] = [
  {
    label: 'Air Conditioning',
    href: '/air-conditioning/',
    children: [
      { label: 'AC Repair', href: '/air-conditioning/ac-repair/' },
      { label: 'AC Installation & Replacement', href: '/air-conditioning/ac-installation/' },
      { label: 'AC Tune-Up', href: '/air-conditioning/ac-tune-up/' },
      { label: 'Ductless Mini Splits', href: '/air-conditioning/ductless-mini-splits/' },
      { label: 'Indoor Air Quality', href: '/air-conditioning/indoor-air-quality/' },
      { label: 'Zoning & Ductwork', href: '/air-conditioning/zoning-ductwork/' },
      { label: 'Emergency AC Service', href: '/air-conditioning/emergency-ac-repair/' },
      { label: 'AC FAQs', href: '/air-conditioning/faqs/' },
    ],
  },
  {
    label: 'Heating',
    href: '/heating/',
    children: [
      { label: 'Furnace Repair', href: '/heating/furnace-repair/' },
      { label: 'Heat Pump Repair & Service', href: '/heating/heat-pump-repair/' },
      { label: 'Heating Installation & Replacement', href: '/heating/heating-installation/' },
      { label: 'Heating Tune-Up', href: '/heating/heating-tune-up/' },
      { label: 'Emergency Heating Service', href: '/heating/emergency-heating-repair/' },
      { label: 'Heating FAQs', href: '/heating/faqs/' },
    ],
  },
  {
    label: 'Maintenance Plan',
    href: '/maintenance-plan/',
    children: [
      { label: 'Spring AC Tune-Up Visit', href: '/maintenance-plan/spring-ac-tune-up/' },
      { label: 'Fall Heating Tune-Up Visit', href: '/maintenance-plan/fall-heating-tune-up/' },
      { label: 'Heat Pump Maintenance', href: '/maintenance-plan/heat-pump-maintenance/' },
      { label: 'Efficiency Audits', href: '/maintenance-plan/efficiency-audit/' },
      { label: 'Maintenance Plan FAQs', href: '/maintenance-plan/faqs/' },
    ],
  },
  {
    label: 'Commercial',
    href: '/commercial/',
    children: [
      { label: 'Commercial AC Repair', href: '/commercial/ac-repair/' },
      { label: 'Commercial AC Installation & Replacement', href: '/commercial/ac-installation/' },
      { label: 'Commercial AC Tune-Up', href: '/commercial/ac-tune-up/' },
      { label: 'Commercial Heating Repair', href: '/commercial/heating-repair/' },
      { label: 'Commercial Heating Installation & Replacement', href: '/commercial/heating-installation/' },
      { label: 'Commercial Heating Tune-Up', href: '/commercial/heating-tune-up/' },
      { label: 'Commercial Ductless Mini Splits', href: '/commercial/ductless-mini-splits/' },
      { label: 'Commercial Indoor Air Quality', href: '/commercial/indoor-air-quality/' },
      { label: 'Commercial Maintenance Plans', href: '/commercial/maintenance-plans/' },
    ],
  },
  { label: 'Coupons', href: '/coupons/' },
  { label: 'Blogs', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const companyLinks: NavLink[] = [
  { label: 'Meet Corbin', href: '/meet-corbin/' },
  { label: 'Coupons', href: '/coupons/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms', href: '/terms/' },
];
