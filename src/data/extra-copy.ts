// Additional unique, answer-first sections per service page (keyed by URL). Merged into services in services.ts.
export interface ExtraSection { heading: string; body: string[] }

export const extraCopy: Record<string, ExtraSection> = {
  '/air-conditioning/ac-tune-up/': {
    heading: 'What Happens If You Skip a Year?',
    body: [
      'Skipping one AC tune-up in Southern Utah rarely causes an instant breakdown, but it lets small problems grow through a full season of heavy use. A coil that was a little dusty becomes matted. A capacitor that was slightly weak drops further. By August, the system is working harder, costing more to run, and closer to a failure on the worst possible day.',
      'We also look for things homeowners would never notice: a rub-through on a refrigerant line where it touches the cabinet, a wire with cracked insulation from years in the sun, a drain line starting to grow algae. Each one is minor when found early. Left alone, each one can end a summer afternoon early.',
    ],
  },
  '/air-conditioning/ductless-mini-splits/': {
    heading: 'Single-Zone or Multi-Zone: Which Do You Need?',
    body: [
      'A single-zone mini split pairs one outdoor unit with one indoor head and is the right choice for one room or one open space, like a garage shop or a casita. A multi-zone system runs two to five indoor heads off one outdoor unit, so each room gets its own temperature control without several units on the side of the house.',
      'Multi-zone makes sense when you are conditioning several rooms that the central system does not reach well, such as a bonus room, an office and a guest room over the garage. Single-zone units usually run a little more efficiently and are simpler to service, so when only one or two spaces need help, two single-zone systems are sometimes the better call. We will lay out both options with prices so you can compare.',
      'Head style matters too. Wall-mounted heads are the most common and the least expensive. Ceiling cassettes and slim ducted units cost more but blend into finished rooms. In Southern Utah homes with high ceilings, we place heads so cool air reaches the people in the room instead of pooling near the ceiling.',
    ],
  },
  '/air-conditioning/indoor-air-quality/': {
    heading: 'Which Air Quality Upgrades Actually Help?',
    body: [
      'For most Southern Utah homes, the upgrades that make the biggest difference are, in order: sealing leaky return ducts, switching to a deeper media filter cabinet, and adding a whole-home humidifier for winter if you live at elevation. Those three address dust, allergens and dry air, which are the complaints we hear most.',
      'A media filter cabinet holds a 4- or 5-inch filter instead of the standard 1-inch. It has far more surface area, so it captures fine dust without choking airflow, and it usually lasts several months between changes instead of several weeks. For homes near construction or open desert, it is one of the best values in indoor air quality.',
      'Other products, like UV lights and electronic air cleaners, help in specific situations: a coil with recurring biological growth, a household with severe allergies, or someone with a medical need. We will tell you when they fit and when they are not worth the money for your home. If your system itself is older and struggling, an [AC tune-up](/air-conditioning/ac-tune-up/) is the place to start.',
    ],
  },
  '/air-conditioning/zoning-ductwork/': {
    heading: 'Flex Duct vs. Sheet Metal in Southern Utah Attics',
    body: [
      'Most newer Southern Utah homes use flexible duct in the attic because it is fast to install. Flex works fine when it is run straight, supported every few feet, and pulled tight. Problems start when it is too long, sagging between trusses, kinked around framing or crushed by someone walking in the attic. Each of those cuts airflow to the room at the end of the run.',
      'Sheet metal trunks and fittings move air more efficiently and hold their shape for decades, which is why we often use metal for main trunks and plenums and keep flex for short final runs to registers. When we repair ductwork, we straighten and support runs, replace crushed sections, seal joints with mastic, and make sure insulation is intact so attic heat does not soak into the air on its way to your rooms.',
      'Return air is just as important. Many homes have one small central return that cannot pull enough air back to the system. Adding a return in a closed-off bedroom or upstairs hallway can fix uneven temperatures and quiet a noisy system at the same time.',
    ],
  },
  '/air-conditioning/emergency-ac-repair/': {
    heading: 'Which AC Failures Are Emergencies?',
    body: [
      'An AC problem is an emergency in Southern Utah when the house cannot be kept at a safe temperature and someone vulnerable lives there, or when there is a risk of damage, such as burning smells, water leaking through a ceiling, or a breaker that trips repeatedly. A system that is cooling slowly but still holding the house in the low 80s can usually wait for the next regular appointment.',
      'When you call, we will help you sort out which situation you are in. If it can safely wait until morning, we will say so and book you first thing rather than charging after-hours rates for something that is not urgent. If it cannot wait, we will tell you how soon we can be there.',
      'Many of the emergencies we see in St. George and Washington County trace back to a single weak part that would have shown up on a spring test. Customers on our [maintenance plan](/maintenance-plan/) have far fewer of these calls.',
    ],
  },
  '/heating/furnace-repair/': {
    heading: 'Should You Repair a Furnace Over 15 Years Old?',
    body: [
      'A furnace over 15 years old is usually worth repairing if the problem is a common, inexpensive part like an igniter, flame sensor or capacitor, and the heat exchanger is sound. It is usually time to replace when the heat exchanger is cracked, the control board or inducer fails on an older unit, or repairs have added up over the last two winters. We will show you the condition of the heat exchanger and give you prices for both paths.',
    ],
  },
  '/heating/heat-pump-repair/': {
    heading: 'How Defrost Works and Why It Fails',
    body: [
      'In heating mode, a heat pump outdoor coil runs colder than the outside air, so moisture freezes on it. Every so often, the heat pump switches briefly into cooling mode to warm the coil and melt the frost. You may hear a whoosh and see steam. That is normal and usually lasts a few minutes.',
      'Defrost fails when the sensor reading the coil temperature goes bad, the defrost control board fails, or the reversing valve sticks. Without defrost, ice builds until the coil is a solid block, airflow stops, and the house falls back on expensive backup heat. In Cedar City and Enterprise, where winter nights run well below freezing, a defrost failure can show up on the power bill within a week. If you see heavy ice that is not clearing, shut the system to emergency heat and call us.',
    ],
  },
  '/heating/heating-installation/': {
    heading: 'What Efficiency Rating Makes Sense Here?',
    body: [
      'For gas furnaces, the main choice is between standard efficiency (about 80% AFUE) and high efficiency (95% AFUE and up). In Cedar City, Enterprise and other high-elevation towns with long heating seasons, high-efficiency furnaces usually pay back through lower gas bills. In St. George, where furnaces run fewer hours, an 80% furnace or a heat pump with gas backup can be the more sensible spend.',
      'High-efficiency furnaces need PVC venting and a condensate drain, which affects where the furnace can sit and how the vent pipes leave the house. In homes that currently have a metal flue, switching can add cost. We price both options so you can see the difference. For heat pumps, we look at both cooling efficiency and heating performance at low temperatures, since a heat pump that heats well at 20°F matters far more in Cedar City than in St. George.',
      'Whatever you choose, a properly installed mid-range system will outperform a high-end system installed poorly. That is why the install itself gets most of our attention.',
    ],
  },
  '/heating/heating-tune-up/': {
    heading: 'What a Carbon Monoxide Check Involves',
    body: [
      'A carbon monoxide check on a gas furnace measures CO in the flue gases and in the air near the furnace and supply registers while the furnace runs. High readings in the flue point to a combustion problem, such as dirty burners or incorrect gas pressure. Any CO in the living space points to a venting issue or a cracked heat exchanger, and the furnace should not run until it is fixed.',
      'We also look at the flame itself. A steady blue flame that does not move when the blower starts is what we want. A flame that lifts, rolls or changes shape when air starts moving can mean a crack in the heat exchanger. Combined with a visual inspection, those checks give a clear picture of whether the furnace is safe for another winter.',
      'You should still have working CO alarms near bedrooms and on every level. The tune-up is a yearly check. The alarm is there every night.',
    ],
  },
  '/heating/emergency-heating-repair/': {
    heading: 'Common Causes of No Heat in Southern Utah',
    body: [
      'Most no-heat calls in Southern Utah come from a short list: a cracked hot surface igniter, a dirty flame sensor, a clogged filter tripping the high limit, a blocked vent pipe, a failed inducer motor, or a tripped breaker or furnace switch. On heat pumps, the usual causes are failed defrost, a bad capacitor or contactor, or backup heat strips that have burned out.',
      'In Cedar City and Enterprise, snow and ice add a couple of winter-only causes. High-efficiency furnaces can shut down when drifting snow covers the PVC intake or exhaust, and condensate lines that run outside can freeze and back up. Clearing the vents is safe to do yourself. A frozen drain usually needs a technician.',
      'Most of these parts are on the truck, so the majority of no-heat calls are fixed on the first visit. Every repair is quoted before we start, emergency or not.',
    ],
  },
  '/maintenance-plan/spring-ac-tune-up/': {
    heading: 'Why Year-Over-Year Readings Matter',
    body: [
      'A single tune-up tells you how the system is doing today. Plan visits tell you how it is changing. We record capacitor values, amp draw, refrigerant pressures and temperature split every spring, then compare them to last year. A capacitor that loses a little capacity each season, or a refrigerant charge that slips a few pounds, shows up as a trend long before it causes a breakdown.',
      'That history also helps when it is time to make a bigger decision. If your system is approaching replacement age, a few years of readings show whether it is holding steady or wearing out quickly, so you can plan instead of reacting to a July failure.',
    ],
  },
  '/maintenance-plan/fall-heating-tune-up/': {
    heading: 'Gas Furnace vs. Heat Pump: What Changes on the Fall Visit',
    body: [
      'For a gas furnace, the fall visit is mostly about combustion and safety. We inspect the heat exchanger, watch the flame, measure CO, check gas pressure, clean the flame sensor and burners, and test every safety switch, from the high limit to the pressure switch. On high-efficiency furnaces we also check the condensate trap and drain, which can freeze or clog in winter.',
      'For a heat pump, the fall visit focuses on heating performance. We test the reversing valve, run the defrost cycle, check the backup heat strips and their sequencers, and confirm the outdoor unit is clean and clear. For dual-fuel systems, we confirm the thermostat switches to gas at a sensible outdoor temperature.',
      'Either way, the filter gets changed, the thermostat gets checked, and you get a short summary of what we found and what to watch for this winter.',
    ],
  },
  '/maintenance-plan/heat-pump-maintenance/': {
    heading: 'Simple Things You Can Do Between Visits',
    body: [
      'Keep two feet of clear space around the outdoor unit and trim back shrubs. Gently rinse cottonwood fluff and dust off the coil in late spring with a garden hose. Check the filter monthly during heavy cooling and heating months. In winter, make sure snow and ice from the roof are not dripping onto the outdoor unit, which can overwhelm the defrost cycle.',
      'Do not cover a heat pump in winter. Unlike an AC-only unit, it needs to run to heat the house. If you see thick ice that does not clear after an hour or two, switch the thermostat to emergency heat and give us a call.',
    ],
  },
  '/maintenance-plan/efficiency-audit/': {
    heading: 'What Fixes Usually Come Out of an Audit?',
    body: [
      'The most common results of an efficiency audit in Southern Utah homes are duct sealing and repair, coil cleaning, correcting refrigerant charge, adding return air, and adjusting thermostat schedules. These fixes are usually far less expensive than new equipment and often produce a noticeable change in comfort and run time.',
      'When the audit shows the equipment itself is the bottleneck, we will say so and give you replacement options alongside the cost of keeping the current system. Having measured numbers makes that decision much easier, because you are comparing real performance instead of guessing.',
    ],
  },
  '/commercial/ac-repair/': {
    heading: 'What a Commercial AC Outage Really Costs',
    body: [
      'For many Southern Utah businesses, the cost of an AC outage is measured in hours. A restaurant loses a lunch service. A salon reschedules clients. An office sends people home early. A small retail shop watches customers walk in and walk right back out. Compared to that, most repairs are a small number.',
      'That is why we focus on first-visit fixes for commercial customers. We stock common commercial parts, like capacitors, contactors, belts and fan motors, and we diagnose the whole unit so a second failure is not waiting behind the first. When a part has to be ordered, we tell you when it will arrive and whether we can keep the unit running in the meantime.',
      'If your building has several units, we also look at whether the others are close behind. One failing rooftop unit is often a sign that others of the same age need attention.',
    ],
  },
  '/commercial/ac-installation/': {
    heading: 'Planning a Rooftop Unit Replacement Step by Step',
    body: [
      'A rooftop unit replacement starts with matching the new equipment to the building. We check whether the new unit fits the existing curb or needs an adapter, whether the electrical service and disconnect are sized correctly, and how the supply and return connections line up. Getting these details right on the bid avoids change orders on install day.',
      'Next comes logistics. Larger units often need a crane, which means scheduling, sometimes a permit for street use, and coordinating with the business so customers and staff are clear of the work zone. We plan these swaps for early mornings or closed days whenever possible.',
      'On install day, the old unit is disconnected and lifted off, the curb is inspected and sealed, the new unit is set and connected, and the system is started up and tested. We finish by setting up thermostats or controls with your staff and handing over documentation for warranty and records.',
      'For owners with several aging units, we can also map out a replacement schedule over a few years so the cost is spread out and no unit fails unexpectedly in July.',
    ],
  },
  '/commercial/ac-tune-up/': {
    heading: 'Why Belts and Economizers Get Special Attention',
    body: [
      'Most residential systems do not have belts or economizers. Many commercial rooftop units have both, and they are two of the most common causes of commercial comfort complaints. A worn belt slips, so the blower moves less air and the space never quite cools. A broken belt stops airflow entirely while the compressor keeps running, which can freeze the coil.',
      'Economizers bring in outdoor air when it is cool enough to help. In St. George, that is useful on spring mornings, but a damper stuck open in July pulls 105-degree air straight into the building. Linkages loosen, actuators fail and sensors drift. We test the economizer through its full range on every commercial cooling tune-up.',
      'We also clean condensate drains, which are larger on commercial equipment and can flood ceiling tiles when they clog. Spring is the time to clear them, before the first long run of humid monsoon days.',
      'Every item gets written down per unit, so if you manage several buildings you can see at a glance which equipment needs attention first.',
    ],
  },
  '/commercial/heating-repair/': {
    heading: 'Gas Packs, Furnaces and Unit Heaters: What Fails Most',
    body: [
      'On gas/electric rooftop units, the most common heating failures we see are igniters, flame sensors, inducer motors and pressure switches, plus gas valves on older equipment. Rooftop exposure adds wear: wind-driven rain and snow, ice on the cabinet, and debris in the flue hood.',
      'Commercial furnaces inside mechanical rooms fail in similar ways, plus blower motors and belts on larger units. Gas unit heaters in shops and warehouses often have issues with pilot or ignition assemblies, venting, and fans that seize after sitting all summer.',
      'Heat pumps on commercial buildings bring their own list: defrost controls, reversing valves, and backup heat strips. In St. George, many offices and retail spaces rely on heat pumps all winter, so a defrost failure can leave a building cold on the few freezing mornings of the year.',
      'Whatever the equipment, we work through the same process: confirm the call for heat, follow the sequence of operation, find the failed component, and check safety before returning the unit to service.',
    ],
  },
  '/commercial/heating-installation/': {
    heading: 'Planning Around Heating Season',
    body: [
      'The best time to replace commercial heating equipment is before you need it. In Cedar City and Iron County, that means late summer or early fall. In St. George, fall or early spring works well. Planned replacements let us order the right equipment, schedule cranes or access, and choose a day that does not disrupt business.',
      'Emergency replacements in the middle of winter are possible, but equipment availability can be tighter and the building may need temporary heat while the new unit is installed. That is one of the biggest reasons we encourage owners to get honest condition reports on aging equipment during regular maintenance.',
      'If your building has several units of the same age, it may make sense to replace them in phases over a few years. We can lay out a plan that spreads the cost and replaces the units in the worst condition first.',
      'We also look at whether the new equipment should change type. A building that was originally built with gas packs may be better served by heat pumps or dual-fuel units today, depending on how it is used and what utility rates look like. We will walk through those options on the bid.',
    ],
  },
  '/commercial/heating-tune-up/': {
    heading: 'Why Commercial Heat Fails on the First Cold Morning',
    body: [
      'Commercial heating equipment in Southern Utah usually sits idle from spring through fall. During that time, dust settles on burners and flame sensors, insects and birds find their way into flues, and igniters that were weak last winter wait to fail. Then the first cold Monday arrives, every unit is called for heat at once, and the weakest ones lock out.',
      'A fall tune-up fires every unit while the weather is still mild, so problems can be fixed without anyone sitting in a cold office. It is also the right time to check thermostat schedules and setbacks. Buildings that changed hours or tenants over the summer often have schedules that no longer match how the space is used.',
      'For Cedar City buildings, we also check that intake and exhaust terminations are positioned to stay clear of snow, and that any condensate lines are protected from freezing.',
      'Each unit gets a written report so owners and property managers can plan repairs and budget for replacements before winter instead of during it.',
    ],
  },
  '/commercial/ductless-mini-splits/': {
    heading: 'Sizing Mini Splits for Commercial Spaces',
    body: [
      'Sizing a commercial mini split is different from sizing one for a bedroom. Server rooms are sized to the heat output of the equipment, which runs constantly, plus the room itself. Offices are sized to people, lighting, computers and windows. Shops and service bays are sized to the building shell, door openings and any heat-producing equipment like compressors or welders.',
      'For server and IT rooms, we often recommend a unit with low-ambient cooling capability, so it can keep cooling on cool winter nights when standard units may struggle. Some owners also choose a second unit for redundancy so that a single failure does not take down the room.',
      'Condensate is a bigger planning item in commercial spaces. Indoor heads produce water that has to go somewhere, and in finished offices that often means a condensate pump or a carefully routed drain line. We plan that up front so there are no drips over desks or equipment.',
      'Finally, controls. Many businesses want simple, locked settings so staff cannot change temperatures all day. Most commercial ductless systems support wired controllers or lockouts, and we set that up at startup.',
    ],
  },
  '/commercial/indoor-air-quality/': {
    heading: 'Filter Schedules for Southern Utah Businesses',
    body: [
      'The right filter schedule for a commercial building depends on dust, occupancy and how many hours the equipment runs. In St. George, a typical office might need filters every two to three months. A restaurant, a busy retail store or a building near active construction may need them every month. Shops that cut wood or metal can need even more frequent changes.',
      'Filter grade matters as much as frequency. Upgrading from basic fiberglass filters to pleated MERV 8 to 13 filters captures far more fine dust and smoke, but only if the rooftop unit can move air through the higher resistance. We check static pressure on each unit before recommending an upgrade, and we size filter racks so filters seal properly instead of letting air bypass around the edges.',
      'Return paths are another common source of dust. Many commercial buildings use the space above the ceiling tiles as a return plenum. If that space is dirty or open to unconditioned areas, the system pulls that dust back through the building. Sealing and cleaning those paths can make a big difference.',
      'We can put filter changes on a set schedule as part of a [commercial maintenance plan](/commercial/maintenance-plans/), so the work happens without anyone needing to remember it.',
    ],
  },
  '/commercial/maintenance-plans/': {
    heading: 'How a Commercial Plan Is Set Up',
    body: [
      'Every commercial plan starts with a building walk-through. We list each unit with its make, model, age, filter size and belt size, note its condition, and flag anything that needs attention now. That list becomes the foundation for the plan and a useful record for owners and property managers.',
      'From there, we set a visit schedule based on how the building is used and what the equipment needs. The written agreement lists what is done on each visit, how often, and the price. Repairs found during visits are always quoted separately, in writing, before any work.',
      'After each visit, you get a report organized by unit, with readings, findings and recommendations. Over time, those reports become a clear picture of which equipment is holding up and which is approaching replacement, so budgeting is based on data rather than surprises.',
    ],
  },
};

