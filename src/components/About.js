// src/components/About.js
"use client";
import { motion } from "framer-motion";
import { Network, Rocket, Cpu } from "lucide-react";
import { about, deliverySteps } from "@/data/portfolio";

const BRING_ICONS = [Network, Rocket, Cpu];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col items-center mb-14 text-center">
          <p className="eyebrow mb-3">About</p>
          <h2 className="text-[4rem] md:text-[5.6rem] font-black tracking-tighter text-slate-900 leading-none">
            About <span className="text-blue-600">Me.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/85 p-7 md:p-10 rounded-[2.4rem] border border-slate-100 shadow-sm flex flex-col gap-6"
          >
            {about.paragraphs.map((p) => (
              <p key={p} className="text-[1.7rem] md:text-[1.85rem] text-slate-700 leading-[1.7]">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[1.3rem] font-bold uppercase tracking-[0.2em] text-blue-600 mb-5">{about.bringLabel}</h3>
            <ul className="flex flex-col gap-4">
              {about.bring.map((card, i) => {
                const Icon = BRING_ICONS[i];
                return (
                  <li
                    key={card.title}
                    className="flex items-start gap-5 p-6 rounded-[2rem] bg-white/85 border border-slate-100 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0" aria-hidden="true">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-[1.9rem] font-black text-slate-900 mb-1">{card.title}</h4>
                      <p className="text-[1.5rem] text-slate-600 leading-relaxed">{card.copy}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* How I deliver */}
        <div className="pt-12 border-t border-slate-100">
          <h3 className="text-[2.6rem] md:text-[3.2rem] font-black tracking-tight text-slate-900 mb-8 text-center">
            How I Deliver
          </h3>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {deliverySteps.map((step) => (
              <li key={step.num} className="p-6 rounded-[2rem] bg-white/85 border border-slate-100 shadow-sm">
                <p className="text-[1.5rem] font-black text-blue-600 mb-2" aria-hidden="true">
                  {step.num}
                </p>
                <h4 className="text-[1.9rem] font-black text-slate-900 mb-2">{step.title}</h4>
                <p className="text-[1.45rem] text-slate-600 leading-relaxed">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
