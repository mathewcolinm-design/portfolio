import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Bloom, CountUp } from "../components/bloom";
import { Chapter, Page } from "../components/chapters";
import { Column, Note, Statement, Tile } from "../components/ui";
import { WorkFigure } from "../components/WorkFigure";
import { chapters, experiments, highlights, profile, projects } from "../data/content";

type P = (typeof projects)[number];

/** Projects alternate one wide tile, then a pair of tall ones. */
function workRows() {
  const rows: { wide?: P; pair?: P[] }[] = [];
  for (let i = 0; i < projects.length; ) {
    rows.push({ wide: projects[i] });
    i += 1;
    if (i < projects.length) {
      rows.push({ pair: projects.slice(i, i + 2) });
      i += 2;
    }
  }
  return rows;
}

/** The career in four figures, set large on deep violet right under the opening. */
function Numbers() {
  if (highlights.length === 0) return null;
  return (
    <Bloom id="numbers" labelledBy="numbers-h" className="mb-24 md:mb-32">
      <Column width="wide" className="py-20 md:py-28">
        <Statement as="h2" id="numbers-h" tone="deep" ink="In numbers." soft=" What the work has moved so far." />
        <dl className="mt-12 grid border-t border-deep-line sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {highlights.map((h) => {
            const project = h.project ? projects.find((p) => p.slug === h.project) : undefined;
            return (
              <div key={h.label} className="flex flex-col border-b border-deep-line py-8 sm:pr-8 lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8">
                <dt className="order-2 mt-5 max-w-[24ch] text-base text-on-deep-muted">{h.label}</dt>
                <dd className="order-1 text-[clamp(3rem,4.6vw,4rem)] leading-[0.95] tracking-[-0.04em]">
                  <CountUp value={h.value} />
                </dd>
                {project && (
                  <dd className="order-3 mt-4">
                    <Link
                      to={`/work/${project.slug}`}
                      className="group inline-flex items-center gap-1 text-[15px] text-on-deep transition-colors hover:text-on-deep-muted"
                    >
                      {project.name}
                      <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </Column>
    </Bloom>
  );
}

export function Work() {
  return (
    <Page title={profile.statement[0]} soft={profile.statement[1]} note={<Note>{profile.availability}</Note>}>
      <Numbers />
      <Chapter id="work" title={chapters.work.title} soft={chapters.work.soft} rule={highlights.length === 0}>
        <Column width="wide">
          <ul className="space-y-14 md:space-y-20">
            {workRows().map((row, i) =>
              row.wide ? (
                <li key={row.wide.slug}>
                  <WorkFigure project={row.wide} />
                </li>
              ) : (
                <li key={`pair-${i}`} className="grid gap-14 md:grid-cols-2 md:gap-6">
                  {row.pair!.map((p, j) => (
                    // The second tile of a pair sits lower, so the eye zigzags down the page.
                    <div key={p.slug} className={j === 1 ? "md:mt-24" : ""}>
                      <WorkFigure project={p} shape="tall" />
                    </div>
                  ))}
                </li>
              ),
            )}
          </ul>
        </Column>

        <Column className="mt-24">
          <h2 className="text-base">Other work</h2>
          <ul className="mt-4 grid border-t border-line md:grid-cols-2 md:gap-x-10">
            {experiments.map((e) => (
              <li key={e.title} className="border-b border-line py-3">
                {e.src && (
                  <div className="mb-3">
                    <Tile src={e.src} alt={e.title} ratio="4 / 3" />
                  </div>
                )}
                <p className="text-base">{e.title}</p>
                <p className="text-base text-muted">{e.note}</p>
              </li>
            ))}
          </ul>
        </Column>
      </Chapter>
    </Page>
  );
}
