import { Link } from "react-router";
import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Column, Frame } from "./ui";

const navigate = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = "text-base text-muted transition-colors duration-300 hover:text-fg";

export function Footer() {
  return (
    <footer>
      <Frame>
        <div className="border-t border-line py-14">
          <Column className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
            <p className="text-[26px] leading-none font-medium tracking-[-0.05em]">{profile.name}</p>
            <div>
              <h2 className="text-base">Navigate</h2>
              <ul className="mt-3 space-y-1.5">
                {navigate.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base">Connect</h2>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <CopyEmail className={`${linkClass} text-left`}>Copy email</CopyEmail>
                </li>
              </ul>
            </div>
          </Column>
        </div>
        <div className="border-t border-line py-5">
          <Column>
            <p className="text-[15px] text-muted">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </Column>
        </div>
      </Frame>
    </footer>
  );
}
