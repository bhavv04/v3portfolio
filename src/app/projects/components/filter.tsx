"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
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
		<motion.div layout className="mb-4 flex flex-wrap gap-2">
			<AnimatePresence mode="popLayout">
				{tags.map((tag, i) => {
					const active = selected.has(tag);
					return (
						<motion.button
							key={tag}
							layout
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									duration: 0.95,
									delay: i * 0.05,
									ease: [0.22, 1, 0.36, 1]
								}
							}}
							exit={{
								opacity: 0,
								y: -20,
								scale: 0.95,
								transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
							}}
							onClick={() => toggle(tag)}
							className={`relative inline-flex items-center justify-center rounded-md px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300 ease-in-out ${
								active ? "bg-white text-black" : "bg-neutral-800 text-white hover:bg-white hover:text-black"
							}`}
						>
							{tag}
						</motion.button>
					);
				})}
			</AnimatePresence>

			{selected.size > 0 && (
				<motion.button
					layout
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: -20, scale: 0.95 }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					onClick={() => onChange(new Set())}
					className="group relative inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white/80 transition-all duration-300 ease-in-out hover:text-white"
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
				</motion.button>
			)}
		</motion.div>
	);
}
