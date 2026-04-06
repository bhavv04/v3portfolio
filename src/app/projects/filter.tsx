"use client";

import React from "react";
import { ProjectTag } from "./data";

interface FilterProps {
	tags: ProjectTag[];
	selected: ProjectTag | null;
	onChange: (tag: ProjectTag | null) => void;
}

export function Filter({ tags, selected, onChange }: FilterProps) {
	return (
		//Selected button

		<div className="mb-6 flex flex-wrap gap-2">
			<button
				onClick={() => onChange(null)}
				className={`rounded-md bg-neutral-800 px-3 py-1 text-sm transition-colors ${
					selected === null ? "bg-white text-black" : "border border-white/30 text-white/70 hover:text-white"
				}`}
			>
				All
			</button>

			{tags.map((tag) => (
				<button
					key={tag}
					onClick={() => onChange(tag === selected ? null : tag)}
					className={`rounded-md bg-neutral-800 px-3 py-1 text-sm transition-colors ${
						// toggle selected tag
						selected === tag ? "bg-white text-black" : "border border-white/30 text-white/70 hover:text-white"
					}`}
				>
					{tag}
				</button>
			))}
		</div>
	);
}
