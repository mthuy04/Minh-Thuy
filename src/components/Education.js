// src/components/Education.js
"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star, Languages, Globe, CheckCircle2 } from "lucide-react";

export default function Education() {
  const highlights = [
    "Enterprise Information Systems (EIS)",
    "Artificial Intelligence (ResNet50/CNN)",
    "Blockchain & Cryptocurrency (Solidity)",
    "Requirement Engineering & BPMN 2.0"
  ];

  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-10 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-blue-600 font-black tracking-[0.4em] uppercase text-[1.1rem] mb-4">
            / Academic Excellence
          </motion.span>
          <h2 className="text-[3.5rem] md:text-[4.5rem] font-black tracking-tighter text-slate-900 leading-none">
            My <span className="text-blue-600">Education.</span>
          </h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[4rem] blur-3xl opacity-40 -z-10" />
          <div className="bg-white/80 backdrop-blur-xl border border-slate-100 p-10 md:p-14 rounded-[3.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
              
              <div className="flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex items-center justify-center">
                    <img src="/images/vnu-is-logo.png" alt="VNU-IS Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-[2.6rem] md:text-[3.2rem] font-black text-slate-900 leading-tight">VNU - International School</h3>
                    <div className="flex items-center gap-4 mt-2">
                       <span className="flex items-center gap-2 text-slate-400 font-bold text-[1.2rem]"><Globe size={16} /> Hanoi, Vietnam</span>
                       <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full font-black text-[1rem] border border-blue-100">2023 - Present</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[2rem] md:text-[2.4rem] font-black text-slate-800 mb-4 leading-tight">Bachelor of Management Information Systems (MIS)</h4>
                  <span className="inline-flex bg-blue-600 text-white px-5 py-1.5 rounded-full font-black text-[1rem] uppercase tracking-widest shadow-lg shadow-blue-200 items-center gap-2">
                    <Languages size={14} strokeWidth={3} /> 100% English Taught
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-3 text-blue-600 mb-2">
                       <Star size={20} strokeWidth={3}/><span className="text-[1rem] font-black uppercase tracking-widest text-slate-400">CGPA (Current)</span>
                    </div>
                    <div className="text-[3.2rem] font-black text-slate-900">3.53 / 4.0</div>
                    <p className="text-[1.1rem] text-blue-600 font-bold mt-1">Dean&apos;s List Candidate</p>
                  </div>
                  <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-3 text-blue-600 mb-3">
                       <BookOpen size={20} strokeWidth={3}/><span className="text-[1rem] font-black uppercase tracking-widest text-slate-400">Project Focus</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       {highlights.map((item, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-[1.25rem] font-bold text-slate-600">
                            <CheckCircle2 size={16} className="text-blue-500" /> {item}
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[350px] lg:min-h-full border-4 border-white">
                <img src="/images/vnu-is-campus.jpg" alt="VNU-IS Campus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white font-black text-[1.8rem] leading-tight">
                  VNU - International School<br />Academic Hub
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}