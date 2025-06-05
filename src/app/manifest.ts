import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Bhavdeep Arora Portfolio - CS Student at Toronto Metropolitan University",
		short_name: "Bhavdeep Arora Portfolio",
		description: "I'm Bhavdeep Arora. I'm a Computer Science student at Toronto Metropolitan University",
		start_url: "/",
		display: "standalone",
		background_color: "#070809",
		theme_color: "#070809",
		icons: [
			{
				type: "image/x-icon",
				src: "/favicon.ico",
				sizes: "32x32"
			},
			{
				type: "image/png",
				src: "/icon1.png",
				sizes: "16x16"
			},
			{
				type: "image/png",
				src: "/icon2.png",
				sizes: "32x32"
			},
			{
				type: "image/png",
				src: "/icon3.png",
				sizes: "48x48"
			},
			{
				type: "image/png",
				src: "/icon4.png",
				sizes: "64x64"
			},
			{
				type: "image/png",
				src: "/icon5.png",
				sizes: "180x180"
			},
			{
				type: "image/png",
				src: "/icon6.png",
				sizes: "512x512"
			}
		]
	};
}
