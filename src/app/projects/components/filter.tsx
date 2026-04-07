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

	const btn = (active: boolean) => `rounded-full px-4 py-1 transition-colors ${active ? "bg-white text-black" : "hover:bg-white hover:text-black"}`;

	return (
		<div className="mb-4 flex flex-wrap gap-2">
			<button onClick={() => onChange(new Set())} className={btn(selected.size === 0)}>
				All
			</button>
			{tags.map((tag) => (
				<button key={tag} onClick={() => toggle(tag)} className={btn(selected.has(tag))}>
					{tag}
				</button>
			))}
		</div>
	);
}
