import React from "react";
import { Clock, SearchX, EyeOff, BarChart3, AlertCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const ProblemValue: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Clock,
    SearchX,
    EyeOff,
    BarChart3,
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative" id="the-challenge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            The Busy Professional’s Dilemma
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            A 9-to-6 Job Leaves Zero Hours for a Serious Job Search.
          </h2>
          <div className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed space-y-2 max-w-2xl mx-auto">
            <p>
              Between daily project deadlines, back-to-back meetings, and family life, active professionals rarely have the mental bandwidth to spend 2–3 hours browsing job portals every evening.
            </p>
            <p className="font-semibold text-slate-800">
              Top tech & leadership openings close within 48–72 hours. By the time you get free on Sunday afternoon, the early-applicant window has already passed.
            </p>
          </div>
        </div>

        {/* 4 Pain-Point Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.problemCards.map((card, idx) => {
            const Icon = iconMap[card.icon] || AlertCircle;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3E4C9A]/40 hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] text-[#3E4C9A] border border-[#3E4C9A]/15 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-700">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B132B] mb-2 group-hover:text-[#3E4C9A] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Solved by CareerPilot Co-Pilot</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

