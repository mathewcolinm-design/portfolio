import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { profile } from "../data/content";
import { useScrollToId } from "./chapters";
import { pillButton } from "./ui";

/** Slim header: the name, and one way to get in touch. Chapters live in the rail. */
export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrollTo = useScrollToId();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toHello = (e: MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") scrollTo("hello");
    else navigate("/#hello");
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-bg transition-colors duration-300 ${scrolled ? "border-line" : "border-transparent"}`}
    >
      <div className="mx-auto w-full max-w-[1008px] px-5 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-[26px] leading-none font-medium tracking-[-0.05em] md:text-[30px]">
            {profile.name}
          </Link>
          <a href="/#hello" onClick={toHello} className={pillButton}>
            Get in touch <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
