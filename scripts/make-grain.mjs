// Tiny pre-rendered paper grain tile (replaces a live SVG turbulence filter, which is expensive to paint).
import sharp from 'sharp';
const S = 96, buf = Buffer.alloc(S * S * 4);
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
for (let i = 0; i < S * S; i++) { const v = rnd(); buf[i*4] = 90; buf[i*4+1] = 70; buf[i*4+2] = 40; buf[i*4+3] = Math.round(v * v * 26); }
await sharp(buf, { raw: { width: S, height: S, channels: 4 } }).png({ compressionLevel: 9, palette: true, colors: 16 }).toFile('src/assets/brand/grain.png');
console.log('grain ok');
