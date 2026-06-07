import { HeroSection } from "@/views/Hero";
//import { TimelineView } from "@/views/Timeline";
import { ProjectsView } from "@/views/Projects";
import { ResearchView } from "@/views/Research";
import { Skills } from "@/views/Skills";
import Footer from "@/views/Footer";

export default function Home() {
	return (
		<div className="pb-16 xl:pb-0">
			<HeroSection />
			<div className="-my-12" />
			<Skills />
			<div className="my-12" />
			{/* <TimelineView /> */}
			{/* <div className="my-24" /> */}
			<ProjectsView />
			<div className="my-24" />
			<ResearchView />
			<div className="my-24" />
			<Footer />
		</div>
	);
}
