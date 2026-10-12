// src/components/CaseStudies.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Info, ChevronDown, Github, ExternalLink, Timer } from "lucide-react";
import {
  caseStudies,
  caseStudyFilters,
  caseStudiesIntro,
  otherAcademicProjects,
} from "@/data/portfolio";

const TIER_STYLES = {
  flagship:
    "bg-white border border-slate-100 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.18)] rounded-[2.4rem] md:rounded-[3rem] p-7 md:p-10",
  supporting:
    "bg-white/90 border border-slate-200/70 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.15)] rounded-[2.4rem] p-7 md:p-9",
  secondary: "bg-white/80 border border-slate-200/70 rounded-[2.2rem] p-6 md:p-7",
};

function CaseCard({ study }) {
  const { tier } = study;
  const isSecondary = tier === "secondary";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`relative flex flex-col h-full overflow-hidden ${TIER_STYLES[tier]}`}
    >
      {tier === "flagship" && (
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400" aria-hidden="true" />
      )}

      <p className="text-[1.3rem] font-semibold text-blue-700 mb-3 leading-snug">{study.roleLine}</p>

      <h3
        className={`font-black text-slate-900 leading-tight tracking-tight mb-4 ${
          isSecondary ? "text-[1.9rem]" : tier === "flagship" ? "text-[2.3rem] md:text-[2.6rem]" : "text-[2.1rem] md:text-[2.3rem]"
        }`}
      >
        {study.title}
      </h3>

      <p className={`text-slate-600 leading-[1.65] mb-6 ${isSecondary ? "text-[1.45rem]" : "text-[1.55rem]"}`}>
        {study.description}
      </p>

      {study.notice && (
        <p className="flex items-start gap-2 text-[1.35rem] text-slate-600 bg-amber-50 border border-amber-100 rounded-xl px-3.5 py-2.5 mb-6">
          <Info size={15} className="text-amber-600 mt-[0.2rem] shrink-0" aria-hidden="true" />
          {study.notice}
        </p>
      )}

      {study.metrics.length > 0 && (
        <dl className="flex flex-wrap gap-3 mb-6">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className={`flex flex-col-reverse rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 ${
                isSecondary ? "flex-[1_1_11rem]" : "flex-[1_1_13rem]"
              }`}
            >
              <dt className="text-[1.2rem] font-semibold text-slate-600 uppercase tracking-wide leading-tight mt-1">
                {m.label}
              </dt>
              <dd className={`font-black text-slate-900 leading-none tracking-tight ${isSecondary ? "text-[2rem]" : "text-[2.2rem] md:text-[2.4rem]"}`}>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {study.secondaryMetric && (
        <p className="flex items-center gap-2 -mt-3 mb-6 text-[1.35rem] font-semibold text-slate-600">
          <Timer size={15} className="text-blue-600" aria-hidden="true" /> Inference latency: {study.secondaryMetric}
        </p>
      )}

      {study.badges && (
        <ul className="flex flex-wrap gap-2.5 mb-6" aria-label="Recognition">
          {study.badges.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-[1.3rem] font-bold"
            >
              <Award size={14} aria-hidden="true" /> {b}
            </li>
          ))}
        </ul>
      )}

      <ul className="flex flex-wrap gap-2 mb-7" aria-label="Tags">
        {study.tags.map((t) => (
          <li key={t} className="px-3 py-1 bg-white text-slate-600 text-[1.25rem] font-semibold rounded-lg border border-slate-200">
            {t}
          </li>
        ))}
      </ul>

      <Link
        href={`/case-studies/${study.slug}`}
        className={`mt-auto inline-flex items-center justify-center gap-2.5 rounded-2xl font-black transition-colors ${
          isSecondary
            ? "self-start text-[1.45rem] text-blue-600 hover:text-slate-900"
            : "bg-slate-900 text-white hover:bg-blue-600 py-4 px-6 text-[1.5rem]"
        }`}
      >
        View Case Study <span className="sr-only">: {study.title}</span>
        <ArrowRight size={16} aria-hidden="true" />
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

  const primary = visible.filter((c) => c.tier !== "secondary");
  const secondary = visible.filter((c) => c.tier === "secondary");

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="main-container">
        <div className="flex flex-col items-center mb-12 text-center">
          <p className="eyebrow mb-3">Portfolio</p>
          <h2 className="text-[4rem] md:text-[5.6rem] font-black tracking-tighter text-slate-900 leading-none mb-5">
            Featured <span className="text-blue-600">Case Studies.</span>
          </h2>
          <p className="max-w-[640px] text-[1.7rem] text-slate-600 leading-relaxed">{caseStudiesIntro.subtitle}</p>

          <div role="group" aria-label="Filter case studies" className="flex flex-wrap justify-center gap-2.5 mt-10">
            {caseStudyFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`px-5 py-2.5 rounded-full text-[1.3rem] font-bold uppercase tracking-wider transition-colors border ${
                  filter === f.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-slate-900"
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

        {primary.length > 0 && (
          <div key={`p-${filter}`} className="grid md:grid-cols-2 gap-6 md:gap-8">
            {primary.map((study) => (
              <CaseCard key={study.slug} study={study} />
            ))}
          </div>
        )}

        {secondary.length > 0 && (
          <div className={primary.length > 0 ? "mt-14" : ""}>
            {primary.length > 0 && (
              <h3 className="text-[1.4rem] font-bold uppercase tracking-[0.16em] text-slate-500 mb-5">
                More case studies
              </h3>
            )}
            <div key={`s-${filter}`} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondary.map((study) => (
                <CaseCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        )}

        {/* Other academic projects */}
        <details
          key={`d-${filter}`}
          open={filter === "academic"}
          className="group mt-14 rounded-[2.2rem] border border-slate-200/70 bg-white/70"
        >
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 md:px-8 py-5 rounded-[2.2rem]">
            <span className="text-[1.6rem] font-black text-slate-900">
              Other Academic Projects{" "}
              <span className="text-slate-500 font-semibold">({otherAcademicProjects.length})</span>
            </span>
            <ChevronDown size={20} className="text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-8 pb-7">
            {otherAcademicProjects.map((p) => (
              <li key={p.title} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5">
                <h4 className="text-[1.6rem] font-black text-slate-900 leading-snug mb-2">{p.title}</h4>
                <p className="text-[1.4rem] text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                <p className="text-[1.2rem] font-semibold text-slate-500 mb-4">{p.tags.join(" • ")}</p>
                {p.links.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[1.35rem] font-bold text-blue-600 hover:text-slate-900"
                      >
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
