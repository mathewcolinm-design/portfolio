import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { profile } from "../data/content";
import { useScrollToId } from "./chapters";
import { Frame, pillButton } from "./ui";

/** Slim header: the name, and one way to get in touch. Chapters live in the rail. */
export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrollTo = useScrollToId();

  const toHello = (e: MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") scrollTo("hello");
    else navigate("/#hello");
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgb(255_255_255/0.9)] backdrop-blur-md">
      <Frame>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-[26px] leading-none font-medium tracking-[-0.05em] md:text-[30px]">
            {profile.name}
          </Link>
          <a href="/#hello" onClick={toHello} className={pillButton}>
            Get in touch <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </Frame>
    </header>
  );
}
