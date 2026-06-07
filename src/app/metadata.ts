import type { Metadata } from "next";

const title = "Bhav's Portfolio";
const description =
	"Software engineer based in Toronto, specializing in full-stack development and embedded system security. Currently studying at Toronto Metropolitan University.";

export const metadata: Metadata = {
	title: {
		default: title,
		template: "%s | Bhav's Portfolio" // sub-pages show e.g. "About | Bhav's Portfolio"
	},
	description,

	authors: [{ name: "Bhavdeep Arora", url: "https://bhavdeep.dev" }],

	keywords: [
		"Bhavdeep Arora",
		"Software Engineer",
		"Full Stack Developer",
		"Embedded System Security",
		"Toronto Metropolitan University",
		"Toronto",
		"React",
		"Next.js"
	],

	metadataBase: new URL("https://bhavdeep.dev"),

	alternates: {
		canonical: "/"
	},

	robots: {
		index: true,
		follow: true
	},

	openGraph: {
		title,
		description,
		url: "https://bhavdeep.dev",
		siteName: "Bhav's Portfolio",
		type: "website",
		locale: "en_CA",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Bhavdeep Arora — Software Engineer"
			}
		]
	},

	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/opengraph-image.png"],
		creator: "@yourhandle" // replace or remove if you don't have one
	}
};
