import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { caseStudies } from "@/app/research/data";

const researchDirectory = path.join(process.cwd(), "src/content/research");

export function getAllSlugs(): string[] {
	return caseStudies.filter((s) => s.hasCaseStudy).map((s) => s.slug);
}

export async function getResearchContentBySlug(slug: string) {
	const fullPath = path.join(researchDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const processed = await remark().use(remarkGfm).use(html).process(content);

	return {
		contentHtml: processed.toString(),
		highlights: (data.highlights as string[]) ?? []
	};
}
