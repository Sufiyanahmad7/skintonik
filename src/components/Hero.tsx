import React from 'react';
import { Sparkles, Scan, Cpu, Layers, Tag, CreditCard } from 'lucide-react';
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
    <section className="bg-[#FAF7F2] pt-6 lg:pt-8 pb-8 lg:pb-10 px-4 md:px-6 lg:px-12 border-b border-[#EAD7C5]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 xl:gap-8 items-stretch py-2 lg:py-4">

        {/* ── LEFT COLUMN ── */}
        <div className="md:col-span-6 lg:col-span-4 flex flex-col justify-between space-y-3.5 lg:space-y-4 h-full pr-0 lg:pr-1">

          {/* Location Badge */}
          <div className="flex flex-col items-start gap-1">
            <span className="inline-flex items-center gap-1.5 border border-[#271446]/30 bg-[#271446] text-white px-3.5 py-1 rounded-full text-[10px] lg:text-[10.5px] tracking-widest font-bold uppercase shadow-xs">
              <span className="text-[#F8DB66] font-extrabold">BANGALORE</span>
              <span className="text-white/60">•</span>
              <span className="text-white/90 font-medium">THE FESTIVE GLOW EDIT</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-[28px] sm:text-[34px] md:text-[36px] lg:text-[36px] xl:text-[48px] leading-[1.1] font-bold text-[#271446]"
          >
            Expert Aesthetic Care<br />
            for a More Confident You
          </h1>

          {/* Supporting Text */}
          <div className="space-y-2.5 lg:space-y-3">
            <p className="text-[13.5px] md:text-[14px] lg:text-[14.5px] xl:text-[16px] font-bold text-[#C59B27] leading-snug">
              Skin. Hair. Body. Wellness. All Under One Roof at Skintonik, Bangalore.
            </p>
            <p className="text-[11.5px] md:text-xs lg:text-[12.5px] xl:text-sm text-[#271446]/90 leading-relaxed font-normal">
              Laser hair removal, HydraFacial, pigmentation, acne and hair fall treatment on Sarjapur Road. Every price shown in full:{' '}
            </p>
            <div>
              <span className="inline-flex items-center gap-1.5 font-extrabold text-[#271446] bg-[#FFF9E6] border-2 border-[#D4AF37] px-3.5 py-1.5 rounded-lg shadow-[0_0_18px_rgba(212,175,55,0.75)] animate-pulse text-[11.5px] lg:text-xs xl:text-[13px]">
                ✨ up to 15% off list price, plus a free AI skin analysis worth ₹700.
              </span>
            </div>
          </div>

          {/* Feature Badges – pushed to bottom */}
          <div className="mt-auto pt-3 border-t border-[#EAD7C5]/70">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 lg:gap-2">
              {heroFeatures.slice(0, 5).map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-8.5 h-8.5 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#271446] mb-1 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#271446] group-hover:text-[#F8DB66] shadow-xs">
                    <feat.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  </div>
                  <span className="text-[8px] lg:text-[8.5px] xl:text-[9.5px] leading-tight text-[#271446] font-semibold whitespace-pre-line text-center">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CENTER IMAGE ── */}
        <div className="md:col-span-6 lg:col-span-4 relative flex justify-center items-stretch h-full mx-auto w-full max-w-[360px] sm:max-w-[400px] md:max-w-none">
          <div className="relative w-full h-full flex flex-col justify-stretch">
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[380px] lg:min-h-full aspect-[4/5] md:aspect-auto overflow-hidden rounded-2xl flex-1 bg-[#FAF7F2]">
              <img
                src={IMAGES.heroModel}
                alt="Skintonik Aesthetic Beauty Model"
                className="w-full h-full object-cover object-[center_20%] absolute inset-0 transition-transform duration-700"
              />
              {/* Seamless gradient edge blending overlays matching background */}
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-8 sm:w-10 bg-gradient-to-l from-[#FAF7F2] to-transparent pointer-events-none z-10" />

              {/* Script Text – LEFT side of image */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 text-left select-none pointer-events-none z-20">
                <span
                  className="font-script text-[24px] sm:text-[30px] lg:text-[32px] xl:text-[40px] text-[#271446] leading-tight block font-bold"
                  style={{
                    transform: 'rotate(-6deg)',
                    display: 'inline-block',
                    textShadow: '0 1px 3px rgba(250,247,242,0.9), 0 0 10px rgba(250,247,242,0.8)'
                  }}
                >
                  More<br />Than<br />Skin Deep
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT CONSULTATION FORM ── */}
        <div id="consultation-form" className="md:col-span-12 lg:col-span-4 flex justify-center lg:justify-end items-stretch h-full pt-4 md:pt-6 lg:pt-0">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
};

