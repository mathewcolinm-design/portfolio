import { experience } from "../data/content";
import { Reveal, SectionLabel } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" data-section-theme="dark" className="scroll-mt-16 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel index="02">Experience</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.03em] md:text-6xl">
            From the support desk to the design file.
          </h2>
        </Reveal>

        <ol className="mt-14">
          {experience.map((job, i) => (
            <li key={job.company + job.dates}>
              <Reveal delay={i * 0.05}>
                <div className="theme-fade grid gap-2 border-t border-line py-7 md:grid-cols-[180px_1fr_1.2fr] md:gap-8">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted md:pt-1.5">{job.dates}</p>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{job.role}</h3>
                    <p className="mt-1 text-muted">
                      {job.company}
                      {job.place && <span> · {job.place}</span>}
                    </p>
                  </div>
                  <p className="text-muted md:pt-1">{job.summary}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
