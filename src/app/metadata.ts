import type { Metadata } from "next";

const title = "Bhavdeep’s Portfolio";
const description = "I'm Bhavdeep Arora. I'm a Computer Science student at Toronto Metropolitan University";

export const metadata: Metadata = {
	title,
	description,

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

	metadataBase: new URL("https://bhavdeep.dev"),

	openGraph: {
		title,
		description,
		url: "https://bhavdeep.dev",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Bhavdeep Arora"
			}
		]
	},

	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/opengraph-image.png"]
	}
};
