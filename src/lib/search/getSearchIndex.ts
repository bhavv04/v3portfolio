// lib/search/getSearchIndex.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type SearchItemType = "post" | "project" | "research" | "page";

export interface SearchItem {
	id: string;
	title: string;
	description: string;
	url: string;
	type: SearchItemType;
	icon?: string;
}

const CONTENT_MAP: { dir: string; urlPrefix: string; type: SearchItemType; allowedSlugs?: string[] }[] = [
	{
		dir: "src/content/projects",
		urlPrefix: "/projects",
		type: "project",
		allowedSlugs: ["thunderhead", "funes", "groat"]
	},
	{
		dir: "src/content/research",
		urlPrefix: "/research",
		type: "research",
		allowedSlugs: ["precursor", "lacunae"]
	},
	{ dir: "src/content/blog", urlPrefix: "/blog", type: "post" } // no allowlist = show all
];

function readMarkdownDir({ dir, urlPrefix, type, allowedSlugs }: (typeof CONTENT_MAP)[number]): SearchItem[] {
	const fullDir = path.join(process.cwd(), dir);
	if (!fs.existsSync(fullDir)) return [];

	const allowSet = allowedSlugs ? new Set(allowedSlugs) : null;

	return fs
		.readdirSync(fullDir)
		.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
		.map((file) => file.replace(/\.mdx?$/, ""))
		.filter((slug) => !allowSet || allowSet.has(slug))
		.map((slug) => {
			const file = fs.existsSync(path.join(fullDir, `${slug}.md`)) ? `${slug}.md` : `${slug}.mdx`;
			const raw = fs.readFileSync(path.join(fullDir, file), "utf-8");
			const { data } = matter(raw);

			return {
				id: `${type}-${slug}`,
				title: data.title ?? slug,
				description: data.description ?? "",
				url: `${urlPrefix}/${slug}`,
				type
			};
		});
}

const staticPages: SearchItem[] = [
	{ id: "home", title: "Home", description: "", url: "/", type: "page", icon: "home" },
	{ id: "projects-page", title: "Projects", description: "", url: "/projects", type: "page", icon: "projects" },
	{ id: "research-page", title: "Research", description: "", url: "/research", type: "page", icon: "research" }
];

export function getSearchIndex(): SearchItem[] {
	const contentItems = CONTENT_MAP.flatMap(readMarkdownDir);
	return [...staticPages, ...contentItems];
}
