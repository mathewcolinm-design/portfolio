import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The lavender light behind every page opening. It sits under the header and
 * swells, sinks and fades as you scroll away from the top.
 */
export function Glow() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, 1.45]);
  const y = useTransform(scrollY, [0, 700], [0, 160]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.15]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[820px] overflow-hidden">
      <motion.div
        className="glow-light absolute top-[-300px] left-1/2 h-[760px] w-[min(1240px,160vw)]"
        style={reduced ? { x: "-50%" } : { x: "-50%", scale, y, opacity }}
      />
    </div>
  );
}

/**
 * A deep violet field. As it scrolls into view it opens from an inset,
 * rounded panel to the full width of the page, and closes again as it
 * leaves; the light inside drifts with it. Shown fully open when the
 * visitor prefers less motion.
 */
export function Bloom({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ["start end", "start 0.2"] });
  const { scrollYProgress: leave } = useScroll({ target: ref, offset: ["end 0.75", "end start"] });

  // Horizontal inset (as % of the width) and corner radius: largest while
  // the field is arriving or leaving, zero while it is being read.
  const inset = useTransform([enter, leave], ([a, b]: number[]) => Math.max((1 - a) * 7, b * 7));
  const radius = useTransform([enter, leave], ([a, b]: number[]) => Math.max((1 - a) * 36, b * 36));
  const clipPath = useMotionTemplate`inset(0% ${inset}% round ${radius}px)`;
  const glowY = useTransform(enter, [0, 1], ["-35%", "0%"]);
  const glowOpacity = useTransform(enter, [0, 1], [0.4, 1]);

  return (
    <section ref={ref} id={id} aria-labelledby={labelledBy} className={`relative ${className}`}>
      <motion.div
        className="bg-deep relative overflow-hidden text-on-deep"
        style={reduced ? undefined : { clipPath }}
      >
        <motion.div
          aria-hidden="true"
          className="glow-deep pointer-events-none absolute inset-x-0 top-0 h-[560px]"
          style={reduced ? undefined : { y: glowY, opacity: glowOpacity }}
        />
        <div className="relative">{children}</div>
      </motion.div>
    </section>
  );
}

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
 * A figure that counts up once when it comes into view ("400K+", "142,000+").
 * Screen readers get the final value straight away.
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
      duration: 1.6,
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
