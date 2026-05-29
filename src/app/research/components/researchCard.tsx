"use client";

import { useState } from "react";
import { CaseStudy } from "@/app/research/data";
import { FiGithub } from "react-icons/fi";

interface ResearchCardProps {
	study: CaseStudy;
}

export default function ResearchCard({ study }: ResearchCardProps) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="group/card flex flex-col rounded-lg border border-white/10 bg-neutral-900 transition-all hover:-translate-y-1 hover:border-stone-500">
			{/* Main row */}
			<div className="p-4 sm:p-6">
				{/* Title + subtitle */}
				<div className="mb-2">
					<h3 className="text-base sm:text-lg">{study.title}</h3>
					<p className="mt-0.5 text-sm">{study.subtitle}</p>
				</div>

				{/* Abstract preview */}
				<p className="mb-3 line-clamp-2 text-sm leading-relaxed">{study.abstract}</p>

				{/* Tags */}
				<div className="mb-4 flex flex-wrap gap-2">
					{study.tags.map((tag) => (
						<div key={tag} className="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300">
							{tag}
						</div>
					))}
				</div>

				{/* Methods */}
				<div className="mb-4 flex flex-wrap gap-x-3 gap-y-1">
					{study.methods.map((method) => (
						<span key={method} className="text-sm before:mr-1 before:content-['✦']">
							{method}
						</span>
					))}
				</div>

				{/* Bottom row — stack + links + expand */}
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					{/* Stack pills */}
					<div className="flex flex-wrap gap-2">
						{study.stack.map((s) => (
							<span key={s} className="rounded-md bg-stone-300/10 px-2 py-1 text-xs">
								{s}
							</span>
						))}
					</div>

					{/* Links + expand toggle */}
					<div className="flex items-center gap-3">
						{study.links.repo && (
							<a
								href={study.links.repo}
								target="_blank"
								rel="noopener noreferrer"
								onClick={(e) => e.stopPropagation()}
								className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-all hover:bg-white/10 hover:text-white"
							>
								<FiGithub size={14} />
								GitHub
							</a>
						)}
						{study.links.paper && (
							<a
								href={study.links.paper}
								target="_blank"
								rel="noopener noreferrer"
								onClick={(e) => e.stopPropagation()}
								className="text-xs text-white/60 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
							>
								Paper ↗
							</a>
						)}
						<button
							onClick={() => setExpanded((prev) => !prev)}
							className="inline-flex items-center gap-1 font-mono text-xs text-white/40 transition-colors hover:text-white/80"
						>
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="transition-transform duration-200"
								style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
							>
								<path d="M2 4l4 4 4-4" />
							</svg>
							{expanded ? "less" : "more"}
						</button>
					</div>
				</div>
			</div>

			{/* Expandable section */}
			{expanded && (
				<div className="flex flex-col gap-4 border-t px-4 py-5 sm:px-6">
					<div>
						<p className="mb-2 text-xs uppercase tracking-widest">Abstract</p>
						<p className="text-sm leading-relaxed text-white/70">{study.abstract}</p>
					</div>

					{study.highlights && study.highlights.length > 0 && (
						<div>
							<p className="mb-2 text-xs uppercase tracking-widest">Highlights</p>
							<ul className="flex flex-col gap-1.5">
								{study.highlights.map((h) => (
									<li key={h} className="text-sm text-white/70 before:mr-2 before:text-white/30 before:content-['→']">
										{h}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
