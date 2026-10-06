import React from 'react';
import { ChevronRight, Stethoscope, FileText, UserCheck, HeartHandshake } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation &\nAnalysis',
      desc: 'Understand your concerns with expert guidance and advanced skin/hair analysis.',
      icon: Stethoscope,
    },
    {
      step: '02',
      title: 'Personalised\nTreatment Plan',
      desc: 'A plan tailored to your goals, skin type and lifestyle.',
      icon: FileText,
    },
    {
      step: '03',
      title: 'Expert-Led\nTreatment',
      desc: 'Safe, comfortable and effective procedures.',
      icon: UserCheck,
    },
    {
      step: '04',
      title: 'Ongoing Support\n& Care',
      desc: 'Guidance and follow-ups for long-lasting results.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-[28px] lg:text-[34px] font-normal text-[#2C1B18] mb-1.5">
            Your Skintonik Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#66534E]">
            A simple and seamless experience from consultation to visible results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative group p-6 bg-white/70 rounded-2xl border border-[#EAD7C5]/60 hover:border-[#EAD7C5] hover:shadow-md transition-all duration-300">

              {/* Step Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center mb-3 group-hover:bg-[#4A151B] group-hover:border-[#4A151B] transition-colors duration-300 shadow-sm">
                <span className="font-serif font-bold text-base text-[#4A151B] group-hover:text-white transition-colors duration-300">
                  {item.step}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-2 text-[#4A151B]">
                <item.icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h4 className="font-serif text-[16px] font-semibold text-[#2C1B18] leading-tight mb-2 whitespace-pre-line">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-[#66534E] leading-relaxed">
                {item.desc}
              </p>

              {/* Centered Arrow Connector (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#FBF8F3] border border-[#EAD7C5] items-center justify-center text-[#4A151B] shadow-sm">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

