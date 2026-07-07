import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Project } from "@/app/projects/model";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllSlugs(): string[] {
	const filenames = fs.readdirSync(projectsDirectory);
	return filenames.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export async function getProjectBySlug(slug: string): Promise<Project & { contentHtml: string }> {
	const fullPath = path.join(projectsDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const { data, content } = matter(fileContents);

	const processedContent = await remark().use(html).process(content);
	const contentHtml = processedContent.toString();

	return {
		slug,
		title: data.title,
		tagline: data.tagline,
		github: data.github,
		live: data.live,
		status: data.status,
		featured: data.featured ?? false,
		tech: data.tech ?? [],
		image: data.image,
		description: data.tagline, // or a short frontmatter field, your call
		contentHtml
	} as Project & { contentHtml: string };
}

// For the /projects listing page — doesn't need full HTML content
export function getAllProjects(): Project[] {
	return getAllSlugs().map((slug) => {
		const fullPath = path.join(projectsDirectory, `${slug}.md`);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug,
			title: data.title,
			tagline: data.tagline,
			github: data.github,
			live: data.live,
			status: data.status,
			featured: data.featured ?? false,
			tech: data.tech ?? [],
			image: data.image,
			description: data.description ?? data.tagline
		} as Project;
	});
}
