import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How do I know which skin treatment is right for me?',
      answer:
        'Treatment choice depends on your concern, skin condition and treatment goals. A consultation or skin analysis can help determine suitable options.',
    },
    {
      question: 'How much does a Hydra Facial cost at Skintonik?',
      answer: 'Hydra Facial is listed at ₹3,000 per session.',
    },
    {
      question: 'How much does a chemical peel cost?',
      answer:
        'Chemical peels at Skintonik start from ₹2,000 for Party Peel, with other peels priced according to the treatment selected.',
    },
    {
      question: 'What is the price of AI Skin Analysis?',
      answer: 'AI-Based Skin Analysis is ₹299.',
    },
    {
      question: 'What is the price of laser hair reduction?',
      answer: (
        <span>
          The supplied Skintonik packages are:
          <br />
          <strong>3 small areas</strong> — ₹17,999 for 6 sessions
          <br />
          and
          <br />
          <strong>Full body</strong> — ₹60,000 for 6 sessions.
        </span>
      ),
    },
    {
      question: 'Which areas are included in the ₹17,999 LHR package?',
      answer: 'The supplied package covers: Underarms + Upper Lip + Chin for 6 sessions.',
    },
    {
      question: 'Do you offer packages?',
      answer: 'Yes. Selected packages may be priced 10–15% lower than individual-session pricing.',
    },
    {
      question: 'Is EMI available?',
      answer: 'No-Cost EMI is available on eligible treatments.',
    },
    {
      question: 'Can I directly book a treatment?',
      answer:
        'You can enquire about a specific service, although consultation and treatment suitability should guide the final treatment choice.',
    },
    {
      question: 'Do you provide hair treatments?',
      answer:
        'Yes. Skintonik’s supplied service list includes scalp therapy, anti-dandruff therapy, PRP, GFC, exosomes, QR678, hair fillers and hair wellness drips.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center space-x-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#271446] text-[10px] font-semibold tracking-wider uppercase mb-2 border border-[#EAD7C5]">
            <HelpCircle className="w-3.5 h-3.5 text-[#271446]" />
            <span>Got Questions?</span>
          </div>
          <h2
            className="font-serif text-[28px] lg:text-[34px] font-bold text-[#271446] mb-2"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#271446] font-medium">
            Find quick answers to common queries regarding pricing, treatments, and bookings at Skintonik.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#EAD7C5] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-serif text-sm sm:text-base font-bold text-[#271446] transition-colors pr-4"
                  >
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#271446] text-[#F8DB66] border-[#271446]' : 'text-[#271446]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-0 sm:px-5 text-xs sm:text-sm text-[#271446] leading-relaxed border-t border-[#EAD7C5]/40 font-normal">
                    <div className="pt-3">{faq.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
