import { Technology } from "@/lib/common";
import { TimelineEntryInformation } from "./model";

export const experienceEntries: TimelineEntryInformation[] = [
	{
		header: "Path to Menzaberronza",
		subheader: "Software Developer",
		dateRange: [{ year: 2025, monthNumber: 4 }, null],
		location: "Remote",
		type: "bullets",
		bullets: [
			"Collaborating with a team of 100+ developers to create a three-act DLC mod for Baldur's Gate 3",
			"Implementing custom dialogue trees and quest logic using Larian’s Osiris scripting system",
			"Working with game asset PAK files to integrate custom content while maintaining compatibility with the base game"
		],
		badges: [
			Technology.AWS,
			Technology.Java,
			Technology.React,
			Technology.TypeScript,
			Technology.Rust,
			Technology.Python,
			"Agile",
			"Leadership",
			"Teamwork"
		]
	}
];

export const educationEntries: TimelineEntryInformation[] = [
	{
		header: "Toronto Metropolitan University",
		subheader: "Bachelor of Science in Computer Science",
		dateRange: [{ year: 2022, monthNumber: 9 }, null],
		location: "Toronto, Ontario",
		type: "bullets",
		bullets: [
			"Relevant coursework: Data Structures, Intro to Computer Networks, C Programming and Unix, Object-Oriented Programming, Computer Security, Artifical Intelligence"
		],
		badges: [Technology.Java, Technology.React, Technology.TypeScript, Technology.CPP, "Leadership", "Teamwork"]
	},
	{
		header: "Microsoft Learn",
		subheader: "Azure DevOps Engineer Expert Certification Path",
		dateRange: [
			{ year: 2025, monthNumber: 6 },
			{ year: 2025, monthNumber: 7 }
		],
		location: "Online",
		type: "bullets",
		bullets: [
			"Comprehensive DevOps training covering CI/CD pipelines, infrastructure as code, monitoring, and security practices",
			"Hands-on experience with Azure DevOps Services, GitHub Actions, Docker, Kubernetes, and Terraform",
			"Capstone project: Designed and implemented end-to-end CI/CD pipeline for microservices architecture with automated testing and deployment"
		],
		badges: ["Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Git", "PowerShell", "Linux", "Monitoring", "Security"]
	},
	{
		header: "Amazon Web Services",
		subheader: "AWS Certified Solutions Architect Professional",
		dateRange: [
			{ year: 2024, monthNumber: 4 },
			{ year: 2024, monthNumber: 9 }
		],
		location: "Online",
		type: "bullets",
		bullets: [
			"Expert-level AWS architecture covering complex multi-tier applications, hybrid architectures, and enterprise migrations",
			"Deep dive into AWS services: EC2, S3, RDS, Lambda, API Gateway, CloudFront, Route 53, and advanced networking",
			"Final assessment: Designed cost-optimized, highly available architecture for enterprise workload migration to AWS"
		],
		badges: ["AWS", "EC2", "S3", "Lambda", "RDS", "CloudFormation", "VPC", "Load Balancing", "Cost Management", "High Availability"]
	}
];
