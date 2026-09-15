import React from "react";
import { ShieldCheck, ArrowRight, CheckCircle2, Clock, Target, Zap, FileCheck, X } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const BusyProfessionalSpotlight: React.FC = () => {
  const metricIcons = [Clock, Target, Zap, FileCheck];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            The Co-Pilot Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Designed for Busy Professionals Who Want Better Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Running a serious career search requires 15–20 hours every week. When you're managing projects, team meetings, and deliverables, job searching stalls. CareerPilot steps in as your dedicated execution team.
          </p>
        </div>

        {/* 4 Value Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.busyProfessionalMetrics.map((item, idx) => {
            const Icon = metricIcons[idx] || Clock;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3E4C9A]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] border border-[#3E4C9A]/15 text-[#3E4C9A] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      Metric 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-3xl font-black text-[#0B132B] tracking-tight mb-2 group-hover:text-[#3E4C9A] transition-colors">
                    {item.metric}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Hands-off Concierge Execution</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Co-Pilot vs Doing It Alone Comparison Executive Board */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0B132B] text-white p-8 sm:p-10 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#34D399] block mb-2">
              Strategic Executive Comparison
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
              The DIY Job Hunt Struggle vs. CareerPilot Concierge
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Left: Doing It Alone */}
            <div className="rounded-2xl bg-[#1C2541]/50 border border-white/[0.08] p-6 sm:p-7 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-rose-400 block mb-2">
                Doing It Alone While Working
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                15–20 Hours/Week of High Stress
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Exhausted evenings: scrolling portals at 11 PM after 10 hours of meetings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Repetitive portal forms: filling out 30-minute employer questionnaires on weekends</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Missed 48-hour windows: top-tier high-paying roles close before you get time to apply</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Zero recruiter bandwidth: no time to identify talent partners or request alumni referrals</span>
                </li>
              </ul>
            </div>

            {/* Right: With CareerPilot Partners */}
            <div className="rounded-2xl bg-gradient-to-b from-[#1C2541] to-[#101A36] border-2 border-blue-400/50 p-6 sm:p-7 shadow-2xl relative">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#070B19] bg-[#34D399] px-3 py-0.5 rounded-full inline-block mb-3 font-semibold">
                With CareerPilot as Your Co-Pilot
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                ~30 Minutes/Week to Review Results
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-white">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Daily curated discovery matching your exact target compensation & seniority</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>LinkedIn & Naukri applications submitted according to your agreed criteria</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Strategic recruiter outreach & internal alumni referral requests handled for you</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Transparent Friday intelligence digest tracking every submission, email, and response</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#34D399]" />
              <span>You retain 100% control over target companies, salary expectations, and privacy parameters.</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] hover:from-[#4859b3] hover:to-[#5a74cb] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg shadow-md shrink-0"
            >
              <span>Get Started With Your Co-Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

