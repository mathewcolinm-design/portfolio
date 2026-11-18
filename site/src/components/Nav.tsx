import { motion } from "motion/react";
import { NavLink } from "react-router";

const tabs = [
  { to: "/", label: "Work" },
  { to: "/experiments", label: "Experiments" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Résumé" },
];

/** Pill tab bar, fixed at the top centre. The white pill glides to the active tab. */
export function Nav() {
  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-8">
      <ul className="flex items-center gap-0.5 rounded-full border border-line bg-[color-mix(in_oklab,var(--surface)_82%,transparent)] p-1 shadow-[0_8px_24px_-12px_rgb(10_22_40/0.3)] backdrop-blur-xl">
        {tabs.map((t) => (
          <li key={t.to}>
            <NavLink
              to={t.to}
              end={t.to === "/"}
              className={({ isActive }) =>
                `relative block rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors duration-300 sm:px-4 ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-raised shadow-[0_2px_8px_-2px_rgb(10_22_40/0.2)]"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
