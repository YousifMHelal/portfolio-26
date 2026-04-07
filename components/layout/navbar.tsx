"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { id: "hero-section", label: "HOME" },
  { id: "about-section", label: "ABOUT" },
  { id: "projects-section", label: "PROJECTS" },
  { id: "skills-section", label: "SKILLS" },
  { id: "testimonials-section", label: "TESTIMONIALS" },
  { id: "contact-section", label: "CONTACT" },
] as const;

type NavSectionId = (typeof navLinks)[number]["id"];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero-section");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let current: NavSectionId = navLinks[0].id;

      navLinks.forEach(({ id }) => {
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
    <header
      className={
        isScrolled
          ? "fixed left-1/2 top-4 z-100 w-full max-w-7xl -translate-x-1/2 rounded-2xl  bg-black/35 px-6 py-2 backdrop-blur-md transition-all duration-300"
          : "fixed left-1/2 top-6 z-100 w-full max-w-7xl -translate-x-1/2 px-6 transition-all duration-300"
      }>
      <nav
        aria-label="Primary"
        className="mx-auto flex w-max items-center gap-3 md:gap-5">
        {navLinks.map(({ id, label }) => {
          const active = activeSection === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className={
                active
                  ? "cursor-pointer rounded-full border border-border bg-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-text transition-all duration-300 md:px-6 md:text-[13px]"
                  : "cursor-pointer rounded-full border border-transparent px-3 py-2 text-[11px] font-medium uppercase tracking-[2px] text-text-muted transition-all duration-300 hover:text-accent md:px-4 md:text-[13px]"
              }>
              {label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
