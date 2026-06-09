import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { PageWrapper, staggerContainer, fadeUpVariant } from "../components/layout/PageWrapper";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <p className="eyebrow text-primary mb-5">Contact Chapter</p>
            <h1 className="display-title text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
              Let's<br />
              <span className="text-primary">Connect</span>
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="body-copy text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Whether you are looking for a legal consultant, a blockchain partner, or an IT advisor — reach out and let's explore what's possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Phone className="w-6 h-6 text-primary" />,
                label: "Phone",
                value: "+971-582-188-898",
                href: "tel:+971582188898",
              },
              {
                icon: <Mail className="w-6 h-6 text-primary" />,
                label: "Email",
                value: "giesalbon@gmail.com",
                href: "mailto:giesalbon@gmail.com",
              },
              {
                icon: <MapPin className="w-6 h-6 text-primary" />,
                label: "Location",
                value: "Dubai, UAE",
                href: null,
              },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUpVariant}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex flex-col items-center text-center p-8 border border-border bg-card/86 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)]"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </a>
                ) : (
                  <div className="flex flex-col items-center text-center p-8 border border-border bg-card/86 backdrop-blur-sm shadow-[0_20px_60px_-40px_rgba(0,0,0,0.85)]">
                    <div className="mb-4">{item.icon}</div>
                    <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground mb-2">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUpVariant}>
            {submitted ? (
              <div className="bg-gradient-to-br from-primary/10 to-background border border-primary/30 p-12 text-center shadow-[0_28px_80px_-46px_rgba(217,168,26,0.4)]">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-semibold tracking-[-0.04em] mb-4">Message Received</h2>
                <p className="text-muted-foreground max-w-md mx-auto body-copy">
                  Thank you for reaching out. A response will follow shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card/88 backdrop-blur-sm border border-border p-8 md:p-12 shadow-[0_24px_60px_-42px_rgba(0,0,0,0.95)]">
                <h2 className="text-2xl font-serif font-semibold tracking-[-0.04em] mb-8">Send a Message</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="How can I help you?"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-8">
                  <label className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-[0.8rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 hover:bg-primary/90"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
