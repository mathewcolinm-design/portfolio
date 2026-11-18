import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { profile } from "../data/content";
import { Frame, pillButton } from "./ui";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[rgb(255_255_255/0.88)] backdrop-blur-md">
      <Frame>
        <div className="flex h-[72px] items-center justify-between border-b border-line">
          <Link to="/" className="text-[28px] leading-none font-medium tracking-[-0.05em] md:text-[34px]">
            {profile.name}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-base transition-colors duration-300 ${isActive ? "text-fg" : "text-muted hover:text-fg"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className={`${pillButton} ml-1`}>
              Get in touch <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </nav>

          <button
            type="button"
            className="-mr-2 grid h-10 w-10 place-items-center rounded-[10px] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </Frame>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            className="border-b border-line bg-bg md:hidden"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Frame className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className="py-2 text-[22px] tracking-[-0.03em]">
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" className={`${pillButton} mt-3 w-fit`}>
                Get in touch <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Frame>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
