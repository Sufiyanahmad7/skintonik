import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, CheckCircle2, Shield, Percent, CreditCard } from 'lucide-react';

export const PriceComparisonCTA: React.FC = () => {
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917387125717?text=Hi%20Skintonik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20treatments', '_blank');
  };

  return (
    <section id="treatment-plan-cta" className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#271446] to-[#1a0b30] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-[#EAD7C5]/20 text-white relative overflow-hidden">

          {/* Subtle background glow circle */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#F8DB66]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">

            {/* Main Title */}
            <h2
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-[#F8DB66]"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
            >
              Not Sure Which Treatment to Choose?
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-white/90 max-w-2xl mx-auto leading-relaxed">
              Start with consultation or analysis instead of selecting a treatment based only on price.
            </p>

            {/* 3 Column Showcase (Images + Attached Feature Cards underneath) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-2 items-start text-left">

              {/* Column 1: Packages Card + AI Skin Analysis Image */}
              <div className="flex flex-col gap-3.5">
                {/* Packages Card directly above left image */}
                <div className="bg-[#341B5C]/90 backdrop-blur-md border-2 border-[#F8DB66]/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:bg-[#3B1F69] hover:border-[#F8DB66] transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(248,219,102,0.25)] hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-2.5 pb-2 border-b border-[#F8DB66]/30">
                      <div className="p-1.5 rounded-lg bg-[#F8DB66]/20 border border-[#F8DB66]/40 text-[#F8DB66]">
                        <Percent className="w-4 h-4 text-[#F8DB66]" />
                      </div>
                      <h4 className="font-serif font-bold text-sm sm:text-base tracking-wider uppercase text-[#F8DB66]">
                        Packages
                      </h4>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/95 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#F8DB66] shrink-0 mt-0.5" />
                      <span className="font-semibold text-white/95">Save 10–15% on Selected Treatment Packages</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#F8DB66]/40 hover:border-[#F8DB66] shadow-lg hover:shadow-[0_0_25px_rgba(248,219,102,0.4)] transition-all duration-300 group bg-[#1a0b30]">
                  <img
                    src="/images/AI skin analysis.jpeg"
                    alt="AI Skin Analysis"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-xl block"
                  />
                </div>
              </div>

              {/* Column 2: Party Peel Image */}
              <div className="flex flex-col gap-3.5 justify-end">
                <div className="rounded-xl overflow-hidden border border-[#F8DB66]/40 hover:border-[#F8DB66] shadow-lg hover:shadow-[0_0_25px_rgba(248,219,102,0.4)] transition-all duration-300 group bg-[#1a0b30]">
                  <img
                    src="/images/party peel.jpeg"
                    alt="Party Peel"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-xl block"
                  />
                </div>
              </div>

              {/* Column 3: Premium Treatments Card + Hydra Facial Image */}
              <div className="flex flex-col gap-3.5">
                {/* Premium Treatments Card directly above right image */}
                <div className="bg-[#341B5C]/90 backdrop-blur-md border-2 border-[#F8DB66]/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:bg-[#3B1F69] hover:border-[#F8DB66] transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_30px_rgba(248,219,102,0.25)] hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-2.5 pb-2 border-b border-[#F8DB66]/30">
                      <div className="p-1.5 rounded-lg bg-[#F8DB66]/20 border border-[#F8DB66]/40 text-[#F8DB66]">
                        <CreditCard className="w-4 h-4 text-[#F8DB66]" />
                      </div>
                      <h4 className="font-serif font-bold text-sm sm:text-base tracking-wider uppercase text-[#F8DB66]">
                        Premium Treatments
                      </h4>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/95 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#F8DB66] shrink-0 mt-0.5" />
                      <span className="font-semibold text-white/95">No-Cost EMI Available on Eligible Treatments*</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#F8DB66]/40 hover:border-[#F8DB66] shadow-lg hover:shadow-[0_0_25px_rgba(248,219,102,0.4)] transition-all duration-300 group bg-[#1a0b30]">
                  <img
                    src="/images/Hydrafacial.jpeg"
                    alt="Hydra Facial"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-xl block"
                  />
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#F8DB66] hover:bg-[#e0c453] text-[#271446] font-semibold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Get My Treatment Plan</span>
                <ArrowRight className="w-4 h-4 text-[#271446]" />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs sm:text-sm py-3 px-6 rounded-full transition-all border border-emerald-500/30 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Skintonik</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
