import { Link } from "react-router";
import { buttonPrimary } from "../components/ui";

export function NotFound() {
  return (
    <main id="main" className="grid min-h-[80svh] place-items-center px-5 pt-24">
      <div className="text-center">
        <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-medium tracking-[-0.025em]">This page doesn’t exist.</h1>
        <p className="mt-3 text-lg text-muted">The link may be old, or the project may have moved.</p>
        <Link to="/" className={`${buttonPrimary} mt-8`}>
          Back to my work
        </Link>
      </div>
    </main>
  );
}
