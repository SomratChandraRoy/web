import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Home as HomeIcon, Briefcase, Sofa, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { site } from "@/data/site";
import { buildMeta } from "@/utils/seo";

export const meta = () =>
  buildMeta({
    title: site.tagline,
    description: site.description,
    image: site.ogImage,
  });

export default function HomePage() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image with Ken Burns Effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: heroImageLoaded ? 1.1 : 1 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80&fm=webp"
            alt="Luxury interior design"
            fetchPriority="high"
            decoding="async"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              heroImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setHeroImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-playfair-display text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tight leading-tight">
              Crafting Spaces,
              <br />
              Elevating Lives.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Where modern luxury meets Bangladeshi heritage
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Button href="/portfolio" variant="primary">
              View Portfolio
            </Button>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Teaser */}
      <Section background="white" spacing="large">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-gray-900 mb-8 tracking-tight leading-tight">
              Design is not just what it looks like.
              <br />
              Design is how it feels.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that every space tells a story. Our approach is rooted
              in understanding how people live, work, and connect. By blending
              contemporary design principles with the rich textures and
              craftsmanship traditions of Bangladesh, we create interiors that
              are not only visually stunning but emotionally resonant. Each
              project is a careful balance of form, function, and the
              intangible—the way light falls across a room, the warmth of
              natural materials, the sense of calm when you step inside.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Featured Projects */}
      <Section background="muted" spacing="large">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-gray-600">
              A curated selection of our most transformative projects
            </p>
          </div>
        </FadeIn>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard
                project={project}
                className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-16">
            <Button href="/portfolio" variant="outline">
              View All Projects
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Services Overview */}
      <Section background="white" spacing="large">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="font-playfair-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Comprehensive design solutions for discerning clients
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <FadeIn delay={0.1}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <HomeIcon
                  size={40}
                  className="text-[#B85E44]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-playfair-display text-2xl font-semibold text-gray-900 mb-4">
                Residential Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From intimate apartments to expansive villas, we create homes
                that reflect your unique lifestyle and aspirations.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Briefcase
                  size={40}
                  className="text-[#B85E44]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-playfair-display text-2xl font-semibold text-gray-900 mb-4">
                Commercial Interiors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Workspaces that inspire productivity, foster collaboration, and
                embody your brand's values.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Sofa size={40} className="text-[#B85E44]" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair-display text-2xl font-semibold text-gray-900 mb-4">
                Custom Furniture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bespoke pieces crafted by skilled artisans, designed to fit your
                space perfectly and last generations.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-16">
            <Button href="/services" variant="outline">
              Learn More
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonial */}
      <Section background="muted" spacing="large">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <Quote
              size={48}
              className="text-[#B85E44] mx-auto mb-8"
              strokeWidth={1.5}
            />
            <blockquote className="font-playfair-display text-3xl md:text-4xl font-normal italic text-gray-900 mb-8 leading-relaxed">
              "They didn't just design our home—they understood how we wanted to
              live in it. Every morning, I wake up in a space that feels like a
              sanctuary. The attention to detail, the quality of materials, and
              the way light moves through the rooms is simply extraordinary."
            </blockquote>
            <cite className="not-italic">
              <p className="text-base font-semibold text-gray-900">
                Anika Rahman
              </p>
              <p className="text-sm text-gray-600">Modern Banani Residence</p>
            </cite>
          </div>
        </FadeIn>
      </Section>

      <Footer />
    </div>
  );
}
