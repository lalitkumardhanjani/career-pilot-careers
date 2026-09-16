import React, { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  FileCheck,
  X,
  Calculator,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const BusyProfessionalSpotlight: React.FC = () => {
  const [weeklyJobHours, setWeeklyJobHours] = useState(50); // slider between 40 and 70 hours

  // Calculate dynamic ROI metrics
  const searchHoursNeededPerWeek = Math.round(15 + (weeklyJobHours - 40) * 0.1);
  const monthlyHoursReclaimed = searchHoursNeededPerWeek * 4;
  // Estimated hourly value based on ₹25L–₹50L annual CTC (~₹1,000 - ₹2,000 / hr)
  const conservativeTimeValueMonthly = monthlyHoursReclaimed * 1000;

  const metricIcons = [Clock, Target, Zap, FileCheck];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Why Professionals Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Made for Busy Working Professionals Who Want Better Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Running a proper job search takes 15 to 20 hours every single week. When you're working 9–10 hours a day, it's exhausting to search job boards, fix your resume, and message recruiters at night. CareerPilot takes care of everything for you.
          </p>
        </div>

        {/* INTERACTIVE CALCULATOR: Executive Time Reclaimed & Career ROI */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#101A36] to-[#0B132B] border border-white/15 p-4 sm:p-7 md:p-10 text-white shadow-2xl shadow-slate-900/10 mb-12 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header of Calculator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-white/10 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#3E4C9A] to-[#4F67B8] flex items-center justify-center text-white shadow-md shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#34D399]">
                      Time Calculator
                    </span>
                    <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full font-semibold">
                      Live Calculator
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white">
                    See How Much Time &amp; Stress You Save
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/[0.05] px-3.5 py-1.5 rounded-xl border border-white/10 self-start sm:self-auto">
                <TrendingUp className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span>Get Your Evenings &amp; Weekends Back</span>
              </div>
            </div>

            {/* Slider Control */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 mb-3">
                <label htmlFor="weeklyJobHoursSlider" className="text-xs sm:text-sm font-semibold text-slate-200">
                  How Many Hours Do You Work Each Week?
                </label>
                <span className="text-base sm:text-lg font-black text-[#34D399] bg-[#34D399]/10 px-3 py-1 rounded-xl border border-[#34D399]/30 w-fit">
                  {weeklyJobHours} Hours / Week
                </span>
              </div>

              <input
                id="weeklyJobHoursSlider"
                type="range"
                min="40"
                max="75"
                step="5"
                value={weeklyJobHours}
                onChange={(e) => setWeeklyJobHours(Number(e.target.value))}
                className="luxury-slider"
                aria-label="Weekly Work & Meeting Hours"
              />

              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-2 gap-1">
                <span>40 hrs (Standard)</span>
                <span>50 hrs (Tech / Lead)</span>
                <span>60+ hrs (High Demand)</span>
              </div>
            </div>

            {/* Dynamic Results Display Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              {/* Box 1 */}
              <div className="rounded-2xl bg-[#070B19]/80 border border-white/10 p-4 sm:p-5">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Manual Search Time Needed
                </span>
                <div className="text-2xl sm:text-3xl font-black text-rose-400">
                  ~{searchHoursNeededPerWeek} hrs<span className="text-xs font-normal text-slate-400">/week</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Tailoring resumes, scouring portals, filling repetitive forms at night.
                </p>
              </div>

              {/* Box 2 */}
              <div className="rounded-2xl bg-[#070B19]/80 border border-white/10 p-4 sm:p-5">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Time Reclaimed with CareerPilot
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#34D399]">
                  +{monthlyHoursReclaimed} hrs<span className="text-xs font-normal text-slate-400">/month</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Protected evenings & weekends while applications proceed daily.
                </p>
              </div>

              {/* Box 3 */}
              <div className="rounded-2xl bg-[#070B19]/80 border border-white/10 p-4 sm:p-5">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Value of Reclaimed Focus
                </span>
                <div className="text-2xl sm:text-3xl font-black text-blue-300">
                  ₹{conservativeTimeValueMonthly.toLocaleString("en-IN")}+
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Valued against senior professional salary vs ₹10,000/mo fee.
                </p>
              </div>
            </div>

            {/* Calculator Footer CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 pt-4 border-t border-white/10 text-center sm:text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>
                  Invest ₹10,000/mo to reclaim 60–80 hours of your life while our team targets 100+ opportunities.
                </span>
              </div>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] hover:from-[#4859b3] hover:to-[#5571d4] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all shrink-0"
              >
                <span>View Concierge Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Value Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {siteConfig.busyProfessionalMetrics.map((item, idx) => {
            const Icon = metricIcons[idx] || Clock;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3E4C9A]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] border border-[#3E4C9A]/15 text-[#3E4C9A] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                      Metric 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight mb-2 group-hover:text-[#3E4C9A] transition-colors">
                    {item.metric}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Hands-off Concierge Execution</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Co-Pilot vs Doing It Alone Comparison Executive Board */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0B132B] text-white p-4 sm:p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#34D399] block mb-2">
              Side-by-Side Comparison
            </span>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white">
              Doing It Alone After Work vs. Having CareerPilot On Your Side
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 relative z-10">
            {/* Left: Doing It Alone */}
            <div className="rounded-2xl bg-[#1C2541]/50 border border-white/[0.08] p-4 sm:p-6 md:p-7 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-rose-400 block mb-2">
                Doing It Alone After Work
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                15–20 Hours/Week of Stress &amp; Exhaustion
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Exhausted evenings: scrolling job boards at 11 PM after 10 hours of meetings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Repetitive forms: filling out 30-minute company questionnaires on weekends</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Missed 48-hour windows: top-paying jobs close before you get time to apply</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>No time to network: no energy to find hiring managers or request alumni referrals</span>
                </li>
              </ul>
            </div>

            {/* Right: With CareerPilot Partners */}
            <div className="rounded-2xl bg-gradient-to-b from-[#1C2541] to-[#101A36] border-2 border-blue-400/50 p-4 sm:p-6 md:p-7 shadow-2xl relative">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#070B19] bg-[#34D399] px-3 py-0.5 rounded-full inline-block mb-3 font-semibold">
                With CareerPilot Partners
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                Just 30 Minutes/Week to Review Results &amp; Interview
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-white">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Daily job discovery matching your exact target salary and seniority</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>LinkedIn &amp; Naukri applications submitted according to your rules</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Direct recruiter outreach &amp; internal alumni referral requests handled for you</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Transparent Friday updates tracking every submission, email, and response</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
              <span>You're always in complete control of target companies, salary expectations, and location rules.</span>
            </div>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] hover:from-[#4859b3] hover:to-[#5a74cb] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg shadow-md shrink-0"
            >
              <span>Talk to Our Career Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
