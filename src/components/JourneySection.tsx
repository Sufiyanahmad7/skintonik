import React from 'react';
import { Stethoscope, FileText, UserCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Analysis',
      desc: 'Tell us your concern and treatment goals. For skin concerns, you may begin with an AI-Based Skin Analysis where suitable.',
      icon: Stethoscope,
    },
    {
      step: '02',
      title: 'Personalised Treatment Plan',
      desc: 'Understand suitable treatment options, expected session requirements and pricing.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Treatment',
      desc: 'Proceed with the selected treatment after consultation and suitability assessment.',
      icon: UserCheck,
    },
    {
      step: '04',
      title: 'Follow-Up & Support',
      desc: 'Receive guidance regarding your treatment plan and follow-up requirements.',
      icon: HeartHandshake,
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
    <section className="bg-[#FBF8F3] py-14 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#271446] mb-1.5 leading-tight"
          >
            Your Skintonik Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#271446] font-medium">
            A simple and seamless experience from consultation to visible results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-10">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative group p-6 bg-white rounded-2xl border border-[#EAD7C5] hover:border-[#271446] hover:shadow-md transition-all duration-300">

              {/* Step Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center mb-3 group-hover:bg-[#271446] group-hover:border-[#271446] transition-colors duration-300 shadow-2xs">
                <span className="font-serif font-bold text-base text-[#271446] group-hover:text-[#F8DB66] transition-colors duration-300">
                  {item.step}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-2.5 text-[#271446]">
                <item.icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 
                className="font-serif text-base font-bold text-[#271446] leading-tight mb-2"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#271446] leading-relaxed font-normal">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleScrollToFormInput}
            className="inline-flex items-center justify-center gap-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 text-[#F8DB66]" />
          </button>
        </div>
      </div>
    </section>
  );
};

