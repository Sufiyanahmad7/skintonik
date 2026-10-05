import React from 'react';
import { Sparkles, Flame, ShieldAlert, Zap, Scissors, Sun, Activity, Droplet, HeartHandshake } from 'lucide-react';

export const TreatmentCategories: React.FC = () => {
  const categories = [
    { icon: Sparkles, name: 'Facials', target: '#popular-treatments' },
    { icon: Flame, name: 'Peels', target: '#popular-treatments' },
    { icon: ShieldAlert, name: 'Advanced\nSkin Treatments', target: '#services' },
    { icon: Zap, name: 'Skin Tightening\n& Anti-Ageing', target: '#services' },
    { icon: Scissors, name: 'Hair & Scalp\nTreatments', target: '#popular-treatments' },
    { icon: Sun, name: 'Laser Hair\nReduction', target: '#popular-treatments' },
    { icon: Activity, name: 'Body Treatments', target: '#services' },
    { icon: Droplet, name: 'IV Drips &\nWeight Management', target: '#services' },
    { icon: HeartHandshake, name: 'Wellness &\nMental Health', target: '#services' },
  ];

  const handleCategoryClick = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F9F6F0] py-5 px-4 lg:px-12 border-b border-[#EAD7C5]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar space-x-4 lg:space-x-2 py-1">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryClick(cat.target)}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center px-2 min-w-[85px] transition-transform duration-200"
            >
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#FFFFFF] border border-[#EAD7C5] shadow-sm flex items-center justify-center text-[#4A151B] mb-2 group-hover:border-[#4A151B] group-hover:bg-[#F3EDE2] transition-colors">
                <cat.icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-medium text-[#2C1B18] leading-tight whitespace-pre-line group-hover:text-[#4A151B]">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
