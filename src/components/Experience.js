// src/components/Experience.js
"use client";
import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, Calendar, Star, Zap, Users } from "lucide-react";

const experiences = [
  {
    role: "Operations Team Lead",
    company: "Homestay & Studio Chain",
    period: "Jan 2024 - Present",
    desc: "Managing a 34-unit premium chain, focusing on process optimization and customer experience excellence.",
    highlights: [
      "Optimized inventory and housekeeping workflows, maintaining a consistent 85-90% occupancy rate.",
      "Redesigned check-in protocols, resulting in a 20% reduction in customer wait times.",
      "Developed SOPs to secure a perfect 5.0/5.0 rating on major OTA platforms.",
      "Managed recruitment and scheduling while ensuring system-wide operational stability."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      <div className="main-container">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[0.9rem] mb-3">/ Professional Journey</span>
          <h2 className="text-[3.5rem] md:text-[4.5rem] font-black tracking-tighter text-slate-900 leading-none">
            Work <span className="text-blue-600">Experience.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l-4 border-blue-100"
            >
              <div className="absolute -left-[1.65rem] top-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-lg border border-blue-50">
                <Briefcase size={20} />
              </div>

              <div className="bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-blue-50 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-[2.2rem] font-black text-slate-900 leading-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-[1.4rem] mt-1">
                      <Building2 size={18} /> {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 text-[1.1rem] font-bold text-slate-400">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[1.3rem] font-bold text-slate-600 leading-snug">
                      <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* METRICS BAR */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
           <div className="p-8 bg-slate-900 rounded-[2rem] text-center shadow-xl group hover:bg-blue-600 transition-all duration-500">
              <div className="flex justify-center mb-2 text-blue-400 group-hover:text-white"><Users size={24}/></div>
              <div className="text-[3rem] font-black text-white">85-90%</div>
              <p className="text-[0.9rem] font-bold text-white/50 uppercase tracking-widest mt-2">Occupancy Rate</p>
           </div>
           <div className="p-8 bg-white rounded-[2rem] text-center shadow-md border border-slate-100">
              <div className="flex justify-center mb-2 text-blue-600"><Zap size={24}/></div>
              <div className="text-[3rem] font-black text-slate-900">20% ↓</div>
              <p className="text-[0.9rem] font-bold text-slate-400 uppercase tracking-widest mt-2">Wait Time</p>
           </div>
           <div className="p-8 bg-slate-900 rounded-[2rem] text-center shadow-xl group hover:bg-blue-600 transition-all duration-500">
              <div className="flex justify-center mb-2 text-blue-400 group-hover:text-white"><Star size={24}/></div>
              <div className="text-[3rem] font-black text-white">5.0/5.0</div>
              <p className="text-[0.9rem] font-bold text-white/50 uppercase tracking-widest mt-2">User Rating</p>
           </div>
        </div>
      </div>
    </section>
  );
}