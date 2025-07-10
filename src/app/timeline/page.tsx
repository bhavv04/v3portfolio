"use client";

export default function TimelinePage() {
	return (
		<div className="flex min-h-screen items-center justify-center text-xl text-white">
			<p>🚧 This page is under construction. Check back soon!</p>
		</div>
	);
}

/*

// Original code commented out below:

import { useState } from "react";
import { experienceEntries, educationEntries } from "@/lib/timeline/data";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { HiOutlineBriefcase, HiOutlineAcademicCap } from "react-icons/hi2";
import { Badge } from "@/components/ui/Badge";

export default function TimelinePage() {
	const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
	const currentEntries = activeTab === "experience" ? experienceEntries : educationEntries;

	return (
		<div className="-mt-32 min-h-screen px-4 text-white">
			<div className="mx-auto max-w-6xl py-20">

				//Section Header
				<div className="slide-in-up mb-16 mt-10 text-center md:-mt-0">
					<SectionTitle text={<span className="text-white">My Journey</span>} />
					<p className="mt-4 text-lg font-semibold leading-8 text-slate-300">
						Professional experience and educational background
					</p>
				</div>

				//Tabs
				<div className="scale-in mb-16 flex justify-center">
					<div className="inline-flex rounded-full border border-gray-800 bg-gray-950/60 p-1 backdrop-blur">
						{[
							{ label: "Experience", icon: HiOutlineBriefcase, value: "experience" },
							{ label: "Education", icon: HiOutlineAcademicCap, value: "education" }
						].map(({ label, icon: Icon, value }, index) => (
							<button
								key={value}
								onClick={() => setActiveTab(value as "experience" | "education")}
								className={`flex items-center gap-2 px-6 py-3 focus:outline-none ${index === 0 ? "rounded-l-full" : "rounded-r-full"} ${
									activeTab === value ? "bg-white font-medium text-black" : "text-gray-400 hover:text-white"
								}`}
								role="tab"
								aria-selected={activeTab === value}
							>
								<Icon className="h-5 w-5" />
								{label}
							</button>
						))}
					</div>
				</div>

				//Timeline
				<div className="relative">
					<div className="absolute -top-10 bottom-0 w-px bg-gradient-to-b from-gray-600 via-gray-700 to-transparent md:left-1/2 md:-translate-x-1/2" />

					<div className="space-y-20 md:space-y-28">
						{currentEntries.map((entry, index) => {
							const isLeft = index % 2 === 0;

							return (
								<div key={`${entry.header}-${entry.subheader}-${index}`} className="relative">
									<div className="absolute -left-2 top-8 z-10 md:left-1/2 md:-translate-x-1/2">
										<div className="h-4 w-4 rounded-full border-4 border-black bg-white shadow-lg" />
									</div>

									<div className={`scale-in relative ml-10 md:w-[45%] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
										<div className="p-6">
											<div className="mb-6">
												<h3 className="mb-1 text-xl font-bold text-white md:text-2xl">{entry.header}</h3>
												<p className="mb-2 text-lg text-gray-300">{entry.subheader}</p>
												<div className="flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center">
													<span className="rounded-full bg-slate-900 px-3 py-1 font-medium text-gray-300">
														{entry.dateRange[0].year} - {entry.dateRange[1]?.year || "Present"}
													</span>
													{entry.location && (
														<span className="flex items-center gap-2">
															<span className="h-1 w-1 rounded-full" />
															{entry.location}
														</span>
													)}
												</div>
											</div>

											{entry.type === "bullets" && entry.bullets?.length > 0 && (
												<ul className="mb-6 space-y-3">
													{entry.bullets.map((bullet, i) => (
														<li key={i} className="flex items-start">
															<span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
															<span className="leading-relaxed text-gray-300">{bullet}</span>
														</li>
													))}
												</ul>
											)}

											{entry.badges?.length > 0 && (
												<div className="flex flex-wrap gap-2">
													{entry.badges.map((badge, i) => (
														<Badge key={i} className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
															{badge}
														</Badge>
													))}
												</div>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

*/
