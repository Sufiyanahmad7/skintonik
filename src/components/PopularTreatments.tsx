import React, { useState } from 'react';
import { ChevronDown, Sparkles, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../data/images';

interface PackageOption {
  code: string;
  name: string;
  details: string;
  listPrice?: string;
  festivePrice?: string;
  save?: string;
  price?: string;
  emi?: string;
  badge?: string;
}

interface TableRow {
  col1: string;
  col2: string;
  col3?: string;
}

interface TreatmentSectionData {
  id: string;
  categoryTag: string;
  mainTitle: string;
  description: string;
  keywords: string[];
  image: string;
  imagePosition?: string;
  packages: PackageOption[];
  tableHeading: string;
  tableHeaders: [string, string, string?];
  tableRows: TableRow[];
  note?: string;
}

const POPULAR_SECTIONS_DATA: TreatmentSectionData[] = [
  {
    id: 'hydrafacial',
    categoryTag: 'Facials',
    mainTitle: 'HydraFacial in Bangalore: Festive Glow Duo ₹4,250',
    description: 'A HydraFacial at Skintonik is ₹3,000. This festive season the Glow Duo adds a Party Peel for ₹4,250 in total, couples can book side-by-side HydraFacials, and the 3-session Deepavali Radiance series builds glow over 2–3 weeks. Book 3–5 days before a function so skin has time to settle.',
    keywords: [
      'HydraFacial price Bangalore',
      'medi facial',
      'bridal facial',
      'couple facial',
      'glow facial near me'
    ],
    image: IMAGES.treatments.hydra,
    packages: [
      {
        code: 'O1 · HydraFacial + Party Peel',
        name: 'Dasara Glow Duo',
        details: 'HydraFacial + Party Peel, one visit',
        listPrice: '₹5,000',
        festivePrice: '₹4,250',
        save: '₹750',
        badge: '+ free AI skin analysis'
      },
      {
        code: 'O2 · Couple facial',
        name: 'Couple Glow',
        details: '2 HydraFacials, booked together, side by side',
        listPrice: '₹6,000',
        festivePrice: '₹5,100',
        save: '₹900',
        badge: '+ AI analysis for both'
      },
      {
        code: 'O3 · 3-session series',
        name: 'Deepavali Radiance',
        details: 'Signature Facial + Vitamin C Peel + HydraFacial over 2–3 weeks',
        listPrice: '₹18,000',
        festivePrice: '₹15,300',
        save: '₹2,700',
        emi: 'No-cost EMI ₹2,550/month × 6'
      }
    ],
    tableHeading: 'Medi facial menu and prices',
    tableHeaders: ['Facial', 'Price per session', ''],
    tableRows: [
      { col1: 'Party Peel', col2: '₹2,000' },
      { col1: 'HydraFacial', col2: '₹3,000' },
      { col1: 'Vampire Facial', col2: '₹7,000' },
      { col1: 'Celebrity Glow Facial', col2: '₹10,000' },
      { col1: 'Signature Skintonik Facial', col2: '₹10,000' }
    ],
    note: 'Packages of 3 or more sessions: 10–15% off.'
  },
  {
    id: 'acne',
    categoryTag: 'Acne and acne scars',
    mainTitle: 'Acne Treatment in Bangalore: Clear-Skin Reset ₹8,500',
    description: "Active acne and acne marks are two different jobs. Salicylic peels calm oily, breakout-prone skin first. Then MNRF, Dermapen microneedling or a TCA peel work on the scars left behind. Your AI skin analysis decides the order, so you don't pay twice.",
    keywords: [
      'acne scar treatment Bangalore',
      'pimple treatment',
      'MNRF treatment price',
      'microneedling',
      'acne treatment near me'
    ],
    image: IMAGES.results.acne,
    packages: [
      {
        code: 'O4 · Pimple treatment',
        name: 'Clear-Skin Reset',
        details: '4 Salicylic Acid peels for active acne and oily skin',
        listPrice: '₹10,000',
        festivePrice: '₹8,500',
        save: '₹1,500',
        badge: '+ free AI skin analysis'
      }
    ],
    tableHeading: 'Acne scar treatment prices: MNRF, Dermapen, TCA',
    tableHeaders: ['Treatment', 'For', 'Price per session'],
    tableRows: [
      { col1: 'Salicylic Acid Peel', col2: 'Active acne, oily skin, blackheads', col3: '₹2,500' },
      { col1: 'TCA Peel', col2: 'Acne scars, deeper texture', col3: '₹2,500' },
      { col1: 'Mandelic Acid Peel', col2: 'Acne-prone, sensitive skin', col3: '₹3,000' },
      { col1: 'Retinol Peel', col2: 'Acne and renewal', col3: '₹3,000' },
      { col1: 'Azelaic Acid Peel', col2: 'Post-acne marks', col3: '₹5,000' },
      { col1: 'Dermapen (microneedling)', col2: 'Scars and texture', col3: '₹7,000' },
      { col1: 'MNRF', col2: 'Scars and texture', col3: '₹7,000' },
      { col1: 'PRP (skin)', col2: 'Rejuvenation, often with microneedling', col3: '₹8,000' }
    ]
  },
  {
    id: 'pigmentation',
    categoryTag: 'Even tone, never "fairness"',
    mainTitle: 'Pigmentation Treatment in Bangalore: 4-Peel Even-Tone Series ₹13,600',
    description: "Tan, post-acne marks, melasma and dark underarms or neck look alike but respond to different chemical peels. Skintonik's pigmentation treatment starts with an AI skin analysis, then a peel plan spaced by how your skin responds, with the total price in writing.",
    keywords: [
      'chemical peel price Bangalore',
      'melasma treatment',
      'tan removal treatment',
      'dark underarms treatment',
      'glycolic peel'
    ],
    image: IMAGES.treatments.peels,
    packages: [
      {
        code: 'O5 · Chemical peel series',
        name: 'Even-Tone Peel Series',
        details: '2 Glycolic + 2 Vitamin C peels for tan, dullness and uneven tone',
        listPrice: '₹16,000',
        festivePrice: '₹13,600',
        save: '₹2,400',
        emi: 'No-cost EMI ₹2,267/month × 6'
      }
    ],
    tableHeading: 'Chemical peel menu and prices',
    tableHeaders: ['Peel', 'Best for', 'Price'],
    tableRows: [
      { col1: 'Lactic Acid', col2: 'Dry, sensitive, dull skin', col3: '₹2,500' },
      { col1: 'TCA (medium)', col2: 'Acne scars, deeper texture, pigmentation', col3: '₹2,500' },
      { col1: 'Glycolic Acid', col2: 'Dullness, tan, fine lines', col3: '₹3,000' },
      { col1: 'Mandelic Acid', col2: 'Acne-prone or sensitive skin with pigmentation', col3: '₹3,000' },
      { col1: 'Retinol', col2: 'Acne, pigmentation, renewal', col3: '₹3,000' },
      { col1: 'Azelaic Acid', col2: 'Post-acne marks, pigmentation', col3: '₹5,000' },
      { col1: 'Vitamin C', col2: 'Dullness, tan, uneven tone', col3: '₹5,000' },
      { col1: 'Ferulic Acid', col2: 'Dullness, sun-related ageing', col3: '₹5,000' },
      { col1: 'Individual body part peel', col2: 'Underarms, neck or knees', col3: '₹7,000' },
      { col1: 'Combination peel', col2: 'Two concerns at once', col3: '₹10,000' },
      { col1: 'Full body tanning / pigmentation peel', col2: 'Body tan and uneven tone', col3: '₹15,000' },
      { col1: 'Meline / Cosmelan', col2: 'Advanced pigmentation, doctor-assessed', col3: '₹75,000 / ₹80,000' }
    ]
  },
  {
    id: 'laser',
    categoryTag: 'Laser hair reduction',
    mainTitle: 'Laser Hair Removal in Bangalore: 6-Session Packages from ₹15,299',
    description: "Looking for laser hair removal in Bangalore with the price shown up front? Skintonik's laser hair reduction packages on Sarjapur Road include 6 sessions, a patch test before your first session and a free AI skin analysis. Fewer waxing appointments, fewer ingrown hairs, and one price you know on day one.",
    keywords: [
      'laser hair removal price Bangalore',
      'full body laser hair removal price',
      'underarm laser hair removal',
      'laser hair removal for men',
      'laser hair removal near me'
    ],
    image: IMAGES.treatments.laser,
    imagePosition: 'object-left-bottom',
    packages: [
      {
        code: 'O6 · Underarm laser hair removal',
        name: 'Smooth Starter',
        details: 'Underarms + upper lip + chin · 6 sessions',
        listPrice: '₹17,999',
        festivePrice: '₹15,299',
        save: '₹2,700',
        emi: 'No-cost EMI ₹2,550/month × 6'
      },
      {
        code: 'O7 · Full body laser hair removal price',
        name: 'Full Body Laser',
        details: 'Full body · 6 sessions',
        listPrice: '₹60,000',
        festivePrice: '₹51,000',
        save: '₹9,000',
        emi: 'No-cost EMI ₹8,500/month × 6'
      }
    ],
    tableHeading: 'Is laser hair removal safe for Indian skin? Areas and prices',
    tableHeaders: ['Area', 'Sessions', 'Price'],
    tableRows: [
      { col1: 'Underarms + upper lip + chin', col2: '6', col3: '₹15,299 festive (₹17,999)' },
      { col1: 'Full body', col2: '6', col3: '₹51,000 festive (₹60,000)' },
      { col1: 'Face, arms, legs, back, chest, bikini, beard line (men)', col2: 'As planned', col3: 'Priced in writing at consultation' }
    ],
    note: "Indian skin needs laser settings chosen for skin type and hair type, so every course starts with an assessment and a patch test. If laser isn't suitable for you, we'll say so before you pay."
  },
  {
    id: 'hair',
    categoryTag: 'Hair fall and thinning',
    mainTitle: 'Hair Fall Treatment in Bangalore: 4 GFC Sessions ₹27,200',
    description: "Start with data, not guesswork. An AI hair analysis reads scalp condition and density, then your doctor recommends GFC, PRP, QR678 or exosomes, with every option priced side by side. Results vary from person to person, and you'll hear a realistic timeline before you pay.",
    keywords: [
      'GFC hair treatment cost',
      'PRP hair treatment Bangalore',
      'QR678 treatment',
      'hair thinning treatment for women',
      'hair fall treatment near me'
    ],
    image: IMAGES.treatments.hair,
    imagePosition: 'object-left-bottom',
    packages: [
      {
        code: 'O8 · GFC hair treatment',
        name: 'Dhanteras Hair Plan',
        details: 'AI hair analysis, then 4 GFC sessions',
        listPrice: '₹32,000',
        festivePrice: '₹27,200',
        save: '₹4,800',
        emi: 'No-cost EMI ₹4,533/month × 6'
      }
    ],
    tableHeading: 'GFC vs PRP vs QR678: hair treatment prices',
    tableHeaders: ['Treatment', 'What it is', 'Price per session'],
    tableRows: [
      { col1: 'Scalp Therapy', col2: 'Cleansing and scalp care', col3: '₹2,000' },
      { col1: 'Anti-Dandruff Therapy', col2: 'Dandruff and flaky scalp', col3: '₹3,000' },
      { col1: 'PRP', col2: 'Platelet-rich plasma from your own blood', col3: '₹7,000' },
      { col1: 'GFC', col2: 'Growth factor concentrate from your own blood', col3: '₹8,000' },
      { col1: 'Exosomes', col2: 'Regenerative scalp treatment', col3: '₹10,000' },
      { col1: 'QR678', col2: 'Peptide-based scalp injections', col3: '₹12,000' },
      { col1: 'Peptide-Based Hair Filler', col2: 'Advanced peptide treatment', col3: '₹45,000' }
    ]
  },
  {
    id: 'bridal',
    categoryTag: 'Weddings',
    mainTitle: 'Pre Bridal Skin Treatment in Bangalore: Plan by Your Wedding Date',
    description: 'Count back from the date. Twelve weeks out, start laser, because 6 sessions need time. Six to eight weeks out, peels for tan and even tone. Two to three weeks out, the Radiance facial series. Three to five days before, a final HydraFacial. Nothing new in the last 72 hours. Grooms and family members can join the same plan.',
    keywords: [
      'bridal skin package price',
      'groom facial',
      'pre wedding skin care',
      'couple facial Bangalore'
    ],
    image: IMAGES.ctaModel,
    packages: [
      {
        code: "O9 · Groom skin package",
        name: "Groom's Grooming Kit",
        details: 'HydraFacial + Salicylic Peel + Scalp Therapy, in 2 visits',
        listPrice: '₹7,500',
        festivePrice: '₹6,375',
        save: '₹1,125',
        badge: '+ free AI skin analysis'
      },
      {
        code: '10 · Bridal glow series',
        name: 'Deepavali Radiance',
        details: 'Signature Facial + Vitamin C Peel + HydraFacial over 2–3 weeks',
        listPrice: '₹18,000',
        festivePrice: '₹15,300',
        save: '₹2,700',
        emi: 'No-cost EMI ₹2,550/month × 6'
      }
    ],
    tableHeading: 'Pre-Bridal Planning Timeline',
    tableHeaders: ['Timeline', 'Recommended Treatments', 'Goal'],
    tableRows: [
      { col1: '12 Weeks Out', col2: 'Start Laser Hair Reduction (6 sessions)', col3: 'Long-term smooth skin' },
      { col1: '6–8 Weeks Out', col2: 'Chemical Peels (Even-Tone series)', col3: 'Tan removal & pigmentation' },
      { col1: '2–3 Weeks Out', col2: 'Deepavali Radiance Facial series', col3: 'Deep hydration & radiance' },
      { col1: '3–5 Days Out', col2: 'Final HydraFacial', col3: 'Instant wedding glow' }
    ]
  },
  {
    id: 'antiageing',
    categoryTag: 'Doctor-assessed',
    mainTitle: 'Anti Ageing Treatment in Bangalore, Planned by a Doctor',
    description: 'Anti-wrinkle treatment, dermal fillers, thread lift, skin boosters and RF skin tightening are medical decisions. The product, dose and placement depend on your face, not the calendar, so these are priced in writing after a doctor\'s assessment. No-cost EMI is available.',
    keywords: [
      'anti wrinkle treatment',
      'skin boosters Bangalore',
      'Profhilo price',
      'thread lift cost',
      'RF skin tightening'
    ],
    image: IMAGES.treatments.tightening,
    packages: [],
    tableHeading: 'Anti-ageing price guide (final price after assessment)',
    tableHeaders: ['Treatment', 'Price guide', ''],
    tableRows: [
      { col1: 'RF skin tightening', col2: '₹5,000 per session' },
      { col1: 'Anti-wrinkle injections', col2: '₹5,000–₹1,00,000' },
      { col1: 'PDRN', col2: '₹10,000 per session' },
      { col1: 'Exosomes (skin)', col2: '₹12,000 per session' },
      { col1: 'Dermal fillers', col2: '₹30,000–₹1,50,000' },
      { col1: 'Thread lift', col2: '₹30,000–₹1,80,000' },
      { col1: 'Skin boosters', col2: '₹50,000' },
      { col1: 'Baby Glow', col2: '₹60,000' },
      { col1: 'Profhilo', col2: '₹70,000' }
    ],
    note: 'No festive discounts on injectables. Book a doctor consultation; your plan and its full cost come in writing before any treatment.'
  }
];

export const PopularTreatments: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [expandedTable, setExpandedTable] = useState<boolean>(false);

  const currentSec = POPULAR_SECTIONS_DATA[activeSlideIndex];

  const handleBookClick = () => {
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

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? POPULAR_SECTIONS_DATA.length - 1 : prev - 1));
    setExpandedTable(false);
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev === POPULAR_SECTIONS_DATA.length - 1 ? 0 : prev + 1));
    setExpandedTable(false);
  };

  const handleSelectTab = (index: number) => {
    setActiveSlideIndex(index);
    setExpandedTable(false);
  };

  return (
    <section id="popular-treatments" className="bg-[#FBF8F3] py-7 px-3 sm:px-6 lg:px-10 border-b border-[#EAD7C5]/40">
      <div className="max-w-6xl mx-auto">
        {/* CENTERED SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6 relative">
          <span className="text-xs font-bold tracking-[0.2em] text-[#271446] uppercase block mb-1.5">
            POPULAR TREATMENTS IN BANGALORE
          </span>
          <h2 
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#271446] leading-tight"
          >
            Our Most Popular Treatment Options
          </h2>

          {/* ARROW NAV BUTTONS & COUNTER */}
          <div className="flex items-center justify-center space-x-3 mt-3">
            <button
              onClick={handlePrev}
              aria-label="Previous treatment"
              className="w-8 h-8 rounded-full bg-white border border-[#EAD7C5] shadow-xs flex items-center justify-center text-[#271446] hover:bg-[#271446] hover:text-[#F8DB66] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#271446] font-medium px-2">
              <strong className="text-[#271446]">{activeSlideIndex + 1}</strong> / {POPULAR_SECTIONS_DATA.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next treatment"
              className="w-8 h-8 rounded-full bg-white border border-[#EAD7C5] shadow-xs flex items-center justify-center text-[#271446] hover:bg-[#271446] hover:text-[#F8DB66] transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CATEGORY TABS BAR */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 pb-2 mb-4">
          {POPULAR_SECTIONS_DATA.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => handleSelectTab(idx)}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs transition-all cursor-pointer ${activeSlideIndex === idx
                ? 'bg-[#271446] text-[#F8DB66] font-bold shadow-xs'
                : 'bg-white text-[#271446] border border-[#EAD7C5]/60 hover:bg-[#271446] hover:text-[#F8DB66]'
                }`}
            >
              {sec.categoryTag}
            </button>
          ))}
        </div>

        {/* COMPACT CARD CONTAINER */}
        <div className="bg-white rounded-xl border border-[#EAD7C5]/80 shadow-md p-4 sm:p-5 lg:p-6 transition-all duration-300">
          {/* TOP GRID: LEFT CONTENT + RIGHT IMAGE & PACKAGES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* LEFT DETAILS (7 COLS) */}
            <div className="lg:col-span-7 space-y-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#271446] text-[#F8DB66] text-[10px] font-bold tracking-wider uppercase mb-1.5">
                  {currentSec.categoryTag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#271446] leading-tight">
                  {currentSec.mainTitle}
                </h3>
              </div>

              <p className="text-xs text-[#271446] leading-relaxed font-normal">
                {currentSec.description}
              </p>

              {/* SEO KEYWORDS CHIPS */}
              <div className="flex flex-wrap gap-1">
                {currentSec.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="bg-[#FBF8F3] border border-[#EAD7C5] text-[#271446] text-[10px] px-2 py-0.5 rounded font-medium"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT COMPACT IMAGE (5 COLS) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-[#EAD7C5] shadow-2xs h-48 sm:h-56 lg:h-52 w-full bg-[#F3EDE2] flex items-center justify-center p-1">
                <img
                  src={currentSec.image}
                  alt={currentSec.mainTitle}
                  className={`w-full h-full object-cover rounded ${currentSec.imagePosition || 'object-center'}`}
                />
              </div>
            </div>
          </div>

          {/* COMPACT FEATURED PACKAGES GRID */}
          {currentSec.packages.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#EAD7C5]/60">
              <span className="text-[10px] font-bold tracking-wider text-[#271446] uppercase mb-2 block">
                Featured Packages
              </span>
              <div
                className={`grid grid-cols-1 ${currentSec.packages.length === 1
                    ? 'max-w-md mx-auto'
                    : currentSec.packages.length === 2
                      ? 'sm:grid-cols-2 max-w-2xl mx-auto'
                      : 'sm:grid-cols-2 lg:grid-cols-3'
                  } gap-3`}
              >
                {currentSec.packages.map((pkg, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FBF8F3] border border-[#EAD7C5] rounded-lg p-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-bold text-[#271446]/80 tracking-wider uppercase">
                          {pkg.code}
                        </span>
                        {pkg.badge && (
                          <span className="bg-[#271446] text-[#F8DB66] text-[9px] font-bold px-1.5 py-0.2 rounded">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <h5 className="font-serif text-sm font-bold text-[#271446] leading-tight">
                        {pkg.name}
                      </h5>
                      <p className="text-[11px] text-[#52413E] mb-2 line-clamp-1">
                        {pkg.details}
                      </p>

                      <div className="flex items-baseline justify-between bg-white px-2 py-1.5 rounded border border-[#EAD7C5] mb-2 text-xs">
                        {pkg.listPrice && (
                          <span className="line-through text-[10px] text-[#52413E]/70">{pkg.listPrice}</span>
                        )}
                        {pkg.festivePrice && (
                          <span className="font-bold text-[#271446] text-sm">{pkg.festivePrice}</span>
                        )}
                        {pkg.save && (
                          <span className="text-[10px] text-emerald-700 font-semibold">Save {pkg.save}</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handleBookClick}
                      className="w-full inline-flex items-center justify-center space-x-1 bg-[#271446] hover:bg-[#341b5c] text-[#F8DB66] font-semibold text-[11px] py-1.5 px-3 rounded transition-colors cursor-pointer"
                    >
                      <span>Choose Package</span>
                      <ArrowRight className="w-3 h-3 text-[#F8DB66]" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COMPACT PRICE TABLE TOGGLE */}
          <div className="mt-4 pt-3 border-t border-[#EAD7C5]/60">
            <button
              onClick={() => setExpandedTable(!expandedTable)}
              className="w-full flex items-center justify-between text-left group cursor-pointer py-1"
            >
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#271446]" />
                <span className="font-serif text-sm font-bold text-[#271446] group-hover:text-[#271446] transition-colors">
                  {currentSec.tableHeading}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-xs font-semibold text-[#271446]">
                <span>{expandedTable ? 'Hide Prices' : 'View Full Price List'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedTable ? 'rotate-180' : ''
                    }`}
                />
              </div>
            </button>

            {expandedTable && (
              <div className="mt-3 pt-2 border-t border-[#EAD7C5]/40">
                <div className="overflow-x-auto rounded-lg border border-[#EAD7C5]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#271446] text-[#F8DB66] font-serif font-bold border-b border-[#EAD7C5]">
                      <tr>
                        <th className="py-2 px-3">{currentSec.tableHeaders[0]}</th>
                        <th className="py-2 px-3">{currentSec.tableHeaders[1]}</th>
                        {currentSec.tableHeaders[2] && <th className="py-2 px-3">{currentSec.tableHeaders[2]}</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAD7C5] bg-white">
                      {currentSec.tableRows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#FBF8F3]">
                          <td className="py-2 px-3 font-semibold text-[#271446]">{row.col1}</td>
                          <td className="py-2 px-3 text-[#52413E]">{row.col2}</td>
                          {row.col3 && (
                            <td className="py-2 px-3 font-bold text-[#271446] whitespace-nowrap">
                              {row.col3}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {currentSec.note && (
                  <div className="mt-2 flex items-start space-x-1.5 text-[11px] text-[#52413E] bg-[#FBF8F3] p-2 rounded border border-[#EAD7C5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#271446] flex-shrink-0 mt-0.5" />
                    <span>{currentSec.note}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
