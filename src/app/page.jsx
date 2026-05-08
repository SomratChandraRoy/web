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
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Premium Emotion Hero Section (No Image) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        
        {/* Animated Ambient Gradient Orbs */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <motion.div
            className="absolute top-[20%] left-[10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#B85E44]/20 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px]"
            animate={{
              x: [0, 50, -20, 0],
              y: [0, -50, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-[#D49A78]/15 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px]"
            animate={{
              x: [0, -60, 30, 0],
              y: [0, 40, -30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Subtle overlay texture/grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] opacity-80" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-playfair-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Crafting Spaces,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D49A78] to-[#B85E44]">
              Elevating Lives.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Where modern luxury meets Bangladeshi heritage
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            <Button href="/portfolio" variant="primary" className="shadow-[0_0_40px_rgba(184,94,68,0.3)] hover:shadow-[0_0_60px_rgba(184,94,68,0.5)] transition-shadow duration-500">
              View Portfolio
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
              <div className="w-1 h-2 bg-[#D49A78] rounded-full" />
            </div>
          </motion.div>
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
