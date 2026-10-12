// src/components/Experience.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { experience, experienceIntro } from "@/data/portfolio";

function MetricChips({ metrics }) {
  return (
    <ul className="flex flex-wrap gap-2.5 mb-6" aria-label="Key metrics">
      {metrics.map((m) => (
        <li
          key={m}
          className="px-3.5 py-1.5 bg-white text-slate-900 text-[1.35rem] font-bold rounded-xl border border-slate-200"
        >
          {m}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="eyebrow mb-3">Professional Experience</p>
          <h2 className="text-[4rem] md:text-[5.6rem] font-black tracking-tighter text-slate-900 leading-none mb-5">
            Experience<span className="text-blue-600">.</span>
          </h2>
          <p className="max-w-[640px] text-[1.7rem] text-slate-600 leading-relaxed">{experienceIntro}</p>
        </div>

        <ol className="max-w-[1000px] mx-auto flex flex-col gap-12">
          {experience.map((exp) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative pl-8 md:pl-14 border-l-4 border-blue-100"
            >
              <div
                className="absolute -left-[1.6rem] top-0 w-11 h-11 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-lg border border-blue-50"
                aria-hidden="true"
              >
                <Briefcase size={18} />
              </div>

              <article className="bg-white/80 backdrop-blur p-6 md:p-10 rounded-[2.4rem] md:rounded-[3rem] border border-slate-100 shadow-sm">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-6 mb-6">
                  <div>
                    <h3 className="text-[2.2rem] md:text-[2.6rem] font-black text-slate-900 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-bold text-[1.6rem] md:text-[1.7rem] mt-1">{exp.company}</p>
                  </div>
                  <p className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[1.4rem] font-bold text-slate-600 whitespace-nowrap w-fit">
                    <Calendar size={14} aria-hidden="true" />
                    {exp.dates}
                  </p>
                </header>

                {/* Scopes */}
                <div className="grid gap-5">
                  {exp.scopes.map((scope, sIdx) => {
                    const boxed = exp.scopes.length > 1 || scope.title;
                    return (
                      <div
                        key={scope.title || sIdx}
                        className={boxed ? "bg-slate-50/70 rounded-[2rem] border border-slate-100 p-5 md:p-7" : ""}
                      >
                        {scope.title && (
                          <div className="mb-4">
                            {exp.scopes.length > 1 && (
                              <p className="text-[1.25rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-1">
                                Scope {sIdx + 1}
                              </p>
                            )}
                            <h4 className="text-[1.9rem] md:text-[2.1rem] font-black text-slate-900 leading-snug">
                              {scope.title}
                            </h4>
                            <p className="text-[1.45rem] font-semibold text-slate-600 mt-1">
                              {scope.type}
                              {scope.dates && <span className="text-slate-500"> • {scope.dates}</span>}
                            </p>
                          </div>
                        )}

                        <MetricChips metrics={scope.metrics} />

                        <ul className="flex flex-col gap-4">
                          {scope.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 text-[1.55rem] md:text-[1.6rem] text-slate-700 leading-[1.6]">
                              <CheckCircle2 size={18} className="text-blue-500 mt-[0.35rem] shrink-0" aria-hidden="true" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {scope.caseStudy && (
                          <Link
                            href={`/case-studies/${scope.caseStudy}`}
                            className="inline-flex items-center gap-2 mt-6 text-[1.45rem] font-bold text-blue-600 hover:text-slate-900 transition-colors"
                          >
                            View case study <span className="sr-only">: {scope.title}</span>
                            <ArrowRight size={16} aria-hidden="true" />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
