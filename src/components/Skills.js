// src/components/Skills.js
"use client";
import { motion } from "framer-motion";
import { Database, Layout, Box, Workflow, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "BA Deliverables",
    icon: <Workflow className="text-blue-600" size={22} />,
    skills: [
      "PRD / FRD / SRS Documentation",
      "User Stories + AC (Given/When/Then)",
      "BPMN 2.0 / System & Sequence Flows",
      "UAT Plan + Test Cases + Bug Log",
      "Traceability Matrix (Req → Test)"
    ]
  },
  {
    title: "Tools & Collaboration",
    icon: <Layout className="text-blue-600" size={22} />,
    skills: [
      "Google Docs / Sheets / Slides",
      "Figma / Draw.io / Miro / Lucidchart",
      "Jira & Confluence (Familiar)",
      "MS Project (Planning)",
      "Excel & Power BI (Analysis)"
    ]
  },
    // Card Technical Literacy
{
  title: "Technical Literacy (for product teams)", // Thay 'for R&D'
  icon: <Database className="text-blue-600" size={22} />,
  skills: [
    "API (REST) • JSON • Payload logic",
    "Database: ERD • RBAC • SQL modeling",
    "Metrics & Experimentation (KPIs, Funnels)", // Mới thêm
    "Client–Server & Auth concepts",
    "Spatial Interest: Latency • Tracking • VPS"
  ]
}
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50/30 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-10">
        
        {/* TIÊU ĐỀ: Định vị lại là BA Toolkit */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[0.9rem] mb-2">/ BA Toolkit</span>
          <h2 className="text-[3.5rem] md:text-[4.8rem] font-black tracking-tighter text-slate-900">
            Skills & <span className="text-blue-600">Deliverables.</span>
          </h2>
          <p className="text-[1.3rem] font-bold text-slate-400 mt-2 uppercase tracking-widest">
            PRD/FRD • System Flows • UAT Sign-off
          </p>
        </div>

        {/* GRID KỸ NĂNG: Đã đổi nội dung trúng JD */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-4xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] hover:shadow-blue-50 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {category.icon}
              </div>
              <h3 className="text-[1.8rem] font-black text-slate-900 mb-5">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-[1.25rem] text-slate-500 font-bold leading-tight">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BANNER: Tập trung vào AR/XR & Spatial */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mt-12 p-8 rounded-3xl bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-100"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Box size={36} />
            </div>
            <div>
              <h4 className="text-[1.7rem] font-black">Spatial-ready Business Analyst</h4>
              <p className="text-[1.2rem] font-medium opacity-90 leading-tight">
                Turning requirements into PRD/FRD and UAT packs for AR/XR & Spatial products.
              </p>
            </div>
          </div>
          <div className="text-[1.1rem] font-black uppercase tracking-[0.2em] bg-white/20 px-6 py-3 rounded-full border border-white/30 whitespace-nowrap">
            SPATIAL COMPUTING FOCUS
          </div>
        </motion.div>
      </div>
    </section>
  );
}