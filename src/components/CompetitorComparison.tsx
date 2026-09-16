import React, { useState } from "react";
import {
  Check,
  X,
  AlertTriangle,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Info,
} from "lucide-react";

export const CompetitorComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "india" | "global">("all");
  const [showRoiDetail, setShowRoiDetail] = useState(false);

  const comparisonRows = [
    {
      feature: "Execution Model",
      category: "service",
      description: "Who is actually doing the hard work on your career search?",
      careerPilot: {
        value: "Dedicated Human Career Team",
        detail: "Senior strategist, talent researcher, and outreach concierge managing your search manually.",
        status: "positive",
      },
      applycove: {
        value: "Cloud Browser Automation Bot",
        detail: "Cloud browser script that clicks application buttons automatically. You can monitor live but there's no human judgment or strategy.",
        status: "warning",
      },
      loopcv: {
        value: "Algorithmic Mass-Applier Bot",
        detail: "Automated loops blasting generic applications to aggregated boards.",
        status: "negative",
      },
    },
    {
      feature: "Resume Re-Engineering & ATS Calibration",
      category: "resume",
      description: "How your resume is positioned for modern ATS algorithms & hiring managers",
      careerPilot: {
        value: "Line-by-Line Specialist Re-Engineering",
        detail: "Manual keyword indexing, quantified impact metrics, ATS 96%+ compatibility score guarantee.",
        status: "positive",
      },
      applycove: {
        value: "Zero (Submits Raw Uploaded PDF)",
        detail: "Submits whatever un-optimized resume you upload with no tailoring or audit.",
        status: "negative",
      },
      loopcv: {
        value: "Generic AI Suggestions Only",
        detail: "Basic automated keyword tips; you still rewrite and calibrate everything yourself.",
        status: "warning",
      },
    },
    {
      feature: "Direct Recruiter & Hiring Manager Outreach",
      category: "outreach",
      description: "Reaching decision-makers directly before openings get saturated",
      careerPilot: {
        value: "Verified Decision-Maker Email Discovery",
        detail: "Finds verified hiring manager emails using dedicated intelligence tools & sends tailored candidate notes.",
        status: "positive",
      },
      applycove: {
        value: "None (Form Filling Only)",
        detail: "Does not find recruiter emails or send personalized introductory messages.",
        status: "negative",
      },
      loopcv: {
        value: "Cold Mass-Email Templates",
        detail: "Automated generic email blasts often flagged as unsolicited spam by corporate filters.",
        status: "warning",
      },
    },
    {
      feature: "Dual-Vector Employee Referrals",
      category: "referrals",
      description: "Activating 1st-degree alumni + target company insiders for 5x interview callbacks",
      careerPilot: {
        value: "Full Dual-Vector Referral Strategy",
        detail: "Proactively approaches university alumni & verified company insiders to lock internal referral codes.",
        status: "positive",
      },
      applycove: {
        value: "No Referral Support",
        detail: "Zero employee referral discovery or alumni outreach capabilities.",
        status: "negative",
      },
      loopcv: {
        value: "No Referral Support",
        detail: "Zero employee referral discovery or alumni outreach capabilities.",
        status: "negative",
      },
    },
    {
      feature: "Naukri (India) Portal Depth",
      category: "india",
      description: "Indian tech job market optimization and screening question handling",
      careerPilot: {
        value: "Top 3% FastForward Boost & Custom Screening",
        detail: "Keyword weighting for top search ranking + tailored screening questionnaire responses.",
        status: "positive",
      },
      applycove: {
        value: "Basic Form Clicker (Runtime Limited)",
        detail: "Automates basic forms, but limited by daily runtime minutes (20 mins to 2 hrs max).",
        status: "warning",
      },
      loopcv: {
        value: "No Naukri Focus",
        detail: "Built primarily for Western job aggregator feeds (Indeed, ZipRecruiter); minimal India depth.",
        status: "negative",
      },
    },
    {
      feature: "Candidate Account Safety & Discretion",
      category: "safety",
      description: "Protection against platform bans, spam flags, and unwanted employer visibility",
      careerPilot: {
        value: "100% Safe Human-Guided Execution",
        detail: "Strict company exclusion lists (current employer safe) + human pacing that never triggers bot alarms.",
        status: "positive",
      },
      applycove: {
        value: "Medium Risk (Browser Detection)",
        detail: "Portals frequently update bot detectors and CAPTCHAs, risking rate limits.",
        status: "warning",
      },
      loopcv: {
        value: "High Risk (Mass Spam Detection)",
        detail: "Blasting hundreds of automated applications per day can trigger LinkedIn spam restrictions.",
        status: "negative",
      },
    },
    {
      feature: "Platform Tool Premiums & Verification Costs",
      category: "cost",
      description: "Additional hidden fees for email tools, InMails, or search credits",
      careerPilot: {
        value: "100% Included & Absorbed",
        detail: "All email verification tools, InMail credits, and recruiter search suites are completely covered.",
        status: "positive",
      },
      applycove: {
        value: "Paid Tiers: ₹349–₹1,299/mo",
        detail: "Higher tiers required for more daily applications (up to 200/day on Pro). No human review or referral help.",
        status: "warning",
      },
      loopcv: {
        value: "Charges for Extra Credits & Loops",
        detail: "Tiered subscription (€9.99 to €129+/mo) plus extra charges for email enrichment credits.",
        status: "warning",
      },
    },
    {
      feature: "Interview Velocity & Callbacks",
      category: "outreach",
      description: "How fast you start speaking to real hiring managers & talent leads",
      careerPilot: {
        value: "15–20 Interview Calls in 1–2 Weeks",
        detail: "Achieved via multi-channel convergence: tailored ATS resume + verified recruiter InMails + employee referrals.",
        status: "positive",
      },
      applycove: {
        value: "Unpredictable / 0–2 Calls",
        detail: "Blind form clickers submit un-tailored PDFs that 90% of corporate ATS filters discard automatically.",
        status: "negative",
      },
      loopcv: {
        value: "Low Signal (0–1 calls/month)",
        detail: "Mass-blasted templates end up in recruiter spam folders, resulting in near-zero verified callbacks.",
        status: "negative",
      },
    },
    {
      feature: "Final Outcome & Competing Offers",
      category: "service",
      description: "Target offer letters and compensation negotiation leverage",
      careerPilot: {
        value: "4–5 Competing Offer Letters",
        detail: "Coordinated interview clustering creates urgent employer competition and maximum CTC negotiation power.",
        status: "positive",
      },
      applycove: {
        value: "0–1 Low-Leverage Offers",
        detail: "No interview coordination, no compensation benchmarking, and no concurrent offer strategy.",
        status: "negative",
      },
      loopcv: {
        value: "Zero Negotiation Support",
        detail: "Pure automated click tool; offers zero guidance on offer clustering or salary negotiation.",
        status: "negative",
      },
    },
    {
      feature: "Monthly Cost & Investment",
      category: "pricing",
      description: "Total monthly investment for full-service career acceleration",
      careerPilot: {
        value: "₹10,000 / mo ($100 USD)",
        detail: "All-inclusive concierge. Senior specialist team executes 60–80 hours of manual work — resume, applications, recruiter emails, and referrals.",
        status: "positive",
      },
      applycove: {
        value: "₹349 – ₹1,299 / mo (bot only)",
        detail: "Up to 200 auto-applications/day on Pro plan. Zero human resume review, zero recruiter networking, zero referral help.",
        status: "warning",
      },
      loopcv: {
        value: "€9.99 – €129+ / mo (~₹900–₹12,000)",
        detail: "High-volume automated bot loops for Western job boards. No India-specific depth, no human review, no referrals.",
        status: "negative",
      },
    },
    {
      feature: "Cancellation & Refund Guarantee",
      category: "pricing",
      description: "Risk protection if opportunities are not delivered to your pipeline",
      careerPilot: {
        value: "14-Day 100% Money-Back Policy",
        detail: "If our dedicated team does not deliver relevant interview opportunities within your first 2 weeks, receive a full 100% refund immediately. Month-to-month, cancel anytime.",
        status: "positive",
      },
      applycove: {
        value: "Strict No-Refund Policy",
        detail: "Subscriptions and credit usage are non-refundable once automation runs, regardless of callback results.",
        status: "negative",
      },
      loopcv: {
        value: "Non-Refundable Subscription",
        detail: "Strict SaaS billing terms; zero opportunity-based refunds or money-back guarantees.",
        status: "negative",
      },
    },
  ];

  const filteredRows = comparisonRows.filter((row) => {
    if (activeTab === "india") return row.category === "india" || row.category === "referrals" || row.category === "service" || row.category === "pricing";
    if (activeTab === "global") return row.category === "outreach" || row.category === "resume" || row.category === "safety" || row.category === "pricing";
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden" id="comparison">
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3E4C9A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold mb-4 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
            <span className="text-white">Honest Platform Comparison</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Dedicated Career Team vs Automated Form Bots
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tools like ApplyCove (₹349–₹1,299/mo) and LoopCV automate clicking application buttons. CareerPilot provides a dedicated professional team that re-engineers your resume, sends personalized recruiter emails, and secures employee referrals — with a 14-day 100% money-back guarantee.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex items-center justify-center gap-2 mt-7">
            <button
              onClick={() => setActiveTab("all")}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-[#3E4C9A] to-[#10B981] text-white shadow-md shadow-[#3E4C9A]/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              All Dimensions ({comparisonRows.length})
            </button>
            <button
              onClick={() => setActiveTab("india")}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "india"
                  ? "bg-gradient-to-r from-[#3E4C9A] to-[#10B981] text-white shadow-md shadow-[#3E4C9A]/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              India Tech Market Focus
            </button>
            <button
              onClick={() => setActiveTab("global")}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "global"
                  ? "bg-gradient-to-r from-[#3E4C9A] to-[#10B981] text-white shadow-md shadow-[#3E4C9A]/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              Senior / Global Roles
            </button>
          </div>
        </div>

        {/* Quick Head-to-Head Highlight Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#3E4C9A]/40 to-[#10B981]/15 border border-[#34D399]/30 p-4">
            <div className="text-[10px] uppercase font-bold text-[#34D399] tracking-wider mb-1">Interview Acceleration</div>
            <div className="text-lg sm:text-xl font-black text-white">15–20 Calls</div>
            <div className="text-[11px] text-slate-300 mt-0.5">In 1–2 weeks vs 0–2 for bots</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#3E4C9A]/40 to-[#10B981]/15 border border-[#34D399]/30 p-4">
            <div className="text-[10px] uppercase font-bold text-[#34D399] tracking-wider mb-1">Outcome Target</div>
            <div className="text-lg sm:text-xl font-black text-white">4–5 Offer Letters</div>
            <div className="text-[11px] text-slate-300 mt-0.5">Concurrent leverage for top compensation</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#3E4C9A]/40 to-[#10B981]/15 border border-[#34D399]/30 p-4">
            <div className="text-[10px] uppercase font-bold text-[#34D399] tracking-wider mb-1">Execution Quality</div>
            <div className="text-lg sm:text-xl font-black text-white">ATS 96%+ Score</div>
            <div className="text-[11px] text-slate-300 mt-0.5">Hand-tailored vs raw un-optimized PDFs</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#3E4C9A]/40 to-[#10B981]/15 border border-[#34D399]/30 p-4">
            <div className="text-[10px] uppercase font-bold text-[#34D399] tracking-wider mb-1">Networking Advantage</div>
            <div className="text-lg sm:text-xl font-black text-white">Direct Referrals</div>
            <div className="text-[11px] text-slate-300 mt-0.5">Alumni + verified hiring manager outreach</div>
          </div>
          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-emerald-900/40 border border-emerald-400/40 p-4">
            <div className="text-[10px] uppercase font-bold text-[#34D399] tracking-wider mb-1">Zero-Risk Policy</div>
            <div className="text-lg sm:text-xl font-black text-[#34D399]">14-Day 100% Refund</div>
            <div className="text-[11px] text-slate-300 mt-0.5">Full refund if opportunities not delivered</div>
          </div>
        </div>

        {/* Comparison Table Card */}
        <div className="rounded-3xl bg-[#101A36]/90 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden mb-12 sm:mb-16">
          {/* Table Header Strip */}
          <div className="grid grid-cols-12 bg-[#070B19]/90 border-b border-white/10 text-xs sm:text-sm font-bold p-4 sm:p-6 text-slate-300">
            <div className="col-span-5 sm:col-span-4 flex items-center">
              <span>Capability / Dimension</span>
            </div>

            {/* CareerPilot Highlight Header */}
            <div className="col-span-4 sm:col-span-4 flex flex-col justify-center px-2 sm:px-4 py-2 rounded-xl bg-gradient-to-br from-[#3E4C9A]/50 to-[#10B981]/20 border border-[#34D399]/40 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full bg-[#34D399] text-[#070B19] shadow-sm whitespace-nowrap">
                Dedicated Concierge
              </span>
              <span className="text-white font-black text-xs sm:text-base tracking-tight flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>CareerPilot Partners</span>
              </span>
              <span className="text-[10px] sm:text-xs text-[#34D399] font-medium hidden sm:block">
                ₹10,000/mo • Done-For-You
              </span>
            </div>

            {/* ApplyCove Header */}
            <div className="col-span-3 sm:col-span-2 flex flex-col justify-center text-center px-1 sm:px-2">
              <span className="text-white font-bold text-xs sm:text-sm truncate">ApplyCove</span>
              <span className="text-[10px] text-slate-400 hidden sm:block">$19–$68/mo Bot</span>
            </div>

            {/* LoopCV Header */}
            <div className="hidden sm:flex col-span-2 flex-col justify-center text-center px-2">
              <span className="text-white font-bold text-sm truncate">LoopCV</span>
              <span className="text-[10px] text-slate-400">€9.99–€129/mo Loops</span>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-white/[0.06]">
            {filteredRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center transition-colors hover:bg-white/[0.02]"
              >
                {/* Column 1: Feature Title & Description */}
                <div className="col-span-5 sm:col-span-4 pr-3 sm:pr-4">
                  <h4 className="font-bold text-white text-xs sm:text-sm mb-1 leading-snug">
                    {row.feature}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {row.description}
                  </p>
                </div>

                {/* Column 2: CareerPilot Partners (Hero column) */}
                <div className="col-span-4 sm:col-span-4 px-2 sm:px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-[#34D399]/30">
                  <div className="flex items-start gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-bold text-white text-xs sm:text-sm leading-snug">
                      {row.careerPilot.value}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-300 pl-6 leading-relaxed hidden sm:block">
                    {row.careerPilot.detail}
                  </p>
                </div>

                {/* Column 3: ApplyCove */}
                <div className="col-span-3 sm:col-span-2 px-1 sm:px-3 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                    {row.applycove.status === "negative" ? (
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-300 line-clamp-2 leading-tight">
                      {row.applycove.value}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight hidden lg:block">
                    {row.applycove.detail}
                  </p>
                </div>

                {/* Column 4: LoopCV */}
                <div className="hidden sm:block col-span-2 px-3 text-left">
                  <div className="flex items-center gap-1.5 mb-1">
                    {row.loopcv.status === "negative" ? (
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                    <span className="text-xs font-semibold text-slate-300 line-clamp-2 leading-tight">
                      {row.loopcv.value}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight hidden lg:block">
                    {row.loopcv.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Table Bottom Action Summary Banner */}
          <div className="p-4 sm:p-6 bg-[#070B19]/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <Info className="w-4 h-4 text-[#34D399] shrink-0" />
              <span>
                <strong>The Bottom Line:</strong> Bots spam portals and risk account bans. Our dedicated team of specialists handles everything with high-touch discretion and guaranteed quality.
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#10B981] hover:from-[#4859b3] hover:to-[#34D399] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all hover:scale-105 shrink-0"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Deep Dive Value & ROI Explainer */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#3E4C9A]/40 text-[#34D399] flex items-center justify-center shrink-0 border border-blue-400/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Why Paying For a Dedicated Human Team Yields 10x Higher ROI
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Comparing the true cost of automated browser bots vs. human career specialists
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowRoiDetail(!showRoiDetail)}
              className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white font-semibold cursor-pointer w-fit"
            >
              <span>{showRoiDetail ? "Hide Mathematical Breakdown" : "View Mathematical Breakdown"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showRoiDetail ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#070B19]/60 border border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                The Hidden Cost of Bots
              </span>
              <h4 className="font-bold text-white mb-2">High Rejections & Banned Accounts</h4>
              <p className="text-slate-300 leading-relaxed text-xs">
                When tools like ApplyCove or LoopCV mass-submit generic un-tailored resumes, 92%+ are filtered out by ATS before a human recruiter ever sees them. Worse, bot behavior can trigger LinkedIn account suspensions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#070B19]/60 border border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Your Hourly Opportunity Cost
              </span>
              <h4 className="font-bold text-white mb-2">60–80 Hours of Senior Time Saved</h4>
              <p className="text-slate-300 leading-relaxed text-xs">
                As a mid-to-senior software engineer or lead earning ₹25L–₹60L ($100k+), your hourly time is worth ₹1,500 to ₹3,500/hr. Spending 15 hours/week browsing job boards costs you over ₹90,000/month in lost time and fatigue.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-[#3E4C9A]/30 to-[#10B981]/20 border border-[#34D399]/30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#34D399] block mb-1">
                The CareerPilot Advantage
              </span>
              <h4 className="font-bold text-white mb-2">3.4x More Callbacks at ₹10,000/mo</h4>
              <p className="text-slate-200 leading-relaxed text-xs">
                For a fraction of your monthly savings, our dedicated specialists re-engineer your resume, reach verified hiring leads directly, and secure warm alumni referrals. You only step in when interviews are confirmed.
              </p>
            </div>
          </div>

          {showRoiDetail && (
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-slate-300 leading-relaxed animate-in fade-in duration-300">
              <h5 className="font-bold text-white mb-2">Competitor Feature & Pricing Audit Citations:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-400">
                <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-slate-200">ApplyCove (applycove.com):</strong>
                    <a href="https://applycove.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white flex items-center gap-1">
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p>
                    Starter at $19/mo (20 mins daily runtime, 1 platform), Growth at $39/mo (1 hr runtime), Pro at $68/mo (2 hrs runtime). Pure supervised browser bot. No human resume re-engineering or employee referral outreach.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-black/30 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <strong className="text-slate-200">LoopCV (loopcv.pro):</strong>
                    <a href="https://www.loopcv.pro/pricing" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white flex items-center gap-1">
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p>
                    Free tier limited to 10 applies/mo; paid tiers from €9.99/mo up to €129+/mo for automated loops across generic job aggregator boards. No dedicated account management or dual-vector referral coordination.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
