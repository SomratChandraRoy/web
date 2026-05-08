import { useState } from "react";
import { Heart, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";
import { site } from "@/data/site";
import { buildMeta } from "@/utils/seo";

export const meta = () =>
  buildMeta({
    title: "About Us",
    description: `${site.name} is a Dhaka-based studio delivering residential, commercial, and hospitality design with a focus on craftsmanship and modern Bangladeshi heritage.`,
  });

export default function AboutPage() {
  const [hoveredTeamMember, setHoveredTeamMember] = useState(null);

  const team = [
    {
      name: "Saira Ahmed",
      role: "Founder & Principal Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90",
    },
    {
      name: "Rafiq Hossain",
      role: "Senior Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
    },
    {
      name: "Nadia Khan",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=90",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Sustainability",
      description:
        "We prioritize locally sourced materials, work with ethical artisans, and design for longevity—creating spaces that honor both people and planet.",
    },
    {
      icon: Award,
      title: "Luxury",
      description:
        "Uncompromising quality in every detail—from hand-selected marble to precision joinery. We believe true luxury is timeless, not trendy.",
    },
    {
      icon: Users,
      title: "Functionality",
      description:
        "Beautiful spaces must also work beautifully. We design with a deep understanding of how people live, work, and move through their environments.",
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
              Designing with Purpose
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {site.name} was founded on the belief that great design is both an
              art and a science—a careful balance of aesthetics, functionality,
              and the intangible qualities that make a space feel like home.
            </p>
          </div>
        </FadeIn>

        {/* Story Image */}
        <FadeIn delay={0.2}>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100 rounded-md mb-20">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90"
              alt="Our studio"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        {/* The Story */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Founded in 2018 by Saira Ahmed, {site.name} began as a small
              studio in Gulshan with a singular mission: to create interiors
              that honor Bangladesh's rich craft traditions while embracing
              contemporary design principles.
            </p>
            <p>
              What started as residential renovations for friends and family
              quickly grew into a full-service design firm. Today, we work with
              discerning clients across residential, commercial, and hospitality
              sectors—always with the same commitment to quality, craftsmanship,
              and thoughtful design.
            </p>
            <p>
              Every project is a collaboration. We listen deeply, ask questions,
              and translate your vision into spaces that are as functional as
              they are beautiful. Our work has been featured in local and
              international design publications, but our proudest achievement
              remains the relationships we build with our clients.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Team */}
      <Section background="muted" spacing="large">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A passionate group of designers, architects, and creative thinkers
              united by a love for great design.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredTeamMember(member.name)}
                onMouseLeave={() => setHoveredTeamMember(null)}>
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      filter:
                        hoveredTeamMember === member.name
                          ? "grayscale(0%) sepia(20%) saturate(150%) hue-rotate(340deg)"
                          : "grayscale(100%)",
                    }}
                  />
                </div>
                <h3 className="font-playfair-display text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Design Values */}
      <Section background="white" spacing="large">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every project, every decision, and every
              detail.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Icon
                      size={40}
                      className="text-[#B85E44]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-playfair-display text-2xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
