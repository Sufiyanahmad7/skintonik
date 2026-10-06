import React from 'react';
import { Sparkles, Flame, ShieldAlert, Zap, Scissors, Sun, Activity, Droplet, HeartHandshake, Scan } from 'lucide-react';

export const TreatmentCategories: React.FC = () => {
  const categories = [
    { icon: Sparkles, name: 'Facials', target: '#popular-treatments' },
    { icon: Flame, name: 'Peels', target: '#popular-treatments' },
    { icon: ShieldAlert, name: 'Advanced\nSkin Treatments', target: '#services' },
    { icon: Zap, name: 'Skin Tightening\n& Anti-Ageing', target: '#services' },
    { icon: Scissors, name: 'Hair & Scalp\nTreatments', target: '#popular-treatments' },
    { icon: Sun, name: 'Laser Hair\nReduction', target: '#popular-treatments' },
    { icon: Activity, name: 'Body Treatments', target: '#services' },
    { icon: Droplet, name: 'IV Drips &\nWeight Mgmt', target: '#services' },
    { icon: HeartHandshake, name: 'Wellness &\nMental Health', target: '#services' },
    { icon: Scan, name: 'Skin & Hair\nAnalysis', target: '#services' },
  ];

  const handleCategoryClick = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F9F6F0] py-4 px-4 lg:px-10 border-b border-[#EAD7C5]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start overflow-x-auto no-scrollbar gap-1 lg:gap-0 lg:justify-between py-1">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryClick(cat.target)}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center px-2 lg:px-1 min-w-[76px] lg:min-w-0 lg:flex-1 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-[#E8D3BC] shadow-sm flex items-center justify-center text-[#4A151B] mb-1.5 group-hover:border-[#4A151B] group-hover:bg-[#FBF8F3] transition-colors">
                <cat.icon className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
              </div>
              <span className="text-[10px] font-medium text-[#2C1B18] leading-tight whitespace-pre-line group-hover:text-[#4A151B]">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
