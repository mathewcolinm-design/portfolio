import { PageHeader } from "../components/PageHeader";
import { ProjectCard } from "../components/ProjectCard";
import { Container } from "../components/ui";
import { projects } from "../data/content";

export function Work() {
  return (
    <>
      <PageHeader />
      <main id="main">
        <section id="work" data-section-theme="dark" aria-labelledby="work-h" className="scroll-mt-24 pb-24">
          <Container>
            <h2 id="work-h" className="sr-only">
              Selected work
            </h2>
            <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-14">
              {projects.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
