import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";
import { projects, getProjectById } from "@/data/projects";
import { buildMeta } from "@/utils/seo";

export const meta = ({ params }) => {
  const project = getProjectById(params?.id);
  if (!project) {
    return buildMeta({
      title: "Project Not Found",
      description:
        "The requested project could not be found. Browse our portfolio for more work.",
    });
  }

  return buildMeta({
    title: project.title,
    description: `${project.category} project in ${project.location}. ${project.scope}.`,
    image: project.heroImage,
  });
};

export default function ProjectDetailPage({ params }) {
  const [imagesLoaded, setImagesLoaded] = useState({});
  const project = getProjectById(params.id);

  // If project not found, show a fallback (in production, redirect to 404)
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="font-playfair-display text-4xl font-semibold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link to="/portfolio" className="text-[#B85E44] hover:underline">
            Return to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get next project for "Next Project" section
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Hero Image */}
      <FadeIn>
        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-gray-100">
          <img
            src={project.heroImage}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              imagesLoaded[0] ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => handleImageLoad(0)}
          />
        </div>
      </FadeIn>

      {/* Project Meta */}
      <Section background="white" spacing="medium">
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <h1 className="font-playfair-display text-5xl md:text-6xl font-semibold text-gray-900 mb-8 tracking-tight">
              {project.title}
            </h1>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-200 py-8 mb-16">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Client
                </p>
                <p className="text-base text-gray-900">{project.client}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Location
                </p>
                <p className="text-base text-gray-900">{project.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Scope
                </p>
                <p className="text-base text-gray-900">{project.scope}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Year
                </p>
                <p className="text-base text-gray-900">{project.year}</p>
              </div>
            </div>

            {/* The Narrative */}
            <div className="max-w-3xl">
              <h2 className="font-playfair-display text-3xl font-semibold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                {project.problem}
              </p>

              <h2 className="font-playfair-display text-3xl font-semibold text-gray-900 mb-6">
                Our Solution
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Gallery */}
      <Section background="muted" spacing="large">
        <div className="max-w-7xl mx-auto space-y-8">
          {project.images.slice(1).map((image, index) => {
            const actualIndex = index + 1;
            const isEven = actualIndex % 2 === 0;

            return (
              <FadeIn key={actualIndex} delay={actualIndex * 0.1}>
                {isEven ? (
                  // 50/50 Split
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={image}
                        alt={`${project.title} detail ${actualIndex}`}
                        className={`w-full h-full object-cover transition-opacity duration-700 ${
                          imagesLoaded[actualIndex]
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(actualIndex)}
                        loading="lazy"
                      />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={project.images[actualIndex + 1] || image}
                        alt={`${project.title} detail ${actualIndex + 1}`}
                        className={`w-full h-full object-cover transition-opacity duration-700 ${
                          imagesLoaded[actualIndex + 1]
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(actualIndex + 1)}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  // Full Width
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={image}
                      alt={`${project.title} detail ${actualIndex}`}
                      className={`w-full h-full object-cover transition-opacity duration-700 ${
                        imagesLoaded[actualIndex] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(actualIndex)}
                      loading="lazy"
                    />
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Next Project */}
      <Section background="white" spacing="medium">
        <FadeIn>
          <Link
            to={`/portfolio/${nextProject.id}`}
            className="group block relative overflow-hidden">
            <div className="relative w-full h-[60vh] overflow-hidden bg-gray-100">
              <img
                src={nextProject.heroImage}
                alt={nextProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />

              {/* Centered Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <p className="text-sm font-medium uppercase tracking-widest mb-4">
                  Next Project
                </p>
                <h2 className="font-playfair-display text-4xl md:text-6xl font-semibold mb-6">
                  {nextProject.title}
                </h2>
                <div className="flex items-center gap-2 text-lg group-hover:gap-4 transition-all duration-300">
                  <span>View Project</span>
                  <ChevronRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      </Section>

      <Footer />
    </div>
  );
}
