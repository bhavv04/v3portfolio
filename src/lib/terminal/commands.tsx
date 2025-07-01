import { portfolioData } from "./data";

const wrapStructured = (content: string) => `<div class="text-sm font-mono whitespace-pre-wrap leading-relaxed text-gray-300">${content}</div>`;

export const commands = {
	help: (): string => {
		const { commands: helpData } = portfolioData;

		// Build a flat array of just the command strings
		const commandList = helpData.help.list.map((cmd) => cmd.command);

		// Build JSON string
		const formattedJSON = JSON.stringify(
			{
				commands: commandList
			},
			null,
			2
		);

		const colorized = formattedJSON
			// Keys
			.replace(/"([^"]+)":/g, `<span class="text-blue-400">"$1"</span>:`)
			// String values
			.replace(/: "([^"]+)"/g, `: <span class="text-yellow-300">"$1"</span>`)
			// Arrays
			.replace(/[{}[\]]/g, (match) => `<span class="text-gray-300">${match}</span>`);

		return wrapStructured(colorized);
	},

	about: (): string => wrapStructured(portfolioData.about),

	hobbies: (): string => {
		const hobbyList = portfolioData.hobbies;

		const formattedJSON = JSON.stringify(
			{
				hobbies: hobbyList
			},
			null,
			2
		);

		const colorized = formattedJSON
			// Keys
			.replace(/"([^"]+)":/g, `<span class="text-blue-400">"$1"</span>:`)
			// String values
			.replace(/: "([^"]+)"/g, `: <span class="text-yellow-300">"$1"</span>`)
			// Brackets
			.replace(/[{}[\]]/g, (match) => `<span class="text-gray-500">${match}</span>`);

		return wrapStructured(colorized);
	},

	skills: (): string => {
		const { skills } = portfolioData;
		const output = `Skills Tree
├── <span class="text-blue-400">Languages</span>
│   ├── ${skills.languages[0]}
│   ├── ${skills.languages[1]}
│   ├── ${skills.languages[2]}
│   └── ${skills.languages[3]}
├── <span class="text-blue-400">Frontend</span>
│   ├── ${skills.frontend[0]}
│   ├── ${skills.frontend[1]}
│   ├── ${skills.frontend[2]}
│   ├── ${skills.frontend[3]}
│   └── ${skills.frontend[4]}
├── <span class="text-blue-400">Backend</span>
│   ├── ${skills.backend[0]}
│   ├── ${skills.backend[1]}
│   ├── ${skills.backend[2]}
│   ├── ${skills.backend[3]}
│   └── ${skills.backend[4]}
├── <span class="text-blue-400">Tools & Other</span>
│   ├── ${skills.tools[0]}
│   ├── ${skills.tools[1]}
│   ├── ${skills.tools[2]}
│   ├── ${skills.tools[3]}
│   └── ${skills.tools[4]}
└── <span class="text-blue-400">Currently Learning</span> 
    ├── ${skills.currentlyLearning[0]}
    ├── ${skills.currentlyLearning[1]}
    └── ${skills.currentlyLearning[2]}
`;
		return wrapStructured(output);
	},

	education: (): string => {
		const { education } = portfolioData;
		let output = `<span class="text-yellow-400">${education.institution}</span>
${education.degree}
${education.period}

<span class="text-blue-400">Relevant Coursework:</span>
`;
		education.coursework.forEach((course) => {
			output += `• ${course}\n`;
		});

		output += `\n<span class="text-blue-400">Certifications:</span>\n`;
		education.certifications.forEach((cert) => {
			output += `• ${cert}\n`;
		});

		return wrapStructured(output.trim());
	},

	contact: (): string => {
		const { personal, contact } = portfolioData;
		const output = `Let's connect! 

<span class="text-blue-400">Email:</span>     <a href="mailto:${personal.email}" class="text-white hover:text-blue-300 underline">${personal.email}</a>
<span class="text-blue-400">inkedIn:</span>  <a href="https://${personal.linkedin}" target="_blank" class="text-white hover:text-blue-300 underline">${personal.linkedin}</a>
<span class="text-blue-400">GitHub:</span>    <a href="https://${personal.github}" target="_blank" class="text-white hover:text-blue-300 underline">${personal.github}</a>
<span class="text-blue-400">Portfolio:</span> <a href="https://${personal.portfolio}" target="_blank" class="text-white hover:text-blue-300 underline">${personal.portfolio}</a>

${contact.message} 💬`;

		return wrapStructured(output);
	},
	whoami: (): string => {
		const { personal } = portfolioData;
		const output = `<span class="text-green-400">$ whoami</span>

<span class="text-blue-400">Name:</span>          ${personal.name}
<span class="text-blue-400">Role:</span>          ${personal.role}
<span class="text-blue-400">Location:</span>      ${personal.location}
<span class="text-blue-400">Favorite Lang:</span> ${personal.favoriteLanguage}
<span class="text-blue-400">Current Focus:</span> ${personal.currentFocus}

<span class="text-gray-400"># Always learning, always building</span>`;
		return wrapStructured(output);
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
		return wrapStructured(
			`Command not found: <span class="text-red-400">${cmd}</span>, Type <span class="text-red-400">help</span> to see available commands.`
		);
	}
};
