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
        className="py-20 lg:py-28 bg-gradient-to-b from-[#EAF1FA]/60 via-[#FFFFFF] to-[#EAF1FA]/40 border-y border-[#DCE6F2] relative"
        id="privacy"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-[#DCE6F2] flex items-center justify-center text-[#20A486] mx-auto mb-5">
              <Shield className="w-7 h-7" />
            </div>

            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#20A486] bg-[#20A486]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Confidentiality & Control
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Your Privacy Comes First.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3A506B] leading-relaxed">
              We help you choose a safe, privacy-conscious workflow that fits your existing professional presence. You remain in total control of your accounts and communications at every step.
            </p>
          </div>

          {/* 6 Exact Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {siteConfig.privacyPrinciples.map((item, idx) => {
              const Icon = principleIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#DCE6F2] p-6 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#20A486]/15 flex items-center justify-center text-[#20A486] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-[#0B132B] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#3A506B] leading-relaxed">
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
              className="inline-flex items-center gap-2 bg-[#0B132B] hover:bg-[#1C2541] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#20A486]"
              id="privacy-principles-btn"
            >
              <ShieldCheck className="w-4 h-4 text-[#20A486]" />
              <span>Read Our Privacy Principles</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#EAF1FA]/70" />
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Principles Modal */}
      <PrivacyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
