import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data";

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
      <div style={{ marginBottom: "48px" }}>
        <span
          style={{
            color: "var(--color-accent)",
            fontSize: "18px",
            letterSpacing: "4px",
          }}>
          {"## PROJECTS"}
        </span>
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 80px)",
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
          }}>
          THINGS I&apos;VE BUILT
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "15px",
            marginTop: "12px",
          }}>
          A collection of projects that reflect my passion for building modern
          web experiences.
        </p>
      </div>

      <div
        className="bento-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(3, 320px)",
          gap: "12px",
          width: "100%",
        }}>
        <div
          style={{
            gridColumn: "1 / 9",
            gridRow: "1 / 2",
            background: "linear-gradient(135deg, #001a33, #003366)",
            borderRadius: "16px",
            border: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}>
          <ProjectCard project={projects[0]} />
        </div>

        <div
          style={{
            gridColumn: "9 / 13",
            gridRow: "1 / 3",
            background: "linear-gradient(135deg, #001a1a, #003333)",
            borderRadius: "16px",
            border: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}>
          <ProjectCard project={projects[1]} />
        </div>

        <div
          style={{
            gridColumn: "1 / 5",
            gridRow: "2 / 3",
            background: "linear-gradient(135deg, #1a0010, #330020)",
            borderRadius: "16px",
            border: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}>
          <ProjectCard project={projects[2]} />
        </div>

        <div
          style={{
            gridColumn: "5 / 9",
            gridRow: "2 / 3",
            background: "linear-gradient(135deg, #1a1000, #332200)",
            borderRadius: "16px",
            border: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}>
          <ProjectCard project={projects[3]} />
        </div>

        <div
          style={{
            gridColumn: "1 / 5",
            gridRow: "3 / 4",
            background: "linear-gradient(135deg, #001a0d, #003320)",
            borderRadius: "16px",
            border: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}>
          <ProjectCard project={projects[4]} />
        </div>

        <div
          style={{
            gridColumn: "5 / 13",
            gridRow: "3 / 4",
            background: "linear-gradient(135deg, #0d001a, #1a0033)",
            borderRadius: "16px",
            border: "1px solid var(--color-border)",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}>
          <ProjectCard project={projects[5]} />
        </div>
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
