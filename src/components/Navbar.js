// src/components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy (only finds sections on the home page)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 w-full z-[100] flex justify-center transition-all duration-500 ${
        scrolled ? "pt-4" : "pt-6 md:pt-8"
      }`}
    >
      {/* Floating pill container */}
      <div
        className={`flex items-center justify-between transition-all duration-500 px-5 md:px-8 py-3 rounded-full border border-slate-200/40 ${
          scrolled || isOpen
            ? "w-[94%] max-w-[1240px] bg-white/90 backdrop-blur-2xl shadow-2xl shadow-blue-900/5"
            : "w-[95%] max-w-[1300px] bg-white/60 backdrop-blur-md xl:bg-transparent xl:backdrop-blur-none border-transparent"
        }`}
      >
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${profile.name} — home`}
          className="text-[2.4rem] font-black tracking-tighter text-slate-900"
        >
          Minh<span className="text-blue-600">Thuy</span>.
        </Link>

        {/* Desktop menu */}
        <div className="hidden xl:flex items-center gap-1 relative bg-slate-50/60 p-1.5 rounded-full border border-slate-200/40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`/#${link.id}`}
                aria-current={isActive ? "true" : undefined}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-4 py-2.5 text-[1.3rem] font-bold transition-colors duration-300 uppercase tracking-wider z-10 rounded-full ${
                  isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white shadow-md rounded-full -z-10 border border-slate-100"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                  />
                )}
                {hoveredLink === link.id && !isActive && (
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

        <div className="flex items-center gap-3">
          {/* Download CV */}
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2.5 bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-[1.4rem] transition-colors shadow-xl shadow-slate-200"
          >
            <Download size={16} strokeWidth={3} aria-hidden="true" /> Download CV
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="xl:hidden p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="absolute top-[8.4rem] w-[94%] max-h-[calc(100vh-10rem)] overflow-y-auto bg-white/98 backdrop-blur-3xl rounded-[2.4rem] border border-slate-100 p-8 flex flex-col gap-2 xl:hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-[2.2rem] font-black py-2 transition-colors ${
                  activeSection === link.id ? "text-blue-600" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-600 text-white py-5 rounded-2xl text-center text-[1.8rem] font-black flex items-center justify-center gap-3"
            >
              <Download size={20} aria-hidden="true" /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
