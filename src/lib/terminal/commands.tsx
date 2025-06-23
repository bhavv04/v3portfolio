import { portfolioData } from "./data";

const wrapStructured = (content: string) => `<div class="text-sm font-mono whitespace-pre-wrap">${content}</div>`;

export const commands = {
	help: (): string =>
		wrapStructured(`Available commands:

help         - show this help
about        - personal info
projects     - list projects  
experience   - work history
skills       - technical skills
contact      - contact information
education    - education & certs
whoami       - current session
clear        - clear screen`),

	about: (): string =>
		wrapStructured(`${portfolioData.personal.name}
${portfolioData.personal.occupation} | ${portfolioData.personal.specialization}

${portfolioData.personal.bio}`),

	projects: (): string =>
		wrapStructured(`Projects:

${portfolioData.projects.map((p, i) => `${i + 1}. ${p.name}\n   ${p.description}`).join("\n\n")}`),

	experience: (): string =>
		wrapStructured(`Work Experience:

Coming soon - check back later`),

	skills: (): string =>
		wrapStructured(`Technical Skills:

Languages:   ${portfolioData.skills.programmingLanguages.join(", ")}
Frameworks:  ${portfolioData.skills.frameworks.join(", ")}
Databases:   ${portfolioData.skills.databases.join(", ")}`),

	contact: (): string =>
		wrapStructured(`Contact Info:

Email:    ${portfolioData.contact.email}
GitHub:   ${portfolioData.contact.github}
LinkedIn: ${portfolioData.contact.linkedin}
Website:  ${portfolioData.contact.portfolio}`),

	education: (): string =>
		wrapStructured(`Education:

${portfolioData.education.degree}
${portfolioData.education.school} (${portfolioData.education.period})
${portfolioData.education.details}

Certifications:
${portfolioData.education.certifications.map((c) => `• ${c}`).join("\n")}`),

	whoami: (): string =>
		wrapStructured(`Current session:

User: visitor
Time: ${new Date().toLocaleString()}
Host: portfolio-terminal`)
};

export const executeCommand = (cmd: string): string => {
	const command = cmd.toLowerCase().trim();

	if (command === "clear") {
		return "CLEAR_COMMAND";
	}

	if (command in commands) {
		return commands[command as keyof typeof commands]();
	} else if (command === "") {
		return "";
	} else {
		return wrapStructured(`command not found: ${cmd}
type 'help' for available commands`);
	}
};
