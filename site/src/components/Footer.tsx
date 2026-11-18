import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { profile } from "../data/content";
import { Column } from "./ui";

export function Footer() {
  const lenis = useLenis();
  const toTop = () => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0 }));

  return (
    <footer>
      <Column>
        <div className="flex items-center justify-between gap-4 border-t border-line py-6 text-[15px] text-muted">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <button type="button" onClick={toTop} className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
            Back to top <ArrowUp size={15} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </Column>
    </footer>
  );
}
