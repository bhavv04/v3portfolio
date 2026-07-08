import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { caseStudies } from "@/app/research/data";

const researchDirectory = path.join(process.cwd(), "src/content/research");

export function getAllSlugs(): string[] {
	return caseStudies.filter((s) => s.hasCaseStudy).map((s) => s.slug);
}

export async function getResearchContentBySlug(slug: string) {
	const fullPath = path.join(researchDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const processed = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkMath)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeKatex)
		.use(rehypeStringify, { allowDangerousHtml: true })
		.process(content);

	return {
		contentHtml: processed.toString(),
		highlights: (data.highlights as string[]) ?? []
	};
}
