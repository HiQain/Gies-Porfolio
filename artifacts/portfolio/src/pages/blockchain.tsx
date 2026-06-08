import { motion } from "framer-motion";
import { Cpu, Globe, Lock, Database, Award, BookOpen } from "lucide-react";
import { PageWrapper, staggerContainer, fadeUpVariant } from "@/components/layout/PageWrapper";

export default function Blockchain() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
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
              <div className="absolute -right-16 -bottom-16 opacity-5">
                <Cpu className="w-64 h-64 text-primary" />
              </div>
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

          <motion.div variants={fadeUpVariant}>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-primary" />
              Blockchain in Healthcare
            </h2>
            <div className="bg-card border border-border p-8">
              <h3 className="text-xl font-serif font-bold mb-4">Mele Health — Decentralized Healthcare Infrastructure</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contributed to Mele Health, a blockchain-driven initiative redesigning how medical data is managed, shared, and secured across healthcare institutions — building on Hyperledger Indy for Self-Sovereign Identity and decentralized Electronic Medical Records.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <Lock className="w-5 h-5" />, title: "SSI Digital Identity", desc: "Decentralized patient identity" },
                  { icon: <Database className="w-5 h-5" />, title: "EMR on Blockchain", desc: "Interoperable medical records" },
                  { icon: <Globe className="w-5 h-5" />, title: "Health Data Exchange", desc: "Cross-institution data sharing" },
                  { icon: <Lock className="w-5 h-5" />, title: "Clinical Trials", desc: "Auditable trial data" },
                  { icon: <Cpu className="w-5 h-5" />, title: "Zero Knowledge Proofs", desc: "Privacy-preserving verification" },
                  { icon: <Award className="w-5 h-5" />, title: "Credentialing", desc: "Healthcare professional records" },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2 p-4 border border-border/50 bg-background/50">
                    <div className="text-primary">{item.icon}</div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
