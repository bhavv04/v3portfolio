// @/views/Activity.tsx
import BlogActivityCard from "@/components/activity/BlogActivityCard";
import GithubActivityCard from "@/components/activity/GithubActivityCard";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { getSortedPostsMeta } from "@/lib/blog/posts";
import { getLatestCommits, getLanguages } from "@/lib/activity/activity";
import { PiPersonSimpleHikeBold } from "react-icons/pi";

export default async function Activity() {
	const posts = getSortedPostsMeta().slice(0, 4);
	const [commits, languages] = await Promise.all([getLatestCommits(), getLanguages()]);

	return (
		<section className="bg-transparent">
			<SectionTitle
				text={
					<span className="flex items-center gap-2 text-3xl">
						<PiPersonSimpleHikeBold />
						<span>Recent Activity</span>
					</span>
				}
			/>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<GithubActivityCard commits={commits} languages={languages} />
				<BlogActivityCard posts={posts} />
			</div>
		</section>
	);
}
