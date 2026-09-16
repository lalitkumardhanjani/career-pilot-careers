import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Lock,
  Sparkles,
  Clock,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Hero: React.FC = () => {
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
            <span className="font-semibold text-white">Dedicated Career Team For Busy Professionals</span>
            <span className="text-slate-500 hidden xs:inline">•</span>
            <span className="text-blue-300 font-semibold">100% Done-For-You</span>
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
              <span>Talk to Our Career Team</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              id="hero-secondary-cta"
            >
              <span>See What We Do For You</span>
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
              <span>Real Human Outreach • No Spam</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>Current Employer 100% Safe</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>Save 15–20 Hours Every Week</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
              <span>All Platform Fees Included</span>
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

        {/* Premium Live Candidate Search Dashboard Snapshot Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-[#101A36]/90 border border-white/15 backdrop-blur-2xl p-5 sm:p-8 md:p-10 shadow-2xl shadow-black/60 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3E4C9A]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/10 gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#10B981] animate-ping" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#34D399] block">
                      Live Candidate Search in Progress
                    </span>
                    <h2 className="text-base sm:text-lg font-extrabold text-white">
                      Target: ₹35L – ₹55L / $150k+ • Senior / Staff Tech Roles
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 bg-[#0B132B]/90 px-3.5 py-1.5 rounded-xl border border-white/10 w-fit">
                  <Lock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                  <span className="font-semibold">100% Private • Blacklisted Current Company</span>
                </div>
              </div>

              {/* 4 Core Real-Time Pulse Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-[#070B19]/80 rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Resume ATS Score</span>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">96%</div>
                  <span className="text-[10px] text-emerald-300/80">Rewritten by Specialists</span>
                </div>

                <div className="bg-[#070B19]/80 rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Hand-Picked Jobs</span>
                  <div className="text-2xl sm:text-3xl font-black text-blue-300">42</div>
                  <span className="text-[10px] text-blue-300/80">Matched to Target CTC</span>
                </div>

                <div className="bg-[#070B19]/80 rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Employee Referrals</span>
                  <div className="text-2xl sm:text-3xl font-black text-[#34D399]">3 Confirmed</div>
                  <span className="text-[10px] text-emerald-300/80">Swiggy, Atlassian, Razorpay</span>
                </div>

                <div className="bg-[#070B19]/80 rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Interview Rounds</span>
                  <div className="text-2xl sm:text-3xl font-black text-purple-300">4 Scheduled</div>
                  <span className="text-[10px] text-purple-300/80">Recruiter &amp; Tech Screens</span>
                </div>
              </div>

              {/* Recent Live Activity Log Feed */}
              <div className="bg-[#070B19]/90 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-white/[0.06] pb-2">
                  <span>What Our Team Executed This Week:</span>
                  <span className="text-[#34D399] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Live Activity
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">Interview Call Confirmed:</strong> Atlassian Technical Screen coordinated for Thursday at 4:00 PM IST.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">Internal Employee Referral:</strong> Secured through college alumni currently at Razorpay (Engineering Team).
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">Direct Recruiter Outreach:</strong> 18 personalized emails sent to Engineering Directors; 12 positive replies received.
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Reassurance Strip */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-2">
                <span className="italic">
                  Handled completely by your dedicated CareerPilot team while you focus on your work and personal life.
                </span>
                <a
                  href="#features"
                  className="text-blue-300 hover:text-white font-semibold flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Explore Our 7-Step Process Below</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


