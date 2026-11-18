import type { Project } from "../data/content";

/**
 * Project cover. Uses `project.cover` if an image is set, otherwise draws a
 * tinted placeholder from the project's hue so the grid still looks finished.
 */
export function Cover({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.cover) {
    return <img src={project.cover} alt={`${project.title} cover`} className="h-full w-full object-cover" loading="lazy" />;
  }

  const h = project.hue;
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, hsl(${h} 85% 55% / 0.55), transparent 55%), linear-gradient(160deg, hsl(${h} 45% 16%), hsl(${h} 35% 7%))`,
      }}
    >
      <div className="cover-grid absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{project.category}</p>
        <p
          className={`mt-2 font-medium leading-[0.95] tracking-tight text-white ${
            large ? "text-4xl md:text-7xl" : "text-3xl md:text-4xl"
          }`}
        >
          {project.title}
        </p>
      </div>
    </div>
  );
}
