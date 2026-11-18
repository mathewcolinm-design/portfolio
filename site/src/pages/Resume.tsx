import { PageHeader } from "../components/PageHeader";
import { Container, ToolIcon } from "../components/ui";
import { education, jobs, skills, tools } from "../data/content";

/** Two-tone section heading from the reference: "Tools powering my work". */
function SplitHeading({ id, strong, soft }: { id: string; strong: string; soft?: string }) {
  return (
    <h2 id={id} className="text-[22px] font-medium tracking-[-0.015em]">
      {strong}
      {soft && <span className="text-muted"> {soft}</span>}
    </h2>
  );
}

export function Resume() {
  return (
    <>
      <PageHeader />
      <main id="main">
        <section aria-labelledby="exp-heading" className="pb-20">
          <Container className="border-t border-line pt-14">
            <SplitHeading id="exp-heading" strong="Experience" soft="since 2020" />
            <ol className="mt-8">
              {jobs.map((j) => (
                <li key={j.company + j.dates} className="flex gap-4 border-t border-dashed border-line py-7 first:border-t-0 first:pt-2 md:gap-5">
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-raised text-[13px] font-bold text-fg"
                  >
                    {j.initials}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">
                      {j.role}
                      <span className="text-muted"> at </span>
                      {j.company}
                    </h3>
                    <p className="mt-1 text-muted tabular-nums">
                      {j.dates}
                      {j.place && (
                        <>
                          <span aria-hidden="true" className="mx-2">
                            ·
                          </span>
                          {j.place}
                        </>
                      )}
                    </p>
                    <p className="mt-3 max-w-[60ch] text-[17px] leading-relaxed text-muted">{j.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section aria-labelledby="tools-heading" className="pb-10">
          <Container className="border-t border-line pt-16">
            <SplitHeading id="tools-heading" strong="Tools" soft="powering my work" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((t) => (
                <li key={t.name} className="flex items-center gap-3.5 rounded-[18px] border border-line bg-surface p-2.5 pr-4">
                  <ToolIcon icon={t.icon} letters={t.letters} />
                  <div className="leading-snug">
                    <p className="text-[17px] font-medium">{t.name}</p>
                    <p className="text-muted">{t.use}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-20 border-t border-line pt-16">
              <SplitHeading id="skills-heading" strong="Skills" />
              <ul aria-labelledby="skills-heading" className="mt-6 flex flex-wrap gap-2.5">
                {skills.map((s) => (
                  <li key={s} className="rounded-[12px] border border-line bg-surface px-4 py-2.5 text-[15px] font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-20 border-t border-line pt-16">
              <SplitHeading id="edu-heading" strong="Education" soft="and certification" />
              <ul aria-labelledby="edu-heading" className="mt-6 space-y-5">
                {education.map((e) => (
                  <li key={e.name}>
                    <p className="text-lg font-medium">{e.name}</p>
                    <p className="mt-0.5 text-muted tabular-nums">
                      {e.dates}
                      <span aria-hidden="true" className="mx-2">
                        ·
                      </span>
                      {e.place}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
