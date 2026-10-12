// src/components/Hero.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { hero, profile } from "@/data/portfolio";

// Divider placement for the impact strip: 2×2 on mobile, 1×4 from md.
const STRIP_CELL = [
  "pl-0",
  "border-l",
  "border-t md:border-t-0 md:border-l pl-0 md:pl-8",
  "border-t md:border-t-0 border-l",
];

export default function Hero() {
  const eyebrowParts = hero.eyebrow.split("•").map((s) => s.trim());
  // Accent only the key phrase of the second headline line ("to" stays ink).
  const [lead, ...accent] = hero.headline[1].split(" ");

  return (
    <section id="home" className="relative bg-page pt-[11rem] md:pt-[14rem] pb-14 md:pb-16 overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <p className="text-[1.3rem] font-medium text-muted mb-7 tracking-[0.02em]">
              {eyebrowParts.map((part, i) => (
                <span key={part}>
                  {i > 0 && <span className="mx-2 text-slate-300" aria-hidden="true">·</span>}
                  <span className={i === 0 ? "font-semibold uppercase tracking-[0.08em] text-navy" : ""}>{part}</span>
                </span>
              ))}
            </p>

            {/* Headline */}
            <h1 className="text-[4rem] sm:text-[5.2rem] xl:text-[6.2rem] font-[720] tracking-[-0.035em] leading-[1.07] text-ink mb-8">
              {hero.headline[0]}
              <br />
              {lead} <span className="text-cobalt">{accent.join(" ")}</span>
            </h1>

            {/* Body */}
            <p className="max-w-[64rem] text-[1.7rem] md:text-[1.85rem] text-body leading-[1.7] mb-10">
              {hero.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#case-studies" className="btn-primary">
                View Case Studies <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download CV <FileText size={17} aria-hidden="true" />
              </a>
            </div>

            {/* Capability line — deliberately quiet */}
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[1.3rem] font-medium text-muted" aria-label="Capabilities">
              {hero.capabilities.map((c, i) => (
                <li key={c} className="flex items-center gap-2">
                  {i > 0 && <span className="text-slate-300" aria-hidden="true">·</span>}
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[34rem] sm:max-w-[38rem] lg:max-w-[44rem]">
              {/* One very subtle pale shape behind the photo */}
              <div
                className="absolute -right-5 -bottom-5 sm:-right-7 sm:-bottom-7 w-[86%] h-[86%] rounded-panel bg-pale"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] rounded-panel overflow-hidden border border-[rgba(15,23,42,0.06)] bg-alt shadow-image">
                <Image
                  src={profile.portrait.src}
                  alt={profile.portrait.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, (min-width: 640px) 380px, 90vw"
                  className="object-cover object-[center_15%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Impact strip */}
        <ul className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-y border-divider" aria-label="Impact metrics">
          {hero.metrics.map((m, i) => (
            <li key={m.label} className={`py-7 md:py-8 px-5 md:px-8 border-divider ${STRIP_CELL[i]}`}>
              <div className="text-[3.2rem] md:text-[4rem] font-[700] text-cobalt leading-none tracking-[-0.02em] mb-2.5">
                {m.value}
              </div>
              <p className="text-[1.35rem] font-medium text-muted leading-snug">{m.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
