import React from 'react';
import { ArrowRight, Tag, CreditCard, Percent } from 'lucide-react';

export const OfferBanner: React.FC = () => {
  const handleScrollToForm = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="festive-offer" className="bg-gradient-to-r from-[#3A0D12] via-[#4A151B] to-[#5C1A22] text-white py-7 px-4 lg:px-10 relative overflow-hidden shadow-xl border-y border-[#D5C4A1]/30">
      {/* Decorative background glow & pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D5C4A1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-60 h-60 bg-[#D5C4A1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[#D5C4A1]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        {/* Left: Title Badge */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#D5C4A1]/20 border border-[#D5C4A1]/40 flex items-center justify-center shrink-0 shadow-inner">
            <Tag className="w-6 h-6 text-[#EAD7C5]" />
          </div>
          <div>
            <span className="text-[11px] tracking-[0.3em] text-[#EAD7C5] font-bold uppercase block">
              OCTOBER SPECIAL
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold leading-tight text-white tracking-wide">
              FESTIVE OFFERS
            </h3>
          </div>
        </div>

        {/* Middle: Highlighted Offers with Icons & Uniform Bigger Text */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10 md:border-x border-white/20 md:px-10 py-3 md:py-0">
          
          {/* Offer 1: Save 10-15% */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAD7C5]/15 border border-[#EAD7C5]/30 flex items-center justify-center shrink-0">
              <Percent className="w-5 h-5 text-[#EAD7C5]" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-base sm:text-lg font-bold text-white block leading-snug">
                Save <span className="text-[#EAD7C5] text-xl sm:text-2xl font-extrabold">10–15%</span> on Selected Packages
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/20" />

          {/* Offer 2: No-Cost EMI */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAD7C5]/15 border border-[#EAD7C5]/30 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-[#EAD7C5]" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-base sm:text-lg font-bold text-white block leading-snug">
                No-Cost EMI Available* <span className="text-xs text-[#EAD7C5] font-normal block sm:inline">on eligible treatments</span>
              </span>
            </div>
          </div>

        </div>

        {/* Right: CTA Button */}
        <button
          onClick={handleScrollToForm}
          className="inline-flex items-center gap-2.5 bg-[#EAD7C5] hover:bg-[#F3EDE2] text-[#4A151B] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 shrink-0"
        >
          <span>Claim Offer Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
};

