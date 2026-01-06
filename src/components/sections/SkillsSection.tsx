import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Redux", "Next.js", "JavaScript (ES6+)", "Redux","Tailwind CSS", "HTML 5","CSS 3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Redis"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "AWS", "Cloudflare", "Vercel", "CI/CD"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container-narrow relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I work with
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.15}>
              <motion.div
                className="glass-elevated rounded-2xl p-8 h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gradient">
                  {category.title}
                </h3>
                <StaggerContainer className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill}>
                      <motion.span
                        className="inline-block px-4 py-2 rounded-lg bg-secondary/50 text-foreground text-sm border border-border/50 cursor-default"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "hsl(var(--primary) / 0.2)",
                          borderColor: "hsl(var(--primary) / 0.5)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};