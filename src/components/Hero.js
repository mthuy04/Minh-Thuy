// src/components/Hero.js
"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Database, Layout } from "lucide-react";

export default function Hero() {
  const cvLink = "https://drive.google.com/file/d/159n4kkJE5jbHEwcRV-7o8-yolcLSSeHv/view?usp=sharing";

  return (
    <section id="home" className="relative pt-40 pb-20 overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center mb-28">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-blue-50 border border-blue-100 mb-8 font-bold text-blue-600 text-[0.9rem] uppercase tracking-widest">
               <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
               Business Analyst Intern (Data/BI)
            </div>
            
            <h1 className="text-[4rem] md:text-[6.2rem] font-black tracking-tighter leading-[1.05] text-slate-900 mb-8 italic"> 
               Engineering <span className="text-blue-600 not-italic">Strategic</span> <br /> 
               Business Value.
            </h1>
            
            <p className="max-w-[580px] text-[1.7rem] md:text-[2.1rem] text-slate-500 leading-relaxed font-medium mb-12">
               I am <strong className="text-slate-900">Nguyễn Minh Thuý</strong>, a 3rd-year MIS student at VNU-IS. 
               I specialize in requirement engineering and system modeling (BPMN, ERD) to drive <span className="text-blue-600 font-bold underline decoration-blue-100 underline-offset-8">measurable growth</span>.
            </p>

            <div className="flex flex-wrap gap-6">
               <a href="#projects" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-[1.2rem] hover:bg-slate-900 transition-all flex items-center gap-3 shadow-lg shadow-blue-100">
                  Explore Work <ArrowRight size={20} />
               </a>
               <a 
                href={cvLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-[1.2rem] hover:bg-slate-50 transition-all flex items-center gap-3"
               >
                  View Resume <FileText size={20} className="text-blue-600" />
               </a>
            </div>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]">
               <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-12 -right-8 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 z-20">
                  <Database className="text-blue-500" size={28} />
               </motion.div>
               <motion.div animate={{ x: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 -left-16 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50 z-20">
                  <Layout className="text-indigo-500" size={28} />
               </motion.div>

               <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                  <img src="/images/unnamed.jpg" alt="Thuy" className="w-full h-full object-cover" />
               </div>
               
               {/* GPA cập nhật 3.53 */}
               <div className="absolute bottom-12 -left-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-[2rem] shadow-xl border border-white/50 z-20 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-[1.1rem]">3.53</div>
                  <p className="text-[1.2rem] font-black text-slate-800 tracking-tight">GPA MIS Student</p>
               </div>
            </div>
          </div>
        </div>

        {/* STATS BAR - Dữ liệu thực tế từ các dự án AI, Blockchain và EIS */}
        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="md:border-r border-slate-100 last:border-0">
             <div className="text-[3.8rem] font-black text-slate-900 mb-1 italic">3.53/4.0</div>
             <p className="text-[1rem] font-bold text-blue-500 uppercase tracking-[0.2em]">Verified GPA</p>
          </div>
          <div className="md:border-r border-slate-100 last:border-0">
             <div className="text-[3.8rem] font-black text-slate-900 mb-1 italic">20% ↓</div>
             <p className="text-[1rem] font-bold text-blue-500 uppercase tracking-[0.2em]">Process Optimization</p>
          </div>
          <div>
             <div className="text-[3.8rem] font-black text-slate-900 mb-1 italic">10+</div>
             <p className="text-[1rem] font-bold text-blue-500 uppercase tracking-[0.2em]">MIS & AI Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}