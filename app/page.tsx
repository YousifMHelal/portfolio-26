"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Pacifico } from "next/font/google";

import DotNav from "@/components/layout/DotNav";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
    if (!floatingImageRef.current) {
      return;
    }

    if (isLoading) {
      return;
    }

    if (!isDesktop) {
      gsap.set(floatingImageRef.current, { display: "none" });
      ScrollTrigger.killAll();
      return;
    }

    gsap.set(floatingImageRef.current, { display: "block", opacity: 1 });

    const refreshTimeout = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleWindowLoad);

    const ctx = gsap.context(() => {
      const heroSlot = document.getElementById("hero-image-slot");
      const aboutSlot = document.getElementById("about-image-slot");
      const floatingEl = floatingImageRef.current;
      const startScale = isTablet ? 0.82 : 1.05;
      const endScale = isTablet ? 0.78 : 1;

      if (!heroSlot || !aboutSlot || !floatingEl) {
        return;
      }

      const getScaledBounds = (element: HTMLElement, scale: number) => {
        const rect = element.getBoundingClientRect();
        const width = rect.width * scale;
        const height = rect.height * scale;

        return {
          top: rect.top + (rect.height - height) / 2,
          left: rect.left + (rect.width - width) / 2,
          width,
          height,
        };
      };

      const setToHeroSlot = () => {
        const heroBounds = getScaledBounds(heroSlot, startScale);

        gsap.set(floatingEl, {
          position: "fixed",
          top: heroBounds.top,
          left: heroBounds.left,
          width: heroBounds.width,
          height: heroBounds.height,
          zIndex: 50,
          scale: 1,
          transformOrigin: "center top",
          willChange: "transform, top, left, width, height",
        });
      };

      setToHeroSlot();

      const travelTween = gsap.to(floatingEl, {
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
          onRefresh: () => {
            setToHeroSlot();
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const heroBounds = getScaledBounds(heroSlot, startScale);
            const aboutBounds = getScaledBounds(aboutSlot, endScale);

            gsap.set(floatingEl, {
              top: gsap.utils.interpolate(
                heroBounds.top,
                aboutBounds.top,
                progress,
              ),
              left: gsap.utils.interpolate(
                heroBounds.left,
                aboutBounds.left,
                progress,
              ),
              width: gsap.utils.interpolate(
                heroBounds.width,
                aboutBounds.width,
                progress,
              ),
              height: gsap.utils.interpolate(
                heroBounds.height,
                aboutBounds.height,
                progress,
              ),
              scale: 1,
            });
          },
        },
      });

      ScrollTrigger.create({
        trigger: "#about",
        start: "top top",
        invalidateOnRefresh: true,
        onEnter: () => {
          const aboutBounds = getScaledBounds(aboutSlot, endScale);

          gsap.set(floatingEl, {
            position: "fixed",
            top: aboutBounds.top,
            left: aboutBounds.left,
            width: aboutBounds.width,
            height: aboutBounds.height,
            scale: 1,
            opacity: 1,
            display: "block",
          });
        },
        onEnterBack: () => {
          const aboutBounds = getScaledBounds(aboutSlot, endScale);

          gsap.set(floatingEl, {
            position: "fixed",
            top: aboutBounds.top,
            left: aboutBounds.left,
            width: aboutBounds.width,
            height: aboutBounds.height,
            scale: 1,
            opacity: 1,
            display: "block",
          });
        },
        onLeaveBack: () => {
          const heroRect = document
            .getElementById("hero-image-slot")
            ?.getBoundingClientRect();

          if (!heroRect || !floatingImageRef.current) {
            return;
          }

          gsap.set(floatingImageRef.current, {
            position: "fixed",
            top: heroRect.top,
            left: heroRect.left,
            width: heroRect.width,
            height: heroRect.height,
            opacity: 1,
            display: "block",
          });

          travelTween.progress(0);
        },
      });

      ScrollTrigger.create({
        trigger: "#about",
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          if (!floatingImageRef.current) {
            return;
          }

          floatingImageRef.current.style.display = "block";
          gsap.to(floatingImageRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          if (!floatingImageRef.current) {
            return;
          }

          floatingImageRef.current.style.display = "block";
          gsap.to(floatingImageRef.current, {
            opacity: 1,
            duration: 0.2,
          });
        },
      });

      ScrollTrigger.create({
        trigger: "#projects",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          if (!floatingImageRef.current) {
            return;
          }

          gsap.to(floatingImageRef.current, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
              if (floatingImageRef.current) {
                floatingImageRef.current.style.display = "none";
              }
            },
          });
        },
        onLeaveBack: () => {
          if (!floatingImageRef.current) {
            return;
          }

          floatingImageRef.current.style.display = "block";
          gsap.to(floatingImageRef.current, {
            opacity: 1,
            duration: 0.4,
          });
        },
      });
    });

    return () => {
      ctx.revert();
      window.clearTimeout(refreshTimeout);
      window.removeEventListener("load", handleWindowLoad);
      ScrollTrigger.killAll();
    };
  }, [isDesktop, isLoading]);

  return (
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
  );
}
