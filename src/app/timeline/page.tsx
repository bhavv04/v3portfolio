import type { Metadata } from "next";
import TimelineView from "./timelineView";
import { metadata as siteMetadata } from "@/app/metadata";

export const metadata: Metadata = {
	...siteMetadata,
	title: "Bhav's Journey",
	description: "Journey through education, work experience, and technical growth over time."
};

export default function Page() {
	return <TimelineView />;
}
