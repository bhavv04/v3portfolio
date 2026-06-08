"use client";

import { ResearchCardProps } from "@/app/research/model";
import { FiGithub } from "react-icons/fi";
import { FileText } from "lucide-react";

export default function ResearchCard({ study, expanded, onToggle }: ResearchCardProps) {
	return (
		<div className="flex flex-col rounded-lg bg-neutral-900 transition-all duration-300 hover:scale-[1.02]">
			<div className="flex flex-col gap-4 p-4">
				{/* Title */}
				<div className="flex flex-col">
					<h3 className="text-lg">{study.title}</h3>
					<p className="text-sm text-white/50">{study.subtitle}</p>
				</div>

				{/* Tags */}
				<div className="flex items-center justify-between gap-3">
					<div className="flex flex-wrap gap-1.5">
						{study.tags.map((tag) => (
							<span key={tag} className="rounded-md bg-stone-300/10 px-2 py-0.5 text-xs text-white/60">
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* Methods */}
				<div className="flex flex-wrap gap-x-3 gap-y-1">
					{study.methods.map((method) => (
						<span key={method} className="text-xs text-white/40 before:mr-1.5 before:content-['#']">
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

				{/* Links + expand */}
				<div className="flex items-center justify-between gap-3">
					<div className="flex shrink-0 items-center gap-2">
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

					<button onClick={onToggle} className="inline-flex shrink-0 items-center gap-1 text-sm text-white/40 transition-colors hover:text-white/80">
						{expanded ? "see less" : "see more"}
					</button>
				</div>
			</div>

			{/* Animated expandable section */}
			<div className={`ease-[cubic-bezier(0.22,1,0.36,1)] grid transition-all duration-500 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
				<div className="overflow-hidden">
					<div className="flex flex-col gap-4 px-5 py-4">
						<div>
							<p className="mb-2 text-xs text-white/30">Abstract</p>
							<p className="text-sm leading-relaxed text-white/60">{study.abstract}</p>
						</div>

						{study.highlights && study.highlights.length > 0 && (
							<div>
								<p className="mb-2 text-xs text-white/30">Highlights</p>
								<ul className="flex flex-col gap-1">
									{study.highlights.map((h) => (
										<li key={h} className="flex items-start gap-2 text-sm text-white/60">
											<span className="mt-px shrink-0 text-white/20">{`> `}</span>
											<span>{h}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
