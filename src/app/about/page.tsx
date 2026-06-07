import type { Metadata } from "next";
import AboutView from "./aboutView";
import { metadata as siteMetadata } from "@/app/metadata";

export const metadata: Metadata = {
	...siteMetadata,
	title: "Bhav's Info",
	description: "Interactive about page featuring a terminal-style interface and personal introduction."
};

export default function Page() {
	return <AboutView />;
}
