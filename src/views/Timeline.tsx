import { Card, CardContent } from "@/components/ui/Card";
import { TimelineEntry } from "@/components/timeline/TimelineEntry";
import { educationEntries, experienceEntries } from "@/lib/timeline/data";
import { TimelineSwitcher } from "@/components/timeline/TimelineSwitcher";
import { Separator } from "@/components/ui/Separator";

export function TimelineView() {
	return (
		<TimelineSwitcher
			experienceContent={
				<TimelineSection>
					{experienceEntries.map((experience, i) => (
						<div key={experience.header}>
							<TimelineEntry entry={experience} className="grow" />
							{i !== experienceEntries.length - 1 && <Separator />}
						</div>
					))}
				</TimelineSection>
			}
			educationContent={
				<TimelineSection>
					{educationEntries.map((education, i) => (
						<div key={education.header}>
							<TimelineEntry entry={education} className="grow" />
							{i !== educationEntries.length - 1 && <Separator />}
						</div>
					))}
				</TimelineSection>
			}
		/>
	);
}

interface TimelineSectionProps {
	children: React.ReactNode;
}

function TimelineSection({ children }: TimelineSectionProps) {
	return (
		<Card>
			<CardContent className="relative flex flex-col p-6">{children}</CardContent>
		</Card>
	);
}
