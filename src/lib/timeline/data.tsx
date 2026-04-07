import { Technology } from "@/lib/common";
import { TimelineEntryInformation } from "./model";

export const experienceEntries: TimelineEntryInformation[] = [
	{
		header: "Toronto Police Service",
		subheader: "IT Software Developer (Contract)",
		dateRange: [
			{ year: 2025, monthNumber: 6 },
			{ year: 2026, monthNumber: 3 }
		],
		location: "Toronto, Ontario",
		type: "bullets",
		bullets: [
			"Developed and maintained internal software tools to streamline IT support workflows, ticket triage, and asset tracking across department systems",
			"Built and enhanced web-based dashboards for monitoring device inventory, service requests, and operational status using modern frontend technologies",
			"Automated repetitive administrative and reporting tasks with Python and scripting utilities, reducing manual processing time for internal IT operations",
			"Collaborated with cross-functional technical staff to troubleshoot system issues, support application rollouts, and improve reliability of internal platforms"
		],
		badges: [
			Technology.React,
			Technology.TypeScript,
			Technology.Python,
			Technology.Java,
			Technology.AWS,
			"Automation",
			"IT Operations",
			"Internal Tools",
			"System Support",
			"Agile"
		]
	}
];

export const educationEntries: TimelineEntryInformation[] = [
	{
		header: "Toronto Metropolitan University",
		subheader: "Computer Science (Concentration in Software Engineering)",
		dateRange: [{ year: 2022, monthNumber: 9 }, null],
		location: "Toronto, Ontario",
		type: "bullets",
		bullets: [
			"Minors in Mathematics and Cyber Studies",
			"Relevant coursework: Data Structures, Object-Oriented Programming, C Programming and Unix, Computer Security, Computer Networks, Artificial Intelligence, Software Engineering, Discrete Mathematics"
		],
		badges: [
			Technology.Java,
			Technology.CPP,
			Technology.React,
			Technology.TypeScript,
			"Software Engineering",
			"Mathematics",
			"Cyber Studies",
			"Leadership",
			"Teamwork"
		]
	}
];
