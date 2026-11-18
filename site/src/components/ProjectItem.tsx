import { Plus } from "lucide-react";
import { Link } from "react-router";
import type { Project } from "../data/content";
import { Tile } from "./ui";

/** Name on the left, focus and year on the right, the work underneath. */
export function ProjectItem({ project, as: Heading = "h3" }: { project: Project; as?: "h2" | "h3" }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block rounded-[12px]">
      <div className="mb-2.5 flex items-baseline justify-between gap-4 text-base">
        <Heading className="transition-colors duration-300 group-hover:text-muted">{project.name}</Heading>
        <p className="flex shrink-0 items-center gap-2 text-muted tabular-nums">
          {project.focus}
          <Plus size={12} strokeWidth={1.25} aria-hidden="true" />
          {project.year}
        </p>
      </div>
      <Tile src={project.cover} alt={`${project.name}: ${project.caption}`} zoom />
      <p className="mt-3 text-base text-muted">{project.caption}</p>
    </Link>
  );
}
