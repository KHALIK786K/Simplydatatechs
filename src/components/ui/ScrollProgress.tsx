import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient progress bar tied to scroll position. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-brand-500 via-violet-500 to-cyber-500"
    />
  );
}
