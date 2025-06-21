import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bhavdeep Arora",
	description: "I'm Bhavdeep Arora. I'm a Computer Science student at Toronto Metropolitan University",
	authors: { name: "Bhavdeep Arora" },
	keywords: [
		"Bhavdeep Arora",
		"Software engineer",
		"SWE",
		"Developer",
		"Full stack",
		"Embedded System Security",
		"Toronto Metropolitan University",
		"Student"
	],
	metadataBase: new URL("https://bhavdeep.vercel.app"),
	openGraph: {
		title: "Bhavdeep Arora",
		description: "I'm Bhavdeep Arora. I'm a Computer Science student at Toronto Metropolitan University",
		url: "https://bhavdeep.vercel.app",
		images: "/opengraph-image.png"
	}
};
