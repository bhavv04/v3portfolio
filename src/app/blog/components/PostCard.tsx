import Link from "next/link";
import type { PostMeta } from "@/lib/blog/posts";

interface PostCardProps {
	post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
	const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});

	return (
		<Link href={`/blog/${post.slug}`} className="group block rounded-xl bg-neutral-900 p-6 transition-all duration-200 hover:scale-[1.01]">
			<div className="flex items-start justify-between gap-4">
				<div className="flex flex-col gap-2">
					<time className="text-sm text-white/40">{formattedDate}</time>
					<h2 className="transition-colors group-hover:text-white">{post.title}</h2>
					<p className="line-clamp-2 text-white/50">{post.excerpt}</p>
				</div>
			</div>
		</Link>
	);
}
