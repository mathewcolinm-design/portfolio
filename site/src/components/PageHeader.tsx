import { useLocation, useNavigate } from "react-router";
import { profile } from "../data/content";
import { CopyEmail } from "./CopyEmail";
import { Container, Monogram, buttonPrimary, buttonSecondary } from "./ui";

/**
 * Intro block shared by the four main tabs: monogram, name, one-line pitch and
 * two actions. A soft light leak sits behind it.
 */
export function PageHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const seeWork = () => {
    if (pathname === "/") document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    else navigate("/#work");
  };

  return (
    <header className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-[560px] overflow-hidden"
      >
        <div
          className="absolute -top-16 left-1/2 h-[560px] w-[1300px] -translate-x-[32%] blur-[56px]"
          style={{
            background:
              "radial-gradient(34% 44% at 34% 26%, rgb(136 92 255 / 0.8), transparent 70%), radial-gradient(30% 42% at 66% 20%, rgb(120 146 255 / 0.75), transparent 70%), radial-gradient(24% 32% at 52% 60%, rgb(255 170 205 / 0.5), transparent 70%)",
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
