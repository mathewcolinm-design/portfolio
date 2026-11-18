import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { Closing } from "../components/Closing";
import { ProjectItem } from "../components/ProjectItem";
import { Section, Statement, Tile } from "../components/ui";
import { projects } from "../data/content";
import { NotFound } from "./NotFound";

const row = "flex items-baseline justify-between gap-6 border-b border-line py-3 text-base";

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
  const ready = p.shots.filter((s) => s.src);
  const pending = p.shots.filter((s) => !s.src);

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
              <div key={m.label} className={row}>
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
          <dl className="border-t border-line">
            {p.metrics.map((m) => (
              <div key={m.label} className={row}>
                <dt>
                  {m.label}
                  {m.detail && <span className="text-muted"> · {m.detail}</span>}
                </dt>
                <dd className="text-right tabular-nums">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      <Section id="designs" title="Designs" sub={ready.length > 0 ? "Selected screens" : "Added as screens arrive"}>
        {ready.length > 0 && (
          <ul className="space-y-6">
            {ready.map((s) => (
              <li key={s.label}>
                <figure>
                  <Tile src={s.src} alt={s.label} />
                  <figcaption className="mt-2.5 text-base text-muted">{s.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
        {pending.length > 0 && (
          <div className={ready.length > 0 ? "mt-10" : ""}>
            <p className="text-base text-muted">Screens on the way:</p>
            <ul className="mt-3 border-t border-line">
              {pending.map((s) => (
                <li key={s.label} className="border-b border-line py-3 text-base">
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <Section id="next" title="Next project">
        <ProjectItem project={next} />
      </Section>

      <Closing />
    </main>
  );
}
