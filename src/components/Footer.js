// src/components/Footer.js
"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpCircle, Heart, FileText, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const cvLink = "https://drive.google.com/file/d/159n4kkJE5jbHEwcRV-7o8-yolcLSSeHv/view?usp=sharing";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Mailto trung tính cho mọi job application
  const mailtoLink = "mailto:mthuy68.work@gmail.com?subject=BA%20Intern%20–%20Nguyen%20Minh%20Thuy%20–%20Portfolio&body=Hi%20Thuy,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20your%20availability%20for%20a%20BA%20Internship%20position.";

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Hiệu ứng ánh sáng nền nhẹ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.8fr_0.8fr] gap-20 mb-20">
          
          {/* CỘT 1: BIO TRUNG TÍNH (OPTION A) */}
          <div className="flex flex-col items-start">
            <div className="text-[1.8rem] font-black tracking-tight mb-6 uppercase">
              Minh<span className="text-blue-400 italic">Thuy</span>.
            </div>
            <p className="text-[1.3rem] text-slate-400 font-medium leading-relaxed mb-6 max-w-[400px]">
               3rd-year <strong className="text-white">MIS</strong> student at <strong className="text-white">VNU-IS</strong> • GPA <strong className="text-white">3.51</strong>.
            </p>
            <p className="text-[1.2rem] text-slate-500 font-bold mb-8 max-w-[400px] leading-relaxed italic">
               Building BA deliverables for Spatial/AR/XR: <span className="text-blue-400">PRD/FRD • System Flows • UAT Packs</span>.
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/thuy-nguyen-518608341" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href={mailtoLink} className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <Mail size={18} />
              </a>
              <a href="https://github.com/mthuy04" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* CỘT 2: NAVIGATION */}
          <div className="md:pl-10">
            <h4 className="text-[0.9rem] font-black uppercase tracking-[0.3em] text-blue-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Skills", "Education"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[1.2rem] font-bold text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: EXPLORE & ARTIFACTS */}
          <div>
            <h4 className="text-[0.9rem] font-black uppercase tracking-[0.3em] text-blue-400 mb-8">Explore</h4>
            <ul className="space-y-4">
              {["Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[1.2rem] font-bold text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href={cvLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[1.2rem] font-black text-blue-400 hover:underline decoration-2 underline-offset-8 transition-all">
                  <FileText size={16} /> Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: TAGLINE & LOGS */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[0.9rem] font-bold text-slate-500 uppercase tracking-[0.2em]">
            © {currentYear} Nguyen Minh Thuy. <span className="text-slate-400 italic">From requirements to UAT — built for real products.</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-[0.8rem] font-black uppercase tracking-widest">Back to top</span>
            <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
            Crafted with <Heart size={10} className="text-red-500 animate-pulse" /> for MIS Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}