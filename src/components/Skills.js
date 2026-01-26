// src/components/Skills.js
"use client";
import { motion } from "framer-motion";
import { Database, Layout, Cpu, Workflow, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Data & AI Analytics",
    icon: <Database className="text-blue-600" size={22} />,
    skills: ["SQL (Triggers & Procedures)", "Python (LightGBM, Optuna)", "AI (CNN, ResNet50)", "Power BI & Excel"]
  },
  {
    title: "Business Analysis",
    icon: <Workflow className="text-blue-600" size={22} />,
    skills: ["BPMN 2.0 & UML Modeling", "REA Data Modeling", "Requirement Engineering", "SRS Documentation"]
  },
  {
    title: "Technical Tools",
    icon: <Layout className="text-blue-600" size={22} />,
    skills: ["Solidity (Smart Contracts)", "MS Project & HubSpot", "Figma (UI/UX Design)", "PHP & Web Dev"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50/30 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-10">
        <div className="flex flex-col items-center mb-12">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[0.9rem] mb-2">/ Expertise</span>
          <h2 className="text-[3.5rem] md:text-[4.8rem] font-black tracking-tighter text-slate-900">
            Tech <span className="text-blue-600">Stack.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-4xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] hover:shadow-blue-50 transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {category.icon}
              </div>
              <h3 className="text-[1.8rem] font-black text-slate-900 mb-5">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-[1.35rem] text-slate-500 font-bold leading-tight">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-12 p-6 rounded-3xl bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-100">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-white/10 rounded-2xl"><Cpu size={32} /></div>
            <div>
              <h4 className="text-[1.6rem] font-black">Data-Driven & Tech-Savvy BA</h4>
              <p className="text-[1.2rem] font-medium opacity-85 leading-tight">
                Combining AI models and Blockchain logic to optimize enterprise-level business processes.
              </p>
            </div>
          </div>
          <div className="text-[1rem] font-black uppercase tracking-widest bg-white/20 px-5 py-2 rounded-full border border-white/30 whitespace-nowrap">
            Integrated Systems Focus
          </div>
        </motion.div>
      </div>
    </section>
  );
}