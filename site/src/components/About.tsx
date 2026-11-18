import { aiTools, education, skills } from "../data/content";
import { Reveal, SectionLabel } from "./Reveal";

export function About() {
  return (
    <section id="about" data-section-theme="light" className="scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionLabel index="03">How I work</SectionLabel>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.03em] md:text-6xl">
              Design the work, then build the tools that scale it.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Two years in technical support taught me where products frustrate people. Now I design to remove that
              friction, and I build AI-assisted workflows so a small team can ship brand, product and motion work at a
              scale that would normally need a much bigger one.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">AI design workflow</h3>
            <ul className="mt-4">
              {aiTools.map((t) => (
                <li
                  key={t.name}
                  className="theme-fade flex items-baseline justify-between gap-6 border-t border-line py-4 last:border-b"
                >
                  <span className="font-medium">{t.name}</span>
                  <span className="text-right text-sm text-muted">{t.use}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.08}>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s} className="theme-fade rounded-full bg-card-2 px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Education</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {education.map((e) => (
              <li key={e.name} className="theme-fade rounded-2xl bg-card p-6">
                <p className="font-medium">{e.name}</p>
                <p className="mt-1 text-sm text-muted">{e.place}</p>
                <p className="mt-4 font-mono text-xs text-muted">{e.dates}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
