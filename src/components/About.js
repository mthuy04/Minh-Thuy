// src/components/About.js
"use client";
import { motion } from "framer-motion";
import { User, Workflow, Lightbulb, Zap, CheckCircle2 } from "lucide-react";

export default function About() {
  const focusAreas = [
    "AR/XR constraints (latency, device context)",
    "VPS/Spatial localization (relocalization)",
    "CV/AI requirements (data quality)",
    "B2B/B2G delivery (pilot, sign-off)"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="main-container">
        
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[1rem] mb-2">/ Discover</span>
          <h2 className="text-[3.5rem] md:text-[5rem] font-black tracking-tighter text-slate-900 text-center">
            About <span className="text-blue-600">Me.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* CARD 1: WHO AM I */}
            <div className="bg-slate-50/50 p-8 rounded-4xl border border-slate-100 shadow-sm">
              <h3 className="text-[2rem] font-black text-slate-900 mb-4 flex items-center gap-4">
                <User className="text-blue-600" size={24} /> Who am I?
              </h3>
              <p className="text-[1.6rem] text-slate-500 leading-relaxed font-medium">
                I’m a 3rd-year <strong className="text-slate-900">MIS (English-taught)</strong> student at VNU-IS with <strong className="text-slate-900">CGPA 3.51/4.0</strong>. I turn business needs into <strong className="text-slate-900">PRD/FRD, user stories (G/W/T)</strong>, and system diagrams, then support UAT with test cases & bug triage. I’m currently building <strong className="text-blue-600">Spatial Computing (AR/XR, VPS, AI)</strong> case studies for B2B/B2G.
              </p>
            </div>
  
<div className="mt-6 flex flex-wrap gap-3">
  <span className="text-[1.1rem] font-black text-slate-400 uppercase tracking-widest">Targeting:</span>
  {["BA Intern", "BI Intern", "Product Ops"].map(role => (
    <span key={role} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[1rem] font-bold text-slate-600">{role}</span>
  ))}
</div>

            {/* CARD 2: HOW I DELIVER (Workflow) */}
            <div className="bg-white p-8 rounded-4xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
              <h3 className="text-[2rem] font-black text-slate-900 mb-5 flex items-center gap-4">
                <Workflow className="text-blue-600" size={24} /> How I Deliver
              </h3>
              <ul className="space-y-4 text-[1.4rem] font-bold text-slate-500">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">01.</span> 
                  <span><strong className="text-slate-900">Clarify:</strong> Stakeholders, constraints, and edge cases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">02.</span> 
                  <span><strong className="text-slate-900">Document:</strong> PRD/FRD and traceable user stories + AC.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">03.</span> 
                  <span><strong className="text-slate-900">Model:</strong> BPMN, System Flow, and Sequence diagrams.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">04.</span> 
                  <span><strong className="text-slate-900">Validate:</strong> UAT plan, test cases, and sign-off checklist.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {/* CARD 3: PROCESS OPTIMIZATION */}
            <div className="group p-8 rounded-4xl bg-white border border-slate-100 hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Zap size={26} />
                </div>
                <div>
                  <h4 className="text-[1.8rem] font-black text-slate-900">Process Optimization</h4>
                  <p className="text-[1.1rem] font-black text-slate-400 mt-0.5 uppercase tracking-widest italic">20% Efficiency Gain</p>
                </div>
              </div>
              <p className="text-[1.5rem] text-slate-500 mt-5 leading-relaxed font-medium">
                Improved operational efficiency by <strong className="text-slate-900 font-bold">20%</strong> through workflow restructuring and <strong className="text-slate-900 font-bold">SOP design</strong> across multi-unit operations, focusing on handoffs and exception handling.
              </p>
            </div>

            {/* CARD 4: REQUIREMENT ENGINEERING */}
            <div className="group p-8 rounded-4xl bg-white border border-slate-100 hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Lightbulb size={26} />
                </div>
                <div>
                  <h4 className="text-[1.8rem] font-black text-slate-900">Requirement Engineering</h4>
                  <p className="text-[1.1rem] font-black text-slate-400 mt-0.5 uppercase tracking-widest italic">PRD & UAT Driven</p>
                </div>
              </div>
              <p className="text-[1.5rem] text-slate-500 mt-5 leading-relaxed font-medium">
                Deconstruct complex needs into clear deliverables: <strong className="text-slate-900 font-bold">PRD/FRD, user stories (Given/When/Then)</strong>, and BPMN 2.0—ready for dev handoff and UAT validation.
              </p>
            </div>

            {/* QUOTE CARD */}
            <blockquote className="mt-4 border-l-8 border-blue-600 bg-blue-50/50 p-7 rounded-r-4xl italic shadow-sm">
              <p className="text-[1.8rem] text-blue-900 font-bold leading-tight">
                &quot;Clarity is a feature: requirements should be testable, traceable, and constraint-aware.&quot;
              </p>
              <footer className="mt-3 text-[1.2rem] font-black text-blue-600 uppercase tracking-[0.3em]">— Nguyen Minh Thuy</footer>
            </blockquote>
          </motion.div>
        </div>

        {/* FOCUS AREAS PILLS (New) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6 py-10 border-t border-slate-100"
        >
          <p className="text-[1.1rem] font-black text-slate-400 uppercase tracking-[0.4em]">Currently building artifacts for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((area) => (
              <span key={area} className="px-6 py-2 bg-slate-900 text-white rounded-full text-[1rem] font-black uppercase tracking-widest flex items-center gap-2 border border-slate-800">
                <CheckCircle2 size={14} className="text-blue-400" /> {area}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}