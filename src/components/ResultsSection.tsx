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
      const scrollAmount = direction === 'left' ? -300 : 300;
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
    <section id="results" className="bg-[#F9F6F0] py-12 px-4 lg:px-12 border-b border-[#EAD7C5]/40 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-[#2C1B18] mb-1">
              Real People. Real Results.
            </h2>
            <p className="text-xs sm:text-sm text-[#66534E]">
              Visible improvements. Happier, more confident you.
            </p>
          </div>

          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center space-x-1.5 bg-[#3A0D12] hover:bg-[#4A151B] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors self-start sm:self-auto"
          >
            <span>View More Results</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#EAD7C5] shadow-md flex items-center justify-center text-[#2C1B18] hover:bg-[#F3EDE2] transition-colors"
            aria-label="Previous Result"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Scroll View */}
          <div
            ref={scrollRef}
            className="flex items-center space-x-4 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
          >
            {results.map((item, idx) => (
              <ResultCard key={idx} title={item.title} image={item.image} />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#EAD7C5] shadow-md flex items-center justify-center text-[#2C1B18] hover:bg-[#F3EDE2] transition-colors"
            aria-label="Next Result"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination Dots Indicator */}
        <div className="flex justify-center items-center space-x-1.5 mt-6">
          <div className="w-2 h-2 rounded-full bg-[#4A151B]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D9BEA7]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D9BEA7]" />
        </div>

      </div>
    </section>
  );
};
