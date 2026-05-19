import { HeroSection } from "@/views/Hero";
//import { TimelineView } from "@/views/Timeline";
import { ProjectsView } from "@/views/Projects";
import { Skills } from "@/views/Skills";
import Footer from "@/views/Footer";

export default function Home() {
	return (
		<div className="">
			<HeroSection />

			<div className="-my-12" />

			<Skills />

			<div className="my-12" />

			{/* <TimelineView /> */}

			{/* <div className="my-24" /> */}

			<ProjectsView />

			<div className="my-24" />

			<Footer />
		</div>
	);
}
