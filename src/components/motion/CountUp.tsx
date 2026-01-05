import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const CountUp = ({ target, suffix = "", prefix = "", duration = 2 }: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(target);
      setHasAnimated(true);
    }
  }, [isInView, target, spring, hasAnimated]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
};