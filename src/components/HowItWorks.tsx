import React from "react";
import {
  MessageSquareText,
  FileCheck,
  Crosshair,
  SendHorizontal,
  LineChart,
  CheckCircle2,
  Info,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    MessageSquareText,
    FileCheck,
    Crosshair,
    SendHorizontal,
    LineChart,
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EAF1FA] px-3.5 py-1.5 rounded-full inline-block mb-4">
            Structured Onboarding & Execution
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            A Clear Process From Day One
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A506B] leading-relaxed">
            From your introductory consultation through ongoing weekly reporting, every milestone is structured, transparent, and aligned with your career trajectory.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {siteConfig.howItWorksSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            return (
              <div
                key={step.step}
                className="rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-[#F8FAFC] border border-[#DCE6F2] hover:border-[#3E4C9A]/40 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#3E4C9A] tracking-tight">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#3E4C9A]/10 text-[#3E4C9A]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAF1FA] text-[#3E4C9A]">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B132B] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3A506B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#DCE6F2]/70 flex items-center gap-1.5 text-[11px] text-[#20A486] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Step {step.step} Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Note on Expectations */}
        <div className="max-w-3xl mx-auto rounded-xl bg-[#EAF1FA] border border-[#DCE6F2] p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#0B132B] font-medium">
            <Info className="w-4 h-4 text-[#3E4C9A] shrink-0" />
            <span>{siteConfig.compliance.howItWorksNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
