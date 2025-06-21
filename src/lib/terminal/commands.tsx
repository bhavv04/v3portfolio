import { portfolioData } from "./data";

const wrapStructured = (content: string) => `<div class="text-sm leading-relaxed space-y-2">${content}</div>`;

export const commands = {
	help: (): string =>
		wrapStructured(`
			<div class="text-emerald-400 font-semibold mb-3">Available Commands:</div>
			<div class="grid grid-cols-1 gap-2 text-gray-300">
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">help</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Show this help message</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">about</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Personal information and bio</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">projects</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">View my project portfolio</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">experience</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Professional work history</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">skills</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Technical skills and expertise</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">contact</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Get in touch with me</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">education</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Academic background and certifications</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">whoami</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Current user information</span>
				</div>
				<div class="flex items-start space-x-3">
					<span class="text-cyan-400 font-mono min-w-[80px]">clear</span>
					<span class="text-gray-400">→</span>
					<span class="break-words">Clear the terminal screen</span>
				</div>
			</div>
		`),

	about: (): string =>
		wrapStructured(`
			<div class="space-y-3">
				<div class="text-emerald-400 font-semibold text-lg">👤 ${portfolioData.personal.name}</div>
				<div class="text-cyan-300 font-medium">${portfolioData.personal.occupation} — ${portfolioData.personal.specialization}</div>
				<div class="text-gray-300 leading-relaxed break-words">
					${portfolioData.personal.bio}
				</div>
			</div>
		`),

	projects: (): string =>
		wrapStructured(`
			<div class="space-y-4">
				<div class="text-emerald-400 font-semibold text-lg">💼 Projects</div>
				<div class="space-y-3">
					${portfolioData.projects
						.map(
							(p) => `
						<div class="border-l-2 border-emerald-500/30 pl-4 space-y-1">
							<div class="text-cyan-300 font-medium break-words">${p.name}</div>
							<div class="text-gray-300 text-sm leading-relaxed break-words">${p.description}</div>
						</div>
					`
						)
						.join("")}
				</div>
			</div>
		`),

	experience: (): string =>
		wrapStructured(`
			<div class="space-y-3">
				<div class="text-emerald-400 font-semibold text-lg">🧠 Work Experience</div>
				<div class="text-gray-300 leading-relaxed break-words">
					Coming soon! Stay tuned for updates on my professional journey.
				</div>
			</div>
		`),

	skills: (): string =>
		wrapStructured(`
			<div class="space-y-4">
				<div class="text-emerald-400 font-semibold text-lg">⚙️ Technical Skills</div>
				<div class="space-y-3">
					<div class="flex flex-wrap items-start gap-2">
						<span class="text-cyan-300 font-medium min-w-[100px]">Languages:</span>
						<span class="text-gray-300 break-words">${portfolioData.skills.programmingLanguages.join(", ")}</span>
					</div>
					<div class="flex flex-wrap items-start gap-2">
						<span class="text-cyan-300 font-medium min-w-[100px]">Frameworks:</span>
						<span class="text-gray-300 break-words">${portfolioData.skills.frameworks.join(", ")}</span>
					</div>
					<div class="flex flex-wrap items-start gap-2">
						<span class="text-cyan-300 font-medium min-w-[100px]">Databases:</span>
						<span class="text-gray-300 break-words">${portfolioData.skills.databases.join(", ")}</span>
					</div>
				</div>
			</div>
		`),

	contact: (): string =>
		wrapStructured(`
			<div class="space-y-4">
				<div class="text-emerald-400 font-semibold text-lg">📞 Get In Touch</div>
				<div class="space-y-2">
					<div class="flex items-center space-x-3">
						<span class="text-cyan-300 font-medium min-w-[80px]">Email:</span>
						<span class="text-gray-300 break-all">${portfolioData.contact.email}</span>
					</div>
					<div class="flex items-center space-x-3">
						<span class="text-cyan-300 font-medium min-w-[80px]">GitHub:</span>
						<span class="text-gray-300 break-all">${portfolioData.contact.github}</span>
					</div>
					<div class="flex items-center space-x-3">
						<span class="text-cyan-300 font-medium min-w-[80px]">LinkedIn:</span>
						<span class="text-gray-300 break-all">${portfolioData.contact.linkedin}</span>
					</div>
					<div class="flex items-center space-x-3">
						<span class="text-cyan-300 font-medium min-w-[80px]">Website:</span>
						<span class="text-gray-300 break-all">${portfolioData.contact.portfolio}</span>
					</div>
				</div>
			</div>
		`),

	education: (): string =>
		wrapStructured(`
			<div class="space-y-4">
				<div class="text-emerald-400 font-semibold text-lg">🎓 Education</div>
				<div class="space-y-3">
					<div class="border-l-2 border-emerald-500/30 pl-4 space-y-1">
						<div class="text-cyan-300 font-medium break-words">${portfolioData.education.degree}</div>
						<div class="text-gray-300 break-words">${portfolioData.education.school}</div>
						<div class="text-gray-400 text-sm">${portfolioData.education.period}</div>
						<div class="text-gray-300 text-sm leading-relaxed break-words">${portfolioData.education.details}</div>
					</div>
				</div>
				
				<div class="space-y-3">
					<div class="text-emerald-400 font-semibold">📜 Certifications</div>
					<div class="space-y-2">
						${portfolioData.education.certifications
							.map(
								(c) => `
							<div class="flex items-start space-x-2">
								<span class="text-emerald-500 mt-1">•</span>
								<span class="text-gray-300 break-words">${c}</span>
							</div>
						`
							)
							.join("")}
					</div>
				</div>
			</div>
		`),

	whoami: (): string =>
		wrapStructured(`
			<div class="space-y-3">
				<div class="text-emerald-400 font-semibold text-lg">🙋 Current Session</div>
				<div class="space-y-2">
					<div class="flex items-center space-x-3">
						<span class="text-cyan-300 font-medium">User:</span>
						<span class="text-gray-300">visitor</span>
					</div>
					<div class="flex items-center space-x-3">
						<span class="text-cyan-300 font-medium">Time:</span>
						<span class="text-gray-300 break-words">${new Date().toLocaleString()}</span>
					</div>
				</div>
			</div>
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
		return wrapStructured(`
			<div class="space-y-2">
				<div class="text-red-400 font-semibold">❌ Command not found: '${cmd}'</div>
				<div class="text-gray-300">💡 Type <span class="text-cyan-400 font-mono">help</span> for a list of available commands.</div>
			</div>
		`);
	}
};
