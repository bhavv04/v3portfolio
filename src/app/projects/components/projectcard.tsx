import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/app/projects/data";
import { ProjectStatusBadge } from "./projectstatus";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="group/card flex flex-col overflow-hidden rounded-md border border-white/10 bg-neutral-900 transition-all duration-200 hover:border-stone-600">
			{/* Image — bleeds to edges, no padding */}
			{project.image && (
				<div className="h-full w-full overflow-hidden">
					<img
						src={project.image}
						alt={project.title}
						className="mb-2 h-full w-full object-cover opacity-80 transition-opacity duration-200 group-hover/card:opacity-100"
					/>
				</div>
			)}

			<div className="p-4">
				{/* Header */}
				<div className="flex flex-col">
					{/*<Link href={`/projects/${project.id}`}> */}
					<Link href={project.github} target="_blank" rel="noopener reference">
						<h3 className="text-lg">{project.title}</h3>
					</Link>

					{/* Tagline */}
					<p className="mb-2 text-xs italic text-stone-100/40">{project.tagline}</p>

					<div className="mb-3 flex items-center gap-2">
						<ProjectStatusBadge status={project.status} />
						{project.featured && <span className="rounded-full bg-violet-500/10 px-2 text-xs text-violet-300">featured</span>}
					</div>
				</div>

				{/* Description */}
				<p className="mb-4 text-sm leading-relaxed text-stone-100/60">{project.description}</p>

				{/* Tech Stack */}
				<div className="mb-4 flex flex-wrap gap-1">
					{project.tech.map((t) => (
						<span key={t} className="rounded-md bg-stone-300/10 px-2 py-1 text-xs">
							{t}
						</span>
					))}
				</div>

				{/* Links */}
				<div className="mt-auto flex items-center gap-2 text-sm">
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 rounded-md border bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white hover:text-black"
					>
						<Github size={13} /> source
					</a>
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 rounded-md border bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white hover:text-black"
						>
							<ExternalLink size={13} /> demo
						</a>
					)}
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 rounded-md border bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-all duration-300 hover:bg-white hover:text-black"
						>
							<ExternalLink size={13} /> live
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
