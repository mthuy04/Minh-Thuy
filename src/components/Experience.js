// src/components/Experience.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experience, experienceIntro } from "@/data/portfolio";
import { SectionHeader, MetricLine } from "@/components/ui";

// "Dec 2025 – Mar 2026" -> "2025 – 2026"; "Mar 2026 – Sep 2026" -> "2026"
function yearSpan(dates) {
  const years = [...new Set(dates.match(/\d{4}/g) || [])];
  return years.join(" – ");
}

export default function Experience() {
  return (
    <section id="experience" className="bg-page py-24 md:py-32">
      <div className="main-container">
        <SectionHeader eyebrow="Professional Experience" title="Experience" intro={experienceIntro} />

        <ol className="border-t border-divider">
          {experience.map((exp, idx) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-[16rem_1fr] lg:grid-cols-[20rem_1fr] gap-y-4 md:gap-x-10 border-b border-divider py-12 md:py-14"
            >
              {/* Year column */}
              <p className="text-[1.5rem] font-semibold text-muted tabular-nums md:pt-1">{yearSpan(exp.dates)}</p>

              {/* Timeline + content */}
              <div className="relative pl-7 md:pl-10 border-l border-divider">
                <span
                  className={`absolute -left-[5px] top-[0.9rem] w-[9px] h-[9px] rounded-full ring-4 ring-page ${
                    idx === 0 ? "bg-cobalt" : "bg-slate-300"
                  }`}
                  aria-hidden="true"
                />

                <header className="mb-8">
                  <h3 className="text-[2.2rem] md:text-[2.5rem] font-[650] tracking-[-0.02em] text-ink leading-tight">
                    {exp.company}
                  </h3>
                  <p className="mt-1.5 text-[1.55rem] text-body">
                    <span className="font-semibold text-navy">{exp.role}</span>
                    <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
                    {exp.dates}
                  </p>
                </header>

                <div className="flex flex-col">
                  {exp.scopes.map((scope, sIdx) => (
                    <div
                      key={scope.title || sIdx}
                      className={sIdx > 0 ? "mt-10 pt-10 border-t border-divider" : ""}
                    >
                      {scope.title && (
                        <div className="mb-4">
                          <h4 className="text-[1.85rem] md:text-[2rem] font-[620] text-ink leading-snug">
                            {scope.title}
                          </h4>
                          <p className="mt-1 text-[1.4rem] text-muted">
                            {scope.type}
                            {scope.dates && (
                              <>
                                <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
                                {scope.dates}
                              </>
                            )}
                          </p>
                        </div>
                      )}

                      <MetricLine items={scope.metrics} className="mb-5" />

                      <ul className="flex flex-col gap-3 max-w-[76rem]">
                        {scope.bullets.map((b) => (
                          <li key={b} className="relative pl-5 text-[1.6rem] text-body leading-[1.7]">
                            <span className="absolute left-0 top-[1.2rem] w-[5px] h-[5px] rounded-full bg-slate-300" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {scope.caseStudy && (
                        <Link href={`/case-studies/${scope.caseStudy}`} className="text-link mt-5">
                          View case study <span className="sr-only">: {scope.title}</span>
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
