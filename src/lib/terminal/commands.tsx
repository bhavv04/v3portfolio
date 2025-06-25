import { portfolioData } from "./data";

const wrapStructured = (content: string) => `<div class="text-sm font-mono whitespace-pre-wrap leading-relaxed">${content}</div>`;

export const commands = {
	help: (): string =>
		wrapStructured(`<span class="text-blue-400">$</span> <span class="text-blue-400">man</span> <span class="text-yellow-400">commands</span>
📋 help/             		👤 about/            		🎯 hobbies/
💻 skills/           		🎓 education/        		📞 contact/
🔍 whoami/           		🧹 clear/
		`),

	about: (): string =>
		wrapStructured(`
<span class="text-blue-400">$</span> <span class="text-blue-400">cat</span> <span class="text-yellow-400">~/profile/README.md</span>
Name: ${portfolioData.personal.name}
Occupation: ${portfolioData.personal.occupation}
Specialization: ${portfolioData.personal.specialization}

<span class="text-blue-400">$</span> <span class="text-blue-400">cat</span> <span class="text-yellow-400">~/profile/bio.txt</span>
${portfolioData.personal.bio}
        `),

	hobbies: (): string =>
		wrapStructured(`
<span class="text-blue-400">$</span> <span class="text-blue-400">ls</span> <span class="text-yellow-400">~/interests/</span>
🏉 Rugby/              		📚 Reading/           		🎮 Gaming/
💻 Programming/        		🧠 Learning/          		🎸 Guitar/
👨‍🍳 Cooking/           		✈️ Traveling/

<span class="text-blue-400">$</span> <span class="text-blue-400">cat</span> <span class="text-yellow-400">Reading/preferences.txt</span>
> Mostly Fantasy Books
		`),

	skills: (): string =>
		wrapStructured(`<span class="text-blue-400">$</span> <span class="text-blue-400">tree</span> <span class="text-yellow-400">~/dev/skills/</span>
├── languages/
│   ├── ${portfolioData.skills.programmingLanguages.slice(0, 6).join(", ")}
│   └── ${portfolioData.skills.programmingLanguages.slice(6).join(", ")}
├── frameworks/
│   └── ${portfolioData.skills.frameworks.join(", ")}
├── databases/
│   └── ${portfolioData.skills.databases.join(", ")}
└── others/
    └── ${portfolioData.skills.others.join(", ")}
		`),

	education: (): string =>
		wrapStructured(`
<span class="text-blue-400">$</span> <span class="text-blue-400">cat</span> <span class="text-yellow-400">~/education/transcript.txt</span>
Degree: ${portfolioData.education.degree}
School: ${portfolioData.education.school}
Period: ${portfolioData.education.period}

<span class="text-blue-400">$</span> <span class="text-blue-400">cat</span> <span class="text-yellow-400">~/education/details.md</span>
${portfolioData.education.details}

<span class="text-blue-400">$</span> <span class="text-blue-400">ls</span> <span class="text-yellow-400">~/education/certifications/</span>
${portfolioData.education.certifications.join("\n")}
        `),

	experience: (): string =>
		wrapStructured(`
<span class="text-blue-400">$</span> <span class="text-blue-400">git log --oneline</span> <span class="text-yellow-400">~/career/</span>
        `),

	contact: (): string =>
		wrapStructured(`
<span class="text-blue-400">$</span> <span class="text-blue-400">cat</span> <span class="text-yellow-400">~/.config/contact/info.json</span>
{
  "email": "<a href="mailto:${portfolioData.contact.email}" class="text-cyan-400 hover:text-cyan-300 underline">${portfolioData.contact.email}</a>",
  "github": "<a href="https://${portfolioData.contact.github}" target="_blank" class="text-cyan-400 hover:text-cyan-300 underline">${portfolioData.contact.github}</a>",
  "linkedin": "<a href="https://${portfolioData.contact.linkedin}" target="_blank" class="text-cyan-400 hover:text-cyan-300 underline">${portfolioData.contact.linkedin}</a>",
  "portfolio": "<a href="https://${portfolioData.contact.portfolio}" target="_blank" class="text-cyan-400 hover:text-cyan-300 underline">${portfolioData.contact.portfolio}</a>"
}
		`),

	whoami: (): string =>
		wrapStructured(`
<span class="text-blue-400">$</span> <span class="text-blue-400">whoami && hostname && pwd</span>
Guest
Portfolio Terminal
<span class="text-yellow-400">/home/guest/interactive-portfolio</span>

<span class="text-blue-400">$</span> <span class="text-blue-400">uptime</span>
Status: Online
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
		return wrapStructured(`<span class="text-red-400">${cmd}</span> : The term '<span class="text-white">${cmd}</span>' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.

<span class="text-red-400">CategoryInfo</span>: ObjectNotFound: (${cmd}:String) [], CommandNotFoundException
<span class="text-red-400">FullyQualifiedErrorId</span> : CommandNotFoundException

Try '<span class="text-blue-400">help</span>' to see available commands.`);
	}
};
