// Generates favicons + og-default.jpg from the logo and a job photo.
import sharp from 'sharp';
import fs from 'node:fs';
const logo = 'src/assets/brand/logo.webp';
for (const [n, s] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await sharp(logo).resize(s, s).png().toFile(`public/${n}`);
}
const b64 = (await sharp(logo).resize(64, 64).png().toBuffer()).toString('base64');
fs.writeFileSync('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><image width="64" height="64" xlink:href="data:image/png;base64,${b64}"/></svg>\n`);
const W = 1200, H = 630;
const bg = await sharp('src/assets/photos/furnace-coil-lineset.jpg').resize(W, H, { fit: 'cover' }).modulate({ brightness: 0.55 }).toBuffer();
const overlay = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
<rect width="${W}" height="${H}" fill="#0b2928" opacity=".72"/>
<rect x="0" y="${H - 14}" width="400" height="14" fill="#b5522b"/><rect x="400" y="${H - 14}" width="400" height="14" fill="#d9a273"/><rect x="800" y="${H - 14}" width="400" height="14" fill="#1d5654"/>
<text x="80" y="300" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="74" fill="#ffffff">UTAH HERITAGE HVAC</text>
<text x="80" y="370" font-family="Arial, sans-serif" font-size="36" fill="#d9a273">AC &amp; Heating · St. George · Cedar City</text>
<text x="80" y="440" font-family="Arial, sans-serif" font-weight="700" font-size="40" fill="#ffffff">(801) 661-5412</text>
</svg>`);
const badge = await sharp(logo).resize(200, 200).toBuffer();
await sharp(bg).composite([{ input: overlay }, { input: badge, left: W - 290, top: 80 }]).jpeg({ quality: 82 }).toFile('public/og-default.jpg');
console.log('icons + og done');
