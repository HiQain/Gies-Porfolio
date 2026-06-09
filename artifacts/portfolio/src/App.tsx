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
      <main>
        <section id="home" className="section-snap">
          <Home />
        </section>
        <section id="technology" className="section-snap">
          <ITExperience />
        </section>
        <section id="blockchain" className="section-snap">
          <Blockchain />
        </section>
        <section id="secoto" className="section-snap">
          <Secoto />
        </section>
        <section id="legal" className="section-snap">
          <Legal />
        </section>
        <section id="education" className="section-snap">
          <Education />
        </section>
        <section id="contact" className="section-snap">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
