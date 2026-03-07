// src/components/Hero.js
"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Layers, CheckCircle } from "lucide-react";

export default function Hero() {
  const cvLink = "https://drive.google.com/file/d/159n4kkJE5jbHEwcRV-7o8-yolcLSSeHv/view?usp=sharing";

  return (
    <section id="home" className="relative pt-40 pb-20 overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center mb-28">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            {/* ROLE BADGE */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-blue-50 border border-blue-100 mb-8 font-bold text-blue-600 text-[0.85rem] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Business Analyst Intern • Requirements • Process • UAT
            </div>
            
            {/* HEADLINE */}
            <h1 className="text-[4rem] md:text-[6.2rem] font-black tracking-tighter leading-[1.05] text-slate-900 mb-8 italic">
              From <span className="text-blue-600 not-italic">Requirements</span>
              <br />
              to UAT Sign-off.
            </h1>
            
            {/* SUBHEADLINE */}
            <p className="max-w-[680px] text-[1.45rem] md:text-[1.75rem] text-slate-500 leading-relaxed font-medium mb-12">
              I’m <strong className="text-slate-900 font-bold">Nguyễn Minh Thuý</strong>, an MIS student at VNU-IS (CGPA 3.51/4.0). 
              I translate business needs into <strong className="text-slate-900 font-bold">FRD/SRS, user stories, process flows, and UAT-ready deliverables</strong> for CRM, e-commerce, LMS, and operations-focused systems.{" "}
              <span className="text-blue-600 italic">
                Currently exploring Spatial Computing as a specialized case-study track.
              </span>
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-6">
                <a
                  href="#projects"
                  className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-[1.1rem] hover:bg-slate-900 transition-all flex items-center gap-3 shadow-lg shadow-blue-100"
                >
                  View Case Studies <ArrowRight size={20} />
                </a>

                <a
                  href={cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-[1.1rem] hover:bg-slate-50 transition-all flex items-center gap-3"
                >
                  Download CV <FileText size={20} className="text-blue-600" />
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-[1rem] font-black uppercase tracking-widest text-slate-400 ml-2 flex-wrap">
                <span className="text-blue-600">Core Deliverables:</span>
                <span>FRD/SRS</span> •
                <span>User Stories + AC</span> •
                <span>BPMN / System Flow</span> •
                <span>UAT Pack</span>
              </div>
            </div>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-12 -right-8 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 z-20"
              >
                <Layers className="text-blue-500" size={28} />
              </motion.div>

              <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                <img src="/images/unnamed.jpg" alt="Nguyễn Minh Thuỷ" className="w-full h-full object-cover" />
              </div>
               
              {/* Badge */}
              <div className="absolute bottom-12 -left-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-[2rem] shadow-xl border border-white/50 z-20 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <p className="text-[1.1rem] font-black text-slate-800 tracking-tight">
                  BA • Process • UAT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DELIVERABLES STRIP */}
        <div className="mb-12 flex flex-wrap justify-center gap-x-12 gap-y-4 py-6 border-y border-slate-100">
          {["FRD / SRS", "User Stories + AC", "BPMN / System Flow", "UAT Plan", "Bug Triage"].map((item) => (
            <span key={item} className="text-[1rem] font-black text-slate-400 uppercase tracking-[0.2em]">
              {item}
            </span>
          ))}
        </div>

        {/* STATS */}
        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="md:border-r border-slate-100 last:border-0">
            <div className="text-[3.8rem] font-black text-slate-900 mb-1 italic">3.53/4.0</div>
            <p className="text-[0.9rem] font-bold text-blue-500 uppercase tracking-[0.2em]">
              Current GPA (VNU-IS)
            </p>
          </div>
          <div className="md:border-r border-slate-100 last:border-0">
            <div className="text-[3.8rem] font-black text-slate-900 mb-1 italic">20% ↑</div>
            <p className="text-[0.9rem] font-bold text-blue-500 uppercase tracking-[0.2em]">
              Process Improvement Result
            </p>
          </div>
          <div>
            <div className="text-[3.8rem] font-black text-slate-900 mb-1 italic">5+</div>
            <p className="text-[0.9rem] font-bold text-blue-500 uppercase tracking-[0.2em]">
              Core BA Artifacts Built
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}