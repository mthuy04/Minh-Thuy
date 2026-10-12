// src/components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
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
      className={`fixed top-0 inset-x-0 z-[100] transition-colors duration-300 ${
        scrolled || isOpen
          ? "bg-white/90 backdrop-blur-md border-b border-divider shadow-nav"
          : "bg-page/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="main-container flex items-center justify-between h-[6.8rem]">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${profile.name} — home`}
          className="text-[2.2rem] font-[750] tracking-[-0.03em] text-ink"
        >
          {profile.wordmark}
        </Link>

        {/* Desktop menu */}
        <ul className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block px-3.5 py-2 text-[1.45rem] font-medium transition-colors duration-200 ${
                    isActive ? "text-cobalt" : "text-body hover:text-ink"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-cobalt transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary !px-5 !py-[1rem] !text-[1.4rem]"
          >
            <Download size={15} strokeWidth={2.5} aria-hidden="true" /> Download CV
          </a>

          <button
            type="button"
            className="xl:hidden p-2.5 rounded-btn border border-line bg-white text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t border-divider bg-white max-h-[calc(100vh-6.8rem)] overflow-y-auto"
          >
            <ul className="main-container py-4">
              {navLinks.map((link) => (
                <li key={link.id} className="border-b border-divider last:border-0">
                  <a
                    href={`/#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 text-[1.8rem] font-medium ${
                      activeSection === link.id ? "text-cobalt" : "text-ink"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-5 pb-3">
                <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  <Download size={17} aria-hidden="true" /> Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
