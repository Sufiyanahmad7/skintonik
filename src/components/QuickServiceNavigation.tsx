import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavigationCard {
  title: string;
  description: string;
  image: string;
  targetId: string;
}

export const QuickServiceNavigation: React.FC = () => {
  const serviceCategories: NavigationCard[] = [
    {
      title: 'Facials',
      description: 'Hydration & glow options',
      image: '/images/service_facials.jpg',
      targetId: '#popular-treatments'
    },
    {
      title: 'Chemical Peels',
      description: 'Acne, tanning & tone care',
      image: '/images/treatment_peels.jpg',
      targetId: '#popular-treatments'
    },
    {
      title: 'Advanced Skin',
      description: 'Rejuvenation & injectables',
      image: '/images/service_advanced_skin.jpg',
      targetId: '#services'
    },
    {
      title: 'Anti-Ageing',
      description: 'Botox, fillers & RF care',
      image: '/images/service_anti_ageing.jpg',
      targetId: '#services'
    },
    {
      title: 'Hair & Scalp',
      description: 'Scalp therapy & hair support',
      image: '/images/service_hair_scalp.jpg',
      targetId: '#popular-treatments'
    },
    {
      title: 'Laser Hair Reduction',
      description: 'Small area & full-body options',
      image: '/images/treatment_laser_legs.jpg',
      targetId: '#popular-treatments'
    },
    {
      title: 'Body Treatments',
      description: 'Pigmentation & tanning care',
      image: '/images/service_body_new.jpg',
      targetId: '#services'
    },
    {
      title: 'IV Drips & Weight',
      description: 'Wellness & weight management',
      image: '/images/service_iv_new.jpg',
      targetId: '#services'
    },
    {
      title: 'Mental Wellness',
      description: 'Private emotional support',
      image: '/images/service_wellness_new.jpg',
      targetId: '#services'
    },
    {
      title: 'Skin & Hair Analysis',
      description: 'AI evaluation before treatment',
      image: '/images/treatment_hydra.jpg',
      targetId: '#services'
    }
  ];

  const handleScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#FBF8F3] py-12 px-4 lg:px-10 border-b border-[#EAD7C5]/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#2C1B18] leading-tight">
            Find the Treatment Category You’re Looking For
          </h2>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {serviceCategories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleScroll(item.targetId)}
              className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden border border-[#EAD7C5]/70 hover:border-[#4A151B] transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B18]/90 via-[#2C1B18]/40 to-transparent group-hover:from-[#4A151B]/95 transition-colors duration-300" />

              {/* Text Content Overlay */}
              <div className="relative z-10 p-3.5 text-white">
                <h3 className="font-serif text-base sm:text-lg font-medium leading-tight mb-1 group-hover:translate-x-0.5 transition-transform">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => handleScroll('#services')}
            className="inline-flex items-center justify-center gap-2 bg-[#4A151B] hover:bg-[#381014] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200"
          >
            <span>Explore All Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
