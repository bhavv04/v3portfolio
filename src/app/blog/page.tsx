import type { Metadata } from "next";
import BlogPage from "./blogView";
import { metadata as siteMetadata } from "@/app/metadata";

export const metadata: Metadata = {
	...siteMetadata,
	title: "Bhav's Thoughts and Ideas",
	description: "Place where I keep my thoughs and ideas."
};

export default function Page() {
	return <BlogPage />;
}
