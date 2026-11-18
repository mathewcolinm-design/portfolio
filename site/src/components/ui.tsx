import { ArrowUpRight, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

/** Outer 1120px frame for the header, footer and hairlines. */
export function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 md:px-6 ${className}`}>{children}</div>;
}

/** Centred column. `text` for reading (760px), `wide` for work (960px). */
export function Column({
  children,
  className = "",
  width = "text",
}: {
  children: ReactNode;
  className?: string;
  width?: "text" | "wide";
}) {
  return (
    <div className={`mx-auto w-full px-5 md:px-6 ${width === "wide" ? "max-w-[1008px]" : "max-w-[808px]"} ${className}`}>
      {children}
    </div>
  );
}

/** Small grey line with a plus mark, e.g. availability. */
export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-base text-muted">
      <Plus size={14} strokeWidth={1.25} aria-hidden="true" className="shrink-0" />
      {children}
    </p>
  );
}

const statementScale = {
  xl: "text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.04] tracking-[-0.045em]",
  lg: "text-[clamp(2rem,4.4vw,3rem)] leading-[1.06] tracking-[-0.04em]",
  md: "text-[clamp(1.6rem,3.2vw,2.1rem)] leading-[1.12] tracking-[-0.035em]",
};

/** Large two-tone statement: ink, then a softer grey continuation. */
export function Statement({
  as: Tag = "p",
  ink,
  soft,
  size = "lg",
  id,
}: {
  as?: "h1" | "h2" | "p";
  ink: string;
  soft?: string;
  size?: keyof typeof statementScale;
  id?: string;
}) {
  return (
    <Tag id={id} className={`${statementScale[size]} font-normal`}>
      {ink}
      {soft && <span className="text-soft">{soft}</span>}
    </Tag>
  );
}

const arrowLinkClass =
  "group inline-flex items-center gap-1.5 text-base text-fg transition-colors duration-300 hover:text-muted";

function Arrow() {
  return (
    <ArrowUpRight
      size={16}
      strokeWidth={1.5}
      aria-hidden="true"
      className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  );
}

/** Text link with the thin up-right arrow. Internal routes use the router. */
export function ArrowLink({ to, children, external = false }: { to: string; children: ReactNode; external?: boolean }) {
  if (external || to.startsWith("mailto:")) {
    return (
      <a href={to} className={arrowLinkClass} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
        <Arrow />
      </a>
    );
  }
  return (
    <Link to={to} className={arrowLinkClass}>
      {children}
      <Arrow />
    </Link>
  );
}

/** Flat grey tile that holds a piece of work, or says plainly that screens are coming. */
export function Tile({
  src,
  alt,
  ratio = "16 / 9",
  zoom = false,
  placeholder = "Screens coming soon",
}: {
  src?: string;
  alt: string;
  ratio?: string;
  zoom?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[10px] bg-tile" style={{ aspectRatio: ratio }}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover ${
            zoom ? "transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]" : ""
          }`}
        />
      ) : (
        <p className="absolute inset-0 grid place-items-center text-[15px] text-muted">{placeholder}</p>
      )}
    </div>
  );
}

/** Hairline row: label left, value right. */
export const ruledRow = "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 border-b border-line py-3 text-base";

export const pillButton =
  "inline-flex h-10 items-center gap-1.5 rounded-[10px] bg-tile px-4 text-base text-fg transition-colors duration-300 hover:bg-[#e8e8e8]";
