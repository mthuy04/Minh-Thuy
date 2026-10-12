// src/components/Footer.js
import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";
import { contact, footer, profile } from "@/data/portfolio";

export default function Footer() {
  const iconLink = "w-9 h-9 rounded-[8px] flex items-center justify-center text-dark-muted hover:text-white hover:bg-white/5 transition-colors";

  return (
    <footer className="bg-dark text-white">
      <div className="main-container flex flex-col md:flex-row items-center justify-between gap-5 py-8 border-t border-white/10 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
          <Link href="/" className="text-[1.8rem] font-[750] tracking-[-0.03em] text-white">
            {profile.wordmark}
          </Link>
          <p className="text-[1.35rem] text-dark-muted">{footer.left}</p>
        </div>

        <p className="text-[1.35rem] text-dark-muted md:order-3">{footer.right}</p>

        <div className="flex items-center gap-1 md:order-2">
          <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
            <Linkedin size={16} aria-hidden="true" />
          </a>
          <a href={contact.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconLink}>
            <Github size={16} aria-hidden="true" />
          </a>
          <a href={contact.emailHref} aria-label="Email" className={iconLink}>
            <Mail size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
