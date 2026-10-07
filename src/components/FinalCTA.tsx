import React from 'react';
import { ArrowRight, CheckCircle2, CreditCard } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-[#271446] shadow-xl border border-[#EAD7C5]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

            {/* Col 1 – Left: October AI Skin Analysis Offer Image */}
            <div className="bg-[#1a0b30] flex items-center justify-center p-3 sm:p-4">
              <img
                src="/images/october_ai_skin_offer.jpg"
                alt="October First-Visit Special – AI-Based Skin Analysis ₹299/-"
                className="w-full h-auto object-contain rounded-xl block"
              />
            </div>

            {/* Col 2 – Right: Text Content */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-5">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold text-[#F8DB66] tracking-wider uppercase">
                <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Skin</span>
                <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Hair</span>
                <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Body</span>
                <span className="bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">Wellness</span>
              </div>

              <h2
                className="font-serif text-[26px] sm:text-[30px] lg:text-[38px] font-bold leading-tight text-[#F8DB66]"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
              >
                Ready to Start With the Right Treatment?
              </h2>

              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-md">
                Tell us your concern and get guidance on suitable Skintonik treatment options.
              </p>

              {/* October Benefits Card */}
              <div className="bg-[#271446]/60 border border-[#F8DB66]/30 rounded-xl p-4 space-y-2.5 max-w-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F8DB66] block">
                  October Benefits
                </span>
                <div className="space-y-2 text-xs text-white">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F8DB66] shrink-0" />
                    <span>Save 10–15% on Selected Packages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#F8DB66] shrink-0" />
                    <span>No-Cost EMI Available on Eligible Treatments*</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center gap-2 bg-[#F8DB66] hover:bg-[#e0c453] text-[#271446] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#271446]" />
                </button>
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-[#F8DB66] border border-[#F8DB66]/40 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
                >
                  AI Skin Analysis – ₹299/-
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
