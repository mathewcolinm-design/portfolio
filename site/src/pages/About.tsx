import { Closing } from "../components/Closing";
import { Note, Section, Statement } from "../components/ui";
import { about, aiWorkflow, education, jobs, profile, skills, tools } from "../data/content";

const row = "flex items-baseline justify-between gap-6 border-b border-line py-3 text-base";

export function About() {
  return (
    <main id="main">
      <Section divider={false}>
        <div className="pt-4 md:pt-8">
          <Note>{profile.availability}</Note>
          <div className="mt-4">
            <Statement as="h1" ink={about.hello} soft={` ${about.lead}`} />
          </div>
          <div className="mt-8 max-w-[54ch] space-y-4 text-base leading-relaxed text-muted">
            {about.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" sub="Where I’ve worked since 2020">
        <ol className="border-t border-line">
          {jobs.map((j) => (
            <li key={j.company + j.dates} className="border-b border-line py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-base">
                <h3>
                  {j.role} <span className="text-muted">at</span> {j.company}
                </h3>
                <p className="text-muted tabular-nums">{j.dates}</p>
              </div>
              <p className="mt-2 max-w-[54ch] text-base leading-relaxed text-muted">{j.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="workflow" title="How I work" sub="Design first, then tools that scale it">
        <p className="max-w-[54ch] text-base leading-relaxed text-muted">
          I design the system by hand, then build AI-assisted workflows around it, so a small team can produce more
          on-brand work without the quality dropping.
        </p>
        <ul className="mt-6 border-t border-line">
          {aiWorkflow.map((t) => (
            <li key={t.name} className={row}>
              <span>{t.name}</span>
              <span className="text-right text-muted">{t.use}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="tools" title="Tools" sub="What I design with">
        <ul className="border-t border-line">
          {tools.map((t) => (
            <li key={t.name} className={row}>
              <span>{t.name}</span>
              <span className="text-right text-muted">{t.use}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills" sub="What I bring">
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="rounded-[10px] bg-tile px-3.5 py-2 text-[15px]">
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" title="Education" sub="And certification">
        <ul className="border-t border-line">
          {education.map((e) => (
            <li key={e.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 border-b border-line py-3 text-base">
              <span>
                {e.name} <span className="text-muted">· {e.place}</span>
              </span>
              <span className="text-muted tabular-nums">{e.dates}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Closing />
    </main>
  );
}
