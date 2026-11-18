import { Closing } from "../components/Closing";
import { ProjectItem } from "../components/ProjectItem";
import { Section, Statement, Tile } from "../components/ui";
import { experiments, projects } from "../data/content";

export function Projects() {
  return (
    <main id="main">
      <Section divider={false}>
        <div className="pt-4 md:pt-8">
          <Statement as="h1" ink="Projects." soft=" Product, brand and motion work for SaaS, fintech and Web3 teams." />
        </div>
      </Section>

      <Section id="all" title="All projects" sub={`${projects.length} case studies`}>
        <ul className="space-y-14">
          {projects.map((p) => (
            <li key={p.slug}>
              <ProjectItem project={p} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="other" title="Other work" sub="Motion, brand and graphics">
        <ul className="border-t border-line">
          {experiments.map((e) => (
            <li key={e.title} className="border-b border-line py-4">
              {e.src && (
                <div className="mb-3">
                  <Tile src={e.src} alt={e.title} ratio="4 / 3" />
                </div>
              )}
              <h3 className="text-base">{e.title}</h3>
              <p className="mt-0.5 text-base text-muted">{e.note}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Closing />
    </main>
  );
}
