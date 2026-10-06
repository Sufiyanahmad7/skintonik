import React from 'react';
import { UserCheck, Sparkles, Award, ShieldCheck, BadgePercent, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../data/images';

export const WhySkintonik: React.FC = () => {
  const features = [
    {
      icon: UserCheck,
      title: 'Experienced Dermatologists',
    },
    {
      icon: Sparkles,
      title: 'Personalised Treatment Plans',
    },
    {
      icon: Award,
      title: 'FDA-Approved Technology',
    },
    {
      icon: ShieldCheck,
      title: 'Safe & Hygienic Environment',
    },
    {
      icon: BadgePercent,
      title: 'Transparent Pricing',
    },
    {
      icon: HeartHandshake,
      title: 'Comprehensive Care – Skin, Hair, Body & Wellness',
    },
  ];

  return (
    <section id="why-skintonik" className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

        {/* Left Clinic Image with SKINTONIK watermark */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
            <img
              src={IMAGES.clinic.reception}
              alt="Skintonik Bangalore Clinic Interior"
              className="w-full h-full object-cover object-center"
            />
            {/* Skintonik brand overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] font-semibold text-white block">SKINTONIK</span>
              <span className="text-[9px] tracking-[0.2em] text-white/70 font-medium uppercase">SKIN | HAIR | BODY | WELLNESS</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 space-y-5">
          <h2 className="font-serif text-[26px] lg:text-[32px] font-normal text-[#2C1B18]">
            Why Skintonik, Bangalore?
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-start gap-2 group">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#4A151B] transition-transform duration-200 group-hover:scale-105 shrink-0">
                  <feat.icon className="w-4 h-4" />
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-[#2C1B18] leading-snug">
                  {feat.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
