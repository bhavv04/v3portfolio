"use client";
import { projects } from "@/lib/projects/data";
import { Separator } from "@/components/ui/Separator";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { IoBuild } from "react-icons/io5";

export function ProjectsView() {
	return (
		<section id="projects" className="mx-auto">
			<SectionTitle
				text={
					<span className="flex items-center gap-2 text-3xl">
						<IoBuild />
						<span>Selected Works</span>
					</span>
				}
			/>

			<Card>
				<CardContent className="flex flex-col gap-8 p-6">
					{projects.map((project, i) => (
						<div key={`project-${project.name}`} className="flex flex-col gap-8">
							<ProjectShowcase project={project} direction={i % 2 === 0 ? "row-reverse" : "row"} />

							{i !== projects.length - 1 && <Separator />}
						</div>
					))}
				</CardContent>
			</Card>
		</section>
	);
}
