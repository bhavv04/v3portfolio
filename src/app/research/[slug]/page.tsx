import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { caseStudies } from "@/app/research/data";
import { getAllSlugs, getResearchContentBySlug } from "@/lib/research/posts";
import { Button } from "@/components/ui/Button";

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
			<Link
				href="/research"
				className="fade-in-up mb-5 inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
				style={{ "--delay-index": 0 } as React.CSSProperties}
			>
				<ArrowLeft size={16} />
				Back to Research
			</Link>

			<header className="fade-in-up mb-4" style={{ "--delay-index": 1 } as React.CSSProperties}>
				<h1 className="text-3xl text-white">{study.title}</h1>
				<p className="mt-1 text-sm text-white/70">{study.subtitle}</p>
			</header>

			<div className="fade-in-up mb-6 flex flex-wrap gap-1.5" style={{ "--delay-index": 2 } as React.CSSProperties}>
				{study.tags.map((tag) => (
					<span key={tag} className="rounded-md bg-stone-900 px-2 py-1 text-xs text-white/70">
						{tag}
					</span>
				))}
			</div>

			{/* Highlights (from markdown frontmatter) */}
			{highlights.length > 0 && (
				<div className="fade-in-up mb-8" style={{ "--delay-index": 4 } as React.CSSProperties}>
					<p className="text-md mb-2 text-white">Highlights</p>
					<ul className="flex flex-col gap-1">
						{highlights.map((h) => (
							<li key={h} className="flex items-start gap-2 text-sm text-white">
								<span className="mt-px shrink-0">{`❀ `}</span>
								<span>{h}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Abstract (from markdown body) */}
			<div
				className="fade-in-up prose mb-8 max-w-none text-white prose-invert prose-headings:mt-6 prose-headings:mb-2"
				style={{ "--delay-index": 3 } as React.CSSProperties}
				dangerouslySetInnerHTML={{ __html: contentHtml }}
			/>

			{/* Stack */}
			<div className="fade-in-up mb-8" style={{ "--delay-index": 6 } as React.CSSProperties}>
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
			<div className="fade-in-up flex items-center gap-1.5" style={{ "--delay-index": 7 } as React.CSSProperties}>
				{study.links.repo && (
					<Button asChild variant="default" className="">
						<Link href={study.links.repo} target="_blank" rel="noopener noreferrer">
							<FiGithub size={18} />
							Source
						</Link>
					</Button>
				)}
				{study.links.paper && (
					<Button asChild variant="default" className="">
						<Link
							href={study.links.paper}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-xs text-white transition-all duration-300 hover:bg-white hover:text-black"
						>
							<FileText size={13} />
							Paper
						</Link>
					</Button>
				)}
			</div>
		</article>
	);
}
