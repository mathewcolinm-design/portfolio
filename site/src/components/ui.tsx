import { ArrowUpRight, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

/** Centred column. `text` is a 760px reading measure, `wide` a 960px work measure (plus gutters). */
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
  xl: "text-[clamp(2.5rem,4.4vw,3.75rem)] leading-[1.04] tracking-[-0.045em]",
  lg: "text-[clamp(1.625rem,2.8vw,2.5rem)] leading-[1.08] tracking-[-0.035em]",
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

const isVideo = (src: string) => /\.(mp4|webm)(\?|$)/i.test(src);

/** Silent looping video; shows its first frame only when the visitor prefers less motion. */
function TileVideo({ src, label }: { src: string; label: string }) {
  const still = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <video
      src={src}
      aria-label={label}
      className="absolute inset-0 h-full w-full object-cover"
      muted
      loop
      playsInline
      autoPlay={!still}
      preload="metadata"
    />
  );
}

/** Flat grey tile that holds a piece of work (image or video), or says plainly that screens are coming. */
export function Tile({
  src,
  alt,
  ratio = "16 / 9",
  zoom = false,
  placeholder = "Screens on the way",
  fit = "cover",
}: {
  src?: string;
  alt: string;
  ratio?: string;
  zoom?: boolean;
  placeholder?: ReactNode;
  /** "contain" shows the whole image on the grey tile instead of filling it. */
  fit?: "cover" | "contain";
}) {
  return (
    <div className="relative overflow-hidden rounded-[10px] bg-tile" style={{ aspectRatio: ratio }}>
      {src && isVideo(src) ? (
        <TileVideo src={src} label={alt} />
      ) : src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full ${fit === "contain" ? "object-contain p-4 md:p-8" : "object-cover"} ${
            zoom ? "transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]" : ""
          }`}
        />
      ) : (
        typeof placeholder === "string" ? (
          <p className="absolute inset-0 grid place-items-center text-[15px] text-muted">{placeholder}</p>
        ) : (
          <div className="absolute inset-0">{placeholder}</div>
        )
      )}
    </div>
  );
}

/** Hairline row: label left, value right. */
export const ruledRow = "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 border-b border-line py-3 text-base";

export const pillButton =
  "inline-flex h-10 items-center gap-1.5 rounded-[10px] bg-tile px-4 text-base text-fg transition-colors duration-300 hover:bg-[#e8e8e8]";
