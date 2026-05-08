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

      {/* Premium Light-Themed Hero Section (Matches Navbar) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAF9]">
        
        {/* Soft, Ambient Light Leaks (Architectural Lighting Effect) */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          {/* Top Left Warm Glow */}
          <motion.div
            className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] bg-[#B85E44]/10 rounded-full mix-blend-multiply filter blur-[100px] md:blur-[140px]"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, 30, -30, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          {/* Bottom Right Golden Hour Glow */}
          <motion.div
            className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-[#D49A78]/15 rounded-full mix-blend-multiply filter blur-[100px] md:blur-[140px]"
            animate={{
              x: [0, -50, 20, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Elegant Architectural Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-slate-900" />
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-slate-900" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-slate-900" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
          {/* Subtle Sub-heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-6 flex justify-center items-center gap-4"
          >
            <div className="h-px w-8 bg-[#B85E44]/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B85E44]">Interior & Architecture</span>
            <div className="h-px w-8 bg-[#B85E44]/40" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-playfair-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-slate-900 mb-8 tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Crafting Spaces,
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#B85E44] to-[#D49A78]">
                Elevating Lives.
              </span>
              <motion.span 
                className="absolute bottom-1 left-0 h-[3px] w-full bg-[#B85E44]/20 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Where modern minimalism meets the rich, textural heritage of Bangladesh. We design sanctuaries for the soul.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <Button 
              href="/portfolio" 
              variant="primary" 
              className="px-8 py-4 text-sm tracking-[0.2em] shadow-[0_20px_40px_-15px_rgba(184,94,68,0.4)] hover:shadow-[0_30px_50px_-20px_rgba(184,94,68,0.6)] hover:-translate-y-1 transition-all duration-500"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <motion.div 
          className="absolute right-[5%] top-[25%] hidden lg:block pointer-events-none opacity-60"
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-48 border border-[#B85E44]/20 rounded-full backdrop-blur-3xl mix-blend-multiply" />
        </motion.div>
        <motion.div 
          className="absolute left-[8%] bottom-[20%] hidden lg:block pointer-events-none opacity-40"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-24 h-24 border border-slate-300 rounded-full backdrop-blur-md" />
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent"
          />
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
