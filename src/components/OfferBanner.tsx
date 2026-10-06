import React from 'react';
import { ArrowRight, MessageCircle, Percent, CreditCard } from 'lucide-react';

export const OfferBanner: React.FC = () => {
  const handleScrollToForm = () => {
    const inputEl = document.getElementById('hero-full-name-input');
    const formContainer = document.getElementById('consultation-form');
    
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      if (inputEl) {
        inputEl.focus();
      }
    }, 400);
  };

  const handleWhatsApp = () => {
    handleScrollToForm();
  };

  return (
    <section id="festive-offer" className="bg-gradient-to-r from-[#1e0c38] via-[#271446] to-[#341b5c] text-white py-8 px-4 lg:px-10 relative overflow-hidden shadow-xl border-y border-[#F8DB66]/30">
      {/* Decorative background glow & pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F8DB66_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-60 h-60 bg-[#F8DB66]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[#F8DB66]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">

        {/* Left: Section Subtitle & Heading */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">

          <h3 
            className="font-serif text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-[#F8DB66]"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
          >
            October Treatment Offers at Skintonik
          </h3>

        </div>

        {/* Center: Offers Breakdown */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8 lg:border-x border-white/20 lg:px-8 py-2 lg:py-0">

          {/* Main Discount */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F8DB66]/15 border border-[#F8DB66]/30 flex items-center justify-center shrink-0">
              <Percent className="w-5 h-5 text-[#F8DB66]" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-sm sm:text-base font-semibold text-white block leading-snug">
                Save <span className="text-[#F8DB66] font-bold">10–15%</span> on Selected Treatment Packages
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/20" />

          {/* Plus No-Cost EMI */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F8DB66]/15 border border-[#F8DB66]/30 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-[#F8DB66]" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xs sm:text-sm text-white font-semibold block leading-tight">
                No-Cost EMI Available on Eligible Treatments*
              </span>
            </div>
          </div>

        </div>

        {/* Right: Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center gap-2 bg-[#F8DB66] hover:bg-[#e0c453] text-[#271446] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Festive Offers</span>
            <ArrowRight className="w-4 h-4 text-[#271446]" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 border border-[#F8DB66]/60 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#F8DB66]" />
            <span>Talk to Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};

