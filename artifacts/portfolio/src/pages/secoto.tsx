import { motion } from "framer-motion";
import { Globe, Leaf, Trophy, Flag, Building, Users } from "lucide-react";
import { PageWrapper, staggerContainer, fadeUpVariant } from "@/components/layout/PageWrapper";

export default function Secoto() {
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
              SECOTO<br />
              <span className="text-primary">International</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Co-Founder of SECOTO International Sports Events — bridging sports, climate action, and international diplomacy on a global stage.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <div className="bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 opacity-5">
                <Globe className="w-64 h-64 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-primary font-medium tracking-widest uppercase text-xs border border-primary/30 px-3 py-1">Co-Founder</span>
                  <span className="text-muted-foreground text-xs">License No. 1532549 · Dubai, UAE · Est. 2025</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  SECOTO International Sports Events L.L.C
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
                  A Dubai-licensed company dedicated to transforming international sports events into powerful platforms for climate change advocacy. Working alongside the world's most influential environmental and sporting bodies to drive the Road to 2030 agenda.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: <Globe className="w-5 h-5 text-primary" />, label: "UNEP", desc: "United Nations Environment Programme" },
                    { icon: <Trophy className="w-5 h-5 text-primary" />, label: "Olympic Committee", desc: "International Olympic Committee" },
                    { icon: <Flag className="w-5 h-5 text-primary" />, label: "197+ Countries", desc: "Road to 2030 Global Framework" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-5 border border-primary/20 bg-primary/5">
                      <div className="mt-0.5">{item.icon}</div>
                      <div>
                        <p className="font-bold text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 flex items-center gap-4">
              <Leaf className="w-7 h-7 text-primary" />
              Road to 2030
            </h2>
            <div className="bg-card border border-border p-8">
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                SECOTO's flagship initiative — a global framework connecting 197+ nations under a unified commitment to climate action through the power of sport. The programme aligns with the UN Sustainable Development Goals and the Paris Agreement targets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Sports for Nature", desc: "Integrating environmental education into international sporting events" },
                  { title: "Climate Action", desc: "Direct climate change advocacy through the platform of sport" },
                  { title: "Global Reach", desc: "Coordinated initiatives across 197+ countries" },
                  { title: "UN Alignment", desc: "Officially working with UNEP and the Olympic Committee" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 border border-border/50 bg-background/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <div className="bg-gradient-to-br from-card to-background border border-border p-8 md:p-12">
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium tracking-widest uppercase text-xs">Upcoming Project</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                Sports for Nature Museum — UAE
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The next landmark project: building a world-class Sports for Nature Museum in the UAE. A physical testament to the intersection of athletic achievement and environmental stewardship — housing exhibitions, interactive installations, and international climate sport archives that will attract global visitors and dignitaries.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UAE", "Museum Architecture", "Climate Education", "Sports Heritage", "International Partnerships"].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-primary/30 text-xs uppercase tracking-wider bg-background/50">
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
