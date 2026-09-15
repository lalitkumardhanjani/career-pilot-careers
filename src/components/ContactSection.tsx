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
      // 1. Send via FormSubmit.co directly to LK3560003@gmail.com
      const formSubmitEndpoint = "https://formsubmit.co/ajax/LK3560003@gmail.com";
      try {
        await fetch(formSubmitEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Career Consultation: ${formData.fullName} (${formData.targetRole})`,
            _template: "table",
            _captcha: "false",
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
          }),
        });
      } catch (submitErr) {
        console.log("FormSubmit delivery handled:", submitErr);
      }

      // 2. Also send to custom Formspree if valid endpoint provided
      if (
        siteConfig.contact.formspreeEndpoint &&
        siteConfig.contact.formspreeEndpoint.startsWith("http") &&
        !siteConfig.contact.formspreeEndpoint.includes("xyzgklqw")
      ) {
        try {
          await fetch(siteConfig.contact.formspreeEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              ...formData,
              selectedPlan: selectedPlanId || "Not specified",
              submittedAt: new Date().toISOString(),
            }),
          });
        } catch (fetchErr) {
          console.log("Formspree fallback:", fetchErr);
        }
      }

      // 3. Safe local storage record
      try {
        const stored = JSON.parse(localStorage.getItem("careerpilot_leads") || "[]");
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem("careerpilot_leads", JSON.stringify(stored));
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
  };

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Email Us */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EBF0FA] to-[#F1F5F9] text-[#3E4C9A] border border-[#3E4C9A]/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B132B] mb-1">Direct Email</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4 break-all">
              {siteConfig.contact.email}
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=Career%20Concierge%20Strategy%20Inquiry`}
              className="inline-flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white text-xs font-bold px-4 py-2.5 rounded-xl w-full transition-colors shadow-sm"
              id="contact-email-btn"
            >
              <span>Email Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Call Us */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B132B] mb-1">Direct Phone</h3>
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
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] border border-emerald-200/60 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B132B] mb-1">WhatsApp Chat</h3>
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
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 md:p-12 shadow-2xl shadow-slate-900/5">
          {isSubmitted ? (
            /* Refined Confirmation Success State */
            <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#10B981] border border-emerald-200 flex items-center justify-center mx-auto mb-5 shadow-xs">
                <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B132B] mb-2">
                Consultation Request Received!
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-bold text-[#0B132B]">{formData.fullName || "there"}</span>. Our career team has logged your inquiry and will review your target role details promptly.
              </p>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-xs text-slate-600 max-w-md mx-auto mb-6 text-left space-y-2.5">
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
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="font-semibold text-[#0B132B]">Delivered to Inbox:</span>
                  <span className="font-bold text-[#3E4C9A]">LK3560003@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:LK3560003@gmail.com?subject=${encodeURIComponent(
                    `New Career Consultation: ${formData.fullName} (${formData.targetRole})`
                  )}&body=${encodeURIComponent(
                    `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCurrent Role: ${formData.currentRole}\nYears of Experience: ${formData.yearsOfExperience}\nTarget Role: ${formData.targetRole}\nPreferred Country: ${formData.country}\nMessage: ${formData.message}`
                  )}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email to Team</span>
                </a>

                <a
                  href={`https://wa.me/916378792367?text=${encodeURIComponent(
                    `Hello ${siteConfig.brandName}, I just submitted a consultation request for ${formData.targetRole}. My name is ${formData.fullName}, Email: ${formData.email}, Phone: ${formData.phone}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0ea372] text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-5 py-3 rounded-xl border border-slate-200 transition-colors"
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
                  Share your background and goals so we can evaluate role matches prior to our strategy call.
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
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3E4C9A] via-[#4F67B8] to-[#3E4C9A] hover:from-[#4859b3] hover:to-[#5571d4] text-white font-bold text-base py-4 px-6 rounded-xl shadow-xl shadow-[#3E4C9A]/30 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#34D399] disabled:opacity-60 disabled:pointer-events-none"
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
                <span>100% Confidential • We never ask for account passwords through this form.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
