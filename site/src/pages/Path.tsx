import { Page } from "../components/chapters";
import { Column, ruledRow } from "../components/ui";
import { chapters, education, jobs, skills } from "../data/content";

const year = (dates: string) => dates.match(/\d{4}/)?.[0] ?? "";

export function Path() {
  const path = [...jobs].reverse();

  return (
    <Page title={chapters.path.title} soft={chapters.path.soft}>
      <Column className="pb-24 md:pb-32">
        <h2 className="sr-only">Career</h2>
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

        <h2 className="mt-20 text-base">Education</h2>
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

        <h2 className="mt-16 text-base">Skills</h2>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted">{skills.join(" · ")}</p>
      </Column>
    </Page>
  );
}
