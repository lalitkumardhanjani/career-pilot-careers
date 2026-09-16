import React, { useEffect } from "react";
import { X, ShieldCheck, RotateCcw, Clock, Lock, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface CancellationPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CancellationPolicyModal: React.FC<CancellationPolicyModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="cancellation-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8">
        {/* Modal Header */}
        <div className="bg-[#0B132B] px-5 sm:px-7 py-5 text-white flex items-center justify-between gap-3 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-[#10B981]/20 border border-[#34D399]/40 flex items-center justify-center text-[#34D399] shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 id="cancellation-modal-title" className="text-base sm:text-lg font-extrabold leading-tight text-white">
                14-Day 100% Money-Back & Cancellation Policy
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Transparent, Zero-Risk Guarantee for Busy Working Professionals
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors focus:outline-none shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600">
          {/* Highlight Callout */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/70 border border-emerald-200/80 p-4 sm:p-5">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0B132B] text-sm sm:text-base">
                  The CareerPilot Zero-Risk Promise
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {siteConfig.cancellationPolicy.summary}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-bold text-emerald-800">
                  <span className="bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-300/60">
                    Window: {siteConfig.cancellationPolicy.period}
                  </span>
                  <span className="bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-300/60">
                    Refund: {siteConfig.cancellationPolicy.refundType}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Policy Terms */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Complete Policy Terms & Conditions
            </h4>

            {siteConfig.cancellationPolicy.terms.map((term, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/60 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-[#3E4C9A]/10 text-[#3E4C9A] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="font-bold text-[#0B132B] text-xs sm:text-sm">
                    {term.heading}
                  </h5>
                  <p className="mt-1 leading-relaxed text-xs text-slate-600">
                    {term.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Refund Processing Timeline */}
          <div className="rounded-2xl bg-[#0B132B] text-white p-4 sm:p-5 border border-white/10 shadow-md">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-white text-xs sm:text-sm">
                  Instant Request & Fast Refund Crediting
                </h5>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Refund requests are acknowledged and processed within <strong>24 business hours</strong>. Funds return directly to your original payment method (Credit Card, Debit Card, UPI, or Bank Wire) within <strong>3 to 5 business days</strong> depending on your banking provider.
                </p>
              </div>
            </div>
          </div>

          {/* Confidentiality Reminder */}
          <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-2 border-t border-slate-200">
            <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong>Permanent Confidentiality:</strong> Even in the event of cancellation or refund, your resume data, employment status, target compensation, and employer exclusion lists remain strictly confidential and protected under non-disclosure obligations.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8FAFC] px-5 sm:px-7 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-[#3E4C9A] flex items-center gap-1 font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span>•</span>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 text-emerald-800 flex items-center gap-1 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
