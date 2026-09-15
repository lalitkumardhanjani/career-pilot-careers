import React, { useState } from "react";
import {
  FileSpreadsheet,
  ArrowRight,
  TrendingUp,
  Mail,
  Building2,
  Users,
  UserCheck,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const WeeklyReportPreview: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"overview" | "log" | "charts">("overview");

  // Sample verified progressive activity log items representing typical weekly report data
  const sampleActivityLogs = [
    {
      time: "Friday, 4:30 PM",
      company: "Stripe / Razorpay Growth Team",
      role: "Senior Backend / Fullstack Lead",
      platform: "LinkedIn Job Application",
      action: "Tailored application submitted with custom profile notes",
      status: "Application Logged",
    },
    {
      time: "Thursday, 2:15 PM",
      company: "Atlassian / Flipkart Tech",
      role: "Tech Lead / Principal Architect",
      platform: "Naukri Verified Portal",
      action: "Applied to newly listed opening matching salary & tech stack",
      status: "Under Recruiter Review",
    },
    {
      time: "Wednesday, 5:45 PM",
      company: "Microsoft / Swiggy Corporate",
      role: "Engineering Manager / Lead",
      platform: "Employee Referral Outreach",
      action: "Connected with internal Senior Staff Engineer for active referral",
      status: "Referral Confirmed",
    },
    {
      time: "Tuesday, 11:20 AM",
      company: "Coinbase / CRED Platforms",
      role: "Staff Infrastructure Engineer",
      platform: "Recruiter Outreach",
      action: "Direct personalized message delivered to Lead Talent Partner",
      status: "Recruiter Connected",
    },
    {
      time: "Monday, 3:00 PM",
      company: "Amazon / Zomato Core",
      role: "Lead Systems Architect",
      platform: "Professional Direct Email",
      action: "Outreach message with portfolio sent to Director of Engineering",
      status: "Delivered to Inbox",
    },
  ];

  // Daily growth chart data (Mon to Fri)
  const dailyActivity = [
    { day: "Mon", apps: 8, outreach: 12, height: "h-20" },
    { day: "Tue", apps: 10, outreach: 15, height: "h-28" },
    { day: "Wed", apps: 12, outreach: 18, height: "h-36" },
    { day: "Thu", apps: 9, outreach: 14, height: "h-24" },
    { day: "Fri", apps: 11, outreach: 16, height: "h-32" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden" id="weekly-updates">
      {/* Background glow accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3E4C9A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EAF1FA] bg-[#3E4C9A]/40 border border-[#EAF1FA]/15 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Candidate Reporting & Growth Insights
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Know Exactly What Is Being Done for Your Career.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EAF1FA]/85 leading-relaxed">
            Every Friday, our team shares a comprehensive report with charts, outreach metrics, and progressive activity details showing the exact work done for your career.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="rounded-3xl bg-[#1C2541]/90 border border-[#EAF1FA]/15 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/50">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#EAF1FA]/15 gap-4 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#3E4C9A]/50 text-white flex items-center justify-center border border-[#EAF1FA]/15 shrink-0">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#EAF1FA]/80">
                    Weekly Progress Report
                  </span>
                  <span className="text-[10px] bg-[#3E4C9A]/60 text-[#EAF1FA] px-2 py-0.5 rounded-full font-semibold">
                    Live Demo View
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Weekly Activity & Performance Dashboard
                </h3>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-[#0B132B]/70 p-1 rounded-xl border border-[#EAF1FA]/10 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setSelectedTab("overview")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTab === "overview"
                    ? "bg-[#3E4C9A] text-white shadow-sm"
                    : "text-[#EAF1FA]/70 hover:text-white"
                }`}
              >
                Key Metrics
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("charts")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTab === "charts"
                    ? "bg-[#3E4C9A] text-white shadow-sm"
                    : "text-[#EAF1FA]/70 hover:text-white"
                }`}
              >
                Weekly Charts
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("log")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedTab === "log"
                    ? "bg-[#3E4C9A] text-white shadow-sm"
                    : "text-[#EAF1FA]/70 hover:text-white"
                }`}
              >
                Progressive Log
              </button>
            </div>
          </div>

          {/* TAB 1: Key Metrics Overview */}
          {selectedTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* 6 Core Weekly Insight KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Metric 1: Emails Sent */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-5 hover:border-[#3E4C9A]/50 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#EAF1FA]/70 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Emails Sent This Week</span>
                    <Mail className="w-4 h-4 text-[#3E4C9A]" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    42 <span className="text-xs font-medium text-[#EAF1FA]/70">emails</span>
                  </div>
                  <div className="text-xs text-[#EAF1FA]/80 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Daily Avg: 8.4 emails/day (+18% weekly growth)</span>
                  </div>
                </div>

                {/* Metric 2: Companies Applied */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-5 hover:border-[#3E4C9A]/50 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#EAF1FA]/70 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Companies Applied For</span>
                    <Building2 className="w-4 h-4 text-[#3E4C9A]" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    38 <span className="text-xs font-medium text-[#EAF1FA]/70">companies</span>
                  </div>
                  <div className="text-xs text-[#EAF1FA]/80 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>LinkedIn & Naukri verified applications</span>
                  </div>
                </div>

                {/* Metric 3: Recruiters Connected */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-5 hover:border-[#3E4C9A]/50 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#EAF1FA]/70 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Recruiters Connected</span>
                    <Users className="w-4 h-4 text-[#3E4C9A]" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    26 <span className="text-xs font-medium text-[#EAF1FA]/70">recruiters</span>
                  </div>
                  <div className="text-xs text-[#EAF1FA]/80 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Talent acquisition leads & hiring managers</span>
                  </div>
                </div>

                {/* Metric 4: Connection Requests */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-5 hover:border-[#3E4C9A]/50 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#EAF1FA]/70 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Connection Requests Sent</span>
                    <Send className="w-4 h-4 text-[#3E4C9A]" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    65 <span className="text-xs font-medium text-[#EAF1FA]/70">requests</span>
                  </div>
                  <div className="text-xs text-[#EAF1FA]/80 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Daily Avg: 13 requests/day (46% accept rate)</span>
                  </div>
                </div>

                {/* Metric 5: Referrals Asked */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-5 hover:border-[#3E4C9A]/50 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#EAF1FA]/70 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Companies Asked for Referral</span>
                    <UserCheck className="w-4 h-4 text-[#3E4C9A]" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    18 <span className="text-xs font-medium text-[#EAF1FA]/70">firms</span>
                  </div>
                  <div className="text-xs text-[#EAF1FA]/80 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Alumni & internal team outreach</span>
                  </div>
                </div>

                {/* Metric 6: Referrals Secured */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-5 hover:border-[#3E4C9A]/50 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#EAF1FA]/70 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Confirmed Referrals Gained</span>
                    <Sparkles className="w-4 h-4 text-[#3E4C9A]" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-1">
                    4 <span className="text-xs font-medium text-[#EAF1FA]/70">referrals</span>
                  </div>
                  <div className="text-xs text-[#EAF1FA]/80 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Direct employee submissions on active leads</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Weekly Growth Charts */}
          {selectedTab === "charts" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Daily Activity Growth Chart */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-sm font-bold text-white">Daily Application & Outreach Volume</h4>
                      <p className="text-xs text-[#EAF1FA]/70">Monday – Friday activity cadence</p>
                    </div>
                    <span className="text-xs font-semibold text-[#EAF1FA]/80 bg-[#3E4C9A]/30 px-2.5 py-1 rounded-lg">
                      Avg: 26 Actions/Day
                    </span>
                  </div>

                  {/* Visual Bar Chart */}
                  <div className="flex items-end justify-between gap-4 h-44 pt-4 border-b border-[#EAF1FA]/10 pb-2">
                    {dailyActivity.map((d) => (
                      <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <span className="text-[10px] text-[#EAF1FA]/75">{d.apps + d.outreach}</span>
                        <div className="w-full max-w-[36px] flex flex-col gap-1 items-center">
                          <div
                            className={`w-full bg-[#3E4C9A] rounded-t-md transition-all duration-500 ${d.height}`}
                            title={`Outreach: ${d.outreach}`}
                          />
                        </div>
                        <span className="text-xs font-semibold text-[#EAF1FA]/80 mt-1">{d.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-6 mt-4 text-xs text-[#EAF1FA]/70">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-[#3E4C9A]"></span>
                      <span>Total Daily Applications & Outreach</span>
                    </span>
                  </div>
                </div>

                {/* Channel Breakdown */}
                <div className="rounded-2xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-white">Platform & Outreach Breakdown</h4>
                      <span className="text-xs text-[#EAF1FA]/70">This Week's Mix</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white font-medium">LinkedIn Job Applications</span>
                          <span className="text-[#EAF1FA]/80">42% (21 Roles)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-[#3E4C9A] rounded-full" style={{ width: "42%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white font-medium">Naukri Application Activity</span>
                          <span className="text-[#EAF1FA]/80">28% (14 Roles)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-indigo-400 rounded-full" style={{ width: "28%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white font-medium">Recruiter Direct InMails & Messages</span>
                          <span className="text-[#EAF1FA]/80">18% (26 Messages)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-blue-400 rounded-full" style={{ width: "18%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white font-medium">Internal Employee Referral Requests</span>
                          <span className="text-[#EAF1FA]/80">12% (18 Contacts)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full" style={{ width: "12%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EAF1FA]/10 text-xs text-[#EAF1FA]/70">
                    Targeted distribution prevents reliance on a single portal and expands recruiter reach.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Progressive Activity Log */}
          {selectedTab === "log" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-xs text-[#EAF1FA]/75 mb-2 flex items-center justify-between">
                <span>Recent Progressive Actions Logged by CareerPilot Team</span>
                <span>Updated in Real Time</span>
              </div>

              <div className="space-y-3">
                {sampleActivityLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#0B132B]/60 border border-[#EAF1FA]/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#3E4C9A]/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#3E4C9A]/30 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-bold text-white">{log.company}</span>
                          <span className="text-[10px] font-semibold bg-[#3E4C9A]/40 text-[#EAF1FA] px-2 py-0.5 rounded">
                            {log.platform}
                          </span>
                        </div>
                        <p className="text-xs text-[#EAF1FA]/80 mt-0.5">{log.role}</p>
                        <p className="text-[11px] text-[#EAF1FA]/60 mt-0.5">{log.action}</p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {log.status}
                      </span>
                      <span className="text-[10px] text-[#EAF1FA]/50 sm:mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{log.time}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-[#EAF1FA]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#EAF1FA]/85 leading-relaxed italic max-w-2xl">
              “Progressive detailed reports showing every email sent, recruiter contacted, and referral requested are shared directly with you every week.”
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shrink-0 shadow-md"
            >
              <span>Get Your Weekly Career Digest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
