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
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export const siteConfig = {
  brandName: "CareerPilot Partners",
  tagline: "Dedicated Job Search & Application Concierge for Busy Professionals",
  hero: {
    badge: "Built for Busy Working Professionals & Active Job Seekers",
    headline: "Focus on Your Work. We’ll Pilot Your Next Career Move.",
    subheadline:
      "Working long hours leaves zero time to browse job boards, tailor resumes, and submit dozens of applications every week. Our career team acts as your dedicated co-pilot—discovering high-match opportunities, submitting agreed applications on LinkedIn & Naukri, and coordinating recruiter outreach so you never miss an opportunity.",
    trustStatement:
      "Save 15+ hours/week • Candidate-controlled onboarding • Clear weekly reporting",
  },
  contact: {
    email: "LK3560003@gmail.com",
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
      "Career-support services do not guarantee interviews, job offers, employment, recruiter responses, or referral outcomes. Results depend on the candidate profile, role fit, job market, employer decisions, and other factors outside our control.",
    platformPremiumNote:
      "Platform-premium support is available where applicable, subject to plan eligibility, regional availability, and platform terms.",
    applicationPhilosophy:
      "Every application is guided by the target roles, locations, experience level, preferences, and exclusions agreed during onboarding. We focus on relevance and quality—not random volume.",
    howItWorksNote:
      "Every job search is different. We focus on consistent, relevant work for busy professionals—not unrealistic guarantees.",
  },

  busyProfessionalMetrics: [
    {
      metric: "15–20 hrs",
      label: "Saved Every Week",
      detail: "No more spending exhausted evenings and weekends scrolling job boards and filling repetitive portal forms.",
    },
    {
      metric: "100%",
      label: "Relevance Filtered",
      detail: "Applications and outreach are strictly aligned with your target seniority, salary expectations, and preferred locations.",
    },
    {
      metric: "2x – 3x",
      label: "Consistent Cadence",
      detail: "While you handle meetings and deliverables, our team maintains continuous application and networking momentum.",
    },
    {
      metric: "30 mins",
      label: "Weekly Review Time",
      detail: "All you need is a quick 30-minute review of your Friday digest to review progress and prepare for callbacks.",
    },
  ],

  problemCards: [
    {
      title: "Zero Time After a 9-to-6 Day",
      description:
        "After a demanding workday, spending 2–3 hours finding openings and filling out application forms leads to rapid burnout and dropped consistency.",
      icon: "Clock",
      badge: "Time Exhaustion",
    },
    {
      title: "Missed High-Match Openings",
      description:
        "Top positions fill up within 48–72 hours. If you only search on weekends, the best employer application windows are already closed.",
      icon: "SearchX",
      badge: "Window Closed",
    },
    {
      title: "Silent Portals & Cold Rejections",
      description:
        "Standard portal applications rarely get seen without recruiter and referral outreach. Our team bridges that gap with personalized messaging.",
      icon: "EyeOff",
      badge: "Recruiter Gap",
    },
    {
      title: "Job-Search Fatigue & Stagnation",
      description:
        "Without structured tracking, job seekers lose track of where they applied, who they messaged, and why their profile is stalling.",
      icon: "BarChart3",
      badge: "Zero Momentum",
    },
  ],

  services: [
    {
      id: "resume-review",
      letter: "A",
      title: "Resume & Profile Review",
      description:
        "Our career team reviews your resume, experience, achievements, and target role. You receive practical recommendations to make your profile clearer, stronger, and more relevant.",
      icon: "FileText",
      tag: "Foundation",
    },
    {
      id: "search-strategy",
      letter: "B",
      title: "Personalized Job-Search Strategy",
      description:
        "We define target roles, preferred locations, relevant skills, experience range, salary expectations, and companies you want to prioritize or avoid.",
      icon: "Compass",
      tag: "Targeting",
    },
    {
      id: "naukri-support",
      letter: "C",
      title: "Naukri Application Support",
      description:
        "We organize relevant Naukri opportunities and support application activity according to your selected criteria, while maintaining a clear application record.",
      icon: "CheckSquare",
      tag: "Applications",
    },
    {
      id: "linkedin-support",
      letter: "D",
      title: "LinkedIn Job Applications & Network Support",
      description:
        "We identify relevant LinkedIn opportunities based on your target role, location, experience, and preferences. Our career-support team submits agreed relevant applications, tracks application activity, and supports outreach to employees, referral contacts, and recruiters connected with target companies.",
      icon: "Send",
      tag: "Applications & Network",
    },
    {
      id: "outreach-support",
      letter: "E",
      title: "Recruiter, Referral & Email Outreach",
      description:
        "We prepare focused outreach for relevant hiring contacts, employees, and recruiters, using messaging aligned with your profile and target role.",
      icon: "MailCheck",
      tag: "Networking",
    },
    {
      id: "tracking-insights",
      letter: "F",
      title: "Activity Tracking & Insights",
      description:
        "We keep your job-search activity organized so you understand which roles were targeted, which outreach was completed, and what deserves your attention next.",
      icon: "LineChart",
      tag: "Accountability",
    },
  ] as ServiceItem[],

  howItWorksSteps: [
    {
      step: "01",
      title: "Career Consultation",
      description:
        "We understand your current profile, career goal, preferred locations, expected salary, notice period, target roles, and job-search priorities.",
      badge: "Discovery",
    },
    {
      step: "02",
      title: "Resume & Profile Alignment",
      description:
        "Our experts review your resume and profile positioning, then recommend improvements before focused outreach begins.",
      badge: "Optimization",
    },
    {
      step: "03",
      title: "Search Setup & Targeting",
      description:
        "We define your role keywords, location preferences, relevant industries, experience fit, and companies to prioritize or avoid.",
      badge: "Targeting",
    },
    {
      step: "04",
      title: "Applications & Outreach",
      description:
        "We manage agreed job-search activities across relevant platforms: LinkedIn job applications, Naukri application support, recruiter outreach, referral outreach, and professional email outreach. Activity is tracked so you have a clear record of progress.",
      badge: "Active Execution",
    },
    {
      step: "05",
      title: "Weekly Report & Improvement Plan",
      description:
        "You receive a clear activity summary, response insights, and recommendations for the next week.",
      badge: "Friday Digest",
    },
  ] as ProcessStep[],

  weeklySummaryPreview: {
    title: "Illustrative Weekly Activity Summary",
    note: "You are never left guessing. Your weekly update explains the activity completed, what is progressing, and what can be improved.",
    metrics: [
      { label: "Roles & Locations Targeted", value: "Senior Backend / Tech Lead • Bengaluru, Hyderabad & Remote" },
      { label: "Opportunities Identified", value: "38 Verified Openings Curated" },
      { label: "Applications Supported", value: "Targeted High-Fit Submissions Logged" },
      { label: "LinkedIn Applications Submitted", value: "Agreed High-Fit Positions Completed" },
      { label: "Naukri Application Activity", value: "Verified Openings Addressed On Your Behalf" },
      { label: "Recruiter Outreach Activity", value: "Hiring Manager & Talent Lead Notes Delivered" },
      { label: "Referral Outreach Activity", value: "Alumni & Internal Connection Requests" },
      { label: "Professional Email Outreach Activity", value: "Direct Messages to Department Decision Makers" },
      { label: "Current Application Statuses", value: "Under Review • Recruiter Screening • Initial Chat" },
      { label: "Companies to Watch", value: "Tier-1 Product Firms & High-Growth Startups" },
      { label: "Candidate Profile Recommendations", value: "Highlighted Distributed Systems & Cloud Metrics" },
      { label: "Next-Week Focus Areas", value: "Expand Targeting into FinTech & Enterprise Platforms" },
    ],
  },

  credibilityPillars: [
    {
      title: "Expert Profile Review",
      description:
        "Position your experience more clearly before outreach begins, ensuring strong resume-to-job relevance.",
      icon: "FileCheck",
    },
    {
      title: "Focused, Relevant Activity",
      description:
        "Prioritize roles and companies strictly aligned with your salary, domain, and career seniority goals.",
      icon: "Target",
    },
    {
      title: "Multiple Visibility Channels",
      description:
        "Applications, recruiter outreach, referral outreach, and professional email support work cohesively together.",
      icon: "Layers",
    },
    {
      title: "Transparent Weekly Updates",
      description:
        "Understand your progress, review every action item completed, and make informed strategic improvements.",
      icon: "BarChart4",
    },
  ],

  privacyPrinciples: [
    {
      title: "Targeted Data Collection Only",
      description: "We collect only the details needed to support your agreed job-search plan.",
    },
    {
      title: "No In-Form Password Requests",
      description: "We never ask for passwords through the website inquiry form.",
    },
    {
      title: "Explicit Consent Prior to Access",
      description: "Account access, where required, is discussed only after consultation and with your consent.",
    },
    {
      title: "Dedicated Email Recommendation",
      description: "You may choose to use a dedicated job-search email address for career communication.",
    },
    {
      title: "Strict Professional Confidentiality",
      description: "Your profile details, resume, application activity, and communication history are treated as confidential.",
    },
    {
      title: "Clear Control & Cancellation",
      description: "You can ask questions about access and stop the service according to the agreed process.",
    },
  ],

  pricing: [
    {
      id: "india",
      name: "CareerPilot India Plan",
      price: "₹10,000",
      period: "per month",
      currency: "INR",
      bestFor: "Working professionals seeking structured, done-for-you application support in India.",
      badge: "India Roles",
      features: [
        "Career consultation and target-role strategy",
        "Resume and profile recommendations",
        "Relevant LinkedIn application support",
        "Relevant Naukri application support",
        "LinkedIn opportunity discovery and tracking",
        "Recruiter and referral outreach support",
        "Professional email outreach support",
        "Activity tracking and structured status logging",
        "Weekly progress update and insights report",
        "Premium-platform support where applicable*",
      ],
      disclaimer:
        "Career-support services do not guarantee interviews, job offers, employment, recruiter responses, or referral outcomes. Results depend on the candidate profile, role fit, job market, employer decisions, and other factors outside our control.",
    },
    {
      id: "international",
      name: "CareerPilot International Plan",
      price: "$100",
      period: "per month",
      currency: "USD",
      bestFor: "Busy professionals seeking focused, hands-off job-search support for US & global roles.",
      badge: "US & Global Roles",
      features: [
        "Career consultation and target-role strategy",
        "Resume and profile recommendations",
        "Relevant LinkedIn application support",
        "Relevant Naukri application support",
        "LinkedIn opportunity discovery and tracking",
        "Recruiter and referral outreach support",
        "Professional email outreach support",
        "Activity tracking and structured status logging",
        "Weekly progress update and insights report",
        "Premium-platform support where applicable*",
      ],
      disclaimer:
        "Career-support services do not guarantee interviews, job offers, employment, recruiter responses, or referral outcomes. Results depend on the candidate profile, role fit, job market, employer decisions, and other factors outside our control.",
    },
  ] as PricingPlan[],

  faqs: [
    {
      question: "Do you guarantee interview calls or a job offer?",
      answer:
        "No. We provide structured job-search support, expert review, relevant application activity, and outreach support. Interview and hiring decisions always remain with employers.",
    },
    {
      question: "Who is CareerPilot Partners built for?",
      answer:
        "CareerPilot Partners is designed specifically for busy working professionals who are already in demanding jobs and don't have the 15–20 hours a week required to scroll job boards, customize resumes, and submit dozens of applications. Our team manages the heavy lifting for you.",
    },
    {
      question: "What do you review before starting?",
      answer:
        "We review your resume, experience, target role, skills, locations, job preferences, and profile positioning during our initial consultation.",
    },
    {
      question: "What job platforms do you support?",
      answer:
        "Our workflow supports relevant LinkedIn job applications, Naukri application activity, LinkedIn opportunity discovery, recruiter and referral outreach, and professional email outreach where relevant.",
    },
    {
      question: "Will I receive updates?",
      answer:
        "Yes. You receive weekly activity summaries every Friday detailing completed applications, outreach activity, response insights, and recommended next steps.",
    },
    {
      question: "Do I need to share credentials in the inquiry form?",
      answer:
        "No. The initial consultation only needs your contact details and career goals. Any access requirements are discussed separately and only with your consent.",
    },
    {
      question: "Are you affiliated with LinkedIn or Naukri?",
      answer:
        "No. CareerPilot Partners is an independent career concierge service and is not affiliated with LinkedIn, Naukri, or any hiring platform.",
    },
  ] as FAQItem[],
};
