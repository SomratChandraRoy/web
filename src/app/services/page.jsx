import { Lightbulb, Palette, Hammer, Key } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { site } from "@/data/site";
import { buildMeta } from "@/utils/seo";

export const meta = () =>
  buildMeta({
    title: "Design Services",
    description: `Explore ${site.name} services including space planning, 3D visualization, material sourcing, turnkey execution, and custom furniture design.`,
  });

export default function ServicesPage() {
  const services = [
    {
      icon: Lightbulb,
      title: "Space Planning & 3D Visualization",
      description:
        "We begin every project with a deep understanding of how you use your space. Through detailed floor plans and photorealistic 3D renderings, we help you visualize the transformation before construction begins.",
      features: [
        "Detailed space flow analysis",
        "Functional zoning and layout optimization",
        "Photorealistic 3D renders",
        "Virtual walkthroughs",
      ],
    },
    {
      icon: Palette,
      title: "Material Selection & Sourcing",
      description:
        "Access to curated local and imported materials—from sustainably harvested teak to Italian marble. We guide you through every selection, ensuring quality, durability, and alignment with your aesthetic vision.",
      features: [
        "Curated material library",
        "Local and international sourcing",
        "Sample boards and mock-ups",
        "Sustainability-focused recommendations",
      ],
    },
    {
      icon: Hammer,
      title: "Turnkey Execution & Project Management",
      description:
        "From concept to completion, we manage every detail. Our trusted network of craftsmen, contractors, and suppliers ensures seamless execution, on time and within budget.",
      features: [
        "End-to-end project coordination",
        "Vetted contractor and artisan network",
        "Quality control and site inspections",
        "Budget and timeline management",
      ],
    },
    {
      icon: Key,
      title: "Custom Furniture Design",
      description:
        "Bespoke furniture tailored to your space and lifestyle. Collaborating with the finest woodworkers and upholsterers, we create pieces that are as functional as they are beautiful.",
      features: [
        "Fully custom designs",
        "Handcrafted by local artisans",
        "Premium materials and finishes",
        "Heirloom-quality craftsmanship",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We meet to understand your vision, needs, and budget. We discuss your lifestyle, aesthetic preferences, and functional requirements.",
    },
    {
      number: "02",
      title: "Concept Development",
      description:
        "Our team develops initial design concepts, mood boards, and 3D visualizations. We refine the direction based on your feedback.",
    },
    {
      number: "03",
      title: "Design Execution",
      description:
        "Detailed drawings, material specifications, and construction documentation are prepared. We coordinate with contractors and manage procurement.",
    },
    {
      number: "04",
      title: "Handover",
      description:
        "Final inspections, styling, and walk-through. We ensure every detail is perfect before you step into your transformed space.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Hero */}
      <Section background="white" spacing="large">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="font-playfair-display text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Comprehensive Design Services
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial consultation to final installation, we offer a full
              spectrum of interior design services tailored to your unique needs
              and vision.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                      <Icon
                        size={40}
                        className="text-[#B85E44]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h2 className="font-playfair-display text-3xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="bg-[#FAFAFA] border border-gray-200 rounded-md p-8">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="text-gray-400 text-sm mt-0.5">
                            -
                          </span>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Process Timeline */}
      <Section background="muted" spacing="large">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, collaborative approach that ensures your vision
              comes to life seamlessly.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="relative flex gap-8 pb-16 last:pb-0">
                {/* Vertical Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-px bg-gray-200" />
                )}

                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#B85E44] text-white flex items-center justify-center font-playfair-display text-xl font-semibold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-playfair-display text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" spacing="large">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Let's discuss your project. Book a consultation to explore how we
              can bring your vision to life.
            </p>
            <Button href="/contact" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Footer />
    </div>
  );
}
