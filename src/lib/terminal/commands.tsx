const wrapStructured = (content: string) => `<div class="text-sm font-mono whitespace-pre-wrap leading-relaxed">${content}</div>`;

export const commands = {
	help: (): string => wrapStructured(`Available commands: help, about, hobbies, education, experience, skills, contact, whoami, clear`),

	about: (): string => wrapStructured(``),

	hobbies: (): string => wrapStructured(``),

	skills: (): string => wrapStructured(``),

	contact: (): string => wrapStructured(``),

	education: (): string => wrapStructured(``),

	whoami: (): string => wrapStructured(``)
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
		return wrapStructured(
			`<span class="text-red-400">command not found:</span> <span class="text-white">${cmd}</span>, try 'help' to see available commands.`
		);
	}
};
