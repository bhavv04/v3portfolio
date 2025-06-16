import { Project } from "./model";
import { Technology } from "@/lib/common";

export const projects: Project[] = [
	{
		name: "Bug Report App",
		summary:
			"Streamline bug tracking and resolution with our intuitive bug-report website. Effortlessly report and manage software issues for smoother development cycles.",
		technologies: [Technology.React, Technology.Python, Technology.Figma, Technology.SQLite],
		links: {
			github: "https://github.com/bhav2134/bug-report?tab=readme-ov-file",
			live: ""
		},
		screenshots: [
			{
				name: "Bug Report Home Page",
				mobile: {
					src: "/images/bug_report/bug_report_home.jpg",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/bug_report/bug_report_home.jpg",
					width: 350,
					height: 279
				}
			},
			{
				name: "Personle! daily play page",
				mobile: {
					src: "/images/bug_report/bug_report_dashboard.jpg",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/bug_report/bug_report_dashboard.jpg",
					width: 350,
					height: 279
				}
			},
			{
				name: "Personle! daily play correct guess",
				mobile: {
					src: "/images/bug_report/bug_report_submit.jpg",
					width: 460,
					height: 367
				},
				desktop: {
					src: "/images/bug_report/bug_report_submit.jpg",
					width: 350,
					height: 279
				}
			}
		],
		type: "bullets",
		bullets: []
	}
];
