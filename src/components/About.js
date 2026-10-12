// src/components/About.js
import { about, deliverySteps } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui";

export default function About() {
  return (
    <section id="about" className="bg-page py-24 md:py-32">
      <div className="main-container">
        <SectionHeader eyebrow="About" title={about.title} />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 mb-20">
          {about.paragraphs.map((p, i) => (
            <p key={p} className={`text-[1.75rem] leading-[1.75] ${i === 0 ? "text-ink" : "text-body"}`}>
              {p}
            </p>
          ))}
        </div>

        {/* What I bring */}
        <h3 className="eyebrow mb-6">{about.bringLabel}</h3>
        <ul className="grid md:grid-cols-3 gap-x-12 gap-y-8 mb-24">
          {about.bring.map((card) => (
            <li key={card.title} className="border-t border-divider pt-6">
              <h4 className="text-[1.85rem] font-[650] text-ink mb-2">{card.title}</h4>
              <p className="text-[1.5rem] text-body leading-[1.65]">{card.copy}</p>
            </li>
          ))}
        </ul>

        {/* How I deliver — linear workflow */}
        <h3 className="text-[2.4rem] md:text-[2.8rem] font-[680] tracking-[-0.025em] text-ink mb-10">How I Deliver</h3>
        <ol className="grid lg:grid-cols-5">
          {deliverySteps.map((step) => (
            <li
              key={step.num}
              className="relative border-l lg:border-l-0 lg:border-t border-line pl-8 lg:pl-0 pb-10 lg:pb-0 lg:pt-8 lg:pr-8 last:pb-0"
            >
              <span
                className="absolute -left-[5px] top-[0.4rem] lg:left-0 lg:-top-[5px] w-[9px] h-[9px] rounded-full bg-cobalt ring-4 ring-page"
                aria-hidden="true"
              />
              <p className="text-[1.3rem] font-semibold text-cobalt tabular-nums mb-2">{step.num}</p>
              <h4 className="text-[1.85rem] font-[650] text-ink mb-2">{step.title}</h4>
              <p className="text-[1.45rem] text-body leading-[1.65]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
