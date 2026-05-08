import { useState } from "react";

export default function ProjectCard({ project, className = "" }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <a
      href={`/portfolio/${project.id}`}
      className={`group block relative overflow-hidden ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={project.heroImage}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-playfair-display text-2xl font-semibold text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.title}
          </h3>
          <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            {project.location}
          </p>
          <div className="w-12 h-0.5 bg-[#B85E44] mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-200" />
        </div>
      </div>
    </a>
  );
}
