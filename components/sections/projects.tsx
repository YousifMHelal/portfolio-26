import type { CSSProperties } from "react";

import ProjectCard from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data";

// Desktop bento placement on a 12-column grid, in project order.
// Below 1024px the grid collapses (see .bento-grid in globals.css).
const bentoSlots: Pick<CSSProperties, "gridColumn" | "gridRow">[] = [
  { gridColumn: "1 / 9", gridRow: "1 / 2" },
  { gridColumn: "9 / 13", gridRow: "1 / 3" },
  { gridColumn: "1 / 5", gridRow: "2 / 3" },
  { gridColumn: "5 / 9", gridRow: "2 / 3" },
  { gridColumn: "1 / 5", gridRow: "3 / 4" },
  { gridColumn: "5 / 13", gridRow: "3 / 4" },
  { gridColumn: "1 / 7", gridRow: "4 / 5" },
  { gridColumn: "7 / 13", gridRow: "4 / 5" },
];

const cellStyle: CSSProperties = {
  borderRadius: "16px",
  border: "1px solid var(--color-border)",
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px clamp(24px, 5vw, 80px)",
        background: "var(--color-bg)",
        width: "100%",
        boxSizing: "border-box",
      }}>
      <SectionHeading
        tag="PROJECTS"
        title="Things I've built"
        description="Production platforms I've built at ElectroPi, plus personal projects that reflect my passion for building modern web experiences."
        className="mb-12"
      />

      <div
        className="bento-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "320px",
          gap: "12px",
          width: "100%",
        }}>
        {projects.slice(0, bentoSlots.length).map((project, index) => (
          <div key={project.id} style={{ ...cellStyle, ...bentoSlots[index] }}>
            {/* Stagger within each visual row (cards enter in rows of 2-3). */}
            <ProjectCard project={project} revealDelay={(index % 3) * 0.08} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "48px", textAlign: "center" }}>
        <a
          href="https://github.com/YousifMHelal"
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "12px",
            letterSpacing: "3px",
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: "4px",
          }}>
          VIEW ALL ON GITHUB -&gt;
        </a>
      </div>
    </section>
  );
}
