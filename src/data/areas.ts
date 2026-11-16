import type { Area } from './types';

// Keep titles at 60 characters or fewer: drop the brand suffix when the city name is long.
const t = (city: string) => {
  const full = `HVAC Repair & Installation in ${city}, UT | Utah Heritage HVAC`;
  return full.length <= 60 ? full : `HVAC Repair & Installation in ${city}, UT`;
};

export const areas: Area[] = [
  {
    slug: 'st-george',
    name: 'St. George',
    county: 'Washington County',
    title: 'HVAC Repair & Installation in St. George, UT',
    meta: 'HVAC repair, AC service and furnace work in St. George, UT from a local, licensed company. Upfront pricing and no travel fees. Call (801) 661-5412.',
    h1: 'HVAC Repair & Installation in St. George, UT',
    sub: 'AC that keeps up with 110-degree afternoons, heat pumps that handle frosty mornings, and a technician who knows St. George homes.',
    quickAnswer:
      'Utah Heritage HVAC provides HVAC repair, installation and maintenance in St. George, UT, including AC repair, heat pump service, furnace repair, mini splits and ductwork. We are locally owned, licensed and insured, quote every job upfront, and charge no travel fees anywhere in St. George.',
    intro: [
      'St. George is where Southern Utah air conditioners earn their keep. The city sits around 2,800 feet in a desert basin, and summer afternoons above 100 degrees are routine from June into September. AC repair is the most common call we get here, and the hottest weeks of July and August are when it matters most.',
      'We work all over town: older homes near downtown and Dixie Downs, established neighborhoods in Bloomington and Green Valley, newer streets in Little Valley and down toward Desert Color, and the hillside homes around Entrada and the Red Cliffs area. Different eras of construction mean very different equipment, ductwork and problems.',
    ],
    climateHeading: 'What St. George Weather Does to an HVAC System',
    climate: [
      'Most residential AC equipment is designed around a 95-degree outdoor day. St. George blows past that for weeks at a time. Capacitors, contactors and fan motors wear quickly, and compressors work at high pressure all afternoon. That is why a spring [AC tune-up](/air-conditioning/ac-tune-up/) catches so many problems here before they turn into breakdowns.',
      'Then there is the dust. Fine red dust settles in condenser coils, and spring winds make it worse. July and August monsoon storms bring outflow winds, lightning and power flickers that take out control boards. Winters are mild, so many homes rely on heat pumps, which run nearly all year. See [heat pump repair](/heating/heat-pump-repair/) for the winter side.',
    ],
    homesHeading: 'St. George Homes We Work On',
    homes: [
      'Many St. George homes put the furnace or air handler in the attic, where summer temperatures are brutal. That makes drain pans, condensate lines and duct insulation especially important. A clogged drain in an attic unit shows up as a ceiling stain in the room below. Older homes often have undersized or leaky ductwork that we can repair or reroute through [ductwork and zoning](/air-conditioning/zoning-ductwork/) work.',
      'St. George also has a lot of seasonal residents and rental properties. Systems that sit idle or on a high setpoint for months often struggle when the owner returns. A [maintenance plan](/maintenance-plan/) keeps those systems checked on schedule even when you are not here.',
    ],
    servicesNote: 'Every service we offer is available in St. George: AC repair and replacement, furnace and heat pump service, ductless mini splits, indoor air quality, ductwork, maintenance plans and commercial HVAC.',
    faqs: [
      { q: 'Do you offer same-day AC repair in St. George?', a: 'Utah Heritage HVAC offers same-day AC repair in St. George when the schedule allows, and summer no-cooling calls get priority. Emergency service is available. Call (801) 661-5412.' },
      { q: 'Is there a travel fee for HVAC service in St. George?', a: 'No. Utah Heritage HVAC does not charge a travel fee anywhere in St. George or the rest of Washington County.' },
      { q: 'Are heat pumps a good choice in St. George?', a: 'Yes. Heat pumps are a strong choice in St. George because winters are mild. They handle both heating and cooling efficiently, which is why they are so common in the city.' },
      { q: 'Why does my attic AC unit leak water in St. George?', a: 'An attic air handler in St. George usually leaks water because the condensate drain line is clogged with algae or dust, or the secondary pan is overflowing. It should be cleared quickly to avoid ceiling damage.' },
      { q: 'Do you install new AC systems in St. George?', a: 'Yes. Utah Heritage HVAC installs new air conditioners, heat pumps and furnaces in St. George, with free in-home estimates. See [AC installation](/air-conditioning/ac-installation/).' },
    ],
    nearby: ['washington', 'santa-clara', 'ivins'],
    geo: { lat: 37.0965, lng: -113.5684 },
    photo: 'acCondenser',
  },
  {
    slug: 'washington',
    name: 'Washington',
    county: 'Washington County',
    title: t('Washington'),
    meta: 'HVAC repair and installation in Washington, UT. AC, heat pump and furnace service for new and established homes. Upfront pricing. Call (801) 661-5412.',
    h1: 'HVAC Repair & Installation in Washington, UT',
    sub: 'From brand-new builds in Coral Canyon to established homes near Washington Fields, we keep Washington City comfortable.',
    quickAnswer:
      'Utah Heritage HVAC provides HVAC repair, installation and maintenance in Washington, UT, including AC repair, heat pump and furnace service, mini splits, ductwork and maintenance plans. We are locally owned, give upfront prices before work, and charge no travel fees in Washington City.',
    intro: [
      'Washington City has grown fast, and you can see it in the equipment. Some neighborhoods have systems that are only a year or two old. Others, near the historic center and Washington Fields, have equipment that has been through fifteen or more St. George-area summers. We work on both, and the advice is different for each.',
      'We serve the whole city: Green Springs, Coral Canyon, Sienna Hills, Washington Fields, and the newer communities going in on the east side. Wherever you are, the price is quoted upfront and there is no travel fee.',
    ],
    climateHeading: 'Washington City Heat and Wind',
    climate: [
      'Washington sits at roughly the same elevation as St. George, so summer is just as hot. Afternoons over 100 degrees are common from June through August, and air conditioners run nearly nonstop. The most frequent repairs we make here are capacitors, contactors and fan motors, the parts that wear fastest in extreme heat. Book an [AC tune-up](/air-conditioning/ac-tune-up/) in spring to catch them early.',
      'East-side neighborhoods get steady wind and construction dust from ongoing development. That loads outdoor coils and filters faster than in quieter parts of the county. In homes near active construction, we often recommend changing filters every month in summer and having the coil cleaned every spring.',
    ],
    homesHeading: 'New Construction and Established Homes',
    homes: [
      'Many newer Washington homes have builder-grade equipment that works fine but was installed quickly. Common issues we see in the first few years include refrigerant charge that was never fine-tuned, loose duct connections in the attic and thermostats placed in the wrong spot. A first-year checkup and some [ductwork attention](/air-conditioning/zoning-ductwork/) can fix uneven rooms before the warranty period ends.',
      'Older homes around the city center and Washington Fields are more likely to need replacement soon. If your system is 12 or more years old and needing repairs, we can compare repair and replacement honestly. See [AC installation and replacement](/air-conditioning/ac-installation/).',
    ],
    servicesNote: 'Utah Heritage HVAC offers its full lineup in Washington, UT: AC repair and installation, heat pumps, furnaces, mini splits, indoor air quality, ductwork, maintenance plans and commercial HVAC.',
    faqs: [
      { q: 'Do you service new homes in Washington, UT?', a: 'Yes. Utah Heritage HVAC services newer homes in Coral Canyon, Sienna Hills and across Washington, UT, including first-year checkups on builder-installed systems.' },
      { q: 'Why is one room in my new Washington home always hot?', a: 'In new Washington homes, a hot room usually comes from a loose or undersized duct run, poor balancing or thermostat placement. A duct inspection and airflow test can pinpoint it.' },
      { q: 'Do you charge travel fees in Washington City?', a: 'No. Utah Heritage HVAC does not charge travel fees in Washington City or anywhere else in Washington County.' },
      { q: 'How often should I change my filter in Washington, UT?', a: 'In Washington, UT, change a standard filter every 30 to 45 days in summer, and monthly if you live near active construction where dust is heavier.' },
      { q: 'Can you repair my furnace in Washington, UT?', a: 'Yes. Utah Heritage HVAC repairs gas furnaces and heat pumps in Washington, UT. See [furnace repair](/heating/furnace-repair/).' },
    ],
    nearby: ['st-george', 'hurricane', 'santa-clara'],
    geo: { lat: 37.1305, lng: -113.5083 },
    photo: 'furnaceFull',
  },
  {
    slug: 'hurricane',
    name: 'Hurricane',
    county: 'Washington County',
    title: t('Hurricane'),
    meta: 'HVAC repair and installation in Hurricane, UT. AC, heat pump, furnace and mini split service near Sand Hollow and Sky Mountain. Call (801) 661-5412.',
    h1: 'HVAC Repair & Installation in Hurricane, UT',
    sub: 'Hot summers, windy afternoons and a lot of sand. We keep Hurricane homes, shops and rentals running.',
    quickAnswer:
      'Utah Heritage HVAC provides HVAC repair, installation and maintenance in Hurricane, UT, including AC and heat pump repair, furnace service, ductless mini splits for shops and casitas, and maintenance plans. We quote every job upfront and charge no travel fee in Hurricane or nearby communities.',
    intro: [
      'Hurricane sits a little higher than St. George, around 3,200 feet, but summers are still long and hot. What sets Hurricane apart for HVAC is wind and sand. Afternoon gusts move a lot of fine sand, especially in neighborhoods near Sand Hollow, and that sand ends up in outdoor coils and filters.',
      'We work across Hurricane, from homes near the old town center and along State Street to Sky Mountain, Dixie Springs, and the newer neighborhoods heading toward Sand Hollow. Many properties here have shops, RV garages and casitas, which is where ductless systems come in.',
    ],
    climateHeading: 'Wind, Sand and Long Summers',
    climate: [
      'Sand packs into condenser fins and gets pulled into return grilles. A coil that is half blocked raises head pressure and power use and shortens compressor life. In Hurricane, we recommend having the outdoor coil cleaned every spring, plus checking filters monthly during windy months. A spring [AC tune-up](/air-conditioning/ac-tune-up/) covers the coil cleaning.',
      'Winter nights in Hurricane are a bit colder than in St. George, and heat pumps run more defrost cycles. Most homes still heat comfortably with a heat pump, but backup heat runs more often on cold mornings. If your winter bill jumps, have the heat pump checked; see [heat pump repair](/heating/heat-pump-repair/).',
    ],
    homesHeading: 'Shops, Casitas and Vacation Rentals',
    homes: [
      'Hurricane properties often come with detached shops, garages and guest casitas. Extending ductwork to those spaces is rarely practical. A [ductless mini split](/air-conditioning/ductless-mini-splits/) is usually the better fit, and it heats in winter as well.',
      'Hurricane is also a gateway to Zion, and there are many short-term rentals in town. Rental owners need systems that do not fail on a full weekend. A [maintenance plan](/maintenance-plan/) with spring and fall visits, scheduled around your bookings, prevents most surprise calls.',
    ],
    servicesNote: 'All Utah Heritage HVAC services are available in Hurricane, UT, including residential and light commercial AC, heating, mini splits, ductwork and maintenance plans.',
    faqs: [
      { q: 'Do you offer HVAC service in Hurricane, UT?', a: 'Yes. Utah Heritage HVAC offers AC repair, heating repair, installations, mini splits and maintenance plans throughout Hurricane, UT, with no travel fee.' },
      { q: 'How do I keep sand out of my AC in Hurricane?', a: 'In Hurricane, keep the area around the outdoor unit clear, check filters monthly in windy months, and have the condenser coil professionally cleaned every spring. Do not pressure wash the coil, which bends the fins.' },
      { q: 'Can you install a mini split in my Hurricane shop?', a: 'Yes. Ductless mini splits are a common choice for shops, RV garages and casitas in Hurricane. Utah Heritage HVAC sizes and installs them with clean line set routing.' },
      { q: 'Do you service vacation rental HVAC in Hurricane?', a: 'Yes. Utah Heritage HVAC services short-term rental properties in Hurricane and can schedule maintenance visits around your bookings.' },
      { q: 'Do heat pumps work in Hurricane winters?', a: 'Yes. Heat pumps work well in Hurricane winters. Expect a few more defrost cycles than in St. George on cold mornings.' },
    ],
    nearby: ['washington', 'st-george'],
    geo: { lat: 37.1753, lng: -113.2899 },
    photo: 'miniOutdoor',
  },
  {
    slug: 'santa-clara',
    name: 'Santa Clara',
    county: 'Washington County',
    title: t('Santa Clara'),
    meta: 'HVAC repair and installation in Santa Clara, UT for historic and newer homes. AC, heat pumps, furnaces and mini splits. Upfront pricing, no travel fee.',
    h1: 'HVAC Repair & Installation in Santa Clara, UT',
    sub: 'Older homes along Santa Clara Drive, newer homes up the hill, and the right heating and cooling for each.',
    quickAnswer:
      'Utah Heritage HVAC provides HVAC repair, installation and maintenance in Santa Clara, UT, including AC and heat pump repair, furnace service, ductless mini splits for older homes, ductwork and maintenance plans. We give upfront prices before any work and charge no travel fee in Santa Clara.',
    intro: [
      'Santa Clara is one of the oldest communities in Washington County, with a historic district along Santa Clara Drive and pioneer-era landmarks like the Jacob Hamblin Home. It is also home to plenty of newer neighborhoods on the benches above the river. That mix makes for a wide range of HVAC setups.',
      'Older homes may have small ducts, no ducts in some rooms, or equipment that has been patched together over decades. Newer homes have modern systems in attics and closets. We work on both and recommend what fits the house, not a one-size answer.',
    ],
    climateHeading: 'Santa Clara Summers and Winters',
    climate: [
      'Santa Clara sits close to St. George in elevation and climate, so expect summer highs over 100 degrees and mild winters. Mature trees in the older parts of town give some homes welcome shade, but cottonwood fluff in late spring can plaster outdoor coils. A spring [AC tune-up](/air-conditioning/ac-tune-up/) clears it before it chokes airflow.',
      'Winter mornings can dip below freezing, especially near the river, but daytime temperatures stay mild. Heat pumps handle most Santa Clara winters well. Homes with older gas furnaces benefit from a fall safety check; see [heating tune-up](/heating/heating-tune-up/).',
    ],
    homesHeading: 'Heating and Cooling Older Santa Clara Homes',
    homes: [
      'Historic and mid-century homes are where we most often recommend [ductless mini splits](/air-conditioning/ductless-mini-splits/). They can condition rooms that were never ducted, and they avoid tearing into plaster walls and ceilings. Line sets can be routed to stay discreet on the exterior.',
      'For homes that do have ductwork, older runs are often undersized or leaky. Sealing and resizing key runs can make a big difference in comfort. See [ductwork and zoning](/air-conditioning/zoning-ductwork/) for how we approach it.',
    ],
    servicesNote: 'Utah Heritage HVAC offers every residential and commercial service in Santa Clara, UT: repair, installation, tune-ups, mini splits, indoor air quality, ductwork and maintenance plans.',
    faqs: [
      { q: 'Can you add AC to an older Santa Clara home without ductwork?', a: 'Yes. Ductless mini splits are often the best way to add cooling and heating to older Santa Clara homes without ductwork, with minimal disruption to walls and ceilings.' },
      { q: 'Do you charge a travel fee in Santa Clara?', a: 'No. Utah Heritage HVAC does not charge travel fees in Santa Clara or anywhere else in Washington County.' },
      { q: 'How do I keep cottonwood fluff out of my AC?', a: 'Gently rinse the outdoor coil from the inside out after cottonwood season, keep vegetation trimmed back, and have the coil professionally cleaned each spring.' },
      { q: 'Do you repair furnaces in Santa Clara?', a: 'Yes. Utah Heritage HVAC repairs gas furnaces and heat pumps in Santa Clara. See [furnace repair](/heating/furnace-repair/).' },
      { q: 'Do you offer maintenance plans in Santa Clara?', a: 'Yes. The Utah Heritage HVAC maintenance plan covers Santa Clara homes with a spring AC visit and a fall heating visit each year.' },
    ],
    nearby: ['ivins', 'st-george'],
    geo: { lat: 37.133, lng: -113.6541 },
    photo: 'miniIndoor',
  },
  {
    slug: 'ivins',
    name: 'Ivins',
    county: 'Washington County',
    title: t('Ivins'),
    meta: 'HVAC repair and installation in Ivins, UT near Snow Canyon and Kayenta. AC, heat pumps, furnaces and mini splits for custom homes. Call (801) 661-5412.',
    h1: 'HVAC Repair & Installation in Ivins, UT',
    sub: 'Custom homes under the red cliffs need HVAC done carefully. We handle repairs, replacements and maintenance across Ivins.',
    quickAnswer:
      'Utah Heritage HVAC provides HVAC repair, installation and maintenance in Ivins, UT, including AC and heat pump repair, furnace service, ductless mini splits, ductwork and maintenance plans for custom and production homes. We quote all work upfront and charge no travel fee in Ivins.',
    intro: [
      'Ivins sits at the base of the red cliffs, next to Snow Canyon State Park, a little higher than St. George at roughly 3,000 feet. It is known for custom homes, the Kayenta arts community and Tuacahn Center for the Arts. A lot of homes here were designed with unique layouts, large windows and flat or low-slope roofs.',
      'That design variety means HVAC is rarely cookie-cutter. Large west- and south-facing glass adds a lot of afternoon heat. Unusual floor plans make duct design harder. Equipment placement matters, both for performance and for keeping it out of sight.',
    ],
    climateHeading: 'Sun, Glass and Afternoon Heat',
    climate: [
      'Summer in Ivins is hot and bright, and homes with big windows facing the cliffs or the valley take on a lot of solar heat. That can leave great rooms and west bedrooms warmer than the rest of the house. Proper sizing, balancing and sometimes a supplemental ductless head solve it. See [ductwork and zoning](/air-conditioning/zoning-ductwork/).',
      'Winters are mild but slightly cooler than in town, with cold, clear nights. Heat pumps work well, and many larger homes use multiple systems or zones. Each system needs its own spring and fall attention, which our [maintenance plan](/maintenance-plan/) covers.',
    ],
    homesHeading: 'Custom Homes and Equipment Placement',
    homes: [
      'Some Ivins homes use rooftop or roof-mounted equipment, and many neighborhoods have guidelines on where outdoor units can sit and how visible they are. We take that into account on replacements, keeping line sets tidy and equipment screened where possible.',
      'Casitas and studios are common on Ivins properties, and [ductless mini splits](/air-conditioning/ductless-mini-splits/) are a natural fit for them. For main-house replacements, we size the system to the actual load, glass included. See [AC installation](/air-conditioning/ac-installation/).',
    ],
    servicesNote: 'All Utah Heritage HVAC residential and commercial services are available in Ivins, UT, including installations, repairs, tune-ups, mini splits and maintenance plans.',
    faqs: [
      { q: 'Do you provide HVAC service in Ivins and Kayenta?', a: 'Yes. Utah Heritage HVAC serves all of Ivins, including Kayenta and the neighborhoods near Snow Canyon, with no travel fee.' },
      { q: 'Why is my great room so hot in the afternoon?', a: 'In Ivins homes with large west or south windows, great rooms take on heavy afternoon sun. Balancing, an added supply run, zoning or a supplemental mini split usually fixes it.' },
      { q: 'Can you replace a rooftop unit on a home in Ivins?', a: 'Yes. Utah Heritage HVAC replaces rooftop package units on homes as well as split systems, including planning crane access when needed.' },
      { q: 'Do you install mini splits in Ivins casitas?', a: 'Yes. Ductless mini splits are a common and efficient way to heat and cool casitas and studios in Ivins.' },
      { q: 'Do you offer HVAC maintenance plans in Ivins?', a: 'Yes. Our maintenance plan includes a spring AC visit and fall heating visit for Ivins homes, with heat pumps covered on both.' },
    ],
    nearby: ['santa-clara', 'st-george'],
    geo: { lat: 37.1686, lng: -113.6794 },
    photo: 'miniOutdoor',
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    county: 'Washington County',
    title: t('Enterprise'),
    meta: 'HVAC repair and installation in Enterprise, UT from a company based right in town. Furnaces, heat pumps, AC and mini splits. Call (801) 661-5412.',
    h1: 'HVAC Repair & Installation in Enterprise, UT',
    sub: 'Utah Heritage HVAC is based in Enterprise. When you call, the technician lives just down the road.',
    quickAnswer:
      'Utah Heritage HVAC is based in Enterprise, UT, and provides HVAC repair, installation and maintenance throughout Enterprise and the Escalante Valley. We handle furnaces, heat pumps, air conditioners, mini splits for shops and outbuildings, and maintenance plans, with upfront pricing and no travel fees.',
    intro: [
      'Enterprise is home. Corbin Allen and his family live here, and Utah Heritage HVAC is run from right here in town. For Enterprise customers that means a short drive, a familiar face, and a technician who deals with the same winters and the same dust you do.',
      'Enterprise sits around 5,300 feet in the Escalante Valley, a farming community with hay fields, wide open views and a much colder winter than St. George. HVAC here is a year-round job: real heating in winter, solid cooling in summer, and rural properties with shops and outbuildings that need their own solutions.',
    ],
    climateHeading: 'Escalante Valley Weather',
    climate: [
      'At over 5,000 feet, Enterprise winters are cold. Nights in the teens are common, and snow is part of the season. Furnaces carry the house for months, so a fall [heating tune-up](/heating/heating-tune-up/) is the most important maintenance visit of the year. High-efficiency furnaces also need their PVC intake and exhaust kept clear of snow.',
      'Summers are warm and dry with big temperature swings between day and night. Farm dust from fieldwork and harvest loads filters and coils, so filter changes and an annual coil cleaning go a long way. Heat pumps here work best paired with gas or propane backup for cold nights.',
    ],
    homesHeading: 'Rural Homes, Shops and Outbuildings',
    homes: [
      'Many Enterprise properties are rural, and fuel options vary. Some homes use propane furnaces, others are all-electric with heat pumps, and some combine both. We service all of these and can help you weigh costs if you are replacing equipment. See [heating installation](/heating/heating-installation/).',
      'Shops, barns, guest quarters and home offices are common here. [Ductless mini splits](/air-conditioning/ductless-mini-splits/) with cold-climate ratings are a great fit, heating efficiently in winter and cooling in summer without running ducts across the property.',
    ],
    servicesNote: 'Every Utah Heritage HVAC service is available in Enterprise, from furnace and heat pump repair to new installs, mini splits, ductwork, maintenance plans and light commercial work.',
    faqs: [
      { q: 'Is Utah Heritage HVAC based in Enterprise, UT?', a: 'Yes. Utah Heritage HVAC owner Corbin Allen lives in Enterprise, and the company serves Enterprise, the Escalante Valley and the rest of Southern Utah from here.' },
      { q: 'Do you service propane furnaces in Enterprise?', a: 'Yes. Utah Heritage HVAC services propane and natural gas furnaces, heat pumps and dual-fuel systems in Enterprise and surrounding rural areas.' },
      { q: 'Can you heat a shop or barn in Enterprise?', a: 'Yes. Cold-climate ductless mini splits and other heating options work well for shops, barns and outbuildings in Enterprise.' },
      { q: 'When should I schedule a furnace tune-up in Enterprise?', a: 'Schedule your furnace tune-up in Enterprise in September, before the first hard freeze, so any repairs are done before winter.' },
      { q: 'Do you charge travel fees in Enterprise?', a: 'No. Utah Heritage HVAC is based in Enterprise and never charges travel fees in town or anywhere else in our service area.' },
    ],
    nearby: ['cedar-city', 'st-george'],
    geo: { lat: 37.5733, lng: -113.7191 },
    photo: 'furnaceVent',
  },
  {
    slug: 'cedar-city',
    name: 'Cedar City',
    county: 'Iron County',
    title: t('Cedar City'),
    meta: 'Furnace repair, AC service and HVAC installation in Cedar City, UT. Built for elevation winters. Upfront pricing and no travel fees. Call (801) 661-5412.',
    h1: 'HVAC Repair & Installation in Cedar City, UT',
    sub: 'Cedar City winters are serious at nearly 5,800 feet. We keep furnaces, heat pumps and air conditioners ready for both seasons.',
    quickAnswer:
      'Utah Heritage HVAC provides HVAC repair, installation and maintenance in Cedar City, UT, with a focus on furnace repair, heat pumps and dual-fuel systems for cold elevation winters, plus AC service for summer. We offer upfront pricing, emergency heating service and no travel fees in Cedar City and Iron County.',
    intro: [
      'Cedar City is a different climate from St. George, even though it is less than an hour up I-15. At close to 5,800 feet, winters bring snow and nights well below freezing, and the heating season runs from October into April. Furnace repair is the call we get most here.',
      'We work across Cedar City and Iron County: neighborhoods near Southern Utah University and downtown, the west side toward Iron Springs, Cross Hollow and the south end of town, and nearby Enoch. Many homes here are older brick construction, alongside plenty of newer builds and student rentals.',
    ],
    climateHeading: 'Elevation Winters and Warm Summers',
    climate: [
      'A Cedar City furnace runs for hours a day for months. Igniters, flame sensors, inducer motors and blower motors all wear with that kind of use. High-efficiency furnaces have an extra winter risk: condensate lines and PVC vents that can freeze or get blocked by drifting snow. A September [heating tune-up](/heating/heating-tune-up/) catches most of this before the cold sets in.',
      'Summers are warm, with highs often in the 90s, but nights cool off nicely. Air conditioners run less than in St. George, yet they sit idle all winter and can wake up with problems in May. Very dry winter air is common indoors, which is where a whole-home humidifier from our [indoor air quality](/air-conditioning/indoor-air-quality/) services helps.',
    ],
    homesHeading: 'Cedar City Homes and Rentals',
    homes: [
      'Older homes near downtown may have aging furnaces and ductwork that was sized for heating only, which can make adding or upgrading AC tricky. We check duct sizing before recommending cooling equipment. Many newer homes use heat pumps paired with gas furnaces as dual-fuel systems, which work well when the switchover is set correctly for the climate.',
      'Cedar City has a large rental market around SUU. Landlords need fast repairs, clear invoices and preventive maintenance between tenants. A [maintenance plan](/maintenance-plan/) keeps rental systems checked every spring and fall. For no-heat emergencies, see [emergency heating repair](/heating/emergency-heating-repair/).',
    ],
    servicesNote: 'Every Utah Heritage HVAC service is available in Cedar City: furnace and heat pump repair, heating and AC installation, tune-ups, mini splits, indoor air quality, ductwork, maintenance plans and commercial HVAC.',
    faqs: [
      { q: 'Do you offer furnace repair in Cedar City?', a: 'Yes. Furnace repair is one of our most common services in Cedar City. Utah Heritage HVAC repairs gas furnaces, heat pumps and dual-fuel systems across Cedar City and Iron County.' },
      { q: 'Do you offer emergency heating service in Cedar City?', a: 'Yes. Emergency heating service is available in Cedar City. Call (801) 661-5412 and we will give you an honest arrival time.' },
      { q: 'Is a heat pump a good idea in Cedar City?', a: 'A cold-climate heat pump or a dual-fuel system with a gas furnace backup works well in Cedar City. A heat pump alone without backup is usually not the best choice at this elevation.' },
      { q: 'Why does my high-efficiency furnace shut off when it snows?', a: 'High-efficiency furnaces in Cedar City vent through PVC pipes outside. Drifting snow or ice can block the intake or exhaust and trigger a safety shutdown. Clear the pipes and call if it does not restart.' },
      { q: 'Do you charge travel fees to Cedar City?', a: 'No. Utah Heritage HVAC does not charge travel fees in Cedar City, Enoch or anywhere in our Iron County service area.' },
    ],
    nearby: ['enterprise'],
    geo: { lat: 37.6775, lng: -113.0619 },
    photo: 'furnaceGas',
  },
];
