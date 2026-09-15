import React, { useState } from "react";
import { ShieldCheck, Mail, Phone, MessageCircle, ExternalLink, X } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { PrivacyModal } from "./PrivacyModal";

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0B132B] text-white border-t border-[#EAF1FA]/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#EAF1FA]/10">
            {/* Brand column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3E4C9A] to-[#20A486] p-[1.5px]">
                  <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#20A486]" />
                  </div>
                </div>
                <div>
                  <span className="text-white font-bold text-lg tracking-tight block">
                    {siteConfig.brandName}
                  </span>
                  <span className="text-[#EAF1FA]/70 text-xs font-medium uppercase tracking-wider block">
                    {siteConfig.tagline}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#EAF1FA]/70 max-w-md leading-relaxed mb-6">
                Assisting professionals with personalized resume review, targeted opportunity discovery, LinkedIn & Naukri application support, recruiter outreach, and transparent weekly progress reporting.
              </p>

              <div className="flex items-center gap-4 text-xs text-[#EAF1FA]/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#20A486]"></span>
                  <span>Privacy-First Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3E4C9A]"></span>
                  <span>Transparent Weekly Reporting</span>
                </div>
              </div>
            </div>

            {/* Direct Contact info */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#20A486] mb-4">
                Direct Communication
              </h4>
              <ul className="space-y-3 text-sm text-[#EAF1FA]/85">
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#20A486] shrink-0" />
                    <span className="break-all">{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#20A486] shrink-0" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#20A486] shrink-0" />
                    <span>WhatsApp Direct Support</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links & Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#20A486] mb-4">
                Navigation & Policies
              </h4>
              <ul className="space-y-2.5 text-sm text-[#EAF1FA]/80">
                <li>
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>Privacy Principles</span>
                    <ExternalLink className="w-3 h-3 text-[#20A486]" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setTermsOpen(true)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>Terms of Service</span>
                    <ExternalLink className="w-3 h-3 text-[#20A486]" />
                  </button>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact & Inquiries
                  </a>
                </li>
                <li>
                  <a href="#weekly-updates" className="hover:text-white transition-colors">
                    Weekly Activity Digest
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Monthly Plans
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Compliance & Trademark Disclaimer */}
          <div className="pt-8 pb-4 text-xs text-[#EAF1FA]/65 leading-relaxed space-y-2">
            <p className="bg-[#1C2541]/60 border border-[#EAF1FA]/10 rounded-xl p-4">
              <strong>Service Notice:</strong> {siteConfig.compliance.platformDisclaimer}{" "}
              {siteConfig.compliance.noGuaranteeStatement}
            </p>
          </div>

          {/* Copyright line */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAF1FA]/50 gap-2">
            <p>© {currentYear} {siteConfig.brandName}. All rights reserved.</p>
            <p>Designed for professional job seekers in India and internationally.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

      {/* Terms Modal */}
      {termsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#DCE6F2] overflow-hidden">
            <div className="bg-[#0B132B] px-6 py-4 text-white flex items-center justify-between">
              <h3 className="font-bold text-base">{siteConfig.brandName} — Terms of Service</h3>
              <button
                type="button"
                onClick={() => setTermsOpen(false)}
                className="text-[#EAF1FA] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-sm text-[#3A506B] space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="font-bold text-[#0B132B]">1. Scope of Career Support</h4>
                <p className="text-xs sm:text-sm mt-1">
                  {siteConfig.brandName} provides structured application management, resume review, opportunity discovery, recruiter outreach support, and weekly reporting. We do not operate as an employment agency or guaranteed placement service.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B132B]">2. Month-to-Month Subscription & Cancellation</h4>
                <p className="text-xs sm:text-sm mt-1">
                  Services are billed on a month-to-month subscription basis. Clients may discontinue renewal before the start of any upcoming monthly cycle without penalty.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B132B]">3. Hiring Decisions & Disclaimers</h4>
                <p className="text-xs sm:text-sm mt-1">
                  Interview calls, recruiter callbacks, and hiring selections depend exclusively upon employer decisions, applicant qualifications, and prevailing job market conditions.
                </p>
              </div>
            </div>
            <div className="bg-[#F8FAFC] px-6 py-3 border-t border-[#DCE6F2] text-right">
              <button
                type="button"
                onClick={() => setTermsOpen(false)}
                className="bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-semibold px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
