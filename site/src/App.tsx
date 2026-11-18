import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { useScrollTheme } from "./hooks/useScrollTheme";
import { About } from "./pages/About";
import { CaseStudy } from "./pages/CaseStudy";
import { Experiments } from "./pages/Experiments";
import { NotFound } from "./pages/NotFound";
import { Resume } from "./pages/Resume";
import { Work } from "./pages/Work";

/** Scrolls to #hash targets, or to the top on a new page. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  useScrollTheme(pathname);
  const isCase = pathname.startsWith("/work/");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        Skip to content
      </a>
      <ScrollManager />
      {!isCase && <Nav />}
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MotionConfig reducedMotion="user">
        <Layout />
      </MotionConfig>
    </BrowserRouter>
  );
}
