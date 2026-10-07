import React from 'react';
import { Sparkles, Scan, Cpu, Layers, Tag, CreditCard, MapPin } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';
import { IMAGES } from '../data/images';

export const Hero: React.FC = () => {
  const heroFeatures = [
    { icon: Sparkles, label: 'Personalised\nTreatment Plans' },
    { icon: Scan, label: 'Skin & Hair\nAnalysis' },
    { icon: Cpu, label: 'Advanced\nAesthetic Care' },
    { icon: Layers, label: 'Multiple\nCategories' },
    { icon: Tag, label: 'Package\nOptions' },
    { icon: CreditCard, label: 'No-Cost EMI\nAvailable*' },
  ];

  return (
    <section className="bg-[#FAF7F2] pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 px-3 sm:px-6 lg:px-12 border-b border-[#EAD7C5]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-3.5 lg:gap-6 xl:gap-8 items-stretch py-2 lg:py-4">

        {/* ── LEFT COLUMN ── */}
        <div className="md:col-span-4 flex flex-col justify-between items-center md:items-start text-center md:text-left space-y-3 lg:space-y-4 h-full pr-0 md:pr-1">

          {/* Location Badge */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="inline-flex items-center gap-1 border border-[#271446]/30 bg-[#271446] text-white px-2.5 sm:px-3.5 py-1 rounded-full text-[9.5px] md:text-[9px] lg:text-[10.5px] tracking-wider font-bold uppercase shadow-xs">
              <span className="text-[#F8DB66] font-extrabold">bengaluru</span>
              <span className="text-white/60">•</span>
              <span className="text-white/90 font-medium">THE FESTIVE GLOW EDIT</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-[26px] sm:text-[32px] md:text-[25px] lg:text-[34px] xl:text-[46px] leading-[1.15] font-bold text-[#271446]"
          >
            Expert Aesthetic Care<br className="hidden sm:inline" />
            {' '}for a More Confident You
          </h1>

          {/* Supporting Text */}
          <div className="space-y-2 lg:space-y-2.5 flex flex-col items-center md:items-start w-full">
            <p className="text-[12.5px] sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[15.5px] font-bold text-[#C59B27] leading-snug">
              Skin. Hair. Body. Wellness. All Under One Roof at Skintonik, Bengaluru.
            </p>
            <p className="text-[11px] sm:text-xs md:text-[11px] lg:text-[12px] xl:text-sm text-[#271446]/90 leading-relaxed font-normal">
              Laser hair removal, HydraFacial, pigmentation, acne and hair fall treatment on Sarjapur Road. Every price shown in full:
            </p>

            {/* Main Visual Offer Card */}
            <div className="w-full flex justify-center md:justify-start pt-1">
              <div className="w-full bg-gradient-to-r from-[#140628] via-[#2A114D] to-[#170730] border-2 border-[#F8DB66]/80 rounded-xl p-3 sm:p-4 shadow-[0_0_20px_rgba(248,219,102,0.4)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(248,219,102,0.6)] relative overflow-hidden flex items-stretch justify-between gap-3">
                <div className="flex items-start gap-2.5 relative z-10 flex-1">
                  <span className="text-lg sm:text-xl shrink-0 select-none animate-pulse text-[#F8DB66] mt-0.5">✨</span>
                  <div className="text-left space-y-1 w-full">
                    <div className="font-black text-white text-sm sm:text-lg md:text-sm lg:text-base xl:text-lg tracking-wide leading-tight uppercase">
                      UP TO <span className="text-[#F8DB66] text-base sm:text-xl md:text-base lg:text-lg xl:text-xl font-black drop-shadow-[0_0_10px_rgba(248,219,102,0.7)]">15% OFF</span>
                    </div>
                    <div className="font-extrabold text-[#F8DB66] text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base leading-tight">
                      + FREE AI SKIN ANALYSIS
                    </div>
                    {/* Location at bottom of card */}
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] md:text-[10px] lg:text-[11px] text-white font-medium opacity-90 leading-tight pt-1">
                      <MapPin className="w-3 h-3 text-[#ffff] shrink-0" />
                      <span>Kasavanahalli, Rajiv Nagar, Carmelaram, Bengaluru – 560035</span>
                    </div>
                  </div>
                </div>
                {/* Full-Height Glowing Worth Badge */}
                <div className="relative z-10 flex flex-col justify-center items-center bg-[#F8DB66] text-[#271446] px-3.5 py-2 rounded-lg font-black text-xs sm:text-sm shadow-[0_0_16px_rgba(248,219,102,0.95)] border border-white/70 tracking-tight shrink-0 self-stretch text-center leading-tight">
                  <span className="text-[10px] uppercase tracking-wider font-bold opacity-90 block">WORTH</span>
                  <span className="text-base sm:text-lg font-black tracking-tighter">₹299/-</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Badges – pushed to bottom */}
          <div className="mt-auto pt-2.5 border-t border-[#EAD7C5]/70 w-full">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-1.5 justify-items-center">
              {heroFeatures.slice(0, 5).map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 md:w-7 md:h-7 lg:w-8.5 lg:h-8.5 xl:w-9.5 xl:h-9.5 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#271446] mb-1 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#271446] group-hover:text-[#F8DB66] shadow-xs">
                    <feat.icon className="w-3.5 h-3.5 md:w-3 md:h-3 lg:w-4 lg:h-4" />
                  </div>
                  <span className="text-[8px] md:text-[7.5px] lg:text-[8.5px] xl:text-[9px] leading-tight text-[#271446] font-semibold whitespace-pre-line text-center">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CENTER IMAGE ── */}
        <div className="md:col-span-4 relative flex justify-center items-stretch h-full mx-auto w-full max-w-[360px] sm:max-w-[400px] md:max-w-none">
          <div className="relative w-full h-full flex flex-col justify-stretch">
            <div className="relative w-full h-full min-h-[350px] sm:min-h-[380px] md:min-h-0 aspect-[4/5] md:aspect-auto overflow-hidden rounded-2xl flex-1 bg-[#FAF7F2] border border-[#EAD7C5]/40 shadow-xs">
              <img
                src={IMAGES.heroModel}
                alt="Skintonik Aesthetic Beauty Model"
                className="w-full h-full object-cover object-[center_15%] absolute inset-0 transition-transform duration-700 hover:scale-105"
              />
              {/* Seamless gradient edge blending overlays matching background */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 md:h-16 lg:h-24 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/75 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-6 sm:w-8 md:w-5 lg:w-8 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-6 sm:w-8 md:w-5 lg:w-8 bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none z-10" />

              {/* Script Text – LEFT side of image */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-3 md:left-3 lg:bottom-4 lg:left-4 text-left select-none pointer-events-none z-20">
                <span
                  className="font-script text-[22px] sm:text-[28px] md:text-[20px] lg:text-[28px] xl:text-[36px] text-[#271446] leading-tight block font-bold"
                  style={{
                    transform: 'rotate(-5deg)',
                    display: 'inline-block',
                    textShadow: '0 1px 3px rgba(250,247,242,0.95), 0 0 10px rgba(250,247,242,0.85)'
                  }}
                >
                  More<br />Than<br />Skin Deep
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT CONSULTATION FORM ── */}
        <div id="consultation-form" className="md:col-span-4 flex justify-center md:justify-end items-stretch h-full pt-2 md:pt-0">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
};

