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

  const handleExploreOffers = () => {
    const el = document.getElementById('featured-packages') || document.getElementById('popular-treatments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919845263041?text=Hi%20Skintonik%2C%20I%20would%20like%20to%20know%20more%20about%20your%20treatments', '_blank');
  };

  return (
    <section id="festive-offer" className="bg-gradient-to-r from-[#140628] via-[#2A114D] to-[#170730] text-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-10 relative overflow-hidden shadow-2xl border-y-2 border-[#F8DB66]/60">

      {/* CSS Animations */}
      <style>{`
        @keyframes movingShimmerText {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulseGlowRing {
          0%, 100% { box-shadow: 0 0 15px rgba(248,219,102,0.4), 0 0 30px rgba(248,219,102,0.2); }
          50% { box-shadow: 0 0 25px rgba(248,219,102,0.8), 0 0 45px rgba(248,219,102,0.5); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-8px) rotate(12deg); opacity: 1; }
        }
        @keyframes sweepLight {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }

        .animate-moving-shimmer {
          background: linear-gradient(90deg, #F8DB66 0%, #FFFFFF 25%, #F8DB66 50%, #FFF5C0 75%, #F8DB66 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          animation: movingShimmerText 4s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlowRing 3s ease-in-out infinite;
        }

        .animate-float-sparkle-fast {
          animation: floatUpDown 3s ease-in-out infinite;
        }

        .animate-light-sweep {
          animation: sweepLight 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F8DB66_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -left-28 -top-28 w-96 h-96 bg-[#F8DB66]/25 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute right-1/3 -bottom-28 w-96 h-96 bg-[#F8DB66]/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Floating sparkles */}
      <div className="absolute top-4 left-12 text-[#F8DB66] pointer-events-none animate-float-sparkle-fast">
        <Sparkles className="w-5 h-5 drop-shadow-[0_0_8px_rgba(248,219,102,0.8)]" />
      </div>
      <div className="absolute bottom-4 right-20 text-[#F8DB66] pointer-events-none animate-float-sparkle-fast" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-6 h-6 drop-shadow-[0_0_10px_rgba(248,219,102,0.9)]" />
      </div>
      <div className="absolute top-1/2 left-1/4 text-[#F8DB66]/60 pointer-events-none animate-float-sparkle-fast" style={{ animationDelay: '0.8s' }}>
        <Gift className="w-4 h-4" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-8 relative z-10">

        {/* ── LEFT: CREATIVE BADGE & MOVING GLOW HEADING ── */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left max-w-xl shrink-0">

          {/* Animated Glowing Festive Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F8DB66]/20 via-[#F8DB66]/30 to-[#F8DB66]/20 border-2 border-[#F8DB66] text-[#F8DB66] text-xs font-black tracking-widest uppercase mb-2 animate-pulse-glow shadow-[0_0_15px_rgba(248,219,102,0.4)]">
            <Gift className="w-3.5 h-3.5 text-[#F8DB66] animate-bounce" />
            <span>OCTOBER FESTIVE EXCLUSIVE</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F8DB66]" />
          </div>

          {/* Moving Glow Heading */}
          <h2 className="font-serif leading-tight tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            <span className="animate-moving-shimmer block font-black text-2xl sm:text-3xl xl:text-[34px] whitespace-nowrap drop-shadow-[0_0_20px_rgba(248,219,102,0.6)]">
              October Treatment Offers
            </span>
            <span className="block text-white font-bold text-lg sm:text-xl xl:text-2xl mt-0.5 tracking-normal whitespace-nowrap">
              at Skintonik
            </span>
          </h2>
        </div>

        {/* ── CENTER: HIGH-IMPACT OFFER CARDS ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 xl:gap-5 xl:border-x-2 border-[#F8DB66]/30 xl:px-6 py-2 xl:py-0 w-full xl:w-auto">

          {/* Main 10-15% Discount Card */}
          <div className="flex items-center gap-3 bg-gradient-to-br from-white/15 via-white/10 to-white/5 border-2 border-[#F8DB66] hover:border-[#FFF3C0] px-4 sm:px-5 py-3 rounded-2xl backdrop-blur-md transition-all duration-300 animate-pulse-glow group relative overflow-hidden shrink-0">
            <div className="absolute inset-0 w-1/3 h-full bg-white/20 animate-light-sweep pointer-events-none" />

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F8DB66] via-[#FFE885] to-[#D4AF37] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(248,219,102,0.6)] group-hover:scale-110 transition-transform">
              <Percent className="w-5 h-5 text-[#271446] stroke-[3]" />
            </div>
            <div className="text-left whitespace-nowrap">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#F8DB66]">SAVE</span>
                <span className="text-2xl sm:text-3xl font-black text-[#F8DB66] tracking-tight leading-none drop-shadow-[0_0_12px_rgba(248,219,102,0.8)]">
                  10–15%
                </span>
              </div>
              <span className="text-[11px] text-white/95 font-semibold block mt-0.5">
                on Selected Packages
              </span>
            </div>
          </div>

          {/* Secondary No-Cost EMI Card */}
          <div className="flex items-center gap-3 bg-white/10 border border-[#F8DB66]/40 hover:border-[#F8DB66] px-4 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#F8DB66]/20 border border-[#F8DB66]/50 flex items-center justify-center shrink-0">
              <CreditCard className="w-4.5 h-4.5 text-[#F8DB66]" />
            </div>
            <div className="text-left whitespace-nowrap">
              <span className="text-xs sm:text-sm text-white font-bold block leading-tight">
                No-Cost EMI Available
              </span>
              <span className="text-[11px] text-[#F8DB66] font-semibold block mt-0.5">
                on Eligible Treatments*
              </span>
            </div>
          </div>

        </div>

        {/* ── RIGHT: CREATIVE ACTION BUTTONS ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          {/* Primary Glowing CTA */}
          <button
            onClick={handleExploreOffers}
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F8DB66] via-[#FFF3B0] to-[#F8DB66] hover:from-[#FFF3B0] hover:to-[#F8DB66] text-[#271446] font-black text-xs sm:text-sm px-7 py-4 rounded-full shadow-[0_0_25px_rgba(248,219,102,0.6)] hover:shadow-[0_0_35px_rgba(248,219,102,0.9)] hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-1/2 h-full bg-white/40 skew-x-12 animate-light-sweep pointer-events-none" />
            <span className="relative z-10 uppercase tracking-wide">Explore Offers</span>
            <ArrowRight className="w-4 h-4 text-[#271446] relative z-10 group-hover:translate-x-1.5 transition-transform duration-300 stroke-[3]" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 border-2 border-[#F8DB66]/60 bg-[#F8DB66]/10 hover:bg-[#F8DB66]/25 hover:border-[#F8DB66] text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all duration-200 cursor-pointer w-full sm:w-auto shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#F8DB66]" />
            <span>Talk to Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};


