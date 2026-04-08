import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/app/projects/data";
import { ProjectStatusBadge } from "./projectstatus";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="group flex flex-col rounded-xl bg-stone-900/90 transition-all duration-300 hover:scale-[1.01] hover:bg-stone-800/90">
			<Link href={`/projects/${project.id}`} className="relative block h-40 overflow-hidden">
				{project.image && (
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105"
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				)}
				<span className="absolute right-2 top-2 rounded-full border border-dashed border-white text-xs">
					<ProjectStatusBadge status={project.status} />
				</span>
			</Link>

			<div className="flex flex-1 flex-col p-4">
				<Link href={`/projects/${project.id}`}>
					<h3 className="mb-1 leading-snug transition-opacity group-hover:opacity-70">{project.title}</h3>
				</Link>

				<p className="mb-4 line-clamp-2 text-sm leading-relaxed opacity-60">{project.description}</p>

				<div className="mb-4 mt-auto flex flex-wrap gap-1">
					{project.tech.map((tech) => (
						<span key={tech} className="rounded-full border border-white/30 px-2 py-1 text-xs transition-colors hover:border-white">
							{tech}
						</span>
					))}
				</div>

				<div className="flex items-center gap-4 pt-3 text-sm opacity-50 transition-opacity group-hover:opacity-100">
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
					>
						<Github size={12} /> source
					</a>
					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
						>
							<ExternalLink size={12} /> demo
						</a>
					)}
					{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
						>
							<ExternalLink size={12} /> live
						</a>
					)}
					{project.featured && <span className="ml-auto">starred</span>}
				</div>
			</div>
		</div>
	);
}
