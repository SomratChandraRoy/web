import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    let interval;
    const startLoader = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 10) + 1;
        });
      }, 150);
    };

    startLoader();

    const finishLoading = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = '';
      }, 800); // Wait for the progress bar to reach 100% and then fade out
    };

    if (document.readyState === "complete") {
      // If page already loaded before component mount
      setTimeout(finishLoading, 500);
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-all duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        progress === 100 ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-8 overflow-hidden">
        {/* Luxury Logo / Branding */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full shadow-[0_0_30px_rgba(184,94,68,0.3)] ring-1 ring-[#B85E44]/20">
            <img
              src={site.logo}
              alt="Logo"
              className="h-full w-full object-cover p-2 mix-blend-screen"
            />
          </div>
          <h1 className="font-playfair-display text-2xl font-semibold tracking-[0.1em] text-white/90">
            {site.name}
          </h1>
          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#B85E44]/80">
            {site.tagline || "Interior & Architecture"}
          </p>
        </div>

        {/* Progress Display */}
        <div className="flex w-64 flex-col gap-3">
          <div className="flex justify-between text-xs font-light tracking-[0.2em] text-white/50">
            <span>LOADING</span>
            <span>{Math.min(progress, 100)}%</span>
          </div>
          <div className="h-[1px] w-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#B85E44] to-[#D49A78] transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B85E44]/10 blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#D49A78]/10 blur-[100px]" />
    </div>
  );
}
