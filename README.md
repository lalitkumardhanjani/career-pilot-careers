# CareerPilot Partners ✈️

> Dedicated job-search & application concierge service for busy working professionals who don’t have time to apply, scroll job boards, or chase recruiters.

🌐 **Live Deployed Websites**:
- Primary Live Domain: **[https://careerpilot-partners.surge.sh](https://careerpilot-partners.surge.sh)**
- Mirror Domain: **[https://nextrole-career-services.surge.sh](https://nextrole-career-services.surge.sh)**

---

## 🎯 The Core Value Proposition: Built for Busy Professionals

- **Focus on Your Day Job**: 8+ hours at work leaves zero energy for tedious application portals. Our career team acts as your dedicated co-pilot.
- **Saves 15–20 Hours Every Week**: We discover high-match openings, submit agreed applications on LinkedIn & Naukri, and coordinate recruiter & employee referral outreach.
- **Never Miss Fast-Closing Roles**: Top opportunities close within 48–72 hours. We maintain a continuous daily application cadence so you never miss out by waiting for the weekend.
- **Transparent Friday Digest**: All you need is ~30 minutes a week to review your activity summary and prepare for interview calls.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Curated Tokens
  - Deep Navy: `#0B132B`
  - Royal Indigo: `#3E4C9A`
  - Soft Blue: `#EAF1FA`
  - Clean White: `#FFFFFF`
  - Emerald Accent: `#20A486`
- **Icons**: Lucide React
- **Typography**: Google Fonts (Plus Jakarta Sans & Inter)
- **Deployment**: Surge, Vercel, Netlify, and Cloudflare Pages ready

---

## 💻 1. Local Run Instructions

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ⚙️ 2. Single Configuration File for All Edits

All business details, pricing plans, phone, email, WhatsApp, and form endpoints are centralized in:

📍 **`src/config/siteConfig.ts`**

### Quick Reference Map

```typescript
export const siteConfig = {
  // 1. BRAND & POSITIONING
  brandName: "CareerPilot Partners",
  tagline: "Dedicated Job Search & Application Concierge for Busy Professionals",

  // 2. CONTACT INFORMATION
  contact: {
    email: "LK3560003@gmail.com",                  // Change public email
    phoneDisplay: "+91 63787 92367",              // Change displayed phone
    phoneTel: "+916378792367",                    // Change tel: link
    whatsappUrl: "https://wa.me/916378792367",    // Change WhatsApp URL
    formspreeEndpoint: "https://formspree.io/f/xyzgklqw", // Replace with your Formspree ID
  },

  // 3. PRICING PLANS
  pricing: [
    {
      id: "india",
      name: "CareerPilot India Plan",
      price: "₹10,000",                           // Change India price
      period: "per month",
      // ...
    },
    {
      id: "international",
      name: "CareerPilot International Plan",
      price: "$100",                              // Change International price
      period: "per month",
      // ...
    }
  ],
};
```

---

## 🌐 3. Free Deployment Steps

### Option A: Free Deployment via Surge (Already Live)
```bash
npm run build
powershell -Command "Copy-Item dist/index.html dist/200.html"
npx surge ./dist careerpilot-partners.surge.sh
```

### Option B: Deploy for Free to Vercel
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com).
3. Import project (Vite preset is pre-configured in `vercel.json`).
4. Click **Deploy**.

### Option C: Deploy for Free to Netlify
1. Connect repository in [Netlify](https://www.netlify.com).
2. Build command: `npm run build`, Publish directory: `dist` (pre-configured in `netlify.toml`).
3. Click **Deploy Site**.

---

## 🔒 Compliance & Legal Notice
CareerPilot Partners is an independent career concierge service. Not affiliated with LinkedIn, Naukri, Gmail, or any employer. We do not guarantee job offers, interview calls, or employment.
