import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BusyProfessionalSpotlight } from "./components/BusyProfessionalSpotlight";
import { CoreAIPillarsShowcase } from "./components/CoreAIPillarsShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { WeeklyReportPreview } from "./components/WeeklyReportPreview";
import { ClientTestimonials } from "./components/ClientTestimonials";
import { Pricing } from "./components/Pricing";
import { CompetitorComparison } from "./components/CompetitorComparison";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingConcierge } from "./components/FloatingConcierge";

export const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("india");

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B132B]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section (Upload Resume • We Pilot Complete Job Search) */}
        <Hero />

        {/* 3. Time-Saving Calculator & Comparison for Busy Working Professionals */}
        <BusyProfessionalSpotlight />

        {/* 4. 7 Core Services Interactive Showcase (Live ATS, Outreach, Referrals, Naukri) */}
        <CoreAIPillarsShowcase />

        {/* 5. How It Works (5-Step Process Timeline) */}
        <HowItWorks />

        {/* 6. Transparency Tracker (Weekly Activity Summary & Analytics Preview) */}
        <WeeklyReportPreview />

        {/* 7. Candidate Success Stories & Verified Reviews */}
        <ClientTestimonials />

        {/* 8. Pricing Plans with 14-Day 100% Refund Guarantee */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 9. Competitor Comparison Section (Dedicated Humans vs Automated Spam Bots) */}
        <CompetitorComparison />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. Consultation & Fast-Track Application Form */}
        <ContactSection selectedPlanId={selectedPlan} />
      </main>

      {/* Footer with Transparency & Disclaimers */}
      <Footer />

      {/* Floating Concierge Chat Desk */}
      <FloatingConcierge />
    </div>
  );
};

export default App;
