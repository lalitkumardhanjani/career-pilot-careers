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
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Hero: React.FC = () => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(2); // 0-indexed, default to "Applications"

  const workflowSteps = [
    {
      id: 0,
      name: "Role & Criteria Alignment",
      icon: FileCheck2,
      tag: "Stage 01",
      detail: "Define target roles, compensation range, locations, and companies to prioritize or avoid.",
    },
    {
      id: 1,
      name: "Targeted Discovery",
      icon: Crosshair,
      tag: "Stage 02",
      detail: "Daily curated filtering of verified openings across LinkedIn, Naukri, and target firms.",
    },
    {
      id: 2,
      name: "Applications Executed",
      icon: SendHorizontal,
      tag: "Stage 03",
      detail: "Our team submits agreed applications on LinkedIn & Naukri while you stay focused at work.",
    },
    {
      id: 3,
      name: "Strategic Outreach",
      icon: Users2,
      tag: "Stage 04",
      detail: "Personalized messages prepared and delivered to hiring managers and employee referral contacts.",
    },
    {
      id: 4,
      name: "Weekly Progress Digest",
      icon: BarChart4,
      tag: "Stage 05",
      detail: "Every Friday, receive a full breakdown of completed applications, recruiter responses, and strategic next steps.",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#121c3b] to-[#0B132B] text-white">
      {/* Background Decorative Atmosphere Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#20A486]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#1C2541]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          {/* Busy Professional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541]/90 border border-[#EAF1FA]/20 text-[#EAF1FA] text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#20A486]" />
            <span>{siteConfig.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Focus on Your Work. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#EAF1FA] to-[#20A486]">
              We’ll Pilot Your Next Move.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#EAF1FA]/90 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            {siteConfig.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-[#3E4C9A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20A486]"
              id="hero-primary-cta"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1C2541]/80 hover:bg-[#1C2541] text-[#EAF1FA] hover:text-white font-semibold text-base px-7 py-3.5 rounded-xl border border-[#EAF1FA]/25 transition-all duration-200 hover:-translate-y-0.5"
              id="hero-secondary-cta"
            >
              <span>See How It Works</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust statement below CTA */}
          <p className="text-xs sm:text-sm text-[#EAF1FA]/75 font-medium tracking-wide flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#20A486]" />
            <span>{siteConfig.hero.trustStatement}</span>
          </p>
        </div>

        {/* Abstract Workflow Visual */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#1C2541]/75 border border-[#EAF1FA]/20 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#EAF1FA]/10 gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-[#20A486] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Co-Pilot Workflow Engine</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Done-For-You Application Execution
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#EAF1FA]/75 bg-[#0B132B]/60 px-3.5 py-1.5 rounded-lg border border-[#EAF1FA]/10 w-fit">
                <Lock className="w-3.5 h-3.5 text-[#20A486]" />
                <span>100% Candidate Controlled & Confidential</span>
              </div>
            </div>

            {/* Workflow steps sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative mb-8">
              {workflowSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeWorkflowStage === idx;
                return (
                  <button
                    key={step.name}
                    onClick={() => setActiveWorkflowStage(idx)}
                    type="button"
                    className={`relative text-left p-4 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E4C9A] ${
                      isActive
                        ? "bg-[#3E4C9A]/50 border-2 border-[#3E4C9A] shadow-lg shadow-[#3E4C9A]/20 translate-y-[-2px]"
                        : "bg-[#0B132B]/50 border border-[#EAF1FA]/15 hover:border-[#EAF1FA]/30 hover:bg-[#0B132B]/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-[#20A486] text-[#0B132B]"
                            : "bg-white/10 text-[#EAF1FA]/70"
                        }`}
                      >
                        {step.tag}
                      </span>
                      <IconComponent
                        className={`w-5 h-5 ${
                          isActive ? "text-[#20A486]" : "text-[#EAF1FA]/60"
                        }`}
                      />
                    </div>
                    <h3 className="font-semibold text-sm text-white mb-1">
                      {step.name}
                    </h3>
                    <p className="text-xs text-[#EAF1FA]/70 line-clamp-2">
                      {step.detail}
                    </p>

                    {/* Progress indicator connector arrow for desktop */}
                    {idx < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#EAF1FA]/30">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stage Detail Visualizer Card */}
            <div className="rounded-xl bg-[#0B132B]/80 border border-[#EAF1FA]/15 p-4 sm:p-6">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#20A486]/20 flex items-center justify-center text-[#20A486] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#20A486] uppercase tracking-wider">
                      Active Stage Breakdown
                    </span>
                    <span className="text-xs text-[#EAF1FA]/60">• Stage 0{activeWorkflowStage + 1} of 5</span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                    {workflowSteps[activeWorkflowStage].name}:{" "}
                    <span className="font-normal text-[#EAF1FA]/90">
                      {workflowSteps[activeWorkflowStage].detail}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
