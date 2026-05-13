import { Project } from "@/app/projects/data";
import { ProjectCard } from "./projectcard";

interface ProjectGridProps {
	projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
	if (projects.length === 0) {
		return <p className="mt-16 text-center text-sm">no projects match this filter</p>;
	}

	return (
		<div className="mx-auto grid grid-cols-1 gap-6 overflow-hidden px-2 py-1 sm:grid-cols-3">
			{projects.map((project, i) => (
				<div key={project.id} className="fade-in-up" style={{ "--delay-index": i } as React.CSSProperties}>
					<ProjectCard project={project} />
				</div>
			))}
		</div>
	);
}
