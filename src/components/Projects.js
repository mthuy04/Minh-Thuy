// src/components/Projects.js
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Database,
  Layout,
  Code,
  Cpu,
  LineChart,
  Lock,
  Globe,
  FileText,
  ArrowRight,
  AlertCircle
} from "lucide-react";

const projectList = [
  {
    title: "Healthcare CRM System",
    category: "Featured BA",
    desc: "Built a healthcare CRM requirements pack: SRS, ERD optimization, RBAC access rules, and UAT scenarios for patient data integrity and role-based workflows.",
    tech: ["SRS", "ERD", "RBAC", "UAT"],
    artifacts: "SRS • ERD • RBAC Matrix • Test Cases",
    icon: <Database size={18} />,
    image: "/images/healthcare.jpg",
    reportLink: "LINK_DRIVE_REPORT_HEALTHCARE",
    featured: true
  },
  {
    title: "Shopee Strategic Sales & EIS",
    category: "Featured BA",
    desc: "Designed an EIS for e-commerce sales operations: translated business requirements into REA/ERD, system flows, and control logic for revenue reconciliation and inventory visibility.",
    tech: ["EIS", "REA/ERD", "System Flow", "MySQL Triggers"],
    artifacts: "REA Model • SQL Triggers • Process Flow",
    icon: <Database size={18} />,
    image: "/images/shopee-eis.jpg",
    githubLink: "https://github.com/mthuy04/Sale-Management-System-for-Shopee-Seller",
    reportLink: "https://drive.google.com/file/d/1tqGUUYLmuTCLznEYKfGAVVayiNz6MDrJ/view",
    featured: true
  },
  {
    title: "Cocoon Vietnam CRM (Leader)",
    category: "Featured BA",
    desc: "Led CRM rollout planning: captured stakeholder requirements, defined RACI, built project timelines in MS Project, and supported change adoption for marketing workflow standardization.",
    tech: ["Stakeholders", "RACI", "Rollout", "MS Project"],
    artifacts: "Project Plan • RACI • Stakeholder Map",
    icon: <Layout size={18} />,
    reportLink: "https://drive.google.com/file/d/1xg3wxo0gSIqc8Qt_tBpiGH5rzTaztXxT/view",
    image: "/images/cocoon.jpg",
    featured: true
  },
  {
    title: "TeacherBee LMS Platform",
    category: "Business Systems",
    desc: "Designed LMS workflows and access logic: RBAC matrix, core user flows, edge-case handling, and validation checklist for cross-platform consistency.",
    tech: ["RBAC", "User Flow", "Edge Cases", "PHP/SQL"],
    artifacts: "RBAC Matrix • Decision Log • Test Checklist",
    icon: <Code size={18} />,
    githubLink: "https://github.com/PhuongVu51/FinalProject",
    reportLink: "https://matham.page.gd/?i=1",
    image: "/images/teacherbee.jpg"
  },
  {
    title: "CampusTalk Social Network",
    category: "Business Systems",
    desc: "Engineered a student micro-blogging system with JWT security requirements, role-based interactions, and 3-tier architecture considerations.",
    tech: ["JWT", "3-Tier Arch", "React/Flask", "API Specs"],
    artifacts: "Architecture Diagram • API Specs",
    icon: <Globe size={18} />,
    githubLink: "https://github.com/mthuy04/micro-blog",
    reportLink: "https://micro-blog-2-dmfc0lufq-mthuy04s-projects.vercel.app/",
    image: "/images/campustalk.jpg"
  },
  {
    title: "Gender & Age Group AI (Leader)",
    category: "Technical Explorations",
    desc: "Defined pipeline requirements for a computer-vision demo: dataset assumptions, inference flow, and evaluation signals for multi-task gender/age prediction.",
    tech: ["CV/AI", "Inference Flow", "Eval Metrics", "CNN"],
    artifacts: "Data Assumptions • Inference Flow Diagram",
    icon: <Cpu size={18} />,
    githubLink: "https://github.com/mthuy04/Gender-Classification---Age-Group-Prdection-from-Vietnamese-Portrait-Image",
    reportLink: "https://drive.google.com/file/d/17kSbe6Xg7TaxrqD3JzJ54ys6SBhCRYgt/view",
    image: "/images/ai-gag.jpg"
  },
  {
    title: "Housing Price Prediction (Leader)",
    category: "Technical Explorations",
    desc: "Built a data-driven forecasting case with feature engineering, evaluation metrics, and model specification using LightGBM and Optuna.",
    tech: ["LightGBM", "Data Science", "Optuna", "Python"],
    artifacts: "Feature Matrix • Model Specs • Eval Metrics",
    icon: <LineChart size={18} />,
    reportLink: "https://drive.google.com/file/d/18i7xLnGhpFQGhnkgTYYBFKV--01Aute0/view",
    image: "/images/housing.jpg"
  },
  {
    title: "Blockchain Voting System",
    category: "Technical Explorations",
    desc: "Academic exploration of decentralized voting requirements: immutability, transparent audit trails, and smart contract logic using Solidity.",
    tech: ["Solidity", "Smart Contracts", "Audit Trail"],
    artifacts: "Contract Logic • Audit Spec • Academic Report",
    icon: <Lock size={18} />,
    githubLink: "https://github.com/mthuy04/Blockchain-Decentralized-Voting-System",
    reportLink: "https://drive.google.com/file/d/13DkYTzOaxZvf62yosKcBAal9X5k0vw8D/view",
    image: "/images/blockchain.jpg"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Featured BA", "Business Systems", "Technical Explorations"];

  const filteredProjects =
    filter === "All" ? projectList : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-50/20 relative">
      <div className="main-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-black tracking-[0.3em] uppercase text-[0.9rem] mb-3"
          >
            / Portfolio
          </motion.span>
          <h2 className="text-[3.5rem] md:text-[5rem] font-black tracking-tighter text-slate-900 leading-none">
            Featured <span className="text-blue-600">Case Studies.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[0.9rem] font-black uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-400 border border-slate-100 hover:border-blue-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white group rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] hover:shadow-blue-100 transition-all flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-xl font-black text-[0.7rem] uppercase tracking-widest z-10 flex items-center gap-2">
                      <AlertCircle size={12} className="text-blue-400" />
                      Featured BA Case
                    </div>
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl text-blue-600 shadow-lg z-10">
                    {project.icon}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-[1.8rem] font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-4">
                    {project.title}
                  </h3>

                  <p className="text-[1.2rem] text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>

                  <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                    <p className="text-[0.8rem] font-black text-blue-600 uppercase tracking-widest mb-1">
                      Artifacts Included
                    </p>
                    <p className="text-[1.05rem] font-bold text-slate-700">
                      {project.artifacts}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-slate-50 text-slate-400 text-[0.85rem] font-black rounded-lg border border-slate-100 uppercase tracking-tight"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-slate-100 text-slate-900 rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-sm flex items-center justify-center"
                      >
                        <Github size={20} />
                      </a>
                    )}

                    <a
                      href={project.reportLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-[1.05rem] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-lg"
                    >
                      <FileText size={18} />
                      View Case Study
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}