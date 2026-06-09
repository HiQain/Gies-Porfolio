import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Moon, SunMedium } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "technology", label: "Technology" },
  { id: "blockchain", label: "Blockchain" },
  { id: "secoto", label: "SECOTO" },
  { id: "legal", label: "Legal" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type ThemeMode = "dark" | "light";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem("theme-mode");
  return savedTheme === "light" ? "light" : "dark";
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", themeMode === "light");
    window.localStorage.setItem("theme-mode", themeMode);
  }, [themeMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleTheme = () => {
    setThemeMode((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const themeToggleLabel = themeMode === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const themeToggleIcon =
    themeMode === "dark" ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-border py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-[3px] origin-left bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.5)]"
          style={{ scaleX: progressScaleX }}
        />
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2"
          >
            <span className="font-serif text-xl md:text-[1.7rem] font-semibold tracking-[-0.06em] text-foreground transition-colors group-hover:text-primary">
              Gies<span className="text-primary">.</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[0.82rem] font-medium tracking-[0.18em] uppercase transition-colors hover:text-primary relative ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeToggleLabel}
              title={themeToggleLabel}
              className="flex h-11 w-11 items-center justify-center border border-border bg-background/80 text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              {themeToggleIcon}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 py-2.5 text-[0.78rem] font-semibold tracking-[0.16em] uppercase bg-primary text-primary-foreground rounded-none border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch <ChevronRight className="w-4 h-4" />
            </button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeToggleLabel}
              title={themeToggleLabel}
              className="flex h-10 w-10 items-center justify-center border border-border bg-background/70 text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              {themeToggleIcon}
            </button>
            <button
              className="text-foreground p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 pb-8 px-6 lg:hidden flex flex-col border-b border-border h-screen overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-2xl font-serif tracking-[-0.05em] transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="mt-auto pt-12">
              <p className="text-sm text-muted-foreground mb-4 tracking-[-0.02em]">giesalbon@gmail.com</p>
              <p className="text-sm text-muted-foreground mb-8 tracking-[-0.02em]">+971-582-188-898</p>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full px-6 py-4 text-center text-[0.8rem] font-semibold tracking-[0.16em] uppercase bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
