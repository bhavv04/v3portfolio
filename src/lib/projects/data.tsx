import { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
	{
		name: "Thunderhead",
		summary:
			"A lightweight reverse proxy that scores the intent of incoming HTTP requests to detect and mitigate bot traffic — without relying on Cloudflare or third-party services.",
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
				name: "verrere Genre Selection",
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
		name: "Ember",
		summary: "A calorie deficit visualizer that lets users set a weight loss goal, log their daily intake, and gamify their progress.",
		technologies: [Technology.NextJS, Technology.TypeScript, Technology.TailwindCSS, Technology.PostgreSQL, Technology.Prisma],
		links: {
			github: "https://github.com/bhavv04/ember",
			live: "https://myember.vercel.app/"
		},
		screenshots: [
			{
				name: "Ember Overview",
				mobile: {
					src: "/images/ember/ember1.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/ember/ember1.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Ember 2",
				mobile: {
					src: "/images/ember/ember2.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/ember/ember2.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Ember 3",
				mobile: {
					src: "/images/ember/ember3.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/ember/ember3.png",
					width: 800,
					height: 640
				}
			},
			{
				name: "Ember 4",
				mobile: {
					src: "/images/ember/ember5.png",
					width: 800,
					height: 640
				},
				desktop: {
					src: "/images/ember/ember5.png",
					width: 800,
					height: 640
				}
			}
		],
		type: "bullets",
		bullets: [
			"Built a deficit visualization engine that dynamically burns down a calorie target as users log daily intake",
			"Integrated Clerk for secure authentication with email and Google login, syncing progress across devices",
			"Used Prisma 7 and Neon PostgreSQL to persist daily logs and weight loss goals with instant updates",
			"Designed a clean, responsive UI with shadcn/ui and Tailwind CSS for fast, accessible interactions",
			"Deployed on Vercel with Next.js 16 App Router for server-side rendering and optimized performance"
		]
	}
];
