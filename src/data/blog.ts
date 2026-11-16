export const catLabels = { ac: 'Air Conditioning', heating: 'Heating', maintenance: 'Maintenance', commercial: 'Commercial' } as const;
export type BlogCat = keyof typeof catLabels;
