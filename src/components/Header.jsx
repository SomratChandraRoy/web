import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const baseLinkClass =
    "relative text-[12px] uppercase tracking-[0.18em] font-semibold transition-all duration-300";
  const underlineClass =
    "after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[#B85E44] after:to-[#D49A78] after:origin-center after:scale-x-0 after:transition-transform after:duration-300";

  const isActive = (href) => {
    if (typeof window === "undefined") return false;
    if (href === "/") return window.location.pathname === "/";
    return window.location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? "bg-white/90 border-b border-white/70 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.6)]"
          : "bg-white/60 border-b border-transparent"
      }`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B85E44]/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.6)] ring-1 ring-[#B85E44]/20">
              <img
                src={site.logo}
                alt={`${site.name} logo`}
                className="h-7 w-7 object-contain"
                loading="eager"
                decoding="async"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-playfair-display text-lg font-semibold tracking-tight text-gray-900">
                {site.name}
              </span>
              <span className="hidden lg:block text-[10px] uppercase tracking-[0.28em] text-[#B85E44]/70">
                {site.tagline}
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-7 rounded-full bg-white/85 px-6 py-3 shadow-[0_18px_45px_-36px_rgba(15,23,42,0.45)] ring-1 ring-black/5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${baseLinkClass} ${underlineClass} ${
                    isActive(link.href)
                      ? "text-[#B85E44] after:scale-x-100"
                      : "text-slate-700/80 hover:text-slate-900 hover:after:scale-x-100"
                  }`}>
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="/contact"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#B85E44] via-[#C67A55] to-[#D49A78] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_22px_50px_-32px_rgba(184,94,68,0.8)] ring-1 ring-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-34px_rgba(184,94,68,0.9)]">
              Schedule Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900"
            aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/60 bg-white/95 backdrop-blur-xl shadow-[0_24px_60px_-40px_rgba(15,23,42,0.6)]">
            <div className="px-6 py-6 space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm uppercase tracking-[0.2em] font-semibold transition-colors ${
                    isActive(link.href)
                      ? "text-[#B85E44]"
                      : "text-slate-700 hover:text-slate-900"
                  }`}>
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-full bg-gradient-to-r from-[#B85E44] via-[#C67A55] to-[#D49A78] text-white px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] shadow-[0_18px_40px_-26px_rgba(184,94,68,0.9)] transition-all">
                Schedule Consultation
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
