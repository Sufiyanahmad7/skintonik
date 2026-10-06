import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ConcernItem {
  title: string;
  desc: string;
}

export const SpecificConcernSection: React.FC = () => {
  const handleScrollToForm = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const concerns: ConcernItem[] = [
    {
      title: 'Acne-Prone Skin',
      desc: 'Explore consultation, skin analysis and suitable peel or advanced treatment options.',
    },
    {
      title: 'Acne Marks & Texture',
      desc: 'Options may include Dermapen, MNRF, peels and other advanced treatments depending on suitability.',
    },
    {
      title: 'Pigmentation & Tanning',
      desc: 'Explore Glycolic, Vitamin C, Azelaic, Ferulic and advanced pigmentation options.',
    },
    {
      title: 'Dull-Looking Skin',
      desc: 'Explore facials, skin analysis, Party Peel, Lactic Peel, Vitamin C Peel and other options.',
    },
    {
      title: 'Anti-Ageing',
      desc: 'Explore RF, Botox, fillers, threads, skin boosters, Profhilo and other suitable treatments.',
    },
    {
      title: 'Hair Fall',
      desc: 'Explore scalp analysis, scalp therapy, PRP, GFC, QR678 and other options.',
    },
    {
      title: 'Dandruff / Scalp Concerns',
      desc: 'Explore Anti-Dandruff Therapy and Scalp Therapy.',
    },
    {
      title: 'Unwanted Hair',
      desc: 'Explore laser hair reduction packages for selected areas or full body.',
    },
    {
      title: 'Body Pigmentation',
      desc: 'Explore individual-area or full-body peel options.',
    },
  ];

  return (
    <section id="specific-concerns" className="bg-[#F9F6F0] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#4A151B] text-[10px] font-semibold tracking-wider uppercase mb-2 border border-[#EAD7C5]/60">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif text-[28px] lg:text-[34px] font-normal text-[#2C1B18] mb-2">
            Looking for a Treatment for a Specific Concern?
          </h2>
          <p className="text-xs sm:text-sm text-[#66534E]">
            Find doctor-guided treatment paths tailored to your exact skin, hair, or body goals.
          </p>
        </div>

        {/* 9 Concern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {concerns.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#EAD7C5]/70 p-5 shadow-2xs hover:shadow-sm hover:border-[#4A151B]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#4A151B] group-hover:scale-125 transition-transform" />
                  <h3 className="font-serif text-base font-semibold text-[#2C1B18] group-hover:text-[#4A151B] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#66534E] leading-relaxed pl-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#EAD7C5]/30 flex items-center justify-between text-[11px] font-medium text-[#4A151B]">
                <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Doctor Guided
                </span>
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-9 text-center">
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center space-x-2 bg-[#4A151B] hover:bg-[#3A0D12] text-white font-medium text-xs sm:text-sm py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Tell Us Your Concern</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