/** Extra unique paragraphs for city pages. */
export const areaExtra: Record<string, ExtraSection> = {
  'st-george': {
    heading: 'When St. George Homeowners Usually Call Us',
    body: [
      'Most St. George calls come in waves. The first warm week of May brings tune-up requests and systems that will not start after sitting all winter. July and August bring no-cooling calls on the hottest afternoons and after monsoon storms. The first cold mornings in December bring heat pump and furnace calls from systems that sat idle since spring. Booking a spring tune-up in March or April keeps you ahead of the busiest part of the year.',
    ],
  },
  washington: {
    heading: 'Questions to Ask About a Builder-Installed System',
    body: [
      'If you live in a newer Washington home, it helps to know what you have. Find the model numbers on the outdoor unit and the furnace or air handler, and check whether the manufacturer warranty was registered, since some require registration within a set time after closing. Ask whether the refrigerant charge was checked after move-in, and whether every room gets good airflow. We are happy to look over a builder-installed system and give you a straightforward read on its condition, with no pressure to change anything that is working.',
    ],
  },
  hurricane: {
    heading: 'Serving Hurricane and Nearby Communities',
    body: [
      'Hurricane is the center of our east-side service area, and we also help homeowners in nearby communities along State Route 9 and toward La Verkin and Toquerville. If you are not sure whether we cover your address, call (801) 661-5412. There is no travel fee anywhere we serve, so living on the edge of town does not cost you extra.',
      'Hurricane has also seen a lot of new construction in recent years. Many newer homes here have builder-installed systems that benefit from a first-year checkup to confirm refrigerant charge and duct connections.',
    ],
  },
  'santa-clara': {
    heading: 'Comfort Without Changing the Character of the Home',
    body: [
      'Owners of older Santa Clara homes often want better heating and cooling without giving up the look and feel of the house. We plan equipment placement, line set routes and register locations with that in mind, keeping outdoor units out of the front yard where possible and using paintable line set covers that match the exterior. Inside, wall-mounted mini split heads can go high on interior walls where they are less noticeable, and slim ducted units can hide in closets or soffits for a cleaner look.',
    ],
  },
  ivins: {
    heading: 'Multiple Systems in Larger Ivins Homes',
    body: [
      'Larger Ivins homes often have two or three separate systems: one for the main living area, one for bedrooms, and sometimes one for a casita or upstairs suite. Each system has its own thermostat, filter and outdoor unit, so each needs its own maintenance. When we service multi-system homes, we label equipment, track filter sizes and record readings for each system, so you always know which unit serves which part of the house and how each one is holding up.',
    ],
  },
  enterprise: {
    heading: 'Fast Help for Neighbors',
    body: [
      'Because Utah Heritage HVAC is based right here, Enterprise customers usually get the shortest drive time of anyone in our service area. That matters on a January night when the furnace quits, or on a July afternoon when the AC stops. We also serve the surrounding Escalante Valley, including farms and homes outside town. If you are not sure whether we reach your property, call (801) 661-5412 and ask.',
      'Being local also means we know the area\'s homes: older farmhouses, newer builds, manufactured homes and properties with outbuildings. Each has its own heating and cooling needs, and we tailor recommendations to the building in front of us.',
    ],
  },
  'cedar-city': {
    heading: 'Preparing a Cedar City Home for Winter',
    body: [
      'A few simple steps help Cedar City homes get through winter without a no-heat call. Schedule a furnace tune-up in September. Replace the filter at the start of the season and check it monthly. Make sure PVC vent pipes on high-efficiency furnaces sit high enough to stay above drifting snow, and clear them after storms. Test your carbon monoxide alarms. If you have a heat pump, keep roof runoff and snow away from the outdoor unit. These habits prevent most of the winter emergencies we see.',
    ],
  },
};

