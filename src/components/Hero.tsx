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
  UserCheck,
  Zap,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Hero: React.FC = () => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(0);

  const workflowSteps = [
    {
      id: 0,
      name: "01 • Optimize",
      shortLabel: "Tailored Resume & ATS",
      icon: FileCheck2,
      tag: "Stage 01 • ATS 96%+",
      detail: "Audit resume against target role JDs, rewrite bullet points with quantified metrics, and calibrate ATS compatibility.",
      previewTitle: "Market-Driven Resume Calibration & Keyword Indexing",
      previewContent: "Audited resume against Staff Backend criteria • Quantified 4 key achievements (18k QPS, 42% latency reduction) • ATS compatibility score elevated from 62% to 96%.",
      previewBadge: "Calibrated to Market",
      telemetry: "Scanned against 50+ Senior Tech JDs",
    },
    {
      id: 1,
      name: "02 • Discover",
      shortLabel: "High-Signal Radar",
      icon: Crosshair,
      tag: "Stage 02 • Daily Radar",
      detail: "Algorithmic scanning identifies active, verified openings strictly matching target CTC, seniority, and tech stack.",
      previewTitle: "Target Company & Verified Opening Radar",
      previewContent: "Scanned 142 opportunities across LinkedIn & corporate portals • Curated 18 top-tier matches with verified recruiter emails (Atlassian, Razorpay, Stripe, Swiggy).",
      previewBadge: "18 High-Fit Roles Locked",
      telemetry: "CTC: ₹35L–₹55L / $150k+ Aligned",
    },
    {
      id: 2,
      name: "03 • Connect",
      shortLabel: "Recruiter Network",
      icon: UserCheck,
      tag: "Stage 03 • Talent CRM",
      detail: "Proactively connect with specialized headhunters and internal talent partners before roles go public.",
      previewTitle: "Talent Acquisition & Executive Network Expansion",
      previewContent: "Targeted outreach delivered to Lead Talent Partners at Atlassian and Razorpay • 12 new recruiter connections accepted with positive introductory chats.",
      previewBadge: "12 Recruiter Connections",
      telemetry: "High Engagement Index",
    },
    {
      id: 3,
      name: "04 • Refer",
      shortLabel: "Dual Referral Engine",
      icon: Users2,
      tag: "Stage 04 • 5x Callbacks",
      detail: "Activate warm referrals from 1st-degree alumni network and send context-aware outreach to target company insiders.",
      previewTitle: "Dual-Vector Employee Referral Strategy",
      previewContent: "Approached 4 university alumni and 3 verified senior engineers at target firms • 2 internal employee referral codes confirmed for Staff Distributed Systems roles.",
      previewBadge: "2 Referrals Secured",
      telemetry: "5x Higher Interview Callback Probability",
    },
    {
      id: 4,
      name: "05 • Apply",
      shortLabel: "Curated Applications",
      icon: SendHorizontal,
      tag: "Stage 05 • Curated Apply",
      detail: "Submit tailored applications on LinkedIn and boost Naukri FastForward search rank with keyword optimization.",
      previewTitle: "Smart Application & Naukri Search Booster",
      previewContent: "Submitted 14 tailored applications with role-specific cover notes • Boosted Naukri FastForward visibility into the top 3% search bracket.",
      previewBadge: "14 Applications Submitted",
      telemetry: "Top 3% Recruiter Search Visibility",
    },
    {
      id: 5,
      name: "06 • Track",
      shortLabel: "Command Center",
      icon: BarChart4,
      tag: "Stage 06 • Real-Time Log",
      detail: "Real-time command center tracks all applications, recruiter replies, and interview invitations with a weekly intelligence digest.",
      previewTitle: "Real-Time Pipeline Command Center & Friday Digest",
      previewContent: "Real-time pipeline tracking: 3 preliminary recruiter calls coordinated • Comprehensive Friday intelligence report prepared with strategic next steps.",
      previewBadge: "3 Interview Calls Scheduled",
      telemetry: "100% Visibility • Zero Guesswork",
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
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 overflow-hidden bg-[#0B132B] text-white">
      {/* Background Decorative Ambient Radial Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(62,76,154,0.35),rgba(11,19,43,0))] pointer-events-none" />
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
            <span className="font-semibold text-white">Dedicated Professional Career Team</span>
            <span className="text-slate-500 hidden xs:inline">•</span>
            <span className="text-blue-300 font-semibold">Working Actively For You</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 sm:mb-6 break-words">
            Focus on Your Demanding Work. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-200 to-[#34D399]">
              Our Dedicated Team Pilots Your Entire Job Search.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-7 sm:mb-8 max-w-2xl mx-auto">
            {siteConfig.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-6">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3E4C9A] via-[#4F67B8] to-[#10B981] hover:from-[#4859b3] hover:to-[#34D399] text-white font-bold text-sm sm:text-base px-7 sm:px-9 py-3.5 rounded-xl shadow-xl shadow-[#3E4C9A]/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none"
              id="hero-primary-cta"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Schedule Career Strategy Call</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              id="hero-secondary-cta"
            >
              <span>Explore Services Executed For You</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>14-Day 100% Refund Guarantee</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>100% Personalized Outreach</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>Zero Generic Spam</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>Save 15–20 Hours Every Week</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>All Platform Premiums Included</span>
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
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-[#101A36]/90 border border-white/10 backdrop-blur-2xl p-4 sm:p-7 md:p-10 shadow-2xl shadow-black/60">
            {/* Dashboard Visualizer Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 sm:pb-6 border-b border-white/[0.08] gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <div className="flex items-center gap-2 text-[#34D399] text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>What We Actively Execute For You</span>
                </div>
                <h2 className="text-base sm:text-xl font-extrabold text-white">
                  Week-by-Week Execution Snapshot
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#0B132B]/80 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10 w-fit">
                <Lock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span className="font-semibold">Candidate-Controlled &amp; Confidential</span>
              </div>
            </div>

            {/* 6-Stage Workflow Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 relative mb-6 sm:mb-8">
              {workflowSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeWorkflowStage === idx;
                return (
                  <button
                    key={step.name}
                    onClick={() => setActiveWorkflowStage(idx)}
                    type="button"
                    className={`relative text-left p-3 rounded-2xl transition-all duration-300 focus:outline-none cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-b from-[#3E4C9A]/70 to-[#1C2541] border-2 border-blue-400/80 shadow-xl shadow-[#3E4C9A]/30 translate-y-[-2px]"
                        : "bg-[#0B132B]/60 border border-white/[0.08] hover:border-white/20 hover:bg-[#0B132B]/90"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-[#34D399] text-[#070B19]"
                            : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {step.name.split(" • ")[0]}
                      </span>
                      <IconComponent
                        className={`w-4 h-4 ${
                          isActive ? "text-[#34D399]" : "text-slate-400"
                        }`}
                      />
                    </div>
                    <h3 className="font-bold text-xs text-white mb-0.5 leading-snug">
                      {step.shortLabel}
                    </h3>
                    <p className="text-[10px] text-slate-300 line-clamp-2 leading-tight">
                      {step.detail}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Visualizer Live Mock Preview Card */}
            <div className="rounded-2xl bg-[#070B19]/95 border border-white/[0.08] p-4 sm:p-6 md:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3E4C9A]/30 to-[#10B981]/20 border border-blue-400/20 flex items-center justify-center text-[#34D399] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider block">
                      {workflowSteps[activeWorkflowStage].tag}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {workflowSteps[activeWorkflowStage].previewTitle}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20">
                    {workflowSteps[activeWorkflowStage].previewBadge}
                  </span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.04]">
                <p className="font-mono text-slate-200 mb-2">
                  {workflowSteps[activeWorkflowStage].previewContent}
                </p>
                <div className="text-[11px] text-[#34D399] flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Specialist Status: {workflowSteps[activeWorkflowStage].telemetry}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span className="italic">
                  Managed meticulously by your dedicated CareerPilot team while you stay focused on your daily deliverables.
                </span>
                <a
                  href="#contact"
                  className="text-blue-300 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Request Full Candidate Onboarding</span>
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


