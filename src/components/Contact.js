// src/components/Contact.js
import { Mail, Phone, Linkedin, Github, ArrowUpRight, FileText, MapPin, Briefcase, Languages } from "lucide-react";
import { contact, contactSection, profile } from "@/data/portfolio";

const BADGE_ICONS = [MapPin, Briefcase, Languages];

export default function Contact() {
  const channels = [
    { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref, external: false },
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref, external: false },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedin.display, href: contact.linkedin.url, external: true },
    { icon: Github, label: "GitHub", value: contact.github.display, href: contact.github.url, external: true },
  ];

  return (
    <section id="contact" className="bg-dark text-[#f8fafc] pt-24 md:pt-32 pb-20 md:pb-24">
      <div className="main-container grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-24">
        {/* Message + CTAs */}
        <div>
          <p className="eyebrow !text-dark-muted mb-5">Let&apos;s Connect</p>
          <h2 className="text-[3.4rem] md:text-[4.4rem] font-[680] tracking-[-0.03em] leading-[1.1] text-white mb-6">
            Hiring for a BA or Product Analyst role?
          </h2>
          <p className="text-[1.7rem] font-medium text-[#f8fafc] mb-3">{contactSection.positioning}</p>
          <p className="text-[1.65rem] text-dark-text leading-[1.7] max-w-[60rem] mb-7">{contactSection.intro}</p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {contactSection.badges.map((b, i) => {
              const Icon = BADGE_ICONS[i];
              return (
                <li key={b} className="flex items-center gap-2 text-[1.4rem] text-dark-text">
                  <Icon size={15} className="text-dark-muted" aria-hidden="true" /> {b}
                </li>
              );
            })}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a href={contact.emailHref} className="btn-primary">
              <Mail size={17} aria-hidden="true" /> Email Me
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-btn border border-white/20 px-7 py-[1.3rem] text-[1.55rem] font-semibold text-white transition-colors duration-200 hover:bg-white/5"
            >
              <FileText size={17} aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>

        {/* Contact rows */}
        <div className="lg:pt-12">
          <p className="text-[1.45rem] text-dark-muted mb-4">Reach me by email or phone, or connect on LinkedIn.</p>
          <ul className="border-t border-white/10">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.label} className="border-b border-white/10">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-5"
                  >
                    <Icon size={18} className="text-dark-muted shrink-0" aria-hidden="true" />
                    <span className="sr-only sm:not-sr-only sm:w-[8.5rem] sm:shrink-0 text-[1.35rem] text-dark-muted">{c.label}</span>
                    <span className="flex-1 min-w-0 text-[1.55rem] font-medium text-white break-words group-hover:text-[#c7d4fb] transition-colors">
                      {c.value}
                    </span>
                    <ArrowUpRight size={16} className="text-dark-muted group-hover:text-white transition-colors shrink-0" aria-hidden="true" />
                    {c.external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
