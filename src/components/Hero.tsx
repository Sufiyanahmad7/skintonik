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
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-stretch py-2 lg:py-4">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-4 flex flex-col justify-between items-center lg:items-start text-center lg:text-left h-full pr-0 lg:pr-1 py-0.5 space-y-4 lg:space-y-0">

          {/* Location Badge */}
          <div className="flex flex-col items-center lg:items-start gap-1">
            <span className="inline-flex items-center gap-1 border border-[#271446]/30 bg-[#271446] text-white px-3 py-1 rounded-full text-[10px] xl:text-[10.5px] tracking-wider font-bold uppercase shadow-xs">
              <span className="text-[#F8DB66] font-extrabold">BANGALORE</span>
              <span className="text-white/60">•</span>
              <span className="text-white/90 font-medium">THE FESTIVE GLOW EDIT</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-[28px] sm:text-[34px] lg:text-[28px] xl:text-[40px] leading-[1.15] font-bold text-[#271446]"
          >
            Expert Aesthetic Care<br className="hidden sm:inline" />
            {' '}for a More Confident You
          </h1>

          {/* Supporting Text */}
          <div className="space-y-2 lg:space-y-2.5 flex flex-col items-center lg:items-start w-full">
            <p className="text-[13px] sm:text-[14px] lg:text-[12.5px] xl:text-[14.5px] font-bold text-[#C59B27] leading-snug">
              Skin. Hair. Body. Wellness. All Under One Roof at Skintonik, Bengaluru-560035
            </p>
            <p className="text-[11.5px] sm:text-xs lg:text-[11.5px] xl:text-sm text-[#271446]/90 leading-relaxed font-normal">
              Laser hair removal, HydraFacial, pigmentation, acne and hair fall treatment on Sarjapur Road. Every price shown in full:
            </p>

            {/* Main Visual Offer Card */}
            <div className="w-full flex justify-center lg:justify-start pt-1">
              <div className="w-full bg-gradient-to-r from-[#140628] via-[#2A114D] to-[#170730] border-2 border-[#F8DB66]/80 rounded-xl p-3 lg:p-3 shadow-[0_0_20px_rgba(248,219,102,0.4)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(248,219,102,0.6)] relative overflow-hidden flex items-stretch justify-between gap-2 lg:gap-2.5">
                <div className="flex items-start gap-2 relative z-10 flex-1 min-w-0">
                  <span className="text-base sm:text-xl lg:text-base shrink-0 select-none animate-pulse text-[#F8DB66] mt-0.5">✨</span>
                  <div className="text-left space-y-0.5 w-full min-w-0">
                    <div className="font-black text-white text-xs sm:text-lg lg:text-xs xl:text-base tracking-wide leading-tight uppercase truncate">
                      UP TO <span className="text-[#F8DB66] text-xs sm:text-xl lg:text-sm xl:text-lg font-black drop-shadow-[0_0_10px_rgba(248,219,102,0.7)]">15% OFF</span>
                    </div>
                    <div className="font-extrabold text-[#F8DB66] text-[10.5px] sm:text-sm lg:text-[11px] xl:text-sm leading-tight truncate">
                      + FREE AI SKIN ANALYSIS
                    </div>
                    {/* Location at bottom of card */}
                    <div className="flex items-center gap-1 text-[9.5px] sm:text-[11px] lg:text-[10px] text-white font-medium opacity-90 leading-tight pt-0.5 truncate">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ffff] shrink-0" />
                      <span className="truncate">Kasavanahalli, Bengaluru</span>
                    </div>
                  </div>
                </div>
                {/* Full-Height Glowing Worth Badge */}
                <div className="relative z-10 flex flex-col justify-center items-center bg-[#F8DB66] text-[#271446] px-2.5 sm:px-3.5 lg:px-2.5 py-1.5 sm:py-2 rounded-lg font-black text-xs sm:text-sm shadow-[0_0_16px_rgba(248,219,102,0.95)] border border-white/70 tracking-tight shrink-0 self-stretch text-center leading-tight">
                  <span className="text-[8.5px] sm:text-[10px] lg:text-[8.5px] uppercase tracking-wider font-bold opacity-90 block">WORTH</span>
                  <span className="text-[8px] sm:text-[10px] lg:text-[8px] line-through opacity-60 font-bold block">₹700/-</span>
                  <span className="text-xs sm:text-lg lg:text-sm xl:text-base font-black tracking-tighter">₹299/-</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Badges – pushed to bottom */}
          <div className="pt-2.5 border-t border-[#EAD7C5]/70 w-full">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-1.5 justify-items-center">
              {heroFeatures.slice(0, 5).map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 lg:w-7.5 lg:h-7.5 xl:w-9.5 xl:h-9.5 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#271446] mb-0.5 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#271446] group-hover:text-[#F8DB66] shadow-xs">
                    <feat.icon className="w-3.5 h-3.5 lg:w-3.5 lg:h-3.5" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] lg:text-[8px] xl:text-[9px] leading-tight text-[#271446] font-semibold whitespace-pre-line text-center">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CENTER IMAGE ── */}
        <div className="lg:col-span-4 relative flex justify-center items-center h-full mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none py-2 lg:py-0">
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[440px] aspect-[4/5] lg:aspect-auto overflow-hidden rounded-2xl bg-[#FAF7F2] border border-[#EAD7C5]/40 shadow-xs">
              <img
                src={IMAGES.heroModel}
                alt="Skintonik Aesthetic Beauty Model"
                className="w-full h-full object-cover object-[center_12%] absolute inset-0 transition-transform duration-700 hover:scale-105"
              />
              {/* Seamless gradient edge blending overlays matching background */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/75 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-6 sm:w-8 lg:w-8 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-6 sm:w-8 lg:w-8 bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none z-10" />

              {/* Script Text – LEFT side of image */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-4 lg:left-4 text-left select-none pointer-events-none z-20">
                <span
                  className="font-script text-[24px] sm:text-[30px] lg:text-[26px] xl:text-[36px] text-[#271446] leading-tight block font-bold"
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
        <div id="consultation-form" className="lg:col-span-4 flex justify-center lg:justify-end items-center h-full pt-2 lg:pt-0">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
};

