import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const reviewScrollRef = useRef<HTMLDivElement>(null);

  const googleReviews = [
    {
      author: 'Priya Sharma',
      time: '2 weeks ago',
      text: 'Visited Skintonik for HydraFacial and pigmentation peel. The AI skin analysis gave me a clear understanding of my skin needs. Excellent results after just 2 visits!',
      treatment: 'HydraFacial & Peels',
    },
    {
      author: 'Ananya Reddy',
      time: '1 month ago',
      text: 'Great experience with laser hair reduction package! Very hygienic clinic, transparent pricing, and gentle staff. Highly recommend Skintonik in Sarjapur Road.',
      treatment: 'Laser Hair Removal',
    },
    {
      author: 'Rahul Verma',
      time: '3 weeks ago',
      text: 'Had severe acne scarring and took the MNRF + Salicylic peel plan. Saw visible smoothing within a month. No hidden charges at all.',
      treatment: 'Acne Scar Treatment',
    },
    {
      author: 'Sneha Kulkarni',
      time: '2 months ago',
      text: 'Booked the Bridal Radiance Glow Series before my wedding. My skin was glowing on the big day. The doctors are super patient and knowledgeable.',
      treatment: 'Pre-Bridal Package',
    },
    {
      author: 'Vikram Menon',
      time: 'a month ago',
      text: 'Tried GFC hair treatment after noticing hair thinning. AI hair analysis tracked my progress session by session. Very professional setup.',
      treatment: 'GFC Hair Treatment',
    },
    {
      author: 'Divya Nair',
      time: '3 weeks ago',
      text: 'Clean clinic, courteous doctors, and upfront pricing. The party peel gave me an instant glow for an event. Will definitely return!',
      treatment: 'Party Peel Facial',
    },
  ];

  const handleReviewScroll = (direction: 'left' | 'right') => {
    if (reviewScrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      reviewScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollToFormInput = () => {
    const inputEl = document.getElementById('hero-full-name-input');
    const formContainer = document.getElementById('consultation-form');

    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      if (inputEl) {
        inputEl.focus();
      }
    }, 400);
  };

  return (
    <section id="results" className="bg-[#F9F6F0] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/40 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2C1B18] leading-tight mb-1">
            Real People. Real Results.
          </h2>
          <p className="text-xs sm:text-sm text-[#66534E] mb-5">
            Visible improvements. Happier, more confident you.
          </p>

          {/* <button
            onClick={handleScrollToFormInput}
            className="inline-flex items-center justify-center gap-2 bg-[#4A151B] hover:bg-[#381014] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
          >
            <span>Book Your Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button> */}
        </div>

        {/* GOOGLE REVIEWS CAROUSEL */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              {/* Google G Logo SVG */}
              <div className="w-9 h-9 rounded-full bg-white border border-[#EAD7C5]/80 flex items-center justify-center p-1.5 shadow-2xs">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#2C1B18]">
                  Verified Google Reviews
                </h3>
                <div className="flex items-center space-x-1 text-xs text-[#66534E]">
                  <span className="font-bold text-[#4A151B]">4.9</span>
                  <div className="flex text-amber-500 text-xs">★★★★★</div>
                  <span>(86+ reviews on Google)</span>
                </div>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleReviewScroll('left')}
                className="w-8 h-8 rounded-full bg-white border border-[#EAD7C5] shadow-2xs flex items-center justify-center text-[#4A151B] hover:bg-[#4A151B] hover:text-white transition-all cursor-pointer"
                aria-label="Previous Google Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleReviewScroll('right')}
                className="w-8 h-8 rounded-full bg-white border border-[#EAD7C5] shadow-2xs flex items-center justify-center text-[#4A151B] hover:bg-[#4A151B] hover:text-white transition-all cursor-pointer"
                aria-label="Next Google Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Cards */}
          <div
            ref={reviewScrollRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
          >
            {googleReviews.map((rev, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-xl border border-[#EAD7C5]/70 p-4 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-[#F3EDE2] text-[#4A151B] font-bold text-xs flex items-center justify-center border border-[#EAD7C5]">
                        {rev.author[0]}
                      </div>
                      <div>
                        <h5 className="font-semibold text-xs text-[#2C1B18] leading-tight">
                          {rev.author}
                        </h5>
                        <span className="text-[10px] text-[#66534E] block">{rev.time}</span>
                      </div>
                    </div>
                    <div className="text-amber-500 text-xs">★★★★★</div>
                  </div>

                  <p className="text-xs text-[#66534E] leading-relaxed line-clamp-4 italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#EAD7C5]/30 flex items-center justify-between text-[10px] text-[#66534E]">
                  <span className="bg-[#F3EDE2] text-[#4A151B] px-1.5 py-0.5 rounded font-medium">
                    {rev.treatment}
                  </span>
                  <a
                    href="https://maps.app.goo.gl/n3v827McWbMcsvHn9"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4A151B] font-semibold hover:underline"
                  >
                    Google Review ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

