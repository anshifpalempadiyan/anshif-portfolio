import { motion, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Simplified variants for performance - only headline animates on load
const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Staggered content appears after headline
const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

// Reduced motion variants - simple fade only
const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  // Use simplified animations when reduced motion is preferred
  const headlineAnim = prefersReducedMotion ? reducedMotionVariants : headlineVariants;
  const contentAnim = prefersReducedMotion ? reducedMotionVariants : contentVariants;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-0"
    >
      {/* Static background - no animations for performance */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh - static */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-mesh)" }}
        />

        {/* Grid - reduced opacity for performance */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Static orbs - no blur animation, reduced blur for performance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-2xl" />
      </div>

      <div className="container-narrow text-center">
        {/* Label */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm tracking-wider">
              Available for hire
            </span>
          </div>
        {/* Main heading - primary animation on load */}
        <motion.h1
          variants={headlineAnim}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
        >
          <span className="block">ANSHIF.P</span>
          <span className="text-gradient">MERN Stack Developer</span>
        </motion.h1>

        {/* Content appears after headline */}
        <motion.div
          variants={contentAnim}
          initial="hidden"
          animate="visible"
        >
          

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Building scalable, production-ready web applications with modern
            technologies and clean architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="relative bg-primary text-primary-foreground px-8 py-6 text-base transition-all duration-250 ease-out hover:translate-y-[-2px] hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:bg-primary/95"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent px-8 py-6 text-base transition-all duration-250 ease-out hover:bg-secondary/30 hover:border-primary hover:text-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/anshifpalempadiyan", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/anshifpalempadiyan", label: "LinkedIn" },
              { icon: Mail, href: "mailto:anshifpalempadiyan@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 text-muted-foreground transition-all duration-250 ease-out hover:bg-primary/20 hover:text-primary"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - appears after content */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0.3 : 0.8, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono tracking-wider">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
