import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/app/projects/data";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { ProjectStatusBadge } from "@/app/projects/components/projectstatus";

export function generateStaticParams() {
	return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
	const project = projects.find((p) => p.id === params.id);
	if (!project) notFound();

	const { pageContent } = project;

	return (
		<main className="p-4 sm:-mt-16">
			<div className="mx-auto max-w-2xl">
				<Link href="/projects" className="mb-4 inline-flex items-center gap-2">
					<ArrowLeft size={14} />
					all projects
				</Link>

				<div className="mb-12">
					<div className="mb-3 flex items-center gap-3">
						<ProjectStatusBadge status={project.status} />
						<span>{project.year}</span>
					</div>
					<h1 className="mb-2 font-bold">{project.title}</h1>
					<p>{project.tagline}</p>
				</div>

				{pageContent?.hook && <p className="mb-12">{pageContent.hook}</p>}

				<div className="mb-12 flex flex-col gap-3">
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>
					<div className="flex flex-wrap gap-2">
						{project.tech.map((t) => (
							<span className="rounded-full border" key={t}>
								{t}
							</span>
						))}
					</div>
				</div>

				{pageContent && (
					<div className="flex flex-col gap-10">
						<Section title="what it does" body={project.longDescription} />
						<Section title="how it works" body={pageContent.howItWorks} />
						<Section title="tech choices" body={pageContent.techChoices} />
						<Section title="what broke" body={pageContent.lessonsLearned} />
					</div>
				)}

				<div className="mt-14 flex gap-6">
					{project.github && (
						<a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
							<Github size={14} />
							github
						</a>
					)}
					{project.live && (
						<a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
							<ExternalLink size={14} />
							live
						</a>
					)}
					{project.demo && project.demo !== project.live && (
						<a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
							<ExternalLink size={14} />
							demo
						</a>
					)}
				</div>
			</div>
		</main>
	);
}

function Section({ title, body }: { title: string; body: string }) {
	return (
		<div>
			<h2 className="mb-3">{title}</h2>
			<p>{body}</p>
		</div>
	);
}
