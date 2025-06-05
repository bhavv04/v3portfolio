import "./globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/views/Navbar";
import localFont from "next/font/local";
import { GridBackground } from "@/components/graphics/GridBackground";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";

const clashDisplay = localFont({
	src: "./fonts/ClashDisplay-Variable.woff2",
	variable: "--font-clash-display",
	weight: "200 700"
});

const satoshi = localFont({
	src: "./fonts/Satoshi-Variable.woff2",
	variable: "--font-satoshi",
	weight: "300 900"
});

export const metadata: Metadata = {
	title: "Bhavdeep Arora",
	description: "I'm Bhavdeep Arora. I'm a Computer Science student at Toronto Metropolitan University",
	authors: { name: "Bhavdeep Arora" },
	keywords: ["Bhavdeep Arora", "Software engineer", "SWE", "Developer", "Full stack","Embedded System Security", "Toronto Metropolitan University", "Student"],
	metadataBase: new URL("https://www.bhavdeep.vercel.com"),
	openGraph: {
		title: "Bhavdeep Arora",
		description: "I'm Bhavdeep Arora. I'm a Jr. SDE at Amazon and Computer Science student at Oakland University",
		url: "https://www.gavindhondt.com",
		images: "/opengraph-image.png"
	}
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<body className={`${clashDisplay.variable} ${satoshi.variable} relative antialiased`}>
				<GridBackground className="absolute inset-0 h-full min-h-screen w-full" />

				<ResponsiveContainer>
					<main className="p-8 font-satoshi">
						<Navbar />

						<div className="my-8 sm:my-24" />

						{children}
					</main>
				</ResponsiveContainer>
			</body>
		</html>
	);
}
