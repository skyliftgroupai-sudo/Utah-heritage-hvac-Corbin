// Source of truth for 301s from the old WordPress site. `node scripts/redirects.mjs` rewrites vercel.json.
import fs from 'node:fs';
const SA = '/hvac-service-areas-st-george-to-cedar-city-ut';
export const redirects = [
  ['/ac-repair-in-southern-utah/', '/air-conditioning/ac-repair/'],
  ['/heating-and-furnace-repair-in-southern-utah/', '/heating/furnace-repair/'],
  ['/new-install/', '/air-conditioning/ac-installation/'],
  ['/emergency-services/', '/air-conditioning/emergency-ac-repair/'],
  [`${SA}/`, '/service-areas/'],
  [`${SA}/ac-repair-st-george-ut-same-day-hvac-service/`, '/service-areas/st-george/'],
  [`${SA}/hvac-repair-washington-ut-ac-service-replacement/`, '/service-areas/washington/'],
  [`${SA}/furnace-ac-repair-cedar-city-ut-same-day-service/`, '/service-areas/cedar-city/'],
  [`${SA}/hvac-service-enterprise-ut-local-company-based-in-town/`, '/service-areas/enterprise/'],
  [`${SA}/hvac-repair-in-santa-clara-utah/`, '/service-areas/santa-clara/'],
  [`${SA}/hvac-repair-in-ivins-utah/`, '/service-areas/ivins/'],
  [`${SA}/hvac-service-in-veyo-utah/`, '/service-areas/'],
  [`${SA}/hvac-repair-in-veyo-utah/`, '/service-areas/'],
  [`${SA}/hvac-repair-in-la-verkin-utah/`, '/service-areas/'],
  [`${SA}/hvac-repair-in-toquerville-utah/`, '/service-areas/'],
  ['/ac-repair-vs-replacement-how-to-know-which-one-you-actually-need/', '/blog/ac-repair-vs-replacement-how-to-know-which-one-you-actually-need/'],
  ['/why-southern-utah-is-so-hard-on-hvac-systems-and-what-to-do-about-it/', '/blog/why-southern-utah-is-so-hard-on-hvac-systems-and-what-to-do-about-it/'],
  ['/how-often-should-you-service-your-hvac-in-st-george-or-cedar-city/', '/blog/how-often-should-you-service-your-hvac-in-st-george-or-cedar-city/'],
  ['/category/service/', '/blog/'],
  ['/category/maintenance/', '/blog/'],
  ['/category/repair/', '/blog/'],
  ['/category/:slug/', '/blog/'],
  ['/author/:slug/', '/meet-corbin/'],
  ['/feed/', '/blog/'],
  ['/wp-sitemap.xml', '/sitemap-index.xml'],
  ['/sitemap.xml', '/sitemap-index.xml'],
  ['/wp-sitemap-:part.xml', '/sitemap-index.xml'],
  ['/services/', '/'],
  ['/home/', '/'],
  ['/about/', '/meet-corbin/'],
];
if (process.argv[1]?.endsWith('redirects.mjs')) {
  const config = {
    $schema: 'https://openapi.vercel.sh/vercel.json',
    framework: 'astro',
    buildCommand: 'npm run build',
    outputDirectory: 'dist',
    trailingSlash: true,
    cleanUrls: false,
    redirects: redirects.map(([source, destination]) => ({ source, destination, permanent: true })),
    headers: [
      { source: '/_astro/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/(.*)', headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ] },
    ],
  };
  fs.writeFileSync('vercel.json', JSON.stringify(config, null, 2) + '\n');
  console.log(`vercel.json written with ${redirects.length} redirects`);
}
