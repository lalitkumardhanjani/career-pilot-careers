import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct, transparent answers about our candidate onboarding, privacy controls, and weekly performance reporting.
          </p>
        </div>

        {/* 7 FAQ Items */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-500/40 bg-[#F8FAFC] shadow-md ring-1 ring-[#3E4C9A]/10"
                    : "border-slate-200/90 bg-white hover:border-slate-300 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <span className="text-xs font-bold text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-2 sm:px-2.5 py-0.5 rounded-md shrink-0">
                      Q0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-bold text-[#0B132B]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#3E4C9A]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional questions link */}
        <div className="mt-8 sm:mt-12 text-center p-4 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Have a specific search criteria or timeline question?{" "}
            <a
              href="#contact"
              className="text-[#3E4C9A] font-bold underline underline-offset-2 hover:text-[#4F67B8]"
            >
              Discuss it directly with our team during your consultation →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

