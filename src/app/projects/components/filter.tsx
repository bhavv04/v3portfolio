"use client";

import React from "react";
import { ProjectTag } from "@/app/projects/model";

interface FilterProps {
	tags: ProjectTag[];
	selected: Set<ProjectTag>;
	onChange: (tags: Set<ProjectTag>) => void;
}

export function Filter({ tags, selected, onChange }: FilterProps) {
	const toggle = (tag: ProjectTag) => {
		const next = new Set(selected);
		if (next.has(tag)) next.delete(tag);
		else next.add(tag);
		onChange(next);
	};

	return (
		<div className="mb-4 flex flex-wrap gap-2">
			{tags.map((tag, i) => {
				const active = selected.has(tag);
				return (
					<button
						key={tag}
						onClick={() => toggle(tag)}
						className={`duration-800 relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors ease-in-out fade-in ${
							active ? "bg-white text-black" : "bg-neutral-800 text-white hover:bg-white hover:text-black"
						}`}
						style={{ "--delay-index": i } as React.CSSProperties}
					>
						{tag}
					</button>
				);
			})}
			{selected.size > 0 && (
				<button
					onClick={() => onChange(new Set())}
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
	);
}
