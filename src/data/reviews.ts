// Real Google reviews, copied verbatim from the reviews shown on the current utahheritagehvac.com homepage.
// [CLIENT TO PROVIDE: confirm these match the Google Business Profile word for word, and add new ones here]
export interface Review {
  author: string;
  text: string;
  topic: 'ac' | 'heating' | 'install' | 'mini-split' | 'general';
  source: 'Google';
}

export const reviews: Review[] = [
  {
    author: 'Tyger Ukena',
    topic: 'general',
    source: 'Google',
    text: "These guys came out to my house and absolutely took care of me. Honest, respectful, professional, and straight-up solid people. They didn't just rush through the job — they actually took the time to explain everything and make sure my HVAC system was running right. It's hard to find companies nowadays that genuinely care about their customers, but these guys do.",
  },
  {
    author: 'Rachel Collins',
    topic: 'install',
    source: 'Google',
    text: 'Corbin Allen provided outstanding HVAC installation service. He was professional, punctual, and explained everything clearly throughout the process. The system is working perfectly, and the overall experience was smooth and stress-free. Definitely someone you can trust for quality HVAC work. Highly recommended!',
  },
  {
    author: 'Christifer Zollinger',
    topic: 'mini-split',
    source: 'Google',
    text: 'Corbin was excellent to work with! He serviced my AC unit and installed a mini split for me. His prices were reasonable and his customer service was top notch. I would highly recommend Utah Heritage HVAC for all your HVAC needs.',
  },
];
