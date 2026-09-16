export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  currency: string;
  bestFor: string;
  badge?: string;
  features: string[];
  disclaimer: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  letter: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
  impactMetric?: string;
  keyFeatures?: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export const siteConfig = {
  brandName: "CareerPilot Partners",
  companyName: "CareerPilot Partners",
  tagline: "Dedicated Career Specialists & Full-Service Application Concierge for Busy Professionals",
  oneLineVision:
    "A dedicated team of senior career strategists, recruiter researchers, and application specialists actively scouring openings, tailoring resumes, securing employee referrals, and reaching out to hiring leads on your behalf.",
  hero: {
    badge: "Dedicated Professional Career Team • Working Actively For You",
    headline: "Focus on Your Demanding Work. Our Dedicated Team Pilots Your Next Move.",
    subheadline:
      "Working 10-hour days leaves zero time to browse job boards, tailor resumes, find hiring decision-makers, and chase recruiters. Our dedicated career team acts as your personal career co-pilot—optimizing your resume, discovering high-match openings, securing employee referrals, personalizing recruiter outreach, and executing targeted applications so you land high-impact interviews.",
    trustStatement:
      "Save 15–20 hours/week • 100% human-guided & candidate-controlled • All platform premiums covered",
    pipelineWorkflow: [
      { step: "01", name: "Curate", desc: "Daily opportunity research across LinkedIn, Naukri & corporate career portals" },
      { step: "02", name: "Tailor", desc: "Expert resume re-engineering & ATS market calibration" },
      { step: "03", name: "Connect", desc: "Direct relationship building with talent partners & headhunters" },
      { step: "04", name: "Refer", desc: "Dual-vector outreach: 1st-degree alumni & verified company insiders" },
      { step: "05", name: "Apply", desc: "Curated applications with tailored screening question responses" },
      { step: "06", name: "Report", desc: "Transparent Friday intelligence digest & callback management" },
    ],
  },
  contact: {
    email: "lk356003@gmail.com",
    backupEmail: "LK3560003@gmail.com",
    phoneDisplay: "+91 63787 92367",
    phoneTel: "+916378792367",
    whatsappUrl: "https://wa.me/916378792367",
    formspreeEndpoint: "https://formspree.io/f/xyzgklqw",
    supportHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST / EST",
  },
  compliance: {
    platformDisclaimer:
      "CareerPilot Partners is an independent career concierge service. Not affiliated with LinkedIn, Naukri, Gmail, or any employer.",
    noGuaranteeStatement:
      "We do not guarantee job offers, interview calls, or employment. Outcomes depend on candidate qualifications, role fit, job market dynamics, and employer decisions.",
    pricingDisclaimer:
      "Career-support services do not guarantee interviews, job offers, employment, recruiter responses, or referral outcomes. Results depend on candidate profile, role fit, job market, and employer hiring decisions.",
    platformPremiumNote:
      "All necessary platform toolings, email verification credits, recruiter search suites, and outreach infrastructure are 100% absorbed and managed by our team.",
    applicationPhilosophy:
      "Every application and message is guided by agreed target roles, seniority, compensation brackets, and preferred locations. We focus on high relevance and personalized quality—never blind automation or spam.",
    howItWorksNote:
      "Every job search is unique. We focus on consistent, high-signal execution by dedicated specialists for busy professionals—not unrealistic shortcuts.",
  },

  busyProfessionalMetrics: [
    {
      metric: "15–20 hrs",
      label: "Saved Every Week",
      detail: "No more spending exhausted evenings scrolling job boards, rewriting cover notes, and filling repetitive portals.",
    },
    {
      metric: "96%+",
      label: "ATS Match Score",
      detail: "Resumes and profiles are hand-calibrated by career specialists to target industry standards and job descriptions.",
    },
    {
      metric: "3.4x",
      label: "Higher Response Rate",
      detail: "Personalized situational messaging crafted for recruiters and referrers dramatically outperforms cold portal applications.",
    },
    {
      metric: "100%",
      label: "Premiums Covered",
      detail: "All outreach credits, profile boosters, email verification tools, and portals are fully managed by our team.",
    },
  ],

  problemCards: [
    {
      title: "Zero Time After a 9-to-6 Day",
      description:
        "After a demanding workday, spending 2–3 hours finding openings and filling repetitive portal forms leads to burnout and dropped consistency.",
      icon: "Clock",
      badge: "Time Exhaustion",
    },
    {
      title: "Silent Portals & ATS Black Holes",
      description:
        "Standard portal applications rarely get seen without keyword calibration, direct recruiter outreach, and internal referral pathways.",
      icon: "EyeOff",
      badge: "Black Hole Rejections",
    },
    {
      title: "Missed 48-Hour Openings",
      description:
        "Top positions fill up within 48–72 hours. If you only search on weekends, the best employer application windows are already closed.",
      icon: "SearchX",
      badge: "Fast-Closing Roles",
    },
    {
      title: "Awkward or Generic Networking",
      description:
        "Sending generic copy-paste messages to recruiters and connections burns bridges. Context-aware, human-crafted messaging is essential.",
      icon: "MessageSquareOff",
      badge: "Outreach Fatigue",
    },
  ],

  services: [
    {
      id: "resume-reengineering",
      letter: "01",
      title: "Expert Resume Re-Engineering & ATS Calibration",
      description:
        "Our senior career specialists personally audit your resume against target roles, job descriptions, and ATS algorithms. We restructure bullet points into quantified achievements and optimize keyword density with complete transparency.",
      icon: "FileText",
      tag: "Pillar 1 • Resume & ATS",
      impactMetric: "ATS Score: 62% → 96%",
      keyFeatures: [
        "Senior career specialist hand-review & ATS parser audit",
        "Passive tasks rewritten into quantified business impact",
        "Role-specific customization for target tech stacks",
      ],
    },
    {
      id: "recruiter-email",
      letter: "02",
      title: "Direct Recruiter & Decision-Maker Email Campaigns",
      description:
        "Our research team identifies verified talent partners and engineering hiring managers, crafting personalized, professional outreach tailored specifically to each role—delivered from your dedicated candidate email.",
      icon: "MailCheck",
      tag: "Pillar 2 • Direct Outreach",
      impactMetric: "3.4x Higher Reply Rate",
      keyFeatures: [
        "Verified recruiter & hiring manager email discovery",
        "Hyper-personalized situational templates tailored by specialists",
        "Polite, structured follow-up cadences managed on your behalf",
      ],
    },
    {
      id: "role-scouting",
      letter: "03",
      title: "High-Signal Opportunity Scouting & Requirement Extraction",
      description:
        "Our team conducts continuous daily research across LinkedIn, corporate career portals, and unlisted opportunities matching your exact title, skills, experience, target CTC, and location preferences.",
      icon: "Compass",
      tag: "Pillar 3 • Role Scouting",
      impactMetric: "30+ Weekly Verified Openings",
      keyFeatures: [
        "Daily curation across corporate portals & unlisted roles",
        "Compensation & seniority threshold filtering",
        "Clear match rationale provided for every opportunity",
      ],
    },
    {
      id: "dual-referrals",
      letter: "04",
      title: "Dual-Vector Employee Referral Strategy",
      description:
        "Referrals are your highest-leverage route to interviews. Our team activates warm referrals across your existing 1st-degree/alumni network and coordinates respectful, value-first introductions to verified insiders at target firms.",
      icon: "Users2",
      tag: "Pillar 4 • Referral Strategy",
      impactMetric: "5x Higher Interview Callback",
      keyFeatures: [
        "1st-degree & alumni network relationship activation without awkwardness",
        "Respectful outreach to senior engineers & leads at target firms",
        "Context-aware messaging adapted to recipient relationship",
      ],
    },
    {
      id: "recruiter-networking",
      letter: "05",
      title: "Proactive Recruiter & Headhunter Network Expansion",
      description:
        "Our team builds long-term relationships on your behalf with specialized headhunters and executive talent partners in your domain before openings go public—managing connection notes and ongoing touchpoints.",
      icon: "UserCheck",
      tag: "Pillar 5 • Talent Network",
      impactMetric: "Dedicated Talent CRM",
      keyFeatures: [
        "Specialized headhunters & executive talent leads identified",
        "Personalized connection requests highlighting candidate value",
        "Relationship nurturing & pipeline tracking managed by our team",
      ],
    },
    {
      id: "naukri-acceleration",
      letter: "06",
      title: "Naukri Profile FastForward & Curated Application Team",
      description:
        "We optimize your Naukri headline, summary, and keyword weighting to place your profile in the top recruiter search bracket (FastForward rank), while our team submits high-priority applications with tailored questionnaire responses.",
      icon: "CheckSquare",
      tag: "Pillar 6 • Naukri Booster",
      impactMetric: "Top 3% Recruiter Search Index",
      keyFeatures: [
        "Naukri profile keyword & headline optimization by experts",
        "Daily activity cadence maintaining high search indexing",
        "Curated applications with custom screening questionnaire answers",
      ],
    },
    {
      id: "dedicated-concierge",
      letter: "07",
      title: "Dedicated Career Specialist & Transparent Reporting",
      description:
        "You are assigned a dedicated career specialist who manages your entire search. All outreach credits and platform toolings are 100% covered. You track everything via our central dashboard and weekly Friday intelligence digests.",
      icon: "LineChart",
      tag: "Pillar 7 • Concierge Management",
      impactMetric: "100% Tooling & Premiums Covered",
      keyFeatures: [
        "Dedicated career manager assigned to your account",
        "All outreach credits & platform toolings included",
        "Transparent Friday progress & intelligence digest",
      ],
    },
  ] as ServiceItem[],

  howItWorksSteps: [
    {
      step: "01",
      title: "Strategy Consultation with Career Specialist",
      description:
        "We understand your career trajectory, target roles, preferred locations, target CTC, notice period, and specific companies to prioritize or exclude.",
      badge: "Step 01 • Consultation",
    },
    {
      step: "02",
      title: "Resume & Profile Re-Engineering",
      description:
        "Our career specialists audit and rewrite your resume, calibrating bullet points to quantified business impact and target market criteria.",
      badge: "Step 02 • Positioning",
    },
    {
      step: "03",
      title: "Target Company & Search Calibration",
      description:
        "We establish your daily search matrix: role keywords, compensation boundaries, location constraints, and corporate targets.",
      badge: "Step 03 • Strategy",
    },
    {
      step: "04",
      title: "Applications, Referrals & Recruiter Outreach",
      description:
        "Our team executes your multi-channel search: direct recruiter emails, dual-vector referral asks, and curated LinkedIn & Naukri submissions.",
      badge: "Step 04 • Execution",
    },
    {
      step: "05",
      title: "Interview Acceleration & Friday Digest",
      description:
        "Track interview invitations, recruiter replies, and key milestones in your central dashboard with a comprehensive weekly strategic digest.",
      badge: "Step 05 • Momentum",
    },
  ] as ProcessStep[],

  weeklySummaryPreview: {
    title: "Dedicated Team Dashboard • Real-Time Pipeline Intelligence",
    note: "You are never left guessing. Your dedicated career specialist and Friday intelligence digest provide 100% visibility into actions completed, responses, and callback momentum.",
    metrics: [
      { label: "Candidate Profile", value: "Senior Backend / Staff Software Engineer" },
      { label: "Target Brackets", value: "₹35L – ₹55L / $140k – $200k • BLR, HYD, US Remote" },
      { label: "ATS Optimization Score", value: "96% (Re-engineered from baseline 62%)" },
      { label: "High-Signal Roles Discovered", value: "42 Verified Openings Hand-Curated" },
      { label: "Recruiter Outreach Sent", value: "18 Hyper-Personalized Direct Inquiries" },
      { label: "Employee Referrals Requested", value: "7 Context-Aware Warm Asks Delivered" },
      { label: "Referrals Confirmed", value: "3 Internal Referral Codes Logged" },
      { label: "Naukri Search Rank Boost", value: "Top 3% Recruiter Search Visibility Index" },
      { label: "Curated Applications Logged", value: "24 High-Priority Submissions" },
      { label: "Active Interview Callbacks", value: "4 Preliminary HR / Tech Rounds Scheduled" },
      { label: "Top Matching Companies", value: "Atlassian, Razorpay, Microsoft, Swiggy, Stripe" },
      { label: "Next Week Strategic Focus", value: "Accelerate FinTech Leadership Outreach" },
    ],
  },

  credibilityPillars: [
    {
      title: "Dedicated Human Career Specialists",
      description:
        "Real career experts and talent researchers manage your search—delivering personalized, high-touch execution rather than generic automation.",
      icon: "Users2",
    },
    {
      title: "Multi-Channel Outreach Infrastructure",
      description:
        "Leveraging specialized recruiter email discovery, verified talent databases, and targeted application systems behind the scenes for maximum reach and speed.",
      icon: "Layers",
    },
    {
      title: "Dual-Vector Referral Strategy",
      description:
        "Unlock the hidden job market by activating warm 1st-degree connections and respectful company insider referral requests.",
      icon: "Target",
    },
    {
      title: "Complete Pipeline Transparency",
      description:
        "Monitor applications, outreach statuses, recruiter replies, and interview invitations in one transparent, candidate-controlled dashboard.",
      icon: "BarChart4",
    },
  ],

  privacyPrinciples: [
    {
      title: "Candidate-Controlled Boundaries",
      description: "You set target CTC, excluded companies, and location boundaries before any application or outreach occurs.",
    },
    {
      title: "Zero Credential Harvesting",
      description: "We never ask for account passwords through web inquiry forms. Security and privacy are paramount.",
    },
    {
      title: "Explicit Consent Prior to Submissions",
      description: "All application pipelines and outreach sequences adhere strictly to your agreed candidate criteria.",
    },
    {
      title: "Dedicated Job-Search Communication",
      description: "All recruiter conversations can be routed through a dedicated professional email address for full candidate ownership.",
    },
    {
      title: "Strict Professional Confidentiality",
      description: "Your current employer status, resume data, and compensation expectations are protected by non-disclosure standards.",
    },
    {
      title: "Month-to-Month Flexibility",
      description: "No lock-in or long-term contracts. Pause, resume, or adjust your career acceleration tier whenever you wish.",
    },
  ],

  cancellationPolicy: {
    title: "14-Day 100% Money-Back Opportunity Guarantee",
    summary:
      "If our dedicated career team does not deliver relevant interview opportunities matching your agreed compensation, seniority, and role criteria within your first 2 weeks (14 days), your entire subscription fee will be 100% refunded to your original payment method. Zero risk, no questions asked.",
    period: "First 14 Calendar Days",
    refundType: "100% Full Money-Back Refund",
    processingTime: "Processed within 24 hours, credited to source account in 3–5 business days",
    terms: [
      {
        heading: "14-Day Opportunity Window",
        description:
          "Starting from your completed onboarding consultation, our specialists audit your resume, scout openings, submit tailored applications, and execute recruiter campaigns. If zero relevant interview opportunities are coordinated within 14 calendar days, you qualify for an immediate 100% refund.",
      },
      {
        heading: "100% Full Fee Refund (No Hidden Deductions)",
        description:
          "You receive back 100% of your initial subscription fee (₹10,000 for India Accelerator or $100 for Global Accelerator). We absorb all platform costs, email verification credits, and administrative overhead.",
      },
      {
        heading: "Zero Hassle & 1-Click Request",
        description:
          "To request a refund within your first 14 days, simply notify your dedicated talent specialist via WhatsApp or email, or click 'Request Cancellation' in your portal. No interrogation, no bureaucratic hurdles.",
      },
      {
        heading: "Month-to-Month Flexibility (Cancel Anytime)",
        description:
          "Beyond your first 14 days, your membership remains strictly month-to-month with zero long-term lock-in contracts. You can pause or cancel at any time prior to your next 30-day billing renewal.",
      },
      {
        heading: "Strict Confidentiality Retained Forever",
        description:
          "Even if you cancel and receive a full refund, our non-disclosure standards, employer negative-company exclusion list, and data protection agreements remain 100% legally binding and confidential forever.",
      },
    ],
  },

  pricing: [
    {
      id: "india",
      name: "CareerPilot India Accelerator",
      price: "₹10,000",
      period: "per month",
      currency: "INR",
      bestFor: "Working tech & corporate professionals seeking senior & leadership roles in India.",
      badge: "Most Popular • India Roles",
      features: [
        "14-Day 100% Money-Back Guarantee (Full refund if opportunities not delivered in 2 weeks)",
        "Dedicated Career Specialist & Research Coordinator",
        "Expert Resume Re-Engineering & ATS 95%+ Calibration",
        "Daily High-Signal Opportunity Scouting across corporate portals",
        "Personalized Recruiter & Hiring Manager Email Campaigns",
        "Dual-Vector Referral Strategy (1st degree alumni + company insiders)",
        "Naukri Profile FastForward Optimization & Search Rank Booster",
        "Targeted LinkedIn & Naukri Application Submissions with Custom Answers",
        "Proactive Recruiter & Headhunter Network Expansion",
        "All Email Verification & Platform Premiums 100% Covered",
        "Weekly Friday Intelligence Digest & Real-Time Tracking",
      ],
      disclaimer:
        "CareerPilot Partners provides structured career acceleration, expert review, and outreach execution. Interview calls and hiring decisions depend on candidate qualifications, employer requirements, and market conditions.",
    },
    {
      id: "international",
      name: "CareerPilot Global Accelerator",
      price: "$100",
      period: "per month",
      currency: "USD",
      bestFor: "Global candidates targeting US, UK, EU, and remote international opportunities.",
      badge: "US & International Roles",
      features: [
        "14-Day 100% Money-Back Guarantee (Full refund if opportunities not delivered in 2 weeks)",
        "Dedicated Career Specialist & Research Coordinator",
        "Expert Resume Re-Engineering & ATS 95%+ Calibration",
        "Daily High-Signal Opportunity Scouting across US/Global portals",
        "Personalized Recruiter & Hiring Manager Email Campaigns",
        "Dual-Vector Referral Strategy for US & Multinational Companies",
        "LinkedIn Profile Global Optimization & InMail Outreach",
        "Targeted International Portal Application Submissions",
        "Global Recruiter & Executive Search Network Expansion",
        "All Email Verification & Platform Premiums 100% Covered",
        "Weekly Friday Intelligence Digest & Real-Time Tracking",
      ],
      disclaimer:
        "CareerPilot Partners provides structured career acceleration, expert review, and outreach execution. Interview calls and hiring decisions depend on candidate qualifications, employer requirements, and market conditions.",
    },
  ] as PricingPlan[],

  faqs: [
    {
      question: "What is your Cancellation and 100% Money-Back Refund Policy?",
      answer:
        "We back our concierge service with a strict 14-Day (2-Week) 100% Money-Back Guarantee. If our dedicated team does not deliver relevant interview opportunities matching your agreed compensation, seniority, and target role criteria within your first 14 days of service, your entire subscription fee (₹10,000 / $100) will be 100% refunded to your original payment method. No questions asked, no hidden deductions, and no tedious bureaucracy. Furthermore, our service is strictly month-to-month—you can pause or cancel at any time with a single click or a quick message to your talent lead.",
    },
    {
      question: "How do you consistently generate 15–20 interview calls in just 1–2 weeks?",
      answer:
        "Rather than relying on a single slow job portal or blind applications, we execute a simultaneous 4-vector strategy: (1) Re-engineering your resume to achieve a 96%+ ATS score, (2) Submitting curated applications with bespoke answers to employer screening questions, (3) Delivering personalized outreach to verified Engineering Directors and Talent Partners, and (4) Securing direct employee referrals via alumni and company insiders. This multi-channel convergence creates immediate pipeline momentum, delivering 15–20 high-signal interview calls within 10 to 14 days.",
    },
    {
      question: "How does the team help convert interviews into 4–5 competing offer letters?",
      answer:
        "Landing multiple offers requires synchronized interview velocity. When you receive 15–20 interview calls in a tight 2-week window, our team helps you cluster initial screenings and technical loops concurrently. Having multiple companies progressing simultaneously creates urgency on the employer side and gives you supreme negotiation leverage to secure 4–5 competing offer letters—allowing you to negotiate compensation, seniority, and joining flexibility from a position of power.",
    },
    {
      question: "I work 10–12 hours a day and have zero free time. How much time do I need to invest?",
      answer:
        "You only need to invest 30 to 45 minutes during onboarding to align on your target roles, compensation floor, preferred tech stacks, and company exclusion list. After that, your dedicated team handles 100% of the operational heavy lifting—role research, resume tailoring, form filling, recruiter messages, and referral outreach. Your only responsibility is attending the curated interview calls our team coordinates for you.",
    },
    {
      question: "Is this an automated AI bot or a real human career team?",
      answer:
        "This is a human-led, dedicated professional service. While our team utilizes specialized research systems to discover verified emails, scan openings, and organize outreach at scale, every resume improvement, recruiter message, and referral ask is reviewed, personalized, and guided by experienced career specialists. We never use blind clicker bots that get candidate accounts restricted.",
    },
    {
      question: "Is my current employer protected? How do you ensure 100% confidentiality?",
      answer:
        "Confidentiality is guaranteed under strict non-disclosure terms. During onboarding, we maintain an explicit 'Negative Company List' ensuring your current employer, sister subsidiaries, and direct client partners are completely blacklisted from any applications or outreach. We never post public 'Open to Work' banners on your profile, and all recruiter correspondence can be routed through a dedicated private communication channel.",
    },
    {
      question: "What if I have a specialized tech stack (e.g. Data Engineering, Game Development, Distributed Systems)?",
      answer:
        "Every tech domain requires nuanced positioning. Our senior strategists specialize in translating complex technical achievements—such as Unity shader optimization, Spark petabyte data pipelines, low-latency microservices, or distributed architecture—into quantified metrics that modern ATS filters and hiring managers prioritize. We specifically target engineering managers who lead teams in your exact discipline.",
    },
    {
      question: "Do you handle the tedious application screening questions on portals?",
      answer:
        "Yes. Many candidates get automatically filtered out because of rushed or mismatched answers to employer screening questionnaires (e.g. notice period, relevant years of framework experience, architecture methodology). Our application coordinators craft thoughtful, calibrated responses to every custom question to ensure your submission passes directly into the hiring manager's review queue.",
    },
    {
      question: "How does the Dual-Vector Referral Strategy work without awkwardness?",
      answer:
        "Employee referrals are the single highest-converting job search channel (yielding a 5x callback rate). Our team coordinates two distinct vectors: (1) Respectfully mapping warm pathways through your extended 1st-degree connections and university alumni, and (2) Sending value-first, context-aware introductory notes to senior engineers and engineering leads at your target companies. This secures confirmed internal referral codes before jobs become saturated.",
    },
    {
      question: "How does Naukri profile optimization and FastForward rank boosting work?",
      answer:
        "Naukri's recruiter search algorithm ranks candidates based on keyword density, headline clarity, and daily profile activity freshness. Our specialists re-engineer your profile summary, headline, and skill taxonomy to position you in the top 3% search bracket. We also execute daily freshness calibrations, ensuring recruiters actively scouting your tech stack see your profile first.",
    },
    {
      question: "Are platform tool premiums, email verification credits, and InMails included?",
      answer:
        "Yes, 100% included. All costs for verified email discovery tools, recruiter search suites, and outreach infrastructure are fully absorbed by CareerPilot Partners. There are zero hidden fees, extra software subscriptions, or credit top-ups required.",
    },
    {
      question: "What is the transparent Friday Intelligence Digest?",
      answer:
        "Every Friday at 5:00 PM, you receive a comprehensive performance report and dashboard update detailing every role scouted, tailored application submitted, recruiter message sent, and interview call queued. You maintain 100% visibility and control over your search without spending a single evening doing data entry.",
    },
    {
      question: "Do you guarantee job offers or placements?",
      answer:
        "No ethical career firm guarantees employment, as final hiring and hiring committee decisions rest strictly with employers. What we guarantee is relentless, high-precision execution: optimized resume assets, verified recruiter outreach, strategic referrals, and consistent submissions that reliably generate 15–20 high-signal interview calls in 1–2 weeks.",
    },
  ] as FAQItem[],
};

