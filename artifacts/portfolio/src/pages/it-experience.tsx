import { motion } from "framer-motion";
import { Server, Shield, Network, Code, Terminal, Briefcase, Building2 } from "lucide-react";
import { PageWrapper, staggerContainer, fadeUpVariant } from "../components/layout/PageWrapper";

export default function ITExperience() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUpVariant} className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Technology & <br />
              <span className="text-primary text-opacity-90">Infrastructure</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              15+ years of engineering robust networks, leading programming teams, and architecting large-scale national infrastructure for the UAE government.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div variants={fadeUpVariant} className="bg-card border border-border p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
              <Network className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif font-bold mb-3">Core Expertise</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Networking, Switching & Routing</li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Programming Team Leadership</li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Infrastructure Architecture</li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> System Integration</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-card border border-border p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif font-bold mb-3">Certifications & Education</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-background border border-border flex items-center justify-center text-xs font-bold">BSc</div>
                  Bachelor in Network Engineering
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-background border border-border flex items-center justify-center text-xs font-bold text-primary">CS</div>
                  Cisco Certified (CCNA, CCNP)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-background border border-border flex items-center justify-center text-xs font-bold text-blue-500">MS</div>
                  Microsoft Certified (MCSE)
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
              <Building2 className="w-8 h-8 text-primary" />
              Large-scale National Infrastructure
            </h2>
            <div className="bg-card border border-border p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-8">
                Consulted on and contributed to critical UAE Government Systems, ensuring high availability, security, and scalability.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Labour System", "Immigration System", "Economic System", "Notary System"].map((sys) => (
                  <div key={sys} className="flex flex-col items-center text-center gap-3 p-4 border border-border/50 bg-background/50">
                    <Server className="w-6 h-6 text-primary/70" />
                    <span className="font-medium text-sm">{sys}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 text-primary/10">
                <Terminal className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <span className="text-primary font-medium tracking-wider uppercase text-sm">Founder & CEO</span>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">Bravostar Infrastructures</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Leading a specialized firm that architects and builds robust digital foundations — from complex websites and mobile applications to enterprise CRMs and physical networking infrastructure.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Web Development", "Mobile Apps", "Enterprise CRMs", "Network Infrastructure"].map((skill) => (
                    <span key={skill} className="px-4 py-2 border border-primary/30 text-xs uppercase tracking-wider bg-background/50 backdrop-blur">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
