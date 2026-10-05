import { IMAGES } from './images';

export interface Treatment {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

export const POPULAR_TREATMENTS: Treatment[] = [
  {
    id: 'hydra-facial',
    title: 'Hydra Facial',
    price: '₹3,000',
    description: 'Deep cleansing, hydration & instant glow',
    image: IMAGES.treatments.hydra,
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels',
    price: 'From ₹2,000',
    description: 'Dullness, pigmentation, acne & more',
    image: IMAGES.treatments.peels,
  },
  {
    id: 'skin-tightening',
    title: 'Skin Tightening & Anti-Ageing',
    price: 'From ₹30,000',
    description: 'Fillers, Botox, Threads and more',
    image: IMAGES.treatments.tightening,
  },
  {
    id: 'hair-fall',
    title: 'Hair Fall & Scalp Care',
    price: 'From ₹2,000',
    description: 'Scalp therapy, PRP, GFC, Exosomes & more',
    image: IMAGES.treatments.hair,
  },
  {
    id: 'laser-hair',
    title: 'Laser Hair Reduction',
    price: 'From ₹17,999',
    description: 'Smooth, long-lasting results',
    image: IMAGES.treatments.laser,
  },
];
