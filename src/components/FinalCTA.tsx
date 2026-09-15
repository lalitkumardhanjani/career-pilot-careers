import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Radiant Ambient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(62,76,154,0.35),rgba(11,19,43,0))] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101A36] border border-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xl backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#34D399]" />
          <span>Strategic Executive Career Concierge</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Ready to Bring Structure & Momentum <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-200 to-[#34D399]">
            to Your Next Career Move?
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let our career specialists manage the grueling 15–20 hours of daily job applications and recruiter outreach, while you stay focused on your current high-impact work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-8">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3E4C9A] via-[#4F67B8] to-[#3E4C9A] hover:from-[#4859b3] hover:to-[#5571d4] text-white font-bold text-sm sm:text-base px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-[#3E4C9A]/35 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#34D399]"
            id="final-cta-primary-btn"
          >
            <span>Schedule Free Strategy Consultation</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#10B981] hover:bg-[#0ea372] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-[#10B981]/25 transition-all duration-300 hover:-translate-y-0.5"
            id="final-cta-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
            <span>100% Confidential</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
            <span>15-Minute Intro Call</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
            <span>Zero Sales Pressure</span>
          </span>
        </div>
      </div>
    </section>
  );
};

