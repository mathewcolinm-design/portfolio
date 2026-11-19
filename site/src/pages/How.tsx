import { Page } from "../components/chapters";
import { Column, ruledRow } from "../components/ui";
import { chapters, services, toolkit } from "../data/content";

export function How() {
  return (
    <Page title={chapters.how.title} soft={chapters.how.soft}>
      <Column className="pb-24 md:pb-32">
        <h2 className="text-base">What I do</h2>
        <ul className="mt-4 grid border-t border-line md:grid-cols-2 md:gap-x-10">
          {services.map((s) => (
            <li key={s.name} className="border-b border-line py-4">
              <p className="text-base">{s.name}</p>
              <p className="mt-0.5 text-base text-muted">{s.line}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-base">Toolkit</h2>
        <ul className="mt-4 border-t border-line">
          {toolkit.map((t) => (
            <li key={t.name} className={ruledRow}>
              <span>{t.name}</span>
              <span className="text-muted">{t.use}</span>
            </li>
          ))}
        </ul>
      </Column>
    </Page>
  );
}
