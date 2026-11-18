import { ArrowUpRight, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

/** Outer 1120px frame. Hairline dividers and the header span this width. */
export function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 md:px-6 ${className}`}>{children}</div>;
}

/** The centred reading column every page's content sits in. */
export function Column({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[720px] ${className}`}>{children}</div>;
}

/** A page section: hairline on top, generous rest, content in the centred column. */
export function Section({
  id,
  title,
  sub,
  children,
  divider = true,
}: {
  id?: string;
  title?: string;
  sub?: string;
  children: ReactNode;
  divider?: boolean;
}) {
  const headingId = id ? `${id}-h` : undefined;
  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className="scroll-mt-24">
      <Frame>
        <div className={`${divider ? "border-t border-line" : ""} py-20 md:py-24`}>
          <Column>
            {title && <SectionTitle id={headingId} title={title} sub={sub} />}
            <div className={title ? "mt-9" : ""}>{children}</div>
          </Column>
        </div>
      </Frame>
    </section>
  );
}

/** Thin plus mark, ink title, grey continuation underneath. */
export function SectionTitle({ id, title, sub }: { id?: string; title: string; sub?: string }) {
  return (
    <h2 id={id} className="flex gap-2.5 text-base leading-snug">
      <Plus size={14} strokeWidth={1.25} aria-hidden="true" className="mt-[5px] shrink-0" />
      <span>
        <span className="block">{title}</span>
        {sub && <span className="block text-muted">{sub}</span>}
      </span>
    </h2>
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

/** Large two-tone statement: ink, then a softer grey continuation. */
export function Statement({
  as: Tag = "p",
  ink,
  soft,
  size = "lg",
}: {
  as?: "h1" | "h2" | "p";
  ink: string;
  soft?: string;
  size?: "lg" | "md";
}) {
  const scale =
    size === "lg"
      ? "text-[clamp(2rem,4.4vw,2.5rem)] leading-[1.08] tracking-[-0.04em]"
      : "text-[clamp(1.75rem,3.6vw,2.25rem)] leading-[1.1] tracking-[-0.04em]";
  return (
    <Tag className={`${scale} font-normal`}>
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
  ratio = "720 / 590",
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

export const pillButton =
  "inline-flex h-[42px] items-center gap-1.5 rounded-[10px] bg-tile px-4 text-base text-fg transition-colors duration-300 hover:bg-[#e8e8e8]";

export const solidButton =
  "inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-fg px-5 text-base text-white transition-opacity duration-300 hover:opacity-85 disabled:opacity-40";
