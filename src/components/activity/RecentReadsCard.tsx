// @/components/activity/RecentReadsCard.tsx
import Image from "next/image";
import type { Read } from "@/lib/activity/reads";
import { FaBookReader } from "react-icons/fa";

export default function RecentReadsCard({ reads }: { reads: Read[] }) {
	return (
		<div className="rounded-2xl bg-stone-900 p-4 backdrop-blur-sm">
			<h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-white/60">
				<FaBookReader className="text-base" />
				Recent Reads
			</h3>
			<ul className="flex flex-col gap-2">
				{reads.map((read) => {
					const content = (
						<div className="flex items-center gap-3">
							<div className="relative h-14 w-10 overflow-hidden rounded-xs">
								<Image src={read.cover} alt={read.title} fill className="object-cover" />
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-white">{read.title}</p>
								<p className="truncate text-xs text-white/50">{read.author}</p>
							</div>
						</div>
					);

					return (
						<li key={read.id}>
							{read.url ? (
								<a href={read.url} target="_blank" rel="noopener noreferrer" className="block rounded-lg p-1 transition hover:bg-white/10">
									{content}
								</a>
							) : (
								<div className="p-1">{content}</div>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
