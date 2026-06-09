import { Navbar } from "./components/layout/Navbar";
import Blockchain from "./pages/blockchain";
import Contact from "./pages/contact";
import Education from "./pages/education";
import Home from "./pages/home";
import ITExperience from "./pages/it-experience";
import Legal from "./pages/legal";
import Secoto from "./pages/secoto";

function App() {
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
          <div className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
        </div>
        <section id="home" className="section-snap">
          <Home />
        </section>
        <section id="technology" className="section-snap section-shell section-shell-alt">
          <ITExperience />
        </section>
        <section id="blockchain" className="section-snap section-shell">
          <Blockchain />
        </section>
        <section id="secoto" className="section-snap section-shell section-shell-alt">
          <Secoto />
        </section>
        <section id="legal" className="section-snap section-shell">
          <Legal />
        </section>
        <section id="education" className="section-snap section-shell section-shell-alt">
          <Education />
        </section>
        <section id="contact" className="section-snap section-shell">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
