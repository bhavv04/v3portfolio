import { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
	{
		name: "Thunderhead",
		summary:
			"A lightweight reverse proxy that scores the intent of incoming HTTP requests to detect and mitigate bot traffic - without relying on Cloudflare or third-party services.",
		logo: {
			src: "/images/projects/thunderhead.png",
			width: 128,
			height: 128
		},
		technologies: [Technology.Go, Technology.NextJS, Technology.TypeScript, Technology.Redis, Technology.Javascript, Technology.Nginx],
		links: {
			github: "https://github.com/bhavv04/thunderhead",
			live: "https://getthunderhead.vercel.app/"
		},
		screenshots: [
			{
				name: "Thunderhead Overview",
				mobile: {
					src: "/images/thunderhead/thunderhead1.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/thunderhead/thunderhead1.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Thunderhead Scoring",
				mobile: {
					src: "/images/thunderhead/thunderhead2.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/thunderhead/thunderhead2.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Thunderhead Config",
				mobile: {
					src: "/images/thunderhead/thunderhead3.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/thunderhead/thunderhead3.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Thunderhead Features",
				mobile: {
					src: "/images/thunderhead/thunderhead4.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/thunderhead/thunderhead4.png",
					width: 800,
					height: 640
				}
			}
		],
		type: "bullets",
		bullets: [
			"Passive behavioral scoring engine, no JS challenges or CAPTCHAs",
			"Scores requests 0-100 across signals: robots.txt violations, path crawling, request rate, suspicious headers, and content patterns",
			"Graduated responses: allow (< 40), tarpit with configurable delay (≥ 40), or block 403 (≥ 75)",
			"Structured JSON logging for all proxy decisions",
			"IP, CIDR, and user-agent allowlist support",
			"Config-driven: listen address, upstream URL, thresholds, and tarpit delay all configurable"
		]
	},
	{
		name: "Verrere",
		summary:
			"A full stack web application that lets users discover books through an interactive, swipe-based interface, persist personal shelves, and filter preferences by genre.",
		logo: {
			src: "/images/projects/verrere.png",
			width: 128,
			height: 128
		},
		technologies: [Technology.NextJS, Technology.TypeScript, Technology.TailwindCSS, Technology.PostgreSQL, Technology.Prisma],
		links: {
			github: "https://github.com/bhavv04/verrere",
			live: "https://verrere.vercel.app/"
		},
		screenshots: [
			{
				name: "verrere Landing Page",
				mobile: {
					src: "/images/verrere/verrere1.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/verrere/verrere1.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "verrere Swipe Interface",
				mobile: {
					src: "/images/verrere/verrere2.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/verrere/verrere2.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "verrere Shelf",
				mobile: {
					src: "/images/verrere/verrere3.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/verrere/verrere3.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "verrere Genre Selection",
				mobile: {
					src: "/images/verrere/verrere4.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/verrere/verrere4.png",
					width: 800,
					height: 640
				}
			}
		],
		type: "bullets",
		bullets: [
			"Built a smooth, physics-based card deck with Framer Motion that triggers instant visual feedack as you drag",
			"Connected the Hardcover Books API to cycle through a user's selected genres without stalling or repeating data",
			"Designed a custom REST API proxy that tracks swiped book IDs to ensure users never see the same book twice",
			"Used Prisma and Neon PostgreSQL to save liked books and manage reading shelves instantaneously",
			"Integrated Clerk to handle secure email and Google logins, syncing user shelves across devices seamlessly"
		]
	},
	{
		name: "Groat",
		summary:
			"A self-hosted LLM proxy that cuts your API bill by routing requests to cheaper models and caching semantically-similar responses - a drop-in OpenAI-compatible endpoint with no code changes required.",
		logo: {
			src: "/images/projects/groat.png",
			width: 128,
			height: 128
		},
		technologies: [
			Technology.Rust,
			Technology.Axum,
			Technology.Tokio,
			Technology.SQLite,
			Technology.SQLx,
			Technology.LanceDB,
			Technology.Candle,
			Technology.Docker,
			Technology.Git,
			Technology.Linux
		],
		links: {
			github: "https://github.com/bhavv04/groat",
			live: "https://getgroat.vercel.app/"
		},
		screenshots: [
			{
				name: "Groat Dashboard",
				mobile: {
					src: "/images/groat/groat1.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/groat/groat1.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Groat Semantic Cache",
				mobile: {
					src: "/images/groat/groat2.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/groat/groat2.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Groat Routing Config",
				mobile: {
					src: "/images/groat/groat3.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/groat/groat3.png",
					width: 800,
					height: 640
				}
			}
		],
		type: "bullets",
		bullets: [
			"Semantic cache using bge-small-en-v1.5 embeddings and LanceDB - similarity threshold of 0.95 returns cached responses without hitting the API",
			"Automatic prompt cache injection - detects stable system-prompt prefixes and injects cache_control breakpoints to claim provider-side cached-token discounts",
			"User-defined TOML routing - pins use cases to model tiers instead of relying on a classifier, with automatic cheap-tier routing for structured-output requests with a JSON schema",
			"Retroactive suggestions engine - analyzes logged traffic (~10k request threshold) to surface routing rules with estimated savings, without auto-applying any changes",
			"Cost dashboard showing real-time spend and savings per route",
			"In design: conversation-graph-aware routing (depth/branching factor as routing signals) and speculative prefetching for predictable follow-up requests"
		]
	},
	{
		name: "Funes",
		summary:
			"A local-first CLI tool that indexes your files, notes, and shell history, letting you query your machine's history in plain English - no cloud, no accounts, and no subscription.",
		logo: {
			src: "/images/projects/funes.png",
			width: 128,
			height: 128
		},
		technologies: [
			Technology.Rust,
			Technology.SQLite,
			Technology.Ollama,
			Technology.NextJS,
			Technology.TypeScript,
			Technology.TailwindCSS,
			Technology.Vercel,
			Technology.Git,
			Technology.Linux
		],
		links: {
			github: "https://github.com/bhavv04/funes",
			live: "https://get-funes.vercel.app"
		},
		screenshots: [
			{
				name: "Funes Terminal",
				mobile: {
					src: "/images/funes/funes1.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/funes/funes1.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Funes Documentation Introduction",
				mobile: {
					src: "/images/funes/funes2.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/funes/funes2.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Funes Documentation Installation",
				mobile: {
					src: "/images/funes/funes3.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/funes/funes3.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Funes Documentation Configuration",
				mobile: {
					src: "/images/funes/funes4.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/funes/funes4.png",
					width: 800,
					height: 640
				}
			}
		],
		type: "bullets",
		bullets: [
			"Background daemon watches files, notes, and shell history (bash/zsh/PowerShell) for changes in real time",
			"Chunks indexed content and converts it into vector embeddings locally via Ollama (nomic-embed-text) - nothing leaves the machine",
			"Semantic query engine surfaces the most relevant chunks by meaning, not keyword match, with similarity scores",
			"Optional LLM synthesis mode (--llm) turns raw results into a plain English answer using a local Llama 3 model",
			"SQLite-backed vector storage with manual folder indexing (add), continuous watching (watch), and file exclusion patterns (forget)",
			"Distributed as a Rust CLI via cargo install, with a Next.js docs/marketing site deployed on Vercel"
		]
	}
];
