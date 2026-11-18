import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { Closing } from "../components/Closing";
import { ProjectItem } from "../components/ProjectItem";
import { Section, Statement, Tile } from "../components/ui";
import { projects } from "../data/content";
import { NotFound } from "./NotFound";

export function Project() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Company", value: p.company },
    { label: "Role", value: p.role },
    { label: "Timeline", value: p.timeline },
    { label: "Focus", value: p.focus },
  ];

  return (
    <main id="main">
      <Section divider={false}>
        <div className="pt-4 md:pt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-base text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> All projects
          </Link>
          <h1 className="mt-8 text-[clamp(2.25rem,4.4vw,2.5rem)] leading-[1.05] font-normal tracking-[-0.04em]">
            {p.name}
          </h1>
          <p className="mt-3 max-w-[54ch] text-base leading-relaxed text-muted">{p.caption}.</p>

          <dl className="mt-8 border-t border-line">
            {meta.map((m) => (
              <div key={m.label} className="flex items-baseline justify-between gap-6 border-b border-line py-3 text-base">
                <dt className="text-muted">{m.label}</dt>
                <dd className="text-right tabular-nums">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <Tile src={p.cover} alt={`${p.name} cover`} />
          </div>
        </div>
      </Section>

      <Section id="overview" title="Overview" sub="What it is">
        <Statement size="md" ink={p.intro} />
        <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted">{p.overview}</p>
      </Section>

      <Section id="process" title="Process" sub="What I did">
        <ul className="border-t border-line">
          {p.did.map((d) => (
            <li key={d} className="border-b border-line py-4 text-base leading-relaxed">
              {d}
            </li>
          ))}
        </ul>
      </Section>

      {p.metrics && (
        <Section id="results" title="Results" sub="What changed">
          <ul className="grid gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-3">
            {p.metrics.map((m) => (
              <li key={m.label}>
                <p className="text-[clamp(2rem,4vw,2.5rem)] leading-none tracking-[-0.04em] tabular-nums">{m.value}</p>
                <p className="mt-3 text-base">{m.label}</p>
                {m.detail && <p className="text-base text-muted">{m.detail}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="designs" title="Designs" sub="Selected screens">
        <ul className="space-y-6">
          {p.shots.map((s) => (
            <li key={s.label}>
              <figure>
                <Tile src={s.src} alt={s.label} placeholder="Coming soon" />
                <figcaption className="mt-2.5 text-base text-muted">{s.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="next" title="Next project" sub={next.name}>
        <ProjectItem project={next} />
      </Section>

      <Closing />
    </main>
  );
}
