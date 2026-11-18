import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Chapter, ProgressRail, useScrollToId } from "../components/chapters";
import { CopyEmail } from "../components/CopyEmail";
import { Column, Note, Statement, Tile, ruledRow } from "../components/ui";
import { WorkFigure } from "../components/WorkFigure";
import { chapters, education, experiments, jobs, profile, projects, services, skills, toolkit } from "../data/content";

const railChapters = [
  { id: "work", label: "Work" },
  { id: "how", label: "How I work" },
  { id: "path", label: "Path" },
  { id: "hello", label: "Say hello" },
];

/** Projects alternate one wide tile, then a pair of tall ones. */
function workRows() {
  const rows: { wide?: (typeof projects)[number]; pair?: (typeof projects)[number][] }[] = [];
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

const year = (dates: string) => dates.match(/\d{4}/)?.[0] ?? "";

export function Story() {
  const scrollTo = useScrollToId();
  const path = [...jobs].reverse();

  return (
    <>
      <ProgressRail chapters={railChapters} />
      <main id="main">
        {/* Opening */}
        <Column className="pt-16 pb-24 md:pt-28 md:pb-32">
          <Statement as="h1" size="xl" ink={profile.statement[0]} soft={profile.statement[1]} />
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <button
              type="button"
              onClick={() => scrollTo("work")}
              className="group inline-flex items-center gap-1.5 text-base transition-colors hover:text-muted"
            >
              Start with the work
              <ArrowDown
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5"
              />
            </button>
            <Note>{profile.availability}</Note>
          </div>
        </Column>

        {/* Work */}
        <Chapter id="work" title={chapters.work.title} soft={chapters.work.soft}>
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
            <h3 className="text-base">Other work</h3>
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

        {/* How I work */}
        <Chapter id="how" title={chapters.how.title} soft={chapters.how.soft}>
          <Column>
            <h3 className="text-base">What I do</h3>
            <ul className="mt-4 grid border-t border-line md:grid-cols-2 md:gap-x-10">
              {services.map((s) => (
                <li key={s.name} className="border-b border-line py-4">
                  <p className="text-base">{s.name}</p>
                  <p className="mt-0.5 text-base text-muted">{s.line}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-16 text-base">Toolkit</h3>
            <ul className="mt-4 border-t border-line">
              {toolkit.map((t) => (
                <li key={t.name} className={ruledRow}>
                  <span>{t.name}</span>
                  <span className="text-muted">{t.use}</span>
                </li>
              ))}
            </ul>
          </Column>
        </Chapter>

        {/* Path */}
        <Chapter id="path" title={chapters.path.title} soft={chapters.path.soft}>
          <Column>
            <ol className="relative">
              {/* The path itself: one hairline the steps hang from. */}
              <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
              {path.map((j, i) => (
                <li key={j.company + j.dates} className="relative grid gap-x-8 pb-10 pl-8 last:pb-0 md:grid-cols-[96px_1fr]">
                  <span
                    aria-hidden="true"
                    className={`absolute top-[9px] left-0 h-[11px] w-[11px] rounded-full border border-fg ${
                      i === path.length - 1 ? "bg-fg" : "bg-bg"
                    }`}
                  />
                  <p className="text-[clamp(1.5rem,2.6vw,1.75rem)] leading-none tracking-[-0.03em] text-soft tabular-nums md:pt-0.5">
                    {year(j.dates)}
                  </p>
                  <div className="mt-2 md:mt-0">
                    <h3 className="text-base">
                      {j.role} <span className="text-muted">at</span> {j.company}
                    </h3>
                    <p className="text-base text-muted tabular-nums">
                      {j.dates}
                      {j.place && ` · ${j.place}`}
                    </p>
                    <p className="mt-2 max-w-[54ch] text-base leading-relaxed text-muted">{j.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className="mt-20 text-base">Education</h3>
            <ul className="mt-4 border-t border-line">
              {education.map((e) => (
                <li key={e.name} className={ruledRow}>
                  <span>
                    {e.name} <span className="text-muted">· {e.place}</span>
                  </span>
                  <span className="text-muted tabular-nums">{e.dates}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-16 text-base">Skills</h3>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">{skills.join(" · ")}</p>
          </Column>
        </Chapter>

        {/* Say hello */}
        <Chapter id="hello" title={chapters.hello.title} soft={chapters.hello.soft}>
          <Column>
            <CopyEmail className="text-left text-[clamp(1.5rem,4vw,2.5rem)] tracking-[-0.035em] underline decoration-line decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-fg" />
            <p className="mt-3 text-[15px] text-muted">Click the address to copy it.</p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-1.5 transition-colors hover:text-muted">
                Open in your email app
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-muted"
              >
                LinkedIn
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Column>
        </Chapter>
      </main>
    </>
  );
}
