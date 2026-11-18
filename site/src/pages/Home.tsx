import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { Work } from "../components/Work";

export function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  );
}
