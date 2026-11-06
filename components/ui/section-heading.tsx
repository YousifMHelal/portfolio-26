"use client";

import { motion } from "framer-motion";

import { SectionTag } from "@/components/ui/section-tag";

type SectionHeadingProps = {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

// Each word rises out of its own clipping mask.
const word = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
} as const;

/**
 * Section label + large title + optional intro. Replays every time it
 * scrolls into view, in either direction.
 */
export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-80px" }}
      style={{
        textAlign: align,
        display: "flex",
        flexDirection: "column",
        alignItems: centered ? "center" : "flex-start",
      }}>
      <motion.div variants={fadeUp}>
        <SectionTag name={tag} />
      </motion.div>

      <h2
        aria-label={title}
        style={{
          marginTop: "8px",
          fontSize: "clamp(36px, 6vw, 80px)",
          fontWeight: 900,
          lineHeight: 1.02,
          letterSpacing: "-0.01em",
          color: "var(--color-text)",
          textTransform: "uppercase",
        }}>
        {title.split(" ").map((part, index) => (
          <span
            key={`${part}-${index}`}
            aria-hidden="true"
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              paddingBottom: "0.08em",
              marginRight: "0.25em",
            }}>
            <motion.span variants={word} style={{ display: "inline-block" }}>
              {part}
            </motion.span>
          </span>
        ))}
      </h2>

      {description ? (
        <motion.p
          variants={fadeUp}
          style={{
            marginTop: "12px",
            maxWidth: "520px",
            color: "var(--color-text-muted)",
            fontSize: "15px",
            lineHeight: 1.7,
          }}>
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
