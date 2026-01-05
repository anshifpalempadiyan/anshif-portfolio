import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Mail, Github, Linkedin, Phone, MapPin, MessageCircle } from "lucide-react";

const contactDetails = [
  { 
    icon: Mail, 
    label: "Email", 
    value: "anshifpalempadiyan@gmail.com", 
    href: "mailto:anshifpalempadiyan@gmail.com",
    primary: true
  },
  { 
    icon: Phone, 
    label: "Phone", 
    value: "+91 8590189068", 
    href: "tel:+918590189068" 
  },
  { 
    icon: MapPin, 
    label: "Location", 
    value: "Calicut, India", 
    href: null 
  },
  { 
    icon: Github, 
    label: "GitHub", 
    value: "anshifpalempadiyan", 
    href: "https://github.com/anshifpalempadiyan" 
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    value: "anshifpalempadiyan", 
    href: "https://linkedin.com/in/anshifpalempadiyan" 
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container-narrow relative">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently open to new opportunities and interesting projects.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-xl mx-auto">
          <div className="glass-elevated rounded-2xl p-6 md:p-8">
            <div className="space-y-1">
              {contactDetails.map((item, index) => {
                const content = (
                  <motion.div
                    className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-250 ${
                      item.href ? 'cursor-pointer hover:bg-secondary/40' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={item.href ? { x: 4 } : {}}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-250 ${
                      item.primary 
                        ? 'bg-primary/15 group-hover:bg-primary/25' 
                        : 'bg-secondary/50 group-hover:bg-secondary/70'
                    }`}>
                      <item.icon 
                        size={18} 
                        className={`transition-colors duration-250 ${
                          item.primary 
                            ? 'text-primary' 
                            : 'text-muted-foreground group-hover:text-primary'
                        }`} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </span>
                      <p className={`font-medium truncate transition-colors duration-250 ${
                        item.href ? 'group-hover:text-primary' : ''
                      }`}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
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

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918590189068?text=Hi%20Anshif%2C%20I%20came%20across%20your%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-250 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        whileHover={{ y: -2 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </motion.a>
    </section>
  );
};
