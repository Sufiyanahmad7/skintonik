import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TreatmentCategories } from '../components/TreatmentCategories';
import { OfferBanner } from '../components/OfferBanner';
import { PopularTreatments } from '../components/PopularTreatments';
import { ServicesGrid } from '../components/ServicesGrid';
import { WhySkintonik } from '../components/WhySkintonik';
import { ResultsSection } from '../components/ResultsSection';
import { JourneySection } from '../components/JourneySection';
import { ClinicSection } from '../components/ClinicSection';
import { FinalCTA } from '../components/FinalCTA';
import { PopularSearches } from '../components/PopularSearches';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] overflow-x-hidden">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. HERO SECTION */}
        <Hero />

        {/* 3. TREATMENT CATEGORY ICON BAR */}
        <TreatmentCategories />

        {/* 4. FESTIVE OFFER BANNER */}
        <OfferBanner />

        {/* 5. POPULAR TREATMENTS */}
        <PopularTreatments />

        {/* 6. EXPLORE ALL SERVICES */}
        <ServicesGrid />

        {/* 7. WHY SKINTONIK BANGALORE */}
        <WhySkintonik />

        {/* 8. REAL PEOPLE. REAL RESULTS. */}
        <ResultsSection />

        {/* 9. SKINTONIK JOURNEY */}
        <JourneySection />

        {/* 10. BANGALORE CLINIC */}
        <ClinicSection />

        {/* 11. FINAL CTA */}
        <FinalCTA />
      </main>

      {/* 12. POPULAR SEARCHES */}
      <PopularSearches />
    </div>
  );
};
