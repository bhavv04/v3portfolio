"use client";

import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, ProjectTag } from "./data";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { SiTheodinproject } from "react-icons/si";
import Image from "next/image";
import { Filter } from "./filter";

// derive unique tags from your projects once
const allTags = [...new Set(projects.flatMap((p) => p.tags))] as ProjectTag[];

export default function ProjectsPage() {
	const [selected, setSelected] = useState<ProjectTag | null>(null); // [5] filter state

	// filter projects — null means show all
	const filtered = selected ? projects.filter((p) => p.tags.includes(selected)) : projects;

	return (
		<div className="bg-transparent sm:-mt-10">
			<div className="w-full xl:w-[120%] xl:-translate-x-20">
				<div className="mb-8 sm:mb-12">
					<SectionTitle
						text={
							<>
								<SiTheodinproject className="mb-2 mr-2 inline-block" />
								Projects
							</>
						}
					/>
				</div>

				{/* drop Filter here, between the title and the grid */}
				<Filter tags={allTags} selected={selected} onChange={setSelected} />

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{filtered.map((project) => (
						<div key={project.id} className="overflow-hidden rounded-lg border-2 bg-transparent backdrop-blur-sm">
							<div className="relative h-48 overflow-hidden bg-gray-200">
								{project.image ? (
									<Image
										src={project.image}
										alt={`${project.title} preview`}
										fill
										className="object-cover"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								) : (
									<div className="flex h-full items-center justify-center">
										<span className="text-4xl text-gray-500">🚀</span>
									</div>
								)}
							</div>

							<div className="p-4">
								<h3 className="mb-2 text-lg">{project.title}</h3>
								<p className="mb-4 line-clamp-2 text-sm">{project.description}</p>

								<div className="mb-4 flex flex-wrap gap-1">
									{project.tech.map((tech) => (
										<span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700">
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-3">
									<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm">
										<Github size={14} />
										Code
									</a>
									<a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm">
										<ExternalLink size={14} />
										Demo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
