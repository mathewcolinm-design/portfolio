import { useLenis } from "lenis/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Column, Statement } from "./ui";

export type ChapterInfo = { id: string; label: string };

/** The four pages of the site, in reading order. */
export const sitePages = [
  { to: "/", label: "Work" },
  { to: "/how", label: "How I work" },
  { to: "/path", label: "Path" },
  { to: "/hello", label: "Say hello" },
];

/** Height of everything pinned to the top (header and bars), so jumps land below it. */
export function stickyOffset() {
  const pinned = Array.from(document.querySelectorAll<HTMLElement>("[data-sticky]"));
  return -(pinned.reduce((h, el) => h + el.getBoundingClientRect().height, 0) + 24);
}

/** Scrolls to an element id, through Lenis when smooth scrolling is on. */
export function useScrollToId() {
  const lenis = useLenis();
  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = stickyOffset();
      if (lenis) lenis.scrollTo(el, { offset });
      else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset });
    },
    [lenis],
  );
}

/** Index of the section whose top has passed 40% of the viewport, or -1 before the first. */
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
      // At the very bottom the last section is the one being read.
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

/** True once the page has scrolled past its very top. */
export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

/** Bars pinned to the top: clear over the page opening's glow, solid white once scrolled. */
export const barSurface = (scrolled: boolean) =>
  `transition-colors duration-300 ${scrolled ? "border-line bg-bg" : "border-transparent bg-transparent"}`;

/** A thin line along the bottom edge of the header that fills as you scroll the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });
  return <motion.span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-px origin-left bg-violet" style={{ scaleX: progress }} />;
}

/** Phones and small tablets: the page links in a slim bar under the header. */
export function SitePageBar() {
  const scrolled = useScrolled();
  return (
    <nav data-sticky aria-label="Pages" className={`sticky top-16 z-40 border-b md:hidden ${barSurface(scrolled)}`}>
      <ol className="mx-auto flex h-11 max-w-[1008px] items-center gap-5 overflow-x-auto px-5 text-[15px] whitespace-nowrap [scrollbar-width:none]">
        {/* Say hello is already the button in the header. */}
        {sitePages.filter((p) => p.to !== "/hello").map((p) => (
          <li key={p.to}>
            <NavLink to={p.to} end className={({ isActive }) => `transition-colors ${isActive ? "text-fg" : "text-muted hover:text-fg"}`}>
              {p.label}
            </NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Case studies: their sections in a bar pinned under the header, the current one marked. */
export function SectionBar({ sections }: { sections: ChapterInfo[] }) {
  const active = useActiveChapter(sections.map((s) => s.id));
  const scrollTo = useScrollToId();
  const listRef = useRef<HTMLOListElement>(null);
  const scrolled = useScrolled();

  // On narrow screens the bar scrolls sideways; keep the current section in view.
  useEffect(() => {
    const list = listRef.current;
    const item = active >= 0 ? (list?.children[active] as HTMLElement | undefined) : undefined;
    if (list && item) list.scrollTo({ left: item.offsetLeft - list.offsetLeft - 12, behavior: "smooth" });
  }, [active]);

  return (
    <nav data-sticky aria-label="Case study sections" className={`sticky top-16 z-40 border-b ${barSurface(scrolled)}`}>
      <div className="mx-auto flex h-11 max-w-[1008px] items-center gap-5 px-5 text-[15px] md:px-6">
        <Link to="/#work" className="flex shrink-0 items-center gap-1.5 text-muted transition-colors hover:text-fg">
          <ArrowLeft size={15} strokeWidth={1.5} aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">All work</span>
        </Link>
        <span aria-hidden="true" className="h-4 w-px shrink-0 bg-line" />
        <ol ref={listRef} className="flex min-w-0 items-center gap-5 overflow-x-auto px-3 whitespace-nowrap [scrollbar-width:none] [scroll-padding-inline:12px] [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-24px),transparent)]">
          {sections.map((s, i) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s.id);
                }}
                aria-current={i === active ? "location" : undefined}
                className={`relative block py-3 transition-colors ${i === active ? "text-fg" : "text-muted hover:text-fg"}`}
              >
                {s.label}
                {i === active && (
                  <motion.span
                    layoutId="section-marker"
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-px bg-violet"
                    transition={{ type: "spring", stiffness: 420, damping: 38 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

/** A chapter: hairline, a two-tone opening statement, then its content. */
export function Chapter({
  id,
  title,
  soft,
  plain = false,
  rule = true,
  children,
}: {
  id: string;
  /** Hairline above the heading; off when the chapter follows a violet field. */
  rule?: boolean;
  title: string;
  soft?: string;
  /** Ink-only, smaller heading: two-tone is kept for the chapters that open a page's story. */
  plain?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`}>
      <Column>
        <div className={rule ? "border-t border-line pt-16 md:pt-24" : ""}>
          <Statement as="h2" id={`${id}-h`} size={plain ? "md" : "lg"} ink={title} soft={plain ? undefined : soft} />
        </div>
      </Column>
      <div className={`${plain ? "mt-8 md:mt-10" : "mt-12 md:mt-16"} pb-24 md:pb-32`}>{children}</div>
    </section>
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
      {index >= 0 && next.to !== "/hello" && (
        <Column className="pb-24 md:pb-32">
          <div className="border-t border-line pt-10">
            <Link to={next.to} className="group block">
              <span className="text-[15px] text-muted">{isLast ? "Back to the start" : "Next"}</span>
              <span className="mt-2 flex items-center gap-3 transition-colors duration-300 group-hover:text-violet text-[clamp(1.625rem,2.8vw,2.5rem)] leading-[1.08] tracking-[-0.035em]">
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
