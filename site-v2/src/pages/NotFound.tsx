import { ArrowLink, Column, Statement } from "../components/ui";

export function NotFound() {
  return (
    <main id="main" className="min-h-[60svh]">
      <Column className="pt-16 pb-24 md:pt-28">
        <Statement as="h1" size="lg" ink="This page doesn’t exist." soft=" The link may be old, or the project may have moved." />
        <div className="mt-8">
          <ArrowLink to="/">Back to the start</ArrowLink>
        </div>
      </Column>
    </main>
  );
}
