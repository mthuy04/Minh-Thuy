// src/components/Footer.js
"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpCircle, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const cvLink = "https://drive.google.com/file/d/159n4kkJE5jbHEwcRV-7o8-yolcLSSeHv/view?usp=sharing";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.8fr] gap-20 mb-20">
          
          <div className="flex flex-col items-start">
            <div className="text-[1.8rem] font-black tracking-tight mb-6 uppercase">
              Minh<span className="text-blue-400 italic">Thuy</span>.
            </div>
            <p className="text-[1.3rem] text-slate-400 font-medium leading-relaxed mb-8 max-w-[320px]">
               3rd-year <strong className="text-white">MIS</strong> student at <strong className="text-white">VNU-IS</strong>. 
               Maintaining a <strong className="text-white">3.53 GPA</strong> with a focus on data-driven business excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/thuy-nguyen-518608341" target="_blank" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="mailto:mthuy68.work@gmail.com" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="md:pl-10">
            <h4 className="text-[0.9rem] font-bold uppercase tracking-[0.3em] text-blue-400 mb-8">Navigation</h4>
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

          <div>
            <h4 className="text-[0.9rem] font-bold uppercase tracking-[0.3em] text-blue-400 mb-8">Explore</h4>
            <ul className="space-y-4">
              {["Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[1.2rem] font-bold text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href={cvLink} target="_blank" className="text-[1.2rem] font-black text-blue-400 hover:underline">
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[0.9rem] font-bold text-slate-500 uppercase tracking-[0.2em]">
            © {currentYear} Nguyen Minh Thuy. Precision in every insight.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-[0.8rem] font-black uppercase tracking-widest">Back to top</span>
            <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2 text-[0.8rem] font-bold text-slate-500 uppercase tracking-widest">
            Crafted with <Heart size={10} className="text-red-500 animate-pulse" /> for MIS Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}