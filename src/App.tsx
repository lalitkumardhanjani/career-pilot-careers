import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { CoreAIPillarsShowcase } from "./components/CoreAIPillarsShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { WeeklyReportPreview } from "./components/WeeklyReportPreview";
import { BusyProfessionalSpotlight } from "./components/BusyProfessionalSpotlight";
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
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. What Our Dedicated Career Team Executes For You Every Day */}
        <CoreAIPillarsShowcase />

        {/* 2. How We Work With You Step-by-Step */}
        <HowItWorks />

        {/* 3. Know Exactly What Is Being Done for Your Career */}
        <WeeklyReportPreview />

        {/* 4. Made for Busy Working Professionals & Doing It Alone vs Having CareerPilot */}
        <BusyProfessionalSpotlight />

        {/* 5. Honest Feedback from Working Professionals */}
        <ClientTestimonials />

        {/* 6. Simple Month-to-Month Pricing • Cancel Anytime */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 7. Dedicated Career Team vs Automated Form Bots */}
        <CompetitorComparison />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Let’s Discuss Your Career Objectives */}
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
