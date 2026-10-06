import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ResultCard } from './ResultCard';
import { IMAGES } from '../data/images';

export const ResultsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const results = [
    { title: 'Acne & Acne Scars Treatment', image: IMAGES.results.acne },
    { title: 'Pigmentation Reduction', image: IMAGES.results.pigmentation },
    { title: 'Laser Hair Reduction', image: IMAGES.results.laser },
    { title: 'Skin Rejuvenation', image: IMAGES.results.rejuvenation },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollToForm = () => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="results" className="bg-[#F9F6F0] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 text-center sm:text-left">
          <div>
            <h2 className="font-serif text-[28px] lg:text-[34px] font-normal text-[#2C1B18] mb-1">
              Real People. Real Results.
            </h2>
            <p className="text-xs sm:text-sm text-[#66534E]">
              Visible improvements. Happier, more confident you.
            </p>
          </div>

          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center gap-1.5 bg-[#3A0D12] hover:bg-[#4A151B] text-white text-xs font-medium px-4 py-2.5 rounded-lg transition-colors self-center sm:self-auto shrink-0"
          >
            <span>View More Results</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid/Carousel Container: Grid centered on md+ screens, scrollable on small mobile */}
        <div className="relative">
          {/* Left Arrow (visible on mobile scroll) */}
          <button
            onClick={() => handleScroll('left')}
            className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#EAD7C5] shadow-md flex items-center justify-center text-[#2C1B18] hover:bg-[#F3EDE2] transition-colors"
            aria-label="Previous Result"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Centered Cards Container */}
          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center items-stretch overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
          >
            {results.map((item, idx) => (
              <div key={idx} className="w-full max-w-[280px]">
                <ResultCard title={item.title} image={item.image} />
              </div>
            ))}
          </div>

          {/* Right Arrow (visible on mobile scroll) */}
          <button
            onClick={() => handleScroll('right')}
            className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#EAD7C5] shadow-md flex items-center justify-center text-[#2C1B18] hover:bg-[#F3EDE2] transition-colors"
            aria-label="Next Result"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-6">
          <div className="w-6 h-1.5 rounded-full bg-[#4A151B]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D9BEA7]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D9BEA7]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D9BEA7]" />
        </div>

      </div>
    </section>
  );
};

