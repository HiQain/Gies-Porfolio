import { motion } from "framer-motion";
import { Cpu, Globe, Lock, Database, Award, BookOpen, Heart, Shield, Zap, BarChart3, Users, FileText } from "lucide-react";
import { PageWrapper, staggerContainer, fadeUpVariant } from "@/components/layout/PageWrapper";

export default function Blockchain() {
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
              Blockchain &<br />
              <span className="text-primary">Digital Assets</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pioneering gold-backed digital currency and advancing blockchain's role in healthcare infrastructure — operating at the frontier of decentralized technology.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-medium tracking-widest uppercase text-xs">Chief Technology Officer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Milli Chain</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
                  As CTO of Milli Chain, led the end-to-end design and development of two gold-backed digital coins — Milli Chain and Milli Coin — pioneering asset-backed cryptocurrency infrastructure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Milli Chain", desc: "Gold-backed blockchain network", icon: <Database className="w-5 h-5 text-primary" /> },
                    { title: "Milli Coin", desc: "Gold-backed digital currency", icon: <Globe className="w-5 h-5 text-primary" /> },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-6 border border-border bg-background/50">
                      <div className="mt-0.5">{item.icon}</div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <div className="bg-card border border-border p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[120px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-primary font-medium tracking-widest uppercase text-xs">Academic Credential</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                  Global Master's in Blockchain Technologies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Institution", value: "Zigurat Global Institute of Technology" },
                    { label: "Location", value: "Barcelona, Spain" },
                    { label: "Accreditation", value: "Universidad de Barcelona (IL3-UB)" },
                    { label: "Edition", value: "3rd Edition" },
                    { label: "Duration", value: "1,500 Hours" },
                    { label: "Period", value: "November 2020 – November 2021" },
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-primary/30 pl-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Completed an intensive 1,500-hour master's program in blockchain technologies, accredited by one of Spain's leading universities — equipping deep expertise in distributed ledger systems, smart contracts, DeFi, and enterprise blockchain architecture.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-primary" />
              Blockchain in Healthcare
            </h2>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-8">
            <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium tracking-widest uppercase text-xs">Healthcare Initiative</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Mele Health</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
                Contributed to Mele Health, a blockchain-driven initiative redesigning how medical data is managed, shared, and secured. Built on Hyperledger Indy Fabric, Mele Health delivers bank-level security and convenience to an industry long resistant to digital transformation.
              </p>
              <div className="bg-background/60 border border-border p-6 mb-8">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Patients are now demanding the same level of convenience, access, and flexibility they are used to as consumers of other products. Similarly, health providers need to free data from information silos in order to provide better service to patients."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-8">
            <div className="bg-card border border-border p-8">
              <h4 className="text-sm uppercase tracking-widest text-primary font-medium mb-6">Problems with Existing Healthcare Infrastructure</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { num: "01", title: "Slow", desc: "Locating and sharing data" },
                  { num: "02", title: "Expensive", desc: "Data management vendors" },
                  { num: "03", title: "Friction", desc: "High levels of bureaucracy" },
                  { num: "04", title: "Silo-ed", desc: "Data sits in various unintegrated systems" },
                  { num: "05", title: "Inflexible", desc: "Lack of common protocols between data silos" },
                  { num: "06", title: "Unreliable", desc: "No universally accepted audit trail" },
                ].map((item) => (
                  <div key={item.num} className="p-4 border border-border/50 bg-background/50">
                    <span className="text-xs text-primary font-bold tracking-widest">{item.num}</span>
                    <h5 className="font-serif font-bold text-sm mt-1 mb-1">{item.title}</h5>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <h4 className="text-sm uppercase tracking-widest text-primary font-medium mb-6">Blockchain Advantages</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { num: "01", title: "Accessible", desc: "Easy to locate and share data without silos", icon: <Globe className="w-4 h-4" /> },
                  { num: "02", title: "Decentralized", desc: "Data lives in multiple locations", icon: <Database className="w-4 h-4" /> },
                  { num: "03", title: "Economic", desc: "One protocol, highly scalable", icon: <BarChart3 className="w-4 h-4" /> },
                  { num: "04", title: "Flexible", desc: "Unlimited levels of access and permissions", icon: <Zap className="w-4 h-4" /> },
                  { num: "05", title: "Transparent", desc: "Full provenance — audit record of all data access", icon: <FileText className="w-4 h-4" /> },
                  { num: "06", title: "Secure", desc: "Data protected by pre-agreed rules and advanced encryption", icon: <Shield className="w-4 h-4" /> },
                ].map((item) => (
                  <div key={item.num} className="flex flex-col gap-2 p-4 border border-primary/20 bg-primary/5">
                    <div className="text-primary">{item.icon}</div>
                    <h5 className="font-serif font-bold text-sm">{item.title}</h5>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-8">
            <div className="bg-card border border-border p-8">
              <h4 className="text-sm uppercase tracking-widest text-primary font-medium mb-6">Use Cases</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <FileText className="w-5 h-5" />, title: "Electronic Medical Records", desc: "Breaking down healthcare data silos — patients control their full record rather than the healthcare institution, with full transparency and privacy." },
                  { icon: <Database className="w-5 h-5" />, title: "Medical Billing", desc: "Resolving fragmented billing across unintegrated systems through a unified, tamper-proof ledger." },
                  { icon: <Globe className="w-5 h-5" />, title: "Health Data Exchange", desc: "Common blockchain protocol enabling multi-party collaboration and interoperability between institutions." },
                  { icon: <Shield className="w-5 h-5" />, title: "Healthcare / Vaccination Passport", desc: "Secure, verifiable digital health credentials that travel with the patient across borders and institutions." },
                  { icon: <Users className="w-5 h-5" />, title: "Clinical Trials", desc: "Privacy-preserving participation in large studies, with AI training on anonymized data and full audit trails." },
                  { icon: <Award className="w-5 h-5" />, title: "Credentialing", desc: "Healthcare professionals control their full credential record — instant sharing between jurisdictions." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 border border-border/50 bg-background/50">
                    <div className="text-primary mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h5 className="font-serif font-bold text-sm mb-1">{item.title}</h5>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-8">
            <div className="bg-card border border-border p-8">
              <h4 className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Architecture</h4>
              <h3 className="text-xl font-serif font-bold mb-4">Patient Control & Self-Sovereign Identity</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Built on the Hyperledger Indy Fabric — purpose-built for decentralized identity. The architecture implements SSI (Self-Sovereign Identity) giving patients full control over who accesses their data, without relying on any centralized authority.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "DIDs", desc: "Decentralized Identifiers requiring no centralized resolution authority" },
                  { title: "Verifiable Credentials", desc: "Interoperable format for exchange of digital identity between institutions" },
                  { title: "Zero Knowledge Proofs", desc: "Validation using small pieces of information without personal identifiers" },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-primary/40 pl-4">
                    <h5 className="font-bold text-sm mb-1">{item.title}</h5>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 border border-primary/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-xs uppercase tracking-widest text-primary font-medium">Global Alignment — Saudi Vision 2030</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mele Health's infrastructure aligns with Saudi Arabia's Vision 2030 Healthcare Modernization objectives — including the establishment of a Unified Electronic System targeting over 70% of Saudi citizens with unified digital records. The initiative also supports improving integration and continuity in service provision across the broader GCC region.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <div className="bg-card border border-border p-8">
              <h4 className="text-sm uppercase tracking-widest text-primary font-medium mb-2">Proposed Pilot</h4>
              <h3 className="text-xl font-serif font-bold mb-4">SSI Medical Digital Identity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Based on a scheme implemented by the team for Messly in cooperation with the UK NHS — placing temporary doctors at NHS hospitals using a decentralized identity and trust-triangle framework. Stakeholders (Issuers, Holders, Verifiers) interact through a governance framework set by the Public Health Authority.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Hyperledger Indy", "Self-Sovereign Identity", "UK NHS Framework", "Saudi 2030 Aligned", "Zero Knowledge Proofs", "Verifiable Credentials", "Decentralized IDs", "Trust Triangle"].map((tag) => (
                  <span key={tag} className="px-3 py-2 border border-primary/30 text-xs uppercase tracking-wider bg-background/50 text-center">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </PageWrapper>
  );
}
