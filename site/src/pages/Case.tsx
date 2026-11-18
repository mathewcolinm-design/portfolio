import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { Chapter, ProgressRail } from "../components/chapters";
import { Column, Statement, Tile, ruledRow } from "../components/ui";
import { WorkFigure } from "../components/WorkFigure";
import { projects } from "../data/content";
import { NotFound } from "./NotFound";

export function Case() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  const ready = p.shots.filter((s) => s.src);
  const pending = p.shots.filter((s) => !s.src);
  const rail = [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
    ...(p.metrics ? [{ id: "results", label: "Results" }] : []),
    { id: "designs", label: "Designs" },
    { id: "next", label: "Next" },
  ];
  const meta = [
    { label: "Company", value: p.company },
    { label: "Role", value: p.role },
    { label: "Timeline", value: p.timeline },
    { label: "Focus", value: p.focus },
  ];

  return (
    <>
      <ProgressRail chapters={rail} label="Case study" />
      <main id="main" key={p.slug}>
        <Column className="pt-12 md:pt-20">
          <Link to="/#work" className="inline-flex items-center gap-1.5 text-base text-muted transition-colors hover:text-fg">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> All work
          </Link>
          <div className="mt-10">
            <Statement as="h1" size="xl" ink={`${p.name}.`} soft={` ${p.caption}.`} />
          </div>
          <dl className="mt-12 border-t border-line">
            {meta.map((m) => (
              <div key={m.label} className={ruledRow}>
                <dt className="text-muted">{m.label}</dt>
                <dd className="tabular-nums">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Column>
        <Column width="wide" className="mt-14 pb-24 md:pb-32">
          <Tile src={p.cover} alt={`${p.name} cover`} />
        </Column>

        <Chapter id="overview" title="Overview." soft={` ${p.intro}`}>
          <Column>
            <p className="max-w-[54ch] text-base leading-relaxed text-muted">{p.overview}</p>
          </Column>
        </Chapter>

        <Chapter id="process" title="Process." soft=" What I did.">
          <Column>
            <ul className="border-t border-line">
              {p.did.map((d) => (
                <li key={d} className="border-b border-line py-4 text-base leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </Column>
        </Chapter>

        {p.metrics && (
          <Chapter id="results" title="Results." soft=" What changed.">
            <Column>
              <dl className="border-t border-line">
                {p.metrics.map((m) => (
                  <div key={m.label} className={ruledRow}>
                    <dt>
                      {m.label}
                      {m.detail && <span className="text-muted"> · {m.detail}</span>}
                    </dt>
                    <dd className="tabular-nums">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Column>
          </Chapter>
        )}

        <Chapter id="designs" title="Designs." soft={ready.length > 0 ? " Selected screens." : " Added as screens arrive."}>
          {ready.length > 0 && (
            <Column width="wide">
              <ul className="space-y-10">
                {ready.map((s) => (
                  <li key={s.label}>
                    <figure>
                      <Tile src={s.src} alt={s.label} />
                      <figcaption className="mt-3 text-base text-muted">{s.label}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </Column>
          )}
          {pending.length > 0 && (
            <Column className={ready.length > 0 ? "mt-12" : ""}>
              <p className="text-base text-muted">Screens on the way:</p>
              <ul className="mt-3 border-t border-line">
                {pending.map((s) => (
                  <li key={s.label} className="border-b border-line py-3 text-base">
                    {s.label}
                  </li>
                ))}
              </ul>
            </Column>
          )}
        </Chapter>

        <Chapter id="next" title="Next." soft={` ${next.name}.`}>
          <Column width="wide">
            <WorkFigure project={next} />
          </Column>
        </Chapter>
      </main>
    </>
  );
}
