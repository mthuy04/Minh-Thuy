// src/components/SocialSidebar.js
import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function SocialSidebar() {
  return (
    <div className="fixed left-8 bottom-0 z-50 hidden 2xl:flex flex-col gap-7 items-center after:w-[1px] after:h-24 after:bg-slate-200 after:mt-4">
      <a href={contact.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="text-slate-500 hover:text-blue-600 transition-colors">
        <Github size={20} aria-hidden="true" />
      </a>
      <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="text-slate-500 hover:text-blue-600 transition-colors">
        <Linkedin size={20} aria-hidden="true" />
      </a>
      <a href={contact.emailHref} aria-label="Email" className="text-slate-500 hover:text-blue-600 transition-colors">
        <Mail size={20} aria-hidden="true" />
      </a>
    </div>
  );
}
