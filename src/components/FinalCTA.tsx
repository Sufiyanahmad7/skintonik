import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import { IMAGES } from '../data/images';

export const FinalCTA: React.FC = () => {
  const handleScrollToForm = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#4A151B] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left Beauty Model Image */}
        <div className="lg:col-span-4 h-64 lg:h-96 w-full relative overflow-hidden">
          <img
            src={IMAGES.ctaModel}
            alt="Ready to Feel Your Best - Skintonik"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4A151B]/20 to-[#4A151B] lg:block hidden" />
        </div>

        {/* Right Content */}
        <div className="lg:col-span-8 p-8 lg:p-12 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
            Ready to Feel Your Best?
          </h2>

          <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
            Book your consultation at Skintonik, Bangalore and take the first step towards healthier skin, stronger hair and more confident you.
          </p>

          <div className="pt-2">
            <button
              onClick={handleScrollToForm}
              className="inline-flex items-center space-x-2 bg-[#FBF8F3] hover:bg-[#F3EDE2] text-[#4A151B] text-xs sm:text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#4A151B]" />
            </button>
          </div>

          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-white/80">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#EAD7C5]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#EAD7C5]" />
              <span>Personalised Plan</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CreditCard className="w-4 h-4 text-[#EAD7C5]" />
              <span>No-Cost EMI Available*</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
