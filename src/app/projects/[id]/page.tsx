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
		<main className="mx-auto -mt-16 max-w-2xl">
			<Link href="/projects" className="mb-4 flex items-center gap-2 text-sm text-white/40 hover:text-white">
				<ArrowLeft size={14} />
				projects
			</Link>

			<section className="mb-4">
				<p className="mb-2 text-sm text-white/40">{project.year}</p>

				<h1 className="mb-4 text-3xl">{project.title}</h1>

				<p className="text-white/60">{project.tagline}</p>
			</section>

			{project.image && (
				<div className="mb-12 overflow-hidden rounded-lg">
					<Image src={project.image} alt={project.title} width={0} height={0} sizes="100vw" className="h-auto w-full" priority />
				</div>
			)}

			<section className="mb-12">
				<p className="leading-7 text-white/70">{project.longDescription}</p>
			</section>

			<section className="mb-12 space-y-6 text-sm">
				<div>
					<p className="mb-1 text-white/40">stack</p>
					<p>{project.tech.join(", ")}</p>
				</div>

				<div>
					<p className="mb-1 text-white/40">tags</p>
					<p>{project.tags.join(", ")}</p>
				</div>

				<div>
					<p className="mb-1 text-white/40">status</p>
					<p>{project.status}</p>
				</div>
			</section>

			<div className="flex gap-6 text-sm">
				<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white">
					<Github size={14} />
					source
				</a>

				{project.demo && (
					<a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white">
						<ExternalLink size={14} />
						demo
					</a>
				)}

				{project.live && (
					<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 hover:text-white">
						<ExternalLink size={14} />
						live
					</a>
				)}
			</div>
		</main>
	);
}
