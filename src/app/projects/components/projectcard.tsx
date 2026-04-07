import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/app/projects/data";
import { ProjectStatusBadge } from "./projectstatus";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="group flex flex-col transition-colors duration-200">
			<Link href={`/projects/${project.id}`} className="relative block h-40 overflow-hidden">
				{project.image && (
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="object-cover transition-opacity duration-300"
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				)}
				<span className="absolute right-2 top-2">
					<ProjectStatusBadge status={project.status} />
				</span>
			</Link>

			<div className="flex flex-1 flex-col p-4">
				<Link href={`/projects/${project.id}`}>
					<h3 className="mb-1 leading-snug">{project.title}</h3>
				</Link>

				<p className="mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

				<div className="mb-4 mt-auto flex flex-wrap gap-1">
					{project.tech.map((tech) => (
						<span key={tech} className="rounded px-1.5 py-0.5">
							{tech}
						</span>
					))}
				</div>

				<div className="flex items-center gap-4 pt-3">
					<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors">
						<Github size={12} /> source
					</a>
					{project.demo && (
						<a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors">
							<ExternalLink size={12} /> demo
						</a>
					)}
					{project.live && (
						<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors">
							<ExternalLink size={12} /> live
						</a>
					)}
					{project.featured && <span className="ml-auto">starred</span>}
				</div>
			</div>
		</div>
	);
}
