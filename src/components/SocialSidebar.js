// src/components/SocialSidebar.js
import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/data/portfolio";

export default function SocialSidebar() {
  const link = "text-muted hover:text-ink transition-colors";
  return (
    <div className="fixed left-8 bottom-0 z-50 hidden 2xl:flex flex-col gap-6 items-center after:w-px after:h-20 after:bg-line after:mt-3">
      <a href={contact.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={link}>
        <Github size={18} aria-hidden="true" />
      </a>
      <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={link}>
        <Linkedin size={18} aria-hidden="true" />
      </a>
      <a href={contact.emailHref} aria-label="Email" className={link}>
        <Mail size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
