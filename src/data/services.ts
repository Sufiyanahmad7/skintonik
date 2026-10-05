import { IMAGES } from './images';

export interface Service {
  id: string;
  name: string;
  image: string;
}

export const SERVICES: Service[] = [
  { id: 'facials', name: 'Facials', image: IMAGES.services.facials },
  { id: 'peels', name: 'Peels', image: IMAGES.services.peels },
  { id: 'advanced-skin', name: 'Advanced Skin Treatments', image: IMAGES.services.advanced },
  { id: 'tightening-antiageing', name: 'Skin Tightening & Anti-Ageing', image: IMAGES.services.tightening },
  { id: 'laser-hair', name: 'Laser Hair Reduction', image: IMAGES.services.laser },
  { id: 'hair-scalp', name: 'Hair & Scalp Care', image: IMAGES.services.hair },
  { id: 'body-treatments', name: 'Body Treatments', image: IMAGES.services.body },
  { id: 'iv-drips', name: 'IV Drips & Weight Management', image: IMAGES.services.iv },
  { id: 'wellness', name: 'Mental & Emotional Wellness', image: IMAGES.services.wellness },
  { id: 'analysis', name: 'Skin & Hair Analysis', image: IMAGES.services.analysis },
];
