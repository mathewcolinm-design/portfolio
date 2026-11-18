import { ArrowLink, Section, Statement } from "./ui";

/** The closing call to action used at the end of most pages. */
export function Closing() {
  return (
    <Section id="closing">
      <Statement as="h2" ink="Hiring a product designer?" soft=" Let’s talk." />
      <div className="mt-6">
        <ArrowLink to="/contact">Get in touch</ArrowLink>
      </div>
    </Section>
  );
}
