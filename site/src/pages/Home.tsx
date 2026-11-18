import { Plus } from "lucide-react";
import { Link } from "react-router";
import { Closing } from "../components/Closing";
import { ProjectItem } from "../components/ProjectItem";
import { ArrowLink, Note, Section, Statement } from "../components/ui";
import { companies, featured, homeAbout, profile, projects, services } from "../data/content";

export function Home() {
  const work = featured.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <main id="main">
      <Section divider={false}>
        <div className="pt-4 md:pt-8">
          <Note>{profile.availability}</Note>
          <div className="mt-4">
            <Statement as="h1" ink={profile.statement[0]} soft={profile.statement[1]} />
          </div>
          <div className="mt-6">
            <ArrowLink to="/contact">Get in touch</ArrowLink>
          </div>
        </div>
      </Section>

      <Section id="work" title="Selected work" sub="The work I’m proud of">
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

      <Section id="about" title="About me" sub="The person behind the work">
        <Statement size="md" ink={homeAbout.statement[0]} soft={homeAbout.statement[1]} />
        <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted">{homeAbout.body}</p>
        <div className="mt-6">
          <ArrowLink to="/about">More about me</ArrowLink>
        </div>
      </Section>

      <Section id="services" title="What I do" sub="How I can help your team">
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

      <Section id="companies" title="Where I’ve worked" sub="Teams I’ve designed with">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3">
          {companies.map((c) => (
            <li key={c.name}>
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-[10px] bg-tile text-[15px] font-medium text-muted"
              >
                {c.initials}
              </span>
              <p className="mt-2.5 text-[15px]">{c.name}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link to="/about#experience" className="text-base text-muted underline transition-colors hover:text-fg">
            See my full experience
          </Link>
        </div>
      </Section>

      <Closing />
    </main>
  );
}
