import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";
import { site } from "@/data/site";
import { buildMeta } from "@/utils/seo";

export const meta = () =>
  buildMeta({
    title: "Portfolio",
    description: `Browse ${site.name} interior and building design projects across Bangladesh, including residential, commercial, and hospitality work.`,
  });

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      <Section background="white" spacing="large">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="font-playfair-display text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Our Work
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive showcase of our interior design projects across
              Bangladesh—from intimate residences to large-scale commercial
              spaces.
            </p>
          </div>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`text-base font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  activeFilter === category
                    ? "text-[#B85E44] border-[#B85E44]"
                    : "text-gray-500 border-transparent hover:text-gray-900"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="text-center py-20">
              <p className="text-gray-600">
                No projects found in this category.
              </p>
            </div>
          </FadeIn>
        )}
      </Section>

      <Footer />
    </div>
  );
}
