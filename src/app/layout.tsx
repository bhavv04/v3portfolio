"use client";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/views/Navbar";
import Footer from "@/views/Footer";
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer";
import Oneko from "@/components/ui/oneko";
import { ScrollBackground } from "@/components/graphics/ScrollBackground";
import { CatProvider } from "@/context/CatContext";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="relative font-satoshi">
				<CatProvider>
					<ScrollBackground />

					<Oneko />

					<ResponsiveContainer>
						<main className="p-8">
							<Navbar />

							<div className="my-12 sm:my-24" />

							{children}

							<div className="my-12 sm:my-24" />

							<Footer />
						</main>
					</ResponsiveContainer>
					<Analytics />
				</CatProvider>
			</body>
		</html>
	);
}
