"use client";
import React from 'react';
import { motion } from "framer-motion"; // Sửa lỗi 'motion' is not defined
import { Folder, ArrowUpRight } from "lucide-react"; // Sửa lỗi 'ArrowUpRight' is not defined

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="premium-card p-10 flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-10">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
          <Folder size={28} />
        </div>
        <ArrowUpRight className="text-slate-300 group-hover:text-blue-600 transition-colors" size={24} />
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-500 text-lg leading-relaxed mb-8 flex-grow">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech?.map((t) => (
          <span key={t} className="px-4 py-2 bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-widest rounded-lg">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}