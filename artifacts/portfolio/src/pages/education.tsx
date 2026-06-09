import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { PageWrapper, staggerContainer, fadeUpVariant } from "../components/layout/PageWrapper";

const credentials = [
  {
    type: "degree",
    title: "Bachelor's Degree",
    field: "Network Engineering",
    institution: "Faculty of Engineering",
    period: "Late 2000s",
    description: "Foundation in telecommunications, network architecture, and systems engineering — the bedrock of a 15-year technology career.",
  },
  {
    type: "master",
    title: "Global Master's in Blockchain Technologies",
    field: "Blockchain Technology — 3rd Edition",
    institution: "Zigurat Global Institute of Technology, Barcelona, Spain",
    period: "November 2020 – November 2021",
    description: "1,500-hour intensive program accredited by Universidad de Barcelona (IL3-UB). Covering distributed ledgers, smart contracts, DeFi, enterprise blockchain, and decentralized identity.",
  },
  {
    type: "degree",
    title: "Master of Business Administration",
    field: "Business Development",
    institution: "Graduate School of Business",
    period: "2018–2020",
    description: "Focused on strategic business development, financial analysis, and market expansion — translating technical expertise into boardroom-level leadership.",
  },
  {
    type: "degree",
    title: "Master's in Law",
    field: "Law & Legal Practice",
    institution: "Faculty of Law",
    period: "2022–Present",
    description: "Advanced legal qualification enabling practice as an advocate and legal consultant, with focus on commercial, corporate, and technology law.",
  },
  {
    type: "cert",
    title: "Cisco Professional Certifications",
    field: "CCNA & CCNP",
    institution: "Cisco Systems",
    period: "Professional Certification",
    description: "Industry-standard networking certifications validating expertise in network design, implementation, security, and troubleshooting.",
  },
  {
    type: "cert",
    title: "Microsoft Certified Systems Engineer",
    field: "MCSE",
    institution: "Microsoft Corporation",
    period: "Professional Certification",
    description: "Advanced Microsoft certification covering enterprise-level Windows Server, Active Directory, and systems integration.",
  },
];

const typeColors: Record<string, string> = {
  degree: "border-primary/40 bg-primary/5",
  master: "border-primary bg-primary/10",
  cert: "border-border bg-card",
};

const typeLabels: Record<string, string> = {
  degree: "Degree",
  master: "Master's",
  cert: "Certification",
};

export default function Education() {
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
            <p className="eyebrow text-primary mb-5">Education Chapter</p>
            <h1 className="display-title text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
              Education &<br />
              <span className="text-primary">Credentials</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="body-copy text-xl text-muted-foreground leading-relaxed max-w-3xl">
              A lifelong commitment to mastery — spanning engineering, blockchain, business, and law across three continents.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <div className="grid grid-cols-3 gap-6 p-8 bg-card/88 backdrop-blur-sm border border-border shadow-[0_24px_60px_-42px_rgba(0,0,0,0.95)]">
              {[
                { label: "Degrees Earned", value: "4" },
                { label: "Professional Certifications", value: "3+" },
                { label: "Countries Studied", value: "UAE · Spain · Online" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-serif font-semibold tracking-[-0.05em] text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm body-copy">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-border hidden md:block" />

            <div className="space-y-8">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  className="relative md:pl-24"
                >
                  <div className="hidden md:flex absolute left-0 top-8 w-16 h-16 rounded-full border border-border bg-background items-center justify-center">
                    {cred.type === "cert" ? (
                      <Award className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>

                  <div className={`border p-6 md:p-8 relative overflow-hidden backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)] ${typeColors[cred.type]}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-primary font-medium border border-primary/30 px-2 py-0.5">
                            {typeLabels[cred.type]}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-serif font-semibold tracking-[-0.04em]">{cred.title}</h2>
                        <p className="text-primary font-medium mt-1 body-copy">{cred.field}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-muted-foreground text-sm font-medium">{cred.period}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-[0.68rem] uppercase tracking-[0.18em] mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" /> {cred.institution}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed body-copy">{cred.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
