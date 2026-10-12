// src/app/case-studies/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Award, ExternalLink, Github, Info, Lock } from "lucide-react";
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
    <section className="py-12 md:py-14 border-t border-divider" aria-labelledby={`s-${num}`}>
      <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
        <p className="text-[1.3rem] font-semibold text-muted tabular-nums tracking-[0.08em] md:pt-2" aria-hidden="true">
          {num}
        </p>
        <div className="min-w-0">
          <h2 id={`s-${num}`} className="text-[2.3rem] md:text-[2.6rem] font-[680] tracking-[-0.025em] text-ink mb-6">
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
        <p key={p} className="text-[1.65rem] md:text-[1.75rem] text-body leading-[1.75]">
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
        <li key={b} className="relative pl-5 text-[1.6rem] text-body leading-[1.7]">
          <span className="absolute left-0 top-[1.2rem] w-[5px] h-[5px] rounded-full bg-slate-300" aria-hidden="true" />
          {b}
        </li>
      ))}
    </ul>
  );
}

function Flow({ flow }) {
  return (
    <figure className="rounded-card border border-line bg-white p-5 md:p-7 mb-8">
      <figcaption className="eyebrow mb-5">
        {flow.title}
      </figcaption>
      <ol className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2.5">
        {flow.steps.map((step, i) => (
          <li key={step} className="flex flex-col md:flex-row md:items-center gap-2.5">
            <span className="flex items-center gap-3 bg-alt border border-divider rounded-[10px] px-4 py-2.5 text-[1.45rem] font-medium text-ink">
              <span className="text-[1.2rem] font-semibold text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </span>
            {i < flow.steps.length - 1 && (
              <ArrowRight size={15} className="text-slate-300 rotate-90 md:rotate-0 ml-6 md:ml-0 shrink-0" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function MetricGrid({ metrics }) {
  return (
    <dl className="flex flex-wrap gap-x-12 gap-y-6 pt-7 border-t border-divider">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col-reverse">
          <dt className="text-[1.3rem] text-muted leading-snug mt-1.5">{m.label}</dt>
          <dd className="text-[2.8rem] md:text-[3.2rem] font-[700] text-cobalt leading-none tracking-[-0.02em]">{m.value}</dd>
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
                <dt className="eyebrow mb-1.5">{k}</dt>
                <dd className="text-[1.65rem] font-medium text-ink leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
          {keyMetrics.length > 0 && <MetricGrid metrics={keyMetrics} />}
          {d.recognition && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-7" aria-label="Recognition">
              {d.recognition.map((r) => (
                <li key={r} className="flex items-center gap-2 text-[1.45rem] font-medium text-navy">
                  <Award size={15} className="text-muted" aria-hidden="true" /> {r}
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
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8">
          {[
            ["What I owned", d.role.owned, "border-t-cobalt"],
            ["What I contributed to", d.role.contributed, "border-t-slate-300"],
            ["Owned by others", d.role.others, "border-t-line"],
          ]
            .filter(([, items]) => items?.length)
            .map(([label, items, cls]) => (
              <div key={label} className={`border-t-2 pt-5 ${cls}`}>
                <h3 className="eyebrow !text-navy mb-4">{label}</h3>
                <ul className="flex flex-col gap-2.5">
                  {items.map((it) => (
                    <li key={it} className="text-[1.55rem] text-body leading-[1.65]">
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
        <dl className="grid sm:grid-cols-2 gap-x-10">
          {d.technical.map((t) => (
            <div key={t.title} className="py-5 border-t border-divider">
              <dt className="text-[1.65rem] font-[620] text-ink mb-1.5">{t.title}</dt>
              <dd className="text-[1.5rem] text-body leading-[1.65]">{t.desc}</dd>
            </div>
          ))}
        </dl>
      ),
    },
    d.validation?.length && { title: "Validation", body: <Bullets items={d.validation} /> },
    d.outcome?.length && {
      title: "Outcome / Evidence",
      body: (
        <ul className="flex flex-col gap-4 max-w-[820px]">
          {d.outcome.map((o) => (
            <li key={o} className="border-l-2 border-cobalt pl-5 text-[1.7rem] font-medium text-ink leading-[1.6]">
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
            <p className="flex items-start gap-2.5 text-[1.45rem] text-muted mb-7 max-w-[780px]">
              <Lock size={15} className="mt-[0.25rem] shrink-0" aria-hidden="true" />
              {d.confidentialNote}
            </p>
          )}
          <ul className="grid md:grid-cols-2 gap-5">
            {d.artifacts.map((a) => (
              <li
                key={a.title}
                className={`rounded-card border border-[rgba(15,23,42,0.06)] bg-white overflow-hidden ${a.image ? "md:col-span-2 shadow-image" : ""}`}
              >
                {a.image && (
                  <div className="bg-alt border-b border-divider">
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
                  <h3 className="text-[1.65rem] font-[620] text-ink mb-1.5">{a.title}</h3>
                  <p className="text-[1.5rem] text-body leading-[1.65]">{a.desc}</p>
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
      <main id="main-content" className="relative bg-page pt-[11rem] md:pt-[14rem] pb-24">
        <article className="main-container">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-[1.45rem] font-medium text-muted hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft size={16} aria-hidden="true" /> All case studies
          </Link>

          {/* Header */}
          <header className="mb-12 md:mb-14">
            <p className="text-[1.45rem] font-medium text-muted mb-4">{study.roleLine}</p>
            <h1 className="text-[3.4rem] sm:text-[4.2rem] md:text-[5rem] font-[720] tracking-[-0.035em] leading-[1.08] text-ink mb-6 max-w-[1000px]">
              {study.title}
            </h1>
            <p className="text-[1.75rem] md:text-[1.85rem] text-body leading-[1.7] max-w-[820px] mb-7">
              {study.description}
            </p>

            {(d.notice || study.notice) && (
              <p className="flex items-start gap-2.5 text-[1.5rem] text-navy bg-soft border border-line-blue rounded-[12px] px-5 py-3.5 max-w-[820px] mb-7">
                <Info size={16} className="text-cobalt mt-[0.25rem] shrink-0" aria-hidden="true" />
                {d.notice || study.notice}
              </p>
            )}

            <ul className="flex flex-wrap gap-2" aria-label="Tags">
              {study.tags.map((t) => (
                <li key={t} className="tag">
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
                    className="btn-secondary !text-[1.45rem] !py-[1.1rem]"
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
          <nav aria-label="More case studies" className="mt-4 pt-10 border-t border-divider grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/case-studies/${prev.slug}`} className="group rounded-card border border-line bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-slate-300 hover:shadow-card">
                <span className="flex items-center gap-2 eyebrow mb-2">
                  <ArrowLeft size={14} aria-hidden="true" /> Previous
                </span>
                <span className="text-[1.65rem] font-[620] text-ink group-hover:text-cobalt transition-colors">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/case-studies/${next.slug}`} className="group rounded-card border border-line bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-slate-300 hover:shadow-card sm:text-right">
                <span className="flex items-center sm:justify-end gap-2 eyebrow mb-2">
                  Next <ArrowRight size={14} aria-hidden="true" />
                </span>
                <span className="text-[1.65rem] font-[620] text-ink group-hover:text-cobalt transition-colors">{next.title}</span>
              </Link>
            )}
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
