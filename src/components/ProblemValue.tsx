import React from "react";
import { Clock, SearchX, EyeOff, BarChart3, AlertCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const ProblemValue: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Clock,
    SearchX,
    EyeOff,
    BarChart3,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]" id="the-challenge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EAF1FA] px-3.5 py-1.5 rounded-full inline-block mb-4">
            The Busy Professional’s Dilemma
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            A 9-to-6 Job Leaves Zero Hours for a Serious Job Search.
          </h2>
          <div className="mt-5 text-sm sm:text-base text-[#3A506B] leading-relaxed space-y-2 max-w-2xl mx-auto">
            <p>
              Between daily project deadlines, back-to-back meetings, and personal commitments, active candidates rarely have the energy to spend 2–3 hours browsing job boards every evening.
            </p>
            <p className="font-semibold text-[#0B132B]">
              Top openings close within 48–72 hours. By the time you search on Sunday afternoon, the early-applicant advantage is already gone.
            </p>
          </div>
        </div>

        {/* 4 Pain-Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.problemCards.map((card, idx) => {
            const Icon = iconMap[card.icon] || AlertCircle;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-[#DCE6F2] p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3E4C9A]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF1FA] text-[#3E4C9A] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#3A506B] border border-[#DCE6F2]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B] mb-2 group-hover:text-[#3E4C9A] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[#3A506B] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE6F2]/60 text-xs font-semibold text-[#20A486]">
                  Solved by CareerPilot
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
