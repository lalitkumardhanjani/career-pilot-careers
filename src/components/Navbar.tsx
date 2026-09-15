import React, { useState, useEffect } from "react";
import { Compass, Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Weekly Updates", href: "#weekly-updates" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B132B]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#EAF1FA]/10 py-3"
          : "bg-[#0B132B] py-4 sm:py-5 border-b border-[#EAF1FA]/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20A486] rounded-lg p-1"
            aria-label={`${siteConfig.brandName} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3E4C9A] to-[#20A486] p-[1.5px] shadow-md transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#20A486]" />
              </div>
            </div>
            <div>
              <span className="text-white font-bold text-lg sm:text-xl tracking-tight block leading-tight">
                {siteConfig.brandName}
              </span>
              <span className="text-[#EAF1FA]/70 text-[11px] font-medium tracking-wide uppercase block">
                Career Co-Pilot for Busy Professionals
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#EAF1FA]/85 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[#20A486] rounded px-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:shadow-[#3E4C9A]/25 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#20A486] active:translate-y-0"
              id="nav-cta-btn"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#EAF1FA] hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#20A486]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B]/98 border-b border-[#EAF1FA]/15 px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#EAF1FA] hover:text-white hover:bg-white/5 py-2.5 px-3 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#EAF1FA]/10 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#3E4C9A] hover:bg-[#4d5cb3] text-white font-semibold py-3 px-4 rounded-xl shadow-md"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
