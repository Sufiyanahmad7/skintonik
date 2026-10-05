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
    <section id="why-skintonik" className="bg-[#FBF8F3] py-14 px-4 lg:px-12 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Clinic Interior Image */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#EAD7C5] shadow-sm aspect-[4/3]">
            <img
              src={IMAGES.clinic.reception}
              alt="Skintonik Bangalore Clinic Interior"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#2C1B18]">
            Why Skintonik, Bangalore?
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-2">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-start space-y-2 group">
                <div className="w-10 h-10 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#4A151B] transition-transform duration-200 group-hover:scale-105">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-medium text-[#2C1B18] leading-tight">
                  {feat.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
