"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

type TimelineView = "experience" | "education";

interface TimelineSwitcherProps {
	experienceContent: React.ReactNode;
	educationContent: React.ReactNode;
}

export function TimelineSwitcher({ experienceContent, educationContent }: TimelineSwitcherProps) {
	const [selectedView, setSelectedView] = useState<TimelineView>("experience");

	const getSectionTitle = () => {
		if (selectedView === "experience") {
			return <span className="mb-4 flex items-center gap-2">Experience</span>;
		}
		return <span className="mb-4 flex items-center gap-2">Education</span>;
	};

	return (
		<section className="relative w-full" id="timeline">
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
