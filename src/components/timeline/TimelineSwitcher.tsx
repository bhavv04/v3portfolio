"use client";

import { useState, useEffect, useRef } from "react";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";

type TimelineView = "experience" | "education";

interface TimelineSwitcherProps {
	experienceContent: React.ReactNode;
	educationContent: React.ReactNode;
}

export function TimelineSwitcher({ experienceContent, educationContent }: TimelineSwitcherProps) {
	const [selectedView, setSelectedView] = useState<TimelineView>("experience");
	const timelineRef = useRef<HTMLElement>(null); // Add this ref

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

		if (timelineRef.current) {
			observer.observe(timelineRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const getSectionTitle = () => {
		if (selectedView === "experience") {
			return (
				<span className="flex items-center gap-2">
					<HiOutlineBriefcase className="mb-1 inline-block" />
					Experience
				</span>
			);
		}
		return (
			<span className="flex items-center gap-2">
				<LuGraduationCap className="mb-1 inline-block" />
				Education
			</span>
		);
	};

	return (
		<section ref={timelineRef} className="fade-in-on-scroll relative z-10 w-full" id="timeline">
			<SectionTitle text={getSectionTitle()} />
			<Tabs id="education" value={selectedView} onValueChange={(view) => setSelectedView(view as TimelineView)} className="relative">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="experience">Experience</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>

				<TabsContent value="experience">{experienceContent}</TabsContent>
				<TabsContent value="education">{educationContent}</TabsContent>
			</Tabs>
		</section>
	);
}
