import { Page } from "../components/chapters";
import { LineIcon, ToolMark } from "../components/icons";
import { Process } from "../components/Process";
import { Column, ruledRow } from "../components/ui";
import { chapters, designProcess, processIntro, services, toolkit } from "../data/content";

export function How() {
  return (
    <Page title={chapters.how.title} soft={chapters.how.soft}>
      <Column className="pb-24 md:pb-32">
        <h2 className="text-base">What I do</h2>
        <ul className="mt-4 grid border-t border-line md:grid-cols-2 md:gap-x-10">
          {services.map((s) => (
            <li key={s.name} className="flex gap-3.5 border-b border-line py-4">
              <span className="pt-[3px]">
                <LineIcon name={s.icon} />
              </span>
              <div>
                <p className="text-base">{s.name}</p>
                <p className="mt-0.5 text-base text-muted">{s.line}</p>
              </div>
            </li>
          ))}
        </ul>

        {designProcess.length > 0 && (
          <>
            <h2 className="mt-20 text-base">Design process</h2>
            <div className="mt-4">
              <Process stages={designProcess} intro={processIntro} />
            </div>
          </>
        )}

        <h2 className="mt-20 text-base">Toolkit</h2>
        <ul className="mt-4 border-t border-line">
          {toolkit.map((t) => (
            <li key={t.name} className={ruledRow}>
              <span className="flex items-center gap-3">
                <ToolMark name={t.name} />
                {t.name}
              </span>
              <span className="text-muted">{t.use}</span>
            </li>
          ))}
        </ul>
      </Column>
    </Page>
  );
}
