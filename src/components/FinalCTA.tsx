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
    <section className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40 overflow-hidden relative">
      {/* Background warm overlay */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-[#4A151B] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

            {/* Left Model Image */}
            <div className="lg:col-span-4 h-56 lg:h-80 w-full relative overflow-hidden">
              <img
                src={IMAGES.ctaModel}
                alt="Ready to Feel Your Best - Skintonik"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4A151B]/10 to-[#4A151B] lg:block hidden" />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 p-7 lg:p-10 space-y-5">
              <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[40px] font-normal leading-tight text-white">
                Ready to Feel Your Best?
              </h2>

              <p className="text-[11px] sm:text-xs text-white/80 max-w-md leading-relaxed">
                Book your consultation at Skintonik, Bangalore and take the first step towards healthier skin, stronger hair and a more confident you.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center gap-2 bg-[#FBF8F3] hover:bg-[#F3EDE2] text-[#4A151B] text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 text-[11px] text-white/75">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAD7C5]" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EAD7C5]" />
                  <span>Personalised Plan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#EAD7C5]" />
                  <span>No-Cost EMI Available*</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
