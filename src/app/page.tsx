import { HeroSection } from "@/views/Hero";
import { TimelineView } from "@/views/Timeline";
import { ProjectsView } from "@/views/Projects";

export default function Home() {
	return (
		<>
			<HeroSection />

			<div className="my-40" />

			<TimelineView />

			<div className="my-24" />

			<ProjectsView />

			<div className="my-24" />

			{/* <Contact /> */}
		</>
	);
}
