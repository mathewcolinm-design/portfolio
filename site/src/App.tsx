import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Project } from "./pages/Project";
import { Projects } from "./pages/Projects";

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

/** Old case study links (/work/<slug>) keep working. */
function OldProjectLink() {
  const { slug } = useParams();
  return <Navigate to={`/projects/${slug}`} replace />;
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
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:slug" element={<OldProjectLink />} />
        <Route path="/resume" element={<Navigate to="/about#experience" replace />} />
        <Route path="/experiments" element={<Navigate to="/projects#other" replace />} />
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
