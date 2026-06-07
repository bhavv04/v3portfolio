"use client";
import { projects } from "@/lib/projects/data";
import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { IoBuild } from "react-icons/io5";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProjectsView() {
	return (
		<section id="projects" className="mx-auto">
			<SectionTitle
				text={
					<span className="fade-in-up flex items-center gap-2 text-3xl" style={{ "--delay-index": 8 } as React.CSSProperties}>
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

					<div className="flex justify-end pt-2">
						<Link href="/projects" className="text-md inline-flex items-center gap-2 text-white/40 transition-colors hover:text-white/80">
							View More
							<ArrowRight size={16} />
						</Link>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
