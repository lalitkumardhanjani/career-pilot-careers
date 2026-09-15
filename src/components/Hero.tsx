import React, { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  FileCheck2,
  Crosshair,
  SendHorizontal,
  Users2,
  BarChart4,
  Lock,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(2); // 0-indexed, default to "Applications Executed"

  const workflowSteps = [
    {
      id: 0,
      name: "Role Criteria & Alignment",
      icon: FileCheck2,
      tag: "Stage 01",
      detail: "Define target roles, compensation range, locations, and companies to prioritize or avoid.",
      previewTitle: "Candidate Search Matrix & Compensation Boundaries",
      previewContent: "Target CTC: ₹35L - ₹55L / $140k - $200k • Senior Backend / Lead / Staff • Remote & Hybrid (BLR/HYD/US) • Exclusions: Early seed-stage, consulting services.",
      previewBadge: "Strategy Locked",
    },
    {
      id: 1,
      name: "Targeted High-Fit Discovery",
      icon: Crosshair,
      tag: "Stage 02",
      detail: "Daily curated filtering of verified openings across LinkedIn, Naukri, and target corporate career portals.",
      previewTitle: "Daily High-Signal Role Filtering",
      previewContent: "Curated 14 new openings today • Filtered down to 4 top-tier matches meeting tech stack (Go/Java/Distributed Systems) and verified recruiter contact.",
      previewBadge: "Filtered Daily",
    },
    {
      id: 2,
      name: "Applications Executed",
      icon: SendHorizontal,
      tag: "Stage 03",
      detail: "Our team submits agreed applications on LinkedIn & Naukri with tailored answers while you stay focused at work.",
      previewTitle: "LinkedIn & Naukri Application Management",
      previewContent: "Submitted customized applications to Razorpay & Atlassian • Custom candidate notes, matching portfolio links, and screening question responses submitted.",
      previewBadge: "Applications Logged",
    },
    {
      id: 3,
      name: "Recruiter & Referral Outreach",
      icon: Users2,
      tag: "Stage 04",
      detail: "Personalized notes prepared and delivered to talent partners, hiring managers, and internal alumni for referrals.",
      previewTitle: "Direct Talent Acquisition & Referral Pipeline",
      previewContent: "Direct outreach delivered to Senior Engineering Recruiters at Swiggy & Microsoft • Connected with internal alumni for 2 verified employee referral codes.",
      previewBadge: "Outreach Delivered",
    },
    {
      id: 4,
      name: "Friday Intelligence Digest",
      icon: BarChart4,
      tag: "Stage 05",
      detail: "Every Friday, receive a comprehensive audit of all completed applications, recruiter responses, and strategic next steps.",
      previewTitle: "Transparent Candidate Progress Digest",
      previewContent: "Weekly Summary: 38 companies applied, 42 direct outreach emails sent, 4 verified referrals secured, 3 recruiter initial screening chats coordinated.",
      previewBadge: "Friday 5 PM Digest",
    },
  ];

  const targetCompanies = [
    "Microsoft",
    "Amazon",
    "Razorpay",
    "Flipkart",
    "Swiggy",
    "Google",
    "Stripe",
    "CRED",
    "Atlassian",
    "Zomato",
  ];

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-28 overflow-hidden bg-[#0B132B] text-white">
      {/* Background Decorative Ambient Radial Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(62,76,154,0.3),rgba(11,19,43,0))] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4F67B8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Matrix Background */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          {/* Executive Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium mb-5 sm:mb-6 shadow-xl backdrop-blur-md max-w-full flex-wrap justify-center">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="font-semibold text-white">Executive Career Concierge</span>
            <span className="text-slate-500 hidden xs:inline">•</span>
            <span className="text-slate-300">For Full-Time Working Professionals</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 sm:mb-6 break-words">
            Focus on Your Demanding Work. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-200 to-[#34D399]">
              We’ll Pilot Your Next Career Move.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-7 sm:mb-8 max-w-2xl mx-auto">
            When 10-hour workdays and meetings leave zero time to scroll job boards or tailor repetitive applications, our dedicated career team takes over. We curate high-fit openings, submit agreed applications on LinkedIn & Naukri, and coordinate recruiter outreach on your behalf.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-6">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3E4C9A] via-[#4F67B8] to-[#3E4C9A] hover:from-[#4859b3] hover:to-[#5571d4] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-xl shadow-xl shadow-[#3E4C9A]/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
              id="hero-primary-cta"
            >
              <span>Schedule Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              id="hero-secondary-cta"
            >
              <span>Explore How It Works</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Lock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>No Primary Passwords Required</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>100% Candidate Controlled Criteria</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>Save 15–20 Hours Every Week</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>Transparent Friday Digest</span>
            </span>
          </div>
        </div>

        {/* Social Proof Company Strip */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-14 pt-6 border-t border-white/[0.08] text-center">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 sm:mb-4">
            Targeting senior engineering, product, & leadership openings across top companies:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {targetCompanies.map((company) => (
              <span
                key={company}
                className="text-xs sm:text-sm font-semibold text-slate-300 bg-white/[0.04] px-2.5 sm:px-3 py-1 rounded-lg border border-white/[0.06] hover:text-white hover:border-white/20 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* The Co-Pilot Workflow Engine Interactive Dashboard Visualizer */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-[#101A36]/80 border border-white/10 backdrop-blur-2xl p-4 sm:p-7 md:p-10 shadow-2xl shadow-black/60">
            {/* Dashboard Visualizer Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 sm:pb-6 border-b border-white/[0.08] gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <div className="flex items-center gap-2 text-[#34D399] text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>The Co-Pilot Workflow Engine</span>
                </div>
                <h2 className="text-base sm:text-xl font-extrabold text-white">
                  Done-For-You Application & Outreach Execution
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#0B132B]/80 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10 w-fit">
                <Lock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span className="font-semibold">100% Candidate Controlled & Confidential</span>
              </div>
            </div>

            {/* Workflow Stage Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative mb-6 sm:mb-8">
              {workflowSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeWorkflowStage === idx;
                return (
                  <button
                    key={step.name}
                    onClick={() => setActiveWorkflowStage(idx)}
                    type="button"
                    className={`relative text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "bg-gradient-to-b from-[#3E4C9A]/60 to-[#1C2541] border-2 border-blue-400/80 shadow-xl shadow-[#3E4C9A]/30 translate-y-[-2px]"
                        : "bg-[#0B132B]/60 border border-white/[0.08] hover:border-white/20 hover:bg-[#0B132B]/90"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-[#34D399] text-[#070B19]"
                            : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {step.tag}
                      </span>
                      <IconComponent
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isActive ? "text-[#34D399]" : "text-slate-400"
                        }`}
                      />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-white mb-1 leading-snug">
                      {step.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {step.detail}
                    </p>

                    {/* Progress indicator connector arrow for desktop */}
                    {idx < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Visualizer Live Mock Preview Card */}
            <div className="rounded-2xl bg-[#070B19]/90 border border-white/[0.08] p-4 sm:p-6 md:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3E4C9A]/30 to-[#10B981]/20 border border-blue-400/20 flex items-center justify-center text-[#34D399] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider block">
                      Stage 0{activeWorkflowStage + 1} Operational View
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {workflowSteps[activeWorkflowStage].previewTitle}
                    </h4>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 self-start sm:self-auto">
                  {workflowSteps[activeWorkflowStage].previewBadge}
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.04]">
                <p className="font-mono text-slate-200">
                  {workflowSteps[activeWorkflowStage].previewContent}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span className="italic">
                  Handled entirely by our career team while you stay focused on daily work.
                </span>
                <a
                  href="#contact"
                  className="text-blue-300 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Request Full Concierge Walkthrough</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

