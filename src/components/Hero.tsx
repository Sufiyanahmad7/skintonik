import React from 'react';
import { MapPin, Cpu, Sparkles, UserCheck, ShieldCheck, CreditCard } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';
import { IMAGES } from '../data/images';

export const Hero: React.FC = () => {
  const heroFeatures = [
    { icon: Cpu, label: 'Advanced\nTechnology' },
    { icon: Sparkles, label: 'Personalised\nTreatment Plans' },
    { icon: UserCheck, label: 'Experienced\nDermatologists' },
    { icon: ShieldCheck, label: 'Safe &\nHygienic' },
    { icon: CreditCard, label: 'No-Cost EMI\nAvailable*' },
  ];

  return (
    <section className="bg-[#FBF8F3] pt-5 pb-8 px-4 lg:px-10 border-b border-[#EAD7C5]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4 pt-2 h-full pr-1">

          {/* Location Badge – stacked vertically */}
          <div className="flex flex-col items-start gap-1">
            <span className="inline-flex items-center gap-1 border border-[#4A151B]/30 bg-[#4A151B] text-white px-7 py-0.5 rounded-full text-[10px] tracking-widest font-bold uppercase">
              {/* <MapPin className="w-2.5 h-2.5" /> */}
              <span>BANGALORE</span>
            </span>

          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-[38px] sm:text-[42px] lg:text-[46px] leading-[1.1] font-normal text-[#2C1B18]">
            Expert Aesthetic Care<br />
            for a More Confident You
          </h1>

          {/* Supporting Text */}
          <div className="space-y-3">
            <p className="text-[15px] font-semibold text-[#2C1B18] leading-snug">
              Skin. Hair. Body. Wellness. All Under One Roof at Skintonik, Bangalore.
            </p>
            <p className="text-xs sm:text-sm text-[#66534E] leading-relaxed">
              Laser hair removal, HydraFacial, pigmentation, acne and hair fall treatment on Sarjapur Road. Every price shown in full: up to 15% off list price, plus a free AI skin analysis worth ₹700.
            </p>
          </div>
          {/* Feature Badges – pushed to bottom */}
          <div className="mt-auto pt-4 border-t border-[#EAD7C5]/70">
            <div className="grid grid-cols-5 gap-1 sm:gap-2">
              {heroFeatures.map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#4A151B] mb-1 transition-transform duration-200 group-hover:scale-105">
                    <feat.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] lg:text-[10px] leading-tight text-[#66534E] font-medium whitespace-pre-line text-center">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CENTER IMAGE ── */}
        <div className="lg:col-span-4 relative flex justify-center items-stretch h-full -mx-2 lg:mx-0">
          <div className="relative w-full h-full flex flex-col">
            <div className="relative w-full h-full min-h-[420px] overflow-hidden rounded-2xl flex-1 bg-[#FBF8F3]">
              <img
                src={IMAGES.heroModel}
                alt="Skintonik Aesthetic Beauty Model"
                className="w-full h-full object-cover object-top absolute inset-0 scale-105"
              />
              {/* Gradient edge blending overlays */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FBF8F3] via-[#FBF8F3]/60 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FBF8F3] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FBF8F3] to-transparent pointer-events-none z-10" />

              {/* Script Text – LEFT side of image with high visibility overlay */}
              <div className="absolute bottom-6 left-5 text-left select-none pointer-events-none z-20">
                <span
                  className="font-script text-[28px] lg:text-[34px] text-[#4A151B] leading-tight block font-bold"
                  style={{
                    transform: 'rotate(-6deg)',
                    display: 'inline-block',
                    textShadow: '0 1px 3px rgba(255,255,255,0.9), 0 2px 8px rgba(255,255,255,0.9), 0 0 12px rgba(251,248,243,1)'
                  }}
                >
                  More<br />Than<br />Skin Deep
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT CONSULTATION FORM ── */}
        <div id="consultation-form" className="lg:col-span-4 flex justify-center lg:justify-end items-stretch h-full">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
};

