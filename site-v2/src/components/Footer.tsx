import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { useLenis } from "lenis/react";
import { useLocation } from "react-router";
import { chapters, profile } from "../data/content";
import { Bloom } from "./bloom";
import { CopyEmail } from "./CopyEmail";
import { BehanceIcon, LinkedInIcon } from "./icons";
import { Column, Statement } from "./ui";

function BottomLine({ deep }: { deep: boolean }) {
  const lenis = useLenis();
  const toTop = () => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0 }));
  const quiet = deep ? "text-on-deep-muted" : "text-muted";
  const hover = deep ? "hover:text-on-deep" : "hover:text-fg";

  return (
    <div className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t py-6 text-[15px] ${deep ? "border-deep-line" : "border-line"} ${quiet}`}>
      <p className="whitespace-nowrap">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div className="flex items-center gap-5">
        <a href={`mailto:${profile.email}`} aria-label="Email" className={`transition-colors ${hover}`}>
          <Mail size={18} strokeWidth={1.25} aria-hidden="true" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`transition-colors ${hover}`}>
          <LinkedInIcon />
        </a>
        {profile.behance && (
          <a href={profile.behance} target="_blank" rel="noreferrer" aria-label="Behance" className={`transition-colors ${hover}`}>
            <BehanceIcon />
          </a>
        )}
        <button type="button" onClick={toTop} className={`inline-flex items-center gap-1.5 whitespace-nowrap transition-colors ${hover}`}>
          Back to top <ArrowUp size={15} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/**
 * Every page closes on a deep violet field that asks for a hello, except the
 * Say hello page itself, which ends on a plain line.
 */
export function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/hello") {
    return (
      <footer>
        <Column>
          <BottomLine deep={false} />
        </Column>
      </footer>
    );
  }

  return (
    <footer>
      <Bloom labelledBy="close-h">
        <Column className="pt-24 md:pt-32">
          <Statement as="h2" id="close-h" size="xl" tone="deep" ink={chapters.hello.title} soft={chapters.hello.soft} />
          <CopyEmail className="mt-12 text-left text-[clamp(1.5rem,4vw,2.5rem)] tracking-[-0.035em] text-on-deep underline decoration-deep-line decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-on-deep" />
          <p className="mt-3 text-[15px] text-on-deep-muted">Click the address to copy it.</p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 pb-24 md:pb-32">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-base transition-colors hover:text-on-deep-muted">
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {profile.behance && (
              <a href={profile.behance} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-base transition-colors hover:text-on-deep-muted">
                <BehanceIcon />
                Behance
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
          <BottomLine deep />
        </Column>
      </Bloom>
    </footer>
  );
}
