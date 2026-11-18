import { Link } from "react-router";
import { projects } from "../data/content";
import { Cover } from "./Cover";
import { Reveal, SectionLabel } from "./Reveal";

export function Work() {
  return (
    <section id="work" data-section-theme="light" className="scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="01">Selected work</SectionLabel>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.03em] md:text-6xl">Work I’m proud of</h2>
          </div>
          <p className="max-w-sm text-muted">
            Product, brand and motion work for SaaS, healthcare, fintech and Web3 teams.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.slug} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Reveal delay={(i % 2) * 0.1}>
                <Link to={`/work/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <div className="h-full w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]">
                      <Cover project={p} />
                    </div>
                    <span
                      className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#141412] opacity-0 transition-[opacity,translate] duration-500 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">{p.title}</h3>
                    <span className="font-mono text-xs text-muted">{p.year}</span>
                  </div>
                  <p className="mt-2 text-muted">{p.tagline}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">
                    {p.category} · {p.company}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
