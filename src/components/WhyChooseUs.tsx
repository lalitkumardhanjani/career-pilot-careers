import React from "react";
import { FileCheck, Target, Layers, BarChart4, Check, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const WhyChooseUs: React.FC = () => {
  const pillarIcons = [FileCheck, Target, Layers, BarChart4];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            The Strategic Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            More Than Applications. <br className="hidden sm:inline" />
            <span className="text-[#3E4C9A]">A Smarter Job-Search Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            By unifying executive resume alignment with coordinated LinkedIn and Naukri application execution and proactive recruiter outreach, we give your career search structured momentum.
          </p>
        </div>

        {/* 4 Credibility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.credibilityPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Check;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#3E4C9A]/50 hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] border border-[#3E4C9A]/15 flex items-center justify-center text-[#3E4C9A] mb-6 group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B132B] mb-2.5 group-hover:text-[#3E4C9A] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#10B981] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard Concierge Service</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

