"use client";

import React, { useState } from "react";
import { projects, ProjectTag } from "./data";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { Filter } from "@/app/projects/components/filter";
import { ProjectGrid } from "@/app/projects/components/projectgrid";
import { BsTools } from "react-icons/bs";

const allTags = [...new Set(projects.flatMap((p) => p.tags))] as ProjectTag[];

export default function ProjectsPage() {
	const [selected, setSelected] = useState<Set<ProjectTag>>(new Set());

	const filtered = selected.size > 0 ? projects.filter((p) => p.tags.some((tag) => selected.has(tag))) : projects;

	return (
		<div className="sm:-mx-8 sm:-mt-10 md:-mx-16">
			<div className="">
				<div className="mb-4">
					<SectionTitle
						text={
							<span className="flex items-center gap-2">
								<BsTools />
								<span>Workshop</span>
							</span>
						}
					/>

					<p className="mt-2">Here are some of my featured projects and repositories I&apos;ve been currently working on.</p>
				</div>

				<Filter tags={allTags} selected={selected} onChange={setSelected} />
				<ProjectGrid projects={filtered} />
			</div>
		</div>
	);
}
