import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import { IMAGES } from '../data/images';

export const FinalCTA: React.FC = () => {
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

  return (
    <section className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40 overflow-hidden relative">
      {/* Background warm overlay */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-[#4A151B] shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">

              {/* Left Model Image */}
              <div className="md:col-span-4 h-56 md:h-full min-h-[260px] md:min-h-[320px] w-full relative overflow-hidden">
                <img
                  src={IMAGES.ctaModel}
                  alt="Ready to Feel Your Best - Skintonik"
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4A151B]/10 to-[#4A151B] md:block hidden" />
              </div>

              {/* Right Content */}
              <div className="md:col-span-8 p-6 sm:p-8 md:p-8 lg:p-10 space-y-4">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold text-[#EAD7C5] tracking-wider uppercase">
                  <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Skin</span>
                  <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Hair</span>
                  <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Body</span>
                  <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Wellness</span>
                </div>

                <h2 className="font-serif text-[24px] sm:text-[30px] md:text-[32px] lg:text-[38px] font-normal leading-tight text-white">
                  Ready to Start With the Right Treatment?
                </h2>

                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  Tell us your concern and get guidance on suitable Skintonik treatment options.
                </p>

                {/* October Benefits Card */}
                <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 sm:p-4 max-w-lg space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#EAD7C5] block">
                    October Benefits
                  </span>
                  <div className="space-y-1.5 text-xs text-white">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#EAD7C5] shrink-0" />
                      <span>Save 10–15% on Selected Packages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#EAD7C5] shrink-0" />
                      <span>No-Cost EMI Available on Eligible Treatments*</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-center md:justify-start">
                  <button
                    onClick={handleScrollToForm}
                    className="inline-flex items-center gap-2 bg-[#FBF8F3] hover:bg-[#F3EDE2] text-[#4A151B] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
        </div>
      </div>
    </section>
  );
};
