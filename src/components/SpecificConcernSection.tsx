import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ConcernItem {
  title: string;
  desc: string;
  image: string;
}

export const SpecificConcernSection: React.FC = () => {
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

  const concerns: ConcernItem[] = [
    {
      title: 'Acne-Prone Skin',
      desc: 'Explore consultation, skin analysis and suitable peel or advanced treatment options.',
      image: '/images/concern_acne_skin.jpg',
    },
    {
      title: 'Acne Marks & Texture',
      desc: 'Options may include Dermapen, MNRF, peels and other advanced treatments depending on suitability.',
      image: '/images/concern_acne_marks.jpg',
    },
    {
      title: 'Pigmentation & Tanning',
      desc: 'Explore Glycolic, Vitamin C, Azelaic, Ferulic and advanced pigmentation options.',
      image: '/images/concern_pigmentation.jpg',
    },
    {
      title: 'Dull-Looking Skin',
      desc: 'Explore facials, skin analysis, Party Peel, Lactic Peel, Vitamin C Peel and other options.',
      image: '/images/service_facials.jpg',
    },
    {
      title: 'Anti-Ageing',
      desc: 'Explore RF, Botox, fillers, threads, skin boosters, Profhilo and other suitable treatments.',
      image: '/images/service_anti_ageing.jpg',
    },
    {
      title: 'Hair Fall',
      desc: 'Explore scalp analysis, scalp therapy, PRP, GFC, QR678 and other options.',
      image: '/images/service_hair_scalp.jpg',
    },
    {
      title: 'Dandruff / Scalp Concerns',
      desc: 'Explore Anti-Dandruff Therapy and Scalp Therapy.',
      image: '/images/concern_dandruff_scalp.jpg',
    },
    {
      title: 'Unwanted Hair',
      desc: 'Explore laser hair reduction packages for selected areas or full body.',
      image: '/images/treatment_laser_legs.jpg',
    },
    {
      title: 'Body Pigmentation',
      desc: 'Explore individual-area or full-body peel options.',
      image: '/images/service_body_new.jpg',
    },
  ];

  return (
    <section id="specific-concerns" className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#271446] text-[10px] font-semibold tracking-wider uppercase mb-2 border border-[#EAD7C5]">
            <Sparkles className="w-3.5 h-3.5 text-[#271446]" />
          </div>
          <h2 
            className="font-serif text-[28px] lg:text-[36px] font-extrabold text-[#271446] mb-2 tracking-tight"
          >
            Looking for a Treatment for a Specific Concern?
          </h2>
          <p className="text-xs sm:text-sm text-[#271446] font-medium">
            Find doctor-guided treatment paths tailored to your exact skin, hair, or body goals.
          </p>
        </div>

        {/* 9 Concern Cards Grid - Fresh, Clean 2-Part Layout with NO text overlay on images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {concerns.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#EAD7C5] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#271446] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Dedicated Top Image Container (Strictly No Text Overlay) */}
              <div className="relative h-44 w-full overflow-hidden bg-[#F3EDE2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom White Content Container */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-3 bg-white">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#271446] group-hover:scale-125 transition-transform" />
                    <h3 className="font-serif text-base font-bold text-[#271446]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#4A3B37] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAD7C5]/60 flex items-center justify-between text-[11px] font-semibold">
                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Doctor Guided
                  </span>
                  <button
                    onClick={handleScrollToForm}
                    className="inline-flex items-center space-x-1 font-bold text-[#271446] group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#271446]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-9 text-center">
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center space-x-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] font-semibold text-xs sm:text-sm py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Tell Us Your Concern</span>
            <ArrowRight className="w-4 h-4 text-[#F8DB66]" />
          </button>
        </div>

      </div>
    </section>
  );
};
