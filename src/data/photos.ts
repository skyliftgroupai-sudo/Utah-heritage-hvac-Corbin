import type { ImageMetadata } from 'astro';
import acCondenser from '../assets/photos/ac-condenser-install.jpg';
import furnaceFull from '../assets/photos/furnace-install-full.jpg';
import furnaceGas from '../assets/photos/furnace-gas-line.jpg';
import furnaceCoil from '../assets/photos/furnace-coil-lineset.jpg';
import furnaceVent from '../assets/photos/furnace-venting.jpg';
import furnacePlenum from '../assets/photos/furnace-plenum.jpg';
import miniOutdoor from '../assets/photos/mini-split-outdoor.jpg';
import miniIndoor from '../assets/photos/mini-split-indoor.jpg';
import corbinPortrait from '../assets/photos/corbin-allen-portrait.webp';

export interface Photo { src: ImageMetadata; alt: string; /** CSS object-position for cropped frames */ pos?: string }

/** Real job photos supplied by the client. */
export const photos = {
  acCondenser: { src: acCondenser, alt: 'New AC condenser installed on a concrete pad beside a stucco home in Southern Utah' },
  furnaceFull: { src: furnaceFull, alt: 'Gas furnace, evaporator coil and new metal flue installed in a hallway utility closet' },
  furnaceGas: { src: furnaceGas, alt: 'Gas shutoff valve, flex connector and condensate line on a newly installed furnace' },
  furnaceCoil: { src: furnaceCoil, alt: 'Insulated refrigerant line set connected to the evaporator coil above a new furnace' },
  furnaceVent: { src: furnaceVent, alt: 'Furnace flue venting and condensate drain routed on a new heating installation' },
  furnacePlenum: { src: furnacePlenum, alt: 'Sheet metal supply plenum and line set on a furnace and AC coil replacement' },
  miniOutdoor: { src: miniOutdoor, alt: 'Ductless mini split outdoor unit mounted beside a home with a covered line set' },
  miniIndoor: { src: miniIndoor, alt: 'Ductless mini split wall unit installed above a kitchen window' },
  corbinPortrait: { src: corbinPortrait, alt: 'Corbin Allen, owner of Utah Heritage HVAC, smiling outdoors in Southern Utah', pos: 'center 18%' },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Shots we still need from the client. Rendered as labeled gray boxes until supplied. */
export const photoNeeds = {
  corbinWorking: '[PHOTO: Corbin explaining a repair to a homeowner]',
  rooftopUnit: '[PHOTO: commercial rooftop unit service in St. George]',
  thermostat: '[PHOTO: thermostat or zoning control panel]',
  filter: '[PHOTO: dirty vs. clean air filter]',
  van: '[PHOTO: Utah Heritage HVAC truck or van]',
} as const;
export type PhotoNeed = keyof typeof photoNeeds;
