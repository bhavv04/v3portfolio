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
		id: "terraseed",
		title: "Terraseed",
		description: "Predicts optimal planting windows for any location on Earth using 30 years of ERA5 climate data and a composite scoring model.",
		longDescription:
			"Terraseed processes three decades of satellite and reanalysis climate data — temperature, precipitation, soil moisture, and frost risk — into a single planting score across the global grid. Features an interactive Plotly Dash dashboard where users can enter coordinates and get a month-by-month planting calendar with the optimal window highlighted automatically.",
		tags: ["machine learning", "data engineering", "research"],
		tech: ["Python", "Plotly Dash", "scikit-learn", "xarray"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/terraseed",
		demo: "https://github.com/bhavv04/terraseed",
		image: "https://picsum.photos/600/400?random=1",
		featured: true
	},
	{
		id: "deadzone",
		title: "Dead Zones on a Clock",
		description: "Models 40 years of Gulf of Mexico hypoxic dead zone data, tracing the causal chain from Midwest agriculture to ocean oxygen collapse.",
		longDescription:
			"Combines annual NOAA cruise measurements, USGS river nutrient loading, and sea surface temperature into a Random Forest regression model predicting annual dead zone size. Spring nitrogen load accounts for 80% of model decisions. Identifies anomalous years driven by hurricanes and droughts, and visualizes the dead zone pulsing across four decades with animated charts.",
		tags: ["data engineering", "machine learning", "research"],
		tech: ["Python", "scikit-learn", "xarray", "cartopy"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/deadzone",
		demo: "https://github.com/bhavv04/deadzone",
		image: "https://picsum.photos/600/400?random=2",
		featured: true
	},
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
		github: "https://github.com/bhavv04/collatz-viz",
		demo: "https://github.com/bhavv04/collatz-viz",
		image: "https://picsum.photos/600/400?random=3",
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
		github: "https://github.com/bhavv04/mapreduce-engine",
		demo: "https://github.com/bhavv04/mapreduce-engine",
		image: "https://picsum.photos/600/400?random=4",
		featured: true
	},
	{
		id: "healthcare-patient-management",
		title: "Healthcare Patient Management",
		description: "Full-stack patient monitoring system with dual admin and patient portals, real-time vitals tracking, and configurable alarm thresholds.",
		longDescription:
			"Built with React and Supabase, the system provides separate interfaces for administrators and patients. Administrators manage records and configure per-patient vital sign thresholds; patients view their health data and alerts. Tracks heart rate, temperature, blood oxygen, and blood pressure with full CRUD operations and alarm history logging.",
		tags: ["web dev", "systems"],
		tech: ["React", "Supabase", "PostgreSQL"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/Healthcare-Patient-Management",
		demo: "https://github.com/bhavv04/Healthcare-Patient-Management",
		image: "https://picsum.photos/600/400?random=5",
		featured: false
	},
	{
		id: "library-management-system",
		title: "Library Management System",
		description: "A responsive digital library catalog with search, filtering, and detailed views across books, audiobooks, and e-books.",
		longDescription:
			"Built with React, TypeScript, and Tailwind CSS. Features a full-text search bar, filter sidebar by genre and format, individual book detail modals, and a clean catalog grid. Powered by mock data with a structure ready for a real backend integration.",
		tags: ["web dev"],
		tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
		status: "completed",
		year: 2024,
		github: "https://github.com/bhavv04/Library-Management-System",
		demo: "https://github.com/bhavv04/Library-Management-System",
		image: "https://picsum.photos/600/400?random=6",
		featured: false
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
		github: "https://github.com/bhavv04/randomized-algorithms",
		demo: "https://github.com/bhavv04/randomized-algorithms",
		image: "https://picsum.photos/600/400?random=7",
		featured: false
	},
	{
		id: "calvin-hobbes-api",
		title: "Calvin & Hobbes Quote API",
		description: "A Flask API serving random Calvin and Hobbes quotes as JSON, built for easy integration into projects that need a touch of whimsy.",
		longDescription:
			"A lightweight REST API built with Flask that returns random quotes from Bill Watterson's Calvin and Hobbes. Quotes are stored in a structured JSON file and served via a single endpoint. Designed for easy embedding into portfolios, bots, or any project that could use some philosophical wisdom from a six-year-old and his tiger.",
		tags: ["web dev", "systems"],
		tech: ["Python", "Flask"],
		status: "completed",
		year: 2024,
		github: "https://github.com/bhavv04/calvin-hobbes-api",
		demo: "https://github.com/bhavv04/calvin-hobbes-api",
		image: "https://picsum.photos/600/400?random=8",
		featured: false
	},
	{
		id: "notion-habit-tracker",
		title: "Notion Habit Tracker",
		description: "A formula-driven Notion dashboard with color-coded indicators, percentage scoring, and streak tracking across daily habits.",
		longDescription:
			"Engineered entirely with Notion's formula language — no external tools. Features dynamic color states, weighted scoring, and a weekly momentum graph. Designed around consistent fitness and productivity goals.",
		tags: ["productivity"],
		tech: ["Notion Formulas"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/notion-habit-tracker",
		demo: "https://github.com/bhavv04/notion-habit-tracker",
		image: "https://picsum.photos/600/400?random=9",
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
		github: "https://github.com/bhavv04/portfolio",
		demo: "/",
		live: "/",
		image: "https://picsum.photos/600/400?random=10",
		featured: false
	}
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = [...projects].sort((a, b) => b.year - a.year);
