type SectionTagProps = {
  name: string;
  closing?: boolean;
  className?: string;
};

/** Code-style section label, e.g. `<PROJECTS>` or `</CONTACT>`. */
export function SectionTag({ name, closing = false, className }: SectionTagProps) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "15px",
        fontWeight: 500,
        letterSpacing: "2px",
        fontFamily: "var(--font-mono)",
      }}>
      <span style={{ color: "var(--color-border-light)" }}>
        {closing ? "</" : "<"}
      </span>
      <span style={{ color: "var(--color-accent)" }}>{name}</span>
      <span style={{ color: "var(--color-border-light)" }}>&gt;</span>
    </div>
  );
}
