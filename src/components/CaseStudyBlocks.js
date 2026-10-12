// src/components/CaseStudyBlocks.js
// Renders case studies that define their own header + section blocks (e.g. iHeal),
// using the same visual language as the standard case-study template.
import Image from "next/image";
import { ArrowDown, ArrowRight, CheckCircle2, ExternalLink, Github, Info, Maximize2 } from "lucide-react";

const GROUP_COLS = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-3",
};

function Chips({ items, tone = "light" }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((it) => (
        <li
          key={it}
          className={`px-3 py-1.5 rounded-lg text-[1.35rem] font-semibold border ${
            tone === "dark" ? "bg-white/10 border-white/15 text-white" : "bg-white border-slate-200 text-slate-700"
          }`}
        >
          {it}
        </li>
      ))}
    </ul>
  );
}

function FlowSteps({ title, steps }) {
  return (
    <figure className="rounded-[2rem] border border-slate-100 bg-slate-50/70 p-5 md:p-7">
      <figcaption className="text-[1.3rem] font-bold uppercase tracking-[0.14em] text-slate-600 mb-4">{title}</figcaption>
      <ol className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2.5">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col md:flex-row md:items-center gap-2.5">
            <span className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-[1.45rem] font-semibold text-slate-800 shadow-sm">
              <span className="text-[1.2rem] font-black text-blue-600">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </span>
            {i < steps.length - 1 && (
              <ArrowRight size={16} className="text-blue-400 rotate-90 md:rotate-0 ml-6 md:ml-0 shrink-0" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Block({ b }) {
  switch (b.kind) {
    case "p":
      return <p className="text-[1.65rem] md:text-[1.75rem] text-slate-700 leading-[1.7] max-w-[780px]">{b.text}</p>;

    case "note":
      return (
        <p className="flex items-start gap-2.5 text-[1.45rem] text-slate-600 max-w-[780px]">
          <Info size={16} className="text-slate-500 mt-[0.25rem] shrink-0" aria-hidden="true" />
          {b.text}
        </p>
      );

    case "metric":
      return (
        <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6">
          <p className="text-[5rem] md:text-[6rem] font-black text-slate-900 leading-none tracking-tight">{b.value}</p>
          <div className="pb-1">
            <p className="text-[1.4rem] font-black uppercase tracking-[0.14em] text-blue-600">{b.label}</p>
            {b.text && <p className="text-[1.6rem] text-slate-600 leading-[1.6] mt-1 max-w-[640px]">{b.text}</p>}
          </div>
        </div>
      );

    case "groups":
      return (
        <div className={`grid gap-4 ${GROUP_COLS[b.columns] || GROUP_COLS[3]}`}>
          {b.groups.map((g) => (
            <div key={g.label} className="rounded-[1.8rem] border border-slate-200 bg-white p-6">
              <h3 className="text-[1.3rem] font-bold uppercase tracking-[0.14em] text-blue-600 mb-3">{g.label}</h3>
              <ul className="flex flex-col gap-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[1.5rem] text-slate-800 leading-snug">
                    <CheckCircle2 size={15} className="text-blue-500 mt-[0.3rem] shrink-0" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "stages":
      return (
        <ol className="flex flex-col items-stretch max-w-[820px]">
          {b.stages.map((st, i) => (
            <li key={st.label} className="flex flex-col items-center">
              <div
                className={`w-full rounded-[2rem] border p-6 ${
                  st.accent ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100" : "bg-white border-slate-200"
                }`}
              >
                <h3 className={`text-[1.3rem] font-bold uppercase tracking-[0.14em] mb-3 ${st.accent ? "text-blue-100" : "text-slate-600"}`}>
                  {st.label}
                </h3>
                {st.items && <Chips items={st.items} />}
                {st.text && <p className="text-[1.8rem] font-black leading-snug">{st.text}</p>}
              </div>
              {i < b.stages.length - 1 && <ArrowDown size={22} className="text-blue-400 my-3" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      );

    case "flow":
      return <FlowSteps title={b.title} steps={b.steps} />;

    case "modules":
      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {b.modules.map((m) => (
            <div key={m.num} className="rounded-[1.8rem] border border-slate-200 bg-white p-6">
              <p className="text-[1.4rem] font-black text-blue-600 mb-1">{m.num}</p>
              <h3 className="text-[1.75rem] font-black text-slate-900 leading-snug mb-4">{m.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {m.items.map((it) => (
                  <li key={it} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[1.3rem] font-semibold text-slate-700">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "inline":
      return (
        <ul className="flex flex-wrap gap-2.5">
          {b.items.map((it) => (
            <li key={it} className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-[1.4rem] font-bold text-blue-800">
              {it}
            </li>
          ))}
        </ul>
      );

    case "chips":
      return (
        <div>
          <h3 className="text-[1.3rem] font-bold uppercase tracking-[0.14em] text-slate-600 mb-3">{b.label}</h3>
          <Chips items={b.items} />
        </div>
      );

    case "stack":
      return (
        <div className="rounded-[2rem] border border-slate-200 bg-white overflow-hidden">
          <h3 className="px-6 py-4 bg-slate-50 border-b border-slate-100 text-[1.3rem] font-bold uppercase tracking-[0.14em] text-slate-600">
            {b.title}
          </h3>
          <dl className="divide-y divide-slate-100">
            {b.rows.map((r) => (
              <div key={r.label} className="grid md:grid-cols-[240px_1fr] gap-2 md:gap-6 px-6 py-4">
                <dt className="text-[1.45rem] font-black text-slate-900">{r.label}</dt>
                <dd className="text-[1.5rem] text-slate-600 leading-[1.6]">{r.items.join(" • ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "numbered":
      return (
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {b.items.map((it, i) => (
            <li key={it} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4">
              <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 text-[1.4rem] font-black flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span className="text-[1.55rem] font-semibold text-slate-800">{it}</span>
            </li>
          ))}
        </ol>
      );

    case "outcome":
      return (
        <p className="flex items-start gap-3 rounded-2xl bg-slate-900 text-white px-6 py-4 text-[1.6rem] font-semibold leading-[1.55] max-w-[820px]">
          <CheckCircle2 size={20} className="text-blue-400 mt-[0.15rem] shrink-0" aria-hidden="true" />
          {b.text}
        </p>
      );

    case "blocks":
      return (
        <div className={`grid gap-4 sm:grid-cols-2 ${b.blocks.length === 5 ? "lg:grid-cols-3" : "xl:grid-cols-4"}`}>
          {b.blocks.map((blk) => (
            <div key={blk.title} className="rounded-[1.8rem] border border-slate-200 bg-white p-6">
              {blk.value && (
                <p className="text-[3.4rem] font-black text-slate-900 leading-none tracking-tight mb-2">{blk.value}</p>
              )}
              <h3 className="text-[1.35rem] font-bold uppercase tracking-[0.14em] text-blue-600 mb-2">{blk.title}</h3>
              <p className="text-[1.5rem] text-slate-600 leading-[1.6]">{blk.copy}</p>
            </div>
          ))}
        </div>
      );

    case "bullets":
      return (
        <ul className="flex flex-col gap-2.5 max-w-[780px]">
          {b.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-[1.55rem] text-slate-600 leading-[1.6]">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-[0.85rem] shrink-0" aria-hidden="true" />
              {it}
            </li>
          ))}
        </ul>
      );

    case "images":
      return (
        <ul className="grid gap-5">
          {b.images.map((img) => (
            <li
              key={img.src}
              className={`rounded-[1.8rem] border border-slate-200 bg-white overflow-hidden ${img.narrow ? "max-w-[760px]" : ""}`}
            >
              <div className="bg-slate-50 border-b border-slate-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes={img.narrow ? "760px" : "(min-width: 1024px) 1000px, 100vw"}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h3 className="text-[1.7rem] font-black text-slate-900 mb-1.5">{img.title}</h3>
                  <p className="text-[1.5rem] text-slate-600 leading-[1.6]">{img.desc}</p>
                </div>
                {img.zoom && (
                  <a
                    href={img.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[1.4rem] font-bold text-blue-600 hover:text-slate-900 whitespace-nowrap"
                  >
                    <Maximize2 size={14} aria-hidden="true" /> Open full size
                    <span className="sr-only">: {img.title} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export function BlockList({ blocks }) {
  return (
    <div className="flex flex-col gap-7">
      {blocks.map((b, i) => (
        <Block key={i} b={b} />
      ))}
    </div>
  );
}

export function CustomHeader({ study }) {
  const h = study.detail.header;
  return (
    <header className="mb-10 md:mb-12">
      <p className="text-[1.4rem] md:text-[1.5rem] font-semibold text-blue-700 mb-4">{h.role}</p>
      <h1 className="text-[3.6rem] sm:text-[4.4rem] md:text-[5.4rem] font-black tracking-tighter leading-[1.05] text-slate-900 mb-6 max-w-[1000px]">
        {study.title}
      </h1>
      <p className="text-[1.9rem] md:text-[2.2rem] text-slate-600 font-medium leading-[1.5] max-w-[820px] mb-5">{h.subtitle}</p>
      <p className="text-[1.5rem] font-bold text-slate-900">{h.meta}</p>
      <p className="text-[1.4rem] text-slate-500 mt-1 mb-8">
        {h.institution} • {h.timeline}
      </p>

      {/* Primary metrics */}
      <dl className="flex flex-wrap gap-3 mb-5">
        {study.metrics.map((m) => (
          <div key={m.label} className="flex-[1_1_15rem] flex flex-col-reverse rounded-2xl bg-white border border-slate-200 px-5 py-4">
            <dt className="text-[1.25rem] font-semibold text-slate-600 leading-snug mt-1.5">{m.label}</dt>
            <dd className="text-[2.6rem] md:text-[3rem] font-black text-slate-900 leading-none tracking-tight">{m.value}</dd>
          </div>
        ))}
      </dl>

      <p className="text-[1.5rem] font-black text-slate-800 mb-1">{h.techLine.join(" • ")}</p>
      <p className="text-[1.35rem] font-semibold text-slate-500">{h.secondaryLine.join(" • ")}</p>

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

      {h.image && (
        <figure className="mt-10 rounded-[2rem] border border-slate-200 bg-white overflow-hidden shadow-[0_25px_50px_-20px_rgba(15,23,42,0.18)]">
          <Image
            src={h.image.src}
            alt={h.image.alt}
            width={h.image.width}
            height={h.image.height}
            priority
            sizes="(min-width: 1280px) 1130px, 100vw"
            className="w-full h-auto"
          />
          <figcaption className="px-6 py-4 border-t border-slate-100 text-[1.4rem] text-slate-600">{h.image.caption}</figcaption>
        </figure>
      )}
    </header>
  );
}
