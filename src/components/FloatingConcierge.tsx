import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const FloatingConcierge: React.FC = () => {
  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);

  return (
    <aside aria-label="Quick Concierge Chat" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 select-none">
      {/* Floating Prompt Pill (Dismissible) */}
      {!isTooltipDismissed && (
        <div className="bg-[#0B132B]/95 text-white backdrop-blur-xl border border-white/15 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-2.5 max-w-[250px] sm:max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse shrink-0" />
          <div className="text-[10px] sm:text-[11px] leading-tight min-w-0">
            <span className="font-bold text-white block truncate">Concierge Desk Active</span>
            <span className="text-slate-300 truncate block">Ask a career advisor directly</span>
          </div>
          <button
            type="button"
            onClick={() => setIsTooltipDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5 rounded-md focus:outline-none ml-1 shrink-0"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Primary WhatsApp Action Button */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#12c48b] hover:to-[#047857] text-white p-3 sm:px-4 sm:py-3 rounded-full sm:rounded-2xl shadow-xl shadow-[#10B981]/30 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#34D399]"
        aria-label="Chat with CareerPilot on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-transparent sm:text-white sm:fill-none" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>

        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Chat with Concierge
        </span>
      </a>
    </aside>
  );
};
