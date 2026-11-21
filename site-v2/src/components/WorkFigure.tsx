import { Link } from "react-router";
import type { Project } from "../data/content";
import { CompanyLogo } from "./icons";
import { Tile } from "./ui";

/** A project as it appears in the Work chapter: the tile, then name, caption and meta. */
export function WorkFigure({ project, shape = "wide" }: { project: Project; shape?: "wide" | "tall" }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block rounded-[12px]">
      <Tile
        src={project.cover}
        alt={`${project.name}: ${project.caption}`}
        ratio={shape === "wide" ? (project.cover ? "16 / 9" : "16 / 7") : project.cover ? "4 / 3" : "4 / 5"}
        zoom
        placeholder={
          <div className="flex h-full flex-col justify-between p-6 md:p-8">
            <p className="text-[15px]">Screens on the way</p>
            <p className="max-w-[24ch] text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.15] tracking-[-0.03em] text-muted">
              {project.shots.map((s) => s.label).join(", ")}
            </p>
          </div>
        }
      />
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 text-base">
        <h3 className="transition-colors duration-300 group-hover:text-violet">{project.name}</h3>
        <p className="inline-flex items-center gap-1.5 text-muted tabular-nums">
          <CompanyLogo company={project.company} size={16} />
          {project.company} · {project.year}
        </p>
      </div>
      <p className="mt-0.5 max-w-[46ch] text-base text-muted">{project.caption}</p>
      {project.metrics && (
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-base">
          {project.metrics.map((m) => (
            <span key={m.label}>
              <span className="text-violet tabular-nums">{m.value}</span> <span className="text-muted">{m.label.toLowerCase()}</span>
            </span>
          ))}
        </p>
      )}
    </Link>
  );
}
