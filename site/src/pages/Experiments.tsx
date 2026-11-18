import { PageHeader } from "../components/PageHeader";
import { Container, MatFrame } from "../components/ui";
import { experiments } from "../data/content";

export function Experiments() {
  return (
    <>
      <PageHeader />
      <main id="main">
        <section aria-label="Experiments" className="pb-24">
          <Container>
            <ul className="gap-6 sm:columns-2 lg:columns-3">
              {experiments.map((e) => (
                <li key={e.title} className="mb-10 break-inside-avoid">
                  <figure>
                    <MatFrame mat={e.mat} ratio={e.ratio} src={e.src} label={e.title} sub={null} />
                    <figcaption className="mt-3 text-[16px]">
                      <span className="font-medium text-fg">{e.title}</span>
                      <span className="mt-0.5 block text-muted">{e.note}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}
