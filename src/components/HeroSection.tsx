import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    title: "India's Leading Real Estate Developers in Mumbai",
    subtitle: "Building Dreams Since 1985 | Premium 1BHK, 2BHK & 3BHK Apartments in Prime Locations",
  },
  {
    image: hero2,
    title: "Trusted Name in Mumbai Real Estate",
    subtitle: "40+ Iconic Projects | 4000+ Happy Families | MahaRERA Approved Properties",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mb-6"
              >
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight px-4 drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}>
                  {slides[current].title}
                </h1>
              </motion.div>
              <p className="font-body text-base sm:text-lg md:text-xl text-white mb-8 md:mb-10 max-w-3xl mx-auto px-4 drop-shadow-lg font-medium" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)' }}>
                {slides[current].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
                <Link
                  to="/projects"
                  className="group w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-primary via-gold-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-body font-semibold text-sm md:text-base transition-all duration-500 text-center shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Explore Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full border-2 border-white text-white font-body font-semibold text-sm md:text-base hover:bg-white hover:text-warm-brown transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105 bg-white/5"
                >
                  Schedule a Visit
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-cream-muted/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
