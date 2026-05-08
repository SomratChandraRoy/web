import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { site } from "@/data/site";
import { buildMeta } from "@/utils/seo";

export const meta = () =>
  buildMeta({
    title: "Contact",
    description: `Get in touch with ${site.name} to discuss your interior or building design project in Bangladesh.`,
  });

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const addressLines = [
    site.address?.street,
    site.address?.area,
    [site.address?.city, site.address?.postalCode].filter(Boolean).join(" "),
    site.address?.country,
  ].filter(Boolean);
  const phoneHref = site.phone
    ? `tel:${site.phone.replace(/[^\d+]/g, "")}`
    : "#";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", projectType: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      <Section background="white" spacing="large">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="font-playfair-display text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're planning a full renovation or exploring
              possibilities, we'd love to hear about your vision. Reach out to
              schedule a consultation.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <FadeIn delay={0.1}>
            <div>
              <h2 className="font-playfair-display text-3xl font-semibold text-gray-900 mb-10">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={24}
                    className="text-[#B85E44] flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      Our Studio
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {addressLines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    {site.address?.serviceArea && (
                      <>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">
                          Service Area
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {site.address.serviceArea}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    size={24}
                    className="text-[#B85E44] flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      Phone
                    </h3>
                    <a
                      href={phoneHref}
                      className="text-gray-600 hover:text-[#B85E44] transition-colors">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    size={24}
                    className="text-[#B85E44] flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-gray-600 hover:text-[#B85E44] transition-colors">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle
                    size={24}
                    className="text-[#B85E44] flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      Facebook
                    </h3>
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#B85E44] transition-colors">
                      {site.social.facebook.replace("https://", "")}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-8 bg-[#FAFAFA] border border-gray-200 rounded-md">
                <MessageCircle
                  size={32}
                  className="text-[#B85E44] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-playfair-display text-xl font-semibold text-gray-900 mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="text-gray-600 mb-6">
                  Chat with us directly for quick questions or to schedule a
                  consultation.
                </p>
                <a
                  href={site.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-[#20BD5A] transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div>
              <h2 className="font-playfair-display text-3xl font-semibold text-gray-900 mb-10">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#B85E44] outline-none py-3 text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#B85E44] outline-none py-3 text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-semibold text-gray-900 mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#B85E44] outline-none py-3 text-gray-900 transition-colors appearance-none cursor-pointer">
                    <option value="">Select a type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Custom Furniture">Custom Furniture</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 mb-3">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-transparent border-b-2 border-gray-200 focus:border-[#B85E44] outline-none py-3 text-gray-900 transition-colors resize-none"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-800 text-sm">
                    Thank you! We'll be in touch shortly.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-800 text-sm">
                    Something went wrong. Please try again or contact us
                    directly.
                  </div>
                )}

                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
