import React, { useState } from "react";
import {
  FileText,
  MailCheck,
  Compass,
  Users2,
  UserCheck,
  CheckSquare,
  LineChart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  ChevronRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const CoreAIPillarsShowcase: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [resumeMode, setResumeMode] = useState<"before" | "after">("after");
  const [outreachRecipient, setOutreachRecipient] = useState<"recruiter" | "hiring_manager" | "vp">("hiring_manager");
  const [referralVector, setReferralVector] = useState<"alumni" | "insider">("insider");

  const pillars = [
    {
      id: "resume-reengineering",
      number: "01",
      title: "Resume Rewrite & ATS Optimization",
      shortTitle: "Resume Polish",
      tagline: "Personally reviewed and rewritten by senior specialists so your achievements shine and pass ATS filters",
      icon: FileText,
      badge: "Step 01 • ATS 96%+",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      id: "recruiter-email",
      number: "02",
      title: "Direct Emails to Recruiters & Hiring Managers",
      shortTitle: "Recruiter Emails",
      tagline: "Warm, personalized introductory notes sent directly to verified hiring managers and talent leads",
      icon: MailCheck,
      badge: "Step 02 • 3.4x Replies",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      id: "role-scouting",
      number: "03",
      title: "Daily Hand-Picked Job Openings",
      shortTitle: "Job Scouting",
      tagline: "Every morning, our team finds verified roles strictly matching your target salary and skills",
      icon: Compass,
      badge: "Step 03 • Hand-Picked",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: "dual-referrals",
      number: "04",
      title: "Direct Employee Referrals (Alumni & Insiders)",
      shortTitle: "Employee Referrals",
      tagline: "Warm introductions to college alumni and verified company insiders to secure internal referrals",
      icon: Users2,
      badge: "Step 04 • 5x Callbacks",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      id: "recruiter-networking",
      number: "05",
      title: "Building Your Recruiter Network",
      shortTitle: "Recruiter Network",
      tagline: "Connecting with specialized tech headhunters and talent leads before roles open publicly",
      icon: UserCheck,
      badge: "Step 05 • Recruiter Network",
      gradient: "from-blue-700 to-navy-800",
    },
    {
      id: "naukri-acceleration",
      number: "06",
      title: "Naukri & LinkedIn Applications & Profile Boost",
      shortTitle: "Job Applications",
      tagline: "Rank in top 3% of recruiter searches and submit curated applications with thoughtful answers",
      icon: CheckSquare,
      badge: "Step 06 • Top 3% Rank",
      gradient: "from-amber-600 to-orange-600",
    },
    {
      id: "dedicated-concierge",
      number: "07",
      title: "Your Dedicated Career Manager & Dashboard",
      shortTitle: "Personal Manager",
      tagline: "Assigned personal career manager handling all tools, with complete visibility and Friday summaries",
      icon: LineChart,
      badge: "Step 07 • 100% Managed",
      gradient: "from-emerald-600 to-indigo-700",
    },
  ];

  const currentPillar = pillars[activePillarIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden" id="features">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3E4C9A]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#10B981]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#3E4C9A]/40 border border-blue-400/30 px-4 py-1.5 rounded-full mb-4 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-blue-200">
              Real Career Specialists • 100% Done-For-You
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            What Our Dedicated Career Team <br />
            <span className="bg-gradient-to-r from-blue-300 via-[#34D399] to-emerald-400 bg-clip-text text-transparent">
              Executes For You Every Day
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Behind every application, recruiter email, and referral ask is a real, experienced career specialist managing your search end-to-end. Enjoy peace of mind without spending your weekends scrolling job boards.
          </p>
        </div>

        {/* 7-Pillar Navigation Tabs */}
        <div className="flex lg:grid lg:grid-cols-7 gap-2 pb-4 lg:pb-0 overflow-x-auto no-scrollbar mb-10 border-b border-white/10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillarIndex === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarIndex(idx)}
                className={`flex-shrink-0 flex items-center lg:flex-col lg:items-center text-left lg:text-center p-3 rounded-xl transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-white/10 border-blue-400/50 shadow-lg shadow-blue-500/10 text-white"
                    : "bg-white/[0.02] border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center mb-0 lg:mb-2 mr-3 lg:mr-0 transition-transform ${
                    isActive
                      ? "bg-gradient-to-br from-[#3E4C9A] to-[#10B981] text-white scale-105 shadow-md"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block">
                    {pillar.number}
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap lg:whitespace-normal block">
                    {pillar.shortTitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card */}
        <div className="bg-[#101A36]/90 border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl relative">
          {/* Top Banner inside Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#3E4C9A]/30 border border-blue-400/20 px-3 py-1 rounded-full text-xs font-bold text-blue-300 mb-2">
                <currentPillar.icon className="w-3.5 h-3.5 text-[#34D399]" />
                {currentPillar.badge}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                {currentPillar.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                {currentPillar.tagline}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#10B981] hover:from-[#4F67B8] hover:to-[#34D399] text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-xl shadow-md transition-all self-start md:self-auto shrink-0"
            >
              <span>Consult Career Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* DYNAMIC CONTENT AREA BASED ON ACTIVE PILLAR */}

          {/* PILLAR 1: RESUME RE-ENGINEERING */}
          {activePillarIndex === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#34D399]" />
                    Expert Review & ATS Parser Calibration
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Most resumes fail ATS screening due to passive wording, generic skill dumps, or improper hierarchy. Our senior career specialists personally rewrite achievements into quantified impact statements and align keyword density with target hiring criteria.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    ATS Calibration Transformation
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-rose-400">Candidate Baseline</span>
                        <span className="text-rose-400">62% ATS Match</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-rose-500 w-[62%]" />
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-emerald-400">Specialist Re-Engineered</span>
                        <span className="text-emerald-400">96% ATS Match</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[96%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    What Our Specialists Enhance:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>Quantified ROI & Latency metrics</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>Role-specific keyword weighting</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>Single-column clean ATS layout</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>Leadership & architectural scope</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Before / After Viewer */}
              <div className="lg:col-span-7 bg-[#070B19] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Live Resume Transformer:
                    </span>
                  </div>
                  <div className="flex items-center bg-white/10 p-1 rounded-xl">
                    <button
                      onClick={() => setResumeMode("before")}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                        resumeMode === "before"
                          ? "bg-rose-500 text-white shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Candidate Baseline
                    </button>
                    <button
                      onClick={() => setResumeMode("after")}
                      className={`text-xs font-bold px-3 py-1 rounded-lg transition-all ${
                        resumeMode === "after"
                          ? "bg-emerald-500 text-white shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Specialist Re-Engineered
                    </button>
                  </div>
                </div>

                {resumeMode === "before" ? (
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 flex items-center justify-between">
                      <span>⚠️ Low recruiter signal: Passive phrasing, zero metrics, weak ATS keywords.</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-rose-500/20 rounded">ATS: 62%</span>
                    </div>
                    <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="font-bold text-white text-sm">Experience • Senior Backend Developer</div>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-400">
                        <li>Worked on payment gateway APIs using Go and PostgreSQL.</li>
                        <li>Responsible for bug fixes and maintaining microservices in cloud environment.</li>
                        <li>Collaborated with product team on new checkout features.</li>
                        <li>Helped improve database queries when system was slow.</li>
                      </ul>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      <strong>Specialist Diagnosis:</strong> Lacks scale benchmarks (QPS, latency, volume), missing high-value tech keywords (Kafka, Redis caching, gRPC), reads like a junior job description.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 flex items-center justify-between">
                      <span>✅ High recruiter signal: Quantified business metrics, strong action verbs, 96% keyword match.</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 rounded">ATS: 96%</span>
                    </div>
                    <div className="space-y-2 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/30">
                      <div className="font-bold text-white text-sm flex items-center justify-between">
                        <span>Experience • Senior Distributed Systems Engineer</span>
                        <span className="text-xs text-[#34D399] font-sans font-semibold">Specialist Certified</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1.5 text-slate-200">
                        <li>
                          <strong className="text-[#34D399]">Architected high-throughput payment microservices</strong> in Go/gRPC processing <strong className="text-white">18,000+ QPS</strong> with 99.99% uptime SLA.
                        </li>
                        <li>
                          <strong className="text-[#34D399]">Optimized PostgreSQL & Redis indexing</strong>, reducing P99 checkout latency by <strong className="text-white">42% (from 320ms to 185ms)</strong>.
                        </li>
                        <li>
                          <strong className="text-[#34D399]">Led event-driven migration to Apache Kafka</strong>, enabling asynchronous transaction settlement across 6 international regions.
                        </li>
                        <li>
                          <strong className="text-[#34D399]">Mentored 4 engineers</strong> and instituted automated CI/CD canary deployments on Kubernetes.
                        </li>
                      </ul>
                    </div>
                    <div className="text-[11px] text-emerald-300/80">
                      <strong>Re-Engineered by Career Team:</strong> Highlighted distributed systems architecture, latency reduction percentages, scale benchmarks, and technical leadership scope.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PILLAR 2: RECRUITER EMAIL CAMPAIGNS */}
          {activePillarIndex === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <MailCheck className="w-5 h-5 text-indigo-400" />
                    Hand-Crafted Recruiter & Decision-Maker Email Campaigns
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Spamming generic copy-paste notes leads to instant rejections. Our research specialists research verified recruiter and hiring manager emails, drafting contextual messages tailored to the recipient's role and your quantified achievements.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Select Target Recipient Persona:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "recruiter", label: "Talent Partner" },
                      { key: "hiring_manager", label: "Hiring Manager" },
                      { key: "vp", label: "VP / Dept Head" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setOutreachRecipient(item.key as any)}
                        className={`text-xs font-bold py-2 px-3 rounded-xl border transition-all ${
                          outreachRecipient === item.key
                            ? "bg-[#3E4C9A] border-blue-400 text-white shadow-md"
                            : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2.5 text-xs text-slate-300">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#34D399]" />
                    Cadence Managed by Our Team:
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-[10px]">1</span>
                    <span>Day 1: High-impact hook highlighting tech stack & metric alignment</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-[10px]">2</span>
                    <span>Day 4: Polite follow-up with relevant portfolio or case study note</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-[10px]">3</span>
                    <span>Day 8: Low-friction closing inquiry to respect recruiter schedule</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Email Preview Mockup */}
              <div className="lg:col-span-7 bg-[#070B19] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner font-sans">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span>Verified Recruiter Contact: <strong>priya.s@atlassian.com</strong></span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Researched by Outreach Team
                  </span>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="text-xs text-slate-400 border-b border-white/10 pb-2">
                    <strong className="text-slate-300">Subject:</strong> Senior Backend Lead Opening • Distributed Systems Track (Ref: Scale & Kafka)
                  </div>

                  {outreachRecipient === "recruiter" && (
                    <div className="space-y-3 leading-relaxed">
                      <p>Hi Priya,</p>
                      <p>
                        I noticed Atlassian is actively expanding the Jira Core Platform team for the <strong>Senior Backend / Distributed Systems</strong> opening in Bengaluru.
                      </p>
                      <p>
                        Over the past 6 years, I’ve specialized in high-concurrency Go and Kafka architectures—most recently scaling transaction settlement to <strong className="text-[#34D399]">18,000+ QPS while reducing P99 latency by 42%</strong>.
                      </p>
                      <p>
                        Given my experience with distributed locks, data partitioning, and microservice resiliency, I’d love to connect for 10 minutes to understand if my background aligns with your hiring priorities.
                      </p>
                      <p>
                        I’ve attached my tailored resume and LinkedIn profile for quick review. Thank you for your time!
                      </p>
                      <p className="text-slate-400 pt-2 border-t border-white/5">
                        Best regards,<br /><strong className="text-white">Arjun K.</strong> • senior-backend.dev
                      </p>
                    </div>
                  )}

                  {outreachRecipient === "hiring_manager" && (
                    <div className="space-y-3 leading-relaxed">
                      <p>Hi Vikram,</p>
                      <p>
                        I follow your technical engineering posts on distributed transaction patterns and wanted to reach out regarding the <strong>Staff / Lead Backend role</strong> under your organization.
                      </p>
                      <p>
                        Having architected event-driven microservices processing <strong className="text-[#34D399]">over $50M monthly transactional volume</strong> with zero data loss SLAs, I deeply appreciate the latency and consensus challenges your team handles at scale.
                      </p>
                      <p>
                        I would appreciate a brief opportunity to discuss how my background in Go, Kubernetes, and Cassandra clusters can support your Q4 migration roadmap.
                      </p>
                      <p className="text-slate-400 pt-2 border-t border-white/5">
                        Best regards,<br /><strong className="text-white">Arjun K.</strong> • Engineering Portfolio Attached
                      </p>
                    </div>
                  )}

                  {outreachRecipient === "vp" && (
                    <div className="space-y-3 leading-relaxed">
                      <p>Hi Rajesh,</p>
                      <p>
                        Congratulations on the recent launch of Atlassian Cloud Enterprise for APAC.
                      </p>
                      <p>
                        As an engineering lead with 7+ years directing distributed backend systems and high-throughput API architectures, I am exploring leadership opportunities where system reliability and developer velocity are paramount.
                      </p>
                      <p>
                        I would welcome the opportunity to be introduced to the appropriate Engineering Director or Talent Partner heading your platform infrastructure group.
                      </p>
                      <p className="text-slate-400 pt-2 border-t border-white/5">
                        Warm regards,<br /><strong className="text-white">Arjun K.</strong>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 3: ROLE SCOUTING */}
          {activePillarIndex === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-cyan-400" />
                    High-Signal Opportunity Scouting & Curation
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Searching manually takes 15+ hours a week and leaves you applying to stale listings. Our research team continuously scours corporate career portals, unlisted positions, and active employer listings—filtering strictly by your target salary, tech stack, and seniority.
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Candidate Criteria Managed by Team:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-400/20 font-semibold">
                      Role: Senior / Staff Backend
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/20 font-semibold">
                      CTC: ₹35L – ₹55L / $150k+
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-400/20 font-semibold">
                      Location: Bengaluru / Remote
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/20 font-semibold">
                      Tech: Go, Kafka, Distributed
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-300 bg-cyan-500/10 border border-cyan-500/20 p-3.5 rounded-xl">
                  💡 <strong>Specialist Match Rationale:</strong> Every curated opening includes a clear breakdown from our researchers detailing why the role fits your background, salary bracket, and career goals.
                </div>
              </div>

              {/* Discovery Radar Cards */}
              <div className="lg:col-span-7 space-y-3 font-sans">
                {[
                  {
                    company: "Atlassian",
                    role: "Senior Backend Engineer (Jira Platform)",
                    match: "98% Match",
                    matchColor: "text-emerald-400 bg-emerald-500/20 border-emerald-400/30",
                    location: "Bengaluru (Hybrid) • ₹42L - ₹52L",
                    reason: "Exact stack match (Go, Microservices, Kafka). Verified active recruiter contact linked.",
                    posted: "Scouted Today by Career Team • High Priority",
                  },
                  {
                    company: "Razorpay",
                    role: "Tech Lead - Payments Core Engine",
                    match: "95% Match",
                    matchColor: "text-blue-400 bg-blue-500/20 border-blue-400/30",
                    location: "Bengaluru • ₹45L - ₹58L",
                    reason: "High concurrency payment focus matching candidate's 18k QPS metrics. 2 alumni referrers found.",
                    posted: "Scouted Today • High Hiring Priority",
                  },
                  {
                    company: "Stripe",
                    role: "Staff Software Engineer - Infrastructure",
                    match: "92% Match",
                    matchColor: "text-purple-400 bg-purple-500/20 border-purple-400/30",
                    location: "Remote (Global) • $160k - $210k",
                    reason: "Distributed systems scale requirement aligned with candidate's latency optimization background.",
                    posted: "Scouted Yesterday • Global Outreach Ready",
                  },
                ].map((job, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#070B19] border border-white/10 hover:border-blue-400/40 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-white text-base">{job.company}</span>
                          <span className="text-slate-400 text-xs">• {job.location}</span>
                        </div>
                        <div className="text-sm font-semibold text-blue-200 mt-0.5">
                          {job.role}
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${job.matchColor}`}>
                        {job.match}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2 leading-relaxed bg-white/5 p-2 rounded-lg">
                      <strong className="text-slate-200">Specialist Match Rationale:</strong> {job.reason}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{job.posted}</span>
                      <span className="text-emerald-400 font-semibold group-hover:underline cursor-pointer flex items-center gap-1">
                        Application Queued <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PILLAR 4: DIRECT EMPLOYEE REFERRALS */}
          {activePillarIndex === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Users2 className="w-5 h-5 text-emerald-400" />
                    Direct Employee Referrals (Alumni & Insiders)
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Referrals provide a <strong>5x higher interview callback rate</strong> than applying blindly through job portals. Our team reaches out warmly to alumni from your college and helpful team insiders at target companies.
                  </p>
                </div>

                <div className="flex bg-white/10 p-1 rounded-xl">
                  <button
                    onClick={() => setReferralVector("alumni")}
                    className={`flex-1 text-xs font-bold py-2 rounded-lg transition-all ${
                      referralVector === "alumni"
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Channel A: College Alumni & Friends
                  </button>
                  <button
                    onClick={() => setReferralVector("insider")}
                    className={`flex-1 text-xs font-bold py-2 rounded-lg transition-all ${
                      referralVector === "insider"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Channel B: Company Insiders & Leads
                  </button>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <strong className="text-white block mb-1">Human-Crafted Referral Requests:</strong>
                    Our team recognizes whether the contact is an old college classmate, a former colleague, or a senior staff engineer at a target company—and modulates tone accordingly.
                  </div>
                </div>
              </div>

              {/* Referral Message Preview */}
              <div className="lg:col-span-7 bg-[#070B19] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="text-xs text-slate-400">
                    Target: <strong className="text-white">{referralVector === "alumni" ? "College Alumni at Microsoft" : "Staff Engineer at Swiggy"}</strong>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Coordinated by Referral Team
                  </span>
                </div>

                {referralVector === "alumni" ? (
                  <div className="space-y-3 text-xs sm:text-sm text-slate-200 bg-white/5 p-4 rounded-xl border border-white/5 font-sans leading-relaxed">
                    <p>Hi Rohan,</p>
                    <p>
                      Hope you’re doing great! Saw your recent update about completing 2 years at Microsoft on the Azure Cloud team—congrats!
                    </p>
                    <p>
                      I noticed an opening for a <strong>Senior Distributed Systems Engineer (Req #89210)</strong> on the Azure Storage platform. Since my recent work has centered around high-concurrency Go microservices and 18k+ QPS streaming, I felt the role aligns closely with my background.
                    </p>
                    <p>
                      If you feel comfortable, would you be open to submitting an internal employee referral for this role? I have tailored my resume and Job ID ready to make it seamless on your end.
                    </p>
                    <p>
                      Either way, let’s catch up soon!
                    </p>
                    <p className="text-slate-400 text-xs pt-2 border-t border-white/5">
                      Warm regards,<br /><strong className="text-white">Arjun</strong>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs sm:text-sm text-slate-200 bg-white/5 p-4 rounded-xl border border-white/5 font-sans leading-relaxed">
                    <p>Hi Neha,</p>
                    <p>
                      I hope this note finds you well. I’ve been following Swiggy’s tech blog on order routing latency optimization and found the architecture fascinating.
                    </p>
                    <p>
                      I am currently exploring the <strong>Lead Backend / Platform Engineer</strong> role with Swiggy’s logistics tech group. Given my experience scaling checkout pipelines to 18,000+ QPS and optimizing database latency by 42%, I’m confident I could add immediate value to the team.
                    </p>
                    <p>
                      I understand that cold referral requests can be awkward, so I have summarized my 3 key engineering deliverables and calibrated resume here: [Link]. If my experience looks solid to you, I would be grateful for an internal referral.
                    </p>
                    <p className="text-slate-400 text-xs pt-2 border-t border-white/5">
                      Thanks a lot for your time,<br /><strong className="text-white">Arjun K.</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PILLAR 5: RECRUITER NETWORKING */}
          {activePillarIndex === 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-blue-400" />
                    Proactive Executive & Headhunter Networking
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Upwards of 40% of senior and leadership positions are filled through recruiter networks before ever being posted publicly. Our team builds and maintains a targeted professional network of talent partners in your domain.
                  </p>
                </div>

                <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-slate-300">
                  <div className="font-bold text-white uppercase tracking-wider text-[11px]">
                    Networking Managed by Our Team:
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Domain Headhunters Identified</span>
                    <span className="text-emerald-400 font-bold">15–20 / week</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Personalized Connection Notes Sent</span>
                    <span className="text-emerald-400 font-bold">100% Custom</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span>Follow-Up & Relationship Maintenance</span>
                    <span className="text-emerald-400 font-bold">Polite 7-Day Loop</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Direct InMail & Talent Partner Chats</span>
                    <span className="text-emerald-400 font-bold">Logged to CRM</span>
                  </div>
                </div>
              </div>

              {/* Recruiter Network CRM Preview */}
              <div className="lg:col-span-7 bg-[#070B19] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner font-sans">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Active Recruiter Relationships Managed (Sample Week)
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Domain: Cloud & Distributed Systems
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      name: "Ananya Deshmukh",
                      title: "Lead Technical Recruiter • Atlassian",
                      status: "Connected • Initial Screen Scheduled",
                      statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
                      lastAction: "Reviewed resume, sent Calendly link for Thursday 4 PM",
                    },
                    {
                      name: "Marcus Vance",
                      title: "Executive Talent Partner • Stripe (Remote)",
                      status: "In Conversation",
                      statusColor: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
                      lastAction: "Shared team charter for Staff Infra opening; coordinated candidate slot",
                    },
                    {
                      name: "Karan Johar (Tech TA)",
                      title: "Senior Talent Acquisition • Razorpay",
                      status: "Referral Routed to Hiring Lead",
                      statusColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
                      lastAction: "Forwarded profile to VP of Engineering for technical fit evaluation",
                    },
                  ].map((lead, i) => (
                    <div key={i} className="bg-white/5 p-3.5 rounded-xl border border-white/5 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm">{lead.name}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${lead.statusColor}`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="text-slate-400 mb-1.5">{lead.title}</div>
                      <div className="text-[11px] text-slate-300 bg-black/30 p-2 rounded border border-white/5">
                        <strong>Latest Activity:</strong> {lead.lastAction}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 6: NAUKRI PROFILE FASTFORWARD & APPLICATION TEAM */}
          {activePillarIndex === 5 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-amber-400" />
                    Naukri FastForward & Curated Application Team
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Naukri is the dominant hiring portal for Indian tech and corporate roles. Recruiters rely on FastForward search indexing, keyword weighting, and active freshness scores. Our specialists re-engineer your profile and handle application screening questions personally.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
                    <strong className="text-white flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                      Search Visibility Index:
                    </strong>
                    <span>Pushes your profile into the top 3% of recruiter candidate searches using keyword density and headline tuning.</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
                    <strong className="text-white flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-emerald-400" />
                      Custom Questionnaire Answers:
                    </strong>
                    <span>Our application coordinators resolve employer questionnaires accurately using your agreed profile parameters, avoiding blind spam.</span>
                  </div>
                </div>
              </div>

              {/* Naukri Profile Optimization Mockup */}
              <div className="lg:col-span-7 bg-[#070B19] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner font-sans">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="text-xs font-bold text-white">
                    Naukri FastForward Specialist Scorecard
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Recruiter View Top 3%
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Headline & Summary Tuning:</span>
                      <span className="text-emerald-400 font-bold">Optimized (98/100)</span>
                    </div>
                    <div className="text-slate-200 font-mono text-[11px] bg-black/40 p-2.5 rounded border border-white/5">
                      "Senior Distributed Systems Engineer | Go, Kafka, Kubernetes | 18k QPS Scalability | Microservices Architecture | Target: ₹35L-55L"
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="text-slate-400">Search Appearances:</div>
                      <div className="text-lg font-black text-white mt-0.5">840+ / week</div>
                      <div className="text-emerald-400 text-[10px]">▲ 310% increase</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <div className="text-slate-400">Recruiter Actions / Downloads:</div>
                      <div className="text-lg font-black text-white mt-0.5">38 Downloads</div>
                      <div className="text-emerald-400 text-[10px]">▲ 4.2x engagement</div>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-emerald-300 text-[11px]">
                    ✅ <strong>Handled by Application Team:</strong> 18 high-priority applications submitted on Naukri with custom cover notes and verified recruiter follow-ups.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 7: DEDICATED SPECIALIST & COMMAND CENTER */}
          {activePillarIndex === 6 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <LineChart className="w-5 h-5 text-emerald-400" />
                    Dedicated Career Specialist & Transparent Dashboard
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    You are assigned a dedicated career specialist who coordinates your entire job search. All email verification services, LinkedIn InMail credits, and outreach infrastructure are 100% absorbed by our team with full weekly Friday reporting.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    What's 100% Managed For You:
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>Dedicated Career Specialist & Research Coordinator</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>All Recruiter Email Verification & InMail Credits Covered</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>Naukri FastForward Optimization & Profile Indexing</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                      <span>Transparent Friday Intelligence Digest with Callback Log</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-Time Dashboard Preview */}
              <div className="lg:col-span-7 bg-[#070B19] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-inner font-sans">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Your Job Search Dashboard (Live Updates)
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Updated by Career Team
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-center">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <div className="text-slate-400 text-[10px]">Openings Scanned</div>
                    <div className="text-lg font-black text-white">142</div>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <div className="text-slate-400 text-[10px]">Recruiters Reached</div>
                    <div className="text-lg font-black text-blue-400">38</div>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <div className="text-slate-400 text-[10px]">Referrals Secured</div>
                    <div className="text-lg font-black text-purple-400">9</div>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <div className="text-slate-400 text-[10px]">Interview Calls</div>
                    <div className="text-lg font-black text-emerald-400">4 Active</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-white font-semibold block">Upcoming: Technical Screen with Atlassian Lead</span>
                      <span className="text-slate-400 text-[11px]">Thursday at 4:00 PM IST • Candidate briefing dossier ready</span>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">
                      Confirmed
                    </span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-white font-semibold block">Friday Intelligence Digest Delivered</span>
                      <span className="text-slate-400 text-[11px]">Comprehensive breakdown of all 24 submitted applications</span>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-blue-500/20 text-blue-300">
                      Weekly Log
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
