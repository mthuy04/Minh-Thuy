// src/components/Hero.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Layers, CheckCircle } from "lucide-react";
import { hero, profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 md:pt-44 pb-20 overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-16 lg:gap-12 items-center mb-20 md:mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 font-bold text-blue-700 text-[1.2rem] sm:text-[1.3rem] uppercase tracking-[0.14em]">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
              {hero.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-[4rem] sm:text-[5.2rem] xl:text-[6rem] font-black tracking-tighter leading-[1.05] text-slate-900 mb-8">
              {hero.headline[0]}
              <br />
              <span className="text-blue-600">{hero.headline[1]}</span>
            </h1>

            {/* Body */}
            <p className="max-w-[640px] text-[1.7rem] md:text-[1.9rem] text-slate-600 leading-[1.65] font-medium mb-10">
              {hero.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-7">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#case-studies"
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[1.6rem] hover:bg-slate-900 transition-colors flex items-center gap-3 shadow-lg shadow-blue-100"
                >
                  View Case Studies <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-slate-200 px-8 py-4 rounded-2xl font-black text-[1.6rem] text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-3"
                >
                  Download CV <FileText size={18} className="text-blue-600" aria-hidden="true" />
                </a>
              </div>

              {/* Capability line */}
              <ul className="flex items-center gap-x-3 gap-y-2 text-[1.25rem] font-bold uppercase tracking-[0.12em] text-slate-500 flex-wrap" aria-label="Capabilities">
                {hero.capabilities.map((c, i) => (
                  <li key={c} className="flex items-center gap-3">
                    {i > 0 && <span className="text-blue-300" aria-hidden="true">•</span>}
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[min(78vw,300px)] sm:w-[330px] xl:w-[380px] aspect-[4/5]">
              {/* Soft blue glow */}
              <div className="absolute -inset-6 rounded-[45%] bg-blue-200/50 blur-3xl" aria-hidden="true" />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-4 bg-white p-4 rounded-3xl shadow-2xl border border-slate-50 z-20"
                aria-hidden="true"
              >
                <Layers className="text-blue-500" size={26} />
              </motion.div>

              <div className="relative w-full h-full rounded-[3rem] sm:rounded-[3.6rem] overflow-hidden border-[8px] sm:border-[10px] border-white shadow-2xl ring-1 ring-blue-100 z-10 bg-slate-50">
                <Image
                  src={profile.portrait.src}
                  alt={profile.portrait.alt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 380px, (min-width: 640px) 330px, 78vw"
                  className="object-cover object-[center_15%]"
                />
              </div>

              {/* Badge */}
              <div className="absolute bottom-10 -left-4 sm:-left-10 bg-white/95 backdrop-blur-md pl-3 pr-5 py-2.5 rounded-[2rem] shadow-xl border border-white/50 z-20 flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center" aria-hidden="true">
                  <CheckCircle size={18} />
                </div>
                <p className="text-[1.4rem] font-black text-slate-800 tracking-tight">BA • Product • Systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact metrics */}
        <ul className="bg-white border border-slate-100 rounded-[2.4rem] md:rounded-[3rem] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center">
          {hero.metrics.map((m, i) => (
            <li
              key={m.label}
              className={`px-3 ${i % 2 === 1 ? "border-l border-slate-100" : ""} ${i > 0 ? "md:border-l md:border-slate-100" : ""}`}
            >
              <div className="text-[3.6rem] md:text-[4.6rem] font-black text-slate-900 leading-none mb-2 tracking-tight">
                {m.value}
              </div>
              <p className="text-[1.25rem] md:text-[1.35rem] font-bold text-blue-600 uppercase tracking-[0.14em]">
                {m.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
