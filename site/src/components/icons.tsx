import {
  Clapperboard,
  Code,
  Component,
  Film,
  Layers,
  LayoutTemplate,
  Mail,
  Palette,
  PanelsTopLeft,
  PenTool,
  ScanSearch,
  Search,
  Shapes,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { siClaude, siElevenlabs, siFigma, siFramer, siLottiefiles, siMaze, siNotion } from "simple-icons";
import { logoFor } from "../data/content";

/**
 * Line icons you can use for "What I do" in content/site.yml (icon: name).
 * All are thin-stroke Lucide icons, drawn in the text colour.
 */
export const lineIcons: Record<string, LucideIcon> = {
  interface: PanelsTopLeft,
  layout: LayoutTemplate,
  system: Component,
  layers: Layers,
  research: ScanSearch,
  search: Search,
  people: Users,
  brand: PenTool,
  palette: Palette,
  shapes: Shapes,
  motion: Clapperboard,
  film: Film,
  workflow: Workflow,
  code: Code,
  mail: Mail,
};

export function LineIcon({ name, size = 18 }: { name?: string; size?: number }) {
  const Icon = name ? lineIcons[name] : undefined;
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.25} aria-hidden="true" className="shrink-0" />;
}

/** Monochrome brand marks for tools, matched by name. */
const brandMarks: { match: RegExp; path: string }[] = [
  { match: /figma/i, path: siFigma.path },
  { match: /framer/i, path: siFramer.path },
  { match: /claude/i, path: siClaude.path },
  { match: /elevenlabs/i, path: siElevenlabs.path },
  { match: /lottie/i, path: siLottiefiles.path },
  { match: /maze/i, path: siMaze.path },
  { match: /notion/i, path: siNotion.path },
];

/**
 * A tool's mark: your own file in content/logos/ if there is one (named after
 * the tool, e.g. after-effects.svg), otherwise a built-in monochrome brand
 * icon, otherwise an empty slot so rows stay aligned.
 */
export function ToolMark({ name, size = 18 }: { name: string; size?: number }) {
  const custom = logoFor(name);
  if (custom) return <img src={custom} alt="" width={size} height={size} className="shrink-0 rounded-[4px] object-contain grayscale" />;
  const mark = brandMarks.find((m) => m.match.test(name));
  if (!mark) return <span aria-hidden="true" className="shrink-0" style={{ width: size, height: size }} />;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d={mark.path} />
    </svg>
  );
}

/**
 * A company's logo from content/logos/, in its own colours but always inside
 * the same small white frame with a hairline, so every logo sits alike.
 */
export function CompanyLogo({ company, size = 20 }: { company: string; size?: number }) {
  const src = logoFor(company);
  if (!src) return null;
  return (
    <span
      aria-hidden="true"
      className="inline-grid shrink-0 place-items-center overflow-hidden rounded-[6px] bg-bg ring-1 ring-line"
      style={{ width: size, height: size }}
    >
      <img src={src} alt="" width={size} height={size} loading="lazy" className="h-full w-full object-contain" />
    </span>
  );
}

/** LinkedIn mark, drawn here because icon libraries no longer ship it. */
export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.25" className="shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M8 10.5V16M8 7.6v.01M11.5 16v-3.2c0-1.4.9-2.3 2.1-2.3s1.9.9 1.9 2.3V16M11.5 10.5V16" strokeLinecap="round" />
    </svg>
  );
}
