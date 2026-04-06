"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

const projectGradients: Record<string, string> = {
  Bookified: "linear-gradient(135deg, #001a33, #003366)",
  "Edu Nexus": "linear-gradient(135deg, #001a1a, #003333)",
  Trendy: "linear-gradient(135deg, #1a0010, #330020)",
  "Cash Withdraw": "linear-gradient(135deg, #1a1000, #332200)",
  Momento: "linear-gradient(135deg, #001a0d, #003320)",
  Postpeak: "linear-gradient(135deg, #0d001a, #1a0033)",
};

export default function ProjectCard({ project }: ProjectCardProps) {
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
      whileHover={{ scale: 1.01 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}>
      <div aria-hidden="true" className="absolute inset-0" style={{ background: gradient }} />

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
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 10,
                background: "var(--color-surface-3)",
                color: "var(--color-text-muted)",
                borderRadius: 999,
                padding: "3px 10px",
              }}>
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
                }}>
                PROJECT
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
                  <span
                    key={tech}
                    style={{
                      fontSize: 10,
                      background: "var(--color-surface-3)",
                      color: "var(--color-text-muted)",
                      borderRadius: 999,
                      padding: "3px 10px",
                    }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
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
