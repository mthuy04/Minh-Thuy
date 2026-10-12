// src/components/Education.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star, Award, BadgeCheck } from "lucide-react";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col items-center mb-14 text-center">
          <p className="eyebrow mb-3">Academic Background</p>
          <h2 className="text-[4rem] md:text-[5.6rem] font-black tracking-tighter text-slate-900 leading-none">
            Education<span className="text-blue-600">.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[4rem] blur-3xl opacity-40 -z-10" aria-hidden="true" />
          <div className="bg-white/85 backdrop-blur-xl border border-slate-100 p-6 md:p-12 rounded-[2.4rem] md:rounded-[3.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12 items-stretch">
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                  <div className="w-full max-w-[220px] h-[68px] relative shrink-0">
                    <Image
                      src="/images/vnu-is-logo.webp"
                      alt="VNU International School logo"
                      fill
                      sizes="220px"
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                <h3 className="text-[2.4rem] md:text-[3rem] font-black text-slate-900 leading-tight mb-2">
                  {education.institution}
                </h3>
                <p className="text-[1.9rem] md:text-[2.2rem] font-bold text-slate-800 mb-2">{education.degree}</p>
                <p className="text-[1.5rem] font-semibold text-blue-700 mb-1">{education.meta}</p>
                <p className="text-[1.45rem] text-slate-600 mb-8">{education.status}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-2.5 text-blue-600 mb-3">
                      <Star size={18} strokeWidth={2.5} aria-hidden="true" />
                      <span className="text-[1.25rem] font-bold uppercase tracking-[0.14em] text-slate-600">
                        {education.gpa.label}
                      </span>
                    </div>
                    <div className="text-[3.6rem] font-black text-slate-900 leading-none">{education.gpa.value}</div>
                  </div>

                  <div className="bg-slate-50/70 p-6 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-2.5 text-blue-600 mb-3">
                      <Award size={18} strokeWidth={2.5} aria-hidden="true" />
                      <span className="text-[1.25rem] font-bold uppercase tracking-[0.14em] text-slate-600">
                        Scholarship
                      </span>
                    </div>
                    <div className="text-[3.2rem] font-black text-slate-900 leading-none mb-2">
                      {education.scholarship.value}
                    </div>
                    <p className="text-[1.4rem] text-slate-600 font-semibold">{education.scholarship.label}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-blue-600 mb-4">
                    <BookOpen size={18} strokeWidth={2.5} aria-hidden="true" />
                    <h4 className="text-[1.25rem] font-bold uppercase tracking-[0.14em] text-slate-600">
                      Relevant Coursework
                    </h4>
                  </div>
                  <ul className="flex flex-wrap gap-2.5">
                    {education.coursework.map((c) => (
                      <li key={c} className="px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-[1.45rem] font-semibold text-slate-700">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Campus photo */}
              <div className="relative rounded-[2.4rem] overflow-hidden shadow-2xl border-4 border-white min-h-[280px]">
                <Image
                  src="/images/vnu-is-campus.webp"
                  alt="VNU International School campus in Hanoi"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-blue-300" aria-hidden="true" />
                    <p className="text-[1.25rem] font-bold uppercase tracking-[0.2em] text-blue-200">VNU-IS</p>
                  </div>
                  <p className="font-black text-[2rem] leading-tight">Vietnam National University, Hanoi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-[2.6rem] md:text-[3.2rem] font-black tracking-tight text-slate-900 mb-6">
            Certifications
          </h3>
          <ul className="grid md:grid-cols-2 gap-5">
            {certifications.map((cert) => (
              <motion.li
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 bg-white/85 border border-slate-100 rounded-[2rem] p-6 md:p-7 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0" aria-hidden="true">
                  <BadgeCheck size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-[1.7rem] font-black text-slate-900 leading-snug">{cert.title}</p>
                </div>
                <p className="text-[1.5rem] font-bold text-slate-600 shrink-0">{cert.year}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
