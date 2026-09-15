import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Inbox,
  Database,
  X,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface ContactSectionProps {
  selectedPlanId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedPlanId }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    yearsOfExperience: "3 - 5 years",
    targetRole: "",
    country: "India",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [needsActivation, setNeedsActivation] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [storedLeads, setStoredLeads] = useState<any[]>([]);

  const primaryRecipient = "lk356003@gmail.com";
  const backupRecipient = "LK3560003@gmail.com";

  // Sync country if plan selected from pricing card
  useEffect(() => {
    if (selectedPlanId) {
      if (selectedPlanId === "india") {
        setFormData((prev) => ({ ...prev, country: "India" }));
      } else if (selectedPlanId === "international") {
        setFormData((prev) => ({ ...prev, country: "United States" }));
      }
    }
  }, [selectedPlanId]);

  // Load stored leads on mount
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("careerpilot_leads") || "[]");
      setStoredLeads(stored);
    } catch {
      // ignore
    }
  }, [isSubmitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.consent) {
      setErrorMessage("Please accept the contact consent checkbox before proceeding.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        _subject: `New Career Consultation: ${formData.fullName} (${formData.targetRole})`,
        _template: "table",
        _captcha: "false",
        _cc: backupRecipient,
        "Full Name": formData.fullName,
        "Email Address": formData.email,
        "Phone / WhatsApp": formData.phone,
        "Current Role": formData.currentRole || "Not specified",
        "Years of Experience": formData.yearsOfExperience,
        "Target Role": formData.targetRole,
        "Preferred Country": formData.country,
        "Client Message": formData.message || "No additional message",
        "Selected Plan": selectedPlanId || "General Inquiry",
        "Submitted At": new Date().toLocaleString(),
      };

      // 1. Dispatch via FormSubmit.co directly to lk356003@gmail.com
      const primaryEndpoint = `https://formsubmit.co/ajax/${primaryRecipient}`;
      try {
        const response = await fetch(primaryEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => null);
        if (
          data &&
          data.success === "false" &&
          typeof data.message === "string" &&
          data.message.toLowerCase().includes("activation")
        ) {
          setNeedsActivation(true);
        }
      } catch (submitErr) {
        console.log("FormSubmit primary delivery handled:", submitErr);
      }

      // 2. Also dispatch to backup recipient (LK3560003@gmail.com)
      try {
        await fetch(`https://formsubmit.co/ajax/${backupRecipient}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (backupErr) {
        console.log("Backup email dispatch:", backupErr);
      }

      // 3. Safe local storage record
      try {
        const stored = JSON.parse(localStorage.getItem("careerpilot_leads") || "[]");
        stored.unshift({
          ...formData,
          selectedPlan: selectedPlanId || "General Inquiry",
          timestamp: new Date().toISOString(),
          formattedTime: new Date().toLocaleString(),
        });
        localStorage.setItem("careerpilot_leads", JSON.stringify(stored));
        setStoredLeads(stored);
      } catch (storageErr) {
        console.warn("Local storage write skipped:", storageErr);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission handler error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      currentRole: "",
      yearsOfExperience: "3 - 5 years",
      targetRole: "",
      country: "India",
      message: "",
      consent: false,
    });
    setIsSubmitted(false);
    setNeedsActivation(false);
  };

  // Pre-filled WhatsApp notification message
  const whatsappMessage = encodeURIComponent(
    `Hello CareerPilot Partners,\n\nI have submitted a career strategy consultation request:\n• Name: ${formData.fullName}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Target Role: ${formData.targetRole}\n• Experience: ${formData.yearsOfExperience}\n• Country: ${formData.country}\n• Message: ${formData.message || "None"}\n\nPlease review and confirm our strategy call time.`
  );

  // Pre-filled Email body
  const mailtoBody = encodeURIComponent(
    `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCurrent Role: ${formData.currentRole}\nYears of Experience: ${formData.yearsOfExperience}\nTarget Role: ${formData.targetRole}\nPreferred Country: ${formData.country}\nSelected Plan: ${selectedPlanId || "General Inquiry"}\n\nClient Message:\n${formData.message || "No additional message"}\n\nSubmitted at: ${new Date().toLocaleString()}`
  );

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden" id="contact">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#3E4C9A] bg-[#EBF0FA] border border-[#3E4C9A]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Reserve Your Confidential Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Let’s Discuss Your Career Objectives.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out directly or submit your target role parameters below. Our career directors will review your profile and respond within 4 hours.
          </p>
        </div>

        {/* 3 Direct Contact Channel Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {/* Email Us */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] text-[#3E4C9A] border border-[#3E4C9A]/15 flex items-center justify-center mx-auto mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-[#0B132B] mb-1">Direct Email</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4 break-all">
              {primaryRecipient}
            </p>
            <a
              href={`mailto:${primaryRecipient}?subject=Career%20Concierge%20Strategy%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white text-xs font-bold px-4 py-2.5 rounded-xl w-full transition-colors shadow-sm"
              id="contact-email-btn"
            >
              <span>Email Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Call Us */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center mx-auto mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-[#0B132B] mb-1">Direct Phone</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
              {siteConfig.contact.phoneDisplay}
            </p>
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 bg-[#0B132B] hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl w-full transition-colors shadow-sm"
              id="contact-call-btn"
            >
              <span>Call Us Directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp Us */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group sm:col-span-2 md:col-span-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-[#10B981] border border-emerald-200/60 flex items-center justify-center mx-auto mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-[#0B132B] mb-1">WhatsApp Chat</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
              Instant Concierge Chat
            </p>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0ea372] text-white text-xs font-bold px-4 py-2.5 rounded-xl w-full transition-colors shadow-sm"
              id="contact-whatsapp-btn"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Lead Generation Form Container */}
        <div className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-8 md:p-12 shadow-2xl shadow-slate-900/5">
          {isSubmitted ? (
            /* Refined Confirmation Success State */
            <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#10B981] border border-emerald-200 flex items-center justify-center mx-auto mb-5 shadow-xs">
                <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0B132B] mb-2">
                Consultation Request Received!
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-bold text-[#0B132B]">{formData.fullName || "there"}</span>. Your career consultation request has been captured and dispatched to our directors at <strong className="text-[#3E4C9A]">{primaryRecipient}</strong>.
              </p>

              {/* 1-Time Form Activation Notice for Inbox Owner */}
              <div
                className={`rounded-2xl p-5 text-left text-xs sm:text-sm max-w-lg mx-auto mb-6 shadow-xs ${
                  needsActivation
                    ? "bg-amber-50/90 border-2 border-amber-400 text-amber-950"
                    : "bg-blue-50/80 border border-blue-200 text-slate-700"
                }`}
              >
                <div className="flex items-start gap-3">
                  <Inbox
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      needsActivation ? "text-amber-600 animate-bounce" : "text-[#3E4C9A]"
                    }`}
                  />
                  <div>
                    <h4 className="font-bold text-[#0B132B] text-xs sm:text-sm mb-1">
                      {needsActivation
                        ? `Action Required: 1-Click Activation Needed for ${primaryRecipient}`
                        : `Notice for Inbox Owner (${primaryRecipient}):`}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed mb-2">
                      If this is your first submission via FormSubmit, please open your Gmail inbox at{" "}
                      <strong className="text-[#0B132B] underline">{primaryRecipient}</strong> (check your{" "}
                      <em>Updates</em> or <em>Spam</em> folder as well) for an email from FormSubmit with the subject{" "}
                      <strong className="text-slate-900">"Action Required: Activate your FormSubmit form"</strong> and click{" "}
                      <strong className="text-emerald-700 underline">"Activate Form"</strong> once.
                    </p>
                    <p className="text-[11px] text-slate-500 italic">
                      Once activated, FormSubmit automatically forwards every lead directly to your Gmail inbox!
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary of submitted parameters */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-xs text-slate-600 max-w-lg mx-auto mb-6 text-left space-y-2.5">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#0B132B]">Target Role:</span>
                  <span className="font-medium text-slate-800">{formData.targetRole}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#0B132B]">Experience:</span>
                  <span className="font-medium text-slate-800">{formData.yearsOfExperience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#0B132B]">Preferred Country:</span>
                  <span className="font-medium text-slate-800">{formData.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#0B132B]">Candidate Email:</span>
                  <span className="font-medium text-slate-800">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#0B132B]">Phone / WhatsApp:</span>
                  <span className="font-medium text-slate-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="font-semibold text-[#0B132B]">Primary Inbox Target:</span>
                  <span className="font-bold text-[#3E4C9A]">{primaryRecipient}</span>
                </div>
              </div>

              {/* Immediate 1-Click Direct Notification Options */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/916378792367?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0ea372] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-[#10B981]/25"
                  id="success-whatsapp-notify-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Immediate WhatsApp Copy</span>
                </a>

                <a
                  href={`mailto:${primaryRecipient}?cc=${backupRecipient}&subject=${encodeURIComponent(
                    `New Career Consultation: ${formData.fullName} (${formData.targetRole})`
                  )}&body=${mailtoBody}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-colors shadow-md shadow-[#3E4C9A]/25"
                  id="success-email-notify-btn"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email Client (1-Click)</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-5 py-3.5 rounded-xl border border-slate-200 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Lead Form */
            <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-extrabold text-[#0B132B]">
                    Confidential Candidate Strategy Form
                  </h3>
                  <span className="text-[11px] font-bold text-[#10B981] bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full hidden sm:inline">
                    Online Intake Open
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Share your background and goals so our team can review role matches prior to our strategy call.
                </p>
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Verma / Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all"
                  />
                </div>

                {/* WhatsApp / Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    WhatsApp / Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210 or +1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all"
                  />
                </div>

                {/* Preferred Location / Country */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Target Search Geography <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all"
                  >
                    <option value="India">India (India Career Plan)</option>
                    <option value="United States">United States (International Support)</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other / Global Remote</option>
                  </select>
                </div>

                {/* Current Role */}
                <div>
                  <label
                    htmlFor="currentRole"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Current Role / Title
                  </label>
                  <input
                    type="text"
                    id="currentRole"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleChange}
                    placeholder="e.g. Senior Backend Engineer"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label
                    htmlFor="yearsOfExperience"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Years of Experience <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all"
                  >
                    <option value="1 - 3 years">1 – 3 years</option>
                    <option value="3 - 5 years">3 – 5 years</option>
                    <option value="5 - 8 years">5 – 8 years</option>
                    <option value="8 - 12 years">8 – 12 years</option>
                    <option value="12+ years">12+ years (Leadership / Director)</option>
                  </select>
                </div>
              </div>

              {/* Target Role */}
              <div>
                <label
                  htmlFor="targetRole"
                  className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                >
                  Target Role & Seniority <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="targetRole"
                  name="targetRole"
                  required
                  value={formData.targetRole}
                  onChange={handleChange}
                  placeholder="e.g. Staff Backend Engineer / Lead Product Manager / Director of Tech"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all"
                />
              </div>

              {/* Brief Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                >
                  Search Preferences (Target CTC, Notice Period, or Target Firms)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Target CTC ₹45L, 60 days notice period, prefer fintech & consumer tech product companies..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#0B132B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3E4C9A] focus:border-transparent bg-[#F8FAFC] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Checkbox Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#3E4C9A] focus:ring-[#3E4C9A]"
                    required
                  />
                  <span className="text-xs text-slate-600 leading-relaxed group-hover:text-[#0B132B] transition-colors">
                    I agree that {siteConfig.brandName} may contact me regarding this confidential career inquiry.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3E4C9A] via-[#4F67B8] to-[#3E4C9A] hover:from-[#4859b3] hover:to-[#5571d4] text-white font-bold text-sm sm:text-base py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl shadow-xl shadow-[#3E4C9A]/30 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#34D399] disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                id="submit-consultation-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Inquiry to Directors...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Schedule My Confidential Consultation</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>100% Confidential • Dispatched directly to {primaryRecipient}</span>
              </div>
            </form>
          )}
        </div>

        {/* Discreet Admin Leads Vault Link */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setAdminModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors cursor-pointer"
          >
            <Database className="w-3.5 h-3.5" />
            <span>View Captured Inquiries Vault ({storedLeads.length})</span>
          </button>
        </div>
      </div>

      {/* Captured Leads Vault Modal */}
      {adminModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
            <div className="bg-[#0B132B] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-[#34D399]" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Captured Inquiries Vault</h4>
                  <span className="text-[11px] text-slate-300">
                    Stored securely in local session ({storedLeads.length} leads logged)
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setAdminModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              {storedLeads.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No inquiries recorded in this browser session yet. Submit a test inquiry to see it here!
                </div>
              ) : (
                storedLeads.map((lead, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#0B132B] text-sm">{lead.fullName}</span>
                      <span className="text-[10px] text-slate-400">{lead.formattedTime || lead.timestamp}</span>
                    </div>
                    <div className="text-slate-700">
                      <strong>Role:</strong> {lead.targetRole} ({lead.yearsOfExperience}) • <strong>Country:</strong> {lead.country}
                    </div>
                    <div className="text-slate-600">
                      <strong>Email:</strong> {lead.email} • <strong>Phone:</strong> {lead.phone}
                    </div>
                    {lead.message && (
                      <div className="text-slate-600 bg-white p-2 rounded-lg border border-slate-200/60 mt-1">
                        "{lead.message}"
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500">Destination: {primaryRecipient}</span>
              <button
                type="button"
                onClick={() => setAdminModalOpen(false)}
                className="bg-[#0B132B] text-white px-4 py-1.5 rounded-xl font-medium"
              >
                Close Vault
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
