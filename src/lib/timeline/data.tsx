import { Technology } from "@/lib/common";
import { TimelineEntryInformation } from "./model";

export const experienceEntries: TimelineEntryInformation[] = [
	{
		header: "Path to Menzaberronza",
		subheader: "Software Developer",
		dateRange: [{ year: 2025, monthNumber: 4 }, null],
		location: "",
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
	}
];
