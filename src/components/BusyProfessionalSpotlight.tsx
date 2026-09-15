import React from "react";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const BusyProfessionalSpotlight: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF] border-b border-[#DCE6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#20A486] bg-[#20A486]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            The Co-Pilot Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Designed for Busy Professionals Who Want Better Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A506B] leading-relaxed">
            Running a serious career search requires 15–20 hours every week. When you're managing meetings, deliverables, and life, job searching stalls. CareerPilot steps in as your execution team.
          </p>
        </div>

        {/* 4 Value Pillars for Busy Candidates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {siteConfig.busyProfessionalMetrics.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#DCE6F2] p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3E4C9A]/40 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#3E4C9A] tracking-tight mb-2">
                  {item.metric}
                </div>
                <h3 className="text-base font-bold text-[#0B132B] mb-2">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#3A506B] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE6F2]/60 flex items-center gap-1.5 text-xs font-semibold text-[#20A486]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Hands-off Execution</span>
              </div>
            </div>
          ))}
        </div>

        {/* Co-Pilot vs Doing It Alone Comparison Banner */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0B132B] text-white p-8 sm:p-10 border border-[#EAF1FA]/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Left: Doing It Alone */}
            <div className="rounded-2xl bg-[#1C2541]/70 border border-[#EAF1FA]/10 p-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 block mb-2">
                Doing It Alone While Working
              </span>
              <h4 className="text-lg font-bold text-white mb-4">
                15–20 Hours/Week of High Stress
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-[#EAF1FA]/75">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Browsing portals at 10 PM after exhausting workdays</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Filling out 30-minute employer forms on weekends</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Missing early applicant windows that close in 48 hours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>No bandwidth left for cold recruiter or referral outreach</span>
                </li>
              </ul>
            </div>

            {/* Right: With CareerPilot Partners */}
            <div className="rounded-2xl bg-gradient-to-b from-[#1C2541] to-[#122247] border border-[#3E4C9A] p-6 shadow-xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#3E4C9A] bg-[#EAF1FA] px-2.5 py-0.5 rounded-full inline-block mb-3 font-semibold">
                With CareerPilot as Your Co-Pilot
              </span>
              <h4 className="text-lg font-bold text-white mb-4">
                ~30 Minutes/Week to Review Results
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-white">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#20A486] font-bold">✓</span>
                  <span>Daily curated discovery matching your exact target role</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#20A486] font-bold">✓</span>
                  <span>LinkedIn & Naukri applications submitted according to your criteria</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#20A486] font-bold">✓</span>
                  <span>Strategic recruiter & alumni referral outreach handled for you</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#20A486] font-bold">✓</span>
                  <span>Transparent Friday digest tracking every single submission</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EAF1FA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-[#EAF1FA]/80">
              <ShieldCheck className="w-4 h-4 text-[#20A486]" />
              <span>You retain 100% control over which roles and companies are targeted.</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#20A486] hover:bg-[#17856d] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-md"
            >
              <span>Get Your Co-Pilot Today</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
