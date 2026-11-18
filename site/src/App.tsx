import { ReactLenis, useLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Case } from "./pages/Case";
import { NotFound } from "./pages/NotFound";
import { Story } from "./pages/Story";

/** Scrolls to #hash targets, or jumps to the top on a new page. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      const el = id ? document.getElementById(id) : null;
      const offset = window.innerWidth >= 1280 ? -72 : -112;
      if (el) {
        if (lenis) lenis.scrollTo(el, { offset, immediate: true });
        else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset });
      } else if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    });
  }, [pathname, hash, lenis]);
  return null;
}

/** Old links from earlier versions of the site keep working. */
function OldProjectLink() {
  const { slug } = useParams();
  return <Navigate to={`/work/${slug}`} replace />;
}

function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-[10px] focus:bg-fg focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Story />} />
        <Route path="/work/:slug" element={<Case />} />
        <Route path="/projects/:slug" element={<OldProjectLink />} />
        <Route path="/projects" element={<Navigate to="/#work" replace />} />
        <Route path="/experiments" element={<Navigate to="/#work" replace />} />
        <Route path="/about" element={<Navigate to="/#path" replace />} />
        <Route path="/resume" element={<Navigate to="/#path" replace />} />
        <Route path="/contact" element={<Navigate to="/#hello" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  const reduced = usePrefersReducedMotion();
  const site = (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MotionConfig reducedMotion="user">
        <Layout />
      </MotionConfig>
    </BrowserRouter>
  );

  // Smooth, eased scrolling, unless the visitor has asked for less motion.
  if (reduced) return site;
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      {site}
    </ReactLenis>
  );
}
