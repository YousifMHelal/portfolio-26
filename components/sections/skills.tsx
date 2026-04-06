"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { skillSlugs } from "@/data";

const IconCloud = dynamic(
  () => import("@/components/ui/icon-cloud").then((mod) => mod.IconCloud),
  {
    ssr: false,
  },
);

export function SkillsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section
      id="skills-section"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px clamp(24px, 5vw, 80px)",
        boxSizing: "border-box",
      }}>
      <motion.div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              color: "var(--color-accent)",
              fontSize: "18px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}>
            {"// SKILLS"}
          </span>
          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 80px)",
              fontWeight: 900,
              color: "white",
              textTransform: "uppercase",
              marginTop: "12px",
            }}>
            My Toolbox
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "15px",
              margin: "12px auto 0",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}>
            A collection of technologies, frameworks, and tools I use to build
            modern web experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            width: "clamp(300px, 60vw, 600px)",
            height: "clamp(300px, 60vw, 600px)",
          }}>
          <IconCloud iconSlugs={skillSlugs} />
        </motion.div>
      </motion.div>
    </section>
  );
}
