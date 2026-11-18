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
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {experiments.map((e) => (
            <li key={e.title}>
              <figure>
                <Tile src={e.src} alt={e.title} ratio="4 / 3" placeholder="Coming soon" />
                <figcaption className="mt-2.5 text-base">
                  {e.title}
                  <span className="block text-muted">{e.note}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Closing />
    </main>
  );
}
