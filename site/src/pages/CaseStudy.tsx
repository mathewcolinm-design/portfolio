import { Link, useParams } from "react-router";
import { Cover } from "../components/Cover";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/content";
import { NotFound } from "./NotFound";

export function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;

  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const pad = (n: number) => String(n).padStart(2, "0");

  const meta = [
    { label: "Year", value: p.year },
    { label: "Role", value: p.role },
    { label: "Company", value: p.company },
    { label: "Focus", value: p.focus.join(", ") },
  ];

  return (
    <main id="main">
      {/* Header: dark */}
      <section data-section-theme="dark" className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <Link to="/#work" className="text-sm text-muted transition-colors hover:text-fg">
              ← All work
            </Link>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              <span className="text-accent">
                {pad(index + 1)} / {pad(projects.length)}
              </span>{" "}
              · Case study · {p.category}
            </p>
            <h1 className="mt-4 text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em]">
              {p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-snug text-muted md:text-2xl">{p.tagline}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="theme-fade mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{m.label}</dt>
                  <dd className="mt-2">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 aspect-[16/9] overflow-hidden rounded-2xl md:mt-16">
            <Cover project={p} large />
          </Reveal>
        </div>
      </section>

      {/* Body: light */}
      <section data-section-theme="light" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-20 px-4 md:space-y-28 md:px-8">
          <Reveal className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:pt-2">Overview</h2>
            <p className="max-w-3xl text-2xl leading-snug tracking-tight md:text-3xl">{p.overview}</p>
          </Reveal>

          {p.metrics && (
            <Reveal className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:pt-2">Results</h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {p.metrics.map((m) => (
                  <li key={m.label} className="theme-fade rounded-2xl bg-card p-6">
                    <p className="text-5xl font-medium tracking-tight text-accent">{m.value}</p>
                    <p className="mt-3 text-muted">{m.label}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-12">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:pt-2">What I did</h2>
            <ol className="max-w-3xl">
              {p.did.map((d, i) => (
                <li key={d} className="theme-fade flex gap-6 border-t border-line py-5 text-lg last:border-b">
                  <span className="font-mono text-sm text-muted">{pad(i + 1)}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-12">
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:pt-2">Gallery</h2>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {p.shots.map((s, i) => (
                <li key={s} className={i === 0 ? "sm:col-span-2" : ""}>
                  <Reveal delay={(i % 2) * 0.08}>
                    {/* Placeholder until real screenshots are added */}
                    <div
                      className={`theme-fade grid place-items-center rounded-2xl border border-dashed border-line bg-card-2 p-6 text-center ${
                        i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                      }`}
                    >
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Screenshot to add</p>
                        <p className="mt-2 font-medium">{s}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next project: dark */}
      <section data-section-theme="dark" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Next case</p>
            <Link to={`/work/${next.slug}`} className="group mt-6 block">
              <div className="aspect-[16/7] overflow-hidden rounded-2xl">
                <div className="h-full w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]">
                  <Cover project={next} large />
                </div>
              </div>
              <p className="mt-5 text-muted">
                {next.tagline} <span className="text-fg">→</span>
              </p>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
