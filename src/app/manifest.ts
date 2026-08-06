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
			}
		]
	};
}
