// One-time: copy client photos from Downloads into src/assets and crop logo/mini-split shots.
import sharp from 'sharp';
const D = process.argv[2];
const out = 'src/assets';
// Logo badge cropped from a client photo (replace with original vector/PNG logo when available)
await sharp(`${D}/utah-heritage-hvac-01-ac-condenser-install.jpg`).extract({ left: 842, top: 38, width: 252, height: 252 }).webp({ quality: 92 }).toFile(`${out}/brand/logo.webp`);
await sharp(`${D}/Corbin 01.jpeg`).jpeg({ quality: 85 }).toFile(`${out}/photos/ac-condenser-install.jpg`);
await sharp(`${D}/Corbin 02.jpeg`).jpeg({ quality: 85 }).toFile(`${out}/photos/furnace-install-full.jpg`);
await sharp(`${D}/Corbin 03.jpeg`).jpeg({ quality: 85 }).toFile(`${out}/photos/furnace-gas-line.jpg`);
await sharp(`${D}/Corbin 04.jpeg`).jpeg({ quality: 85 }).toFile(`${out}/photos/furnace-coil-lineset.jpg`);
await sharp(`${D}/Corbin 05.jpeg`).jpeg({ quality: 85 }).toFile(`${out}/photos/furnace-venting.jpg`);
await sharp(`${D}/Corbin 06.jpeg`).jpeg({ quality: 85 }).toFile(`${out}/photos/furnace-plenum.jpg`);
const p = `${D}/utah_heritage_hvac_professional.jpg`;
await sharp(p).extract({ left: 58, top: 192, width: 996, height: 996 }).jpeg({ quality: 85 }).toFile(`${out}/photos/mini-split-outdoor.jpg`);
await sharp(p).extract({ left: 1080, top: 192, width: 996, height: 996 }).jpeg({ quality: 85 }).toFile(`${out}/photos/mini-split-indoor.jpg`);
console.log('done');
