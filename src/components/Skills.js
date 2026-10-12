// src/components/Skills.js
"use client";
import { motion } from "framer-motion";
import { ListChecks, Workflow, ShieldCheck, Database, Cpu } from "lucide-react";
import { skills } from "@/data/portfolio";

const ICONS = [ListChecks, Workflow, ShieldCheck, Database];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col items-center mb-14 text-center">
          <p className="eyebrow mb-3">Toolkit</p>
          <h2 className="text-[4rem] md:text-[5.6rem] font-black tracking-tighter text-slate-900 leading-none">
            Skills & <span className="text-blue-600">Capabilities.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.groups.map((group, idx) => {
            const Icon = ICONS[idx];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/85 backdrop-blur-xl border border-slate-100 p-7 md:p-9 rounded-[2.4rem] shadow-[0_15px_35px_-15px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[2rem] md:text-[2.2rem] font-black text-slate-900">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-3.5 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[1.45rem] font-semibold text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* AI / Product exposure — smaller group */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 p-6 md:p-8 rounded-[2.4rem] bg-slate-900 text-white flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
        >
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-300" aria-hidden="true">
              <Cpu size={22} />
            </div>
            <h3 className="text-[1.9rem] font-black">{skills.exposure.title}</h3>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {skills.exposure.items.map((item) => (
              <li key={item} className="px-3.5 py-2 bg-white/10 border border-white/15 rounded-xl text-[1.4rem] font-semibold text-slate-100">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
