import type { FaqPage } from './types';

export const faqPages: FaqPage[] = [
  {
    category: 'air-conditioning',
    slug: 'faqs',
    name: 'AC FAQs',
    title: 'AC FAQs for St. George & Cedar City | Utah Heritage HVAC',
    meta: 'Answers to common air conditioning questions in St. George and Cedar City: repair vs. replace, sizing, tune-ups, filters and costs. Call (801) 661-5412.',
    h1: 'Air Conditioning FAQs for St. George & Cedar City',
    sub: 'Straight answers to the AC questions Southern Utah homeowners ask us most.',
    intro: 'These are the questions we hear on service calls and on the phone every summer. Each answer is written for Southern Utah conditions, not national averages. If your question is not here, call (801) 661-5412.',
    groups: [
      {
        heading: 'AC Problems and Repairs',
        faqs: [
          { q: 'Why is my AC blowing warm air in St. George?', a: 'An AC blowing warm air in St. George usually has a failed outdoor fan or capacitor, a dirty condenser coil, low refrigerant from a leak, or a tripped breaker on the outdoor unit. Check the breaker and filter, then call for [AC repair](/air-conditioning/ac-repair/).' },
          { q: 'Why does my AC freeze up?', a: 'An AC freezes up when airflow is too low or refrigerant is low. Common causes are a clogged filter, closed vents, a dirty indoor coil, or a leak. Turn the system off with the fan on to thaw it, then have it checked.' },
          { q: 'Why does my AC trip the breaker?', a: 'An AC that trips the breaker may have a failing compressor, a shorted fan motor, a bad capacitor or loose wiring. Do not keep resetting it. Repeated resets can damage the compressor.' },
          { q: 'Is it normal for my AC to run all afternoon in July?', a: 'Long run times on 105 to 110 degree afternoons in St. George are normal for a properly sized AC. If the house never reaches the set temperature by evening, the system may be undersized, low on refrigerant, or have leaky ducts.' },
          { q: 'What is the most common AC repair in Southern Utah?', a: 'Capacitor replacement is the most common AC repair in Southern Utah. Extreme summer heat wears capacitors out faster, and they are easy to catch during a spring tune-up.' },
        ],
      },
      {
        heading: 'New Systems and Replacement',
        faqs: [
          { q: 'How long does an AC last in Southern Utah?', a: 'A central AC in Southern Utah usually lasts 12 to 15 years with maintenance, shorter than national averages because of long, hot cooling seasons and dust.' },
          { q: 'When should I replace my air conditioner instead of repairing it?', a: 'Consider replacing your AC when it is 12 or more years old and needs a major repair, uses R-22 refrigerant, or has needed several repairs in a few years. See [AC repair vs. replacement](/blog/ac-repair-vs-replacement-how-to-know-which-one-you-actually-need/).' },
          { q: 'Is a bigger AC better for St. George heat?', a: 'No. An oversized AC short cycles, wears out faster and leaves uneven temperatures. The right size comes from a load calculation on your home.' },
          { q: 'Do you give free estimates on new AC systems?', a: 'Yes. Utah Heritage HVAC gives free in-home estimates on new air conditioners and heat pumps across Washington and Iron County. See [AC installation](/air-conditioning/ac-installation/).' },
        ],
      },
      {
        heading: 'Maintenance and Filters',
        faqs: [
          { q: 'How often should I change my AC filter in St. George?', a: 'Change a standard AC filter every 30 to 45 days during heavy cooling season in St. George. Fine red dust loads filters much faster than packaging suggests.' },
          { q: 'How often should my AC be serviced?', a: 'Once a year in spring for the AC, and once in fall for heating. Southern Utah systems run far more hours than average. Our [maintenance plan](/maintenance-plan/) schedules both.' },
          { q: 'Should I cover my outdoor AC unit in winter?', a: 'Generally no. Covering a heat pump stops it from heating, and fully covering an AC can trap moisture and invite pests. A light top cover against debris is fine on AC-only units.' },
          { q: 'Can I hose off my outdoor AC coil myself?', a: 'Yes, gently. Turn off power at the disconnect, then rinse the condenser fins from the inside out with a garden hose on low pressure. Never use a pressure washer, which bends the fins.' },
        ],
      },
    ],
    related: ['/air-conditioning/ac-repair/', '/air-conditioning/ac-tune-up/', '/maintenance-plan/'],
  },
  {
    category: 'heating',
    slug: 'faqs',
    name: 'Heating FAQs',
    title: 'Heating FAQs: Cedar City & St. George | Utah Heritage HVAC',
    meta: 'Answers to common furnace and heat pump questions for Cedar City and St. George: no heat, CO safety, heat pumps vs. furnaces and tune-ups. Call us.',
    h1: 'Heating FAQs for Cedar City & St. George',
    sub: 'Furnace and heat pump answers for both of Southern Utah\'s winters.',
    intro: 'Winter in Cedar City and winter in St. George are not the same season. These answers cover both. For a no-heat problem right now, call (801) 661-5412.',
    groups: [
      {
        heading: 'Furnace Problems',
        faqs: [
          { q: 'Why is my furnace blowing cold air?', a: 'A furnace blowing cold air may not be lighting because of a cracked igniter, dirty flame sensor, gas supply issue or a safety lockout. It can also be a thermostat set to fan ON. See [furnace repair](/heating/furnace-repair/).' },
          { q: 'Why does my furnace smell like burning?', a: 'A dusty burning smell for the first few minutes of the season is normal. A smell that lasts, or smells electrical, means turn the furnace off and call for service.' },
          { q: 'What does a blinking light on my furnace mean?', a: 'The blinking light on a furnace control board is an error code. The pattern, listed on the furnace door, points to the problem, such as a pressure switch or flame failure.' },
          { q: 'Can snow block my furnace vent in Cedar City?', a: 'Yes. High-efficiency furnaces in Cedar City vent through PVC pipes on the side of the house or roof. Drifting snow can block them and shut the furnace down. Keep them clear.' },
        ],
      },
      {
        heading: 'Heat Pumps and Dual Fuel',
        faqs: [
          { q: 'Do heat pumps work in Southern Utah winters?', a: 'Yes. Heat pumps work very well in St. George winters. In Cedar City, cold-climate heat pumps or dual-fuel systems with a gas furnace backup are the better fit.' },
          { q: 'Why is my heat pump steaming?', a: 'Steam from a heat pump in winter is normal during defrost, when the unit melts frost off the outdoor coil.' },
          { q: 'What does Emergency Heat on my thermostat mean?', a: 'Emergency Heat runs only the backup heat source and turns off the heat pump. Use it only if the heat pump has failed, because it is expensive to run. See [heat pump repair](/heating/heat-pump-repair/).' },
        ],
      },
      {
        heading: 'Safety, Tune-Ups and Replacement',
        faqs: [
          { q: 'How often should I service my furnace in Cedar City?', a: 'Service your furnace every fall in Cedar City, ideally in September, before the heating season starts. See [heating tune-up](/heating/heating-tune-up/).' },
          { q: 'Do I need a carbon monoxide detector?', a: 'Yes. Every home with a gas furnace or other gas appliance should have working carbon monoxide alarms near bedrooms and on each level.' },
          { q: 'How long does a furnace last?', a: 'A gas furnace in Southern Utah typically lasts 15 to 20 years with yearly maintenance. A cracked heat exchanger usually means replacement.' },
          { q: 'Should I replace my furnace and AC at the same time?', a: 'Often it makes sense, because the indoor coil, furnace blower and outdoor unit are designed to work as a matched set. If one is newer, we will tell you whether matching both is worth it.' },
        ],
      },
    ],
    related: ['/heating/furnace-repair/', '/heating/heating-tune-up/', '/heating/heat-pump-repair/'],
  },
  {
    category: 'maintenance-plan',
    slug: 'faqs',
    name: 'Maintenance Plan FAQs',
    title: 'HVAC Maintenance Plan FAQs | Utah Heritage HVAC',
    meta: 'Questions about the Utah Heritage HVAC maintenance plan: what is included, visit timing, heat pumps, pricing and service areas in Southern Utah.',
    h1: 'HVAC Maintenance Plan FAQs for St. George & Cedar City',
    sub: 'How our one simple plan works, in plain answers.',
    intro: 'The maintenance plan is two visits a year: one before summer and one before winter. Here is everything people ask before they sign up.',
    groups: [
      {
        heading: 'How the Plan Works',
        faqs: [
          { q: 'How often should I service my HVAC in Southern Utah?', a: 'Twice a year in Southern Utah: an AC visit in spring and a heating visit in fall. Long seasons in St. George and real winters in Cedar City put more run time on equipment than the national once-a-year advice assumes.' },
          { q: 'What is the difference between a tune-up and a repair?', a: 'A tune-up is preventive service on a working system: cleaning, testing and adjusting. A repair fixes something that has failed. Plan visits are tune-ups, and any repair found is quoted separately.' },
          { q: 'Do you service both AC and heating?', a: 'Yes. The plan covers both: the spring visit for cooling and the fall visit for heating. Heat pumps are covered on both visits.' },
          { q: 'What if you find something during the visit?', a: 'We explain what we found, show you, and give you an upfront price. You decide whether to fix it that day, schedule it later, or keep an eye on it. Nothing gets done without your OK.' },
          { q: 'How long does a visit take?', a: 'Each maintenance plan visit takes about 45 to 60 minutes for a typical home system.' },
          { q: 'Do you serve Washington County and Cedar City?', a: 'Yes. The maintenance plan is available in St. George, Washington, Hurricane, Santa Clara, Ivins, Enterprise, Cedar City and surrounding Washington and Iron County, with no travel fees.' },
        ],
      },
      {
        heading: 'Pricing and Signing Up',
        faqs: [
          { q: 'How much does the maintenance plan cost?', a: 'Plan pricing depends on your system type and size. There is one simple plan with no tiers or complicated add-ons. Call (801) 661-5412 for your quote.' },
          { q: 'Do you schedule the visits or do I?', a: 'We do. Utah Heritage HVAC schedules both visits and sends reminders, so you do not have to remember.' },
          { q: 'Who does the maintenance visit?', a: 'The same technician who handles repairs. You will not get a different face every time.' },
          { q: 'Can I join any time of year?', a: 'Yes. We start with whichever visit is next in season and keep you on the spring and fall schedule after that.' },
        ],
      },
    ],
    related: ['/maintenance-plan/', '/maintenance-plan/spring-ac-tune-up/', '/maintenance-plan/fall-heating-tune-up/'],
  },
];
