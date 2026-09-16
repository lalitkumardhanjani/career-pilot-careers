import React, { useState } from "react";
import { Check, ArrowRight, Shield, AlertCircle, Sparkles, TrendingUp, ShieldCheck, RotateCcw, Clock, FileText } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { CancellationPolicyModal } from "./CancellationPolicyModal";

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);

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
    <section className="py-20 lg:py-28 bg-white relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Simple Month-to-Month Pricing • Cancel Anytime
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No long-term contracts. Full resume rewrite, direct emails to hiring managers, employee referrals, and tailored applications with all tools and software fees 100% covered.
          </p>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-10 sm:mb-12">
          {siteConfig.pricing.map((plan) => {
            const isIndia = plan.id === "india";
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl bg-[#F8FAFC] border hover:bg-white ${
                  isIndia
                    ? "border-blue-500/40 ring-2 ring-[#3E4C9A]/20 shadow-lg"
                    : "border-slate-200/90 hover:border-slate-300 shadow-sm"
                }`}
              >
                {/* Popular Pill for India plan */}
                {isIndia && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider py-1 px-3.5 sm:px-4 rounded-full shadow-md whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular • India Roles
                    </span>
                  </div>
                )}

                {/* Plan Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-[#EBF0FA] text-[#3E4C9A] border border-[#3E4C9A]/15">
                    {plan.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Shield className="w-3.5 h-3.5 text-[#3E4C9A]" />
                    <span>Month-to-Month</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B132B] tracking-tight mb-1.5 sm:mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 min-h-[32px] sm:min-h-[38px] mb-5 sm:mb-6 leading-relaxed">
                    <span className="font-semibold text-slate-800">Best for:</span> “{plan.bestFor}”
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pb-5 sm:pb-6 border-b border-slate-200 mb-5 sm:mb-6">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B132B] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-base text-slate-500 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 sm:gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
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
                    className={`w-full inline-flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm md:text-base py-3.5 px-4 sm:px-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 ${
                      isIndia
                        ? "bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] hover:from-[#4859b3] hover:to-[#5571d4] shadow-[#3E4C9A]/25 focus:ring-[#3E4C9A]"
                        : "bg-slate-900 hover:bg-slate-800 shadow-slate-900/20 focus:ring-slate-900"
                    }`}
                  >
                    <span>Select {plan.badge} & Schedule Call</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2.5 font-medium flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>14-Day 100% Money-Back Guarantee • Cancel anytime</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 14-Day 100% Money-Back Opportunity Guarantee & Cancellation Policy Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#0E1B3E] to-[#0B132B] border border-emerald-400/40 p-6 sm:p-8 md:p-10 shadow-2xl text-white mb-8 relative overflow-hidden group">
          {/* Ambient Glows */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-[#34D399] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Zero-Risk Opportunity Guarantee</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Interview Opportunities in 2 Weeks or 100% Full Money Back
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                If our dedicated career team does not deliver relevant interview opportunities matching your target role, compensation floor, and seniority criteria within your first <strong>14 calendar days (2 weeks)</strong>, your entire payment will be <strong>100% refunded</strong> immediately. Zero hassle, zero hidden fees, and cancel anytime.
              </p>

              {/* 3 Quick Guarantee Checkpoints */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 p-2.5">
                  <RotateCcw className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-200">14-Day Evaluation Window</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 p-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-200">100% Full Refund Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 p-2.5">
                  <Clock className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-200">1-Click Cancel Anytime</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsRefundModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#34D399] hover:bg-emerald-400 text-[#070B19] font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Cancellation Policy</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Processed within 24 hours back to original bank / card
              </p>
            </div>
          </div>
        </div>

        {/* ROI Time-Value Callout Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-4 sm:p-7 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] text-[#3E4C9A] border border-[#3E4C9A]/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B132B]">
                  The High-ROI Investment in Your Time
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                  At a standard senior engineering / lead salary, 60–80 hours of your personal time each month is worth over ₹50,000+. For just ₹10,000/mo, your dedicated CareerPilot team protects your focus and executes your search continuously.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#3E4C9A] hover:text-[#4F67B8] shrink-0"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Below Pricing Cards: Tailoring statement & Disclaimer */}
        <div className="max-w-4xl mx-auto space-y-3 text-center">
          <p className="text-xs text-slate-500 italic">
            *{siteConfig.compliance.platformPremiumNote}
          </p>

          <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-4">
            <div className="flex items-start sm:items-center justify-center gap-2 text-xs text-slate-500 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 sm:mt-0" />
              <span>
                <strong className="text-slate-700">Disclaimer:</strong> {siteConfig.compliance.pricingDisclaimer}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cancellation & 100% Refund Policy Modal */}
      <CancellationPolicyModal
        isOpen={isRefundModalOpen}
        onClose={() => setIsRefundModalOpen(false)}
      />
    </section>
  );
};

