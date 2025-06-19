export interface OutputLine {
	id: string;
	content: string;
	type: "command" | "output" | "error";
}

export interface Project {
	name: string;
	description: string;
}

export interface Experience {
	title: string;
	company: string;
	period: string;
	description: string;
}

export interface Skills {
	programmingLanguages: string[];
	frameworks: string[];
	databases: string[];
}

export interface Contact {
	email: string;
	github: string;
	linkedin: string;
	portfolio: string;
}

export interface Education {
	degree: string;
	school: string;
	period: string;
	details: string;
	certifications: string[];
}

export interface PortfolioData {
	personal: {
		name: string;
		occupation: string;
		specialization: string;
		bio: string;
	};
	projects: Project[];
	experience: Experience[];
	skills: Skills;
	contact: Contact;
	education: Education;
}
