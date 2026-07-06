import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog/posts";

export async function generateStaticParams() {
	return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});

	return (
		<article className="mx-auto max-w-4xl pb-16">
			<Link
				href="/blog"
				className="fade-in-up mb-5 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
				style={{ "--delay-index": 0 } as React.CSSProperties}
			>
				<ArrowLeft size={16} />
				Back to Logbook
			</Link>

			<header className="fade-in-up mb-4" style={{ "--delay-index": 1 } as React.CSSProperties}>
				<time className="text-sm italic text-white/70">{formattedDate}</time>
				<h1 className="mt-2 text-3xl font-bold text-white">{post.title}</h1>
			</header>

			<div
				className="fade-in-up prose prose-invert max-w-none prose-headings:mb-2 prose-headings:mt-6 prose-code:text-white prose-pre:bg-stone-900"
				style={{ "--delay-index": 2 } as React.CSSProperties}
				dangerouslySetInnerHTML={{ __html: post.contentHtml }}
			/>
		</article>
	);
}
