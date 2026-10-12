// src/components/Education.js
import Image from "next/image";
import { education, certifications } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui";

export default function Education() {
  return (
    <section id="education" className="bg-alt py-24 md:py-32">
      <div className="main-container">
        <SectionHeader eyebrow="Academic Background" title="Education" />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 border-t border-divider pt-10">
          {/* Institution */}
          <div>
            <div className="relative w-[18rem] h-[5.4rem] mb-7">
              <Image
                src="/images/vnu-is-logo.webp"
                alt="VNU International School logo"
                fill
                sizes="180px"
                className="object-contain object-left"
              />
            </div>
            <h3 className="text-[2.2rem] md:text-[2.6rem] font-[650] tracking-[-0.02em] text-ink leading-tight mb-2">
              {education.institution}
            </h3>
            <p className="text-[1.75rem] font-medium text-navy mb-2">{education.degree}</p>
            <p className="text-[1.5rem] text-body">{education.meta}</p>
            <p className="text-[1.45rem] text-muted mt-1">{education.status}</p>

            <div className="mt-8 pt-6 border-t border-divider">
              <h4 className="eyebrow mb-3">Relevant Coursework</h4>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[1.5rem] text-body">
                {education.coursework.map((c, i) => (
                  <li key={c} className="flex items-center gap-2">
                    {i > 0 && <span className="text-slate-300" aria-hidden="true">·</span>}
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Standing + certifications */}
          <div className="flex flex-col">
            <dl className="flex flex-wrap gap-x-14 gap-y-7 pb-8 border-b border-divider">
              <div className="flex flex-col-reverse">
                <dt className="text-[1.35rem] text-muted mt-2">{education.gpa.label}</dt>
                <dd className="text-[3.2rem] font-[700] tracking-[-0.02em] text-cobalt leading-none">{education.gpa.value}</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-[1.35rem] text-muted mt-2 leading-snug">{education.scholarship.label}</dt>
                <dd className="text-[3.2rem] font-[700] tracking-[-0.02em] text-ink leading-none">{education.scholarship.value}</dd>
              </div>
            </dl>

            <h3 className="eyebrow mt-8 mb-2">Certifications</h3>
            <ul>
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-baseline justify-between gap-6 py-4 border-b border-divider last:border-0">
                  <span className="text-[1.6rem] font-medium text-ink leading-snug">{cert.title}</span>
                  <span className="text-[1.45rem] text-muted tabular-nums shrink-0">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
