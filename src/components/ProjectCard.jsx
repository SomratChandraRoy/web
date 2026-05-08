import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

export default function ProjectCard({ project, className = "" }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Link
      to={`/portfolio/${project.id}`}
      className={`group block relative overflow-hidden ${className}`}
      ref={ref}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
        <motion.img
          style={{ y, scale: 1.15 }}
          src={project.heroImage}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

        {/* Project Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <h3 className="font-playfair-display text-3xl font-semibold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {project.title}
          </h3>
          <p className="text-sm tracking-widest uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
            {project.location}
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#B85E44] to-[#D49A78] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left delay-300" />
        </div>
      </div>
    </Link>
  );
}
