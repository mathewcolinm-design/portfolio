import { ArrowLink, Section, Statement } from "../components/ui";

export function NotFound() {
  return (
    <main id="main" className="min-h-[60svh]">
      <Section divider={false}>
        <div className="pt-4 md:pt-8">
          <Statement as="h1" ink="This page doesn’t exist." soft=" The link may be old, or the project may have moved." />
          <div className="mt-6">
            <ArrowLink to="/">Back to the home page</ArrowLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
