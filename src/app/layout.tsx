"use client";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/views/Navbar";
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
			<body className="relative font-satoshi 2xl:zoom-[1.1]">
				<CatProvider>
					<ScrollBackground />
					<Oneko />
					<ResponsiveContainer>
						<main className="p-8">
							<Navbar />
							<div className="p-4" />
							{children}
						</main>
					</ResponsiveContainer>
					<Analytics />
				</CatProvider>
			</body>
		</html>
	);
}
