import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeStarryNight from "rehype-starry-night";

/** @type {import("next").NextConfig} */
const config = {
	output: "export",
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	reactStrictMode: true,
	images: {
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeStarryNight]
	}
});

export default withMDX(config);