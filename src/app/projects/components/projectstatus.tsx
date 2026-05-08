import { ProjectStatus } from "@/app/projects/data";

const statusMap: Record<ProjectStatus, { label: string; style: string }> = {
	completed: { label: "completed", style: "text-emerald-100" },
	active: { label: "active", style: "text-amber-400" },
	archived: { label: "archived", style: "text-zinc-500" }
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
	const { label, style } = statusMap[status];
	return <span className={`text-xs italic ${style}`}>{label}</span>;
}
