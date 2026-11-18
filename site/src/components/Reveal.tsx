import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Small mono label used above every section heading, e.g. "01 — Selected work". */
export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="mx-2" aria-hidden="true">
        —
      </span>
      {children}
    </p>
  );
}
