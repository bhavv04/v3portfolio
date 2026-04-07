import { projects } from "@/app/projects/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Sparkles } from "lucide-react";
import { ProjectStatusBadge } from "@/app/projects/components/projectstatus";

export function generateStaticParams() {
	return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
	const project = projects.find((p) => p.id === params.id);
	if (!project) notFound();

	return (
		<div className="mx-auto max-w-5xl">
			{/* back */}
			<Link href="/projects" className="group mb-4 inline-flex items-center gap-2 transition-colors">
				<ArrowLeft size={14} />
				back to projects
			</Link>

			{/* hero */}
			<div className="relative mb-8 overflow-hidden">
				{project.image ? (
					<div className="relative h-72 w-full sm:h-[26rem]">
						<Image src={project.image} alt={project.title} fill className="object-cover" sizes="896px" priority />

						<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
							<div className="mb-3 flex flex-wrap items-center gap-3">
								<ProjectStatusBadge status={project.status} />

								{project.featured && (
									<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1">
										<Sparkles size={12} />
										featured
									</span>
								)}
							</div>

							<h1 className="tracking-tight">{project.title}</h1>

							<div className="mt-4 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span key={tag} className="rounded-full px-3 py-1">
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				) : (
					<div className="p-8 sm:p-10">
						<div className="mb-3 flex flex-wrap items-center gap-3">
							<ProjectStatusBadge status={project.status} />

							{project.featured && (
								<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1">
									<Sparkles size={12} />
									featured
								</span>
							)}
						</div>

						<h1 className="tracking-tight">{project.title}</h1>

						<div className="mt-4 flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<span key={tag} className="rounded-full px-3 py-1">
									{tag}
								</span>
							))}
						</div>
					</div>
				)}
			</div>

			{/* content grid */}
			<div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
				{/* left column */}
				<div className="space-y-6">
					{/* about */}
					<section className="p-5 sm:p-6">
						<p className="mb-3 uppercase tracking-[0.14em]">Overview</p>
						<p className="leading-7">{project.longDescription}</p>
					</section>

					{/* tech */}
					<section className="p-5 sm:p-6">
						<p className="mb-4 uppercase tracking-[0.14em]">Built With</p>
						<div className="flex flex-wrap gap-2">
							{project.tech.map((tech) => (
								<span key={tech} className="rounded-xl px-3 py-1.5 transition-colors">
									{tech}
								</span>
							))}
						</div>
					</section>
				</div>

				{/* right column */}
				<aside className="space-y-6">
					{/* quick info */}
					<section className="p-5 sm:p-6">
						<p className="mb-4 uppercase tracking-[0.14em]">Project Info</p>

						<div className="space-y-4">
							<div className="flex items-center justify-between gap-4 pb-3">
								<span>Status</span>
								<ProjectStatusBadge status={project.status} />
							</div>

							<div className="flex items-center justify-between gap-4">
								<span>Featured</span>
								<span>{project.featured ? "Yes" : "No"}</span>
							</div>
						</div>
					</section>

					{/* links */}
					<section className="p-5 sm:p-6">
						<p className="mb-4 uppercase tracking-[0.14em]">Links</p>

						<div className="flex flex-col gap-3">
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-between px-4 py-3 transition-all"
							>
								<span className="flex items-center gap-2">
									<Github size={16} />
									Source Code
								</span>
								<ExternalLink size={14} className="transition-opacity" />
							</a>

							{(project.live || project.demo) && (
								<a
									href={project.live ?? project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center justify-between px-4 py-3 transition-all"
								>
									<span className="flex items-center gap-2">
										<ExternalLink size={16} />
										{project.live ? "Live Site" : "Demo"}
									</span>
									<ExternalLink size={14} className="transition-opacity" />
								</a>
							)}
						</div>
					</section>
				</aside>
			</div>
		</div>
	);
}
