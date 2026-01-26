// src/components/About.js
"use client";
import { motion } from "framer-motion";
import { User, Target, Lightbulb, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      <div className="main-container">
        
        <div className="flex flex-col items-center mb-12">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[1rem] mb-2">/ Discover</span>
          <h2 className="text-[3.5rem] md:text-[4.5rem] font-black tracking-tighter text-slate-900 text-center">
            About <span className="text-blue-600">Me.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-slate-50/50 p-8 rounded-4xl border border-slate-100 shadow-sm">
              <h3 className="text-[2rem] font-black text-slate-900 mb-4 flex items-center gap-4">
                <User className="text-blue-600" size={24} /> Who am I?
              </h3>
              <p className="text-[1.6rem] text-slate-500 leading-relaxed font-medium">
                I am a 3rd-year <strong className="text-slate-900 font-bold">Management Information Systems</strong> student at <strong className="text-slate-900 font-bold">VNU-IS</strong>. 
                With a cumulative <strong className="text-slate-900 font-bold">GPA of 3.53/4.0</strong>, I bridge the gap between business needs and technological solutions. 
                My background in MIS enables me to synthesize complex data into actionable strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-4xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
              <h3 className="text-[2rem] font-black text-slate-900 mb-4 flex items-center gap-4">
                <Target className="text-blue-600" size={24} /> The Mission
              </h3>
              <p className="text-[1.6rem] text-slate-500 leading-relaxed font-medium">
                I am on a mission to transform intricate requirements into <strong className="text-slate-900 font-bold">strategic blueprints</strong>. 
                From designing Healthcare CRM architectures to managing a 34-unit homestay chain, 
                my focus is always: <strong className="text-slate-900 font-bold">Optimizing processes to maximize operational value.</strong>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="group p-7 rounded-4xl bg-white border border-slate-100 hover:border-blue-500 transition-all shadow-sm hover:shadow-blue-50">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Zap size={26} />
                </div>
                <div>
                  <h4 className="text-[1.7rem] font-black text-slate-900">Process Optimization</h4>
                  <p className="text-[1.3rem] font-bold text-slate-400 mt-0.5 uppercase tracking-widest">Efficiency Driven</p>
                </div>
              </div>
              <p className="text-[1.4rem] text-slate-500 mt-5 leading-relaxed font-medium">
                Proven track record of increasing operational efficiency by <strong className="text-slate-900 font-bold">20%</strong> through workflow restructuring and SOP development.
              </p>
            </div>

            <div className="group p-7 rounded-4xl bg-white border border-slate-100 hover:border-blue-500 transition-all shadow-sm hover:shadow-blue-50">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Lightbulb size={26} />
                </div>
                <div>
                  <h4 className="text-[1.7rem] font-black text-slate-900">Requirement Engineering</h4>
                  <p className="text-[1.3rem] font-bold text-slate-400 mt-0.5 uppercase tracking-widest">Logic & Clarity</p>
                </div>
              </div>
              <p className="text-[1.4rem] text-slate-500 mt-5 leading-relaxed font-medium">
                Ability to deconstruct complex user needs into coherent <strong className="text-slate-900 font-bold">SRS documents</strong> and precise <strong className="text-slate-900 font-bold">BPMN 2.0</strong> diagrams.
              </p>
            </div>

            <blockquote className="mt-4 border-l-8 border-blue-600 bg-blue-50/50 p-6 rounded-r-3xl italic">
              <p className="text-[1.6rem] text-blue-900 font-medium">
                &quot;A great Business Analyst doesn&apos;t just ask &apos;What?&apos;, they deep-dive into the &apos;Why?&apos; to find the most efficient &apos;How?&apos;&quot;
              </p>
              <footer className="mt-2 text-[1.2rem] font-bold text-blue-600 uppercase tracking-[0.2em]">— Minh Thuy</footer>
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
}