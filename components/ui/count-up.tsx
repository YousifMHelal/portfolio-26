"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  /** e.g. "50+", "2+". Text without a leading number renders unchanged. */
  value: string;
  duration?: number;
};

/** Counts the leading number up from 0 each time it scrolls into view. */
export function CountUp({ value, duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === null) {
      return;
    }

    if (!isInView) {
      setCurrent(0);
      return;
    }

    if (prefersReducedMotion) {
      setCurrent(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, target, duration, prefersReducedMotion]);

  return (
    <span ref={ref} aria-label={value}>
      {target === null ? value : `${current}${suffix}`}
    </span>
  );
}
