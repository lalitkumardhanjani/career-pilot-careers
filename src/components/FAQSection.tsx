import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EAF1FA] px-3.5 py-1.5 rounded-full inline-block mb-4">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A506B] leading-relaxed">
            Transparent answers about our candidate onboarding, platform workflows, and weekly progress updates.
          </p>
        </div>

        {/* 7 FAQ Items */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#3E4C9A] bg-[#F8FAFC] shadow-sm"
                    : "border-[#DCE6F2] bg-white hover:border-[#DCE6F2]/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20A486]"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#3E4C9A] bg-[#EAF1FA] px-2 py-0.5 rounded">
                      Q{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#0B132B]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3A506B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#3E4C9A]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#3A506B] leading-relaxed border-t border-[#DCE6F2]/50 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional questions link */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#EAF1FA]/70 border border-[#DCE6F2]">
          <p className="text-sm text-[#0B132B] font-medium">
            Have a specific scenario or timeline question?{" "}
            <a
              href="#contact"
              className="text-[#3E4C9A] font-bold underline hover:text-[#4d5cb3] focus:outline-none"
            >
              Discuss it directly with our team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
