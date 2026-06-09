import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import ITExperience from "@/pages/it-experience";
import Blockchain from "@/pages/blockchain";
import Secoto from "@/pages/secoto";
import Legal from "@/pages/legal";
import Education from "@/pages/education";
import Contact from "@/pages/contact";

import { Navbar } from "@/components/layout/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
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
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
