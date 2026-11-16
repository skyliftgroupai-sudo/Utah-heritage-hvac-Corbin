import type { Hub } from './types';

export const hubs: Record<'air-conditioning' | 'heating' | 'commercial', Hub> = {
  'air-conditioning': {
    category: 'air-conditioning',
    name: 'Air Conditioning',
    title: 'Air Conditioning Services in St. George, UT',
    meta: 'Air conditioning services in St. George, Cedar City and Southern Utah: AC repair, new systems, tune-ups, mini splits and ductwork. Call (801) 661-5412.',
    h1: 'Air Conditioning Services in St. George, UT',
    eyebrow: 'Cooling for Red Rock Country',
    sub: 'Repairs, replacements, tune-ups and everything in between, from a local company that lives in this heat too.',
    quickAnswer:
      'Utah Heritage HVAC provides air conditioning services in St. George, Cedar City and across Washington and Iron County: AC repair, AC installation and replacement, spring tune-ups, ductless mini splits, indoor air quality, ductwork and zoning, and emergency AC service. Every job is priced upfront with no travel fees.',
    intro: [
      'Air conditioning is not optional in St. George. From late May into September, the AC is what makes the house livable, and on the worst afternoons it is a safety system. That is why we treat every cooling call like it matters, whether it is a $20 part or a full replacement.',
      'Utah Heritage HVAC is a locally owned AC company in Southern Utah run by Corbin Allen, who has worked in the trade since 2006. You get one consistent person who knows your system, upfront prices before any work, and honest advice on whether to repair or replace.',
    ],
    sections: [
      {
        heading: 'How We Approach AC Work in Southern Utah',
        body: [
          'Our climate is hard on air conditioners. Long stretches above 100°F, fine red dust, and monsoon power surges all shorten equipment life. Systems here commonly last 12 to 15 years, not the 15 to 20 you see quoted nationally. We keep that in mind when we recommend a repair or a replacement.',
          'We measure before we recommend. Pressures, amp draw, airflow and temperature split tell us what is actually happening, and we share the readings with you. If your system needs a part, you get the price first. If it needs nothing, we tell you that too.',
        ],
      },
      {
        heading: 'Which AC Service Do You Need?',
        body: ['If your AC is not cooling, start with [AC repair](/air-conditioning/ac-repair/). If it is older and repairs keep adding up, look at [AC installation and replacement](/air-conditioning/ac-installation/). If it is working fine and you want it to stay that way, book a spring [AC tune-up](/air-conditioning/ac-tune-up/) or join the [maintenance plan](/maintenance-plan/).'],
        list: [
          'One room always hot: zoning, ductwork or a mini split',
          'Dusty house or allergies: indoor air quality',
          'AC out on a 100-degree day: emergency AC service',
        ],
      },
    ],
    faqs: [
      { q: 'What air conditioning services does Utah Heritage HVAC offer?', a: 'Utah Heritage HVAC offers AC repair, AC installation and replacement, AC tune-ups, ductless mini splits, indoor air quality, ductwork and zoning, and emergency AC service in St. George, Cedar City and Southern Utah.' },
      { q: 'How long do air conditioners last in St. George?', a: 'Air conditioners in St. George typically last 12 to 15 years with regular maintenance. The long, hot cooling season and dust wear equipment faster than national averages suggest.' },
      { q: 'Do you charge travel fees for AC service?', a: 'No. Utah Heritage HVAC does not charge travel fees anywhere in our Washington County and Iron County service area.' },
      { q: 'Is Utah Heritage HVAC licensed and insured?', a: 'Yes. Utah Heritage HVAC is a licensed and insured HVAC contractor in Utah.' },
      { q: 'Can you service any brand of air conditioner?', a: 'Yes. Utah Heritage HVAC repairs and maintains all common residential AC and heat pump brands.' },
    ],
    photo: 'acCondenser',
  },
  heating: {
    category: 'heating',
    name: 'Heating',
    title: 'Heating Services in St. George & Cedar City, UT',
    meta: 'Heating services in Cedar City, St. George and Southern Utah: furnace repair, heat pumps, new heating systems and tune-ups. Call (801) 661-5412.',
    h1: 'Heating Services in St. George & Cedar City, UT',
    eyebrow: 'From mild desert winters to real mountain cold',
    sub: 'Furnace and heat pump repair, replacement and tune-ups for every elevation we serve.',
    quickAnswer:
      'Utah Heritage HVAC provides heating services in St. George, Cedar City and Southern Utah: furnace repair, heat pump repair and service, heating installation and replacement, fall heating tune-ups, and emergency heating service. Every heating call includes a safety check, and every repair is priced before work begins.',
    intro: [
      'Our service area covers two very different winters. St. George sits around 2,800 feet with mild winters, frosty mornings and heat pumps doing most of the work. Cedar City sits near 5,800 feet, where January nights in the teens are normal and a furnace is a serious appliance.',
      'Utah Heritage HVAC handles both. Corbin Allen has repaired, installed and maintained furnaces and heat pumps since the mid-2000s, and he sets up each system for the climate it lives in.',
    ],
    sections: [
      {
        heading: 'Gas Furnaces, Heat Pumps and Dual Fuel',
        body: [
          'Gas furnaces are common in Cedar City, Enterprise and older homes throughout the region. Heat pumps are common in St. George, Washington, Santa Clara and Ivins. Many homes have both, paired as a dual-fuel system that uses the heat pump on mild days and the furnace when it gets cold.',
          'We work on all three. For no-heat problems, start with [furnace repair](/heating/furnace-repair/) or [heat pump repair](/heating/heat-pump-repair/). If the system is aging out, see [heating installation and replacement](/heating/heating-installation/).',
        ],
      },
      {
        heading: 'Safety Comes First on Every Heating Call',
        body: ['Gas heat means combustion, venting and carbon monoxide. We inspect the heat exchanger where accessible, test safety switches and check CO on every heating visit. The best time for that is a fall [heating tune-up](/heating/heating-tune-up/), before you rely on the furnace every night.'],
      },
    ],
    faqs: [
      { q: 'What heating services does Utah Heritage HVAC offer?', a: 'Utah Heritage HVAC offers furnace repair, heat pump repair and service, heating installation and replacement, heating tune-ups, and emergency heating service in St. George, Cedar City and Southern Utah.' },
      { q: 'Is a heat pump or furnace better in Southern Utah?', a: 'Heat pumps work very well in St. George and lower Washington County. In Cedar City and Enterprise, a gas furnace or a dual-fuel system is usually the better choice because winters are much colder.' },
      { q: 'How long does a furnace last in Cedar City?', a: 'A well-maintained gas furnace in Cedar City often lasts 15 to 20 years. Long heating seasons at elevation add wear, so annual tune-ups matter.' },
      { q: 'Do you check for carbon monoxide?', a: 'Yes. Utah Heritage HVAC checks carbon monoxide on every heating call and every fall heating tune-up.' },
      { q: 'Do you offer emergency heating repair?', a: 'Yes. Emergency heating service is available in Cedar City, St. George and our full service area. See [emergency heating repair](/heating/emergency-heating-repair/).' },
    ],
    photo: 'furnaceFull',
  },
  commercial: {
    category: 'commercial',
    name: 'Commercial',
    title: 'Commercial HVAC Services in St. George & Cedar City',
    meta: 'Commercial HVAC in St. George and Cedar City: rooftop unit repair, replacement, tune-ups, mini splits, air quality and maintenance contracts. Call us.',
    h1: 'Commercial HVAC Services in St. George & Cedar City',
    eyebrow: 'Rooftop units, offices, shops and tenant spaces',
    sub: 'Commercial heating and cooling from an owner who started his career on commercial new construction.',
    quickAnswer:
      'Utah Heritage HVAC provides commercial HVAC services in St. George, Cedar City and Southern Utah: commercial AC and heating repair, installation and replacement, seasonal tune-ups, ductless mini splits, indoor air quality and preventive maintenance plans for rooftop units and light commercial buildings.',
    intro: [
      'When the HVAC goes down at a business, the cost is not just the repair. It is lost sales, uncomfortable staff, unhappy tenants and sometimes overheated equipment. Commercial customers need fast diagnosis, clear written pricing and work scheduled around business hours.',
      'Corbin Allen started his career in 2006 doing commercial and residential new-construction installs, then moved into service and diagnostics, and later managed a branch and operations at a major Southern Utah HVAC company. That mix of field and management experience is what commercial customers get from Utah Heritage HVAC.',
    ],
    sections: [
      {
        heading: 'Who We Work With',
        body: ['We work with owner-occupied businesses, property managers and small portfolios across Washington and Iron County.'],
        list: [
          'Offices and professional suites',
          'Retail stores and showrooms',
          'Restaurants and food service',
          'Shops, service bays and warehouses',
          'Multi-tenant and multi-unit buildings',
          'Clinics and personal-service businesses',
        ],
      },
      {
        heading: 'Commercial Service Built Around Your Schedule',
        body: [
          'Most rooftop work can happen without disrupting customers. When interior access is needed, we schedule early, late or around your busy hours. Every repair is quoted in writing before work, so owners and managers can approve it.',
          'The best way to avoid outages is a [commercial maintenance plan](/commercial/maintenance-plans/), with spring and fall inspections and filter and belt changes on a set schedule.',
        ],
      },
    ],
    faqs: [
      { q: 'What commercial HVAC services do you offer?', a: 'Utah Heritage HVAC offers commercial AC repair, installation and tune-ups, commercial heating repair, installation and tune-ups, ductless mini splits, indoor air quality and commercial maintenance plans in St. George, Cedar City and Southern Utah.' },
      { q: 'Do you service rooftop units?', a: 'Yes. Rooftop package units are a large part of our commercial work, including gas/electric units and heat pumps.' },
      { q: 'Can you work around business hours?', a: 'Yes. Utah Heritage HVAC schedules commercial work to limit disruption, including early morning, after-hours or low-traffic times when available.' },
      { q: 'Do you offer commercial maintenance contracts?', a: 'Yes. Commercial maintenance plans include scheduled seasonal inspections, filter and belt changes and written reports for each unit.' },
      { q: 'Which areas do you serve for commercial HVAC?', a: 'Utah Heritage HVAC serves businesses in St. George, Washington, Hurricane, Santa Clara, Ivins, Enterprise, Cedar City and surrounding Washington and Iron County.' },
    ],
    photo: 'rooftopUnit',
  },
};
