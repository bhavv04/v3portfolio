"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/projects/data";
import { Separator } from "@/components/ui/Separator";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { SiTheodinproject } from "react-icons/si";

export function ProjectsView() {
	const ProjectRef = useRef<HTMLElement>(null); // Add this ref

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
		);

		if (ProjectRef.current) {
			observer.observe(ProjectRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section id="projects" ref={ProjectRef} className="fade-in-on-scroll">
			<SectionTitle
				text={
					<>
						<SiTheodinproject className="mr-2 inline-block" />
						Projects
					</>
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
