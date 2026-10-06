import React from 'react';
import { POPULAR_TREATMENTS, Treatment } from '../data/treatments';
import { TreatmentCard } from './TreatmentCard';

export const PopularTreatments: React.FC = () => {
  const handleSelectTreatment = (_treatment: Treatment) => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="popular-treatments" className="bg-[#FBF8F3] py-10 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h2 className="font-serif text-[26px] lg:text-[32px] font-normal text-[#2C1B18] mb-1.5">
            Our Most Popular Treatments in Bangalore
          </h2>
          <p className="text-[11px] sm:text-xs text-[#66534E]">
            A selection of our most loved treatments, thoughtfully designed for your skin, hair, body and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {POPULAR_TREATMENTS.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onSelect={handleSelectTreatment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
