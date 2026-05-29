import Terminal from "@/app/about/terminal/terminal";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { GiWillowTree } from "react-icons/gi";

export default function AboutView() {
	return (
		<div className="pb-16">
			<div className="mx-auto max-w-2xl">
				{/* Header */}
				<div className="fade-in-up">
					<SectionTitle
						text={
							<span className="flex items-center gap-2">
								<GiWillowTree />
								<span>Whoami</span>
							</span>
						}
					/>

					<p className="mb-4 mt-2">
						i&apos;ve kept this section interactive, no repeated bio here. Type <span className="italic text-white/60">help</span> to get started.
					</p>
				</div>

				{/* Terminal */}
				<Terminal />
			</div>
		</div>
	);
}
