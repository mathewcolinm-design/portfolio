import { useParams } from "react-router";
import { Chapter, SectionBar } from "../components/chapters";
import { DesignGallery } from "../components/DesignGallery";
import { Prose } from "../components/Prose";
import { CompanyLogo } from "../components/icons";
import { FactStrip, FigureBento, metricFigures } from "../components/numbers";
import { Column, Statement, Tile } from "../components/ui";
import { WorkFigure } from "../components/WorkFigure";
import { projects, type StorySection } from "../data/content";
import { NotFound } from "./NotFound";

/** Short label for the section bar: "The challenge" → "Challenge". */
const shortLabel = (title: string) => {
  const t = title.replace(/^the\s+/i, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
};

function StoryChapter({ section, first }: { section: StorySection; first: boolean }) {
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

  const sections = [
    ...(p.metrics ? [{ id: "impact", label: "Impact" }] : []),
    ...p.story.map((s) => ({ id: s.id, label: shortLabel(s.title) })),
    { id: "designs", label: "Designs" },
    { id: "next", label: "Next" },
  ];
  const facts = [
    {
      label: "Company",
      value: (
        <span className="inline-flex items-center gap-2">
          <CompanyLogo company={p.company} size={18} />
          {p.company}
        </span>
      ),
    },
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
          <div className="mt-12">
            <FactStrip facts={facts} />
          </div>
        </Column>
        {p.cover ? (
          <Column width="wide" className="mt-14 pb-24 md:pb-32">
            <Tile src={p.cover} alt={`${p.name} cover`} />
          </Column>
        ) : (
          <div className="pb-16 md:pb-24" />
        )}

        {p.metrics && (
          <Chapter id="impact" title="Impact" plain>
            <Column width="wide">
              <FigureBento figures={metricFigures(p.metrics)} />
            </Column>
          </Chapter>
        )}

        {p.story.map((section, i) => (
          <StoryChapter key={section.id} section={section} first={i === 0} />
        ))}


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
