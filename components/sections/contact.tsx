"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { contactData } from "@/data";

const cardStyle: React.CSSProperties = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "16px",
  padding: "32px",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100%",
};

const labelStyle: React.CSSProperties = {
  color: "var(--color-accent)",
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontWeight: 700,
};

const arrowStyle: React.CSSProperties = {
  position: "absolute",
  right: "24px",
  bottom: "20px",
  color: "var(--color-accent)",
  fontSize: "22px",
  fontWeight: 700,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Contact() {
  const [isCVHovered, setIsCVHovered] = useState(false);

  const handleEmailClick = () => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${contactData.email}`;
    const openedWindow = window.open(gmailComposeUrl, "_blank");

    if (!openedWindow) {
      window.location.href = `mailto:${contactData.email}`;
    }
  };

  return (
    <section
      id="contact-section"
      style={{
        padding: "80px clamp(24px, 5vw, 80px)",
        background: "var(--color-bg)",
        width: "100%",
        boxSizing: "border-box",
      }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ marginBottom: "48px" }}>
        <div
          style={{
            marginBottom: "8px",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "2px",
            fontFamily: "var(--font-mono)",
          }}>
          <span style={{ color: "var(--color-border-light)" }}>&lt;</span>
          <span style={{ color: "var(--color-accent)" }}>CONTACT</span>
          <span style={{ color: "var(--color-border-light)" }}>&gt;</span>
        </div>
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 80px)",
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
          }}>
          LET&apos;S WORK TOGETHER
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "15px",
            marginTop: "12px",
            maxWidth: "480px",
          }}>
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
      </motion.div>

      <motion.div
        className="contact-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "280px 280px",
          gap: "12px",
          width: "100%",
          marginTop: "48px",
        }}>
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            ...cardStyle,
            gridColumn: "1 / 6",
            gridRow: "1 / 2",
          }}
          onClick={handleEmailClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(0, 212, 255, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}>
          <div>
            <span style={labelStyle}>EMAIL</span>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "white",
                marginTop: "16px",
                maxWidth: "90%",
                wordBreak: "break-all",
              }}>
              {contactData.email}
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                marginTop: "8px",
              }}>
              Drop me a message anytime
            </p>
          </div>
          <span
            aria-hidden="true"
            style={{
              fontSize: "120px",
              fontWeight: 900,
              color: "var(--color-surface-2)",
              position: "absolute",
              bottom: "-20px",
              right: "16px",
              lineHeight: 1,
            }}>
            @
          </span>
          <span style={arrowStyle}>-&gt;</span>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            ...cardStyle,
            gridColumn: "6 / 9",
            gridRow: "1 / 2",
            alignItems: "center",
          }}
          onClick={() => {
            window.open(contactData.github, "_blank", "noopener,noreferrer");
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(0, 212, 255, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}>
          <div style={{ width: "100%" }}>
            <span style={labelStyle}>GITHUB</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.08 1.85 2.82 1.32 3.51 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.22a11.6 11.6 0 0 1 6.03 0c2.3-1.54 3.31-1.22 3.31-1.22.66 1.65.24 2.87.12 3.17.77.83 1.24 1.89 1.24 3.2 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5" />
            </svg>
            <p
              style={{
                fontSize: "14px",
                color: "white",
                fontWeight: 600,
                marginTop: "12px",
              }}>
              {contactData.githubUsername}
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                marginTop: "8px",
              }}>
              Check out my repos
            </p>
          </div>
          <span style={arrowStyle}>-&gt;</span>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            ...cardStyle,
            gridColumn: "9 / 13",
            gridRow: "1 / 2",
            alignItems: "center",
          }}
          onClick={() => {
            window.open(contactData.linkedin, "_blank", "noopener,noreferrer");
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(0, 212, 255, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}>
          <div style={{ width: "100%" }}>
            <span style={labelStyle}>LINKEDIN</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#0077b5"
              aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.19h.05c.53-1.01 1.84-2.08 3.79-2.08C19.23 8.11 24 10.66 24 17.08V24h-4v-6.05c0-2.4-.05-5.48-3.34-5.48-3.34 0-3.85 2.61-3.85 5.31V24h-4V8z" />
            </svg>
            <p
              style={{
                fontSize: "14px",
                color: "white",
                fontWeight: 700,
                marginTop: "12px",
              }}>
              {contactData.linkedinName}
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                marginTop: "8px",
              }}>
              Let&apos;s connect professionally
            </p>
          </div>
          <span style={arrowStyle}>-&gt;</span>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            ...cardStyle,
            gridColumn: "1 / 5",
            gridRow: "2 / 3",
            alignItems: "center",
          }}
          onClick={() => {
            window.open(contactData.whatsapp, "_blank", "noopener,noreferrer");
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(0, 212, 255, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}>
          <div style={{ width: "100%" }}>
            <span style={labelStyle}>WHATSAPP</span>
          </div>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#25D366"
              aria-hidden="true">
              <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05.02C5.5.02.16 5.35.16 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.29-1.65a11.84 11.84 0 0 0 5.76 1.47h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.44zm-8.47 18.3h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.9 9.9zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.65.15-.2.3-.75.97-.93 1.18-.17.2-.35.23-.64.08-.3-.15-1.26-.46-2.4-1.48a8.93 8.93 0 0 1-1.66-2.06c-.18-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.56c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.9 1.24 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.72.23 1.37.2 1.89.12.58-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35z" />
            </svg>
            <p
              style={{
                fontSize: "16px",
                color: "white",
                fontWeight: 600,
                marginTop: "12px",
              }}>
              Chat with me
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                marginTop: "8px",
              }}>
              Quick replies guaranteed
            </p>
          </div>
          <svg
            aria-hidden="true"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="var(--color-surface-2)"
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "16px",
            }}>
            <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05.02C5.5.02.16 5.35.16 11.91c0 2.1.55 4.16 1.6 5.98L0 24l6.29-1.65a11.84 11.84 0 0 0 5.76 1.47h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.17-3.43-8.44zm-8.47 18.3h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.73.98.99-3.64-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.46-4.44 9.9-9.9 9.9zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.65.15-.2.3-.75.97-.93 1.18-.17.2-.35.23-.64.08-.3-.15-1.26-.46-2.4-1.48a8.93 8.93 0 0 1-1.66-2.06c-.18-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.56c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.9 1.24 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.72.23 1.37.2 1.89.12.58-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35z" />
          </svg>
          <span style={arrowStyle}>-&gt;</span>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            ...cardStyle,
            gridColumn: "5 / 9",
            gridRow: "2 / 3",
            alignItems: "center",
          }}
          onClick={() => {
            window.open(contactData.facebook, "_blank", "noopener,noreferrer");
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(0, 212, 255, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}>
          <div style={{ width: "100%" }}>
            <span style={labelStyle}>FACEBOOK</span>
          </div>
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="#1877F2"
              aria-hidden="true">
              <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08V12.1h3.05V9.47c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.46h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
            </svg>
            <p
              style={{
                fontSize: "14px",
                color: "white",
                fontWeight: 700,
                marginTop: "12px",
              }}>
              Yousif Mamdouh
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                marginTop: "8px",
              }}>
              Find me on Facebook
            </p>
          </div>
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "16px",
              bottom: "-20px",
              fontSize: "140px",
              fontWeight: 900,
              color: "var(--color-surface-2)",
              lineHeight: 1,
            }}>
            f
          </span>
          <span style={arrowStyle}>-&gt;</span>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            ...cardStyle,
            gridColumn: "9 / 13",
            gridRow: "2 / 3",
          }}
          onHoverStart={() => setIsCVHovered(true)}
          onHoverEnd={() => setIsCVHovered(false)}
          onClick={() => {
            window.open(contactData.cvPath, "_blank", "noopener,noreferrer");
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(0, 212, 255, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}>
          <div>
            <span style={labelStyle}>RESUME</span>
          </div>
          <div style={{ zIndex: 1 }}>
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              animate={isCVHovered ? { y: [0, -6, 0] } : { y: 0 }}
              transition={
                isCVHovered
                  ? { repeat: Infinity, duration: 1, ease: "easeInOut" }
                  : { duration: 0.2 }
              }>
              <path d="M12 3v11" />
              <path d="m7 11 5 5 5-5" />
              <path d="M5 21h14" />
            </motion.svg>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "white",
                marginTop: "14px",
              }}>
              Download My CV
            </h3>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "13px",
                marginTop: "8px",
              }}>
              Get a copy of my resume
            </p>

            {/* Place your CV PDF at public/assets/cv.pdf */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  contactData.cvPath,
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
              style={{
                marginTop: "20px",
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
                borderRadius: "999px",
                padding: "10px 24px",
                fontSize: "12px",
                letterSpacing: "2px",
                background: "transparent",
                cursor: "pointer",
                fontWeight: 700,
              }}>
              DOWNLOAD CV
            </button>
          </div>

          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "24px",
              bottom: "-30px",
              fontSize: "140px",
              color: "var(--color-surface-2)",
              lineHeight: 1,
              fontWeight: 800,
            }}>
            v
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          marginTop: "40px",
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "15px",
          fontWeight: 500,
          letterSpacing: "2px",
          fontFamily: "var(--font-mono)",
        }}>
        <span style={{ color: "var(--color-border-light)" }}>&lt;/</span>
        <span style={{ color: "var(--color-accent)" }}>CONTACT</span>
        <span style={{ color: "var(--color-border-light)" }}>&gt;</span>
      </motion.div>
    </section>
  );
}
