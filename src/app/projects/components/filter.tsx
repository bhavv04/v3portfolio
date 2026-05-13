"use client";

import React from "react";
import { ProjectTag } from "@/app/projects/data";

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
						className={`fade-in-up duration-800 relative inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ease-in-out ${
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
					className="duration-800 relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-4 py-2 text-sm text-white/70 transition-colors ease-in-out hover:text-white"
				>
					<span>×</span>
					<span>clear</span>
				</button>
			)}
		</div>
	);
}
