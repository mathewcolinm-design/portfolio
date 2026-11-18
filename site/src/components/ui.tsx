import { siClaude, siElevenlabs, siFigma, siFramer, siLottiefiles, siMaze, siNotion } from "simple-icons";

// Only the icons the site uses, so the bundle stays small.
const brandIcons: Record<string, { path: string; hex: string }> = {
  siClaude, siElevenlabs, siFigma, siFramer, siLottiefiles, siMaze, siNotion,
};
import type { ReactNode } from "react";
import { mats, type Mat } from "../data/content";

/** Content column shared by every page (1152px, like the reference). */
export function Container({ children, className = "", narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={`mx-auto w-full ${narrow ? "max-w-[948px]" : "max-w-[1152px]"} px-5 md:px-8 ${className}`}>{children}</div>;
}

/** Square monogram used where the reference shows a portrait. */
export function Monogram({ size = 60 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative grid shrink-0 place-items-center overflow-hidden text-white"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.3,
        background: "radial-gradient(90% 90% at 80% 10%, #8c7bff 0%, transparent 60%), linear-gradient(150deg, #24315a, #0a1628)",
        boxShadow: "0 6px 16px -6px rgb(10 22 40 / 0.45), inset 0 1px 0 rgb(255 255 255 / 0.18)",
      }}
    >
      <span style={{ fontSize: size * 0.36 }} className="font-bold tracking-[-0.04em]">
        MC
      </span>
    </span>
  );
}

/** Pastel gradient mat that frames a piece of work. */
export function MatFrame({
  mat,
  ratio,
  src,
  alt,
  label,
  sub,
  className = "",
  rounded = "rounded-[20px]",
}: {
  mat: Mat;
  ratio: string;
  src?: string;
  alt?: string;
  label: string;
  /** null shows a one-line "Coming soon" when the caption already names the piece. */
  sub?: string | null;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`} style={{ aspectRatio: ratio, background: mats[mat] }}>
      {src ? (
        <img src={src} alt={alt ?? label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        // Placeholder until Mathew's screenshots are added. It says so plainly.
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-[#0a1628]">
          {sub === null ? (
            <p className="text-[15px] font-semibold text-[#3a4250]">Coming soon</p>
          ) : (
            <>
              <p className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.025em]">{label}</p>
              <p className="mt-1.5 text-[15px] font-medium text-[#3a4250]">{sub ?? "Screens coming soon"}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/** Brand icon from simple-icons, or a lettered tile when no icon exists. */
export function ToolIcon({ icon, letters, size = 44 }: { icon?: string; letters?: string; size?: number }) {
  const si = icon ? brandIcons[icon] : undefined;
  const radius = size * 0.27;
  if (si) {
    return (
      <span
        aria-hidden="true"
        className="grid shrink-0 place-items-center bg-white shadow-[0_2px_6px_-2px_rgb(10_22_40/0.25)]"
        style={{ width: size, height: size, borderRadius: radius }}
      >
        <svg viewBox="0 0 24 24" width={size * 0.5} height={size * 0.5} fill={`#${si.hex}`}>
          <path d={si.path} />
        </svg>
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="grid shrink-0 place-items-center bg-[#0a1628] font-bold text-white shadow-[0_2px_6px_-2px_rgb(10_22_40/0.35)]"
      style={{ width: size, height: size, borderRadius: radius, fontSize: size * 0.34 }}
    >
      {letters}
    </span>
  );
}

/** LinkedIn mark, drawn here because icon libraries no longer ship it. */
export function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M8 10.5V16M8 7.6v.01M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3s1.9.9 1.9 2.3V16M11.5 10.5V16" strokeLinecap="round" />
    </svg>
  );
}

export const buttonPrimary =
  "inline-flex h-11 items-center justify-center gap-2 rounded-[14px] bg-primary px-4 text-[15px] font-semibold text-primary-fg shadow-[0_4px_12px_-4px_rgb(10_22_40/0.35)] transition-[translate,box-shadow] duration-300 ease-out-expo hover:-translate-y-px hover:shadow-[0_8px_18px_-6px_rgb(10_22_40/0.4)] active:translate-y-0";

export const buttonSecondary =
  "inline-flex h-11 items-center justify-center gap-2 rounded-[14px] border border-line bg-surface px-4 text-[15px] font-semibold text-fg transition-[translate,background-color] duration-300 ease-out-expo hover:-translate-y-px hover:bg-raised active:translate-y-0";
