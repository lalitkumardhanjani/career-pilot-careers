import React from "react";
import {
  FileText,
  Compass,
  CheckSquare,
  Send,
  MailCheck,
  LineChart,
  ShieldAlert,
  ArrowUpRight,
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

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-[#DCE6F2]" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#20A486] bg-[#20A486]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Full-Spectrum Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            A Complete Job-Search Support System
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A506B] leading-relaxed">
            Our career-support team manages your end-to-end application workflow with expert review, multi-channel outreach, and structured tracking.
          </p>
        </div>

        {/* 6 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {siteConfig.services.map((srv) => {
            const Icon = iconMap[srv.icon] || FileText;
            return (
              <div
                key={srv.id}
                className="rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-[#DCE6F2] hover:border-[#3E4C9A]/50 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EAF1FA] text-[#3E4C9A]">
                      Service {srv.letter} • {srv.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#3E4C9A]/10 text-[#3E4C9A]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B] mb-2.5">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#3A506B] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE6F2]/70 flex items-center justify-between text-xs font-semibold text-[#3E4C9A]">
                  <span>Managed by Career Experts</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Application Philosophy Line */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#DCE6F2] p-5 sm:p-6 shadow-sm">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#20A486]/15 text-[#20A486] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-[#1C2541] font-medium leading-relaxed">
              <strong className="text-[#0B132B]">Quality & Relevance Focus:</strong>{" "}
              {siteConfig.compliance.applicationPhilosophy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
