"use client";

import React, { useState } from "react";
import { ProjectStatus, ResearchTag } from "@/app/research/model";
import { caseStudies } from "@/app/research/data";
import ResearchCard from "@/app/research/components/researchCard";

const ALL_TAGS: ResearchTag[] = [
	"finance",
	"medicine",
	"mathematics",
	"climate",
	"geospatial",
	"physics",
	"neuroscience",
	"economics",
	"artificial-intelligence"
];

const ALL_STATUSES: ProjectStatus[] = ["submitted", "preprint"];

const statusLabel: Record<ProjectStatus, string> = {
	completed: "Completed",
	"in-progress": "In Progress",
	submitted: "Submitted",
	preprint: "Preprint"
};

export default function ResearchFilter() {
	const [selectedTags, setSelectedTags] = useState<Set<ResearchTag>>(new Set());
	const [selectedStatuses, setSelectedStatuses] = useState<Set<ProjectStatus>>(new Set());
	const [expandedId, setExpandedId] = useState<string | null>(null);

	const toggleTag = (tag: ResearchTag) => {
		const next = new Set(selectedTags);
		if (next.has(tag)) next.delete(tag);
		else next.add(tag);
		setSelectedTags(next);
	};

	const toggleStatus = (status: ProjectStatus) => {
		const next = new Set(selectedStatuses);
		if (next.has(status)) next.delete(status);
		else next.add(status);
		setSelectedStatuses(next);
	};

	const clearAll = () => {
		setSelectedTags(new Set());
		setSelectedStatuses(new Set());
	};

	const hasFilters = selectedTags.size > 0 || selectedStatuses.size > 0;

	const usedTags = ALL_TAGS.filter((t) => caseStudies.some((c) => c.tags.includes(t)));
	const usedStatuses = ALL_STATUSES.filter((s) => caseStudies.some((c) => c.status === s));

	const filtered = caseStudies.filter((s) => {
		const tagMatch = selectedTags.size === 0 || s.tags.some((t) => selectedTags.has(t));
		const statusMatch = selectedStatuses.size === 0 || selectedStatuses.has(s.status);
		return tagMatch && statusMatch;
	});

	// If filter changes cause expanded card to disappear, collapse it
	React.useEffect(() => {
		if (expandedId && !filtered.find((s) => s.id === expandedId)) {
			setExpandedId(null);
		}
	}, [filtered, expandedId]);

	return (
		<div>
			{/* Status filters */}
			<div className="mb-4 flex flex-wrap gap-2">
				{usedStatuses.map((status, i) => {
					const active = selectedStatuses.has(status);
					return (
						<button
							key={status}
							onClick={() => toggleStatus(status)}
							className={`fade-in-up duration-800 relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors ease-in-out ${
								active ? "bg-white text-black" : "bg-neutral-800 text-white hover:bg-white hover:text-black"
							}`}
							style={{ "--delay-index": i } as React.CSSProperties}
						>
							{statusLabel[status]}
						</button>
					);
				})}
			</div>

			{/* Tag filters */}
			<div className="mb-6 flex flex-wrap gap-2">
				{usedTags.map((tag, i) => {
					const active = selectedTags.has(tag);
					return (
						<button
							key={tag}
							onClick={() => toggleTag(tag)}
							className={`duration-800 relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors ease-in-out fade-in ${
								active ? "bg-white text-black" : "bg-neutral-800 text-white hover:bg-white hover:text-black"
							}`}
							style={{ "--delay-index": i } as React.CSSProperties}
						>
							{tag}
						</button>
					);
				})}

				{hasFilters && (
					<button
						onClick={clearAll}
						className="group relative inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white/80 transition-all duration-300 ease-in-out hover:text-white hover:underline"
					>
						<span>Clear all</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-3.5 w-3.5 transition-transform group-hover:rotate-90"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				)}
			</div>

			{/* Cards */}
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
				{filtered.length > 0 ? (
					filtered.map((study, i) => (
						<div
							key={study.id}
							className={`fade-in-up transition-all duration-500 ease-in-out ${expandedId === study.id ? "lg:col-span-1" : ""}`}
							style={{ "--delay-index": i } as React.CSSProperties}
						>
							<ResearchCard
								study={study}
								expanded={expandedId === study.id}
								onToggle={() => setExpandedId((prev) => (prev === study.id ? null : study.id))}
							/>
						</div>
					))
				) : (
					<p className="text-sm text-white">no projects match the selected filters.</p>
				)}
			</div>
		</div>
	);
}
