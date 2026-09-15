import React from "react";
import { Check, ArrowRight, Shield, AlertCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const handleSelectPlan = (planId: string) => {
    if (onSelectPlan) {
      onSelectPlan(planId);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EAF1FA] px-3.5 py-1.5 rounded-full inline-block mb-4">
            Transparent Concierge Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Simple Monthly Career Support
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A506B] leading-relaxed">
            Straightforward month-to-month concierge support for professionals seeking roles in India or internationally.
          </p>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {siteConfig.pricing.map((plan) => {
            const isIndia = plan.id === "india";
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl bg-white border border-[#DCE6F2] hover:border-[#3E4C9A]/50 shadow-sm ${
                  isIndia
                    ? "ring-1 ring-[#3E4C9A]/20"
                    : "ring-1 ring-[#3E4C9A]/10"
                }`}
              >
                {/* Plan Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EAF1FA] text-[#3E4C9A]">
                    {plan.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#3A506B]/80 font-medium">
                    <Shield className="w-3.5 h-3.5 text-[#3E4C9A]" />
                    <span>Month-to-Month</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#0B132B] tracking-tight mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3A506B] min-h-[38px] mb-6 leading-relaxed">
                    <span className="font-semibold text-[#0B132B]">Best for:</span> “{plan.bestFor}”
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pb-6 border-b border-[#DCE6F2] mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-[#3A506B] font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#20A486]/15 text-[#20A486] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-[#1C2541] leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 ${
                      isIndia
                        ? "bg-[#3E4C9A] hover:bg-[#4d5cb3] focus:ring-[#3E4C9A]"
                        : "bg-[#0B132B] hover:bg-[#1C2541] focus:ring-[#0B132B]"
                    }`}
                  >
                    <span>Start Your Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Below Pricing Cards: Tailoring statement & Platform Premium Note */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="rounded-2xl bg-[#EAF1FA] border border-[#DCE6F2] p-5 text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#0B132B] mb-1">
              Your plan is tailored to your career goals, experience, target market, and platform eligibility.
            </p>
            <p className="text-xs text-[#3A506B]">
              *{siteConfig.compliance.platformPremiumNote}
            </p>
          </div>

          {/* Required Disclaimer */}
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#DCE6F2] p-5 text-center">
            <div className="flex items-start sm:items-center justify-center gap-2.5 text-xs text-[#3A506B] leading-relaxed">
              <AlertCircle className="w-4 h-4 text-[#3E4C9A] shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong className="text-[#0B132B]">Disclaimer:</strong> {siteConfig.compliance.pricingDisclaimer}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
