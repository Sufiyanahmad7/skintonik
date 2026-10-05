import React from 'react';
import { MapPin, Sparkles, UserCheck, ShieldCheck, CreditCard, Cpu } from 'lucide-react';
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
    <section className="bg-[#FBF8F3] pt-6 pb-12 px-4 lg:px-12 border-b border-[#EAD7C5]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column Content */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Location Badge & Eyebrow */}
          <div className="flex items-center space-x-3 flex-wrap gap-y-2">
            <span className="inline-flex items-center space-x-1 border border-[#4A151B]/20 bg-[#F3EDE2] text-[#4A151B] px-3 py-1 rounded-full text-[10px] tracking-wider font-semibold uppercase">
              <MapPin className="w-3 h-3 text-[#4A151B]" />
              <span>BANGALORE</span>
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#8C7A75] uppercase">
              THE FESTIVE GLOW EDIT
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] font-normal text-[#2C1B18]">
            Expert Aesthetic<br />
            Care for a More<br />
            Confident You
          </h1>

          {/* Supporting Text */}
          <p className="text-sm lg:text-base text-[#66534E] leading-relaxed max-w-md">
            Skin. Hair. Body. Wellness. All Under One Roof at Skintonik, Bangalore.
          </p>

          {/* Feature Badges Grid */}
          <div className="pt-4 grid grid-cols-5 gap-2 sm:gap-3 border-t border-[#EAD7C5]/60 max-w-lg">
            {heroFeatures.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#4A151B] mb-1.5 transition-transform duration-200 group-hover:scale-105">
                  <feat.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="text-[10px] lg:text-[11px] leading-tight text-[#66534E] font-medium whitespace-pre-line">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Center Image with Handwriting Script */}
        <div className="lg:col-span-4 relative flex justify-center items-center py-4">
          <div className="relative w-full max-w-[320px] lg:max-w-none rounded-2xl overflow-hidden shadow-sm border border-[#EAD7C5]/40 aspect-[3/4]">
            <img
              src={IMAGES.heroModel}
              alt="Skintonik Aesthetic Beauty Model"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Script Text overlay near model matching reference */}
            <div className="absolute bottom-6 right-4 sm:right-6 text-right select-none pointer-events-none">
              <span className="font-script text-3xl lg:text-4xl text-[#4A151B] block drop-shadow-sm leading-tight rotate-[-6deg]">
                More<br />Than<br />Skin Deep
              </span>
            </div>
          </div>
        </div>

        {/* Right Consultation Form */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
};
