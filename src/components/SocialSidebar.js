"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="fixed left-10 bottom-0 z-50 hidden xl:flex flex-col gap-8 items-center after:w-[1px] after:h-24 after:bg-slate-200 after:mt-4">
      <a href="https://github.com/mthuy04" className="text-slate-300 hover:text-blue-600 transition-all"><Github size={22}/></a>
      <a href="https://linkedin.com/in/thuy-nguyen-518608341" className="text-slate-300 hover:text-blue-600 transition-all"><Linkedin size={22}/></a>
      <a href="mailto:mthuy68.work@gmail.com" className="text-slate-300 hover:text-blue-600 transition-all"><Mail size={22}/></a>
    </div>
  );
}