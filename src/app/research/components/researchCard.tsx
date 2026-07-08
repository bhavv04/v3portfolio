import Link from "next/link";
import { CaseStudy } from "@/app/research/model";
import { FiGithub } from "react-icons/fi";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ResearchCard({ study }: { study: CaseStudy }) {
	return (
		<div className="flex flex-col rounded-xl bg-neutral-900 transition-all duration-300 hover:scale-[1.01]">
			<div className="flex flex-col gap-4 p-5">
				{/* Title */}
				<div className="flex flex-col">
					<h3 className="text-lg">{study.title}</h3>
					<p className="text-sm text-white/50">{study.subtitle}</p>
				</div>

				{/* Tagline */}
				<p className="text-sm leading-relaxed text-white/60">{study.tagline}</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-1.5">
					{study.tags.map((tag) => (
						<span key={tag} className="rounded-md bg-stone-300/10 px-2 py-0.5 text-xs text-white/60">
							{tag}
						</span>
					))}
				</div>

				{/* Methods */}
				<div className="flex flex-wrap gap-x-3 gap-y-1">
					{study.methods.map((method) => (
						<span key={method} className="text-xs text-white/40 before:mr-1.5 before:content-['>']">
							{method}
						</span>
					))}
				</div>

				{/* Stack */}
				<div className="flex flex-wrap gap-1.5">
					{study.stack.map((s) => (
						<span key={s} className="rounded-md bg-stone-300/10 px-2 py-0.5 text-xs text-white/60">
							{s}
						</span>
					))}
				</div>

				{/* Links + see more */}
				<div className="-mx-2 -my-1 flex items-center justify-between">
					<div className="flex">
						{study.links.repo && (
							<Button asChild variant="primary" size="sm" className="">
								<Link href={study.links.repo} target="_blank" rel="noopener noreferrer">
									<FiGithub size={13} />
									Github
								</Link>
							</Button>
						)}
						{study.links.paper && (
							<Button asChild variant="primary" size="sm" className="">
								<Link href={study.links.paper} target="_blank" rel="noopener noreferrer">
									<FileText size={13} />
									Paper
								</Link>
							</Button>
						)}
					</div>

					{study.hasCaseStudy && (
						<Button asChild variant="primary" size="sm" className="">
							<Link href={`/research/${study.slug}`}>See more ⤳</Link>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
