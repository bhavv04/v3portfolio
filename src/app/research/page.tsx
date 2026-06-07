import type { Metadata } from "next";
import ResearchPage from "./researchPage";
import { metadata as siteMetadata } from "@/app/metadata";

export const metadata: Metadata = {
	...siteMetadata,
	title: "Bhav's Research",
	description: "Case studies in climate data science and quantitative finance - methodology, findings, and technical depth."
};

export default function Page() {
	return <ResearchPage />;
}
