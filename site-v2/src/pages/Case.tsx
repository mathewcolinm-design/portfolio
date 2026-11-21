import { useParams } from "react-router";
import { Bloom, CountUp } from "../components/bloom";
import { SectionBar } from "../components/chapters";
import { DesignGallery } from "../components/DesignGallery";
import { Prose } from "../components/Prose";
import { CompanyLogo } from "../components/icons";
import { Column, Statement, Tile } from "../components/ui";
import { WorkFigure } from "../components/WorkFigure";
import { projects, type Metric, type StorySection } from "../data/content";
import { NotFound } from "./NotFound";

/** Short label for the section bar: "The challenge" → "Challenge". */
const shortLabel = (title: string) => {
  const t = title.replace(/^the\s+/i, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
};

/** The project's results as oversized figures on deep violet, right after the cover. */
function Impact({ metrics }: { metrics: Metric[] }) {
  const cols = metrics.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <Bloom id="impact" labelledBy="impact-h">
      <Column width="wide" className="py-20 md:py-28">
        <Statement as="h2" id="impact-h" tone="deep" ink="Impact." soft=" The numbers behind the work." />
        <dl className={`mt-12 grid border-t border-deep-line md:mt-16 ${cols}`}>
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col border-b border-deep-line py-10 md:border-b-0 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
            >
              <dt className="order-2 mt-6 text-lg">{m.label}</dt>
              <dd className="order-1 text-[clamp(4rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.04em]">
                <CountUp value={m.value} />
              </dd>
              {m.detail && <dd className="order-3 mt-1.5 max-w-[32ch] text-base text-on-deep-muted">{m.detail}</dd>}
            </div>
          ))}
        </dl>
      </Column>
    </Bloom>
  );
}

/** One chapter of the story: its title held on the left, the telling on the right. */
function StoryChapter({ section, first }: { section: StorySection; first: boolean }) {
  const odd = section.steps.length % 2 === 1;
  return (
    <section id={section.id} aria-labelledby={`${section.id}-h`}>
      <Column width="wide">
        <div className="grid gap-x-16 gap-y-8 border-t border-line pt-14 pb-20 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:pt-20 md:pb-28">
          <h2
            id={`${section.id}-h`}
            className="text-[clamp(1.6rem,3.2vw,2.1rem)] leading-[1.12] tracking-[-0.035em] md:sticky md:top-[140px] md:self-start"
          >
            {section.title}
          </h2>
          <div>
            {section.blocks.length > 0 && <Prose blocks={section.blocks} lead={first} />}
            {section.steps.length > 0 && (
              <ol
                className={`grid gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-2 ${
                  section.blocks.length ? "mt-10" : ""
                }`}
              >
                {section.steps.map((step, i) => (
                  <li
                    key={step.title}
                    className={`bg-bg p-6 md:p-7 ${odd && i === section.steps.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <span aria-hidden="true" className="block text-[2rem] leading-none tracking-[-0.04em] text-violet tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-8 text-lg">{step.title}</h3>
                    {step.blocks.length > 0 && (
                      <div className="mt-2">
                        <Prose blocks={step.blocks} />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </Column>
    </section>
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

  const sections = [
    ...(p.metrics ? [{ id: "impact", label: "Impact" }] : []),
    ...p.story.map((s) => ({ id: s.id, label: shortLabel(s.title) })),
    { id: "designs", label: "Designs" },
    { id: "next", label: "Next" },
  ];
  const facts = [
    { label: "Company", value: p.company },
    { label: "Role", value: p.role },
    { label: "Timeline", value: p.timeline },
    { label: "Focus", value: p.focus },
  ];

  return (
    <>
      <SectionBar sections={sections} />
      <main id="main" key={p.slug}>
        <Column width="wide" className="pt-14 md:pt-24">
          <div className="max-w-[760px]">
            <Statement as="h1" size="xl" ink={`${p.name}.`} soft={` ${p.caption}.`} />
          </div>
          <dl className="mt-12 grid grid-cols-2 border-t border-line md:mt-16 md:grid-cols-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`border-b border-line py-4 md:border-b-0 md:py-5 ${i % 2 === 1 ? "pl-5" : "pr-5"} md:px-0 md:pr-6 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-6`}
              >
                <dt className="text-[15px] text-muted">{f.label}</dt>
                <dd className="mt-1 inline-flex items-center gap-2 text-base tabular-nums">
                  {f.label === "Company" && <CompanyLogo company={f.value} size={18} />}
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Column>

        {p.cover ? (
          <Column width="wide" className="mt-10 pb-24 md:mt-14 md:pb-32">
            <Tile src={p.cover} alt={`${p.name} cover`} />
          </Column>
        ) : (
          // No cover yet: the screens still to come are listed under Designs.
          <div className="pb-16 md:pb-24" />
        )}

        {p.metrics && (
          <div className="pb-16 md:pb-20">
            <Impact metrics={p.metrics} />
          </div>
        )}

        {p.story.map((section, i) => (
          <StoryChapter key={section.id} section={section} first={i === 0} />
        ))}

        <Bloom id="designs" labelledBy="designs-h">
          <Column width="wide" className="py-20 md:py-28">
            <Statement
              as="h2"
              id="designs-h"
              tone="deep"
              ink="Designs."
              soft={ready.length > 0 ? ` ${ready.length} ${ready.length === 1 ? "piece" : "pieces"} from ${p.name}.` : " On the way."}
            />
            {ready.length > 0 && (
              <div className="mt-12 md:mt-16">
                <DesignGallery tone="deep" shots={ready.map((s) => ({ label: s.label, src: s.src! }))} />
              </div>
            )}
            {pending.length > 0 && (
              <div className={ready.length > 0 ? "mt-16" : "mt-12"}>
                <p className="text-base text-on-deep-muted">Screens on the way, added as they arrive:</p>
                <ul className="mt-3 max-w-[760px] border-t border-deep-line">
                  {pending.map((s) => (
                    <li key={s.label} className="border-b border-deep-line py-3 text-base">
                      {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Column>
        </Bloom>

        <section id="next" aria-labelledby="next-h" className="pt-24 pb-24 md:pt-32 md:pb-32">
          <Column width="wide">
            <h2 id="next-h" className="text-[clamp(1.6rem,3.2vw,2.1rem)] leading-[1.12] tracking-[-0.035em]">
              Next project
            </h2>
            <div className="mt-8 md:mt-10">
              <WorkFigure project={next} />
            </div>
          </Column>
        </section>
      </main>
    </>
  );
}
