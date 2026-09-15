import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BusyProfessionalSpotlight } from "./components/BusyProfessionalSpotlight";
import { ProblemValue } from "./components/ProblemValue";
import { WhatsIncluded } from "./components/WhatsIncluded";
import { HowItWorks } from "./components/HowItWorks";
import { WeeklyReportPreview } from "./components/WeeklyReportPreview";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PrivacySection } from "./components/PrivacySection";
import { Pricing } from "./components/Pricing";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

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
        {/* 2. Hero Section (Focus on Your Work. We'll Pilot Your Next Move) */}
        <Hero />

        {/* 3. Time-Saving Spotlight for Busy Working Professionals */}
        <BusyProfessionalSpotlight />

        {/* 4. The Problem Section (A 9-to-6 Job Leaves Zero Hours) */}
        <ProblemValue />

        {/* 5. Services / What We Do (6 Cards: LinkedIn & Naukri Applications) */}
        <WhatsIncluded />

        {/* 6. How It Works (5-Step Process Timeline) */}
        <HowItWorks />

        {/* 7. Detailed Transparency Section (Weekly Activity Summary Preview) */}
        <WeeklyReportPreview />

        {/* 8. Why Choose Us (4 Credibility Pillars) */}
        <WhyChooseUs />

        {/* 9. Privacy and Onboarding Section */}
        <PrivacySection />

        {/* 10. Pricing Section (India & International Support Plans) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 11. FAQ Section (7 Detailed FAQs including Busy Professional Fit) */}
        <FAQSection />

        {/* 12. Final CTA Section */}
        <FinalCTA />

        {/* 13. Contact Section (Lead Form & Direct Channels) */}
        <ContactSection selectedPlanId={selectedPlan} />
      </main>

      {/* 14. Footer with Legal Disclaimers & Independent Notice */}
      <Footer />
    </div>
  );
};

export default App;
