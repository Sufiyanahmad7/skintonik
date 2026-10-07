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

        <div className="mt-6 pt-5 border-t border-[#EAD7C5]/50 flex flex-col sm:flex-row items-center justify-between text-[10px] text-[#271446] gap-3">
          <p>© {new Date().getFullYear()} SKINTONIK bengaluru. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#consultation-form" className="hover:text-[#271446] font-semibold transition-colors">Privacy Policy</a>
            <a href="#consultation-form" className="hover:text-[#271446] font-semibold transition-colors">Terms of Service</a>
            <a href="#consultation-form" className="hover:text-[#271446] font-semibold transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
