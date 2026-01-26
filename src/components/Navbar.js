// src/components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  // Logic 1: Trạng thái khi cuộn (Sticky Effect)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic 2: Tự động đổi màu khi lướt qua Section (ScrollSpy)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Kích hoạt khi mục nằm giữa 20% màn hình
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    links.forEach((link) => {
      const element = document.getElementById(link.href.slice(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] flex justify-center transition-all duration-500 ${
      scrolled ? "pt-4" : "pt-8"
    }`}>
      {/* Container Nav dạng Pill lơ lửng, nới rộng px để thoáng hơn */}
      <div className={`flex items-center justify-between transition-all duration-500 px-10 py-4 rounded-full border border-slate-200/40 shadow-2xl ${
        scrolled 
        ? "w-[92%] max-w-[1200px] bg-white/85 backdrop-blur-2xl shadow-blue-900/5" 
        : "w-[95%] max-w-[1300px] bg-transparent border-transparent shadow-none"
      }`}>
        
        {/* LOGO: Tăng size lên 2.4rem cho rõ */}
        <motion.div 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="text-[2.4rem] font-black tracking-tighter text-slate-900 cursor-pointer"
        >
          Minh<span className="text-blue-600">Thuy</span>.
        </motion.div>

        {/* DESKTOP MENU: Font size 1.15rem + Active Pill */}
        <div className="hidden lg:flex items-center gap-2 relative bg-slate-50/50 p-1.5 rounded-full border border-slate-200/30">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-6 py-3 text-[1.15rem] font-bold transition-all duration-300 uppercase tracking-widest z-10 ${
                  isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                
                {/* VIÊN THUỐC ACTIVE: Tự động trượt khi lướt web */}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white shadow-md rounded-full -z-10 border border-slate-100"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                  />
                )}

                {/* HOVER EFFECT */}
                {hoveredLink === link.name && !isActive && (
                  <motion.span
                    layoutId="hover-bg"
                    className="absolute inset-0 bg-white/60 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* NÚT DOWNLOAD CV: Rõ ràng, to, chuyên nghiệp */}
        <motion.a 
          href="https://drive.google.com/file/d/159n4kkJE5jbHEwcRV-7o8-yolcLSSeHv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "#0061FF" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-3 bg-slate-900 text-white px-8 py-3.5 rounded-full font-black text-[1.15rem] transition-all shadow-xl shadow-slate-200"
        >
          <Download size={18} strokeWidth={3} /> Download CV
        </motion.a>

        {/* MOBILE MENU TOGGLE */}
        <button className="lg:hidden p-3 bg-white rounded-2xl shadow-sm border border-slate-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU: To và rõ cho trải nghiệm di động */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-28 w-[92%] bg-white/98 backdrop-blur-3xl rounded-[3rem] border border-slate-100 p-12 flex flex-col gap-8 lg:hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] z-50"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-[2.2rem] font-black transition-all ${
                  activeSection === link.href.slice(1) ? "text-blue-600" : "text-slate-400"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/159n4kkJE5jbHEwcRV-7o8-yolcLSSeHv/view?usp=sharing"
              className="mt-4 bg-blue-600 text-white py-6 rounded-3xl text-center text-[1.8rem] font-black"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}