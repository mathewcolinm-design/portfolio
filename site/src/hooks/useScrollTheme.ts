import { useEffect } from "react";

/**
 * Switches the page between light and dark as you scroll.
 *
 * Elements marked `data-section-theme="light" | "dark"` claim the theme once
 * their top edge passes 30% down the viewport. The last section also claims
 * it when it is mostly in view, so a short footer still gets its turn.
 * The result lands on <html data-theme>; CSS animates every colour token.
 */
export function useScrollTheme(key: string) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section-theme]"));
    if (sections.length === 0) return;

    const root = document.documentElement;
    const meta = document.querySelector('meta[name="theme-color"]');
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let theme = sections[0].dataset.sectionTheme ?? "light";
      sections.forEach((s, i) => {
        const top = s.getBoundingClientRect().top;
        const isLast = i === sections.length - 1;
        if (top <= line || (isLast && top <= window.innerHeight * 0.75)) theme = s.dataset.sectionTheme ?? theme;
      });
      if (root.dataset.theme !== theme) {
        root.dataset.theme = theme;
        meta?.setAttribute("content", theme === "dark" ? "#0b1322" : "#f8f9fa");
      }
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
  }, [key]);
}