/** Extra section for hubs. */
export const hubExtra: Record<'air-conditioning' | 'heating' | 'commercial', ExtraSection> = {
  'air-conditioning': {
    heading: 'Repair, Replace or Maintain: How to Decide',
    body: [
      'If your air conditioner is under about 8 years old and something fails, repair almost always makes sense. If it is over 12 years old, needs a major part like a compressor, or still runs on R-22 refrigerant, it is worth comparing repair against replacement. Our guide on [AC repair vs. replacement](/blog/ac-repair-vs-replacement-how-to-know-which-one-you-actually-need/) walks through the math in detail.',
      'If the system is working, the best money you can spend is on maintenance. A spring tune-up costs far less than a summer breakdown, and it keeps efficiency up through the long cooling season. Our [maintenance plan](/maintenance-plan/) schedules it for you every year.',
      'Comfort problems that are not about the equipment, like one hot room or a dusty house, usually trace back to ductwork, return air or filtration. Those fixes are often less expensive than people expect, and we can measure the problem before recommending anything.',
      'Whatever you need, the process is the same: we come out, measure, explain what we found in plain language, and give you an upfront price. You decide what happens next.',
    ],
  },
  heating: {
    heading: 'When to Call About Your Heat',
    body: [
      'Call right away if you smell gas (after leaving the house and calling the gas company), if a carbon monoxide alarm sounds, or if the house is getting dangerously cold. Call soon if the furnace short cycles, makes new noises, takes several tries to light, or if your heat pump is iced over and not clearing. Those problems usually get worse, and fixing them early is cheaper.',
      'If your heating seems fine, the right time to call is early fall for a tune-up. In Cedar City and Enterprise, that means September. In St. George, October or November. The fall visit catches weak igniters, dirty flame sensors and venting problems before you depend on the heat every night.',
      'If you are thinking about replacing an older furnace or heat pump, the off-season is the best time. You have more time to compare options, and installation can be scheduled without the pressure of a cold house. We provide free estimates on new heating systems anywhere in our service area.',
      'And if you are not sure what kind of system you have, that is fine. Send a photo of the furnace or outdoor unit label with your request, and we will figure it out together.',
    ],
  },
  commercial: {
    heading: 'Why Owner-Operated Matters for Commercial Customers',
    body: [
      'Larger HVAC companies often send a different technician every visit. That works for some customers, but it means nobody really knows your building. With Utah Heritage HVAC, the owner handles your account. He knows which units are aging, which tenants run warm, and which rooftop has the tricky access ladder.',
      'That continuity makes everything faster: diagnosing a failure, planning a replacement, or explaining a repair to an owner or property manager. It also means one person is accountable for the work.',
      'Corbin has also been on the management side of the trade, running a branch and operations at a major Southern Utah HVAC company. He understands budgets, scheduling and the paperwork that property managers need, not just the equipment on the roof.',
      'For businesses with a handful of units across one or two buildings, that combination of hands-on service and clear communication is often a better fit than a large commercial contractor with a rotating crew.',
    ],
  },
};
