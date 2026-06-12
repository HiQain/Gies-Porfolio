import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const roles = [
  "IT Expert & Network Engineer",
  "Blockchain CTO & Innovator",
  "Legal Consultant & Advocate",
  "Co-Founder, SECOTO International",
];

const heroPhotos = [
  "/images/photo-1.jpg",
  "/images/photo-2.jpg",
  "/images/photo-4.jpg",
  "/images/photo-5.jpg",
  "/images/photo-6.jpg",
  "/images/photo-7.jpg",
  "/images/photo-8.jpg",
  "/images/photo-9.jpg",
];

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent" />
      </div>

      <div className="container relative z-10 px-5 sm:px-6 md:px-12 mx-auto pt-24 md:pt-20 pb-20 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center min-h-[80vh]">

          {/* Left — Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="eyebrow inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 text-primary mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Dubai, UAE
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="display-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground mb-6"
            >
              Gies<br />
              <span className="text-primary">Abdelmonim</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="min-h-12 md:h-12 mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5 }}
                  className="text-base sm:text-lg md:text-[1.65rem] font-medium tracking-[-0.03em] text-muted-foreground"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-copy text-sm sm:text-base md:text-[1.1rem] text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              15+ years spanning technology, blockchain, and law — building at the intersection of innovation and impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-[0.8rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-primary/90"
              >
                Explore My Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center justify-center gap-2 border border-border bg-transparent text-foreground px-8 py-4 text-[0.8rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-x-8 gap-y-5 mt-14 border-t border-border/50 pt-8"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "3", label: "Domains" },
                { value: "UAE", label: "Based in Dubai" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[1.7rem] font-serif font-semibold tracking-[-0.05em] text-primary">{stat.value}</p>
                  <p className="text-[0.7rem] text-muted-foreground uppercase tracking-[0.18em] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end items-center px-2 sm:px-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]">
              {/* Gold accent frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/30 z-0" />
              <div className="absolute -bottom-4 -left-3 sm:-left-4 w-20 sm:w-24 h-20 sm:h-24 border-l-2 border-b-2 border-primary z-0" />

              {/* Main photo */}
              <div className="relative z-10 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroPhotos[currentPhotoIndex]}
                    src={heroPhotos[currentPhotoIndex]}
                    alt="Gies Abdelmonim"
                    className="w-full h-[420px] sm:h-[500px] lg:h-[580px] object-cover object-top"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating name card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -bottom-10 left-1/2 w-[calc(100%-2rem)] max-w-[280px] -translate-x-1/2 sm:translate-x-0 sm:left-6 sm:w-auto sm:max-w-none bg-background/95 backdrop-blur-sm border border-border px-5 sm:px-6 py-4 z-20 shadow-xl"
              >
                <p className="font-serif font-semibold tracking-[-0.04em] text-base sm:text-lg">Gies Abdelmonim</p>
                <p className="text-primary text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.18em] sm:tracking-[0.22em] mt-1">Dubai, UAE · Since 2006</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest"
      >
        <span>Discover</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ["0%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
