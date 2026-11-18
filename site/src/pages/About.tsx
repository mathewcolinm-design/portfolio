import { CopyEmail } from "../components/CopyEmail";
import { PageHeader } from "../components/PageHeader";
import { Container, ToolIcon, buttonSecondary } from "../components/ui";
import { about, aiWorkflow } from "../data/content";

export function About() {
  return (
    <>
      <PageHeader />
      <main id="main">
        <section aria-labelledby="about-heading" className="pb-24">
          <Container className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <dl className="h-fit divide-y divide-line rounded-[20px] border border-line bg-surface px-6 md:sticky md:top-28">
              {about.facts.map((f) => (
                <div key={f.label} className="py-5">
                  <dt className="text-sm font-semibold text-muted">{f.label}</dt>
                  <dd className="mt-1 text-lg font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h2 id="about-heading" className="text-[28px] font-medium leading-tight tracking-[-0.02em] md:text-[32px]">
                {about.hello}
                <span className="block text-muted">{about.lead}</span>
              </h2>
              <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted">
                {about.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <CopyEmail className={`${buttonSecondary} mt-8`}>Email me</CopyEmail>
            </div>
          </Container>
        </section>

        <section aria-labelledby="workflow-heading" className="pb-24 md:pb-28">
          <Container className="grid gap-12 border-t border-line pt-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:pt-24">
            <div>
              <h2 id="workflow-heading" className="text-[28px] font-medium leading-tight tracking-[-0.02em] md:text-[32px]">
                How I work
                <span className="block text-muted">Design first, then tools that scale it.</span>
              </h2>
              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
                I design the system by hand, then build AI-assisted workflows around it, so the team can produce
                more on-brand work without the quality dropping.
              </p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {aiWorkflow.map((t) => (
                <li key={t.name} className="flex items-center gap-4 py-4">
                  <ToolIcon icon={t.icon} letters={t.letters} size={40} />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-muted">{t.use}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
