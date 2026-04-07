"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

import { hero } from "@/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -6, skewX: 4 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const watermarkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!nameRef.current) {
      return;
    }

    const timeline = gsap.timeline();

    timeline
      .to(nameRef.current, { skewX: 10, duration: 0.08, ease: "power1.inOut" })
      .to(nameRef.current, { skewX: -6, duration: 0.06 })
      .to(nameRef.current, { skewX: 4, duration: 0.05 })
      .to(nameRef.current, { skewX: 0, duration: 0.07 })
      .to(nameRef.current, { opacity: 0.6, duration: 0.05 })
      .to(nameRef.current, { opacity: 1, duration: 0.05 })
      .to(nameRef.current, { skewX: -2, duration: 0.04 })
      .to(nameRef.current, { skewX: 0, duration: 0.06 });

    return () => {
      timeline.kill();
    };
  }, []);

  useEffect(() => {
    if (!watermarkRef.current) {
      return;
    }

    gsap.to(watermarkRef.current, {
      x: "-50%",
      duration: 18,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen overflow-hidden bg-bg text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
        <div
          ref={watermarkRef}
          className="flex w-max flex-row whitespace-nowrap"
          style={{
            fontSize: "clamp(120px, 18vw, 220px)",
            fontWeight: 900,
            color: "var(--color-watermark)",
            letterSpacing: "-4px",
            textTransform: "uppercase",
          }}>
          <span className="mx-3">{hero.backgroundText}</span>
          <span className="mx-3">{hero.backgroundText}</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6">
        <div className="flex min-h-screen flex-col md:flex-row">
          <div className="hero-left-column relative flex min-h-[58vh] flex-1 overflow-hidden md:min-h-screen md:w-[55%]">
            <div className="relative z-10 flex w-full flex-col pt-5 md:pt-6">
              <motion.div
                className="flex flex-1 items-center pb-10 pt-12 md:pb-14 md:pt-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <div className="relative max-w-2xl">
                  <motion.p
                    className="max-w-sm text-[0.9rem] font-medium uppercase tracking-[0.34em] text-white"
                    variants={itemVariants}>
                    <span className="font-mono text-border-light">&lt;</span>
                    <span className="font-mono text-accent">
                      {hero.role.replace(" ", "_")}
                    </span>
                    <span className="font-mono text-border-light"> /&gt;</span>
                  </motion.p>

                  <motion.h1
                    ref={nameRef}
                    className="glitch-name mt-5 whitespace-normal text-[clamp(2.8rem,5vw,6.6rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white md:mt-6 md:whitespace-nowrap z-50"
                    style={{ boxShadow: "0 0 40px var(--color-accent-glow)" }}
                    variants={itemVariants}>
                    {hero.name}
                  </motion.h1>

                  <motion.p
                    className="mt-6 max-w-md text-[1rem] leading-7 text-muted md:mt-7"
                    variants={itemVariants}>
                    {hero.bio}
                  </motion.p>

                  <motion.div className="mt-5 mb-6" variants={itemVariants}>
                    <Image
                      src={hero.signatureImage}
                      alt="Yousif Signature"
                      width={200}
                      height={80}
                      className="h-auto w-50 object-contain opacity-90"
                      style={{ filter: "invert(1)" }}
                    />
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap items-center gap-4"
                    variants={itemVariants}>
                    {hero.ctas.map((cta) => {
                      const isPrimary = cta.variant === "solid";

                      return (
                        <a
                          key={cta.label}
                          href={cta.href}
                          className={
                            isPrimary
                              ? "inline-flex min-w-44 items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-bg transition duration-300 hover:scale-105 hover:border-accent-dim hover:bg-accent-dim"
                              : "inline-flex min-w-44 items-center justify-center rounded-full border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-accent hover:text-accent"
                          }>
                          {cta.label}
                        </a>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            id="hero-image"
            className="hero-right-column relative min-h-[42vh] flex-1 overflow-hidden md:min-h-screen md:w-[45%] lg:[clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]">
            <div
              id="hero-image-slot"
              className="relative h-full w-full overflow-hidden">
              <div className="hero-image-fallback relative h-full w-full">
                <Image
                  src={hero.portraitImage}
                  alt="Yousif Mamdouh"
                  fill
                  priority
                  sizes="(min-width: 1280px) 45vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover object-top md:object-contain xl:object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
