"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { TechnologyBadge } from "@/components/common/TechnologyBadges";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/projects/model";

interface ProjectShowcaseProps {
	project: Project;
	direction?: "row" | "row-reverse";
}

export function ProjectShowcase({ project, direction = "row" }: ProjectShowcaseProps) {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const { name, summary, technologies, links, screenshots } = project;
	const hasMultiple = screenshots.length > 1;

	return (
		<article className={cn("flex flex-col gap-8 lg:items-start lg:gap-6", direction === "row-reverse" ? "lg:flex-row-reverse" : "lg:flex-row")}>
			{/* Screenshots */}
			<div className="w-full lg:w-[55%]">
				<div className="-mx-4 p-4">
					{/* Header */}
					<div className="mb-4 flex items-center justify-between px-1 text-xs text-white/45">
						<span>{name} screenshots</span>
						{hasMultiple && (
							<span>
								{activeIndex + 1} / {screenshots.length}
							</span>
						)}
					</div>

					{/* Carousel */}
					<Carousel
						opts={{ loop: hasMultiple }}
						setApi={(api) => {
							if (!api) return;
							setActiveIndex(api.selectedScrollSnap());
							api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
						}}
					>
						<CarouselContent>
							{screenshots.map((screenshot, i) => (
								<CarouselItem key={screenshot.name}>
									<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
										<div className="relative aspect-[16/10] w-full overflow-hidden">
											<Image
												src={screenshot.desktop.src}
												alt={`${name} — ${screenshot.name}`}
												width={screenshot.desktop.width}
												height={screenshot.desktop.height}
												className="hidden h-full w-full object-cover sm:block"
												priority={i === 0}
											/>
											<Image
												src={screenshot.mobile.src}
												alt={`${name} — ${screenshot.name}`}
												width={screenshot.mobile.width}
												height={screenshot.mobile.height}
												className="h-full w-full object-cover sm:hidden"
												priority={i === 0}
											/>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{hasMultiple && (
							<div className="mt-4 flex items-center justify-between">
								{/* Dot indicators */}
								<div className="flex gap-2">
									{screenshots.map((screenshot, i) => (
										<button
											key={screenshot.name}
											type="button"
											onClick={() => setActiveIndex(i)}
											aria-label={`Show ${screenshot.name}`}
											className={cn(
												"h-2.5 rounded-full transition-all duration-200",
												i === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/25 hover:bg-white/45"
											)}
										/>
									))}
								</div>

								{/* Prev / Next */}
								<div className="flex gap-2">
									<CarouselPrevious className="border border-white/10 bg-neutral-900/80 text-white hover:bg-white hover:text-black" />
									<CarouselNext className="border border-white/10 bg-neutral-900/80 text-white hover:bg-white hover:text-black" />
								</div>
							</div>
						)}
					</Carousel>
				</div>
			</div>

			{/* Info */}
			<div className="flex w-full flex-col gap-5 lg:w-1/2 lg:pt-4">
				<div className="space-y-2">
					<h3 className="text-balance text-3xl sm:text-4xl">{name}</h3>
					<p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">{summary}</p>
				</div>

				<div className="flex flex-wrap gap-2">
					{technologies.map((technology) => (
						<TechnologyBadge key={technology} technology={technology} />
					))}
				</div>

				{project.type === "bullets" && project.bullets.length > 0 && (
					<ul className="space-y-3 rounded-xl p-5 text-sm leading-6 text-white sm:p-6">
						{project.bullets.map((bullet) => (
							<li key={bullet} className="flex gap-3">
								<span className="mt-2 size-1.5 shrink-0 rounded-full bg-white" />
								<span>{bullet}</span>
							</li>
						))}
					</ul>
				)}

				<div className="flex flex-wrap gap-3 pt-1">
					{links?.github && (
						<Button asChild className="rounded-full bg-white text-black hover:bg-white/80">
							<Link href={links.github} target="_blank" rel="noopener noreferrer">
								<Github size={16} />
								Source
							</Link>
						</Button>
					)}
					{links?.live && (
						<Button asChild className="rounded-full border border-white/10 bg-transparent text-white hover:bg-white hover:text-black">
							<Link href={links.live} target="_blank" rel="noopener noreferrer">
								<ExternalLink size={16} />
								Live site
							</Link>
						</Button>
					)}
				</div>
			</div>
		</article>
	);
}
