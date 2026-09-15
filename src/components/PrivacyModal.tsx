import React, { useEffect } from "react";
import { X, ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#DCE6F2] overflow-hidden my-4 sm:my-8">
        {/* Modal Header */}
        <div className="bg-[#0B132B] px-4 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#20A486]/20 flex items-center justify-center text-[#20A486] shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h3 id="privacy-modal-title" className="text-base sm:text-lg font-bold leading-tight truncate">
                {siteConfig.brandName} Privacy Principles
              </h3>
              <p className="text-[11px] sm:text-xs text-[#EAF1FA]/75 truncate">
                Clear, candidate-first privacy and account security guidelines
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#EAF1FA]/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#20A486] shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 max-h-[75vh] overflow-y-auto space-y-5 sm:space-y-6 text-xs sm:text-sm text-[#3A506B]">
          <div className="rounded-xl bg-[#EAF1FA] border border-[#DCE6F2] p-3.5 sm:p-4 text-[#0B132B]">
            <p className="font-semibold text-xs sm:text-sm leading-relaxed">
              We help you choose a safe, privacy-conscious workflow that fits your existing professional presence. We never encourage duplicate accounts or unnecessary password sharing.
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.privacyPrinciples.map((principle, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#20A486] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B132B] text-sm sm:text-base">
                    {idx + 1}. {principle.title}
                  </h4>
                  <p className="mt-1 leading-relaxed text-xs sm:text-sm text-[#3A506B]">
                    “{principle.description}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#DCE6F2] text-xs text-[#3A506B]/80 space-y-2">
            <p>
              Dedicated Search Email Recommendation: Many clients prefer creating a separate, professional Gmail address (e.g., <em>yourname.careers@gmail.com</em>) exclusively for recruitment correspondence. This keeps your personal inbox completely private.
            </p>
            <p>
              Questions or Data Inquiries: You can reach our privacy liaison at {siteConfig.contact.email} at any time.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8FAFC] px-4 sm:px-6 py-3.5 sm:py-4 border-t border-[#DCE6F2] flex items-center justify-between">
          <span className="text-xs text-[#3A506B] flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#20A486]" />
            <span>Verified Confidentiality</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-semibold px-4 sm:px-5 py-2 rounded-xl transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
