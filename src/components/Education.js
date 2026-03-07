// src/components/Education.js
"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Star,
  Languages,
  Globe,
  CheckCircle2,
  FileText
} from "lucide-react";

export default function Education() {
  const highlights = [
    "Requirement Engineering & BPMN 2.0",
    "Enterprise Information Systems (EIS)",
    "Database Systems & Data Modeling (ERD/REA)",
    "Artificial Intelligence Foundations",
    "Blockchain (Academic Exploration)"
  ];

  const foundations = [
    "SDLC & Agile/Scrum",
    "Systems Analysis & Design",
    "Software Engineering",
    "Database Systems"
  ];

  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-black tracking-[0.4em] uppercase text-[1.1rem] mb-4"
          >
            / Academic Foundation
          </motion.span>
          <h2 className="text-[3.5rem] md:text-[4.5rem] font-black tracking-tighter text-slate-900 leading-none">
            My <span className="text-blue-600">Education.</span>
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[4rem] blur-3xl opacity-40 -z-10" />
          <div className="bg-white/80 backdrop-blur-xl border border-slate-100 p-10 md:p-14 rounded-[3.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="grid lg:grid-cols-[1.6fr_0.9fr] gap-12 items-start">
              
              <div className="flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex items-center justify-center">
                    <img src="/images/vnu-is-logo.png" alt="VNU-IS Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-[2.6rem] md:text-[3.2rem] font-black text-slate-900 leading-tight">
                      VNU International School
                    </h3>
                    <div className="flex items-center gap-4 mt-2 flex-wrap">
                      <span className="flex items-center gap-2 text-slate-400 font-bold text-[1.1rem]">
                        <Globe size={16} /> Hanoi, Vietnam
                      </span>
                      <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full font-black text-[1rem] border border-blue-100">
                        2023 - 2027 (Expected)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[2.2rem] md:text-[2.6rem] font-black text-slate-800 mb-4 leading-tight">
                    Bachelor of Management Information Systems (MIS)
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex bg-blue-600 text-white px-5 py-1.5 rounded-full font-black text-[0.9rem] uppercase tracking-widest items-center gap-2">
                      <Languages size={14} strokeWidth={3} /> 100% English Taught
                    </span>
                    <span className="inline-flex bg-slate-900 text-white px-5 py-1.5 rounded-full font-black text-[0.9rem] uppercase tracking-widest items-center gap-2">
                      BA Foundations • SDLC • Agile • Database
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50/50 p-7 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-3 text-blue-600 mb-2">
                      <Star size={20} strokeWidth={3} />
                      <span className="text-[1rem] font-black uppercase tracking-widest text-slate-400">
                        Academic Standing
                      </span>
                    </div>
                    <div className="text-[3.5rem] font-black text-slate-900 leading-none">
                      3.51 <span className="text-[1.5rem] text-slate-400">/ 4.0</span>
                    </div>
                    <p className="text-[1.05rem] text-blue-600 font-black mt-3 uppercase tracking-wider italic">
                      Strong GPA
                    </p>
                  </div>

                  <div className="bg-slate-50/50 p-7 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-3 text-blue-600 mb-3">
                      <GraduationCap size={20} strokeWidth={3} />
                      <span className="text-[1rem] font-black uppercase tracking-widest text-slate-400">
                        Relevant Coursework
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {foundations.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[1.15rem] font-bold text-slate-600">
                          <CheckCircle2 size={16} className="text-blue-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-blue-600 mb-4">
                    <BookOpen size={20} strokeWidth={3} />
                    <span className="text-[1rem] font-black uppercase tracking-widest text-slate-400">
                      Academic Focus & Artifacts
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    {highlights.map((item, idx) => (
                      <span key={idx} className="text-[1.15rem] font-bold text-slate-500">
                        • {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[1.05rem] font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl w-fit">
                    <FileText size={14} />
                    Artifacts built: SRS • FRD • BPMN • ERD • UAT Checklist
                  </div>
                </div>
              </div>

              {/* Optional visual — keep smaller and secondary */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 min-h-[420px]">
                <img
                  src="/images/vnu-is-campus.jpg"
                  alt="VNU-IS Campus"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-[2px] bg-blue-500" />
                    <p className="text-[0.9rem] font-black uppercase tracking-[0.3em] text-blue-400">
                      VNU-IS
                    </p>
                  </div>
                  <p className="font-black text-[1.8rem] leading-tight mb-1">
                    MIS • Business-Tech Foundation
                  </p>
                  <p className="text-[1rem] font-bold opacity-70 uppercase tracking-widest">
                    Analyst-ready coursework
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
