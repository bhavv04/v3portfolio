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

export const experience: ExperienceItem[] = [];
