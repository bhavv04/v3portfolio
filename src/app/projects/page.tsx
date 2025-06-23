"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { mockProjects } from "@/lib/projects/allData";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { SiTheodinproject } from "react-icons/si";
import Image from "next/image";

export default function ProjectsPage() {
	return (
		<div className="bg-transparent sm:-mt-10">
			<div className="w-full xl:w-[120%] xl:-translate-x-20">
				<div className="fade-in-down mb-8 sm:mb-12">
					<SectionTitle
						text={
							<>
								<SiTheodinproject className="mb-2 mr-2 inline-block" />
								Projects
							</>
						}
					/>
				</div>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
					{mockProjects.map((project, index) => (
						<div
							key={project.id}
							className={`scale-in-fade overflow-hidden rounded-lg border-2 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-md hover:shadow-white`}
							style={{
								animationDelay: `${index * 0.15}s`,
								animationFillMode: "both"
							}}
						>
							{/* Project Image */}
							<div className="relative h-48 overflow-hidden bg-gray-100">
								{project.image ? (
									<Image
										src={project.image}
										alt={`${project.title} preview`}
										fill
										className="object-cover transition-transform duration-500 hover:scale-110"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								) : (
									<div className="flex h-full items-center justify-center bg-gray-200 transition-transform duration-300 hover:scale-105">
										<span className="pulse text-4xl text-gray-500">🚀</span>
									</div>
								)}

								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
							</div>

							{/* Project Content */}
							<div className="p-4">
								<h3 className="hover-brighten mb-2 text-lg transition-colors duration-300">{project.title}</h3>

								<p className="mb-4 line-clamp-2 text-sm">{project.description}</p>

								<div className="mb-4 flex flex-wrap gap-1">
									{project.tech.map((tech, index) => (
										<span
											key={index}
											className={`hover-scale rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 transition-all duration-200 fade-in delay-${index * 50 + 300}`}
											style={{
												animationDelay: `${index * 0.1 + 0.5}s`
											}}
										>
											{tech}
										</span>
									))}
								</div>

								<div className="fade-in-up delay-400 flex gap-3">
									<a
										href={project.github}
										className="hover-scale btn-shine flex items-center gap-1 text-base transition-all duration-300 hover:text-stone-300"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github size={16} className="" />
										Code
									</a>
									<a
										href={project.demo}
										className="hover-scale btn-shine flex items-center gap-1 text-base transition-all duration-300 hover:text-stone-300"
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink size={16} className="" />
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
