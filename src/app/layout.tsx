import "./globals.css";
import "katex/dist/katex.min.css";
import { getSearchIndex } from "@/lib/search/getSearchIndex";
import { RootLayoutClient } from "@/components/layout/RootLayoutClient";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	const searchIndex = getSearchIndex();

	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="relative font-sans 2xl:zoom-[1.1]">
				<RootLayoutClient searchIndex={searchIndex}>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
