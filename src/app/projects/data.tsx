export type ProjectStatus = "completed" | "active" | "archived";

export type ProjectTag = "machine learning" | "data engineering" | "algorithms" | "web dev" | "research" | "systems" | "productivity";

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
	demo: string;
	image?: string;
	live?: string;
	featured: boolean;
}

export const projects: Project[] = [
	{
		id: "terraseed",
		title: "Terraseed",
		tagline: "30 years of climate data, one planting score",
		description: "Predicts optimal planting windows for any location on Earth using 30 years of ERA5 climate data and a composite scoring model.",
		longDescription:
			"Terraseed processes three decades of satellite and reanalysis climate data — temperature, precipitation, soil moisture, and frost risk — into a single planting score across the global grid. Features an interactive Plotly Dash dashboard where users can enter coordinates and get a month-by-month planting calendar with the optimal window highlighted automatically.",
		tags: ["machine learning", "data engineering", "research"],
		tech: ["Python", "Plotly Dash", "scikit-learn", "xarray"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/terraseed",
		demo: "",
		image: "/images/projects/terraseed.png",
		featured: true
	},
	{
		id: "deadzone",
		title: "Dead Zones on a Clock",
		tagline: "tracing oxygen collapse back to a cornfield",
		description: "Models 40 years of Gulf of Mexico hypoxic dead zone data, tracing the causal chain from Midwest agriculture to ocean oxygen collapse.",
		longDescription:
			"Combines annual NOAA cruise measurements, USGS river nutrient loading, and sea surface temperature into a Random Forest regression model predicting annual dead zone size. Spring nitrogen load accounts for 80% of model decisions. Identifies anomalous years driven by hurricanes and droughts, and visualizes the dead zone pulsing across four decades with animated charts.",
		tags: ["data engineering", "machine learning", "research"],
		tech: ["Python", "scikit-learn", "xarray", "cartopy"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/deadzone",
		demo: "https://deadzone-b3eq.onrender.com/",
		image: "",
		featured: true
	},
	{
		id: "collatz-viz",
		title: "Collatz Conjecture Explorer",
		tagline: "nobody has proved it. here's what it looks like",
		description: "Interactive visualization of stopping-time landscapes for the Collatz Conjecture, with original research angles on sequence behavior.",
		longDescription:
			"A research-driven tool that maps stopping times across number ranges, revealing structural patterns in the Collatz sequence. Built to support original mathematical research, featuring zoom, density plots, and export capabilities.",
		tags: ["research", "web dev", "algorithms"],
		tech: ["TypeScript", "React"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/collatz-viz",
		demo: "",
		image: "",
		featured: true
	},
	{
		id: "mapreduce-engine",
		title: "Custom MapReduce Engine",
		tagline: "hadoop is overkill. built it anyway, from scratch",
		description: "A Python implementation of the MapReduce programming model from scratch, applied to large-scale document processing.",
		longDescription:
			"Built entirely without Hadoop or Spark, this engine implements the core MapReduce paradigm in Python — including shuffle, sort, and reduce phases — and benchmarks it against MongoDB aggregation pipelines on real datasets.",
		tags: ["data engineering", "systems"],
		tech: ["Python", "MongoDB"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/mapreduce-engine",
		demo: "",
		image: "",
		featured: true
	},
	{
		id: "healthcare-patient-management",
		title: "Healthcare Patient Management",
		tagline: "vitals, thresholds, and alarms — two portals, one system",
		description: "Full-stack patient monitoring system with dual admin and patient portals, real-time vitals tracking, and configurable alarm thresholds.",
		longDescription:
			"Built with React and Supabase, the system provides separate interfaces for administrators and patients. Administrators manage records and configure per-patient vital sign thresholds; patients view their health data and alerts. Tracks heart rate, temperature, blood oxygen, and blood pressure with full CRUD operations and alarm history logging.",
		tags: ["web dev", "systems"],
		tech: ["React", "Supabase", "PostgreSQL"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/Healthcare-Patient-Management",
		demo: "https://healthcare-patient-management.vercel.app/",
		image: "",
		featured: false
	},
	{
		id: "library-management-system",
		title: "Library Management System",
		tagline: "search, filter, browse — the catalog, done right",
		description: "A responsive digital library catalog with search, filtering, and detailed views across books, audiobooks, and e-books.",
		longDescription:
			"Built with React, TypeScript, and Tailwind CSS. Features a full-text search bar, filter sidebar by genre and format, individual book detail modals, and a clean catalog grid. Powered by mock data with a structure ready for a real backend integration.",
		tags: ["web dev"],
		tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
		status: "completed",
		year: 2024,
		github: "https://github.com/bhavv04/Library-Management-System",
		demo: "",
		image: "",
		featured: false
	},
	{
		id: "calvin-hobbes-api",
		title: "Calvin & Hobbes Quote API",
		tagline: "philosophy from a six-year-old, on demand",
		description: "A Flask API serving random Calvin and Hobbes quotes as JSON, built for easy integration into projects that need a touch of whimsy.",
		longDescription:
			"A lightweight REST API built with Flask that returns random quotes from Bill Watterson's Calvin and Hobbes. Quotes are stored in a structured JSON file and served via a single endpoint. Designed for easy embedding into portfolios, bots, or any project that could use some philosophical wisdom from a six-year-old and his tiger.",
		tags: ["web dev", "systems"],
		tech: ["Python", "Flask"],
		status: "completed",
		year: 2024,
		github: "https://github.com/bhavv04/calandhobbes-quoter",
		demo: "https://calandhobbes-quoter-production.up.railway.app/api/quotes/random",
		image: "",
		featured: false
	},
	{
		id: "portfolio",
		title: "This Portfolio",
		tagline: "no template. designed and built from nothing",
		description: "Personal portfolio built with Next.js and TypeScript. You're looking at it.",
		longDescription:
			"A minimal, performance-focused portfolio site. Built with Next.js App Router, TypeScript, and Tailwind CSS. Deployed on Vercel. No template — designed and built from scratch.",
		tags: ["web dev"],
		tech: ["Next.js", "TypeScript", "Tailwind CSS"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/portfolio",
		demo: "/",
		live: "/",
		image: "",
		featured: false
	}
];
