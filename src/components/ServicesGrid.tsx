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
    <section id="services" className="bg-[#FBF8F3] py-16 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow */}
          <span className="block font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-[#271446] uppercase mb-2">
            EXPLORE OUR SERVICES
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#271446] leading-tight mb-3 tracking-tight">
            Explore All Our Services
          </h2>

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm lg:text-base text-[#271446]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Comprehensive aesthetic and wellness solutions for every stage of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch">
          {SERVICES.map((service, index) => {
            const isLastSingle = index === SERVICES.length - 1 && SERVICES.length % 3 === 1;
            return (
              <div 
                key={service.id}
                className={isLastSingle ? "md:col-span-2 lg:col-span-3 flex justify-center" : "flex"}
              >
                <div className={isLastSingle ? "w-full md:max-w-md lg:max-w-sm" : "w-full"}>
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
