import { motion } from "framer-motion";
import { AnimatedSection, AnimatedText } from "@/components/motion/AnimatedSection";
import { Code2, Database, Cloud, Zap } from "lucide-react";

export const AboutSection = () => {
  const techStack = [
    { icon: Code2, label: "React & Node.js" },
    { icon: Database, label: "MongoDB & Redis" },
    { icon: Cloud, label: "AWS & Cloudflare" },
    { icon: Zap, label: "AI & LLM Integration" },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <AnimatedSection>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                About Me
              </span>
            </AnimatedSection>

            <AnimatedText delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Crafting digital experiences with{" "}
                <span className="text-gradient">modern technologies</span>
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a Full Stack Developer with production ownership of scalable web applications
                built on React, Node.js, MongoDB, and AWS. I specialize in architecting
                AI-powered automation systems using LLM integration — cutting manual processing
                time by 50% and delivering measurable engineering impact on live production platforms.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From zero-downtime cloud migrations to CI/CD pipelines and Redis caching
                strategies, I own the full stack end-to-end — shipping apps that hit
                99.9% uptime, 40% faster load times, and real users in production.
              </p>
            </AnimatedText>

            {/* Tech stack pills */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-4">
                {techStack.map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Icon size={16} className="text-primary" />
                    <span className="text-sm text-foreground">{label}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Visual element */}
          <AnimatedSection delay={0.3} className="relative">
            <div className="relative">
              {/* Code block decoration */}
              <motion.div
                className="glass-elevated rounded-2xl p-6 font-mono text-sm overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">developer</span> = {"{"}
                    {"\n"}  <span className="text-muted-foreground">name:</span>{" "}
                    <span className="text-accent">"Full Stack Dev"</span>,
                    {"\n"}  <span className="text-muted-foreground">stack:</span> [
                    {"\n"}    <span className="text-accent">"MongoDB"</span>,
                    {"\n"}    <span className="text-accent">"Express"</span>,
                    {"\n"}    <span className="text-accent">"React"</span>,
                    {"\n"}    <span className="text-accent">"Node.js"</span>
                    {"\n"}  ],
                    {"\n"}  <span className="text-muted-foreground">passion:</span>{" "}
                    <span className="text-accent">"Building"</span>
                    {"\n"}{"}"};
                  </code>
                </pre>

                {/* Animated cursor */}
                <motion.span
                  className="inline-block w-2 h-5 bg-primary ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl glass flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-3xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};