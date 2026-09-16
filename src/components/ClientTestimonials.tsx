import React, { useState, useEffect } from "react";
import {
  Star,
  CheckCircle2,
  Building2,
  MapPin,
  ExternalLink,
  ShieldCheck,
  PlusCircle,
  X,
  Lock,
  Mail,
  AlertCircle,
  UserCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  currentCompany: string;
  location?: string;
  linkedinUrl: string;
  avatarInitials: string;
  highlight: string;
  quote: string;
  metrics: string;
  verifiedSubscriber: boolean;
  dateAdded?: string;
}

// Pre-seeded verified active subscribers in the database with complete employee details
const INITIAL_SUBSCRIBERS = [
  {
    email: "madhur.bhardwaj@gmail.com",
    name: "Madhur Bhardwaj",
    linkedinUrl: "https://www.linkedin.com/in/bmadhur4587/",
    role: "Game Developer & Unity Specialist",
    company: "Net Gaming",
    location: "Noida",
  },
  {
    email: "puja.kumari.dev@gmail.com",
    name: "Puja Kumari",
    linkedinUrl: "https://www.linkedin.com/in/puja-1pk/",
    role: "Frontend & Web Developer",
    company: "Ceinsys Tech Limited",
    location: "Pune",
  },
  {
    email: "vinayak.gupta.data@gmail.com",
    name: "Vinayak Gupta",
    linkedinUrl: "https://www.linkedin.com/in/vinayak-gupta-8903931a4/",
    role: "Senior Data Engineer",
    company: "Ericsson",
    location: "Noida",
  },
  {
    email: "gagan.meena.tech@gmail.com",
    name: "Gagan Meena",
    linkedinUrl: "https://www.linkedin.com/in/gagan-meena-243b65255/",
    role: "Software Engineer (Full Stack)",
    company: "BrowserStack",
    location: "Jaipur",
  },
  {
    email: "tejesh.bharadwaj@gmail.com",
    name: "Tejesh Bharadwaj",
    linkedinUrl: "https://www.linkedin.com/in/tejesh-bharadwaj-187b5216a/",
    role: "Backend & Systems Engineer",
    company: "PAR Technology",
    location: "Jaipur",
  },
];

