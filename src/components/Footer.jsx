import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";

export default function Footer() {
  const addressLines = [
    site.address?.street,
    site.address?.area,
    [site.address?.city, site.address?.postalCode].filter(Boolean).join(" "),
    site.address?.country,
  ].filter(Boolean);
  const phoneHref = site.phone
    ? `tel:${site.phone.replace(/[^\d+]/g, "")}`
    : "#";

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_-22px_rgba(15,23,42,0.4)] ring-1 ring-[#B85E44]/15">
                <img
                  src={site.logo}
                  alt={`${site.name} logo`}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="font-playfair-display text-2xl font-semibold text-gray-900">
                  {site.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#B85E44]/70">
                  {site.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              {site.shortDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-gray-600 hover:text-[#B85E44] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-600 hover:text-[#B85E44] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 hover:text-[#B85E44] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 hover:text-[#B85E44] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">
              Get in Touch
            </h4>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {site.address?.serviceArea && (
                <p className="pt-2 text-xs italic text-gray-500">
                  Service Area: {site.address.serviceArea}
                </p>
              )}
              <p className="pt-2">
                <a
                  href={phoneHref}
                  className="hover:text-[#B85E44] transition-colors">
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-[#B85E44] transition-colors">
                  {site.email}
                </a>
              </p>
            </address>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#B85E44] transition-colors"
                aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#B85E44] transition-colors"
                aria-label="Facebook">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.326 24h11.49v-9.294H9.691V11.09h3.125V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.616h-3.12V24h6.119C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.676 0" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#B85E44] transition-colors"
                aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a
                href={site.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#B85E44] transition-colors"
                aria-label="Pinterest">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
