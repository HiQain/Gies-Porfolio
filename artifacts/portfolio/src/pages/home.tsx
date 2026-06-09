import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const roles = [
  "IT Expert & Network Engineer",
  "Blockchain CTO & Innovator",
  "Legal Consultant & Advocate",
  "Co-Founder, SECOTO International",
];

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 mx-auto pt-24 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Left — Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary text-xs font-medium uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Dubai, UAE
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Gies<br />
              <span className="text-primary">Abdelmonim</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-10 md:h-12 mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-2xl font-light text-muted-foreground"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
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
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-primary/90"
              >
                Explore My Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center justify-center gap-2 border border-border bg-transparent text-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-8 mt-14 border-t border-border/50 pt-8"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "3", label: "Domains" },
                { value: "UAE", label: "Based in Dubai" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-serif font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/30 z-0" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary z-0" />

              {/* Main photo */}
              <div className="relative z-10 w-[320px] md:w-[400px] lg:w-[440px] overflow-hidden">
                <img
                  src="/images/photo-4.jpg"
                  alt="Gies Abdelmonim"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "580px" }}
                />
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating name card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -bottom-6 left-6 bg-background border border-border px-6 py-4 z-20 shadow-xl"
              >
                <p className="font-serif font-bold text-lg">Gies Abdelmonim</p>
                <p className="text-primary text-xs uppercase tracking-widest mt-0.5">Dubai, UAE · Since 2006</p>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest"
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
