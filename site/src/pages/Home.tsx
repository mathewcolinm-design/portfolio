import { Plus } from "lucide-react";
import { Closing } from "../components/Closing";
import { ProjectItem } from "../components/ProjectItem";
import { ArrowLink, Note, Section, Statement } from "../components/ui";
import { featured, homeAbout, jobs, profile, projects, services } from "../data/content";

export function Home() {
  const work = featured.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <main id="main">
      <Section divider={false}>
        <div className="pt-4 md:pt-8">
          <Statement as="h1" ink={profile.statement[0]} soft={profile.statement[1]} />
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
            <ArrowLink to="/contact">Get in touch</ArrowLink>
            <Note>{profile.availability}</Note>
          </div>
        </div>
      </Section>

      <Section id="work" title="Selected work" sub="Product, brand and motion, most recent first">
        <ul className="space-y-14">
          {work.map((p) => (
            <li key={p.slug}>
              <ProjectItem project={p} />
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ArrowLink to="/projects">See all projects</ArrowLink>
        </div>
      </Section>

      <Section id="about" title="About me" sub="How I got here">
        <Statement size="md" ink={homeAbout.statement[0]} soft={homeAbout.statement[1]} />
        <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted">{homeAbout.body}</p>
        <div className="mt-6">
          <ArrowLink to="/about">More about me</ArrowLink>
        </div>
      </Section>

      <Section id="services" title="What I do" sub="Where I’m most useful to a team">
        <ul className="border-t border-line">
          {services.map((s) => (
            <li key={s.name} className="border-b border-line py-4">
              <h3 className="text-base">{s.name}</h3>
              <p className="mt-0.5 text-base text-muted">{s.line}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[10px] bg-tile px-4 py-4">
          <ArrowLink to="/contact">Get in touch</ArrowLink>
          <p className="flex items-center gap-2 text-base text-muted">
            <Plus size={14} strokeWidth={1.25} aria-hidden="true" />
            {profile.availability}
          </p>
        </div>
      </Section>

      <Section id="companies" title="Where I’ve worked" sub="Since 2020">
        <ul className="border-t border-line">
          {jobs.map((j) => (
            <li
              key={j.company + j.dates}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 border-b border-line py-3 text-base"
            >
              <span>
                {j.company} <span className="text-muted">· {j.role}</span>
              </span>
              <span className="text-muted tabular-nums">{j.dates}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <ArrowLink to="/about#experience">See what I did at each</ArrowLink>
        </div>
      </Section>

      <Closing />
    </main>
  );
}
