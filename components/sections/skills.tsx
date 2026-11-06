"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
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
      id="skills"
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
        <SectionHeading
          tag="SKILLS"
          title="My toolbox"
          description="The technologies, frameworks, and tools I use to ship full-stack products, from React frontends to Node.js APIs and databases."
          align="center"
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
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
