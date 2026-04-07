export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectTag = "machine learning" | "data engineering" | "algorithms" | "web dev" | "research" | "systems" | "productivity";

export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	tags: ProjectTag[];
	tech: string[];
	status: ProjectStatus;
	year: number;
	github: string;
	demo: string;
	image?: string;
	live?: string;
	featured: boolean;
}

export const projects: Project[] = [
	{
		id: "collatz-viz",
		title: "Collatz Conjecture Explorer",
		description: "Interactive visualization of stopping-time landscapes for the Collatz Conjecture, with original research angles on sequence behavior.",
		longDescription:
			"A research-driven tool that maps stopping times across number ranges, revealing structural patterns in the Collatz sequence. Built to support original mathematical research, featuring zoom, density plots, and export capabilities.",
		tags: ["research", "web dev", "algorithms"],
		tech: ["TypeScript", "React"],
		status: "in-progress",
		year: 2026,
		github: "https://github.com",
		demo: "https://demo.com",
		image: "https://picsum.photos/600/400?random=10",
		featured: true
	},
	{
		id: "mapreduce-engine",
		title: "Custom MapReduce Engine",
		description: "A Python implementation of the MapReduce programming model from scratch, applied to large-scale document processing.",
		longDescription:
			"Built entirely without Hadoop or Spark, this engine implements the core MapReduce paradigm in Python — including shuffle, sort, and reduce phases — and benchmarks it against MongoDB aggregation pipelines on real datasets.",
		tags: ["data engineering", "systems"],
		tech: ["Python", "MongoDB"],
		status: "completed",
		year: 2025,
		github: "https://github.com",
		demo: "https://demo.com",
		image: "https://picsum.photos/600/400?random=11",
		featured: true
	},
	{
		id: "notion-habit-tracker",
		title: "Notion Habit Tracker",
		description: "A formula-driven Notion dashboard with color-coded indicators, percentage scoring, and streak tracking across daily habits.",
		longDescription:
			"Engineered entirely with Notion's formula language — no external tools. Features dynamic color states (🔴/🟡/🟢), weighted scoring, and a weekly momentum graph. Designed around consistent fitness and productivity goals.",
		tags: ["productivity"],
		tech: ["Notion Formulas"],
		status: "completed",
		year: 2025,
		github: "https://github.com",
		demo: "https://demo.com",
		image: "https://picsum.photos/600/400?random=12",
		featured: false
	},
	{
		id: "iot-healthcare-pipeline",
		title: "Big Data & IoT in Healthcare",
		description: "Research paper and reference architecture for processing real-time patient sensor streams at scale using modern big data tooling.",
		longDescription:
			"A term paper and accompanying system design for ingesting wearable and hospital IoT sensor data using Kafka, Spark Streaming, and cloud storage. Covers latency tradeoffs, HIPAA-adjacent considerations, and ML anomaly detection hooks.",
		tags: ["data engineering", "machine learning", "research"],
		tech: ["Python", "Kafka", "Spark"],
		status: "in-progress",
		year: 2026,
		github: "https://github.com",
		demo: "https://demo.com",
		image: "https://picsum.photos/600/400?random=13",
		featured: true
	},
	{
		id: "quickselect-karger",
		title: "Randomized Algorithm Suite",
		description: "Implementations and analysis of QuickSelect and Karger's Min-Cut algorithm with empirical runtime comparisons.",
		longDescription:
			"A study of expected-case randomized algorithms. QuickSelect achieves O(n) expected time for order statistics; Karger's algorithm finds minimum cuts in O(n² log n) expected time. Includes Monte Carlo repetition analysis and probability of failure bounds.",
		tags: ["algorithms", "research"],
		tech: ["Python"],
		status: "completed",
		year: 2025,
		github: "https://github.com",
		demo: "https://demo.com",
		image: "https://picsum.photos/600/400?random=14",
		featured: false
	},
	{
		id: "portfolio",
		title: "This Portfolio",
		description: "Personal portfolio built with Next.js and TypeScript. You're looking at it.",
		longDescription:
			"A minimal, performance-focused portfolio site. Built with Next.js App Router, TypeScript, and Tailwind CSS. Deployed on Vercel. No template — designed and built from scratch.",
		tags: ["web dev"],
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		status: "in-progress",
		year: 2026,
		github: "https://github.com",
		demo: "/",
		live: "/",
		image: "https://picsum.photos/600/400?random=15",
		featured: false
	}
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = [...projects].sort((a, b) => b.year - a.year);
