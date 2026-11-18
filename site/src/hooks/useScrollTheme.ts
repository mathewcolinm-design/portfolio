import { useEffect } from "react";

/**
 * Switches the page between light and dark as you scroll.
 *
 * Any element with `data-section-theme="light" | "dark"` claims the theme
 * while it sits under a thin line at the middle of the viewport. The theme
 * lands on <html data-theme>, and CSS fades every token to the new palette.
 *
 * `key` should change on route change so new sections get observed.
 */
export function useScrollTheme(key: string) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section-theme]"));
    if (sections.length === 0) return;

    const meta = document.querySelector('meta[name="theme-color"]');
    const apply = (theme: string) => {
      const root = document.documentElement;
      if (root.dataset.theme === theme) return;
      root.dataset.theme = theme;
      meta?.setAttribute("content", theme === "light" ? "#f4f2ec" : "#0e0e0c");
    };

    // Band from 49% to 50% of the viewport height: whichever section
    // crosses the middle of the screen sets the theme.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) apply((entry.target as HTMLElement).dataset.sectionTheme ?? "dark");
        }
      },
      { rootMargin: "-49% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [key]);
}
