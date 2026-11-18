import { Link } from "react-router";
import { profile } from "../data/content";

const links = [
  { to: "/#work", label: "Work" },
  { to: "/#experience", label: "Experience" },
  { to: "/#about", label: "About" },
];

export function Nav() {
  return (
    <header className="theme-fade fixed inset-x-0 top-0 z-50 border-b border-line bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8" aria-label="Main">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.name}
        </Link>
        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5"
          >
            Say hello
          </a>
        </div>
      </nav>
    </header>
  );
}
