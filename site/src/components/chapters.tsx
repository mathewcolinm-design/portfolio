import { useLenis } from "lenis/react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Column, Statement } from "./ui";

export type ChapterInfo = { id: string; label: string };

/** Scrolls to an element id, through Lenis when smooth scrolling is on. */
export function useScrollToId() {
  const lenis = useLenis();
  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = window.innerWidth >= 1280 ? -72 : -112;
      if (lenis) lenis.scrollTo(el, { offset });
      else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset });
    },
    [lenis],
  );
}

/** Index of the chapter whose top has passed 40% of the viewport, or -1 before the first. */
export function useActiveChapter(ids: string[]) {
  const [active, setActive] = useState(-1);
  const key = ids.join();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = -1;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = i;
      });
      // At the very bottom the last chapter is the one being read.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids.length - 1;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return active;
}

/**
 * Where you are in the story. Desktop: a rail in the right margin whose
 * hairline fills as you read. Phones: a slim bar under the header.
 */
export function ProgressRail({ chapters, label = "Chapters" }: { chapters: ChapterInfo[]; label?: string }) {
  const active = useActiveChapter(chapters.map((c) => c.id));
  const scrollTo = useScrollToId();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });

  return (
    <>
      <nav aria-label={label} className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 xl:flex">
        <ol className="flex flex-col items-end gap-3 py-1 pr-5">
          {chapters.map((c, i) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(c.id);
                }}
                aria-current={i === active ? "location" : undefined}
                className={`block text-[15px] transition-[color,translate] duration-500 ease-out-expo ${
                  i === active ? "-translate-x-1.5 text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ol>
        <span aria-hidden="true" className="relative w-px bg-line">
          <motion.span className="absolute inset-0 origin-top bg-fg" style={{ scaleY: progress }} />
        </span>
      </nav>

      <div
        aria-hidden={active < 0}
        className={`fixed inset-x-0 top-16 z-40 border-b border-line bg-bg transition-opacity duration-300 xl:hidden ${
          active < 0 ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-[1008px] items-center justify-between px-5 text-[15px] md:px-6">
          <span>{chapters[Math.max(active, 0)].label}</span>
          <span className="text-muted tabular-nums">
            {Math.max(active, 0) + 1} / {chapters.length}
          </span>
        </div>
        <motion.span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left bg-fg" style={{ scaleX: progress }} />
      </div>
    </>
  );
}

/** A chapter: hairline, a two-tone opening statement, then its content. */
export function Chapter({
  id,
  title,
  soft,
  plain = false,
  children,
}: {
  id: string;
  title: string;
  soft?: string;
  /** Ink-only, smaller heading: two-tone is kept for the chapters that open a page's story. */
  plain?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28">
      <Column>
        <div className="border-t border-line pt-16 md:pt-24">
          <Statement as="h2" id={`${id}-h`} size={plain ? "md" : "lg"} ink={title} soft={plain ? undefined : soft} />
        </div>
      </Column>
      <div className={`${plain ? "mt-8 md:mt-10" : "mt-12 md:mt-16"} pb-24 md:pb-32`}>{children}</div>
    </section>
  );
}

/** The four pages of the site, in reading order. */
export const sitePages = [
  { to: "/", label: "Work" },
  { to: "/how", label: "How I work" },
  { to: "/path", label: "Path" },
  { to: "/hello", label: "Say hello" },
];

function usePageProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });
}

/**
 * Site navigation as a reading rail. Desktop: the four pages in the right
 * margin; the current one steps forward and the hairline fills as you scroll
 * it. Phones: the same pages in a slim bar under the header (SitePageBar).
 */
export function SiteRail() {
  const progress = usePageProgress();
  return (
    <nav aria-label="Pages" className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 xl:flex">
      <ol className="flex flex-col items-end gap-3 py-1 pr-5">
        {sitePages.map((p) => (
          <li key={p.to}>
            <NavLink
              to={p.to}
              end
              className={({ isActive }) =>
                `block text-[15px] transition-[color,translate] duration-500 ease-out-expo ${
                  isActive ? "-translate-x-1.5 text-fg" : "text-muted hover:text-fg"
                }`
              }
            >
              {p.label}
            </NavLink>
          </li>
        ))}
      </ol>
      <span aria-hidden="true" className="relative w-px bg-line">
        <motion.span className="absolute inset-0 origin-top bg-fg" style={{ scaleY: progress }} />
      </span>
    </nav>
  );
}

/** Phone and tablet version of the rail: page links under the header, progress along the bottom. */
export function SitePageBar() {
  const progress = usePageProgress();
  return (
    <nav aria-label="Pages" className="sticky top-16 z-40 border-b border-line bg-bg xl:hidden">
      <ol className="mx-auto flex h-11 max-w-[1008px] items-center gap-5 overflow-x-auto px-5 text-[15px] whitespace-nowrap [scrollbar-width:none] md:px-6">
        {sitePages.map((p) => (
          <li key={p.to}>
            <NavLink
              to={p.to}
              end
              className={({ isActive }) => `transition-colors ${isActive ? "text-fg" : "text-muted hover:text-fg"}`}
            >
              {p.label}
            </NavLink>
          </li>
        ))}
      </ol>
      <motion.span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-px origin-left bg-fg" style={{ scaleX: progress }} />
    </nav>
  );
}

/** One page of the site: a two-tone title, its content, then the way on to the next page. */
export function Page({
  title,
  soft,
  note,
  children,
}: {
  title: string;
  soft?: string;
  note?: ReactNode;
  children: ReactNode;
}) {
  const { pathname } = useLocation();
  const index = sitePages.findIndex((p) => p.to === pathname);
  const next = sitePages[(index + 1) % sitePages.length];
  const isLast = index === sitePages.length - 1;

  return (
    <main id="main">
      <Column className="pt-14 pb-20 md:pt-24 md:pb-28">
        <Statement as="h1" size="xl" ink={title} soft={soft} />
        {note && <div className="mt-10">{note}</div>}
      </Column>
      {children}
      {index >= 0 && (
        <Column className="pb-24 md:pb-32">
          <div className="border-t border-line pt-10">
            <Link to={next.to} className="group block">
              <span className="text-[15px] text-muted">{isLast ? "Back to the start" : "Next"}</span>
              <span className="mt-2 flex items-center gap-3 text-[clamp(1.625rem,2.8vw,2.5rem)] leading-[1.08] tracking-[-0.035em]">
                {next.label}
                <ArrowRight
                  size={28}
                  strokeWidth={1.25}
                  aria-hidden="true"
                  className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5"
                />
              </span>
            </Link>
          </div>
        </Column>
      )}
    </main>
  );
}

