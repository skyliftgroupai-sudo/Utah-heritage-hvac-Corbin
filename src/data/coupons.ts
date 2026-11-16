// Placeholder offers. No dollar amounts are invented: the client fills these in.
export interface Coupon {
  id: string;
  title: string;
  offer: string;
  fine: string;
  expires: string;
  category: 'ac' | 'heating' | 'maintenance' | 'commercial' | 'general';
}

export const coupons: Coupon[] = [
  {
    id: 'ac-tune-up',
    title: 'Spring AC Tune-Up',
    offer: '[CLIENT TO PROVIDE: tune-up offer]',
    fine: 'Residential split systems and heat pumps. One coupon per household. Mention it when you book.',
    expires: '[CLIENT TO PROVIDE: expiry date]',
    category: 'ac',
  },
  {
    id: 'furnace-tune-up',
    title: 'Fall Furnace Tune-Up',
    offer: '[CLIENT TO PROVIDE: furnace tune-up offer]',
    fine: 'Gas furnaces and heat pumps. Includes a carbon monoxide check. Mention it when you book.',
    expires: '[CLIENT TO PROVIDE: expiry date]',
    category: 'heating',
  },
  {
    id: 'repair-visit',
    title: 'Repair Visit Savings',
    offer: '[CLIENT TO PROVIDE: repair discount]',
    fine: 'Applies to repair labor. Not valid with other offers. Price quoted before work begins.',
    expires: '[CLIENT TO PROVIDE: expiry date]',
    category: 'general',
  },
  {
    id: 'new-system',
    title: 'New System Install',
    offer: '[CLIENT TO PROVIDE: replacement offer]',
    fine: 'Full AC, furnace or heat pump replacements. Free in-home estimate.',
    expires: '[CLIENT TO PROVIDE: expiry date]',
    category: 'general',
  },
  {
    id: 'commercial-maintenance',
    title: 'Commercial Maintenance Agreement',
    offer: '[CLIENT TO PROVIDE: commercial offer]',
    fine: 'Rooftop units and split systems at local businesses. Site walk-through included.',
    expires: '[CLIENT TO PROVIDE: expiry date]',
    category: 'commercial',
  },
];

export const couponById = (id: string): Coupon => coupons.find((c) => c.id === id) ?? coupons[0]!;
