import type { Metadata } from "next";
import ProjectView from "./projectView";
import { metadata as siteMetadata } from "@/app/metadata";

export const metadata: Metadata = {
	...siteMetadata,
	title: "Projects | Bhavdeep",
	description: "Software engineering, machine learning, and systems projects exploring AI, security, and data-driven systems."
};

export default function Page() {
	return <ProjectView />;
}
