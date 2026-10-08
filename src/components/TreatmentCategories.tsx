import React from 'react';
import { 
  Sparkles, 
  Flame, 
  ShieldAlert, 
  Zap, 
  Scissors, 
  Sun, 
  Activity, 
  Droplet, 
  HeartHandshake, 
  Scan,
  ArrowRight
} from 'lucide-react';

export const TreatmentCategories: React.FC = () => {
  const categories = [
    { icon: Sparkles, name: 'Facials', target: '#services' },
    { icon: Flame, name: 'Peels', target: '#services' },
    { icon: ShieldAlert, name: 'Advanced\nSkin Treatments', target: '#services' },
    { icon: Zap, name: 'Skin Tightening\n& Anti-Ageing', target: '#services' },
    { icon: Scissors, name: 'Hair & Scalp\nTreatments', target: '#services' },
    { icon: Sun, name: 'Laser Hair\nReduction', target: '#services' },
    { icon: Activity, name: 'Body Treatments', target: '#services' },
    { icon: Droplet, name: 'IV Drips &\nWeight Mgmt', target: '#services' },
    { icon: HeartHandshake, name: 'Wellness &\nMental Health', target: '#services' },
    { icon: Scan, name: 'Skin & Hair\nAnalysis', target: '#services' },
  ];

  const handleScroll = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#FBF8F3] py-10 px-4 lg:px-10 border-b border-[#EAD7C5]/50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#271446] leading-tight"
          >
            Find the Treatment Category You’re Looking For
          </h2>
        </div>

        {/* Categories Bar */}
        <div className="flex items-start overflow-x-auto no-scrollbar gap-2 lg:gap-0 lg:justify-between py-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(cat.target)}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer text-center px-2 lg:px-1 min-w-[80px] lg:min-w-0 lg:flex-1 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F3EDE2] border border-[#EAD7C5] shadow-sm flex items-center justify-center text-[#271446] mb-2 group-hover:bg-[#271446] group-hover:text-[#F8DB66] group-hover:border-[#271446] transition-all">
                <cat.icon className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="text-[11px] lg:text-[12px] font-semibold text-[#271446] leading-tight whitespace-pre-line group-hover:text-[#271446]">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* CTA Button – scrolls to Explore All Our Services */}
        <div className="text-center mt-8">
          <button
            onClick={() => handleScroll('#services')}
            className="inline-flex items-center justify-center gap-2 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <span>Explore All Treatments</span>
            <ArrowRight className="w-4 h-4 text-[#F8DB66]" />
          </button>
        </div>
      </div>
    </section>
  );
};
