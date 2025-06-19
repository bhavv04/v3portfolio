// commands.tsx - All terminal commands
import { portfolioData } from "./data";

export const commands = {
	help: (): string => `
<pre>
Available commands:
  help        Show this help
  about       Personal info
  projects    Project portfolio
  experience  Work history
  skills      Technical skills
  contact     Contact info
  education   Academic records
  whoami      Current user
  clear       Clear terminal
</pre>
  `,

	about: (): string => `
<pre>
${portfolioData.personal.name}
${portfolioData.personal.occupation} — ${portfolioData.personal.specialization}

${portfolioData.personal.bio}
</pre>
  `,

	projects: (): string => `
<pre>
Projects:
${portfolioData.projects.map((p) => `• ${p.name}: ${p.description}`).join("\n")}
</pre>
  `,

	experience: (): string => `
<pre>
Experience:
${portfolioData.experience.map((job) => `• ${job.title} @ ${job.company} (${job.period})\n  ${job.description}`).join("\n")}
</pre>
  `,

	skills: (): string => `
<pre>
Languages:  ${portfolioData.skills.programmingLanguages.join(", ")}
Frameworks: ${portfolioData.skills.frameworks.join(", ")}
Databases:  ${portfolioData.skills.databases.join(", ")}
</pre>
  `,

	contact: (): string => `
<pre>
Email:    ${portfolioData.contact.email}
GitHub:   ${portfolioData.contact.github}
LinkedIn: ${portfolioData.contact.linkedin}
Site:     ${portfolioData.contact.portfolio}
</pre>
  `,

	education: (): string => `
<pre>
${portfolioData.education.degree}
${portfolioData.education.school} (${portfolioData.education.period})
${portfolioData.education.details}

Certifications:
${portfolioData.education.certifications.map((c) => `- ${c}`).join("\n")}
</pre>
  `,

	whoami: (): string => `
<pre>
visitor
${new Date().toISOString()}
</pre>
  `
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
		return `
<pre>
Command not found: ${cmd}
Type 'help' for a list of commands.
</pre>
    `;
	}
};

export const getBootSequence = (): string => `
<pre>
Welcome.
Type 'help' for commands.
`;
