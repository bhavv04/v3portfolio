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
	pageContent?: {
		hook: string;
		howItWorks: string;
		techChoices: string;
		lessonsLearned: string;
	};
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
		status: "active",
		year: 2025,
		github: "https://github.com/bhavv04/terraseed",
		demo: "",
		live: "https://terraseed.onrender.com/",
		image: "/images/projects/terraseed.png",
		featured: true,
		pageContent: {
			hook: "Every patch of land has a window each year where conditions align for vegetation to take hold. Terraseed finds that window — backed by three decades of satellite and reanalysis climate data.",
			howItWorks:
				"The pipeline runs in four stages. First, ERA5 temperature and precipitation data is pulled from the Copernicus CDS, and SMAP soil moisture from NASA Earthdata — 30 years of monthly NetCDF files. xarray handles these natively; loading that volume of gridded climate data into pandas would be the wrong tool entirely. The data is downsampled and cleaned into a feature table, then a weighted composite scoring function runs across the full global grid — temperature and rainfall at 30% each, soil moisture and frost risk at 20% each. The Plotly Dash dashboard sits on top, letting you enter any coordinates and see a month-by-month planting calendar with the optimal window highlighted.",
			techChoices:
				"xarray was the only real option for multidimensional NetCDF climate arrays — it understands the lat/lon/time dimensions natively. rioxarray handles the geospatial reprojection on top of that. scikit-learn for the scoring model because the composite function didn't need anything heavier. Plotly Dash over a React frontend because the dashboard needed to stay in Python — keeping the data pipeline and the UI in the same language meant no API layer to maintain.",
			lessonsLearned:
				"The ERA5 reprojection was silently wrong for longer than I'd like to admit — the scores looked plausible for temperate regions but were off at high latitudes because the grid wasn't being handled correctly during downsampling. Plausible-looking output is the hardest bug to catch. The roadmap item for a 1990–2005 vs 2006–2020 score shift map started as a curiosity and turned into the most interesting thing in the project — climate signal is visible in the scores if you split the dataset in half."
		}
	},
	{
		id: "deadzone",
		title: "Dead Zones on a Clock",
		tagline: "Tracing oxygen collapse back to a cornfield",
		description: "Models 40 years of Gulf of Mexico hypoxic dead zone data, tracing the causal chain from Midwest agriculture to ocean oxygen collapse.",
		longDescription:
			"Combines annual NOAA cruise measurements, USGS river nutrient loading, and sea surface temperature into a Random Forest regression model predicting annual dead zone size. Spring nitrogen load accounts for 80% of model decisions. Identifies anomalous years driven by hurricanes and droughts, and visualizes the dead zone pulsing across four decades with animated charts.",
		tags: ["data engineering", "machine learning", "research"],
		tech: ["Python", "scikit-learn", "xarray", "cartopy"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/deadzone",
		demo: "https://deadzone-b3eq.onrender.com/",
		live: "https://deadzone-b3eq.onrender.com/",
		image: "/images/projects/deadzone.png",
		featured: true
	},
	{
		id: "collatz-viz",
		title: "Collatz Conjecture Explorer",
		tagline: "Nobody has proved it. here's what it looks like",
		description: "Interactive visualization of stopping-time landscapes for the Collatz Conjecture, with original research angles on sequence behavior.",
		longDescription:
			"A research-driven tool that maps stopping times across number ranges, revealing structural patterns in the Collatz sequence. Built to support original mathematical research, featuring zoom, density plots, and export capabilities.",
		tags: ["research", "web dev", "algorithms"],
		tech: ["TypeScript", "React"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/collatz-explorer",
		demo: "",
		image: "",
		featured: false
	},
	{
		id: "mapreduce-engine",
		title: "Custom MapReduce Engine",
		tagline: "Hadoop is overkill. built it anyway, from scratch",
		description: "A Python implementation of the MapReduce programming model from scratch, applied to large-scale document processing.",
		longDescription:
			"Built entirely without Hadoop or Spark, this engine implements the core MapReduce paradigm in Python — including shuffle, sort, and reduce phases — and benchmarks it against MongoDB aggregation pipelines on real datasets.",
		tags: ["data engineering", "systems"],
		tech: ["Python", "MongoDB"],
		status: "completed",
		year: 2025,
		github: "https://github.com/bhavv04/creduce",
		demo: "",
		image: "",
		featured: false
	},
	{
		id: "healthcare-patient-management",
		title: "Healthcare Patient Management",
		tagline: "Vitals, thresholds, and alarms — two portals, one system",
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
		id: "calvin-hobbes-api",
		title: "Calvin & Hobbes Quote API",
		tagline: "Philosophy from a six-year-old, on demand",
		description: "A Flask API serving random Calvin and Hobbes quotes as JSON, built for easy integration into projects that need a touch of whimsy.",
		longDescription:
			"A lightweight REST API built with Flask that returns random quotes from Bill Watterson's Calvin and Hobbes. Quotes are stored in a structured JSON file and served via a single endpoint. Designed for easy embedding into portfolios, bots, or any project that could use some philosophical wisdom from a six-year-old and his tiger.",
		tags: ["web dev", "systems"],
		tech: ["Python", "Flask"],
		status: "completed",
		year: 2024,
		github: "https://github.com/bhavv04/calandhobbes-quoter",
		demo: "https://calandhobbes-quoter-production.up.railway.app/",
		image: "/images/projects/calandhobbes.jpg",
		featured: false
	},
	{
		id: "thunderhead",
		title: "Thunderhead",
		tagline: "Silent observation. no captchas. no cloudflare.",
		description: "A lightweight reverse proxy that scores incoming HTTP requests to detect and mitigate bot traffic without third-party services.",
		longDescription:
			"Thunderhead sits in front of your server and scores every request 0–100 using behavioral signals — robots.txt violations, sequential path crawling, request rate, and suspicious headers. Below 40 it passes through; above 40 it tarpits with a configurable delay; above 75 it returns 403. No JS challenges, no CAPTCHAs — just silent observation and graduated responses. All decisions log as structured JSON.",
		tags: ["systems"],
		tech: ["Go", "net/http", "Redis", "Docker"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/thunderhead",
		demo: "",
		live: "https://getthunderhead.vercel.app/",
		image: "/images/projects/thunderhead.png",
		featured: true
	},
	{
		id: "solace",
		title: "Solace",
		tagline: "Mapping where toronto burns, and what it takes to cool it",
		description:
			"Urban heat island analysis pipeline built on a decade of NASA satellite data, modeling the tree canopy needed to cool Toronto neighbourhoods by 2°C.",
		longDescription:
			"Solace downloads a decade of NASA MODIS daily land surface temperature tiles, converts and reprojects them to Toronto's boundary, then computes mean summer LST across all 158 neighbourhoods via zonal statistics. An OLS regression extracts a cooling coefficient — degrees per 1% canopy increase — and the interactive Plotly Dash dashboard lets you simulate city-wide tree cover increases and their projected cooling effect per neighbourhood.",
		tags: ["data engineering", "research"],
		tech: ["Python", "Plotly Dash", "GDAL", "scikit-learn"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/solace",
		demo: "",
		image: "/images/projects/solace.png",
		featured: true
	},
	{
		id: "lacunae",
		title: "Lacunae",
		tagline: "Reconstructing what the scanner never collected",
		description:
			"A U-Net model that reconstructs diagnostically useful MRI images from undersampled k-space data, reducing scan time without sacrificing image quality.",
		longDescription:
			"MRI machines collect data in k-space — the frequency domain representation of an image. Full sampling is slow and expensive. Lacunae takes fully sampled scans from the fastMRI dataset, artificially masks out portions of k-space to simulate accelerated acquisition, and trains a U-Net to reconstruct the complete image from the undersampled input. Reconstruction quality is evaluated against ground truth using SSIM and PSNR.",
		tags: ["machine learning", "research"],
		tech: ["Python", "PyTorch"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/lacunae",
		demo: "",
		image: "/images/projects/lacunae.jpeg",
		featured: true
	},
	{
		id: "bug-reporting-system",
		title: "Bug Tracker",
		tagline: "Structured issue reporting. no noise. no bloat.",
		description: "A lightweight bug reporting and tracking system for small teams and solo developers.",
		longDescription:
			"A self-hosted bug reporting system that captures structured issue reports — severity, stack traces, environment metadata, and reproduction steps — and surfaces them in a minimal dashboard. No third-party integrations, no seat-based pricing. Just a clean intake form, a prioritized queue, and JSON exports.",
		tags: ["systems", "productivity"],
		tech: ["Python", "SQLite", "React", "Docker"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/bug-report",
		demo: "",
		image: "",
		featured: false
	},
	{
		id: "redis-c",
		title: "Custom Redis",
		tagline: "Redis, from scratch, in C.",
		description: "A ground-up implementation of a Redis-compatible in-memory key-value store written in C.",
		longDescription:
			"Redic implements the core Redis wire protocol (RESP) and a subset of commands — GET, SET, DEL, EXPIRE, TTL, LPUSH, LPOP — in plain C. Built to understand how Redis actually works: event loops, hash table internals, memory layout, and socket I/O without libuv or any async framework. Connects with any standard Redis client.",
		tags: ["systems", "research"],
		tech: ["C", "POSIX sockets", "RESP protocol", "Make"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/redis",
		demo: "",
		image: "",
		featured: false
	}
];
