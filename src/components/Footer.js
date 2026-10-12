// src/components/Footer.js
import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";
import { contact, footer } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="main-container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <Link href="/" className="text-[2rem] font-black tracking-tight">
            Minh<span className="text-blue-400">Thuy</span>.
          </Link>
          <p className="text-[1.4rem] font-semibold text-slate-300">{footer.left}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Linkedin size={17} aria-hidden="true" />
          </a>
          <a
            href={contact.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Github size={17} aria-hidden="true" />
          </a>
          <a
            href={contact.emailHref}
            aria-label="Email"
            className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Mail size={17} aria-hidden="true" />
          </a>
        </div>

        <p className="text-[1.4rem] font-semibold text-slate-300">{footer.right}</p>
      </div>
    </footer>
  );
}
