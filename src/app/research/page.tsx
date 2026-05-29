import { SectionTitle } from "@/components/typography/SectionTitle";
import { GiMountainClimbing } from "react-icons/gi";
import ResearchFilter from "@/app/research/components/filter";

export const metadata = {
	title: "Research | Bhavdeep",
	description: "Case studies in climate data science and quantitative finance - methodology, findings, and technical depth."
};

export default function ResearchPage() {
	return (
		<main className="min-h-screen pb-16">
			{" "}
			{/* pb is for navbar for mobile */}
			{/* Header */}
			<div className="">
				<SectionTitle
					text={
						<span className="fade-in-up flex items-center gap-2" style={{ "--delay-index": 0 } as React.CSSProperties}>
							<GiMountainClimbing />
							<span>Explorations</span>
						</span>
					}
				/>
				<p className="fade-in-up mt-2 text-sm">research notes, experiments, and technical investigations.</p>
			</div>
			{/* Filtered cards */}
			<ResearchFilter />
		</main>
	);
}
