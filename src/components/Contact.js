// src/components/Contact.js
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight, FileText, MapPin, Briefcase, Languages } from "lucide-react";
import { contact, contactSection, profile } from "@/data/portfolio";

const BADGE_ICONS = [MapPin, Briefcase, Languages];

export default function Contact() {
  const channels = [
    { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref, external: false },
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref, external: false },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedin.display, href: contact.linkedin.url, external: true },
    { icon: Github, label: "GitHub", value: contact.github.display, href: contact.github.url, external: true },
  ];

  return (
    <section id="contact" className="py-24 md:py-28 relative overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col items-center mb-14 text-center">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-[4rem] md:text-[5.6rem] font-black tracking-tighter text-slate-900 leading-none mb-7">
            Let&apos;s <span className="text-blue-600">Connect.</span>
          </h2>
          <p className="text-[1.8rem] md:text-[2.1rem] text-slate-900 font-black leading-tight mb-4">
            {contactSection.positioning}
          </p>
          <p className="max-w-[680px] text-[1.7rem] text-slate-600 leading-relaxed">{contactSection.intro}</p>

          <ul className="flex flex-wrap justify-center gap-3 mt-8">
            {contactSection.badges.map((b, i) => {
              const Icon = BADGE_ICONS[i];
              return (
                <li
                  key={b}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-[1.4rem] font-semibold text-slate-700"
                >
                  <Icon size={15} className="text-blue-600" aria-hidden="true" /> {b}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
          {/* Contact channels */}
          <ul className="grid grid-cols-1 gap-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.label}>
                  <motion.a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    whileHover={{ y: -4 }}
                    className="group flex items-center justify-between gap-4 h-full p-6 bg-white/90 border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-100 transition-shadow"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0" aria-hidden="true">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[1.25rem] font-bold uppercase tracking-[0.14em] text-slate-500 mb-0.5">{c.label}</p>
                        <p className="text-[1.55rem] font-black text-slate-900 leading-snug break-words">{c.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" aria-hidden="true" />
                    {c.external && <span className="sr-only">(opens in a new tab)</span>}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Email CTA */}
          <div className="p-8 md:p-10 bg-slate-900 rounded-[2.4rem] text-white shadow-2xl flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-[2.4rem] md:text-[2.8rem] font-black tracking-tight leading-tight mb-3">
                Hiring for a BA or Product Analyst role?
              </h3>
              <p className="text-[1.55rem] text-slate-300 leading-relaxed">
                Reach me by email or phone, or connect on LinkedIn.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a
                href={contact.emailHref}
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-black text-[1.55rem] flex items-center justify-center gap-3 transition-colors"
              >
                <Mail size={18} aria-hidden="true" /> Email Me
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-4 px-6 rounded-2xl font-black text-[1.55rem] flex items-center justify-center gap-3 transition-colors"
              >
                <FileText size={18} aria-hidden="true" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
