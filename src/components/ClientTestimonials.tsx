import React from "react";
import { Star, CheckCircle2, Building2 } from "lucide-react";

export const ClientTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rohan S.",
      role: "Lead Backend Engineer (8+ YOE)",
      currentCompany: "Tier-1 FinTech, Bengaluru",
      avatarInitials: "RS",
      highlight: "Saved ~18 hours every week during a major platform migration.",
      quote:
        "Between sprint deadlines and system incidents, I had zero mental energy to tailor resumes or fill out Naukri & LinkedIn forms at night. CareerPilot submitted over 40 targeted applications on my behalf and connected with 3 hiring managers directly. I secured 4 recruiter conversations without losing focus on my day job.",
      metrics: "4 Interviews Coordinated • ₹48L Target CTC",
    },
    {
      name: "Ananya M.",
      role: "Senior Product Manager (6+ YOE)",
      currentCompany: "Enterprise SaaS, Hyderabad",
      avatarInitials: "AM",
      highlight: "The Friday activity digests gave me complete peace of mind.",
      quote:
        "The level of transparency is what won me over. Every Friday at 5 PM, I could see exactly which roles were applied for, which recruiters were messaged, and which alumni were contacted for referrals. Their resume recommendations also positioned my business impact much more sharply.",
      metrics: "35 Verified Applications • 3 Internal Referrals",
    },
    {
      name: "Vikram K.",
      role: "Staff Infrastructure Architect (11+ YOE)",
      currentCompany: "Global Cloud Platform, US Remote / Pune",
      avatarInitials: "VK",
      highlight: "Direct employee referral outreach produced the best results.",
      quote:
        "At senior staff levels, generic portal applications rarely work. The CareerPilot team identified relevant directors and alumni inside target companies and facilitated clean referral introductions. It felt like having a private talent team representing me in the market.",
      metrics: "5 Director InMails • 2 Confirmed Offers",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200/80 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Candidate Success Stories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Trusted by Professionals With Demanding Schedules
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See how senior engineers, tech leads, and product leaders streamlined their job search while excelling in their full-time jobs.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3E4C9A]/40 hover:bg-white relative shadow-sm group"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="text-sm font-bold text-[#0B132B] mb-3 group-hover:text-[#3E4C9A] transition-colors leading-snug">
                  "{t.highlight}"
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200/70">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3E4C9A] to-[#4F67B8] text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B] leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.role}
                    </p>
                    <p className="text-[11px] text-[#3E4C9A] font-semibold mt-0.5 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      <span>{t.currentCompany}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-lg border border-[#10B981]/20">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Trust Metrics Strip */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B132B] text-white p-6 sm:p-8 border border-white/10 shadow-xl flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#34D399]">1,200+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Applications Executed</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">18 hrs</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Average Weekly Time Saved</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#34D399]">98%</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Candidate Satisfaction Rating</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Candidate Criteria Control</div>
          </div>
        </div>
      </div>
    </section>
  );
};
