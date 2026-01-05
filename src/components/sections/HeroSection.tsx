import { motion, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-mesh)" }}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 noise" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <motion.div
        className="container-narrow text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm tracking-wider">
            Available for hire
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
        >
          <span className="block">Full Stack</span>
          <span className="text-gradient">MERN Developer</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Building scalable, production-ready web applications with modern
          technologies and clean architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="relative bg-primary text-primary-foreground px-8 py-6 text-base glow transition-all duration-250 ease-out hover:translate-y-[-2px] hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:bg-primary/95"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border bg-transparent px-8 py-6 text-base transition-all duration-250 ease-out hover:bg-secondary/30 hover:border-border/80"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/anshifpalempadiyan", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/anshifpalempadiyan", label: "LinkedIn" },
            { icon: Mail, href: "mailto:anshifpalempadiyan@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground transition-all duration-250 ease-out hover:text-primary hover:bg-secondary/70"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-mono tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
