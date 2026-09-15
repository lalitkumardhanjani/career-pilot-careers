import React, { useState } from "react";
import {
  ShieldCheck,
  KeyRound,
  Lock,
  Mail,
  FileCheck,
  Shield,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { PrivacyModal } from "./PrivacyModal";

export const PrivacySection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const principleIcons = [
    FileCheck,
    KeyRound,
    Lock,
    Mail,
    ShieldCheck,
    HelpCircle,
  ];

  return (
    <>
      <section
        className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden"
        id="privacy"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#3E4C9A] mx-auto mb-5">
              <Shield className="w-7 h-7" />
            </div>

            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
              Confidentiality & Control
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Your Professional Privacy Comes First.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We help you choose a safe, privacy-conscious workflow that protects your existing employment. You remain in total control of your accounts and criteria at every step.
            </p>
          </div>

          {/* 6 Exact Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {siteConfig.privacyPrinciples.map((item, idx) => {
              const Icon = principleIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] border border-[#3E4C9A]/15 flex items-center justify-center text-[#3E4C9A] shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-[#0B132B] mb-1.5 group-hover:text-[#3E4C9A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        “{item.description}”
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Read Privacy Principles Action Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#0B132B] hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#3E4C9A]"
              id="privacy-principles-btn"
            >
              <ShieldCheck className="w-4 h-4 text-[#34D399]" />
              <span>Read Full Privacy Principles</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Principles Modal */}
      <PrivacyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

