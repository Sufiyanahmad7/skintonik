import React from 'react';

export const PopularSearches: React.FC = () => {
  const tags = [
    'Hydra Facial in bengaluru',
    'Chemical Peel Price',
    'Laser Hair Reduction bengaluru',
    'Best Dermatologist bengaluru',
    'PRP for Hair Fall',
    'Skin Tightening Treatment',
    'Body Whitening Treatment',
    'IV Drip Therapy',
    'Skin Analysis',
    'Anti-Ageing Treatment',
    'Hair Treatment for Dandruff',
    'Weight Loss Treatment',
    'Mental Wellness Session',
  ];

  const handleTagClick = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="popular-searches" className="bg-[#FBF8F3] py-8 px-4 lg:px-10 border-t border-[#EAD7C5]/60">
      <div className="max-w-7xl mx-auto">
        <h4
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#271446] mb-3"
        >
          Popular Searches
        </h4>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              onClick={handleTagClick}
              className="bg-[#F3EDE2] hover:bg-[#271446] border border-[#E2CFB8] text-[#271446] hover:text-[#F8DB66] text-[10px] font-medium px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* FOOTER DISCLAIMER */}
        <div className="mt-8 pt-5 border-t border-[#EAD7C5]/60">
          <h5
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#271446] mb-1.5"
          >
            FOOTER DISCLAIMER
          </h5>
          <p className="text-[11px] text-[#271446] leading-relaxed font-normal">
            Treatment suitability, treatment plan, number of sessions and expected outcomes vary by individual and are determined after consultation. Prices shown are based on the current Skintonik treatment list and may vary where treatment scope or areas differ. Package discounts and No-Cost EMI are available only on eligible treatments. Terms apply.
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-[#EAD7C5]/50 flex flex-col md:flex-row items-center justify-between text-[#271446] gap-4">
          <p className="text-xs sm:text-sm font-semibold">© {new Date().getFullYear()} SKINTONIK Bengaluru. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-[#271446]">
            {/* Marketed by DUMOSH */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#52413E]">Marketing Partner</span>
              <a
                href="https://dumosh.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center bg-white px-2 py-1 rounded-md border border-[#E2CFB8] hover:opacity-90 shadow-2xs transition-all"
                title="Dumosh - Marketing Partner"
              >
                <img
                  src="/images/dlogowhite.png"
                  alt="Dumosh"
                  className="h-5 sm:h-6 w-auto object-contain"
                />
              </a>
            </div>

            {/* Developed by Right Brain Infotech */}
            <div className="flex items-center gap-1.5 text-xs text-[#52413E]">
              <span>Developed by</span>
              <a
                href="https://rightbraininfotech.in/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#271446] hover:text-[#C59B27] underline transition-colors"
              >
                Right Brain Infotech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
