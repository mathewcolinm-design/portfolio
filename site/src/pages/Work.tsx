import { Chapter, Page } from "../components/chapters";
import { Column, Note, Tile } from "../components/ui";
import { WorkFigure } from "../components/WorkFigure";
import { chapters, experiments, profile, projects } from "../data/content";

type P = (typeof projects)[number];

/** Projects alternate one wide tile, then a pair of tall ones. */
function workRows() {
  const rows: { wide?: P; pair?: P[] }[] = [];
  for (let i = 0; i < projects.length; ) {
    rows.push({ wide: projects[i] });
    i += 1;
    if (i < projects.length) {
      rows.push({ pair: projects.slice(i, i + 2) });
      i += 2;
    }
  }
  return rows;
}

export function Work() {
  return (
    <Page title={profile.statement[0]} soft={profile.statement[1]} note={<Note>{profile.availability}</Note>}>
      <Chapter id="work" title={chapters.work.title} soft={chapters.work.soft}>
        <Column width="wide">
          <ul className="space-y-14 md:space-y-20">
            {workRows().map((row, i) =>
              row.wide ? (
                <li key={row.wide.slug}>
                  <WorkFigure project={row.wide} />
                </li>
              ) : (
                <li key={`pair-${i}`} className="grid gap-14 md:grid-cols-2 md:gap-6">
                  {row.pair!.map((p, j) => (
                    // The second tile of a pair sits lower, so the eye zigzags down the page.
                    <div key={p.slug} className={j === 1 ? "md:mt-24" : ""}>
                      <WorkFigure project={p} shape="tall" />
                    </div>
                  ))}
                </li>
              ),
            )}
          </ul>
        </Column>

        <Column className="mt-24">
          <h2 className="text-base">Other work</h2>
          <ul className="mt-4 grid border-t border-line md:grid-cols-2 md:gap-x-10">
            {experiments.map((e) => (
              <li key={e.title} className="border-b border-line py-3">
                {e.src && (
                  <div className="mb-3">
                    <Tile src={e.src} alt={e.title} ratio="4 / 3" />
                  </div>
                )}
                <p className="text-base">{e.title}</p>
                <p className="text-base text-muted">{e.note}</p>
              </li>
            ))}
          </ul>
        </Column>
      </Chapter>
    </Page>
  );
}
