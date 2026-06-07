export type ProjectStatus = "completed" | "active" | "archived";

export type ProjectTag = "machine learning" | "data engineering" | "software engineering" | "systems programming" | "data visualization" | "computer vision";

export interface Project {
	id: string;
	title: string;
	tagline: string;
	description: string;
	longDescription: string;
	tags: ProjectTag[];
	tech: string[];
	status: ProjectStatus;
	year: number;
	github: string;
	image?: string;
	live?: string;
	featured: boolean;
	pageContent?: {
		hook: string;
		howItWorks: string;
		techChoices: string;
		lessonsLearned: string;
	};
}
