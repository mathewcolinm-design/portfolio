import { ArrowUpRight } from "lucide-react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { Metric } from "../data/content";

type Parsed = { prefix: string; num: number; suffix: string; decimals: number; grouped: boolean };

function parse(value: string): Parsed | null {
  const m = value.trim().match(/^([^\d]*)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  return {
    prefix: m[1],
    num: parseFloat(m[2].replace(/,/g, "")),
    suffix: m[3],
    decimals: (m[2].split(".")[1] ?? "").length,
    grouped: m[2].includes(","),
  };
}

function format(p: Parsed, n: number) {
  const fixed = n.toFixed(p.decimals);
  const body = p.grouped ? Number(fixed).toLocaleString("en-US", { minimumFractionDigits: p.decimals }) : fixed;
  return `${p.prefix}${body}${p.suffix}`;
}

/**
 * A figure that counts up once as it comes into view ("400K+", "142,000+").
 * Screen readers get the final value straight away; with reduced motion it
 * simply shows the final value.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const parsed = parse(value);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const [shown, setShown] = useState(() => (parsed && !reduced ? format(parsed, 0) : value));

  useEffect(() => {
    if (!parsed || reduced) {
      setShown(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, parsed.num, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(format(parsed, v)),
      onComplete: () => setShown(value),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, value]);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {shown}
      </span>
    </span>
  );
}

export type Figure = { value: string; label: string; detail?: string; to?: string; linkLabel?: string };

const figureScale = {
  feature: "text-[clamp(4rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.04em]",
  large: "text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.04em]",
  small: "text-[clamp(2.5rem,4.4vw,3.5rem)] leading-[0.95] tracking-[-0.04em]",
};

function FigureTile({ figure, size, className = "" }: { figure: Figure; size: keyof typeof figureScale; className?: string }) {
  const body: ReactNode = (
    <>
      <div className="flex items-start justify-between gap-4">
        <p className={`max-w-[26ch] text-muted ${size === "small" ? "text-[15px]" : "text-base"}`}>{figure.label}</p>
        {figure.to && (
          <ArrowUpRight
            size={18}
            strokeWidth={1.25}
            aria-hidden="true"
            className="shrink-0 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
          />
        )}
      </div>
      <div>
        <p className={figureScale[size]}>
          <CountUp value={figure.value} />
        </p>
        {figure.detail && <p className="mt-3 max-w-[34ch] text-base text-muted">{figure.detail}</p>}
        {figure.to && figure.linkLabel && <p className="mt-3 text-[15px]">{figure.linkLabel}</p>}
      </div>
    </>
  );
  const tile = `flex h-full flex-col justify-between gap-10 rounded-[10px] bg-tile p-6 md:p-8 ${className}`;
  return figure.to ? (
    <Link to={figure.to} className={`group ${tile} transition-colors duration-300 hover:bg-[#e8e8e8]`}>
      {body}
    </Link>
  ) : (
    <div className={tile}>{body}</div>
  );
}

/**
 * Figures as a bento of flat grey tiles: the first is the lead and takes a
 * double tile, the second spans the top right, the rest share the row below.
 */
export function FigureBento({ figures }: { figures: Figure[] }) {
  if (figures.length === 0) return null;
  if (figures.length < 3) {
    return (
      <ul className={`grid gap-3 sm:gap-4 ${figures.length === 2 ? "md:grid-cols-2" : ""}`}>
        {figures.map((f) => (
          <li key={f.label} className="min-h-[220px] md:min-h-[260px]">
            <FigureTile figure={f} size={figures.length === 1 ? "feature" : "large"} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="grid auto-rows-[minmax(220px,auto)] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {figures.map((f, i) => (
        <li
          key={f.label}
          className={i === 0 ? "col-span-2 md:row-span-2" : i === 1 || (figures.length === 3 && i === 2) ? "col-span-2" : "col-span-1"}
        >
          <FigureTile figure={f} size={i === 0 ? "feature" : i === 1 ? "large" : "small"} />
        </li>
      ))}
    </ul>
  );
}

/** Project results as figures. */
export const metricFigures = (metrics: Metric[]): Figure[] => metrics.map((m) => ({ value: m.value, label: m.label, detail: m.detail }));

/** Hairline-joined cells of short facts: label above, value below. */
export function FactStrip({ facts }: { facts: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label} className="bg-bg p-4 md:p-5">
          <dt className="text-[15px] text-muted">{f.label}</dt>
          <dd className="mt-1.5 text-base">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
