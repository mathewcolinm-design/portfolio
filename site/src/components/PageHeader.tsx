import { useLocation, useNavigate } from "react-router";
import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Container, Monogram, buttonPrimary, buttonSecondary } from "./ui";

/**
 * Intro block shared by the four main tabs: monogram, name, one-line pitch and
 * two actions. A soft light leak sits behind it and fades out in dark sections.
 */
export function PageHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const seeWork = () => {
    if (pathname === "/") document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    else navigate("/#work");
  };

  return (
    <header data-section-theme="light" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-[560px] overflow-hidden"
        style={{ opacity: "var(--glow)" }}
      >
        <div
          className="absolute -top-10 left-1/2 h-[520px] w-[1100px] -translate-x-[20%] blur-[60px]"
          style={{
            background:
              "radial-gradient(38% 46% at 42% 30%, rgb(136 92 255 / 0.55), transparent 70%), radial-gradient(30% 40% at 72% 22%, rgb(120 146 255 / 0.5), transparent 70%), radial-gradient(26% 34% at 58% 62%, rgb(255 170 205 / 0.35), transparent 70%)",
          }}
        />
      </div>

      <Container className="relative pt-24 pb-14 md:pt-8 md:pb-16">
        <Monogram />
        <h1 className="mt-6 text-[clamp(2.25rem,4.4vw,2.85rem)] font-medium leading-[1.05] tracking-[-0.025em]">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-[36rem] text-lg leading-relaxed text-muted">{profile.tagline}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={seeWork} className={buttonPrimary}>
            See my work
          </button>
          <CopyEmail className={buttonSecondary}>Email me</CopyEmail>
        </div>
      </Container>
    </header>
  );
}
