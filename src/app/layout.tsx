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
				<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
			</head>
			<body className="relative font-mono antialiased">
				<CatProvider>
					<ScrollBackground />

					<Oneko />

					<ResponsiveContainer>
						<main className="p-8 font-mono">
							<Navbar />

							<div className="my-8 sm:my-24" />

							{children}
						</main>
					</ResponsiveContainer>
					<Analytics />
				</CatProvider>
			</body>
		</html>
	);
}
