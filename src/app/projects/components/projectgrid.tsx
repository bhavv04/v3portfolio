import { Project } from "@/app/projects/data";
import { ProjectCard } from "./projectcard";

interface ProjectGridProps {
	projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
	if (projects.length === 0) {
		return <p className="mt-16 text-center text-sm text-white/50">no projects match this filter</p>;
	}

	return (
		<div className="grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
}
