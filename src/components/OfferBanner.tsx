import React from 'react';
import { ArrowRight, Tag, CreditCard } from 'lucide-react';

export const OfferBanner: React.FC = () => {
  const handleScrollToForm = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="festive-offer" className="bg-[#4A151B] text-white py-6 px-4 lg:px-12 relative overflow-hidden">
      {/* Background subtle festive shimmer texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D5C4A1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Headline */}
        <div className="flex items-center space-x-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <Tag className="w-5 h-5 text-[#EAD7C5]" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.25em] text-[#EAD7C5] font-semibold uppercase block">
              OCTOBER
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold leading-tight text-white">
              FESTIVE OFFER
            </h3>
          </div>
        </div>

        {/* Middle Offer Highlights */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 lg:gap-10 border-y md:border-y-0 md:border-x border-white/15 py-3 md:py-0 md:px-8 text-center md:text-left">
          <div className="flex items-center space-x-3">
            <div className="text-left">
              <span className="text-xs text-[#EAD7C5] block">Save</span>
              <span className="font-serif text-2xl lg:text-3xl font-bold text-white leading-none">10–15%</span>
              <span className="text-[11px] text-white/80 block">on selected packages</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/20" />

          <div className="flex items-center space-x-3">
            <CreditCard className="w-6 h-6 text-[#EAD7C5] flex-shrink-0" />
            <div className="text-left">
              <span className="text-xs font-semibold text-white block">No-Cost EMI Available*</span>
              <span className="text-[11px] text-white/80 block">on eligible treatments</span>
            </div>
          </div>
        </div>

        {/* Right CTA Button */}
        <div>
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center space-x-2 bg-[#FBF8F3] hover:bg-[#F3EDE2] text-[#4A151B] font-medium text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Explore Offers</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#4A151B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
