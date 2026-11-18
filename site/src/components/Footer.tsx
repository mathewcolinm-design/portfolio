import { Link } from "react-router";
import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Container, LinkedInIcon, Monogram } from "./ui";

const links = [
  { to: "/", label: "Work" },
  { to: "/experiments", label: "Experiments" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Résumé" },
];

export function Footer() {
  return (
    <footer data-section-theme="light" className="pt-6 pb-16">
      <Container>
        <div className="grid gap-12 border-t border-line pt-14 md:grid-cols-[1.6fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Monogram size={34} />
              <p className="text-[22px] font-medium tracking-[-0.02em]">{profile.name}</p>
            </div>
            <p className="mt-4 max-w-[30rem] text-lg leading-relaxed text-muted">{profile.tagline}</p>
            <p className="mt-4 text-sm text-muted">© {new Date().getFullYear()} {profile.name}</p>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold">Links</h2>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[17px] text-muted transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-semibold">Contact</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <CopyEmail className="text-left text-[17px] text-muted transition-colors hover:text-fg" />
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[17px] text-muted transition-colors hover:text-fg"
                >
                  <LinkedInIcon size={18} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
