import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com", handle: "@yourusername" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", handle: "/in/yourprofile" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", handle: "hello@example.com" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container-narrow relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, I'd love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-2xl mx-auto">
          <motion.div
            className="glass-elevated rounded-3xl p-8 md:p-12"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Email CTA */}
            <motion.a
              href="mailto:hello@example.com"
              className="group flex items-center justify-between p-6 rounded-2xl bg-secondary/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 mb-8"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="text-primary" size={20} />
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Send me an email</span>
                  <p className="text-foreground font-medium">hello@example.com</p>
                </div>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
            </motion.a>

            {/* Social links */}
            <div className="grid gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                    <div>
                      <span className="text-foreground font-medium">{link.label}</span>
                      <p className="text-muted-foreground text-sm">{link.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.4} className="text-center mt-20">
          <p className="text-muted-foreground text-sm">
            Designed & Built with{" "}
            <span className="text-primary">♥</span>{" "}
            using React & Framer Motion
          </p>
          <p className="text-muted-foreground/60 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};