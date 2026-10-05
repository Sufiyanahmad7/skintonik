import React from 'react';

export const PopularSearches: React.FC = () => {
  const tags = [
    'Hydra Facial in Bangalore',
    'Chemical Peel Price',
    'Laser Hair Reduction Bangalore',
    'Best Dermatologist Bangalore',
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
    <footer id="popular-searches" className="bg-[#FBF8F3] py-10 px-4 lg:px-12 border-t border-[#EAD7C5]/50">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A75] mb-4">
          Popular Searches
        </h4>

        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              onClick={handleTagClick}
              className="bg-[#F3EDE2] hover:bg-[#EAD7C5] border border-[#EAD7C5] text-[#2C1B18] text-[11px] font-medium px-3 py-1.5 rounded-full transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[#EAD7C5]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C7A75] gap-4">
          <p>© {new Date().getFullYear()} SKINTONIK Bangalore. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#consultation-form" className="hover:text-[#4A151B] transition-colors">Privacy Policy</a>
            <a href="#consultation-form" className="hover:text-[#4A151B] transition-colors">Terms of Service</a>
            <a href="#consultation-form" className="hover:text-[#4A151B] transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
