import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#0B132B] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#20A486]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2541] border border-[#EAF1FA]/20 text-[#EAF1FA] text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-[#20A486]" />
          <span>Strategic Career Acceleration</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to Bring Structure to Your Job Search?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#EAF1FA]/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us where you want to go next. We’ll help you understand whether our career-support service is the right fit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white font-bold text-base px-9 py-4 rounded-xl shadow-xl shadow-[#3E4C9A]/30 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#20A486]"
            id="final-cta-primary-btn"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#20A486] hover:bg-[#17856d] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-[#20A486]/20 transition-all duration-200 hover:-translate-y-0.5"
            id="final-cta-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
