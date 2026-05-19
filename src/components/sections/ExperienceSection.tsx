import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Avulanture",
    period: "Jun 2025 – Present",
    location: "Calicut, India",
    description: "Owned end-to-end architecture of a production MERN travel agency platform with JWT auth, RBAC, and live user traffic at alziyaratravels.com.",
    highlights: [
      "Designed and optimized 20+ RESTful API endpoints, improving query response time by 35%",
      "Executed zero-downtime AWS → Linux server migration using Cloudflare Tunnel",
      "Cut deployment cycle time by 60% via GitHub Actions CI/CD pipeline",
      "Achieved 40% page load improvement through Cloudflare CDN + React code splitting",
      "Reduced Time to Interactive from 3.2s → 2.1s via Redux Toolkit memoization",
    ],
  },
  {
    title: "Frontend Developer (Freelance)",
    company: "Tradiify",
    period: "Sep 2025",
    location: "Remote",
    description: "Translated pixel-perfect Figma designs into a production financial education website (tradiify.com) with full mobile responsiveness.",
    highlights: [
      "Achieved 98 Lighthouse performance score with 5+ responsive breakpoints",
      "Delivered 100% cross-device layout consistency across all screen sizes",
      "Collaborated via structured Git PR workflows across 20+ pull requests",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Where I've worked
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 0.2}>
              <motion.div
                className="relative glass-elevated rounded-2xl p-8 md:p-10"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Accent line */}
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />

                <div className="pl-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary text-lg font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-foreground/90"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};