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
  Download,
} from "lucide-react";

export const WeeklyReportPreview: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"overview" | "charts" | "log">("overview");
  const [downloadedModalOpen, setDownloadedModalOpen] = useState(false);

  // Sample verified progressive activity log items representing typical weekly report data
  const sampleActivityLogs = [
    {
      time: "Friday, 4:30 PM",
      company: "Stripe / Razorpay Growth Team",
      role: "Senior Backend / Fullstack Lead",
      platform: "LinkedIn Job Application",
      action: "Tailored application submitted with custom profile notes & screening responses",
      status: "Application Logged",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-400/20",
    },
    {
      time: "Thursday, 2:15 PM",
      company: "Atlassian / Flipkart Tech",
      role: "Tech Lead / Principal Architect",
      platform: "Naukri Verified Portal",
      action: "Applied to newly opened role matching target salary & tech stack parameters",
      status: "Recruiter Review",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-400/20",
    },
    {
      time: "Wednesday, 5:45 PM",
      company: "Microsoft / Swiggy Corporate",
      role: "Engineering Manager / Lead",
      platform: "Employee Referral Outreach",
      action: "Connected with internal Senior Staff Engineer for active employee referral",
      status: "Referral Confirmed",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
    },
    {
      time: "Tuesday, 11:20 AM",
      company: "Coinbase / CRED Platforms",
      role: "Staff Infrastructure Engineer",
      platform: "Recruiter Outreach",
      action: "Direct personalized message delivered to Lead Talent Partner on role scope",
      status: "Recruiter Connected",
      badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-400/20",
    },
    {
      time: "Monday, 3:00 PM",
      company: "Amazon / Zomato Core",
      role: "Lead Systems Architect",
      platform: "Professional Direct Email",
      action: "Outreach message with portfolio sent to Director of Engineering",
      status: "Delivered to Inbox",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-400/20",
    },
  ];

  // Daily growth chart data (Mon to Fri)
  const dailyActivity = [
    { day: "Mon", apps: 8, outreach: 12, heightApps: "h-16", heightOutreach: "h-24", total: 20 },
    { day: "Tue", apps: 10, outreach: 15, heightApps: "h-20", heightOutreach: "h-32", total: 25 },
    { day: "Wed", apps: 12, outreach: 18, heightApps: "h-24", heightOutreach: "h-36", total: 30 },
    { day: "Thu", apps: 9, outreach: 14, heightApps: "h-18", heightOutreach: "h-28", total: 23 },
    { day: "Fri", apps: 11, outreach: 16, heightApps: "h-22", heightOutreach: "h-32", total: 27 },
  ];

  const handleDownloadSample = () => {
    setDownloadedModalOpen(true);
    setTimeout(() => {
      setDownloadedModalOpen(false);
    }, 4000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden" id="weekly-updates">
      {/* Background ambient radial glow accents */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#3E4C9A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Uncompromising Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Know Exactly What Is Being Done for Your Career.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every Friday, our team delivers an executive performance digest detailing every single application submitted, outreach email sent, recruiter connected, and referral secured.
          </p>
        </div>

        {/* Enterprise Dashboard Container */}
        <div className="rounded-3xl bg-[#101A36]/80 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/70">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3E4C9A] to-[#4F67B8] text-white flex items-center justify-center border border-white/10 shrink-0 shadow-md">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#34D399]">
                    Confidential Candidate Digest
                  </span>
                  <span className="text-[10px] bg-white/10 text-slate-300 px-2.5 py-0.5 rounded-full font-semibold border border-white/10">
                    Live Demo Portal
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Executive Weekly Activity & Analytics Summary
                </h3>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1.5 bg-[#070B19]/80 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setSelectedTab("overview")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedTab === "overview"
                    ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Key Metrics
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("charts")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedTab === "charts"
                    ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Weekly Charts
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab("log")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedTab === "log"
                    ? "bg-[#3E4C9A] text-white shadow-md shadow-[#3E4C9A]/30"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Progressive Log
              </button>
            </div>
          </div>

          {/* TAB 1: Key Metrics Overview */}
          {selectedTab === "overview" && (
            <div className="space-y-6">
              {/* 6 Core Weekly Insight KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Metric 1: Emails Sent */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Emails Sent This Week</span>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-300 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-blue-200 transition-colors">
                    42 <span className="text-xs font-medium text-slate-400">emails delivered</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Daily Avg: 8.4 emails/day (+18% weekly growth)</span>
                  </div>
                </div>

                {/* Metric 2: Companies Applied */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Companies Applied For</span>
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-300 flex items-center justify-center">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-indigo-200 transition-colors">
                    38 <span className="text-xs font-medium text-slate-400">target firms</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>LinkedIn & Naukri verified applications</span>
                  </div>
                </div>

                {/* Metric 3: Recruiters Connected */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Recruiters Connected</span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-300 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-emerald-200 transition-colors">
                    26 <span className="text-xs font-medium text-slate-400">talent partners</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Talent acquisition leads & hiring managers</span>
                  </div>
                </div>

                {/* Metric 4: Connection Requests */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Connection Requests Sent</span>
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-300 flex items-center justify-center">
                      <Send className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-purple-200 transition-colors">
                    65 <span className="text-xs font-medium text-slate-400">requests</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Daily Avg: 13 requests/day (46% acceptance rate)</span>
                  </div>
                </div>

                {/* Metric 5: Referrals Asked */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Companies Asked for Referral</span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-300 flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-amber-200 transition-colors">
                    18 <span className="text-xs font-medium text-slate-400">companies</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Internal alumni & senior peer outreach</span>
                  </div>
                </div>

                {/* Metric 6: Referrals Secured */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-5 hover:border-blue-400/40 transition-all group">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">Confirmed Referrals Gained</span>
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#34D399] flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-[#34D399] transition-colors">
                    4 <span className="text-xs font-medium text-slate-400">referral codes</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Direct employee internal submissions on active roles</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Weekly Growth Charts */}
          {selectedTab === "charts" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Daily Activity Growth Chart */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-sm font-bold text-white">Daily Application & Outreach Cadence</h4>
                      <p className="text-xs text-slate-400">Monday – Friday cumulative volume</p>
                    </div>
                    <span className="text-xs font-semibold text-slate-200 bg-[#3E4C9A]/40 border border-[#3E4C9A]/40 px-3 py-1 rounded-lg">
                      Avg: 25 Actions/Day
                    </span>
                  </div>

                  {/* Visual Stacked Bar Chart */}
                  <div className="flex items-end justify-between gap-4 h-48 pt-4 border-b border-white/[0.08] pb-2">
                    {dailyActivity.map((d) => (
                      <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                        <span className="text-[10px] font-bold text-slate-300 group-hover:text-white transition-colors">
                          {d.total}
                        </span>
                        <div className="w-full max-w-[40px] flex flex-col gap-1 items-center">
                          {/* Outreach bar */}
                          <div
                            className={`w-full bg-gradient-to-t from-[#4F67B8] to-[#637DC9] rounded-t-md transition-all duration-500 ${d.heightOutreach}`}
                            title={`Outreach: ${d.outreach}`}
                          />
                          {/* Apps bar */}
                          <div
                            className={`w-full bg-[#3E4C9A] rounded-b-sm transition-all duration-500 ${d.heightApps}`}
                            title={`Applications: ${d.apps}`}
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-300 mt-1">{d.day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-6 mt-5 text-xs text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-[#3E4C9A]"></span>
                      <span>Job Applications (LinkedIn & Naukri)</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-[#4F67B8]"></span>
                      <span>Recruiter & Referral Outreach</span>
                    </span>
                  </div>
                </div>

                {/* Channel Breakdown */}
                <div className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-white">Platform & Outreach Breakdown</h4>
                      <span className="text-xs text-slate-400">Weekly Channel Allocation</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white font-medium">LinkedIn High-Fit Submissions</span>
                          <span className="text-slate-300 font-bold">42% (22 Applications)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-[#3E4C9A] rounded-full" style={{ width: "42%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white font-medium">Naukri Tailored Submissions & Boost</span>
                          <span className="text-slate-300 font-bold">28% (16 Applications)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: "28%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white font-medium">Recruiter Direct InMails & Messages</span>
                          <span className="text-slate-300 font-bold">18% (26 Messages)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" style={{ width: "18%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white font-medium">Internal Employee Referral Requests</span>
                          <span className="text-slate-300 font-bold">12% (18 Contacts)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" style={{ width: "12%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.08] text-xs text-slate-400">
                    💡 Multi-channel distribution ensures your profile never relies on a single job portal and maximizes direct hiring manager visibility.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Progressive Activity Log */}
          {selectedTab === "log" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="text-xs text-slate-400 mb-2 flex items-center justify-between">
                <span>Recent Progressive Actions Logged by CareerPilot Specialists</span>
                <span className="flex items-center gap-1 text-[#34D399]">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse"></span>
                  Real-time Candidate Audit Feed
                </span>
              </div>

              <div className="space-y-3">
                {sampleActivityLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#070B19]/80 border border-white/[0.08] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-400/40 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#3E4C9A]/30 border border-[#3E4C9A]/40 text-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-bold text-white">{log.company}</span>
                          <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md border border-white/10">
                            {log.platform}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium mt-0.5">{log.role}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{log.action}</p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${log.badgeColor}`}>
                        {log.status}
                      </span>
                      <span className="text-[10px] text-slate-400 sm:mt-1.5 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{log.time}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Bar with Download Sample and CTA */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleDownloadSample}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/15 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#34D399]" />
                <span>View Sample PDF Digest</span>
              </button>
              <span className="text-[11px] text-slate-400 hidden lg:inline">
                Confidential Client Reference: CP-2026-IND
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#4F67B8] hover:from-[#4859b3] hover:to-[#5571d4] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#3E4C9A]/30 shrink-0"
            >
              <span>Get Your Weekly Career Digest</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Sample Download Simulation Toast */}
      {downloadedModalOpen && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#101A36] border border-[#34D399]/50 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <div className="w-8 h-8 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Sample Friday Candidate Digest Ready</div>
            <div className="text-[11px] text-slate-300">The 12-page activity audit report was loaded successfully for demo.</div>
          </div>
        </div>
      )}
    </section>
  );
};
