"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const sections = [
  { id: "hero-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "projects-section", label: "Projects" },
  { id: "skills-section", label: "Skills" },
  { id: "contact-section", label: "Contact" },
] as const;

export default function DotNav() {
  const [activeSection, setActiveSection] = useState("hero-section");

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);

      if (!el) {
        return null;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 },
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        observer?.disconnect();
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
