import { Page } from "../components/chapters";
import { CopyEmail } from "../components/CopyEmail";
import { ArrowLink, Column } from "../components/ui";
import { chapters, profile } from "../data/content";

export function Hello() {
  return (
    <Page title={chapters.hello.title} soft={chapters.hello.soft}>
      <Column className="pb-24 md:pb-32">
        <h2 className="sr-only">Contact</h2>
        <CopyEmail className="text-left text-[clamp(1.5rem,4vw,2.5rem)] tracking-[-0.035em] underline decoration-line decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-fg" />
        <p className="mt-3 text-[15px] text-muted">Click the address to copy it.</p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <ArrowLink to={`mailto:${profile.email}`}>Open in your email app</ArrowLink>
          <ArrowLink to={profile.linkedin} external>
            LinkedIn
          </ArrowLink>
        </div>
      </Column>
    </Page>
  );
}
