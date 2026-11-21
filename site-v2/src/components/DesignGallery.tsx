import { useEffect, useState } from "react";
import { Tile, isVideo } from "./ui";

type Shot = { label: string; src: string };
type Shape = "portrait" | "landscape";

/** Reads each image's or video's real size in the browser, so screens never need labelling. */
function useShapes(shots: Shot[]) {
  const [shapes, setShapes] = useState<Record<string, Shape> | null>(null);
  const key = shots.map((s) => s.src).join("|");

  useEffect(() => {
    let cancelled = false;
    const measure = (src: string) =>
      new Promise<[string, Shape]>((resolve) => {
        const done = (w: number, h: number) => resolve([src, h > w * 1.05 ? "portrait" : "landscape"]);
        if (isVideo(src)) {
          const v = document.createElement("video");
          v.preload = "metadata";
          v.onloadedmetadata = () => done(v.videoWidth, v.videoHeight);
          v.onerror = () => done(16, 9);
          v.src = src;
        } else {
          const img = new Image();
          img.onload = () => done(img.naturalWidth, img.naturalHeight);
          img.onerror = () => done(16, 9);
          img.src = src;
        }
      });
    Promise.all(shots.map((s) => measure(s.src))).then((entries) => {
      if (!cancelled) setShapes(Object.fromEntries(entries));
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return shapes;
}

type Block = { kind: "wide"; shot: Shot } | { kind: "row"; shots: Shot[] } | { kind: "bento"; shots: Shot[] };

/**
 * Lays the screens out by shape. Phone screens are gathered together where
 * the first one appears: four or more form a bento grid, two or three sit
 * side by side, and a lone one pairs with the next wide image. Wide images
 * and videos run full width. Every tile is filled edge to edge.
 */
function plan(shots: Shot[], shapes: Record<string, Shape>): Block[] {
  const portraits = shots.filter((s) => shapes[s.src] === "portrait");
  const wides = shots.filter((s) => shapes[s.src] !== "portrait");
  const blocks: Block[] = [];
  let portraitsPlaced = false;
  let partner: Shot | undefined;

  if (portraits.length === 1 && wides.length > 0) {
    // A single phone screen gets a wide neighbour so it isn't stranded.
    const firstPortraitIndex = shots.indexOf(portraits[0]);
    partner = wides.find((w) => shots.indexOf(w) > firstPortraitIndex) ?? wides[wides.length - 1];
  }

  for (const shot of shots) {
    if (shapes[shot.src] === "portrait") {
      if (portraitsPlaced) continue;
      portraitsPlaced = true;
      if (portraits.length >= 4) blocks.push({ kind: "bento", shots: portraits });
      else if (portraits.length >= 2) blocks.push({ kind: "row", shots: portraits });
      else blocks.push(partner ? { kind: "row", shots: [portraits[0], partner] } : { kind: "wide", shot: portraits[0] });
    } else if (shot !== partner) {
      blocks.push({ kind: "wide", shot });
    }
  }
  return blocks;
}

function Caption({ shots }: { shots: Shot[] }) {
  return <figcaption className="mt-3 text-base text-muted">{shots.map((s) => s.label).join(" · ")}</figcaption>;
}

/** Bento: in each group of four, two tall tiles and two stacked squares; leftovers fill a final row. */
function Bento({ shots }: { shots: Shot[] }) {
  const full = shots.length - (shots.length % 4);
  const grouped = shots.slice(0, full);
  const rest = shots.slice(full);
  return (
    <>
      <div className="grid auto-rows-[clamp(150px,22vw,250px)] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {grouped.map((s, i) => (
          <div key={s.src} className={i % 4 < 2 ? "row-span-2" : ""}>
            <Tile src={s.src} alt={s.label} ratio="fill" />
          </div>
        ))}
      </div>
      {rest.length > 0 && (
        <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4" style={{ gridTemplateColumns: `repeat(${rest.length}, minmax(0, 1fr))` }}>
          {rest.map((s) => (
            <Tile key={s.src} src={s.src} alt={s.label} ratio="4 / 5" />
          ))}
        </div>
      )}
    </>
  );
}

export function DesignGallery({ shots }: { shots: Shot[] }) {
  const shapes = useShapes(shots);

  // Until sizes are known, hold the space with plain tiles so nothing jumps far.
  if (!shapes) {
    return (
      <ul className="space-y-10" aria-busy="true">
        {shots.map((s) => (
          <li key={s.src}>
            <Tile src={undefined} alt={s.label} ratio="16 / 10" placeholder="" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-12">
      {plan(shots, shapes).map((block, i) => (
        <li key={i}>
          <figure>
            {block.kind === "wide" && <Tile src={block.shot.src} alt={block.shot.label} ratio="16 / 9" />}
            {block.kind === "row" && (
              <div
                className="grid gap-3 sm:gap-4"
                style={{ gridTemplateColumns: `repeat(${block.shots.length}, minmax(0, 1fr))` }}
              >
                {block.shots.map((s) => (
                  <Tile key={s.src} src={s.src} alt={s.label} ratio={block.shots.length === 3 ? "3 / 4" : "4 / 5"} />
                ))}
              </div>
            )}
            {block.kind === "bento" && <Bento shots={block.shots} />}
            <Caption shots={block.kind === "wide" ? [block.shot] : block.shots} />
          </figure>
        </li>
      ))}
    </ul>
  );
}
