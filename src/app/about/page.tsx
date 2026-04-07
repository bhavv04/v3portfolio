import Terminal from "@/app/about/terminal";
import { SectionTitle } from "@/components/typography/SectionTitle";

export default function About() {
	return (
		<div className="mt-0 md:-mt-12">
			<div className="mx-auto max-w-2xl">
				{/* Header */}
				<div className="fade-in-up my-4 sm:my-4">
					<SectionTitle text="hey there" />
					<p className="mt-3 italic leading-relaxed text-slate-400">
						I&apos;ve kept this section interactive, no repeated bio here. Type <span className="text-white/60">help</span> to get started.
					</p>
				</div>

				{/* Terminal */}
				<Terminal />
			</div>
		</div>
	);
}
