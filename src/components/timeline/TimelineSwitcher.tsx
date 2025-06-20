"use client";

import { useState } from "react";
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
		<section className="relative z-10 w-full" id="timeline">
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
