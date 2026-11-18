import { Link } from "react-router";
import type { Project } from "../data/content";
import { Tile } from "./ui";

/** A project as it appears in the Work chapter: the tile, then name, caption and meta. */
export function WorkFigure({ project, shape = "wide" }: { project: Project; shape?: "wide" | "tall" }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block rounded-[12px]">
      <Tile
        src={project.cover}
        alt={`${project.name}: ${project.caption}`}
        ratio={shape === "wide" ? "16 / 9" : "4 / 5"}
        zoom
      />
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 text-base">
        <h3 className="transition-colors duration-300 group-hover:text-muted">{project.name}</h3>
        <p className="text-muted tabular-nums">
          {project.company} · {project.year}
        </p>
      </div>
      <p className="mt-0.5 max-w-[46ch] text-base text-muted">{project.caption}</p>
    </Link>
  );
}
