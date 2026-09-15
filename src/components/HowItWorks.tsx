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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="how-it-works">
      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Structured Onboarding & Execution
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            A Clear 5-Step Process From Day One
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From your introductory consultation through ongoing Friday intelligence digests, every milestone is structured, transparent, and aligned with your career goals.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-14">
          {siteConfig.howItWorksSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle2;
            return (
              <div
                key={step.step}
                className="group rounded-2xl p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-[#F8FAFC] border border-slate-200/90 hover:border-[#3E4C9A]/50 hover:bg-white shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#0B132B] tracking-tight group-hover:text-[#3E4C9A] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] text-[#3E4C9A] border border-[#3E4C9A]/15 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EBF0FA] text-[#3E4C9A] border border-[#3E4C9A]/15">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B132B] mb-2 leading-snug group-hover:text-[#3E4C9A] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-[#10B981] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Milestone 0{step.step}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Note on Expectations */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-5 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
            <Info className="w-4 h-4 text-[#3E4C9A] shrink-0" />
            <span>{siteConfig.compliance.howItWorksNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

