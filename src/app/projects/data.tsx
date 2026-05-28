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
		id: "verso",
		title: "Verso",
		tagline: "Tinder for books. Swipe right to build your shelf",
		description:
			"A full-stack web app that lets you discover books through a swipe-based interface, tracking preferences by genre and preventing duplicate cards.",
		longDescription:
			"Verso re-imagines book discovery by replacing overwhelming lists with an elegant, gesture-driven interface. Built with Next.js 15 and Framer Motion, users select preferred genres during onboarding and browse an animated stack of cards fed by the Google Books API. Right swipes instantly commit books to a personal shelf managed via Prisma and a serverless Neon PostgreSQL database, while built-in duplicate prevention guarantees a fresh feed every session.",
		tags: ["software engineering"],
		tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Clerk", "Neon", "Prisma", "Google Books API"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/verso",
		demo: "",
		image: "",
		featured: true,
		pageContent: {
			hook: "We stop reading because finding the next book feels like work. Verso turns discovery into a fluid, animated experience where your next favorite read is just a swipe away.",
			howItWorks:
				"The application logic branches into three major layers. First, Clerk securely manages user identity and maps authentication tokens to internal data profiles. Upon onboarding, genre preferences are captured and saved to a Neon PostgreSQL instance. The core discovery feed runs through a specialized internal proxy route that queries the Google Books API, cross-references the user's historical swipe log to isolate unseen material, and delivers a clean payload. Framer Motion tracks gesture velocity and coordinates on screen to power the physical card drag interaction, rendering reactive visual indicators for likes and passes in real time.",
			techChoices:
				"Next.js 15 was chosen to exploit the speed and simplicity of Server Actions and optimized route handlers. Prisma 7 handles type-safe database schemas natively with Neon's serverless Postgres connection pooling. Framer Motion was the clear choice for the gesture system because its layout animations handle physical card stacks cleanly without losing smooth frame rates on mobile screens. Clerk allowed us to offload secure session architecture entirely, leaving the database focused solely on user interactions and shelves.",
			lessonsLearned:
				"State management across an infinite card stack gets chaotic quickly if you let the UI re-render the whole array on every gesture. Isolating the active card animations from the underlying data pipeline fixed early dropped frames. Managing duplicate prevention at the API level instead of doing filtering in client-side state reduced initial layout lag and made sure network payloads stayed light. The upcoming integration of the Claude API for AI-generated text blurbs will change how users interact with the summaries by making them hyper-personalized to their reading tastes."
		}
	},
	{
		id: "deadzone",
		title: "Dead Zones on a Clock",
		tagline: "Tracing oxygen collapse back to a cornfield",
		description: "Models 40 years of Gulf of Mexico hypoxic dead zone data, tracing the causal chain from Midwest agriculture to ocean oxygen collapse.",
		longDescription:
			"Combines annual NOAA cruise measurements, USGS river nutrient loading, and sea surface temperature into a Random Forest regression model predicting annual dead zone size. Spring nitrogen load accounts for 80% of model decisions. Identifies anomalous years driven by hurricanes and droughts, and visualizes the dead zone pulsing across four decades with animated charts.",
		tags: ["machine learning", "data engineering", "data visualization"],
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
		tags: ["software engineering"],
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
		tags: ["data engineering", "systems programming"],
		tech: ["Python", "MongoDB"],
		status: "active",
		year: 2025,
		github: "https://github.com/bhavv04/creduce",
		demo: "",
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
		tags: ["software engineering"],
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
		tags: ["systems programming", "software engineering"],
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
		id: "lacunae",
		title: "Lacunae",
		tagline: "Reconstructing what the scanner never collected",
		description:
			"A U-Net model that reconstructs diagnostically useful MRI images from undersampled k-space data, reducing scan time without sacrificing image quality.",
		longDescription:
			"MRI machines collect data in k-space — the frequency domain representation of an image. Full sampling is slow and expensive. Lacunae takes fully sampled scans from the fastMRI dataset, artificially masks out portions of k-space to simulate accelerated acquisition, and trains a U-Net to reconstruct the complete image from the undersampled input. Reconstruction quality is evaluated against ground truth using SSIM and PSNR.",
		tags: ["machine learning", "computer vision"],
		tech: ["Python", "PyTorch"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/lacunae",
		demo: "",
		image: "/images/projects/lacunae.jpeg",
		featured: true
	},
	{
		id: "terraseed",
		title: "Terraseed",
		tagline: "30 years of climate data, one planting score",
		description: "Predicts optimal planting windows for any location on Earth using 30 years of ERA5 climate data and a composite scoring model.",
		longDescription:
			"Terraseed processes three decades of satellite and reanalysis climate data — temperature, precipitation, soil moisture, and frost risk — into a single planting score across the global grid. Features an interactive Plotly Dash dashboard where users can enter coordinates and get a month-by-month planting calendar with the optimal window highlighted automatically.",
		tags: ["machine learning", "data engineering", "data visualization"],
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
		id: "solace",
		title: "Solace",
		tagline: "Mapping where toronto burns, and what it takes to cool it",
		description:
			"Urban heat island analysis pipeline built on a decade of NASA satellite data, modeling the tree canopy needed to cool Toronto neighbourhoods by 2°C.",
		longDescription:
			"Solace downloads a decade of NASA MODIS daily land surface temperature tiles, converts and reprojects them to Toronto's boundary, then computes mean summer LST across all 158 neighbourhoods via zonal statistics. An OLS regression extracts a cooling coefficient — degrees per 1% canopy increase — and the interactive Plotly Dash dashboard lets you simulate city-wide tree cover increases and their projected cooling effect per neighbourhood.",
		tags: ["data engineering", "data visualization"],
		tech: ["Python", "Plotly Dash", "GDAL", "scikit-learn"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/solace",
		demo: "",
		image: "/images/projects/solace.png",
		featured: true
	},
	{
		id: "redis-c",
		title: "Custom Redis",
		tagline: "Redis, from scratch, in C.",
		description: "A ground-up implementation of a Redis-compatible in-memory key-value store written in C.",
		longDescription:
			"Redic implements the core Redis wire protocol (RESP) and a subset of commands — GET, SET, DEL, EXPIRE, TTL, LPUSH, LPOP — in plain C. Built to understand how Redis actually works: event loops, hash table internals, memory layout, and socket I/O without libuv or any async framework. Connects with any standard Redis client.",
		tags: ["systems programming"],
		tech: ["C", "POSIX sockets", "RESP protocol", "Make"],
		status: "completed",
		year: 2026,
		github: "https://github.com/bhavv04/redis",
		demo: "",
		image: "",
		featured: false
	},
	{
		id: "gaia",
		title: "Gaia",
		tagline: "Cross-domain cascade failure prediction in ecological systems",
		description:
			"Models multi-layered environmental dependencies—dead zones, food webs, and atmospheric drift—to predict how local structural collapses cascade across global ecological boundaries.",
		longDescription:
			"Gaia maps interconnected environmental systems as a multi-layer directed graph to simulate and predict ecosystem collapse thresholds. By combining marine hypoxic timeline data, trophic food web dependencies, and atmospheric tracer vectors, the engine evaluates how a localized resource failure propagates across domain borders. It moves past single-variable climate monitoring to map the structural vulnerability of the biosphere's overlapping networks.",
		tags: ["machine learning", "data engineering"],
		tech: ["Python", "NetworkX", "PyTorch Geometric", "xarray", "GeoPandas"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/gaia",
		demo: "",
		image: "",
		featured: true,
		pageContent: {
			hook: "Ecosystems don't collapse in isolation. When a marine dead zone chokes out a fishery, the ripple runs through coastal food webs and alters latent nutrient cycles. Gaia models the invisible strings between domains to predict what falls next.",
			howItWorks:
				"The core modeling pipeline ingests heterogeneous data streams into a unified Graph Neural Network (GNN). Marine hypoxia grids are parsed via xarray, regional trophic webs are built from taxomonic interaction databases, and planetary boundary layer winds are treated as advection vectors using atmospheric drift datasets. Gaia projects these as distinct layers in a multiplex network. Node state transitions are calculated using stochastic differential equations, where local resource exhaustion triggers edge-weight degradation across neighboring systems, surfacing hidden choke points where a minor regional anomaly causes systemic cross-domain collapse.",
			techChoices:
				"PyTorch Geometric was chosen to handle the message-passing mechanics across non-Euclidean ecological structures, which standard graph libraries fail to scale. NetworkX handles initial graph construction, topological sorting, and baseline centrality metrics. xarray and GeoPandas manage the heavy spatial-temporal anchoring, ensuring that physical atmospheric drift coordinates align perfectly with localized biological frameworks. Python keeps this entire simulation tightly coupled with existing scientific computing ecosystems.",
			lessonsLearned:
				"The biggest mathematical challenge was tuning the dissipation constants—if the damping effect between layers is too high, cascades vanish; if it's too low, every minor drought triggers a global extinction event. Calibrating these thresholds against historical tipping points, like major oceanic anoxic events, proved that structural topology matters far more than baseline biomass volume. A fragile network structure scrambles an ecosystem much faster than low resource counts do."
		}
	},
	{
		id: "awkrs",
		title: "awk.rs",
		tagline: "awk, rewritten in Rust, without the archaeology",
		description:
			"A Rust implementation of the AWK text-processing language, rebuilding the core pattern-action model from scratch with modern memory safety guarantees.",
		longDescription:
			"awk.rs reimplements the AWK programming language in Rust — covering field splitting, pattern matching, built-in variables, arithmetic, string functions, and the full pattern-action execution loop. The goal was to understand how a line-oriented interpreter actually works at the parser and evaluator level, without the legacy C baggage of the original implementation. Passes the core AWK test suite and handles real-world log processing workloads.",
		tags: ["systems programming"],
		tech: ["Rust"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/awkrs",
		demo: "",
		image: "",
		featured: false
	},
	{
		id: "precursor",
		title: "Precursor",
		tagline: "If oil moves, does energy follow? quantifying the lag.",
		description:
			"Investigates whether commodity momentum statistically precedes sector equity momentum using Granger causality, VAR modeling, and a signal-based backtest.",
		longDescription:
			"Precursor tests the hypothesis that commodities — as upstream inputs to the businesses that consume them — exhibit momentum that leads related equity sectors by a measurable lag. The pipeline constructs rolling momentum signals across WTI, Brent, copper, natural gas, and gold, then runs pairwise Granger causality tests against their corresponding equity ETFs (XLE, XLB, GDX). Significant causal relationships are assembled into a weighted DAG to map spillover structure across the asset universe. A long/short backtest using the commodity signal at the optimal Granger lag evaluates whether the predictive precedence is actually exploitable, reported via annualised Sharpe, max drawdown, and hit rate.",
		tags: ["machine learning", "data engineering"],
		tech: ["Python", "pandas", "statsmodels", "networkx", "yfinance", "matplotlib", "seaborn"],
		status: "active",
		year: 2026,
		github: "https://github.com/bhavv04/precursor",
		demo: "",
		image: "",
		featured: true,
		pageContent: {
			hook: "Commodities are upstream inputs to the businesses that consume them. If oil starts trending, energy company revenues should follow — but with a lag. Precursor asks whether that lag is real, measurable, and tradeable.",
			howItWorks:
				"For each asset pair, rolling log-return momentum signals are computed across three lookback windows (5, 10, 20 days). Granger causality is tested at lag orders 1–5 using an F-test comparing restricted and unrestricted VAR models — the null being that the commodity series adds no predictive power beyond the equity's own history. Significant pairs (α = 0.05) are wired into a directed acyclic graph weighted by F-statistic, exposing which commodities are the strongest leading indicators and which equity sectors receive the most predictive signal. A long/short backtest then takes positions in each equity ETF based on the sign of the commodity momentum signal at the optimal lag, evaluating performance on a held-out 20% test set.",
			techChoices:
				"statsmodels handles the VAR estimation and Granger tests natively with well-documented F-test machinery. networkx builds the DAG and computes centrality metrics without overhead. yfinance pulls daily OHLCV going back to 2010 — roughly 3,500 trading days — giving enough history for stable VAR estimation and a meaningful out-of-sample split. matplotlib and seaborn handle publication-quality figure export for the final research notebook.",
			lessonsLearned:
				"The DAG structure was the most revealing output. The expectation was a clean commodity-to-equity hierarchy, but the graph exposed indirect chains — oil momentum flowing through copper into materials — that weren't part of the original hypothesis. Granger causality is also sensitive to the lag order selection; AIC minimisation consistently preferred shorter lags than intuition suggested, which tightened the backtest signals considerably."
		}
	}
];
