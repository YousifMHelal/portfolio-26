"use client";

import { useEffect, useRef, useState } from "react";

import { MotionConfig } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Pacifico } from "next/font/google";

import DotNav from "@/components/layout/DotNav";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/contact";
import { hero } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const loadingWord = "Welcome";
const loadingColors = [
  "var(--color-accent)",
  "#7dd3fc",
  "var(--color-accent-dim)",
  "var(--color-text)",
  "var(--color-text-muted)",
  "#38bdf8",
  "#f8fafc",
];

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

type Bounds = { top: number; left: number; width: number; height: number };

/**
 * Bounds of `element` shrunk/grown around its centre by `scale`, expressed in
 * viewport coordinates *at the moment the page is scrolled to `scrollY`*.
 * Measuring in document space keeps the result correct no matter where the
 * page is scrolled when ScrollTrigger refreshes.
 */
function boundsAtScroll(
  element: HTMLElement,
  docTop: number,
  scrollY: number,
  scale: number,
): Bounds {
  const rect = element.getBoundingClientRect();
  const width = rect.width * scale;
  const height = element.offsetHeight * scale;

  return {
    top: docTop - scrollY + (element.offsetHeight - height) / 2,
    left: rect.left + (rect.width - width) / 2,
    width,
    height,
  };
}

function docTopOf(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY;
}

export default function Home() {
  const floatingImageRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [typedWelcome, setTypedWelcome] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const originalScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      window.history.scrollRestoration = originalScrollRestoration;
    };
  }, []);

  useEffect(() => {
    let typingInterval: number | undefined;
    let revealTimeout: number | undefined;

    const startTimeout = window.setTimeout(() => {
      let currentIndex = 0;

      typingInterval = window.setInterval(() => {
        currentIndex += 1;
        setTypedWelcome(loadingWord.slice(0, currentIndex));

        if (currentIndex >= loadingWord.length) {
          if (typingInterval) {
            window.clearInterval(typingInterval);
          }

          revealTimeout = window.setTimeout(() => {
            setIsLoading(false);
          }, 550);
        }
      }, 120);
    }, 180);

    return () => {
      window.clearTimeout(startTimeout);

      if (typingInterval) {
        window.clearInterval(typingInterval);
      }

      if (revealTimeout) {
        window.clearTimeout(revealTimeout);
      }
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 767px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 767px) and (max-width: 1023px)",
    );

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    tabletQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      tabletQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const floatingEl = floatingImageRef.current;

    if (!floatingEl || isLoading) {
      return;
    }

    if (!isDesktop) {
      gsap.set(floatingEl, { display: "none" });
      ScrollTrigger.killAll();
      return;
    }

    const heroSection = document.getElementById("hero");
    const heroSlot = document.getElementById("hero-image-slot");
    const aboutReceiver = document.getElementById("about-image-receiver");
    const aboutSlot = document.getElementById("about-image-slot");

    if (!heroSection || !heroSlot || !aboutReceiver || !aboutSlot) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const startScale = isTablet ? 0.82 : 1.05;
    const endScale = isTablet ? 0.78 : 1;

    // Start: hero slot when the hero's top sits at the top of the viewport.
    // End:   about slot when the hero's bottom sits at the top of the viewport.
    // Both are cached here and only re-measured on refresh, never per frame.
    let from: Bounds = { top: 0, left: 0, width: 0, height: 0 };
    let to: Bounds = { top: 0, left: 0, width: 0, height: 0 };

    const measure = () => {
      const heroTop = docTopOf(heroSection);
      const heroBottom = heroTop + heroSection.offsetHeight;

      from = boundsAtScroll(heroSlot, docTopOf(heroSlot), heroTop, startScale);
      // The about slot is sticky, so measure its non-sticky parent's position.
      to = boundsAtScroll(
        aboutSlot,
        docTopOf(aboutReceiver),
        heroBottom,
        endScale,
      );

      gsap.set(floatingEl, { top: from.top, left: from.left });
    };

    const ctx = gsap.context(() => {
      measure();

      gsap.set(floatingEl, {
        display: "block",
        autoAlpha: 1,
        position: "fixed",
        zIndex: 50,
        transformOrigin: "center top",
        willChange: "transform, width, height",
      });

      // Position travels on the compositor (x/y); size eases with it.
      // `scrub` as a number smooths the motion behind the scrollbar.
      gsap.fromTo(
        floatingEl,
        {
          x: 0,
          y: 0,
          width: () => from.width,
          height: () => from.height,
        },
        {
          x: () => to.left - from.left,
          y: () => to.top - from.top,
          width: () => to.width,
          height: () => to.height,
          ease: "power2.inOut",
          immediateRender: true,
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: prefersReducedMotion ? true : 0.9,
            invalidateOnRefresh: true,
          },
        },
      );

      // Hand off to the in-flow about image once the about section starts
      // scrolling away. On desktop it sits exactly underneath, so the swap is
      // instant and invisible; on tablet it is hidden, so fade instead.
      const handOffDuration = isTablet ? 0.35 : 0;

      ScrollTrigger.create({
        trigger: "#projects",
        start: "top bottom",
        onEnter: () => {
          gsap.to(floatingEl, {
            autoAlpha: 0,
            duration: handOffDuration,
            ease: "power1.out",
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(floatingEl, {
            autoAlpha: 1,
            duration: handOffDuration,
            ease: "power1.out",
            overwrite: "auto",
          });
        },
      });
    });

    ScrollTrigger.addEventListener("refreshInit", measure);

    const refreshTimeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", measure);
      ctx.revert();
      window.clearTimeout(refreshTimeout);
      window.removeEventListener("load", handleWindowLoad);
      ScrollTrigger.killAll();
    };
  }, [isDesktop, isTablet, isLoading]);

  return (
    // reducedMotion="user": framer-motion skips transform animations for
    // visitors with the OS "reduce motion" setting on.
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-bg pb-24 text-white md:pb-0">
      {isLoading ? (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black"
          style={{ zIndex: 1000 }}>
          <div className="flex flex-col items-center gap-4 px-6 text-center">
            <div
              className={`typing-welcome ${pacifico.className} flex items-end whitespace-nowrap text-[clamp(3.5rem,12vw,8rem)] font-semibold leading-none`}
              aria-label={loadingWord}>
              {typedWelcome.split("").map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  style={{
                    color: loadingColors[index % loadingColors.length],
                  }}>
                  {character}
                </span>
              ))}
              <span aria-hidden="true" className="typing-cursor" />
            </div>
          </div>
        </div>
      ) : null}

      {!isLoading ? (
        <>
          <ScrollProgress />
          <Navbar />
          <DotNav />

          <div
            ref={floatingImageRef}
            className="floating-hero-image pointer-events-none"
            style={{
              overflow: "hidden",
              background: "transparent",
              position: "fixed",
              borderRadius: 0,
            }}>
            <Image
              src={hero.portraitImage}
              alt="Yousif Mamdouh"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{
                objectFit: isTablet ? "contain" : "cover",
                objectPosition: "center top",
                background: "transparent",
              }}
            />
          </div>

          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      ) : null}
    </main>
    </MotionConfig>
  );
}
