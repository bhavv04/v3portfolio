import { portfolioData } from "./data";

const wrap = (content: string) => `<pre class="text-sm leading-relaxed">${content}</pre>`;

export const commands = {
	help: (): string =>
		wrap(`
✨ Available Commands:
  🛈 help         → Show this help
  👤 about        → Personal info
  💼 projects     → Project portfolio
  🧠 experience   → Work history
  ⚙️ skills       → Technical skills
  ✉️ contact      → Contact info
  🎓 education    → Academic records
  🧾 whoami       → Current user
  🧹 clear        → Clear terminal
	`),

	about: (): string =>
		wrap(`
👤 ${portfolioData.personal.name}
💼 ${portfolioData.personal.occupation} — ${portfolioData.personal.specialization}

📝 ${portfolioData.personal.bio}
	`),

	projects: (): string =>
		wrap(`
💼 Projects:
${portfolioData.projects.map((p) => `  • ${p.name}\n    → ${p.description}`).join("\n")}
	`),

	experience: (): string =>
		wrap(`
🧠 Work Experience:
${portfolioData.experience.map((job) => `  • ${job.title} @ ${job.company} (${job.period})\n    ${job.description}`).join("\n")}
	`),

	skills: (): string =>
		wrap(`
⚙️ Skills:
  • Languages:  ${portfolioData.skills.programmingLanguages.join(", ")}
  • Frameworks: ${portfolioData.skills.frameworks.join(", ")}
  • Databases:  ${portfolioData.skills.databases.join(", ")}
	`),

	contact: (): string =>
		wrap(`
📞 Contact Info:
  • Email:    ${portfolioData.contact.email}
  • GitHub:   ${portfolioData.contact.github}
  • LinkedIn: ${portfolioData.contact.linkedin}
  • Website:  ${portfolioData.contact.portfolio}
	`),

	education: (): string =>
		wrap(`
🎓 Education:
  ${portfolioData.education.degree}
  ${portfolioData.education.school} (${portfolioData.education.period})
  ${portfolioData.education.details}

📜 Certifications:
${portfolioData.education.certifications.map((c) => `  • ${c}`).join("\n")}
	`),

	whoami: (): string =>
		wrap(`
🙋 You are:
  • visitor
  • ${new Date().toLocaleString()}
	`)
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
		return wrap(`
❌ Command not found: '${cmd}'
💡 Type 'help' for a list of valid commands.
		`);
	}
};

export const getBootSequence = (): string =>
	wrap(`
🖥️ Booting up...

Welcome to the Portfolio Terminal 💫
Type 'help' to get started.
`);
