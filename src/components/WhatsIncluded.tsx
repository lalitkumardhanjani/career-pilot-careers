import React from "react";
import {
  FileText,
  Compass,
  CheckSquare,
  Send,
  MailCheck,
  LineChart,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const WhatsIncluded: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    FileText,
    Compass,
    CheckSquare,
    Send,
    MailCheck,
    LineChart,
  };

  const serviceHighlights: Record<string, string[]> = {
    "A": ["Resume formatting & ATS audit", "Seniority & tech framing", "Keyword alignment for recruiters"],
    "B": ["Zero spam or generic portal lists", "Target CTC & location filtered", "Daily curated high-signal roles"],
    "C": ["Tailored application answers", "Portfolio & experience notes", "Daily application tracking logs"],
    "D": ["Naukri profile boost & keywords", "Recruiter search visibility audit", "Direct employer application submissions"],
    "E": ["Personalized notes to hiring leads", "Internal alumni referral outreach", "Multi-channel candidate advocacy"],
    "F": ["Complete Friday progress digest", "Emails sent & response analytics", "Next-week strategic plan"],
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80 relative" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Full-Spectrum Career Concierge
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            A Complete Done-For-You Job Search System
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our career experts handle your end-to-end job hunt: resume positioning, daily curated discovery, LinkedIn & Naukri application submissions, and proactive recruiter outreach.
          </p>
        </div>

        {/* 6 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {siteConfig.services.map((srv) => {
            const Icon = iconMap[srv.icon] || FileText;
            const highlights = serviceHighlights[srv.letter] || [];
            return (
              <div
                key={srv.id}
                className="rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-slate-200/90 hover:border-[#3E4C9A]/50 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EBF0FA] text-[#3E4C9A] border border-[#3E4C9A]/15">
                      Service {srv.letter} • {srv.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] text-[#3E4C9A] border border-[#3E4C9A]/15 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B] mb-2.5 group-hover:text-[#3E4C9A] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-2">
                    {highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#3E4C9A]">
                  <span>Executed by Career Specialists</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Application Philosophy Line */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              <strong className="text-[#0B132B]">Quality & Relevance First:</strong>{" "}
              {siteConfig.compliance.applicationPhilosophy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

