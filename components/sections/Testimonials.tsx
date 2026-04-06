"use client";

import { motion } from "framer-motion";

import { testimonials } from "@/data";
import type { Testimonial } from "@/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function FeaturedCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ borderColor: "var(--color-accent)" }}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "20px",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-accent)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(0, 212, 255, 0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
      }}>
      <span
        aria-hidden="true"
        style={{
          fontSize: "160px",
          color: "var(--color-surface-2)",
          position: "absolute",
          top: "-20px",
          left: "24px",
          lineHeight: 1,
          pointerEvents: "none",
        }}>
        ❝
      </span>

      <p
        style={{
          fontSize: "clamp(16px, 2vw, 22px)",
          color: "white",
          lineHeight: 1.8,
          fontStyle: "italic",
          position: "relative",
          zIndex: 1,
          marginTop: "48px",
        }}>
        {testimonial.quote}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "32px",
          position: "relative",
          zIndex: 1,
        }}>
        <span
          aria-hidden="true"
          style={{
            width: "40px",
            height: "2px",
            background: "var(--color-accent)",
          }}
        />
        <span
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--color-accent)",
            letterSpacing: "1px",
          }}>
          {testimonial.name}
        </span>
      </div>

      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

type SideCardProps = {
  testimonial: Testimonial;
  index: number;
};

function SideCard({ testimonial, index }: SideCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ borderColor: "var(--color-accent)" }}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "16px",
        padding: "28px",
        flex: 1,
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-accent)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(0, 212, 255, 0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
      }}>
      <span
        aria-hidden="true"
        style={{
          fontSize: "64px",
          color: "var(--color-surface-2)",
          position: "absolute",
          top: "-8px",
          left: "16px",
          lineHeight: 1,
          pointerEvents: "none",
        }}>
        ❝
      </span>

      <p
        style={{
          fontSize: "14px",
          color: "var(--color-text-muted)",
          lineHeight: 1.7,
          fontStyle: "italic",
          position: "relative",
          zIndex: 1,
          marginTop: "24px",
        }}>
        {testimonial.quote}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
          position: "relative",
          zIndex: 1,
        }}>
        <span
          aria-hidden="true"
          style={{
            width: "24px",
            height: "2px",
            background: "var(--color-accent)",
          }}
        />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "var(--color-accent)",
          }}>
          {testimonial.name}
        </span>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials-section"
      style={{
        padding: "80px clamp(24px, 5vw, 80px)",
        background: "var(--color-bg)",
        width: "100%",
        boxSizing: "border-box",
      }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ marginBottom: "48px" }}>
        <span className="font-mono text-border-light">&lt;</span>
        <span className="font-mono text-accent">{"TESTIMONIALS"}</span>
        <span className="font-mono text-border-light"> /&gt;</span>
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 80px)",
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
          }}>
          WHAT PEOPLE SAY
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "15px",
            marginTop: "12px",
            maxWidth: "480px",
          }}>
          Kind words from people I&apos;ve had the pleasure of working with.
        </p>
      </motion.div>

      <div
        className="testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "6fr 4fr",
          gap: "16px",
          width: "100%",
          marginTop: "48px",
        }}>
        <FeaturedCard testimonial={testimonials[0]} />

        <div
          className="testimonials-side"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <SideCard testimonial={testimonials[1]} index={0} />
          <SideCard testimonial={testimonials[2]} index={1} />
        </div>
      </div>
    </section>
  );
}
