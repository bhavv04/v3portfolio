import { projects } from "@/app/projects/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export function generateStaticParams() {
	return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
	const project = projects.find((p) => p.id === params.id);
	if (!project) notFound();

	return (
		<div className="mx-auto sm:-mt-12">
			{/* back */}
			<Link href="/projects" className="mb-4 inline-flex items-center gap-1 hover:opacity-60">
				<ArrowLeft size={14} />
				<span className="text-sm">back to projects</span>
			</Link>

			{/* hero */}
			<div className="mb-12">
				<h1 className="mb-2 text-4xl">{project.title}</h1>

				<p className="mb-6 max-w-lg text-sm italic">{project.description}</p>

				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<span key={tag} className="rounded-full border border-white px-3 py-1 text-xs">
							{tag}
						</span>
					))}
				</div>
			</div>

			{/* hero image */}
			{project.image && (
				<div className="relative mb-12 h-64 w-full overflow-hidden rounded-xl border border-white/10 sm:h-72">
					<Image src={project.image} alt={project.title} fill className="object-cover" sizes="896px" priority />
				</div>
			)}

			{/* content grid */}
			<div className="grid items-start gap-8 lg:grid-cols-[1fr_280px]">
				{/* left */}
				<div className="space-y-10">
					<section>
						<p className="mb-4 uppercase">Overview</p>
						<p className="text-sm leading-7">{project.longDescription}</p>
					</section>
				</div>

				{/* right */}
				<aside className="space-y-6">
					<section>
						<p className="mb-3 text-xs uppercase">Built With</p>
						<div className="flex flex-wrap gap-2">
							{project.tech.map((tech) => (
								<span key={tech} className="rounded-full border border-white px-3 py-1 text-xs">
									{tech}
								</span>
							))}
						</div>
					</section>

					<div className="flex flex-col gap-2">
						<Link
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-between rounded-lg border bg-neutral-800 px-4 py-2.5 text-sm transition-all hover:bg-white hover:text-black"
						>
							<span className="flex items-center gap-2">
								<Github size={14} />
								Source Code
							</span>
							<ExternalLink size={12} />
						</Link>

						{(project.live || project.demo) && (
							<Link
								href={project.live ?? project.demo}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between rounded-lg border bg-neutral-800 px-4 py-2.5 text-sm transition-all hover:bg-white hover:text-black"
							>
								<span className="flex items-center gap-2">
									<ExternalLink size={14} />
									{project.live ? "Live Site" : "Demo"}
								</span>
								<ExternalLink size={12} />
							</Link>
						)}
					</div>
				</aside>
			</div>
		</div>
	);
}
