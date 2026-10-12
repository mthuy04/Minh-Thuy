// src/components/ui.js — small shared presentation helpers

// Left-aligned editorial section header.
export function SectionHeader({ eyebrow, title, intro, dark = false, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
      <div className="max-w-[72rem]">
        {eyebrow && <p className={`eyebrow mb-4 ${dark ? "!text-dark-muted" : ""}`}>{eyebrow}</p>}
        <h2 className={`section-title ${dark ? "!text-white" : ""}`}>{title}</h2>
        {intro && (
          <p className={`mt-5 text-[1.7rem] leading-[1.7] ${dark ? "text-dark-text" : "text-body"}`}>{intro}</p>
        )}
      </div>
      {children}
    </div>
  );
}

// "~8,000 Students" -> { num: "~8,000", label: "Students" }; "Enterprise Deployment" -> { num: null, ... }
export function splitMetric(text) {
  const m = text.match(/^([~≈]?[\d.,]+%?(?:-fold)?)\s+(.*)$/);
  return m ? { num: m[1], label: m[2] } : { num: null, label: text };
}

// Inline metric cluster: cobalt numbers, slate labels, dot separators.
export function MetricLine({ items, className = "" }) {
  return (
    <ul className={`flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 text-[1.45rem] ${className}`}>
      {items.map((text, i) => {
        const { num, label } = splitMetric(text);
        return (
          <li key={text} className="flex items-baseline gap-2.5">
            {i > 0 && (
              <span className="text-slate-300 select-none" aria-hidden="true">
                ·
              </span>
            )}
            <span>
              {num && <span className="font-semibold text-cobalt">{num} </span>}
              <span className="text-body">{label}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
