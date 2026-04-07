"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const sections = [
  { id: "hero-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "projects-section", label: "Projects" },
  { id: "skills-section", label: "Skills" },
  { id: "testimonials-section", label: "Testimonials" },
  { id: "contact-section", label: "Contact" },
  { id: "footer-section", label: "Footer" },
] as const;

export default function DotNav() {
  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      const footer = document.getElementById("footer-section");

      if (footer) {
        const footerRect = footer.getBoundingClientRect();

        if (footerRect.top < window.innerHeight && footerRect.bottom > 0) {
          setActiveSection((prev) =>
            prev === "footer-section" ? prev : "footer-section",
          );
          return;
        }
      }

      let current = sections[0].id;

      const visibleSections = sections.filter(
        ({ id }) => id !== "footer-section",
      );

      visibleSections.forEach(({ id }) => {
        const el = document.getElementById(id);

        if (el && marker >= el.offsetTop) {
          current = id;
        }
      });

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed right-6 top-1/2 z-100 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
      {sections.map(({ id, label }) => (
        <motion.button
          key={id}
          type="button"
          onClick={() => scrollToSection(id)}
          title={label}
          aria-label={`Go to ${label}`}
          animate={{
            width: activeSection === id ? 10 : 8,
            height: activeSection === id ? 10 : 8,
            backgroundColor: activeSection === id ? "#00d4ff" : "#444444",
          }}
          whileHover={{
            backgroundColor: "#00d4ff",
            scale: 1.3,
          }}
          transition={{ duration: 0.3 }}
          className="block cursor-pointer rounded-full border-0 p-0"
        />
      ))}
    </div>
  );
}
