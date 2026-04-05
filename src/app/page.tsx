import { HeroSection } from "@/views/Hero";
//import { TimelineView } from "@/views/Timeline";
import { ProjectsView } from "@/views/Projects";
import { Skills } from "@/views/Skills";
import Footer from "@/views/Footer";

export default function Home() {
	return (
		<div className="">
			<HeroSection />

			<div className="-my-10" />

			<Skills />

			<div className="my-16" />

			<ProjectsView />

			<div className="my-24" />

			<Footer />
		</div>
	);
}
