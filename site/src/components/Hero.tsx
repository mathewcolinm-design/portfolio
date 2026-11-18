import { motion } from "motion/react";
import { Link } from "react-router";
import { expertise, profile, stats } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Reveal } from "./Reveal";

const headline = ["I", "design", "products,", "brands", "and", "the", "motion", "between", "them."];
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section data-section-theme="dark" className="relative flex min-h-[100svh] flex-col justify-end pt-28 pb-14 md:pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          {profile.name} <span aria-hidden="true">·</span> {profile.title}
        </motion.p>

        <h1 className="mt-6 max-w-5xl text-[clamp(2.6rem,7.4vw,6.75rem)] font-medium leading-[0.95] tracking-[-0.035em]">
          {headline.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={`inline-block ${word === "motion" ? "text-accent" : ""}`}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.06 }}
              >
                {word}
              </motion.span>
              {i < headline.length - 1 && " "}
            </span>
          ))}
        </h1>

        <Reveal delay={0.5} className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/#work"
              className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-[background-color,color,translate] duration-500 hover:-translate-y-0.5"
            >
              View work ↓
            </Link>
            <CopyEmail
              label="Copy email"
              className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-[border-color,color] duration-500 hover:border-fg"
            />
          </div>
        </Reveal>

        <Reveal delay={0.65}>
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Expertise">
            {expertise.map((e) => (
              <li key={e} className="theme-fade rounded-full border border-line px-3 py-1.5 text-sm text-muted">
                {e}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.8}>
          <dl className="theme-fade mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-4xl font-medium tracking-tight md:text-5xl">{s.value}</dd>
                <dd className="mt-2 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
