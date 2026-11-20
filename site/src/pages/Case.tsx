import { useParams } from "react-router";
import { Chapter, SectionBar } from "../components/chapters";
import { DesignGallery } from "../components/DesignGallery";
import { Prose } from "../components/Prose";
import { CompanyLogo } from "../components/icons";
import { Column, Statement, Tile, ruledRow } from "../components/ui";
import { WorkFigure } from "../components/WorkFigure";
import { projects, type Metric, type StorySection } from "../data/content";
import { NotFound } from "./NotFound";

const isOutcome = (s: StorySection) => /outcome|result|impact/i.test(s.title);
/** Short label for the section bar: "The challenge" → "Challenge". */
const shortLabel = (title: string) => {
  const t = title.replace(/^the\s+/i, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
};

function Results({ metrics }: { metrics: Metric[] }) {
  return (
    <dl className="mt-10 border-t border-line">
      {metrics.map((m) => (
        <div key={m.label} className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-b border-line py-4">
          <dt className="text-base">
            {m.label}
            {m.detail && (
              <span className="block text-muted sm:inline">
                <span className="hidden sm:inline"> · </span>
                {m.detail}
              </span>
            )}
          </dt>
          <dd className="text-right text-[clamp(1.5rem,2.6vw,2rem)] leading-none tracking-[-0.035em] tabular-nums">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function StoryChapter({ section, first, metrics }: { section: StorySection; first: boolean; metrics?: Metric[] }) {
  return (
    <Chapter id={section.id} title={section.title} plain>
      <Column>
        {section.blocks.length > 0 && <Prose blocks={section.blocks} lead={first} />}
        {section.steps.length > 0 && (
          <ol className={section.blocks.length ? "mt-10" : ""}>
            {section.steps.map((step, i) => (
              <li key={step.title} className="grid gap-x-6 border-t border-line py-6 last:border-b sm:grid-cols-[56px_1fr]">
                <span aria-hidden="true" className="text-[15px] text-muted tabular-nums sm:pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg">{step.title}</h3>
                  {step.blocks.length > 0 && (
                    <div className="mt-2">
                      <Prose blocks={step.blocks} />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
        {metrics && <Results metrics={metrics} />}
      </Column>
    </Chapter>
  );
}

export function Case() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  const ready = p.shots.filter((s) => s.src);
  const pending = p.shots.filter((s) => !s.src);
  const outcome = p.story.find(isOutcome);
  // Results sit inside the outcome section; without one they get their own.
  const extraResults = p.metrics && !outcome;

  const sections = [
    ...p.story.map((s) => ({ id: s.id, label: shortLabel(s.title) })),
    ...(extraResults ? [{ id: "results", label: "Results" }] : []),
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
      <SectionBar sections={sections} />
      <main id="main" key={p.slug}>
        <Column className="pt-14 md:pt-24">
          <Statement as="h1" size="xl" ink={`${p.name}.`} soft={` ${p.caption}.`} />
          <dl className="mt-12 border-t border-line">
            {meta.map((m) => (
              <div key={m.label} className={ruledRow}>
                <dt className="text-muted">{m.label}</dt>
                <dd className="inline-flex items-center gap-2 tabular-nums">
                  {m.label === "Company" && <CompanyLogo company={m.value} size={18} />}
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </Column>
        <Column width="wide" className="mt-14 pb-24 md:pb-32">
          <Tile src={p.cover} alt={`${p.name} cover`} />
        </Column>

        {p.story.map((section, i) => (
          <StoryChapter key={section.id} section={section} first={i === 0} metrics={section === outcome ? p.metrics : undefined} />
        ))}

        {extraResults && (
          <Chapter id="results" title="Results" plain>
            <Column>
              <Results metrics={p.metrics!} />
            </Column>
          </Chapter>
        )}

        <Chapter id="designs" title="Designs" plain>
          {ready.length > 0 && (
            <Column width="wide">
              <DesignGallery shots={ready.map((s) => ({ label: s.label, src: s.src! }))} />
            </Column>
          )}
          {pending.length > 0 && (
            <Column className={ready.length > 0 ? "mt-12" : ""}>
              <p className="text-base text-muted">Screens on the way, added as they arrive:</p>
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

        <Chapter id="next" title="Next project" plain>
          <Column width="wide">
            <WorkFigure project={next} />
          </Column>
        </Chapter>
      </main>
    </>
  );
}
