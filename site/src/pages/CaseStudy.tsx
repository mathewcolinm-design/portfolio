import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ProjectCard } from "../components/ProjectCard";
import { Container, MatFrame } from "../components/ui";
import { projects, type Project } from "../data/content";
import { NotFound } from "./NotFound";

type Section = { id: string; label: string };

/** Which section's top has passed 30% of the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids.join()]);
  return active;
}

function CaseNav({ sections }: { sections: Section[] }) {
  const active = useActiveSection(sections.map((s) => s.id));
  return (
    <nav aria-label="Case study" className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 md:top-8">
      <div className="flex max-w-full items-center rounded-full border border-line bg-[color-mix(in_oklab,var(--surface)_82%,transparent)] p-1 shadow-[0_8px_24px_-12px_rgb(10_22_40/0.3)] backdrop-blur-xl">
        <Link
          to="/#work"
          className="flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-semibold text-fg transition-colors hover:bg-raised"
        >
          <ArrowLeft size={16} strokeWidth={2.2} aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">Projects</span>
        </Link>
        <span aria-hidden="true" className="mx-1.5 h-5 w-px shrink-0 bg-line" />
        <ul className="flex items-center gap-0.5 overflow-x-auto [scrollbar-width:none]">
          {sections.map((s) => (
            <li key={s.id} className={s.id === "overview" ? "max-sm:hidden" : undefined}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "location" : undefined}
                className={`relative block whitespace-nowrap rounded-full px-3 py-2 sm:px-3.5 text-[15px] font-semibold transition-colors duration-300 ${
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="case-pill"
                    className="absolute inset-0 rounded-full bg-raised shadow-[0_2px_8px_-2px_rgb(10_22_40/0.2)]"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="text-[28px] font-medium leading-tight tracking-[-0.02em] md:text-[32px]">
      {children}
    </h2>
  );
}

export function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;
  return <CaseStudyBody key={slug} project={projects[index]} next={projects[(index + 1) % projects.length]} />;
}

function CaseStudyBody({ project: p, next }: { project: Project; next: Project }) {
  const sections: Section[] = [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
    ...(p.metrics ? [{ id: "results", label: "Results" }] : []),
    { id: "designs", label: "Designs" },
  ];

  const meta = [
    { label: "Role", value: p.role },
    { label: "Timeline", value: p.timeline },
    { label: "Company", value: p.company },
    { label: "Focus", value: p.focus },
  ];

  return (
    <>
      <CaseNav sections={sections} />
      <main id="main">
        <header className="pt-32 md:pt-40">
          <Container narrow>
            <h1 className="text-[clamp(2rem,4.2vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.025em] text-balance">
              {p.caption}
            </h1>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{p.intro}</p>
            <MatFrame
              mat={p.mat}
              ratio="16 / 10"
              src={p.cover}
              alt={`${p.name} cover`}
              label={p.name}
              className="mt-10"
              rounded="rounded-[24px]"
            />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-b border-line py-10 md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-lg font-medium">{m.label}</dt>
                  <dd className="mt-1 text-muted tabular-nums">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </header>

        <section aria-labelledby="overview-h" className="pt-20">
          <Container narrow>
            <div id="overview" className="scroll-mt-28">
              <SectionHeading id="overview-h">Overview</SectionHeading>
              <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{p.overview}</p>
            </div>

            <div id="process" className="mt-20 scroll-mt-28 pb-24">
              <SectionHeading id="process-h">Process</SectionHeading>
              <ul className="mt-6 max-w-[60ch]">
                {p.did.map((d) => (
                  <li key={d} className="border-t border-dashed border-line py-4 text-lg leading-relaxed text-muted first:border-t-0">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section aria-label="Results and designs" className="pb-24">
          <Container narrow className="border-t border-line pt-20">
            {p.metrics && (
              <div id="results" className="mb-20 scroll-mt-28">
                <SectionHeading id="results-h">Results</SectionHeading>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {p.metrics.map((m) => (
                    <li key={m.label} className="rounded-[20px] border border-line bg-surface p-6">
                      <p className="text-[34px] font-semibold tracking-[-0.02em] text-positive tabular-nums">{m.value}</p>
                      <p className="mt-3 text-lg font-medium">{m.label}</p>
                      {m.detail && <p className="mt-0.5 text-muted">{m.detail}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div id="designs" className="scroll-mt-28">
              <SectionHeading id="designs-h">Designs</SectionHeading>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {p.shots.map((s, i) => {
                  const wide = i === 0 || (i === p.shots.length - 1 && (p.shots.length - 1) % 2 === 1);
                  return (
                  <li key={s.label} className={wide ? "sm:col-span-2" : ""}>
                    <figure>
                      <MatFrame mat={p.mat} ratio={wide ? "16 / 9" : "4 / 3"} src={s.src} label={s.label} sub={s.src ? undefined : null} />
                      <figcaption className="mt-3 text-muted">{s.label}</figcaption>
                    </figure>
                  </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </section>

        <section aria-labelledby="next-h" className="pt-20 pb-6">
          <Container narrow>
            <h2 id="next-h" className="text-[22px] font-medium tracking-[-0.015em]">
              Next project
            </h2>
            <div className="mt-6">
              <ProjectCard project={next} />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
