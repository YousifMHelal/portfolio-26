"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { about, hero, timeline } from "@/data";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
} as const;

export function AboutSection() {
  return (
    <section id="about-section" className="w-full min-h-screen bg-bg">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div
          id="about-image-receiver"
          className="relative min-h-screen h-full overflow-hidden bg-bg">
          <div
            id="about-image-slot"
            className="relative h-screen w-full overflow-hidden md:sticky md:top-0">
            <div className="about-image-fallback relative h-full w-full">
              <Image
                src={hero.portraitImage}
                alt="Yousif Mamdouh"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>

        <div
          className="relative"
          style={{ padding: "clamp(60px, 8vw, 120px) clamp(40px, 5vw, 80px)" }}>
          <motion.div
            className="mb-4 inline-flex items-center gap-1 text-[15px] font-medium tracking-[2px]"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}>
            <span className="font-mono text-border-light">&lt;</span>
            <span className="font-mono text-accent">
              {about.label.replace(" ", "_")}
            </span>
            <span className="font-mono text-border-light">&gt;</span>
          </motion.div>

          <motion.h2
            className="text-[clamp(36px,5vw,64px)] font-black uppercase leading-[0.95] text-text"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}>
            {about.heading}
          </motion.h2>

          <motion.p
            className="mt-6 max-w-120 text-[15px] leading-[1.8] text-text-muted"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
            {about.bio}
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {about.stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                className="rounded-xl border border-border bg-surface p-5 transition duration-300 hover:border-accent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}>
                <p className="text-[28px] font-black text-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-[2px] text-text-muted">
                  {stat.label}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-14">
            <motion.h3
              className="mb-8 ml-4 inline-flex items-center gap-1 text-[15px] font-medium tracking-[2px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}>
              <span className="font-mono text-border-light">&lt;</span>
              <span className="font-mono text-accent">
                {about.journeyTitle.replace(" ", "_")}
              </span>
              <span className="font-mono text-border-light">&gt;</span>
            </motion.h3>

            <div className="border-l-2 border-border pl-6">
              {timeline.map((item, index) => (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  className="relative mb-10 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}>
                  <span className="absolute -left-7.75 top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-[11px] tracking-[2px] text-accent">
                    {item.year}
                  </p>
                  <h4 className="mt-2 text-[16px] font-bold text-text">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[13px] text-text-muted">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 max-w-140 text-[13px] leading-[1.7] text-text-muted">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="mt-8 ml-4 inline-flex items-center gap-1 text-[15px] font-medium tracking-[2px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}>
              <span className="font-mono text-border-light">&lt;/</span>
              <span className="font-mono text-accent">
                {about.journeyTitle.replace(" ", "_")}
              </span>
              <span className="font-mono text-border-light">&gt;</span>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 inline-flex items-center gap-1 text-[15px] font-medium tracking-[2px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <span className="font-mono text-border-light">&lt;/</span>
            <span className="font-mono text-accent">
              {about.label.replace(" ", "_")}
            </span>
            <span className="font-mono text-border-light">&gt;</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
