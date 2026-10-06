import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Scan, 
  Tag, 
  Percent, 
  CreditCard, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { IMAGES } from '../data/images';

export const WhySkintonik: React.FC = () => {
  const whyFeatures = [
    {
      icon: Building2,
      title: 'Treatment Options Under One Roof',
      description: 'Access skin, hair, body and wellness services through one clinic.',
    },
    {
      icon: Sparkles,
      title: 'Personalised Treatment Planning',
      description: 'Treatment recommendations can be selected based on your concerns, goals and suitability.',
    },
    {
      icon: Scan,
      title: 'Analysis Before Treatment',
      description: 'Start with Skin Analysis or consultation where appropriate instead of choosing treatments at random.',
    },
    {
      icon: Tag,
      title: 'Transparent Pricing',
      description: 'See key treatment prices before booking.',
    },
    {
      icon: Percent,
      title: 'Package Options',
      description: 'Save 10–15% on selected packages where applicable.',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      description: 'No-Cost EMI available on eligible treatments.',
    },
    {
      icon: Layers,
      title: 'Multiple Treatment Categories',
      description: 'From ₹700 skin analysis and ₹2,000 entry-level treatments to advanced aesthetic procedures.',
    },
  ];

  const handleScrollToFormInput = () => {
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

  return (
    <section id="why-skintonik" className="bg-[#FBF8F3] py-14 px-4 lg:px-10 border-b border-[#EAD7C5]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left Clinic Image with SKINTONIK watermark */}
        <div className="lg:col-span-5 flex items-stretch h-full">
          <div className="relative rounded-2xl overflow-hidden shadow-md w-full min-h-[460px] lg:min-h-[520px] flex flex-col justify-end bg-[#F3EDE2]">
            <img
              src={IMAGES.clinic.reception}
              alt="Skintonik Bangalore Clinic Interior"
              className="w-full h-full object-cover object-left-center absolute inset-0"
            />
            {/* Skintonik brand overlay */}
            <div className="relative z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-16">
              <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] font-semibold text-white block">SKINTONIK</span>
              <span className="text-[10px] tracking-[0.2em] text-white/80 font-medium uppercase">SKIN | HAIR | BODY | WELLNESS</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#8C7A75] uppercase block mb-1">
              WHY SKINTONIK
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2C1B18] leading-tight">
              Why Choose Skintonik, Bangalore?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            {whyFeatures.map((item, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#EAD7C5]/70 hover:border-[#4A151B] transition-all duration-200 shadow-2xs flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center text-[#4A151B] group-hover:bg-[#4A151B] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#2C1B18] group-hover:text-[#4A151B] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#66534E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={handleScrollToFormInput}
              className="inline-flex items-center justify-center gap-2 bg-[#4A151B] hover:bg-[#381014] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
