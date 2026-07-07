import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { caseStudies } from "@/app/research/data";
import { getAllSlugs, getResearchContentBySlug } from "@/lib/research/posts";

export async function generateStaticParams() {
	return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const study = caseStudies.find((s) => s.slug === slug && s.hasCaseStudy);

	if (!study) notFound();

	const { contentHtml, highlights } = await getResearchContentBySlug(slug);

	return (
		<article className="mx-auto max-w-4xl pb-16">
			<Link href="/research" className="mb-5 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white">
				<ArrowLeft size={16} />
				Back to Research
			</Link>

			<header className="mb-4">
				<h1 className="text-3xl font-bold text-white">{study.title}</h1>
				<p className="mt-1 text-sm text-white/50">{study.subtitle}</p>
			</header>

			<div className="mb-6 flex flex-wrap gap-1.5">
				{study.tags.map((tag) => (
					<span key={tag} className="rounded-md bg-stone-300/10 px-2 py-0.5 text-xs text-white/60">
						{tag}
					</span>
				))}
			</div>

			{/* Abstract (from markdown body) */}
			<div className="prose mb-8 max-w-none prose-invert prose-headings:mt-6 prose-headings:mb-2" dangerouslySetInnerHTML={{ __html: contentHtml }} />

			{/* Highlights (from markdown frontmatter) */}
			{highlights.length > 0 && (
				<div className="mb-8">
					<p className="mb-2 text-xs text-white/30">Highlights</p>
					<ul className="flex flex-col gap-1">
						{highlights.map((h) => (
							<li key={h} className="flex items-start gap-2 text-sm text-white/60">
								<span className="mt-px shrink-0 text-white/20">{`> `}</span>
								<span>{h}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Methods */}
			<div className="mb-8">
				<p className="mb-2 text-xs text-white/30">Methods</p>
				<div className="flex flex-wrap gap-x-3 gap-y-1">
					{study.methods.map((method) => (
						<span key={method} className="text-xs text-white/40 before:mr-1.5 before:content-['>']">
							{method}
						</span>
					))}
				</div>
			</div>

			{/* Stack */}
			<div className="mb-8">
				<p className="mb-2 text-xs text-white/30">Stack</p>
				<div className="flex flex-wrap gap-1.5">
					{study.stack.map((s) => (
						<span key={s} className="rounded-md bg-stone-300/10 px-2 py-0.5 text-xs text-white/60">
							{s}
						</span>
					))}
				</div>
			</div>

			{/* Links */}
			<div className="flex items-center gap-2">
				{study.links.repo && (
					<a
						href={study.links.repo}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs text-white transition-all duration-300 hover:bg-white hover:text-black"
					>
						<FiGithub size={13} />
						Source
					</a>
				)}
				{study.links.paper && (
					<a
						href={study.links.paper}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs text-white transition-all duration-300 hover:bg-white hover:text-black"
					>
						<FileText size={13} />
						Paper
					</a>
				)}
			</div>
		</article>
	);
}
