import { Link } from "react-router";
import type { Project } from "../data/content";
import { MatFrame } from "./ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block rounded-[22px] focus-visible:outline-offset-4">
      <div className="overflow-hidden rounded-[20px]">
        <MatFrame
          mat={project.mat}
          ratio="564 / 423"
          src={project.cover}
          alt={`${project.name}: ${project.caption}`}
          label={project.name}
          className="transition-transform duration-700 ease-out-expo group-hover:scale-[1.025]"
        />
      </div>
      <div className="mt-3.5 flex items-baseline justify-between gap-4 text-[16px]">
        <h3 className="font-medium text-muted transition-colors duration-300 group-hover:text-fg">
          {project.caption}
        </h3>
        <p className="shrink-0 text-muted tabular-nums">
          {project.company}
          <span aria-hidden="true" className="mx-1.5">
            ·
          </span>
          {project.year}
        </p>
      </div>
    </Link>
  );
}
