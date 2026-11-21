import { ArrowUpRight, Mail } from "lucide-react";
import { Page } from "../components/chapters";
import { CopyEmail } from "../components/CopyEmail";
import { BehanceIcon, LinkedInIcon } from "../components/icons";
import { Column } from "../components/ui";
import { chapters, profile } from "../data/content";

const linkClass = "group inline-flex items-center gap-2 text-base transition-colors hover:text-muted";
const arrow = (
  <ArrowUpRight
    size={16}
    strokeWidth={1.5}
    aria-hidden="true"
    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
);

export function Hello() {
  return (
    <Page title={chapters.hello.title} soft={chapters.hello.soft}>
      <Column className="pb-24 md:pb-32">
        <h2 className="sr-only">Contact</h2>
        <CopyEmail className="text-left text-[clamp(1.5rem,4vw,2.5rem)] tracking-[-0.035em] underline decoration-line decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-fg" />
        <p className="mt-3 text-[15px] text-muted">Click the address to copy it.</p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <a href={`mailto:${profile.email}`} className={linkClass}>
            <Mail size={18} strokeWidth={1.25} aria-hidden="true" />
            Open in your email app
            {arrow}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            <LinkedInIcon />
            LinkedIn
            {arrow}
          </a>
          {profile.behance && (
            <a href={profile.behance} target="_blank" rel="noreferrer" className={linkClass}>
              <BehanceIcon />
              Behance
              {arrow}
            </a>
          )}
        </div>
      </Column>
    </Page>
  );
}
