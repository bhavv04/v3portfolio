export type ProjectStatus = "completed" | "active" | "archived";

export type ProjectTag = "machine learning" | "data engineering" | "software engineering" | "systems programming" | "data visualization" | "computer vision";

export interface Project {
	id: string;
	rank: number;
	slug: string;
	title: string;
	tagline: string;
	description: string;
	tags: ProjectTag[];
	tech: string[];
	status: ProjectStatus;
	year: number;
	github: string;
	image?: string;
	live?: string;
	featured: boolean;
	hasCaseStudy: boolean;
}
