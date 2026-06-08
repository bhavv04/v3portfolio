export type OutputLine = {
	id: string;
	type: "command" | "output" | "error";
	content: string;
};

export type RichLine = { id: string; type: "command" | "output" | "error"; content: string };

export interface PortfolioData {
	personal: { name: string; occupation: string; specialization: string; bio: string };
	projects: { name: string; description: string }[];
	experience: { title: string; company: string; period: string; description: string }[];
	skills: { programmingLanguages: string[]; frameworks: string[]; databases: string[] };
	contact: { email: string; github: string; linkedin: string; portfolio: string };
	education: { degree: string; school: string; period: string; details: string; certifications: string[] };
}
