import React from 'react';
import { SERVICES, Service } from '../data/services';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid: React.FC = () => {
  const handleServiceClick = (_service: Service) => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-[#FBF8F3] py-10 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 
            className="font-serif text-[26px] lg:text-[32px] font-bold text-[#271446] mb-1.5"
          >
            Explore All Our Services
          </h2>
          <p className="text-[11px] sm:text-xs text-[#271446] font-medium">
            Comprehensive aesthetic and wellness solutions for every stage of your journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={handleServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
