import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  return (
    <footer id="contact" data-section-theme="dark" className="scroll-mt-16 pt-24 pb-10 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="mt-4 max-w-4xl text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.035em]">
            Let’s make something people <span className="text-accent">enjoy</span> using.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3">
          <CopyEmail className="rounded-full bg-fg px-6 py-4 text-base font-medium text-bg transition-[background-color,color,translate] duration-500 hover:-translate-y-0.5 md:text-lg" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-4 text-base font-medium transition-[border-color,color] duration-500 hover:border-fg md:text-lg"
          >
            LinkedIn ↗
          </a>
        </Reveal>

        <div className="theme-fade mt-24 flex flex-col justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Designed and built with React, Tailwind and Motion.</p>
        </div>
      </div>
    </footer>
  );
}
