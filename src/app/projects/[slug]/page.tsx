import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects/posts";
import { ProjectStatusBadge } from "@/app/projects/components/projectstatus";
import Image from "next/image";

export async function generateStaticParams() {
	return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = await getProjectBySlug(slug);

	return (
		<article className="mx-auto max-w-4xl pb-16">
			<Link href="/projects" className="mb-5 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white">
				<ArrowLeft size={16} />
				Back to Projects
			</Link>

			<header className="mb-4 flex items-start gap-3">
				{project.image && (
					<div className="relative h-12 w-12 shrink-0">
						<Image src={project.image} alt={`${project.title} logo`} fill className="object-contain" />
					</div>
				)}
				<div>
					<h1 className="text-3xl font-bold text-white">{project.title}</h1>
					<p className="text-sm text-stone-100/70 italic">{project.tagline}</p>
				</div>
			</header>

			<div className="mb-4 flex items-center gap-2">
				<ProjectStatusBadge status={project.status} />
				{project.featured && <span className="rounded-full bg-violet-500/20 px-2 text-xs text-violet-300">featured</span>}
			</div>

			<div className="mb-6 flex flex-wrap gap-1">
				{project.tech.map((t) => (
					<span key={t} className="rounded-md bg-stone-900 px-2 py-1 text-xs text-white/60">
						{t}
					</span>
				))}
			</div>

			<div
				className="prose mb-8 max-w-none prose-invert prose-headings:mt-6 prose-headings:mb-2"
				dangerouslySetInnerHTML={{ __html: project.contentHtml }}
			/>

			<div className="flex gap-3">
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs text-white transition-all duration-300 hover:bg-white hover:text-black"
				>
					<FiGithub size={13} /> Source
				</a>
				{project.live && (
					<a
						href={project.live}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs text-white transition-all duration-300 hover:bg-white hover:text-black"
					>
						<ExternalLink size={13} /> Live
					</a>
				)}
			</div>
		</article>
	);
}