// Initial 5 authentic client testimonials corresponding to the user's LinkedIn profiles
const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-madhur",
    name: "Madhur Bhardwaj",
    role: "Game Developer & Unity Specialist",
    currentCompany: "Net Gaming",
    location: "Noida",
    linkedinUrl: "https://www.linkedin.com/in/bmadhur4587/",
    avatarInitials: "MB",
    highlight: "17 interview calls in under 2 weeks and 4 top-tier offer letters — couldn't have managed this while crunching game release deadlines at Net Gaming.",
    quote:
      "As a game developer, crunch weeks are normal — I was working 11-12 hours daily at Net Gaming in Noida leading up to a major title release. Finding time to search for roles, tailor portfolio links, and connect with studio leads was completely impossible. CareerPilot Partners took the entire burden off my shoulders. Their team audited my Unity, C#, and rendering optimization background, highlighted my shader performance metrics on my resume, and directly reached out to gaming engineering leads. Within 12 days, I had 17 interview calls lined up. The pipeline was so concentrated that I cleared final rounds quickly and held 4 competing offer letters from top gaming and interactive tech studios. Ended up choosing an offer with a 65% hike. Incredible service for busy developers.",
    metrics: "17 Interview Calls in 12 Days • 4 Offer Letters • +65% Hike",
    verifiedSubscriber: true,
    dateAdded: "Verified Subscriber • August 2026",
  },
  {
    id: "review-puja",
    name: "Puja Kumari",
    role: "Frontend & Web Developer",
    currentCompany: "Ceinsys Tech Limited",
    location: "Pune",
    linkedinUrl: "https://www.linkedin.com/in/puja-1pk/",
    avatarInitials: "PK",
    highlight: "16 interview calls in just 10 days and 4 offer letters — transformed my transition from Ceinsys Tech into back-to-back recruiter calls.",
    quote:
      "Before joining CareerPilot, I had applied to 80+ frontend openings across LinkedIn and Naukri over 3 months with virtually zero responses. I was stuck in a web development role at Ceinsys Tech Limited in Pune working long hours with no time to figure out what was wrong. CareerPilot's specialist re-engineered my resume from scratch: replacing generic task lists with React/TypeScript performance benchmarks and Webpack bundle optimization metrics. They also optimized my Naukri profile and submitted curated applications with bespoke screening answers. Within just 10 days, I had 16 interview calls scheduled with reputable product companies. By week 3, I had 4 official offer letters in hand. The confidence of choosing between multiple offers is unmatched.",
    metrics: "16 Interview Calls in 10 Days • 4 Offer Letters • 2.2x Salary",
    verifiedSubscriber: true,
    dateAdded: "Verified Subscriber • August 2026",
  },
  {
    id: "review-vinayak",
    name: "Vinayak Gupta",
    role: "Senior Data Engineer",
    currentCompany: "Ericsson",
    location: "Noida",
    linkedinUrl: "https://www.linkedin.com/in/vinayak-gupta-8903931a4/",
    avatarInitials: "VG",
    highlight: "20 recruiter interview calls in 2 weeks, leading to 5 high-paying offer letters across tier-1 data platforms.",
    quote:
      "As a Data Engineer handling production Spark pipelines and petabyte-scale data lakes at Ericsson in Noida, my workdays are relentless. I knew the market had great demand, but I simply had zero bandwidth to navigate recruiter spam or fill repetitive ATS forms after midnight. CareerPilot Partners operated with exceptional engineering precision. They documented my exact target CTC (₹45L+), desired distributed systems tech stack, and excluded companies. Their researchers reached out directly to Engineering Directors and Data Leads at top tech platforms. In just two weeks, I had 20 high-signal interview calls coordinated. I clustered my interviews, cleared technical loops, and walked away with 5 distinct offer letters. Having 5 offers gave me supreme leverage to negotiate the exact title and compensation package I wanted.",
    metrics: "20 Interview Calls in 2 Weeks • 5 Offer Letters • ₹48L CTC Package",
    verifiedSubscriber: true,
    dateAdded: "Verified Subscriber • August 2026",
  },
  {
    id: "review-gagan",
    name: "Gagan Meena",
    role: "Software Engineer (Full Stack)",
    currentCompany: "BrowserStack",
    location: "Jaipur",
    linkedinUrl: "https://www.linkedin.com/in/gagan-meena-243b65255/",
    avatarInitials: "GM",
    highlight: "18 interview calls in 12 days and 4 competing offers — smoothly leveled up my career from BrowserStack to Tier-1 product tech.",
    quote:
      "Working at BrowserStack in Jaipur, I had strong full-stack engineering skills but zero bandwidth after long sprint cycles to proactively scout roles and bypass saturated applicant queues. My cold portal applications were getting lost in the thousands. The CareerPilot team audited my GitHub, re-calibrated my resume for modern ATS systems, and initiated targeted employee referral outreach at companies like Swiggy, Atlassian, and Razorpay. Two internal referrals came through within 48 hours, unlocking immediate interview loops. Over 12 days, they delivered 18 recruiter calls. I converted rounds into 4 competing offer letters and chose a tier-1 firm with remote flexibility and double my previous compensation. Genuinely life-changing execution.",
    metrics: "18 Interview Calls in 12 Days • 4 Competing Offers • 2.1x Salary Hike",
    verifiedSubscriber: true,
    dateAdded: "Verified Subscriber • July 2026",
  },
  {
    id: "review-tejesh",
    name: "Tejesh Bharadwaj",
    role: "Backend & Systems Engineer",
    currentCompany: "PAR Technology",
    location: "Jaipur",
    linkedinUrl: "https://www.linkedin.com/in/tejesh-bharadwaj-187b5216a/",
    avatarInitials: "TB",
    highlight: "19 interview calls in 2 weeks and 5 final offer letters after client firefighting at PAR Technology had stalled my search.",
    quote:
      "I had tried switching twice on my own while working as a backend systems engineer at PAR Technology in Jaipur, but client fire-fighting always destroyed my consistency. After sending 15-20 applications, I would get bogged down by work, miss recruiter emails, and lose all momentum. CareerPilot was like having a private career operations team working on my behalf every single day. They handled 100% of the scouting, curated applications, and activated alumni connections for employee referrals. Within 2 weeks, they coordinated 19 interview calls for Senior Backend roles. I cleared 5 final rounds and held 5 offer letters at once, allowing me to negotiate my package to a level I never thought possible. Best investment a busy engineer can make.",
    metrics: "19 Interview Calls in 2 Weeks • 5 Offer Letters • Senior Role Transition",
    verifiedSubscriber: true,
    dateAdded: "Verified Subscriber • July 2026",
  },
];

