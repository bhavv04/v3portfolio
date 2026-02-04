import { portfolioData } from "./data";

const wrapStructured = (content: string) => `<div class="text-sm font-mono whitespace-pre-wrap leading-relaxed text-gray-300">${content}</div>`;

export const commands = {
	help: (): string => {
		return wrapStructured("Available commands: help, about, hobbies, skills, education, contact, whoami");
	},

	about: (): string => {
		return wrapStructured(portfolioData.about);
	},

	hobbies: (): string => {
		const hobbiesText = `Personal Interests & Hobbies:

${portfolioData.hobbies.map((hobby) => `• ${hobby}`).join("\n")}`;
		return wrapStructured(hobbiesText);
	},

	skills: (): string => {
		const skillsText = `Technical Skills:

Languages:
${portfolioData.skills.languages.map((lang) => `• ${lang}`).join("\n")}

Frontend:
${portfolioData.skills.frontend.map((tech) => `• ${tech}`).join("\n")}

Backend:
${portfolioData.skills.backend.map((tech) => `• ${tech}`).join("\n")}

Tools & Technologies:
${portfolioData.skills.tools.map((tool) => `• ${tool}`).join("\n")}

Currently Learning:
${portfolioData.skills.currentlyLearning.map((tech) => `• ${tech}`).join("\n")}

Favorite Language: ${portfolioData.personal.favoriteLanguage}
Current Focus: ${portfolioData.personal.currentFocus}`;
		return wrapStructured(skillsText);
	},

	education: (): string => {
		const educationText = `Education:

${portfolioData.education.degree}
${portfolioData.education.institution}
${portfolioData.education.period}

Relevant Coursework:
${portfolioData.education.coursework.map((course) => `• ${course}`).join("\n")}

Certifications:
${portfolioData.education.certifications.map((cert) => `• ${cert}`).join("\n")}`;
		return wrapStructured(educationText);
	},

	contact: (): string => {
		const contactText = `Contact Information:

Email: ${portfolioData.personal.email}
LinkedIn: ${portfolioData.personal.linkedin}
GitHub: ${portfolioData.personal.github}
Portfolio: ${portfolioData.personal.portfolio}
Location: ${portfolioData.personal.location}

Open to:
${portfolioData.contact.openTo.map((item) => `• ${item}`).join("\n")}

${portfolioData.contact.message}`;
		return wrapStructured(contactText);
	},

	whoami: (): string => {
		const whoamiText = `${portfolioData.personal.name}
${portfolioData.personal.role}
${portfolioData.personal.location}

Current Focus: ${portfolioData.personal.currentFocus}
Favorite Language: ${portfolioData.personal.favoriteLanguage}

${portfolioData.about}`;
		return wrapStructured(whoamiText);
	}
};

export const executeCommand = (cmd: string): string => {
	const command = cmd.toLowerCase().trim();

	if (command === "clear") {
		return "CLEAR_COMMAND";
	}

	const commandAliases: { [key: string]: string } = {
		"about-me": "about",
		passions: "hobbies",
		"my-projects": "experience",
		experiences: "experience",
		"get cv": "contact",
		"get linkedin": "contact",
		"get github": "contact"
	};

	const normalizedCommand = commandAliases[command] || command;

	if (normalizedCommand in commands) {
		return commands[normalizedCommand as keyof typeof commands]();
	} else if (command === "") {
		return "";
	} else {
		return wrapStructured(`Command '${command}' not found. Type 'help' for available commands.`);
	}
};
