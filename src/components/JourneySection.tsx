import React from 'react';
import { Stethoscope, FileText, UserCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Analysis',
      desc: 'Tell us your concern and treatment goals. For skin concerns, you may begin with an AI-Based Skin Analysis where suitable.',
      icon: Stethoscope,
      image: '/images/journey_step1_cartoon.jpg',
      imagePosition: 'object-center',
      isHighlight: false,
    },
    {
      step: '02',
      title: 'Personalised Treatment Plan',
      desc: 'Understand suitable treatment options, expected session requirements and pricing.',
      icon: FileText,
      image: '/images/journey_step2_cartoon.jpg',
      imagePosition: 'object-center',
      isHighlight: true,
    },
    {
      step: '03',
      title: 'Treatment',
      desc: 'Proceed with the selected treatment after consultation and suitability assessment.',
      icon: UserCheck,
      image: '/images/journey_step3_cartoon.jpg',
      imagePosition: 'object-center',
      isHighlight: false,
    },
    {
      step: '04',
      title: 'Follow-Up & Support',
      desc: 'Receive guidance regarding your treatment plan and follow-up requirements.',
      icon: HeartHandshake,
      image: '/images/journey_step4_cartoon.jpg',
      imagePosition: 'object-center',
      isHighlight: false,
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
    <section className="bg-[#FBF8F3] py-16 px-4 lg:px-10 border-b border-[#EAD7C5]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#271446] mb-2 leading-tight tracking-tight">
            Your Skintonik Journey
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#271446]/80 font-normal">
            A simple and seamless experience from consultation to visible results.
          </p>
        </div>

        {/* Step Cards Grid Container */}
        <div className="relative mb-14">

          {/* Timeline Connector Line through middle of card bottoms (Desktop) */}
          <div className="hidden xl:block absolute bottom-[110px] left-[12%] right-[12%] h-[2px] bg-[#EAD7C5]/70 z-0" />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-[22px] bg-white border transition-all duration-300 relative group overflow-hidden h-full ${
                  item.isHighlight
                    ? 'border-[#271446] shadow-[0_12px_35px_rgba(39,20,70,0.18)] ring-2 ring-[#271446]/20'
                    : 'border-[#EAD7C5] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#271446]/40'
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Top Media Container */}
                  <div className="w-full aspect-[16/10] overflow-hidden bg-[#F5EFE6] relative border-b border-[#EAD7C5]/40 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover ${item.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>

                  {/* Icon & Text Block */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-3 relative">
                    <div className="space-y-3">
                      {/* Top Header Row in Text Card: Left-aligned Number Badge + Icon */}
                      <div className="flex items-center justify-between">
                        {/* Numbering Badge on Left Side */}
                        <div
                          className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-xs font-serif text-xs sm:text-sm font-bold transition-transform duration-300 group-hover:scale-110 ${
                            item.isHighlight
                              ? 'bg-[#271446] border-[#F8DB66] text-[#F8DB66]'
                              : 'bg-[#FAF6ED] border-[#EAD7C5] text-[#271446] group-hover:bg-[#271446] group-hover:text-[#F8DB66]'
                          }`}
                        >
                          {item.step}
                        </div>

                        {/* Step Icon */}
                        <div className="inline-flex items-center justify-center text-[#271446]">
                          <item.icon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Bold Step Title */}
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#271446] leading-snug text-left">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description Paragraph */}
                    <p className="font-sans text-xs text-[#271446]/80 leading-relaxed font-normal min-h-[48px] text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={handleScrollToFormInput}
            className="inline-flex items-center justify-center gap-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] font-bold text-xs sm:text-sm px-9 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-[#F8DB66]/30 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 text-[#F8DB66] stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};

