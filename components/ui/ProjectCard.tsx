"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  /** Seconds to wait before the scroll-in reveal starts. */
  revealDelay?: number;
};

const projectGradients: Record<string, string> = {
  MODRB: "linear-gradient(135deg, #000d33, #1a237e)",
  Medswarm: "linear-gradient(135deg, #001a1a, #00474f)",
  Alcamp: "linear-gradient(135deg, #12002b, #3b0a7a)",
  "Land & Lead": "linear-gradient(135deg, #1a1000, #4a3200)",
  "Retail ERP": "linear-gradient(135deg, #0a0f2c, #1b1f4b)",
  Bookified: "linear-gradient(135deg, #001a33, #003366)",
  Teba: "linear-gradient(135deg, #1a0010, #330020)",
  "Cash Management": "linear-gradient(135deg, #1a1000, #332200)",
};

const pillStyle = {
  fontSize: 10,
  background: "var(--color-surface-3)",
  color: "var(--color-text-muted)",
  borderRadius: 999,
  padding: "3px 10px",
} as const;

export default function ProjectCard({
  project,
  revealDelay = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const gradient = useMemo(
    () => projectGradients[project.title] ?? "var(--color-surface-2)",
    [project.title],
  );

  return (
    <motion.article
      tabIndex={0}
      className="relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-border"
      style={{
        background: "var(--color-surface)",
        height: "100%",
        minHeight: 0,
        position: "relative",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: revealDelay, ease: "easeOut" }}
      whileHover={{ scale: 1.01, transition: { duration: 0.25 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: gradient }}
      />

      <div className="absolute inset-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: project.imagePosition ?? "center top",
            }}
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-start justify-end overflow-hidden"
            style={{ padding: "20px 24px" }}>
            <span
              style={{
                fontSize: "clamp(56px, 7vw, 104px)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: "rgba(255, 255, 255, 0.08)",
                textTransform: "uppercase",
                textAlign: "right",
              }}>
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.42) 48%, rgba(0, 0, 0, 0.15) 100%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          padding: "16px",
          background:
            "linear-gradient(to top, var(--color-surface) 80%, transparent)",
        }}>
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "var(--color-text)",
          }}>
          {project.title}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.label ? (
            <span
              style={{
                ...pillStyle,
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
              }}>
              {project.label}
            </span>
          ) : null}
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} style={pillStyle}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isHovered ? (
          <motion.div
            className="absolute inset-0 flex items-center"
            style={{
              background: "rgba(0, 0, 0, 0.72)",
              backdropFilter: "blur(2px)",
              padding: "24px 20px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <div className="w-full">
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: 4,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                }}>
                {project.label ?? "Project"}
              </p>

              <h3
                className="mt-2"
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: "#ffffff",
                }}>
                {project.title}
              </h3>

              <p
                className="mt-2"
                style={{
                  fontSize: 13,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                }}>
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} style={pillStyle}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border px-5 py-2 transition-colors duration-300 hover:border-white"
                    style={{
                      fontSize: 11,
                      letterSpacing: 1,
                      borderColor: "var(--color-border-light)",
                      color: "#ffffff",
                    }}>
                    GITHUB
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center justify-center rounded-full border px-5 py-2"
                    style={{
                      fontSize: 11,
                      letterSpacing: 1,
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-muted)",
                    }}>
                    PRIVATE REPO
                  </span>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-transparent px-5 py-2"
                    style={{
                      fontSize: 11,
                      letterSpacing: 1,
                      background: "var(--color-accent)",
                      color: "#000000",
                      fontWeight: 700,
                    }}>
                    LIVE DEMO
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
