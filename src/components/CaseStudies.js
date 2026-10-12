// src/components/CaseStudies.js
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Info, ChevronDown, Github, ExternalLink } from "lucide-react";
import {
  caseStudies,
  caseStudyFilters,
  caseStudiesIntro,
  otherAcademicProjects,
} from "@/data/portfolio";
import { SectionHeader, MetricLine } from "@/components/ui";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" },
};

/* Visual for a flagship case: a real screenshot when one exists, otherwise the
   case's own (simplified, anonymized) flow rendered as an artifact preview. */
function FlagshipVisual({ study }) {
  const shot = study.detail.artifacts?.find((a) => a.image);
  if (shot) {
    return (
      <figure className="rounded-panel overflow-hidden border border-[rgba(15,23,42,0.06)] bg-white shadow-image">
        <Image
          src={shot.image.src}
          alt={shot.image.alt}
          width={shot.image.width}
          height={shot.image.height}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="w-full h-auto"
        />
        <figcaption className="px-5 py-3.5 border-t border-divider text-[1.3rem] text-muted">{shot.title}</figcaption>
      </figure>
    );
  }

  const flow = study.detail.design?.flows?.[0];
  if (!flow) return null;
  return (
    <figure className="rounded-panel border border-[rgba(15,23,42,0.06)] bg-white shadow-image p-6 md:p-8">
      <figcaption className="eyebrow mb-6">{flow.title}</figcaption>
      <ol className="relative">
        {flow.steps.map((step, i) => (
          <li key={step} className="relative flex items-start gap-4 pb-4 last:pb-0">
            {i < flow.steps.length - 1 && (
              <span className="absolute left-[1.35rem] top-[2.8rem] bottom-0 w-px bg-divider" aria-hidden="true" />
            )}
            <span
              className={`relative z-10 shrink-0 w-[2.8rem] h-[2.8rem] rounded-full border text-[1.15rem] font-semibold flex items-center justify-center tabular-nums ${
                i === flow.steps.length - 1
                  ? "bg-soft border-line-blue text-cobalt"
                  : "bg-white border-line text-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-[0.45rem] text-[1.45rem] text-ink leading-snug">{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

function FlagshipRow({ study, index }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article {...fade} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className={reverse ? "lg:order-2" : ""}>
        <FlagshipVisual study={study} />
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <p className="text-[1.35rem] font-medium text-muted mb-3">{study.roleLine}</p>
        <h3 className="text-[2.6rem] md:text-[3.2rem] font-[680] tracking-[-0.025em] leading-[1.15] text-ink mb-5">
          {study.title}
        </h3>
        <p className="text-[1.65rem] text-body leading-[1.7] mb-8 max-w-[60rem]">{study.description}</p>

        {study.metrics.length > 0 && (
          <dl className="flex flex-wrap gap-x-10 gap-y-5 mb-7 pt-6 border-t border-divider">
            {study.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse">
                <dt className="text-[1.3rem] text-muted mt-1">{m.label}</dt>
                <dd className="text-[2.6rem] font-[700] tracking-[-0.02em] text-cobalt leading-none">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {study.badges && (
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6" aria-label="Recognition">
            {study.badges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-[1.4rem] font-medium text-navy">
                <Award size={15} className="text-muted" aria-hidden="true" /> {b}
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2 mb-8" aria-label="Tags">
          {study.tags.slice(0, 3).map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <Link href={`/case-studies/${study.slug}`} className="text-link">
          View case study <span className="sr-only">: {study.title}</span>
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

function CompactCard({ study }) {
  const metricItems = [
    ...study.metrics.map((m) => `${m.value} ${m.label}`),
    ...(study.secondaryMetric ? [study.secondaryMetric] : []),
  ];
  return (
    <motion.article
      {...fade}
      className="group flex flex-col h-full bg-white border border-line rounded-card p-7 shadow-card transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-slate-300"
    >
      <p className="text-[1.3rem] font-medium text-muted mb-3">{study.roleLine}</p>
      <h3 className="text-[1.95rem] font-[650] tracking-[-0.015em] leading-snug text-ink mb-3">{study.title}</h3>
      <p className="text-[1.5rem] text-body leading-[1.65] mb-5">{study.description}</p>

      {study.notice && (
        <p className="flex items-start gap-2 text-[1.35rem] text-muted mb-5">
          <Info size={14} className="mt-[0.25rem] shrink-0" aria-hidden="true" />
          {study.notice}
        </p>
      )}

      {metricItems.length > 0 && <MetricLine items={metricItems} className="!text-[1.35rem] mb-6" />}

      <Link href={`/case-studies/${study.slug}`} className="text-link mt-auto !text-[1.45rem]">
        View case study <span className="sr-only">: {study.title}</span>
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </motion.article>
  );
}

export default function CaseStudies() {
  const [filter, setFilter] = useState("featured");

  const visible =
    filter === "featured"
      ? caseStudies.filter((c) => c.featured)
      : caseStudies.filter((c) => c.categories.includes(filter));

  const flagship = visible.filter((c) => c.tier === "flagship");
  const compact = visible.filter((c) => c.tier !== "flagship");

  return (
    <section id="case-studies" className="bg-alt py-24 md:py-32">
      <div className="main-container">
        <SectionHeader eyebrow="Selected Work" title={caseStudiesIntro.title} intro={caseStudiesIntro.subtitle} />

        {/* Quiet segmented filter */}
        <div className="-mx-[1.6rem] sm:mx-0 px-[1.6rem] sm:px-0 overflow-x-auto mb-14 md:mb-16">
          <div
            role="group"
            aria-label="Filter case studies"
            className="inline-flex items-center gap-1 rounded-btn border border-line bg-white p-1"
          >
            {caseStudyFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`whitespace-nowrap px-4 py-2 rounded-[8px] text-[1.4rem] font-medium transition-colors duration-200 ${
                  filter === f.id ? "bg-soft text-cobalt" : "text-muted hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} case studies
        </p>

        {flagship.length > 0 && (
          <div key={`f-${filter}`} className="flex flex-col gap-20 md:gap-28">
            {flagship.map((study, i) => (
              <FlagshipRow key={study.slug} study={study} index={i} />
            ))}
          </div>
        )}

        {compact.length > 0 && (
          <div className={flagship.length > 0 ? "mt-24 md:mt-28 pt-14 border-t border-divider" : ""}>
            {flagship.length > 0 && <h3 className="eyebrow mb-8">More case studies</h3>}
            <div key={`c-${filter}`} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compact.map((study) => (
                <CompactCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        )}

        {/* Other academic projects */}
        <details key={`d-${filter}`} open={filter === "academic"} className="group mt-16 border-t border-divider">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-6">
            <span className="text-[1.7rem] font-[620] text-ink">
              Other Academic Projects <span className="text-muted font-normal">({otherAcademicProjects.length})</span>
            </span>
            <ChevronDown size={18} className="text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <ul className="grid sm:grid-cols-2 gap-x-12 pb-4">
            {otherAcademicProjects.map((p) => (
              <li key={p.title} className="py-6 border-t border-divider">
                <h4 className="text-[1.65rem] font-[620] text-ink mb-1.5">{p.title}</h4>
                <p className="text-[1.45rem] text-body leading-[1.65] mb-2">{p.desc}</p>
                <p className="text-[1.3rem] text-muted mb-3">{p.tags.join(" · ")}</p>
                {p.links.length > 0 && (
                  <div className="flex flex-wrap gap-5">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-link !text-[1.35rem]">
                        {l.label === "GitHub" ? <Github size={14} aria-hidden="true" /> : <ExternalLink size={14} aria-hidden="true" />}
                        {l.label}
                        <span className="sr-only">: {p.title} (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
