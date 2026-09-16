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
  tagline: "Your Personal Career Team • We Find the Jobs, Polish Your Resume, Message Recruiters & Apply for You",
  oneLineVision:
    "You work hard at your daily job. Our dedicated team searches for verified openings every morning, rewrites your resume, reaches out to hiring managers, and secures employee referrals so you can land high-impact interviews without the stress.",
  hero: {
    badge: "Real Career Specialists Working For You • 100% Done-For-You",
    headline: "Focus on Your Busy Job. Our Dedicated Team Handles Your Next Move.",
    subheadline:
      "Working 10-hour days leaves no energy to browse job boards, rewrite resumes, and chase recruiters after work. Our dedicated team does the heavy lifting for you—we polish your resume, find matching high-paying openings, get you employee referrals, reach out directly to recruiters, and submit your applications. You just show up for the interviews.",
    trustStatement:
      "Save 15–20 hours every week • 100% private & current-employer safe • All tools & platform fees included",
    pipelineWorkflow: [
      { step: "01", name: "Polish", desc: "Line-by-line resume rewrite so you pass screening filters and impress managers" },
      { step: "02", name: "Find", desc: "Daily search across LinkedIn, Naukri & company websites matching your target salary" },
      { step: "03", name: "Connect", desc: "Friendly, direct messages sent to hiring leads and recruiters at target firms" },
      { step: "04", name: "Refer", desc: "Direct employee referrals from alumni and company insiders so your resume skips the pile" },
      { step: "05", name: "Apply", desc: "Tailored applications submitted with thoughtful answers to company screening questions" },
      { step: "06", name: "Report", desc: "A simple, clear update every Friday showing everything done and interviews queued" },
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
      "All necessary platform tools, email verification credits, recruiter search suites, and outreach fees are 100% covered and managed by our team.",
    applicationPhilosophy:
      "Every application and message strictly follows your agreed target roles, salary expectations, preferred cities, and company rules. We focus on high relevance and personalized quality—never blind spam or robotic bulk clicks.",
    howItWorksNote:
      "Every job search is unique. We focus on consistent, daily execution by real career specialists for busy working professionals.",
  },

  busyProfessionalMetrics: [
    {
      metric: "15–20 hrs",
      label: "Saved Every Week",
      detail: "Spend your evenings relaxing with family and recharging, not filling out repetitive online job forms.",
    },
    {
      metric: "96%+",
      label: "Resume Match Score",
      detail: "Rewritten by real career specialists to highlight your achievements and match company job descriptions.",
    },
    {
      metric: "3.4x",
      label: "More Recruiter Replies",
      detail: "Personalized, warm notes to hiring managers get answered far more often than cold portal submissions.",
    },
    {
      metric: "100%",
      label: "All Tools Included",
      detail: "All paid email finders, recruiter search suites, and application tools are completely covered by us.",
    },
  ],

  problemCards: [
    {
      title: "Exhausted After a 9-to-6 Workday",
      description:
        "After working 9 to 10 hours, spending 2 to 3 hours searching job portals and filling repetitive forms burns you out.",
      icon: "Clock",
      badge: "Time Exhaustion",
    },
    {
      title: "Applications Disappearing into a Black Hole",
      description:
        "Submitting standard resumes through portals without referrals or direct recruiter emails rarely gets a callback.",
      icon: "EyeOff",
      badge: "Zero Responses",
    },
    {
      title: "Great Jobs Fill Up in 48 Hours",
      description:
        "If you only look for jobs on weekends, the best openings posted during the week are already closed or flooded.",
      icon: "SearchX",
      badge: "Fast-Closing Roles",
    },
    {
      title: "Cold Messaging Feels Awkward",
      description:
        "Reaching out to strangers on LinkedIn can feel uncomfortable. Our team writes thoughtful, respectful introductions for you.",
      icon: "MessageSquareOff",
      badge: "Networking Stress",
    },
  ],

  services: [
    {
      id: "resume-reengineering",
      letter: "01",
      title: "Resume Rewrite & ATS Optimization",
      description:
        "Our career specialists personally review and rewrite your resume. We transform your daily tasks into clear, quantified achievements and make sure your resume easily passes applicant tracking filters.",
      icon: "FileText",
      tag: "Step 1 • Resume & ATS",
      impactMetric: "ATS Score: 62% → 96%",
      keyFeatures: [
        "Line-by-line review by an experienced career specialist",
        "Passive tasks rewritten into clear, quantified business achievements",
        "Tailored specifically for your skills and target job roles",
      ],
    },
    {
      id: "recruiter-email",
      letter: "02",
      title: "Direct Emails to Recruiters & Hiring Managers",
      description:
        "We find verified email addresses of recruiters and engineering managers at your target companies. We send warm, personalized introductions highlighting your exact strengths and portfolio.",
      icon: "MailCheck",
      tag: "Step 2 • Direct Outreach",
      impactMetric: "3.4x More Recruiter Replies",
      keyFeatures: [
        "Verified recruiter and hiring manager emails discovered",
        "Personalized, friendly notes tailored to each specific role",
        "Polite follow-up messages managed for you automatically",
      ],
    },
    {
      id: "role-scouting",
      letter: "03",
      title: "Daily Hand-Picked Job Openings",
      description:
        "Every single morning, our team searches LinkedIn, company career pages, and job boards to find fresh roles matching your exact skills, preferred locations, and target salary.",
      icon: "Compass",
      tag: "Step 3 • Daily Job Search",
      impactMetric: "30+ Verified Openings Weekly",
      keyFeatures: [
        "Fresh daily search across corporate career pages and job boards",
        "Strictly filtered by your target salary, seniority, and location",
        "Clear reason provided for why each job is a great fit for you",
      ],
    },
    {
      id: "dual-referrals",
      letter: "04",
      title: "Direct Employee Referrals (Alumni & Insiders)",
      description:
        "Employee referrals give you a 5x higher chance of landing an interview. We politely reach out to alumni from your college and helpful insiders at your target companies to secure internal referral codes.",
      icon: "Users2",
      tag: "Step 4 • Employee Referrals",
      impactMetric: "5x Higher Interview Callback",
      keyFeatures: [
        "Warm connections with college alumni and verified company insiders",
        "Respectful, friendly outreach so you never feel awkward",
        "Skips the crowded applicant queue and lands right in front of the hiring team",
      ],
    },
    {
      id: "recruiter-networking",
      letter: "05",
      title: "Building Your Personal Recruiter Network",
      description:
        "We proactively connect with specialized headhunters and senior tech recruiters in your field before jobs are even posted publicly—putting your profile at the top of their list.",
      icon: "UserCheck",
      tag: "Step 5 • Recruiter Networking",
      impactMetric: "Dedicated Recruiter Network",
      keyFeatures: [
        "Top headhunters and tech talent partners identified in your domain",
        "Warm connection notes highlighting your experience and value",
        "Long-term relationships nurtured so opportunities come to you first",
      ],
    },
    {
      id: "naukri-acceleration",
      letter: "06",
      title: "Naukri & LinkedIn Applications & Profile Boost",
      description:
        "We optimize your Naukri and LinkedIn profile headlines and keywords so recruiters discover you first. Plus, our team submits applications with thoughtful, custom answers to employer screening questions.",
      icon: "CheckSquare",
      tag: "Step 6 • Job Applications",
      impactMetric: "Top 3% Search Visibility",
      keyFeatures: [
        "Naukri & LinkedIn headlines and summaries polished for maximum recruiter views",
        "Daily profile activity maintained to keep you at the top of recruiter searches",
        "Carefully submitted applications with customized screening answers",
      ],
    },
    {
      id: "dedicated-concierge",
      letter: "07",
      title: "Your Dedicated Career Manager & Weekly Updates",
      description:
        "You are paired with a dedicated career specialist who manages your entire job search. All tools and software fees are 100% paid by us. You receive a simple, transparent summary every Friday.",
      icon: "LineChart",
      tag: "Step 7 • Personal Manager",
      impactMetric: "100% of Tools & Fees Covered",
      keyFeatures: [
        "Dedicated career specialist assigned personally to you",
        "All outreach tools, email finders, and platform fees fully included",
        "Clear Friday progress update showing all applications, replies, and interviews",
      ],
    },
  ] as ServiceItem[],

  howItWorksSteps: [
    {
      step: "01",
      title: "Quick 30-Min Onboarding Chat",
      description:
        "We learn about your target roles, desired salary, preferred cities, notice period, and any companies you want us to avoid.",
      badge: "Step 01 • Get Started",
    },
    {
      step: "02",
      title: "We Rewrite Your Resume & Profiles",
      description:
        "Our specialists polish your resume and LinkedIn/Naukri profiles so your achievements shine and pass company screening filters.",
      badge: "Step 02 • Polish Resume",
    },
    {
      step: "03",
      title: "We Set Your Search Rules",
      description:
        "We establish your exact criteria—job titles, salary expectations, tech stacks, and company wishlists—so every application is on point.",
      badge: "Step 03 • Plan & Match",
    },
    {
      step: "04",
      title: "We Apply, Message Recruiters & Get Referrals",
      description:
        "Our team works for you every day: submitting applications, reaching out to hiring managers, and securing employee referrals.",
      badge: "Step 04 • Daily Execution",
    },
    {
      step: "05",
      title: "You Interview & Choose the Best Offer",
      description:
        "You get 15 to 20 interview calls in 1 to 2 weeks, review your Friday updates, and pick from 4 to 5 competing offer letters.",
      badge: "Step 05 • Get Hired",
    },
  ] as ProcessStep[],

  weeklySummaryPreview: {
    title: "Your Weekly Progress Dashboard • 100% Clear & Transparent",
    note: "You never have to guess what's happening. Your dedicated career manager and Friday summary give you complete visibility into every application submitted, recruiter message sent, and interview scheduled.",
    metrics: [
      { label: "Candidate Profile", value: "Senior Backend / Full Stack Engineer" },
      { label: "Target Salary", value: "₹35L – ₹55L / $140k – $200k • Bangalore, Hyderabad, Remote" },
      { label: "Resume ATS Score", value: "96% (Rewritten from baseline 62%)" },
      { label: "Hand-Picked Roles Found", value: "42 Verified Jobs Matching Criteria" },
      { label: "Recruiter Emails Sent", value: "18 Personalized Messages to Hiring Managers" },
      { label: "Employee Referrals Requested", value: "7 Warm Introductions to Insiders" },
      { label: "Employee Referrals Confirmed", value: "3 Internal Referral Codes Secured" },
      { label: "Naukri & LinkedIn Rank", value: "Top 3% Recruiter Search Visibility" },
      { label: "Applications Submitted", value: "24 High-Priority Applications Completed" },
      { label: "Interview Calls Scheduled", value: "4 Preliminary Recruiter & Tech Rounds Queued" },
      { label: "Top Companies Contacted", value: "Atlassian, Razorpay, Microsoft, Swiggy, Stripe" },
      { label: "Next Week's Focus", value: "Expand Outreach to FinTech & Product Engineering Leads" },
    ],
  },

  credibilityPillars: [
    {
      title: "Real Human Career Specialists",
      description:
        "Real career experts and researchers handle your search by hand—giving you personal, high-quality attention rather than generic bot automation.",
      icon: "Users2",
    },
    {
      title: "All Job Search Tools Included",
      description:
        "We provide all verified email search tools, recruiter databases, and application systems behind the scenes at no extra cost to you.",
      icon: "Layers",
    },
    {
      title: "Direct Employee Referrals",
      description:
        "We reach out to college alumni and helpful company insiders to secure internal referrals so your resume skips the pile.",
      icon: "Target",
    },
    {
      title: "100% Transparent Tracking",
      description:
        "Track every application, recruiter message, reply, and interview call in one clear, simple dashboard whenever you want.",
      icon: "BarChart4",
    },
  ],

  privacyPrinciples: [
    {
      title: "You're Always in Control",
      description: "You choose your target salary, location preferences, and any companies you want us to avoid.",
    },
    {
      title: "We Never Ask For Your Passwords",
      description: "Your personal accounts stay yours. We never ask for sensitive passwords.",
    },
    {
      title: "Your Current Job is 100% Safe",
      description: "We strictly blacklist your current company, sister companies, and clients so no one at your current job ever knows.",
    },
    {
      title: "Private Dedicated Job Search Email",
      description: "All recruiter messages can run through a separate professional email so your personal inbox stays clean and private.",
    },
    {
      title: "Strict Professional Privacy",
      description: "Your resume, compensation details, and job search are protected by strict confidentiality standards.",
    },
    {
      title: "Cancel Anytime with 1 Click",
      description: "No long-term contracts. You can pause, restart, or cancel your month-to-month membership whenever you want.",
    },
  ],

  cancellationPolicy: {
    title: "14-Day 100% Money-Back Opportunity Guarantee",
    summary:
      "If our dedicated career team does not deliver relevant interview opportunities matching your agreed salary, seniority, and role criteria within your first 2 weeks (14 days), your entire subscription fee will be 100% refunded to your original payment method. Zero risk, no questions asked.",
    period: "First 14 Calendar Days",
    refundType: "100% Full Money-Back Refund",
    processingTime: "Approved within 24 hours, credited back to source account in 3–5 business days",
    terms: [
      {
        heading: "14-Day Opportunity Window",
        description:
          "Starting from your completed onboarding consultation, our team polishes your resume, finds matching jobs, submits tailored applications, and reaches out to recruiters and employee referrers. If zero relevant interview opportunities are coordinated within 14 calendar days, you qualify for an immediate 100% refund.",
      },
      {
        heading: "100% Full Refund (No Hidden Fees)",
        description:
          "You receive back 100% of your initial subscription fee (₹10,000 for India Accelerator or $100 for Global Accelerator). We cover all platform costs, email finder credits, and admin expenses.",
      },
      {
        heading: "Simple & Friendly 1-Click Request",
        description:
          "To request a refund within your first 14 days, simply text your dedicated specialist on WhatsApp, email us, or click 'Request Cancellation' in your dashboard. No interrogation, no hassle.",
      },
      {
        heading: "Cancel Anytime (Month-to-Month)",
        description:
          "Beyond your first 14 days, your membership remains strictly month-to-month with no long-term contracts. You can pause or cancel at any time before your next monthly renewal.",
      },
      {
        heading: "Your Privacy is Protected Forever",
        description:
          "Even if you cancel and receive a full refund, our non-disclosure agreement and company blacklist remain 100% active and confidential forever.",
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
        "Dedicated Personal Career Specialist & Coordinator",
        "Complete Resume Rewrite & 95%+ ATS Optimization",
        "Daily Hand-Picked Job Openings across top corporate portals",
        "Personalized Emails to Hiring Managers & Recruiters",
        "Direct Employee Referrals (Alumni + Company Insiders)",
        "Naukri Profile Boost & Top 3% Recruiter Search Ranking",
        "Tailored LinkedIn & Naukri Applications with Custom Answers",
        "Proactive Outreach to Headhunters & Executive Recruiters",
        "All Email Finder Tools & Platform Fees 100% Covered",
        "Clear Friday Progress Update & Real-Time Tracking",
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
        "Dedicated Personal Career Specialist & Coordinator",
        "Complete Resume Rewrite & 95%+ ATS Optimization",
        "Daily Hand-Picked Job Openings across US & global portals",
        "Personalized Emails to Hiring Managers & Recruiters",
        "Direct Employee Referrals for US & Multinational Companies",
        "LinkedIn Profile Global Optimization & Recruiter Outreach",
        "Tailored International Job Portal Applications",
        "Proactive Outreach to Global Executive Search Recruiters",
        "All Email Finder Tools & Platform Fees 100% Covered",
        "Clear Friday Progress Update & Real-Time Tracking",
      ],
      disclaimer:
        "CareerPilot Partners provides structured career acceleration, expert review, and outreach execution. Interview calls and hiring decisions depend on candidate qualifications, employer requirements, and market conditions.",
    },
  ] as PricingPlan[],

  faqs: [
    {
      question: "What is your Cancellation and 100% Money-Back Refund Policy?",
      answer:
        "We back our service with a 14-Day (2-Week) 100% Money-Back Guarantee. If our dedicated team does not deliver relevant interview opportunities matching your agreed salary, seniority, and target role preferences within your first 14 days, your entire subscription fee (₹10,000 / $100) will be 100% refunded to your original payment method. No questions asked, no hidden deductions, and no tedious back-and-forth. Plus, our service is strictly month-to-month—you can pause or cancel at any time with a single click or a quick message to your career lead.",
    },
    {
      question: "How do you consistently generate 15–20 interview calls in just 1–2 weeks?",
      answer:
        "Instead of relying on a single slow job board or sending cold generic applications, we take action across 4 key channels at once: (1) We rewrite your resume so it easily passes company ATS filters with a 96%+ score, (2) We submit customized applications with thoughtful answers to company screening questions, (3) We send warm, personal emails directly to verified engineering directors and hiring managers, and (4) We secure direct employee referrals from alumni and company insiders. Working across all these channels creates immediate momentum, delivering 15 to 20 relevant interview calls in just 10 to 14 days.",
    },
    {
      question: "How does the team help convert interviews into 4–5 competing offer letters?",
      answer:
        "Getting multiple job offers comes down to timing. When you receive 15 to 20 interview calls in a concentrated 2-week window, our team helps you schedule your initial screenings and technical rounds in close succession. Having multiple companies interviewing you at the same time creates urgency on their end and gives you strong negotiation leverage to secure 4 to 5 competing offer letters—so you can negotiate for your best compensation, seniority, and joining terms from a position of strength.",
    },
    {
      question: "I work 10–12 hours a day and have zero free time. How much time do I need to invest?",
      answer:
        "You only need 30 to 45 minutes for our initial onboarding conversation to align on your target roles, minimum salary, tech stacks, and company blacklist. After that, your dedicated team takes care of all the day-to-day work—job research, resume tailoring, form filling, recruiter messages, and referral outreach. Your only job is showing up for the interview calls we arrange for you.",
    },
    {
      question: "Is this an automated AI bot or a real human career team?",
      answer:
        "This is a real, human-led service. While our team uses software tools behind the scenes to verify recruiter emails and scan job boards quickly, every resume edit, recruiter email, and referral message is written, reviewed, and personalized by experienced career specialists. We never use blind clicking bots that risk getting your accounts flagged.",
    },
    {
      question: "Is my current employer protected? How do you keep this 100% confidential?",
      answer:
        "Your privacy is protected under strict confidentiality terms. During onboarding, we make an explicit blacklist of your current company, subsidiaries, and client partners so they are never contacted. We never put public 'Open to Work' banners on your profile, and all recruiter correspondence can run through a private dedicated email address.",
    },
    {
      question: "What if I have a specialized tech stack (e.g. Data Engineering, Game Development, Full Stack)?",
      answer:
        "Every technical field has its own language. Our career specialists know how to translate specialized work—like Unity game development, Spark petabyte data pipelines, microservices, or React performance tuning—into clear business impact metrics that hiring managers and ATS filters love. We specifically reach out to engineering leads who manage teams in your exact domain.",
    },
    {
      question: "Do you handle the tedious application questions on company portals?",
      answer:
        "Yes, absolutely. Many applicants get disqualified because of rushed answers to custom screening questionnaires (like notice period, years of framework experience, or architecture approaches). Our team carefully writes thoughtful, accurate answers to every screening question to make sure your application moves straight to the hiring manager.",
    },
    {
      question: "How do employee referrals work without feeling awkward?",
      answer:
        "Employee referrals are the single most effective way to get an interview (giving you a 5x higher callback rate). Our team coordinates warm introductions in two ways: (1) Reaching out warmly through alumni from your college or past networks, and (2) Sending polite, respectful notes to engineers and team leads at your target companies. This gets your resume reviewed internally before hundreds of other people apply.",
    },
    {
      question: "How does Naukri profile optimization and search ranking work?",
      answer:
        "Naukri's recruiter search ranks candidate profiles based on keywords, headline clarity, and daily activity. Our specialists rewrite your profile headline, summary, and skill tags so your profile ranks in the top 3% of search results. We also keep your profile active daily, so recruiters hiring in your field see you first.",
    },
    {
      question: "Are tool fees, email verification credits, and InMails included?",
      answer:
        "Yes, 100% included. All costs for verified email discovery tools, recruiter search suites, and outreach software are fully paid for by CareerPilot Partners. You never have to pay extra software fees or buy credits.",
    },
    {
      question: "What is the Friday Progress Update?",
      answer:
        "Every Friday at 5:00 PM, you receive a clear, easy-to-read update and dashboard summary. It shows every job we found, application submitted, recruiter message sent, and interview scheduled. You get complete transparency without doing any administrative work yourself.",
    },
    {
      question: "Do you guarantee job offers or placements?",
      answer:
        "No ethical career service can guarantee a job offer, because the final hiring decision always rests with the employer. What we do guarantee is consistent, high-quality execution: a polished resume, direct recruiter outreach, employee referrals, and daily applications that reliably generate 15 to 20 interview calls in 1 to 2 weeks.",
    },
  ] as FAQItem[],
};

