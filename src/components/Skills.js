// src/components/Skills.js
import { skills } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui";

export default function Skills() {
  return (
    <section id="skills" className="bg-page py-24 md:py-32">
      <div className="main-container">
        <SectionHeader eyebrow="Toolkit" title={skills.title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {skills.groups.map((group) => (
            <div key={group.title} className="border-t border-ink/80 pt-6">
              <h3 className="text-[1.3rem] font-semibold uppercase tracking-[0.08em] text-navy mb-5">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[1.55rem] text-body leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI / Product exposure — smaller, secondary group */}
        <div className="mt-14 pt-6 border-t border-divider flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10">
          <h3 className="shrink-0 text-[1.3rem] font-semibold uppercase tracking-[0.08em] text-muted">
            {skills.exposure.title}
          </h3>
          <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[1.5rem] text-body">
            {skills.exposure.items.map((item, i) => (
              <li key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-300" aria-hidden="true">·</span>}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
