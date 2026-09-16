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
    { name: "What Our Team Does", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Client Reviews", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Compare with Bots", href: "#comparison" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Glassmorphic Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B132B]/95 backdrop-blur-xl shadow-xl shadow-black/25 border-b border-white/[0.08] py-2.5 sm:py-3"
            : "bg-[#0B132B]/90 backdrop-blur-md py-3 sm:py-4 border-b border-white/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo & Name */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-xl p-1 min-w-0"
              aria-label={`${siteConfig.brandName} Home`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#3E4C9A] via-[#4F67B8] to-[#10B981] p-[1.5px] shadow-lg shadow-[#3E4C9A]/20 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#34D399] transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-tight">
                    {siteConfig.brandName}
                  </span>
                </div>
                <span className="text-slate-400 text-[10px] sm:text-[11px] font-medium tracking-wide block">
                  Professional Career Concierge
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#34D399] transition-all duration-200 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </nav>

            {/* Primary CTA button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#10B981] hover:from-[#4757af] hover:to-[#34D399] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-[#3E4C9A]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none"
                id="nav-cta-btn"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#34D399]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] py-2.5 px-3.5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3E4C9A] to-[#10B981] text-white font-bold py-3 px-4 rounded-xl shadow-lg"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


