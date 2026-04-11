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
		<div className="mb-4 space-y-3">
			<div className="flex flex-wrap gap-2">
				{tags.map((tag) => (
					<button
						key={tag}
						onClick={() => toggle(tag)}
						className="rounded-full border border-white px-4 py-1 text-sm duration-200 hover:bg-white hover:text-black"
					>
						{tag}
					</button>
				))}
			</div>

			{selected.size > 0 && (
				<div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
					<span className="mr-1 text-xs">active</span>
					{[...selected].map((tag) => (
						<button
							key={tag}
							onClick={() => toggle(tag)}
							className="inline-flex items-center gap-1.5 rounded-full border border-white px-3 py-0.5 text-xs transition-opacity hover:opacity-60"
						>
							{tag}
							<span className="-mt-px text-base leading-none">×</span>
						</button>
					))}
					<button onClick={() => onChange(new Set())} className="ml-1 text-xs transition-opacity hover:opacity-60">
						clear all
					</button>
				</div>
			)}
		</div>
	);
}
