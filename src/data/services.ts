import { IMAGES } from './images';

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'facials',
    name: 'Facials',
    description: 'Hydration, cleansing and glow-focused facial options.',
    image: IMAGES.services.facials
  },
  {
    id: 'peels',
    name: 'Chemical Peels',
    description: 'Peel options for concerns such as dullness, tanning, acne-prone skin and uneven-looking tone.',
    image: IMAGES.services.peels
  },
  {
    id: 'advanced-skin',
    name: 'Advanced Skin Treatments',
    description: 'Technology-led and injectable-supported skin rejuvenation options.',
    image: IMAGES.services.advanced
  },
  {
    id: 'tightening-antiageing',
    name: 'Skin Tightening & Anti-Ageing',
    description: 'Explore treatment options including Botox, fillers, threads and RF based on suitability.',
    image: IMAGES.services.tightening
  },
  {
    id: 'hair-scalp',
    name: 'Hair & Scalp Treatments',
    description: 'Scalp therapy, anti-dandruff treatment and advanced hair-support options.',
    image: IMAGES.services.hair
  },
  {
    id: 'laser-hair',
    name: 'Laser Hair Reduction',
    description: 'Packages for selected small areas or full-body treatment.',
    image: IMAGES.services.laser
  },
  {
    id: 'body-treatments',
    name: 'Body Treatments',
    description: 'Options for pigmentation, tanning and body skin concerns.',
    image: IMAGES.services.body
  },
  {
    id: 'iv-drips',
    name: 'IV Drips & Weight Management',
    description: 'Selected wellness and weight-management options.',
    image: IMAGES.services.iv
  },
  // { 
  //   id: 'wellness', 
  //   name: 'Mental & Emotional Wellness', 
  //   description: 'Private sessions for emotional and mental wellness support.',
  //   image: IMAGES.services.wellness 
  // },
  {
    id: 'analysis',
    name: 'Skin & Hair Analysis',
    description: 'Start with analysis before choosing your treatment.',
    image: IMAGES.services.analysis
  },
];
