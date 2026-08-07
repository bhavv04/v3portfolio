import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import("next").NextConfig} */
const config = {
	output: "export",
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	reactStrictMode: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.mzstatic.com"
			},
			{
				protocol: "https",
				hostname: "covers.openlibrary.org"
			}
		]
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]]
	}
});

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true"
});

export default withBundleAnalyzer(withMDX(config));
