import Link from "next/link";
import { Github, ExternalLink, Pin } from "lucide-react";
import { Project } from "@/app/projects/data";
import { ProjectStatusBadge } from "./projectstatus";
import { HoverUnderline } from "@/components/ui/Underline";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="flex flex-col rounded-xl bg-stone-900 px-8 py-12">
			{/* Header */}
			<div className="group mb-2 flex items-start justify-between gap-2">
				{/* <Link href={`/projects/${project.id}`}> */}
				<Link href={project.github} target="_blank" className="flex-1">
					<h3 className="relative w-fit text-base">
						<HoverUnderline>{project.title}</HoverUnderline>
					</h3>
				</Link>

				<div className="flex shrink-0 items-center gap-2">
					<ProjectStatusBadge status={project.status} />
					{project.featured && <Pin size={14} className="" />}
				</div>
			</div>

			{/* Description */}
			<p className="mb-4 text-sm leading-relaxed opacity-60">{project.description}</p>

			{/* Tech tags */}
			<div className="mb-4 mt-auto flex flex-wrap gap-1">
				<p className="text-xs text-white/80">{project.tech.join(" / ")}</p>
			</div>

			{/* Links */}
			<div className="flex items-center gap-4 pt-3 text-sm">
				<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-opacity hover:opacity-70">
					<Github size={12} /> source
				</a>
				{project.demo && (
					<a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-opacity hover:opacity-70">
						<ExternalLink size={12} /> demo
					</a>
				)}
				{project.live && (
					<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-opacity hover:opacity-70">
						<ExternalLink size={12} /> live
					</a>
				)}
			</div>
		</div>
	);
}
