import { motion } from "motion/react";

export default function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        delay, 
        ease: [0.16, 1, 0.3, 1], // Custom sophisticated spring-like easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
