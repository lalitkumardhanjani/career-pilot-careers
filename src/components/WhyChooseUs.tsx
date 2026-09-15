import React from "react";
import { FileCheck, Target, Layers, BarChart4, Check } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const WhyChooseUs: React.FC = () => {
  const pillarIcons = [FileCheck, Target, Layers, BarChart4];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EAF1FA] px-3.5 py-1.5 rounded-full inline-block mb-4">
            The Strategic Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            More Than Applications. <br className="hidden sm:inline" />
            <span className="text-[#3E4C9A]">A Smarter Job-Search Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A506B] leading-relaxed">
            By unifying professional profile alignment with coordinated LinkedIn and Naukri application workflows and proactive recruiter outreach, we give your search structured momentum.
          </p>
        </div>

        {/* 4 Credibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.credibilityPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Check;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-[#F8FAFC] border border-[#DCE6F2] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#3E4C9A]/50 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF1FA] border border-[#DCE6F2] flex items-center justify-center text-[#3E4C9A] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B] mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#3A506B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE6F2]/70 flex items-center gap-2 text-xs text-[#20A486] font-semibold">
                  <Check className="w-3.5 h-3.5" />
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
