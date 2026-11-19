import type { ReactNode } from "react";
import type { Block } from "../data/content";

/**
 * Renders story text written in content/projects/<project>/index.md.
 * Supports **bold**, *italic* and [links](https://example.com); nothing else
 * is interpreted, so the text can never break the page.
 */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    const key = `${m.index}`;
    if (m[1]) out.push(<strong key={key} className="font-medium text-fg">{m[1]}</strong>);
    else if (m[2]) out.push(<em key={key}>{m[2]}</em>);
    else
      out.push(
        <a key={key} href={m[4]} target={/^https?:/.test(m[4]) ? "_blank" : undefined} rel="noreferrer" className="text-fg underline decoration-line underline-offset-[0.2em] hover:decoration-fg">
          {m[3]}
        </a>,
      );
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Prose({ blocks, lead = false }: { blocks: Block[]; lead?: boolean }) {
  return (
    <div className={`space-y-5 leading-relaxed ${lead ? "max-w-[50ch] text-lg text-fg" : "max-w-[56ch] text-base text-muted"}`}>
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i}>{inline(b.text)}</p>
        ) : (
          <ul key={i} className="list-disc space-y-1.5 pl-5 marker:text-soft">
            {b.items.map((item, j) => (
              <li key={j}>{inline(item)}</li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
