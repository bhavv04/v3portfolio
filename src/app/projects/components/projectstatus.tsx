import { ProjectStatus } from "@/app/projects/data";

const statusLabel: Record<ProjectStatus, string> = {
	completed: "completed",
	"in-progress": "in progress",
	archived: "archived"
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
	return <span className="rounded px-1.5 py-0.5">{statusLabel[status]}</span>;
}
