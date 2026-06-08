import { motion } from "framer-motion";
import { Scale, Briefcase, Globe, Building2, Users, FileText } from "lucide-react";
import { PageWrapper, staggerContainer, fadeUpVariant } from "@/components/layout/PageWrapper";

export default function Legal() {
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
              Legal Consulting<br />
              <span className="text-primary">& Advocacy</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Partner at one of Dubai's prominent law firms — bringing a rare combination of technical depth and legal acuity to complex business and commercial matters.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 opacity-5">
                <Scale className="w-64 h-64 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-medium tracking-widest uppercase text-xs">Partner & Legal Consultant</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Saif Al Shamsi Advocate
                </h2>
                <p className="text-muted-foreground text-sm mb-8 uppercase tracking-widest">
                  Dubai, United Arab Emirates
                </p>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
                  As Partner and Legal Consultant, providing strategic legal advisory and advocacy services with a focus on business formation, corporate law, and commercial dispute resolution across the UAE market.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: <Briefcase className="w-5 h-5 text-primary" />, title: "Corporate Legal Advisory", desc: "Strategic guidance for businesses entering and operating in the UAE market" },
                    { icon: <Scale className="w-5 h-5 text-primary" />, title: "Advocacy & Litigation", desc: "Representation in commercial disputes and regulatory matters" },
                    { icon: <Globe className="w-5 h-5 text-primary" />, title: "International Business Law", desc: "Cross-border transactions and international trade compliance" },
                    { icon: <Building2 className="w-5 h-5 text-primary" />, title: "Business Development", desc: "Legal structuring for company formation and expansion" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-6 border border-border bg-background/50">
                      <div className="mt-0.5">{item.icon}</div>
                      <div>
                        <h3 className="font-serif font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-4">
              <Users className="w-7 h-7 text-primary" />
              From Technology to Law
            </h2>
            <div className="bg-card border border-border p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                The transition from Chief Technology Officer to Legal Partner is not a pivot — it is an evolution. Over a decade of building systems for UAE government ministries, leading blockchain projects, and driving business development across industries created an unusually deep understanding of how law, technology, and commerce intersect.
              </p>
              <div className="flex flex-col gap-0 border-l-2 border-primary/30 pl-8 ml-4">
                {[
                  { year: "2006–2021", role: "IT & Technology Leadership", desc: "15+ years in networking, government systems, and blockchain" },
                  { year: "2018–2022", role: "MBA — Business Development", desc: "Deepening expertise in corporate strategy and market expansion" },
                  { year: "2022–Present", role: "Master's in Law & Legal Practice", desc: "Formal legal qualification combining with business acumen" },
                  { year: "Present", role: "Partner, Saif Al Shamsi Advocate", desc: "Advising businesses at the intersection of technology and law" },
                ].map((item, i) => (
                  <div key={i} className="relative mb-10 last:mb-0">
                    <div className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                    <p className="text-primary text-xs font-medium uppercase tracking-widest mb-1">{item.year}</p>
                    <h3 className="font-serif font-bold text-lg mb-1">{item.role}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <div className="bg-card border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg">Legal Consultation</h3>
                  <p className="text-muted-foreground text-sm">Available for corporate and commercial legal advisory</p>
                </div>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 px-8 py-3 border border-primary text-primary text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
