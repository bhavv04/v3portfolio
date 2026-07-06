import { getSortedPostsMeta } from "@/lib/blog/posts";
import PostCard from "@/app/blog/components/PostCard";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { GiPolarBear } from "react-icons/gi";

export default function BlogPage() {
	const posts = getSortedPostsMeta();
	return (
		<div>
			<div className="fade-in-up">
				<SectionTitle
					text={
						<span className="flex items-center gap-2">
							<GiPolarBear />
							<span>Logbook</span>
						</span>
					}
				/>

				<p className="mb-4 mt-2">an idiot&apos;s field notes</p>
			</div>

			{/* Cards */}
			<div className="mt-6 flex flex-col gap-3">
				{posts.map((post, i) => (
					<div key={post.slug} className="fade-in-up" style={{ "--delay-index": i } as React.CSSProperties}>
						<PostCard post={post} />
					</div>
				))}
			</div>
		</div>
	);
}
