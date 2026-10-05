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
    <section id="services" className="bg-[#F9F6F0] py-12 px-4 lg:px-12 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#2C1B18] mb-2">
            Explore All Our Services
          </h2>
          <p className="text-xs sm:text-sm text-[#66534E]">
            Comprehensive aesthetic and wellness solutions for every stage of your journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
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
