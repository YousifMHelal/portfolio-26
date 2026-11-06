"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin accent bar across the top that fills as the page is scrolled. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 h-[2px] origin-left bg-accent"
      style={{ scaleX, zIndex: 120, boxShadow: "0 0 12px var(--color-accent)" }}
    />
  );
}
