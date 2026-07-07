import { Project } from "@/app/projects/model";
import { ProjectCard } from "./projectcard";

interface ProjectGridProps {
	projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
	const ordered = [...projects].sort((a, b) => a.rank - b.rank);

	if (projects.length === 0) {
		return <p className="mt-16 text-center text-sm">no projects match this filter</p>;
	}

	return (
		<div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{ordered.map((project, i) => (
				<div key={project.id} className="fade-in-up" style={{ "--delay-index": i + 2 } as React.CSSProperties}>
					<ProjectCard project={project} />
				</div>
			))}
		</div>
	);
}
