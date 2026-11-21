import { RefreshCw } from "lucide-react";
import type { ProcessStage } from "../data/content";

function Stage({ stage, index }: { stage: ProcessStage; index: number }) {
  return (
    <div className="grid gap-x-6 py-6 sm:grid-cols-[56px_1fr]">
      <span aria-hidden="true" className="text-[15px] text-violet tabular-nums sm:pt-0.5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-lg">{stage.name}</h3>
        <p className="mt-1.5 max-w-[56ch] text-base leading-relaxed text-muted">{stage.line}</p>
        {stage.methods.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[15px] text-fg" aria-label="Methods">
            {stage.methods.map((m, i) => (
              <li key={m}>
                {m}
                {i < stage.methods.length - 1 && (
                  <span aria-hidden="true" className="ml-2 text-soft">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/**
 * The design process, from problem to shipped. Consecutive stages marked
 * `loop` in site.yml are drawn together inside one frame that says they repeat.
 */
export function Process({ stages, intro }: { stages: ProcessStage[]; intro?: string }) {
  // Group consecutive looping stages so they can share one frame.
  const groups: { loop: boolean; items: { stage: ProcessStage; index: number }[] }[] = [];
  stages.forEach((stage, index) => {
    const last = groups.at(-1);
    if (last && last.loop === stage.loop) last.items.push({ stage, index });
    else groups.push({ loop: stage.loop, items: [{ stage, index }] });
  });

  return (
    <>
      {intro && <p className="max-w-[50ch] text-lg leading-relaxed">{intro}</p>}
      <ol className={`${intro ? "mt-10" : ""} border-t border-line`}>
        {groups.map((group, g) =>
          group.loop ? (
            <li key={g} className="my-4 rounded-[12px] border border-line px-4 sm:px-6">
              <p className="flex items-center gap-2 border-b border-line py-3 text-[15px] text-muted">
                <RefreshCw size={15} strokeWidth={1.25} aria-hidden="true" />
                Repeats until real people can use it without help
              </p>
              <ol>
                {group.items.map(({ stage, index }) => (
                  <li key={stage.name} className="border-b border-line last:border-b-0">
                    <Stage stage={stage} index={index} />
                  </li>
                ))}
              </ol>
            </li>
          ) : (
            group.items.map(({ stage, index }) => (
              <li key={stage.name} className="border-b border-line">
                <Stage stage={stage} index={index} />
              </li>
            ))
          ),
        )}
      </ol>
    </>
  );
}
