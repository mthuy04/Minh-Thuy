// src/components/Work.js
"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Layout } from "lucide-react";

const projects = [
  {
    id: "work-1",
    title: "Healthcare CRM System",
    desc: "Designed Use Case, ERD, and Figma prototype for a healthcare management platform.",
    tech: ["Figma", "Modeling", "Management Information Systems"],
    link: "#"
  },
  {
    id: "work-2",
    title: "CampusTalk Social Network",
    desc: "Built a micro-blogging platform for students featuring real-time interaction.",
    tech: ["Full-stack", "SQL", "Frontend/Backend"],
    link: "#"
  },
  {
    id: "work-3",
    title: "Teacher Bee LMS",
    desc: "Online course management system focusing on UI/UX and backend logic.",
    tech: ["PHP", "SQL", "UX Design"],
    link: "#"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-slate-50/30">
      <div className="main-container">
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[1.1rem] mb-4">/ Case Studies</span>
          <h2 className="text-[4.5rem] md:text-[5.5rem] font-black tracking-tighter text-slate-900">Featured <span className="text-blue-600">Work.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-md border border-white p-8 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-blue-100 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                  <Database size={24} />
                </div>
                <div className="flex gap-4 text-slate-400">
                  <Github size={20} className="hover:text-blue-600 cursor-pointer" />
                  <ExternalLink size={20} className="hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
              <h3 className="text-[2rem] font-black text-slate-900 mb-4">{project.title}</h3>
              <p className="text-[1.5rem] text-slate-500 font-medium leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[1.1rem] font-bold text-slate-400 uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}