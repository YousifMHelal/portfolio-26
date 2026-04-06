"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { id: "hero-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "projects-section", label: "Projects" },
  { id: "skills-section", label: "Skills" },
  { id: "contact-section", label: "Contact" },
];

const socialLinks = [
  { label: "GitHub", url: "https://github.com/YousifMHelal", color: "#ffffff" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/yousifmhelal/",
    color: "#0077b5",
  },
  { label: "WhatsApp", url: "https://wa.me/+20XXXXXXXXXX", color: "#25D366" },
  {
    label: "Facebook",
    url: "https://www.facebook.com/YOUR_PROFILE",
    color: "#1877F2",
  },
];

const scrollToSection = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function Footer() {
  return (
    <footer
      id="footer-section"
      style={{
        width: "100%",
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        padding: "64px clamp(24px, 5vw, 80px) 32px",
      }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
          }}>
          <div className="footer-left">
            <Image
              src="/assets/signature.png"
              alt="Yousif Mamdouh"
              width={180}
              height={72}
              style={{
                objectFit: "contain",
                filter: "invert(1)",
                opacity: 0.9,
              }}
            />

            <p
              style={{
                fontSize: "13px",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginTop: "12px",
                maxWidth: "240px",
              }}>
              A passionate web developer crafting modern and interactive digital
              experiences.
            </p>

            <div
              style={{
                background: "rgba(0, 212, 255, 0.08)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                borderRadius: "999px",
                padding: "4px 12px",
                marginTop: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}>
              <span
                aria-hidden="true"
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#00ff88",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--color-accent)",
                  letterSpacing: "1px",
                }}>
                Available for work
              </span>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "var(--color-text-dim)",
                marginBottom: "20px",
              }}>
              NAVIGATION
            </p>

            <div style={{ display: "grid", gap: "12px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-muted)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "var(--color-text-muted)";
                  }}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "var(--color-text-dim)",
                marginBottom: "20px",
              }}>
              FIND ME ON
            </p>

            <motion.div
              style={{ display: "grid", gap: "12px" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "var(--color-text-muted)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "var(--color-text-muted)";
                  }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: social.color,
                    }}
                  />
                  {social.label}
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              whileHover={{
                y: -2,
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                marginTop: "32px",
                fontSize: "11px",
                letterSpacing: "2px",
                color: "var(--color-text-muted)",
                border: "1px solid var(--color-border)",
                borderRadius: "999px",
                padding: "8px 20px",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}>
              ↑ BACK TO TOP
            </motion.button>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}>
          <p style={{ fontSize: "12px", color: "var(--color-text-dim)" }}>
            © 2026 Yousif Mamdouh · All rights reserved
          </p>

          <p style={{ fontSize: "12px", color: "var(--color-text-dim)" }}>
            Built with Next.js · TypeScript · Tailwind
          </p>

          <p style={{ fontSize: "12px", color: "var(--color-text-dim)" }}>
            Designed &amp; Developed by{" "}
            <span style={{ color: "var(--color-accent)" }}>Yousif</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
