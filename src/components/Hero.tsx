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
    <section className="bg-[#FBF8F3] pt-4 lg:pt-5 pb-6 lg:pb-8 px-3 md:px-4 lg:px-10 border-b border-[#EAD7C5]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6 items-stretch">

        {/* ── LEFT COLUMN ── */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-3 md:space-y-4 pt-1 md:pt-2 h-full pr-1">

          {/* Location Badge – stacked vertically */}
          <div className="flex flex-col items-start gap-1">
            <span className="inline-flex items-center gap-1 border border-[#271446]/30 bg-[#271446] text-[#F8DB66] px-5 sm:px-7 py-0.5 rounded-full text-[9px] sm:text-[10px] tracking-widest font-bold uppercase">
              {/* <MapPin className="w-2.5 h-2.5" /> */}
              <span>BANGALORE</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-[28px] sm:text-[34px] md:text-[36px] lg:text-[46px] leading-[1.1] font-bold text-[#271446]"
          >
            Expert Aesthetic Care<br />
            for a More Confident You
          </h1>

          {/* Supporting Text */}
          <div className="space-y-2 md:space-y-3">
            <p className="text-[13px] md:text-[14px] lg:text-[15px] font-semibold text-[#271446] leading-snug">
              Skin. Hair. Body. Wellness. All Under One Roof at Skintonik, Bangalore.
            </p>
            <p className="text-[11px] md:text-xs lg:text-sm text-[#52413E] leading-relaxed">
              Laser hair removal, HydraFacial, pigmentation, acne and hair fall treatment on Sarjapur Road. Every price shown in full: up to 15% off list price, plus a free AI skin analysis worth ₹700.
            </p>
          </div>
          {/* Feature Badges – pushed to bottom */}
          <div className="mt-auto pt-3 md:pt-4 border-t border-[#EAD7C5]/70">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-1.5 md:gap-2">
              {heroFeatures.map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#271446] mb-1 transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#271446] group-hover:text-[#F8DB66]">
                    <feat.icon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  </div>
                  <span className="text-[7.5px] md:text-[8px] lg:text-[9.5px] leading-tight text-[#52413E] font-medium whitespace-pre-line text-center">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CENTER IMAGE ── */}
        <div className="md:col-span-4 relative flex justify-center items-stretch h-full mx-auto w-full max-w-[340px] sm:max-w-[380px] md:max-w-none">
          <div className="relative w-full h-full flex flex-col">
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[380px] md:min-h-[400px] aspect-[4/5] md:aspect-auto overflow-hidden rounded-2xl flex-1 bg-[#FBF8F3]">
              <img
                src={IMAGES.heroModel}
                alt="Skintonik Aesthetic Beauty Model"
                className="w-full h-full object-cover object-[center_15%] absolute inset-0 transition-transform duration-700"
              />
              {/* Gradient edge blending overlays matching exact image background color */}
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 md:h-32 bg-gradient-to-t from-[#FBF8F3] via-[#FBF8F3]/60 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-[#FBF8F3] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-6 sm:w-8 md:w-12 bg-gradient-to-l from-[#FBF8F3] to-transparent pointer-events-none z-10" />

              {/* Script Text – LEFT side of image with high visibility overlay */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 text-left select-none pointer-events-none z-20">
                <span
                  className="font-script text-[22px] sm:text-[26px] lg:text-[34px] text-[#271446] leading-tight block font-bold"
                  style={{
                    transform: 'rotate(-6deg)',
                    display: 'inline-block',
                    textShadow: '0 1px 3px rgba(251,248,243,0.9), 0 2px 8px rgba(251,248,243,0.9), 0 0 12px rgba(251,248,243,1)'
                  }}
                >
                  More<br />Than<br />Skin Deep
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT CONSULTATION FORM ── */}
        <div id="consultation-form" className="md:col-span-4 flex justify-center md:justify-end items-stretch h-full">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
};

