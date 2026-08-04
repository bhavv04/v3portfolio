"use client";

import { AnimatePresence, motion } from "motion/react";
import { Project } from "@/app/projects/model";
import { ProjectCard } from "./projectcard";

interface ProjectGridProps {
	projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
	const ordered = [...projects].sort((a, b) => a.rank - b.rank);

	if (ordered.length === 0) {
		return (
			<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-16 text-center text-sm">
				no projects match this filter
			</motion.p>
		);
	}

	return (
		<motion.div layout className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<AnimatePresence mode="popLayout">
				{ordered.map((project) => (
					<motion.div
						key={project.id}
						layout
						initial={{
							opacity: 0,
							y: 20,
							scale: 0.95
						}}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1
						}}
						exit={{
							opacity: 0,
							y: -20,
							scale: 0.95
						}}
						transition={{
							duration: 0.3,
							ease: [0.22, 1, 0.36, 1]
						}}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	);
}
