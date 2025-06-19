import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/views/Navbar";
import { GridBackground } from "@/components/graphics/GridBackground";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";
import Oneko from "@/components/ui/oneko";

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

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
			</head>
			<body className="relative font-mono antialiased">
				<GridBackground className="absolute inset-0 h-full min-h-screen w-full" />

				<Oneko />

				<ResponsiveContainer>
					<main className="p-8 font-mono">
						<Navbar />

						<div className="my-8 sm:my-24" />

						{children}
					</main>
				</ResponsiveContainer>
			</body>
		</html>
	);
}
