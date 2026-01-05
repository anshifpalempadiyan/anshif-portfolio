import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
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

export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container-narrow relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Projects I've built
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.article
                className="relative group h-full"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className={`glass-elevated rounded-2xl p-8 h-full flex flex-col overflow-hidden relative`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0`}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="text-5xl mb-6"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                      <motion.span
                        animate={{ x: hoveredIndex === index ? 4 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ x: 4 }}
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
      </div>
    </section>
  );
};