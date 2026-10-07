import React from 'react';
import { ArrowRight, MessageCircle, Percent, CreditCard, Sparkles, Gift } from 'lucide-react';

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
    <section id="festive-offer" className="bg-gradient-to-r from-[#16072b] via-[#271446] to-[#1e0a38] text-white py-7 sm:py-8 lg:py-9 px-4 sm:px-6 lg:px-10 relative overflow-hidden shadow-2xl border-y border-[#F8DB66]/40">
      
      {/* Inline animations style */}
      <style>{`
        @keyframes subtleGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes floatSparkle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-6px) rotate(15deg); opacity: 1; }
        }
        .animate-subtle-glow {
          animation: subtleGlow 6s ease-in-out infinite;
        }
        .animate-shimmer-sweep {
          animation: shimmerSweep 4s ease-in-out infinite;
        }
        .animate-float-sparkle {
          animation: floatSparkle 4s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative festive background effects */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F8DB66_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-72 h-72 bg-[#F8DB66]/20 rounded-full blur-3xl pointer-events-none animate-subtle-glow" />
      <div className="absolute right-1/4 -bottom-20 w-80 h-80 bg-[#F8DB66]/15 rounded-full blur-3xl pointer-events-none animate-subtle-glow" style={{ animationDelay: '3s' }} />
      
      {/* Gold decorative sparkles */}
      <div className="absolute top-3 left-10 text-[#F8DB66]/60 pointer-events-none animate-float-sparkle">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="absolute bottom-3 right-16 text-[#F8DB66]/60 pointer-events-none animate-float-sparkle" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">

        {/* ── LEFT: BADGE & MAIN HEADING ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
          
          {/* Festive Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8DB66]/15 border border-[#F8DB66]/60 text-[#F8DB66] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(248,219,102,0.3)]">
            <Gift className="w-3 h-3 text-[#F8DB66]" />
            <span>OCTOBER SPECIAL</span>
            <Sparkles className="w-3 h-3 text-[#F8DB66]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold leading-tight text-white tracking-tight">
            <span className="bg-gradient-to-r from-[#F8DB66] via-[#FFF5C0] to-[#F8DB66] bg-clip-text text-transparent font-extrabold drop-shadow-[0_2px_10px_rgba(248,219,102,0.3)]">
              October Treatment Offers
            </span>
            <span className="block text-white/95 text-xl sm:text-2xl font-semibold mt-0.5">
              at Skintonik
            </span>
          </h2>
        </div>

        {/* ── CENTER: OFFERS HIGHLIGHT CARDS ── */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 lg:gap-6 lg:border-x border-[#F8DB66]/20 lg:px-6 py-1 lg:py-0 w-full lg:w-auto">

          {/* Main 10-15% Discount Card */}
          <div className="flex items-center gap-3.5 bg-gradient-to-br from-white/10 to-white/5 border border-[#F8DB66]/40 hover:border-[#F8DB66]/70 px-4 sm:px-5 py-3 rounded-2xl backdrop-blur-md transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] group relative overflow-hidden">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F8DB66] to-[#D4AF37] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(248,219,102,0.4)]">
              <Percent className="w-5 h-5 text-[#271446] stroke-[2.5]" />
            </div>
            <div className="text-left">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F8DB66]">SAVE</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#F8DB66] tracking-tight leading-none drop-shadow-[0_0_10px_rgba(248,219,102,0.5)]">
                  10–15%
                </span>
              </div>
              <span className="text-xs text-white/90 font-medium block mt-0.5">
                on Selected Treatment Packages
              </span>
            </div>
          </div>

          {/* Secondary No-Cost EMI Card */}
          <div className="flex items-center gap-3 bg-white/5 border border-[#F8DB66]/25 hover:border-[#F8DB66]/45 px-4 py-3 rounded-2xl backdrop-blur-sm transition-all shadow-md">
            <div className="w-9 h-9 rounded-lg bg-[#F8DB66]/15 border border-[#F8DB66]/40 flex items-center justify-center shrink-0">
              <CreditCard className="w-4 h-4 text-[#F8DB66]" />
            </div>
            <div className="text-left">
              <span className="text-xs sm:text-sm text-white font-semibold block leading-snug">
                No-Cost EMI Available
              </span>
              <span className="text-[11px] text-[#F8DB66]/80 font-normal block">
                on Eligible Treatments*
              </span>
            </div>
          </div>

        </div>

        {/* ── RIGHT: DUAL CTAS ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            onClick={handleScrollToForm}
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F8DB66] via-[#FFE885] to-[#F8DB66] hover:from-[#FFE885] hover:to-[#F8DB66] text-[#271446] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-[0_0_20px_rgba(248,219,102,0.4)] hover:shadow-[0_0_30px_rgba(248,219,102,0.7)] hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden w-full sm:w-auto"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 animate-shimmer-sweep pointer-events-none" />
            <span className="relative z-10">Explore Festive Offers</span>
            <ArrowRight className="w-4 h-4 text-[#271446] relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 border border-[#F8DB66]/50 hover:bg-[#F8DB66]/15 hover:border-[#F8DB66] text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all duration-200 cursor-pointer w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-[#F8DB66]" />
            <span>Talk to Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};


