"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import DotNav from "@/components/layout/DotNav";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/contact";
import { hero } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const floatingImageRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 767px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!floatingImageRef.current) {
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

      if (!heroSlot || !aboutSlot || !floatingEl) {
        return;
      }

      const setToHeroSlot = () => {
        const heroRect = heroSlot.getBoundingClientRect();

        gsap.set(floatingEl, {
          position: "fixed",
          top: heroRect.top,
          left: heroRect.left,
          width: heroRect.width,
          height: heroRect.height,
          zIndex: 50,
          scale: 1.05,
          transformOrigin: "center top",
          willChange: "transform, top, left, width, height",
        });
      };

      setToHeroSlot();

      const travelTween = gsap.to(floatingEl, {
        ease: "none",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
          onRefresh: () => {
            setToHeroSlot();
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const heroRect = heroSlot.getBoundingClientRect();
            const aboutRect = aboutSlot.getBoundingClientRect();

            gsap.set(floatingEl, {
              top: gsap.utils.interpolate(
                heroRect.top,
                aboutRect.top,
                progress,
              ),
              left: gsap.utils.interpolate(
                heroRect.left,
                aboutRect.left,
                progress,
              ),
              width: gsap.utils.interpolate(
                heroRect.width,
                aboutRect.width,
                progress,
              ),
              height: gsap.utils.interpolate(
                heroRect.height,
                aboutRect.height,
                progress,
              ),
              scale: gsap.utils.interpolate(1.05, 1, progress),
            });
          },
        },
      });

      ScrollTrigger.create({
        trigger: "#about-section",
        start: "top top",
        invalidateOnRefresh: true,
        onEnter: () => {
          const aboutRect = aboutSlot.getBoundingClientRect();

          gsap.set(floatingEl, {
            position: "fixed",
            top: aboutRect.top,
            left: aboutRect.left,
            width: aboutRect.width,
            height: aboutRect.height,
            scale: 1,
            opacity: 1,
            display: "block",
          });
        },
        onEnterBack: () => {
          const aboutRect = aboutSlot.getBoundingClientRect();

          gsap.set(floatingEl, {
            position: "fixed",
            top: aboutRect.top,
            left: aboutRect.left,
            width: aboutRect.width,
            height: aboutRect.height,
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
        trigger: "#about-section",
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
        trigger: "#projects-section",
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
  }, [isDesktop]);

  return (
    <main className="min-h-screen bg-bg text-white">
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
            objectFit: "cover",
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
    </main>
  );
}