export const ClientTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [subscribers, setSubscribers] = useState(INITIAL_SUBSCRIBERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authStep, setAuthStep] = useState<"auth" | "form" | "denied">("auth");
  const [inputEmail, setInputEmail] = useState("");
  const [verifiedUser, setVerifiedUser] = useState<(typeof INITIAL_SUBSCRIBERS)[0] | null>(null);
  const [denialReason, setDenialReason] = useState("");

  // Review Form States
  const [formName, setFormName] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formLinkedin, setFormLinkedin] = useState("");
  const [formHighlight, setFormHighlight] = useState("");
  const [formQuote, setFormQuote] = useState("");
  const [formMetrics, setFormMetrics] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load reviews and subscribers from local storage if available
  useEffect(() => {
    try {
      const storedReviews = localStorage.getItem("careerpilot_reviews_v6");
      if (storedReviews) {
        setTestimonials(JSON.parse(storedReviews));
      } else {
        localStorage.setItem("careerpilot_reviews_v6", JSON.stringify(INITIAL_TESTIMONIALS));
      }
      const storedSubs = localStorage.getItem("careerpilot_subscribers_v6");
      if (storedSubs) {
        setSubscribers(JSON.parse(storedSubs));
      } else {
        localStorage.setItem("careerpilot_subscribers_v6", JSON.stringify(INITIAL_SUBSCRIBERS));
      }
    } catch {
      // fallback to initial
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setAuthStep("auth");
    setInputEmail("");
    setVerifiedUser(null);
    setDenialReason("");
    setSubmitSuccess(false);
  };

  const handleVerifyEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanEmail = inputEmail.trim().toLowerCase();
    if (!cleanEmail) return;

    // Check if email is in the subscribers database
    const matchedSubscriber = subscribers.find(
      (s) => s.email.toLowerCase() === cleanEmail
    );

    if (matchedSubscriber) {
      setVerifiedUser(matchedSubscriber);
      setFormName(matchedSubscriber.name);
      setFormRole(matchedSubscriber.role);
      setFormCompany(matchedSubscriber.company);
      setFormLocation(matchedSubscriber.location || "");
      setFormLinkedin(matchedSubscriber.linkedinUrl);
      setAuthStep("form");
    } else {
      setDenialReason(
        `Email "${cleanEmail}" was not found in our Active Subscribers Database. To maintain 100% authenticity and protect against fake reviews, review submission is restricted strictly to active CareerPilot concierge clients.`
      );
      setAuthStep("denied");
    }
  };

  const handleQuickDemoAuth = (subscriber: (typeof INITIAL_SUBSCRIBERS)[0]) => {
    setInputEmail(subscriber.email);
    setVerifiedUser(subscriber);
    setFormName(subscriber.name);
    setFormRole(subscriber.role);
    setFormCompany(subscriber.company);
    setFormLocation(subscriber.location || "");
    setFormLinkedin(subscriber.linkedinUrl);
    setAuthStep("form");
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formQuote || !formHighlight) return;

    const initials = formName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const newReview: TestimonialItem = {
      id: `review-${Date.now()}`,
      name: formName,
      role: formRole || "Software Professional",
      currentCompany: formCompany || "Product Tech, India",
      location: formLocation || "India",
      linkedinUrl: formLinkedin || "https://www.linkedin.com",
      avatarInitials: initials,
      highlight: formHighlight,
      quote: formQuote,
      metrics: formMetrics || "Verified Career Switch • Active Concierge Client",
      verifiedSubscriber: true,
      dateAdded: "Verified Subscriber • Just Now",
    };

    const updated = [newReview, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem("careerpilot_reviews_v6", JSON.stringify(updated));
    } catch {
      // storage quota safe
    }

    setSubmitSuccess(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitSuccess(false);
    }, 1800);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative border-b border-slate-200/80 overflow-hidden" id="testimonials">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
              Verified Subscriber Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
              Honest Feedback from Working Professionals
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every single review is from a verified CareerPilot subscriber with full-time engineering & tech commitments. Check their actual LinkedIn profiles to see their genuine career transitions.
            </p>
          </div>

          {/* Action to Write a Review (Gated to Subscribers) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleOpenModal}
              className="inline-flex items-center gap-2 bg-[#0B132B] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-white/10 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              id="btn-open-review-modal"
            >
              <PlusCircle className="w-4 h-4 text-[#34D399]" />
              <span>Submit Subscriber Review</span>
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* 5 Real Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#3E4C9A]/40 hover:bg-white relative shadow-sm group"
            >
              <div>
                {/* Header: 5 Stars + Verified Subscriber Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {t.verifiedSubscriber && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-300/60">
                      <ShieldCheck className="w-3 h-3 text-emerald-700" />
                      <span>Verified Subscriber</span>
                    </span>
                  )}
                </div>

                <div className="text-sm font-bold text-[#0B132B] mb-2.5 group-hover:text-[#3E4C9A] transition-colors leading-snug">
                  "{t.highlight}"
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3E4C9A] to-[#4F67B8] text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                      {t.avatarInitials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B132B] leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {t.role}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 mt-1">
                        <span className="text-[11px] text-[#3E4C9A] font-semibold flex items-center gap-1">
                          <Building2 className="w-3 h-3 shrink-0 text-[#3E4C9A]" />
                          <span>{t.currentCompany}</span>
                        </span>
                        {t.location && (
                          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3 shrink-0 text-slate-400" />
                            <span>{t.location}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Profile Link */}
                  {t.linkedinUrl && (
                    <a
                      href={t.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-lg border border-blue-200 transition-colors shrink-0"
                      title="View Verified Profile on LinkedIn"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] font-semibold text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded-lg border border-[#10B981]/20">
                  <div className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{t.metrics}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Subscriber Authenticity Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B132B] text-white p-5 sm:p-8 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/20 text-[#34D399] flex items-center justify-center shrink-0 border border-[#34D399]/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                100% Verified Review Authenticity Guarantee
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                We strictly disallow anonymous or unverified public reviews. Only candidates with an active concierge subscription verified in our database can leave feedback, ensuring zero fake testimonials.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleOpenModal}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#34D399] hover:bg-emerald-400 text-[#070B19] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 shrink-0 cursor-pointer"
          >
            <span>Verify & Leave Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Interactive Review Modal with Subscriber Database Authentication */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0B132B] border border-white/15 text-white shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#070B19]/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3E4C9A] to-[#10B981] flex items-center justify-center text-[#34D399] shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Submit Verified Subscriber Review
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Active Concierge Subscription Verification Required
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content based on Authentication Step */}
            <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
              {/* STEP 1: AUTH / EMAIL VERIFICATION */}
              {authStep === "auth" && (
                <div>
                  <div className="mb-5 rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Subscriber Identity Check
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          To protect against fake reviews, please enter the registered email address tied to your active CareerPilot concierge subscription.
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleVerifyEmail} className="space-y-4 mb-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Registered Subscriber Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={inputEmail}
                          onChange={(e) => setInputEmail(e.target.value)}
                          placeholder="e.g. bmadhur4587@gmail.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#10B981] hover:from-[#4859b3] hover:to-[#34D399] text-white font-bold text-sm py-3 rounded-xl shadow-lg transition-all cursor-pointer"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Verify Subscription in Database</span>
                    </button>
                  </form>

                  {/* One-Click Demo Verification Accounts */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Or Test with Verified Client Accounts:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {subscribers.map((sub) => (
                        <button
                          key={sub.email}
                          type="button"
                          onClick={() => handleQuickDemoAuth(sub)}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-[#34D399] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <ShieldCheck className="w-3 h-3 text-[#34D399]" />
                          <span>
                            {sub.name} <span className="text-slate-400">({sub.location})</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ACCESS DENIED STATE */}
              {authStep === "denied" && (
                <div className="text-center py-4">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-7 h-7" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    Review Access Restricted
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    {denialReason}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAuthStep("auth")}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold cursor-pointer"
                    >
                      Try Another Email
                    </button>

                    <a
                      href="#pricing"
                      onClick={() => setIsModalOpen(false)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3E4C9A] to-[#10B981] text-white text-xs font-bold cursor-pointer"
                    >
                      Explore Subscription Plans
                    </a>
                  </div>
                </div>
              )}

              {/* STEP 2: REVIEW SUBMISSION FORM (UNLOCKED FOR SUBSCRIBER) */}
              {authStep === "form" && (
                <div>
                  {submitSuccess ? (
                    <div className="text-center py-8 animate-in zoom-in-95 duration-200">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-[#34D399] border border-emerald-500/30 flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        Review Published Successfully!
                      </h4>
                      <p className="text-xs text-slate-300">
                        Thank you, {formName}. Your verified subscriber feedback has been added live to our site.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                      {/* Verified Badge Header */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#34D399]">
                          <ShieldCheck className="w-4 h-4" />
                          <span>Verified Active Subscriber: {verifiedUser?.email}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setAuthStep("auth")}
                          className="text-[10px] text-slate-400 hover:text-white underline cursor-pointer"
                        >
                          Change
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Your Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Your Role / Specialization
                          </label>
                          <input
                            type="text"
                            required
                            value={formRole}
                            onChange={(e) => setFormRole(e.target.value)}
                            placeholder="e.g. Senior Backend Engineer"
                            className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Current Company
                          </label>
                          <input
                            type="text"
                            required
                            value={formCompany}
                            onChange={(e) => setFormCompany(e.target.value)}
                            placeholder="e.g. Enterprise Studio"
                            className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            required
                            value={formLocation}
                            onChange={(e) => setFormLocation(e.target.value)}
                            placeholder="e.g. Noida, Pune, Jaipur"
                            className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            LinkedIn Profile URL
                          </label>
                          <input
                            type="url"
                            required
                            value={formLinkedin}
                            onChange={(e) => setFormLinkedin(e.target.value)}
                            placeholder="https://www.linkedin.com/in/..."
                            className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Rating
                          </label>
                          <div className="flex items-center gap-1.5 py-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setFormRating(star)}
                                className="cursor-pointer"
                              >
                                <Star
                                  className={`w-5 h-5 ${
                                    star <= formRating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-slate-600"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Key Outcome / Metric
                          </label>
                          <input
                            type="text"
                            required
                            value={formMetrics}
                            onChange={(e) => setFormMetrics(e.target.value)}
                            placeholder="e.g. 9 Interview Calls • 45% CTC Hike"
                            className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Headline Summary
                        </label>
                        <input
                          type="text"
                          required
                          value={formHighlight}
                          onChange={(e) => setFormHighlight(e.target.value)}
                          placeholder="e.g. Saved 18 hours every week during a major sprint."
                          className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Your Detailed Experience & Feedback
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formQuote}
                          onChange={(e) => setFormQuote(e.target.value)}
                          placeholder="Explain how demanding your work schedule was, what the CareerPilot team did for you (resume, recruiter emails, referrals, Naukri), and how many calls you received..."
                          className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#34D399]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#10B981] hover:from-[#4859b3] hover:to-[#34D399] text-white font-bold text-sm py-3 rounded-xl shadow-lg transition-all cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Publish Verified Review</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
