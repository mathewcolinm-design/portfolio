import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { profile } from "../data/content";
import { ScrollProgress, barSurface, sitePages, useScrolled } from "./chapters";
import { primaryButton } from "./ui";

/**
 * The site's navigation, along the top: name on the left, the pages and a
 * "Say hello" button on the right. A hairline along the bottom fills as you
 * scroll. On phones the page links move into a bar just below (SitePageBar).
 */
export function Header() {
  const { pathname } = useLocation();
  const scrolled = useScrolled();

  const isActive = (to: string) => (to === "/" ? pathname === "/" || pathname.startsWith("/work/") : pathname === to);
  const links = sitePages.filter((p) => p.to !== "/hello");

  return (
    <header
      data-sticky
      className={`sticky top-0 z-50 border-b ${barSurface(scrolled)}`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1008px] items-center justify-between gap-6 px-5 md:px-6">
        <Link to="/" className="shrink-0 text-[26px] leading-none font-medium tracking-[-0.05em] md:text-[30px]">
          {profile.name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  aria-current={isActive(p.to) ? "page" : undefined}
                  className={`relative py-2 text-base transition-colors duration-300 ${
                    isActive(p.to) ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/hello"
            aria-current={pathname === "/hello" ? "page" : undefined}
            className={`${primaryButton} ${pathname === "/hello" ? "bg-violet" : ""}`}
          >
            Say hello <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}
