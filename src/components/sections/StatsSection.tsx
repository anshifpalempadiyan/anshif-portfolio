import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { CountUp } from "@/components/motion/CountUp";
import { Rocket, Code, Layers, Users } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: 4,
    suffix: "+",
    label: "Production Apps Shipped",
    description: "Live with real user traffic",
  },
  {
    icon: Code,
    value: 1000,
    suffix: "+",
    label: "Hours of Development",
    description: "Hands-on MERN stack engineering",
  },
  {
    icon: Layers,
    value: 99.9,
    suffix: "%",
    label: "Production Uptime",
    description: "Across all deployed systems",
  },
  {
    icon: Users,
    value: 50,
    suffix: "%",
    label: "Manual Work Eliminated",
    description: "Via AI-powered automation",
  },
];

export const StatsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container-narrow relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Impact in numbers
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="glass-elevated rounded-2xl p-6 md:p-8 text-center h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  <stat.icon size={24} />
                </motion.div>

                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};