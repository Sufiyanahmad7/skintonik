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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 justify-center">
          {SERVICES.map((service, index) => {
            const isLastSingle = index === SERVICES.length - 1 && SERVICES.length % 3 === 1;
            return (
              <div 
                key={service.id}
                className={isLastSingle ? "sm:col-span-2 lg:col-span-3 flex justify-center" : ""}
              >
                <div className={isLastSingle ? "w-full sm:max-w-md lg:max-w-sm" : "w-full h-full"}>
                  <ServiceCard
                    service={service}
                    onClick={handleServiceClick}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
