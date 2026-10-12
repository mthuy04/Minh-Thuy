// src/app/case-studies/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Award, ExternalLink, Github, Info, Lock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy, profile } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = `${study.title} | ${profile.name}`;
  return {
    title,
    description: study.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title,
      description: study.description,
      url: `/case-studies/${study.slug}`,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${profile.name} — Business Analyst Portfolio` }],
    },
    twitter: { card: "summary_large_image", title, description: study.description },
  };
}

/* ---------- small building blocks ---------- */

function Section({ num, title, children }) {
  return (
    <section className="py-10 md:py-12 border-t border-slate-100" aria-labelledby={`s-${num}`}>
      <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
        <p className="text-[1.4rem] font-black text-blue-600 tracking-[0.12em] md:pt-1.5" aria-hidden="true">
          {num}
        </p>
        <div className="min-w-0">
          <h2 id={`s-${num}`} className="text-[2.4rem] md:text-[2.8rem] font-black tracking-tight text-slate-900 mb-5">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function Paragraphs({ items }) {
  return (
    <div className="flex flex-col gap-4 max-w-[760px]">
      {items.map((p) => (
        <p key={p} className="text-[1.65rem] md:text-[1.75rem] text-slate-700 leading-[1.7]">
          {p}
        </p>
      ))}
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="flex flex-col gap-3 max-w-[780px]">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3 text-[1.6rem] text-slate-700 leading-[1.6]">
          <CheckCircle2 size={18} className="text-blue-500 mt-[0.35rem] shrink-0" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Flow({ flow }) {
  return (
    <figure className="rounded-[2rem] border border-slate-100 bg-slate-50/70 p-5 md:p-7 mb-6">
      <figcaption className="text-[1.3rem] font-bold uppercase tracking-[0.14em] text-slate-600 mb-4">
        {flow.title}
      </figcaption>
      <ol className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2.5">
        {flow.steps.map((step, i) => (
          <li key={step} className="flex flex-col md:flex-row md:items-center gap-2.5">
            <span className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-[1.45rem] font-semibold text-slate-800 shadow-sm">
              <span className="text-[1.2rem] font-black text-blue-600">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </span>
            {i < flow.steps.length - 1 && (
              <ArrowRight size={16} className="text-blue-400 rotate-90 md:rotate-0 ml-6 md:ml-0 shrink-0" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function MetricGrid({ metrics }) {
  return (
    <dl className="flex flex-wrap gap-3">
      {metrics.map((m) => (
        <div key={m.label} className="flex-[1_1_15rem] flex flex-col-reverse rounded-2xl bg-white border border-slate-200 px-5 py-4">
          <dt className="text-[1.25rem] font-semibold text-slate-600 leading-snug mt-1.5">{m.label}</dt>
          <dd className="text-[2.6rem] md:text-[3rem] font-black text-slate-900 leading-none tracking-tight">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- page ---------- */

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const d = study.detail;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];
  const keyMetrics = d.keyMetrics || study.metrics;

  const overviewRows = [
    ["Project type", d.overview.type],
    ["Role", d.overview.role],
    ["Organization", d.overview.organization],
    ["Client", d.overview.client],
    ["Team", d.overview.team],
    ["Timeline", d.overview.timeline],
    ["Scope", d.overview.scope],
  ].filter(([, v]) => v);

  // Build the section list, skipping any that have no content, then number them.
  const sections = [
    {
      title: "Overview",
      body: (
        <>
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mb-8 max-w-[880px]">
            {overviewRows.map(([k, v]) => (
              <div key={k} className={k === "Scope" || k === "Project type" ? "sm:col-span-2" : ""}>
                <dt className="text-[1.25rem] font-bold uppercase tracking-[0.14em] text-slate-500 mb-1">{k}</dt>
                <dd className="text-[1.65rem] font-semibold text-slate-900 leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
          {keyMetrics.length > 0 && <MetricGrid metrics={keyMetrics} />}
          {d.recognition && (
            <ul className="flex flex-wrap gap-3 mt-6" aria-label="Recognition">
              {d.recognition.map((r) => (
                <li key={r} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-[1.4rem] font-bold">
                  <Award size={15} aria-hidden="true" /> {r}
                </li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    d.context?.length && { title: "Context", body: <Paragraphs items={d.context} /> },
    d.problem?.length && { title: "Problem", body: <Paragraphs items={d.problem} /> },
    {
      title: "My Role & Responsibility",
      body: (
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            ["What I owned", d.role.owned, "bg-blue-50/70 border-blue-100"],
            ["What I contributed to", d.role.contributed, "bg-white border-slate-200"],
            ["Owned by others", d.role.others, "bg-slate-50 border-slate-200"],
          ]
            .filter(([, items]) => items?.length)
            .map(([label, items, cls]) => (
              <div key={label} className={`rounded-[1.8rem] border p-6 ${cls}`}>
                <h3 className="text-[1.3rem] font-bold uppercase tracking-[0.14em] text-slate-600 mb-3">{label}</h3>
                <ul className="flex flex-col gap-2.5">
                  {items.map((it) => (
                    <li key={it} className="text-[1.5rem] text-slate-800 leading-[1.55]">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ),
    },
    d.discovery?.length && { title: "Discovery & Analysis", body: <Bullets items={d.discovery} /> },
    (d.design?.flows?.length || d.design?.bullets?.length) && {
      title: "Process / System Design",
      body: (
        <>
          {d.design.flows?.map((f) => <Flow key={f.title} flow={f} />)}
          {d.design.bullets?.length > 0 && <Bullets items={d.design.bullets} />}
        </>
      ),
    },
    d.requirements?.length && { title: "Requirements / Artifacts", body: <Bullets items={d.requirements} /> },
    d.technical?.length && {
      title: "Technical / Integration Detail",
      body: (
        <dl className="grid sm:grid-cols-2 gap-4">
          {d.technical.map((t) => (
            <div key={t.title} className="rounded-[1.8rem] border border-slate-200 bg-white p-6">
              <dt className="text-[1.7rem] font-black text-slate-900 mb-1.5">{t.title}</dt>
              <dd className="text-[1.5rem] text-slate-600 leading-[1.6]">{t.desc}</dd>
            </div>
          ))}
        </dl>
      ),
    },
    d.validation?.length && { title: "Validation", body: <Bullets items={d.validation} /> },
    d.outcome?.length && {
      title: "Outcome / Evidence",
      body: (
        <ul className="flex flex-col gap-3 max-w-[820px]">
          {d.outcome.map((o) => (
            <li key={o} className="rounded-2xl bg-slate-900 text-white px-6 py-4 text-[1.6rem] font-semibold leading-[1.55]">
              {o}
            </li>
          ))}
        </ul>
      ),
    },
    d.artifacts?.length && {
      title: "Key Artifacts",
      body: (
        <>
          {d.confidentialNote && (
            <p className="flex items-start gap-2.5 text-[1.45rem] text-slate-600 mb-6 max-w-[780px]">
              <Lock size={16} className="text-slate-500 mt-[0.25rem] shrink-0" aria-hidden="true" />
              {d.confidentialNote}
            </p>
          )}
          <ul className="grid md:grid-cols-2 gap-5">
            {d.artifacts.map((a) => (
              <li
                key={a.title}
                className={`rounded-[1.8rem] border border-slate-200 bg-white overflow-hidden ${a.image ? "md:col-span-2" : ""}`}
              >
                {a.image && (
                  <div className="bg-slate-50 border-b border-slate-100">
                    <Image
                      src={a.image.src}
                      alt={a.image.alt}
                      width={a.image.width}
                      height={a.image.height}
                      sizes="(min-width: 1024px) 900px, 100vw"
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-[1.7rem] font-black text-slate-900 mb-1.5">{a.title}</h3>
                  <p className="text-[1.5rem] text-slate-600 leading-[1.6]">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    d.takeaways?.length && { title: "Key Takeaways", body: <Bullets items={d.takeaways} /> },
  ].filter(Boolean);

  return (
    <>
      <Navbar />
      <main id="main-content" className="relative bg-white pt-36 md:pt-44 pb-20">
        <article className="main-container">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-[1.45rem] font-bold text-slate-600 hover:text-blue-600 mb-10"
          >
            <ArrowLeft size={16} aria-hidden="true" /> All case studies
          </Link>

          {/* Header */}
          <header className="mb-10 md:mb-12">
            <p className="text-[1.4rem] md:text-[1.5rem] font-semibold text-blue-700 mb-4">{study.roleLine}</p>
            <h1 className="text-[3.6rem] sm:text-[4.4rem] md:text-[5.4rem] font-black tracking-tighter leading-[1.05] text-slate-900 mb-6 max-w-[1000px]">
              {study.title}
            </h1>
            <p className="text-[1.75rem] md:text-[1.9rem] text-slate-600 leading-[1.65] max-w-[820px] mb-6">
              {study.description}
            </p>

            {(d.notice || study.notice) && (
              <p className="flex items-start gap-2.5 text-[1.5rem] text-slate-700 bg-amber-50 border border-amber-100 rounded-2xl px-5 py-3.5 max-w-[820px] mb-6">
                <Info size={17} className="text-amber-600 mt-[0.2rem] shrink-0" aria-hidden="true" />
                {d.notice || study.notice}
              </p>
            )}

            <ul className="flex flex-wrap gap-2" aria-label="Tags">
              {study.tags.map((t) => (
                <li key={t} className="px-3 py-1 bg-white text-slate-600 text-[1.3rem] font-semibold rounded-lg border border-slate-200">
                  {t}
                </li>
              ))}
            </ul>

            {study.links?.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-7">
                {study.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-blue-600 text-white px-5 py-3 rounded-2xl text-[1.45rem] font-bold transition-colors"
                  >
                    {l.href.includes("github.com") ? <Github size={16} aria-hidden="true" /> : <ExternalLink size={16} aria-hidden="true" />}
                    {l.label}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ))}
              </div>
            )}
          </header>

          {sections.map((s, i) => (
            <Section key={s.title} num={String(i + 1).padStart(2, "0")} title={s.title}>
              {s.body}
            </Section>
          ))}

          {/* Prev / next */}
          <nav aria-label="More case studies" className="mt-6 pt-10 border-t border-slate-100 grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/case-studies/${prev.slug}`} className="group rounded-[1.8rem] border border-slate-200 p-6 hover:border-blue-300 transition-colors">
                <span className="flex items-center gap-2 text-[1.3rem] font-bold uppercase tracking-[0.14em] text-slate-500 mb-2">
                  <ArrowLeft size={14} aria-hidden="true" /> Previous
                </span>
                <span className="text-[1.7rem] font-black text-slate-900 group-hover:text-blue-600">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/case-studies/${next.slug}`} className="group rounded-[1.8rem] border border-slate-200 p-6 hover:border-blue-300 transition-colors sm:text-right">
                <span className="flex items-center sm:justify-end gap-2 text-[1.3rem] font-bold uppercase tracking-[0.14em] text-slate-500 mb-2">
                  Next <ArrowRight size={14} aria-hidden="true" />
                </span>
                <span className="text-[1.7rem] font-black text-slate-900 group-hover:text-blue-600">{next.title}</span>
              </Link>
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
