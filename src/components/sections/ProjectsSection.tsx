import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "Travel Agency Platform",
    description: "A comprehensive travel booking platform with real-time availability, secure payments, and personalized recommendations.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "🌍",
    color: "from-blue-500/20 to-cyan-500/20",
    link: "#",
    github: "#",
  },
  {
    title: "Tradiify",
    description: "Financial education platform empowering users with trading knowledge, interactive courses, and real-time market insights.",
    tech: ["Next.js", "Express", "PostgreSQL", "WebSocket"],
    image: "📈",
    color: "from-green-500/20 to-emerald-500/20",
    link: "#",
    github: "#",
  },
  {
    title: "AI-Powered CV Parser",
    description: "Intelligent resume parsing system using AI to extract and analyze candidate data, generating detailed persona profiles.",
    tech: ["React", "Python", "OpenAI", "MongoDB", "FastAPI"],
    image: "🤖",
    color: "from-purple-500/20 to-pink-500/20",
    link: "#",
    github: "#",
  },
  {
    title: "RFP Management System",
    description: "AI-driven Request for Proposal management platform automating document analysis and response generation.",
    tech: ["React", "Node.js", "AI/ML", "AWS S3", "Redis"],
    image: "📋",
    color: "from-orange-500/20 to-red-500/20",
    link: "#",
    github: "#",
  },
];

const moreProjects = [
  {
    title: "Wedding Invitation Website",
    description: "Frontend-focused wedding invitation website with a Supabase database to store guest wishes in real time.",
    tech: ["HTML", "CSS", "JavaScript", "Supabase"],
    github: "https://github.com/anshifpalempadiyan/Wedding-Innvitation.git",
  },
  {
    title: "Pastebin Lite",
    description: "Pastebin-style application where users can create text snippets with expiry time and view limits, generating a shareable link.",
    tech: ["Next.js", "MongoDB"],
    github: "https://github.com/anshifpalempadiyan/pastebin-lite.git",
  },
  {
    title: "TinyURL Clone",
    description: "URL shortener that converts long URLs into short links using custom or random codes.",
    tech: ["React", "Node.js", "Express", "Neon PostgreSQL"],
    github: "https://github.com/anshifpalempadiyan/tiny-url-frontend.git",
  },
];

export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredMoreIndex, setHoveredMoreIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-narrow relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my experience in building
            full-stack applications with modern technologies.
          </p>
        </AnimatedSection>

        {/* Featured Projects Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.article
                className="relative group h-full"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`glass-elevated rounded-2xl p-8 h-full flex flex-col overflow-hidden relative`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0`}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="text-5xl mb-6"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      {project.image}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-250">
                      {project.title}
                      <motion.span
                        animate={{ x: hoveredIndex === index ? 4 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                      </motion.span>
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground/80 border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/30">
                      <motion.a
                        href={project.link}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-250 hover:text-primary"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-250 hover:text-primary"
                      >
                        <Github size={16} />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* More Projects Section */}
        <AnimatedSection delay={0.3} className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8 text-muted-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {moreProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                onHoverStart={() => setHoveredMoreIndex(index)}
                onHoverEnd={() => setHoveredMoreIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="glass rounded-xl p-5 h-full flex flex-col border border-border/30 transition-colors duration-250 hover:border-primary/30 hover:bg-surface-elevated/60"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {/* Title with GitHub icon */}
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-medium group-hover:text-primary transition-colors duration-250">
                      {project.title}
                    </h4>
                    <Github 
                      size={18} 
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-250" 
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-full bg-secondary/40 text-foreground/70 border border-border/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
