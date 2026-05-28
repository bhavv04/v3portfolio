export type EducationItem = {
	school: string;
	degree: string;
	concentration: string;
	period: string;
	location: string;
	courses: string[];
};

export type ExperienceItem = {
	role: string;
	org: string;
	period: string;
	bullets: string[];
};

export const education: EducationItem[] = [
	{
		school: "Toronto Metropolitan University",
		degree: "Bachelor of Science (Honours) — Computer Science",
		concentration: "Software Engineering Concentration",
		period: "2022 – 2026",
		location: "Toronto, ON",
		courses: ["Data Structures & Algorithms", "Software Engineering", "Operating Systems", "Data Science"]
	}
];

export const experience: ExperienceItem[] = [
	{
		role: "Data Analyst",
		org: "Data for Good Toronto",
		period: "May 2026 – Present",
		bullets: [
			"Collaborated with a cross-functional team to analyze datasets for non-profit and social impact organizations, surfacing actionable insights to support data-driven decision making.",
			"Cleaned and processed raw data using Python and pandas, contributing to end-to-end analytics pipelines for community-focused projects."
		]
	},
	{
		role: "Technical Assistant",
		org: "SciXchange",
		period: "Sep 2023 – Apr 2024",
		bullets: ["Mentored and guided 50+ participants through science exchange exhibits, translating complex topics into accessible explanations."]
	}
];
