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
	}
];
