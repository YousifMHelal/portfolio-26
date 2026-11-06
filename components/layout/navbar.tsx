"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  House,
  Mail,
  MessageSquareQuote,
  UserRound,
} from "lucide-react";

const desktopNavLinks = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "testimonials", label: "TESTIMONIALS" },
  { id: "contact", label: "CONTACT" },
] as const;

const mobileNavLinks = [
  { id: "hero", label: "Home", icon: House },
  { id: "about", label: "About", icon: UserRound },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "testimonials", label: "Reviews", icon: MessageSquareQuote },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

type NavSectionId = (typeof desktopNavLinks)[number]["id"];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<NavSectionId>("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let current: NavSectionId = desktopNavLinks[0].id;

      desktopNavLinks.forEach(({ id }) => {
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

  const scrollToSection = (id: NavSectionId) => {
    setActiveSection(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={
          isScrolled
            ? "fixed left-1/2 top-4 z-100 hidden w-full max-w-7xl -translate-x-1/2 rounded-2xl bg-black/35 px-6 py-2 backdrop-blur-md transition-all duration-300 md:block"
            : "fixed left-1/2 top-6 z-100 hidden w-full max-w-7xl -translate-x-1/2 px-6 transition-all duration-300 md:block"
        }>
        <nav
          aria-label="Primary"
          className="mx-auto flex w-max items-center gap-3 md:gap-5">
          {desktopNavLinks.map(({ id, label }) => {
            const active = activeSection === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={active ? "true" : undefined}
                className={
                  active
                    ? "relative cursor-pointer rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-text transition-colors duration-300 md:px-5 md:text-[13px]"
                    : "relative cursor-pointer rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[2px] text-text-muted transition-colors duration-300 hover:text-accent md:px-5 md:text-[13px]"
                }>
                {active ? (
                  // Shared layoutId: framer slides this pill between items.
                  <motion.span
                    layoutId="nav-active-pill"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-border bg-surface"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </nav>
      </header>

      <nav
        aria-label="Mobile primary"
        className="fixed inset-x-4 bottom-4 z-100 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between rounded-2xl border border-white/10 bg-black/80 px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {mobileNavLinks.map(({ id, label, icon: Icon }) => {
            const active = activeSection === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                aria-label={`Go to ${label}`}
                aria-current={active ? "true" : undefined}
                className={
                  active
                    ? "relative flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-accent transition-colors duration-300"
                    : "relative flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-text-muted transition-colors duration-300 hover:text-accent"
                }>
                {active ? (
                  <motion.span
                    layoutId="mobile-nav-active-pill"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-white/6"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <Icon size={18} strokeWidth={2.2} className="relative z-10" />
                <span className="relative z-10 text-[10px] font-medium tracking-wide">
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
