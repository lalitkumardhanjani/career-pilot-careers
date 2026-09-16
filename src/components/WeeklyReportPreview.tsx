import React, { useState } from "react";
import {
  FileSpreadsheet,
  ArrowRight,
  TrendingUp,
  Mail,
  Building2,
  Users,
  UserCheck,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  Download,
  X,
  ShieldCheck,
  FileText,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap,
  Award,
} from "lucide-react";

export const WeeklyReportPreview: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"overview" | "charts" | "log">("overview");
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [chartSubView, setChartSubView] = useState<"cadence" | "funnel" | "channels">("cadence");
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(2); // Wednesday (peak)
  const [selectedChannelIndex, setSelectedChannelIndex] = useState<number>(0);

  // Sample verified progressive activity log items representing typical weekly report data
  const sampleActivityLogs = [
    {
      time: "Friday, 4:30 PM",
      company: "Stripe / Razorpay Growth Team",
      role: "Senior Backend / Fullstack Lead",
      platform: "LinkedIn Job Application",
      action: "Tailored application submitted with custom profile notes & screening responses",
      status: "Application Logged",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-400/20",
    },
    {
      time: "Thursday, 2:15 PM",
      company: "Atlassian / Flipkart Tech",
      role: "Tech Lead / Principal Architect",
      platform: "Naukri Verified Portal",
      action: "Applied to newly opened role matching target salary & tech stack parameters",
      status: "Recruiter Review",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-400/20",
    },
    {
      time: "Wednesday, 5:45 PM",
      company: "Microsoft / Swiggy Corporate",
      role: "Engineering Manager / Lead",
      platform: "Employee Referral Outreach",
      action: "Connected with internal Senior Staff Engineer for active employee referral",
      status: "Referral Confirmed",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
    },
    {
      time: "Tuesday, 11:20 AM",
      company: "Coinbase / CRED Platforms",
      role: "Staff Infrastructure Engineer",
      platform: "Recruiter Outreach",
      action: "Direct personalized message delivered to Lead Talent Partner on role scope",
      status: "Recruiter Connected",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-400/20",
    },
    {
      time: "Monday, 3:00 PM",
      company: "Amazon / Zomato Core",
      role: "Lead Systems Architect",
      platform: "Professional Direct Email",
      action: "Outreach message with portfolio sent to Director of Engineering",
      status: "Delivered to Inbox",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-400/20",
    },
  ];

  // Daily growth chart data (Mon to Fri) with deep-dive metadata
  const dailyActivity = [
    {
      day: "Mon",
      fullDay: "Monday",
      date: "Oct 12",
      apps: 8,
      outreach: 12,
      referrals: 2,
      total: 22,
      focusSectors: "Fintech & High-Growth Core Platforms (Stripe, Razorpay)",
      milestone: "2 hiring managers accepted InMail; 1 introductory screening requested.",
      specialistNote: "Audited Staff Backend criteria matching ₹45L+ compensation bracket.",
      verifiedLog: "8 customized applications submitted with quantifiable system metrics.",
    },
    {
      day: "Tue",
      fullDay: "Tuesday",
      date: "Oct 13",
      apps: 10,
      outreach: 15,
      referrals: 1,
      total: 26,
      focusSectors: "Cloud Platforms & DevTools (Atlassian, Postman)",
      milestone: "ATS calibration reached 98% match on target Atlassian opening.",
      specialistNote: "Direct message delivered to Lead Technical Recruiter at Postman.",
      verifiedLog: "Naukri FastForward search rank boosted to top 2% tier.",
    },
    {
      day: "Wed",
      fullDay: "Wednesday",
      date: "Oct 14",
      apps: 12,
      outreach: 18,
      referrals: 4,
      total: 34,
      focusSectors: "Consumer Scale & Logistics (Swiggy, Flipkart)",
      milestone: "Confirmed internal referral submitted by Senior Staff Engineer at Swiggy.",
      specialistNote: "Mid-week surge: 4 recruiter connections accepted within 3 hours.",
      verifiedLog: "Curated applications submitted for Distributed Systems Lead roles.",
    },
    {
      day: "Thu",
      fullDay: "Thursday",
      date: "Oct 15",
      apps: 9,
      outreach: 14,
      referrals: 2,
      total: 25,
      focusSectors: "Enterprise SaaS Platforms (Salesforce, ServiceNow)",
      milestone: "Direct recruiter screening call confirmed for Monday afternoon.",
      specialistNote: "Custom cover note tailored around high-throughput distributed systems.",
      verifiedLog: "Follow-up notes dispatched to 6 hiring managers from previous week.",
    },
    {
      day: "Fri",
      fullDay: "Friday",
      date: "Oct 16",
      apps: 11,
      outreach: 16,
      referrals: 2,
      total: 29,
      focusSectors: "High-Growth Scaleups (CRED, Zepto, Swiggy)",
      milestone: "3 recruiter phone interviews confirmed for next week; Friday digest compiled.",
      specialistNote: "Complete weekly activity audit signed off by Lead Career Specialist.",
      verifiedLog: "Executive PDF and online dashboard snapshot delivered to candidate.",
    },
  ];

  const channelBreakdown = [
    {
      id: "linkedin",
      name: "LinkedIn High-Fit Submissions",
      shortName: "LinkedIn",
      share: 42,
      volume: "22 Applications",
      color: "#3B82F6",
      accentBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      responseRate: "18.2%",
      avgSpeed: "2.8 Days",
      status: "Active Vector",
      advantage: "Custom cover notes & tailored screening responses bypass automated keyword filters.",
      metricDetail: "22 submitted • 4 callbacks received",
    },
    {
      id: "naukri",
      name: "Naukri FastForward Booster",
      shortName: "Naukri",
      share: 28,
      volume: "16 Applications",
      color: "#8B5CF6",
      accentBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      responseRate: "24.5%",
      avgSpeed: "2.1 Days",
      status: "High Visibility",
      advantage: "Daily profile refresh and optimized keyword density keep profile in the top 3% recruiter search tier.",
      metricDetail: "16 submitted • 4 recruiter contacts",
    },
    {
      id: "inmail",
      name: "Direct Recruiter & Manager Outreach",
      shortName: "Recruiter Email",
      share: 18,
      volume: "26 Outreach Notes",
      color: "#06B6D4",
      accentBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      responseRate: "34.6%",
      avgSpeed: "1.4 Days",
      status: "High Conversion",
      advantage: "Targeting engineering directors and lead recruiters directly before job listings get flooded with 500+ applicants.",
      metricDetail: "26 delivered • 9 direct replies",
    },
    {
      id: "referrals",
      name: "Dual-Vector Employee Referrals",
      shortName: "Referrals",
      share: 12,
      volume: "18 Outreach Contacts",
      color: "#10B981",
      accentBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      responseRate: "68.0%",
      avgSpeed: "24 Hours",
      status: "Fast-Track",
      advantage: "Highest converting channel; warm 1st-degree alumni and respectful company insider referrals guarantee interview review.",
      metricDetail: "18 approaches • 4 confirmed codes",
    },
  ];

  const funnelStages = [
    {
      stage: "01",
      title: "Scouted & Verified",
      count: "142 Roles",
      percentage: "100%",
      color: "border-blue-500/40 bg-blue-500/10 text-blue-300",
      progressWidth: "100%",
      icon: Target,
      detail: "Openings vetted strictly against target compensation (₹35L–₹55L) and preferred tech stack.",
      tag: "Total Scouted",
    },
    {
      stage: "02",
      title: "Curated Applications",
      count: "42 Submitted",
      percentage: "29.5%",
      color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
      progressWidth: "68%",
      icon: FileText,
      detail: "Hand-tailored resume bullets & screening questions submitted directly by assigned application coordinator.",
      tag: "Hand-Applied",
    },
    {
      stage: "03",
      title: "Recruiter Outreach",
      count: "26 Delivered",
      percentage: "18.3%",
      color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
      progressWidth: "48%",
      icon: Mail,
      detail: "Direct, personalized messages delivered to verified Talent Partners & Engineering Directors.",
      tag: "Direct Messages",
    },
    {
      stage: "04",
      title: "Recruiter Screenings",
      count: "14 Calls Queued",
      percentage: "9.8%",
      color: "border-emerald-500/40 bg-emerald-500/10 text-[#34D399]",
      progressWidth: "32%",
      icon: Users,
      detail: "Confirmed introductory recruiter screening calls and hiring manager introductory chats.",
      tag: "4.6x Industry Avg",
    },
    {
      stage: "05",
      title: "Final Loops & Offers",
      count: "3–4 Target Offers",
      percentage: "2.8%",
      color: "border-amber-500/40 bg-amber-500/10 text-amber-300",
      progressWidth: "18%",
      icon: Award,
      detail: "Final technical round conversions culminating in multi-offer compensation negotiation leverage.",
      tag: "Expected Outcome",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden" id="weekly-updates">
      {/* Background ambient radial glow accents */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Uncompromising Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Know Exactly What Is Being Done for Your Career.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every Friday, our team delivers an executive performance digest detailing every single application submitted, outreach email sent, recruiter connected, and referral secured.
          </p>
        </div>

        {/* Enterprise Dashboard Container */}
        <div className="rounded-3xl bg-[#101A36]/85 border border-white/15 backdrop-blur-2xl p-4 sm:p-7 md:p-10 shadow-2xl shadow-black/80">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 sm:pb-6 border-b border-white/[0.08] gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#3E4C9A] to-[#4F67B8] text-white flex items-center justify-center border border-white/10 shrink-0 shadow-md">
                <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#34D399]">
                    Confidential Candidate Digest
                  </span>
                  <span className="text-[9px] sm:text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full font-semibold border border-white/10">
                    Live Demo Portal
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-tight">
                  Executive Weekly Activity & Analytics Summary
                </h3>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-[#070B19]/80 p-1 sm:p-1.5 rounded-2xl border border-white/10 overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setSelectedTab("overview")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap shrink-0 ${
                  selectedTab === "overview"
                    ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Key Metrics
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("charts")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap shrink-0 ${
                  selectedTab === "charts"
                    ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Weekly Charts
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("log")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap shrink-0 ${
                  selectedTab === "log"
                    ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Progressive Log
              </button>
            </div>
          </div>

          {/* TAB 1: Key Metrics Overview */}
          {selectedTab === "overview" && (
            <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
              {/* 6 Core Weekly Insight KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
                {/* Metric 1: Emails Sent */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Emails Sent This Week</span>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-300 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-blue-200 transition-colors">
                    42 <span className="text-xs font-medium text-slate-400">emails delivered</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Daily Avg: 8.4 emails/day (+18% weekly growth)</span>
                  </div>
                </div>

                {/* Metric 2: Companies Applied */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Companies Applied For</span>
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-300 flex items-center justify-center">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-indigo-200 transition-colors">
                    38 <span className="text-xs font-medium text-slate-400">target firms</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>LinkedIn & Naukri verified applications</span>
                  </div>
                </div>

                {/* Metric 3: Recruiters Connected */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Recruiters Connected</span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-300 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-emerald-200 transition-colors">
                    26 <span className="text-xs font-medium text-slate-400">talent partners</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Talent acquisition leads & hiring managers</span>
                  </div>
                </div>

                {/* Metric 4: Connection Requests */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Connection Requests Sent</span>
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-300 flex items-center justify-center">
                      <Send className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-purple-200 transition-colors">
                    65 <span className="text-xs font-medium text-slate-400">requests</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Daily Avg: 13 requests/day (46% acceptance rate)</span>
                  </div>
                </div>

                {/* Metric 5: Referrals Asked */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Companies Asked for Referral</span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-300 flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-amber-200 transition-colors">
                    18 <span className="text-xs font-medium text-slate-400">companies</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Internal alumni & senior peer outreach</span>
                  </div>
                </div>

                {/* Metric 6: Referrals Secured */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Confirmed Referrals Gained</span>
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#34D399] flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-[#34D399] transition-colors">
                    4 <span className="text-xs font-medium text-slate-400">referral codes</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Direct employee internal submissions on active roles</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Weekly Growth Charts */}
          {selectedTab === "charts" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Executive Sub-Nav Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#34D399] mb-1">
                    <Activity className="w-3.5 h-3.5 shrink-0" />
                    <span>Pipeline Telemetry & Analytics Suite</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                    Multi-Vector Activity & Conversion Intelligence
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Real-time visualization of weekly application volume, recruiter response velocity, and channel ROI.
                  </p>
                </div>

                {/* Sub-View Switcher: Cadence vs Funnel vs Channels */}
                <div className="flex items-center gap-1 bg-[#070B19] p-1.5 rounded-2xl border border-white/10 shrink-0 w-fit">
                  <button
                    type="button"
                    onClick={() => setChartSubView("cadence")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      chartSubView === "cadence"
                        ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/40"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Daily Cadence</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setChartSubView("funnel")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      chartSubView === "funnel"
                        ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/40"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <Target className="w-3.5 h-3.5" />
                    <span>Conversion Funnel</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setChartSubView("channels")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      chartSubView === "channels"
                        ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/40"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <PieChart className="w-3.5 h-3.5" />
                    <span>Channel ROI</span>
                  </button>
                </div>
              </div>

              {/* 4 Core Summary KPI Chips */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
                <div className="rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-3.5 hover:border-blue-400/30 transition-all">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 flex items-center justify-between">
                    <span>Weekly Output</span>
                    <Zap className="w-3 h-3 text-blue-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white flex items-baseline gap-1.5">
                    136 <span className="text-[10px] font-bold text-[#34D399]">+24%</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">112% of target quota</div>
                </div>

                <div className="rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-3.5 hover:border-cyan-400/30 transition-all">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 flex items-center justify-between">
                    <span>InMail Response</span>
                    <TrendingUp className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-300 flex items-baseline gap-1.5">
                    34.6% <span className="text-[10px] font-bold text-slate-400">3.4x avg</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Verified hiring decision-makers</div>
                </div>

                <div className="rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-3.5 hover:border-emerald-400/30 transition-all">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 flex items-center justify-between">
                    <span>Active Pipeline</span>
                    <Users className="w-3 h-3 text-[#34D399]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#34D399] flex items-baseline gap-1.5">
                    14 Calls <span className="text-[10px] font-bold text-emerald-300">Queued</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Top-tier product firms</div>
                </div>

                <div className="rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-3.5 hover:border-purple-400/30 transition-all">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1 flex items-center justify-between">
                    <span>Referral Network</span>
                    <Sparkles className="w-3 h-3 text-purple-400" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-purple-300 flex items-baseline gap-1.5">
                    4 Codes <span className="text-[10px] font-bold text-purple-400">Locked</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Swiggy, Atlassian, Razorpay</div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SUB-VIEW 1: DAILY CADENCE & ACTIVITY STACKED SVG CHART */}
              {/* ========================================================================= */}
              {chartSubView === "cadence" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
                  {/* Left Column: Interactive Stacked SVG Bar Chart */}
                  <div className="lg:col-span-7 rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            <span>Daily Output Cadence & Trendline</span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-400/20">
                              Mon–Fri
                            </span>
                          </h4>
                          <p className="text-xs text-slate-400">
                            Click any day column to inspect verified applications & outreach milestones
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-slate-200 bg-[#3E4C9A]/30 border border-[#3E4C9A]/40 px-3 py-1 rounded-xl shrink-0">
                          Avg: 27.2 Actions/Day
                        </span>
                      </div>

                      {/* SVG Stacked Bar Chart with Coordinates */}
                      <div className="relative w-full overflow-hidden pt-2">
                        <svg
                          viewBox="0 0 540 210"
                          className="w-full h-48 sm:h-56 select-none"
                          aria-label="Daily Output Cadence Chart"
                        >
                          <defs>
                            {/* Gradients */}
                            <linearGradient id="cadence-grad-apps" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="#2563EB" />
                              <stop offset="100%" stopColor="#60A5FA" />
                            </linearGradient>
                            <linearGradient id="cadence-grad-outreach" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="#0891B2" />
                              <stop offset="100%" stopColor="#38BDF8" />
                            </linearGradient>
                            <linearGradient id="cadence-grad-referrals" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="#059669" />
                              <stop offset="100%" stopColor="#34D399" />
                            </linearGradient>
                            <linearGradient id="cadence-line-grad" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#60A5FA" />
                              <stop offset="50%" stopColor="#34D399" />
                              <stop offset="100%" stopColor="#38BDF8" />
                            </linearGradient>
                          </defs>

                          {/* Horizontal Gridlines & Y-Axis Labels */}
                          {[
                            { y: 25, label: "40" },
                            { y: 62.5, label: "30" },
                            { y: 100, label: "20" },
                            { y: 137.5, label: "10" },
                            { y: 175, label: "0" },
                          ].map((grid) => (
                            <g key={grid.y}>
                              <line
                                x1="45"
                                y1={grid.y}
                                x2="520"
                                y2={grid.y}
                                stroke="rgba(255,255,255,0.07)"
                                strokeDasharray={grid.y === 175 ? "0" : "3,3"}
                                strokeWidth="1"
                              />
                              <text
                                x="35"
                                y={grid.y + 3.5}
                                fill="#94A3B8"
                                fontSize="9"
                                textAnchor="end"
                                fontWeight="bold"
                              >
                                {grid.label}
                              </text>
                            </g>
                          ))}

                          {/* Stacked Bars for Mon, Tue, Wed, Thu, Fri */}
                          {dailyActivity.map((d, idx) => {
                            const xCenter = 90 + idx * 95;
                            const barWidth = 44;
                            const x = xCenter - barWidth / 2;
                            const isSelected = selectedDayIndex === idx;

                            // Scale: 40 max units = 150px height => factor = 3.75px per unit
                            const hApps = d.apps * 3.75;
                            const hOutreach = d.outreach * 3.75;
                            const hReferrals = d.referrals * 3.75;

                            const yApps = 175 - hApps;
                            const yOutreach = yApps - hOutreach;
                            const yReferrals = yOutreach - hReferrals;

                            return (
                              <g
                                key={d.day}
                                onClick={() => setSelectedDayIndex(idx)}
                                className="cursor-pointer group"
                              >
                                {/* Active Column Background Halo */}
                                {isSelected && (
                                  <rect
                                    x={x - 8}
                                    y="15"
                                    width={barWidth + 16}
                                    height="165"
                                    rx="12"
                                    fill="rgba(59, 130, 246, 0.08)"
                                    stroke="rgba(59, 130, 246, 0.3)"
                                    strokeWidth="1"
                                  />
                                )}

                                {/* Hover detector hit area */}
                                <rect
                                  x={x - 8}
                                  y="15"
                                  width={barWidth + 16}
                                  height="165"
                                  fill="transparent"
                                />

                                {/* Layer 1: Job Applications (bottom) */}
                                <rect
                                  x={x}
                                  y={yApps}
                                  width={barWidth}
                                  height={hApps}
                                  rx="4"
                                  fill="url(#cadence-grad-apps)"
                                  className="transition-all duration-300"
                                />

                                {/* Layer 2: Recruiter InMails (middle) */}
                                <rect
                                  x={x}
                                  y={yOutreach}
                                  width={barWidth}
                                  height={hOutreach}
                                  rx="4"
                                  fill="url(#cadence-grad-outreach)"
                                  className="transition-all duration-300"
                                />

                                {/* Layer 3: Employee Referrals (top) */}
                                <rect
                                  x={x}
                                  y={yReferrals}
                                  width={barWidth}
                                  height={hReferrals}
                                  rx="4"
                                  fill="url(#cadence-grad-referrals)"
                                  className="transition-all duration-300"
                                />

                                {/* Total Count on Top of Bar */}
                                <text
                                  x={xCenter}
                                  y={yReferrals - 6}
                                  fill={isSelected ? "#34D399" : "#E2E8F0"}
                                  fontSize="10"
                                  fontWeight="bold"
                                  textAnchor="middle"
                                >
                                  {d.total}
                                </text>

                                {/* Day Label on X Axis */}
                                <text
                                  x={xCenter}
                                  y="192"
                                  fill={isSelected ? "#FFFFFF" : "#94A3B8"}
                                  fontSize="11"
                                  fontWeight={isSelected ? "bold" : "normal"}
                                  textAnchor="middle"
                                >
                                  {d.day}
                                </text>

                                {/* Active Selection Dot */}
                                {isSelected && (
                                  <circle
                                    cx={xCenter}
                                    cy="202"
                                    r="2.5"
                                    fill="#34D399"
                                  />
                                )}
                              </g>
                            );
                          })}

                          {/* Velocity Trend Spline Line connecting total outputs */}
                          <path
                            d="M 90,92.5 C 137,92.5 137,77.5 185,77.5 C 232,77.5 232,47.5 280,47.5 C 327,47.5 327,81.25 375,81.25 C 422,81.25 422,66.25 470,66.25"
                            fill="none"
                            stroke="url(#cadence-line-grad)"
                            strokeWidth="2.5"
                            strokeDasharray="4,3"
                            className="opacity-70 pointer-events-none"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Chart Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4 pt-3 border-t border-white/[0.06] text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-r from-blue-600 to-blue-400"></span>
                        <span>Job Applications (Naukri &amp; LinkedIn)</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-r from-cyan-600 to-cyan-400"></span>
                        <span>Direct Recruiter InMails</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-r from-emerald-600 to-[#34D399]"></span>
                        <span>Internal Referrals</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Interactive Day Inspector Card */}
                  <div className="lg:col-span-5 rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      {/* Selected Day Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3E4C9A] to-[#4F67B8] flex items-center justify-center text-white font-black text-xs shadow-md">
                            {dailyActivity[selectedDayIndex].day}
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#34D399] block">
                              Active Day Audit
                            </span>
                            <h5 className="text-sm sm:text-base font-extrabold text-white">
                              {dailyActivity[selectedDayIndex].fullDay} • {dailyActivity[selectedDayIndex].date}
                            </h5>
                          </div>
                        </div>

                        <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-500/10 text-[#34D399] border border-emerald-500/20">
                          {dailyActivity[selectedDayIndex].total} Total Actions
                        </span>
                      </div>

                      {/* Day Metric Breakdown Badges */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06] text-center">
                          <span className="text-[10px] text-slate-400 block font-medium">Applications</span>
                          <span className="text-base font-black text-blue-300">
                            {dailyActivity[selectedDayIndex].apps}
                          </span>
                        </div>
                        <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06] text-center">
                          <span className="text-[10px] text-slate-400 block font-medium">InMails</span>
                          <span className="text-base font-black text-cyan-300">
                            {dailyActivity[selectedDayIndex].outreach}
                          </span>
                        </div>
                        <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06] text-center">
                          <span className="text-[10px] text-slate-400 block font-medium">Referrals</span>
                          <span className="text-base font-black text-[#34D399]">
                            {dailyActivity[selectedDayIndex].referrals}
                          </span>
                        </div>
                      </div>

                      {/* Sector Focus */}
                      <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.06] mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Targeted Company Cohorts
                        </span>
                        <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                          {dailyActivity[selectedDayIndex].focusSectors}
                        </p>
                      </div>

                      {/* Milestone & Specialist Log */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white">Daily Milestone: </span>
                            <span className="text-slate-300">{dailyActivity[selectedDayIndex].milestone}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 text-xs text-slate-300">
                          <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white">Specialist Annotation: </span>
                            <span className="text-slate-300">{dailyActivity[selectedDayIndex].specialistNote}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Day Jump Selector Strip */}
                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-1">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        Inspect Day:
                      </span>
                      <div className="flex items-center gap-1">
                        {dailyActivity.map((item, idx) => (
                          <button
                            key={item.day}
                            type="button"
                            onClick={() => setSelectedDayIndex(idx)}
                            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              selectedDayIndex === idx
                                ? "bg-[#34D399] text-[#0B132B] shadow-sm font-black"
                                : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]"
                            }`}
                          >
                            {item.day[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SUB-VIEW 2: PIPELINE CONVERSION FUNNEL & VELOCITY */}
              {/* ========================================================================= */}
              {chartSubView === "funnel" && (
                <div className="rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-5 sm:p-7 space-y-6 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        Full-Funnel Candidate Pipeline Conversion
                      </h4>
                      <p className="text-xs text-slate-400">
                        How raw market openings convert into final interview loops &amp; multiple offers
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/20 px-3 py-1 rounded-xl w-fit">
                      Conversion Rate: 9.8% (4.6x Industry Average)
                    </span>
                  </div>

                  {/* 5-Stage Funnel Visual Progression */}
                  <div className="space-y-4">
                    {funnelStages.map((stage) => {
                      const StageIcon = stage.icon;
                      return (
                        <div
                          key={stage.stage}
                          className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 hover:border-blue-400/30 transition-all"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-black shrink-0">
                                {stage.stage}
                              </div>
                              <div className="flex items-center gap-2">
                                <StageIcon className="w-4 h-4 text-slate-300" />
                                <span className="text-sm font-bold text-white">{stage.title}</span>
                              </div>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                                {stage.tag}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 text-xs">
                              <span className="font-extrabold text-white sm:text-sm">{stage.count}</span>
                              <span className="text-slate-400">({stage.percentage} of radar)</span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full h-3 rounded-full bg-white/[0.06] overflow-hidden p-0.5 mb-2">
                            <div
                              className={`h-full rounded-full transition-all duration-700 bg-gradient-to-r from-blue-500 via-indigo-400 to-[#34D399]`}
                              style={{ width: stage.progressWidth }}
                            />
                          </div>

                          <p className="text-[11px] text-slate-400 leading-relaxed">
                            {stage.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Funnel ROI Insights Banner */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-400/20">
                      <div className="text-xs font-bold text-blue-200 mb-1">Zero Blind Spray-and-Pray</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Every single submission is pre-screened against your strict CTC threshold and tech stack boundaries.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20">
                      <div className="text-xs font-bold text-emerald-200 mb-1">1.8 Days Initial Response Time</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Direct outreach to verified engineering leads generates callbacks within 48 hours rather than weeks.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-400/20">
                      <div className="text-xs font-bold text-purple-200 mb-1">Multi-Offer Negotiation Power</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Coordinating 10–20 interview calls simultaneously gives candidates unmatched compensation leverage.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* SUB-VIEW 3: CHANNEL ROI & ALLOCATION ENGINE */}
              {/* ========================================================================= */}
              {chartSubView === "channels" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
                  {/* Left Column: Interactive SVG Donut Ring & Stats */}
                  <div className="lg:col-span-5 rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between items-center text-center">
                    <div className="w-full">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4 text-left">
                        <div>
                          <h4 className="text-sm font-bold text-white">Channel Allocation Ratio</h4>
                          <p className="text-[11px] text-slate-400">Multi-vector distribution</p>
                        </div>
                        <span className="text-[10px] font-bold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">
                          4 Active Vectors
                        </span>
                      </div>

                      {/* SVG Donut Ring Chart */}
                      <div className="relative w-48 h-48 mx-auto my-2 flex items-center justify-center">
                        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                          {/* Segment 1: LinkedIn 42% (Circumference ~ 408.4, 42% = 171.5) */}
                          <circle
                            cx="100"
                            cy="100"
                            r="65"
                            fill="transparent"
                            stroke="#3B82F6"
                            strokeWidth="22"
                            strokeDasharray="171.5 408.4"
                            strokeDashoffset="0"
                            className={`transition-all duration-300 cursor-pointer ${
                              selectedChannelIndex === 0 ? "opacity-100 filter drop-shadow(0 0 8px rgba(59,130,246,0.6))" : "opacity-80 hover:opacity-100"
                            }`}
                            onClick={() => setSelectedChannelIndex(0)}
                          />
                          {/* Segment 2: Naukri 28% (28% = 114.4) */}
                          <circle
                            cx="100"
                            cy="100"
                            r="65"
                            fill="transparent"
                            stroke="#8B5CF6"
                            strokeWidth="22"
                            strokeDasharray="114.4 408.4"
                            strokeDashoffset="-171.5"
                            className={`transition-all duration-300 cursor-pointer ${
                              selectedChannelIndex === 1 ? "opacity-100 filter drop-shadow(0 0 8px rgba(139,92,246,0.6))" : "opacity-80 hover:opacity-100"
                            }`}
                            onClick={() => setSelectedChannelIndex(1)}
                          />
                          {/* Segment 3: Recruiter Outreach 18% (18% = 73.5) */}
                          <circle
                            cx="100"
                            cy="100"
                            r="65"
                            fill="transparent"
                            stroke="#06B6D4"
                            strokeWidth="22"
                            strokeDasharray="73.5 408.4"
                            strokeDashoffset="-285.9"
                            className={`transition-all duration-300 cursor-pointer ${
                              selectedChannelIndex === 2 ? "opacity-100 filter drop-shadow(0 0 8px rgba(6,182,212,0.6))" : "opacity-80 hover:opacity-100"
                            }`}
                            onClick={() => setSelectedChannelIndex(2)}
                          />
                          {/* Segment 4: Referrals 12% (12% = 49.0) */}
                          <circle
                            cx="100"
                            cy="100"
                            r="65"
                            fill="transparent"
                            stroke="#10B981"
                            strokeWidth="22"
                            strokeDasharray="49.0 408.4"
                            strokeDashoffset="-359.4"
                            className={`transition-all duration-300 cursor-pointer ${
                              selectedChannelIndex === 3 ? "opacity-100 filter drop-shadow(0 0 8px rgba(16,185,129,0.6))" : "opacity-80 hover:opacity-100"
                            }`}
                            onClick={() => setSelectedChannelIndex(3)}
                          />
                        </svg>

                        {/* Center Metric Label */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <span className="text-2xl font-black text-white leading-none">
                            {channelBreakdown[selectedChannelIndex].share}%
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                            {channelBreakdown[selectedChannelIndex].shortName}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-3 italic leading-relaxed">
                      💡 Diversifying outreach across all 4 channels guarantees continuous inbound interview momentum without single-platform risk.
                    </p>
                  </div>

                  {/* Right Column: Interactive Channel Cards with Conversion Deep Dives */}
                  <div className="lg:col-span-7 space-y-3">
                    {channelBreakdown.map((ch, idx) => {
                      const isSelected = selectedChannelIndex === idx;
                      return (
                        <div
                          key={ch.id}
                          onClick={() => setSelectedChannelIndex(idx)}
                          className={`rounded-2xl p-4 transition-all duration-200 cursor-pointer border ${
                            isSelected
                              ? "bg-white/[0.06] border-blue-400/50 shadow-lg shadow-blue-500/10"
                              : "bg-[#070B19]/90 border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2.5">
                              <span
                                className="w-3 h-3 rounded-full shrink-0"
                                style={{ backgroundColor: ch.color }}
                              />
                              <h5 className="text-sm font-bold text-white">{ch.name}</h5>
                            </div>

                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${ch.accentBg}`}>
                              {ch.share}% • {ch.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2 text-xs border-y border-white/[0.06] my-2">
                            <div>
                              <span className="text-[10px] text-slate-400 block font-medium">Volume</span>
                              <span className="text-xs font-bold text-white">{ch.volume}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-400 block font-medium">Response Rate</span>
                              <span className="text-xs font-bold text-[#34D399]">{ch.responseRate}</span>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <span className="text-[10px] text-slate-400 block font-medium">Turnaround</span>
                              <span className="text-xs font-bold text-blue-300">{ch.avgSpeed}</span>
                            </div>
                          </div>

                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            {ch.advantage}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Progressive Activity Log */}
          {selectedTab === "log" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="text-xs text-slate-400 mb-2 flex items-center justify-between">
                <span>Recent Progressive Actions Logged by CareerPilot Specialists</span>
                <span className="flex items-center gap-1 text-[#34D399]">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></span>
                  Real-time Candidate Audit Feed
                </span>
              </div>

              <div className="space-y-3">
                {sampleActivityLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-400/40 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#3E4C9A]/30 border border-[#3E4C9A]/40 text-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-bold text-white">{log.company}</span>
                          <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md border border-white/10">
                            {log.platform}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium mt-0.5">{log.role}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{log.action}</p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${log.badgeColor}`}>
                        {log.status}
                      </span>
                      <span className="text-[10px] text-slate-400 sm:mt-1.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{log.time}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Bar with Download Sample and CTA */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPdfModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/15 transition-colors cursor-pointer shadow-xs"
                id="view-sample-pdf-btn"
              >
                <Download className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span>View Sample PDF Digest</span>
              </button>
              <span className="text-[11px] text-slate-400 hidden lg:inline">
                Confidential Client Reference: CP-2026-IND
              </span>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] hover:from-[#4859b3] hover:to-[#5571d4] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#3E4C9A]/30 shrink-0"
            >
              <span>Get Your Weekly Career Digest</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* SAMPLE PDF DIGEST EXECUTIVE MODAL */}
      {pdfModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#0B132B] text-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="bg-[#101A36] px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#3E4C9A] flex items-center justify-center text-white shrink-0">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-bold text-[#34D399] uppercase tracking-wider truncate">
                    Official Executive Document Preview
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base font-extrabold text-white truncate">
                    CareerPilot Candidate Performance Digest
                  </h4>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPdfModalOpen(false)}
                className="text-slate-400 hover:text-white p-1.5 sm:p-2 rounded-xl focus:outline-none shrink-0"
                aria-label="Close Sample PDF Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Document Body (Styled like an executive PDF document) */}
            <div className="p-4 sm:p-7 space-y-5 sm:space-y-6 overflow-y-auto text-xs sm:text-sm text-slate-300">
              {/* Document Meta Header */}
              <div className="bg-[#070B19] rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block">
                    Candidate Reference
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    Client ID #CP-8492 • Senior Tech Lead
                  </span>
                  <p className="text-xs text-slate-400">Target CTC: ₹45L–₹60L • Bengaluru / Remote</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block">
                    Reporting Period
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#34D399]">
                    Week 3 (Friday Audit Delivered)
                  </span>
                  <p className="text-xs text-slate-400">Status: Active Recruitment Pipeline</p>
                </div>
              </div>

              {/* Executive Summary Stats */}
              <div>
                <h5 className="font-bold text-white text-xs sm:text-sm mb-2.5 sm:mb-3">1. Executive Weekly Volume Summary</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
                  <div className="bg-[#1C2541]/50 p-2.5 sm:p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-white">38</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase">Companies Applied</div>
                  </div>
                  <div className="bg-[#1C2541]/50 p-2.5 sm:p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-blue-300">42</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase">Recruiter Emails</div>
                  </div>
                  <div className="bg-[#1C2541]/50 p-2.5 sm:p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-purple-300">26</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase">Talent Leads Linked</div>
                  </div>
                  <div className="bg-[#1C2541]/50 p-2.5 sm:p-3 rounded-xl border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-[#34D399]">4</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase">Alumni Referrals</div>
                  </div>
                </div>
              </div>

              {/* Sample Verified Submissions Table */}
              <div>
                <h5 className="font-bold text-white text-xs sm:text-sm mb-2.5 sm:mb-3">2. Sample Application Audit Log (Week 3)</h5>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="min-w-[500px] w-full text-left text-xs text-slate-300">
                    <thead className="bg-[#101A36] text-white uppercase text-[10px] tracking-wider border-b border-white/10">
                      <tr>
                        <th className="py-2.5 px-3">Company</th>
                        <th className="py-2.5 px-3">Role</th>
                        <th className="py-2.5 px-3">Channel</th>
                        <th className="py-2.5 px-3">Application Detail</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-white">Stripe</td>
                        <td className="py-2.5 px-3">Staff Backend Eng</td>
                        <td className="py-2.5 px-3">LinkedIn Tailored</td>
                        <td className="py-2.5 px-3">Custom Go/Kubernetes notes + GitHub portfolio</td>
                        <td className="py-2.5 px-3 text-blue-300 font-semibold">Submitted</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-white">Razorpay</td>
                        <td className="py-2.5 px-3">Lead Platform Eng</td>
                        <td className="py-2.5 px-3">Direct Naukri Boost</td>
                        <td className="py-2.5 px-3">High-match ATS resume + 60-day notice confirmed</td>
                        <td className="py-2.5 px-3 text-amber-300 font-semibold">Under Review</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-white">Swiggy</td>
                        <td className="py-2.5 px-3">Principal Eng</td>
                        <td className="py-2.5 px-3">Internal Referral</td>
                        <td className="py-2.5 px-3">Referral submitted by Senior Staff Engineer alumni</td>
                        <td className="py-2.5 px-3 text-[#34D399] font-semibold">Referral Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Strategic Next Steps */}
              <div className="bg-[#101A36]/60 rounded-2xl p-4 border border-white/10">
                <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                  <span>3. Strategic Focus for Upcoming Week</span>
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focus on follow-ups with 8 hiring managers at CRED, Atlassian, and Coinbase who accepted LinkedIn connection requests. Target 10 newly posted Tier-1 leadership openings closing next Tuesday.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#101A36] px-4 sm:px-6 py-3.5 sm:py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[10px] sm:text-[11px] text-slate-400 text-center sm:text-left">
                Every Friday at 5:00 PM, an updated PDF and online audit like this is sent directly to you.
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setPdfModalOpen(false)}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors text-center"
                >
                  Close Preview
                </button>
                <a
                  href="#contact"
                  onClick={() => setPdfModalOpen(false)}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] text-white text-xs font-bold px-5 py-2 rounded-xl shadow-md transition-all text-center shrink-0"
                >
                  Start Your Concierge Service
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
