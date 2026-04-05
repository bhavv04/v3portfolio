import { portfolioData } from "./data";

// ── helpers ──────────────────────────────────────────────────────────────────

const w = (content: string) => `<div class="text-sm leading-relaxed space-y-1" style="color:#7a7570">${content}</div>`;

const hl = (text: string) => `<span style="color:#d4cfc9">${text}</span>`;

const dim = (text: string) => `<span style="color:#4a4642">${text}</span>`;

const list = (items: string[]) => items.map(hl).join(dim(" · "));

const line = (content: string) => `<div style="margin-top:4px">${content}</div>`;

// ── command definitions ───────────────────────────────────────────────────────

const commandHandlers = {
	help: () =>
		w(
			`${line(`Here's everything you can ask me:`)}` +
				`${line(list(["about", "projects", "skills", "education", "contact", "hobbies", "status", "whoami", "pwd", "clear"]))}` +
				`${line(dim("just type any of these and hit enter."))}`
		),

	about: () => {
		const { name, occupation, specialization, bio } = portfolioData.personal;
		return w(`${line(`hey, i'm ${hl(name)}.`)}` + `${line(`i'm a ${occupation}, focused on ${hl(specialization)}.`)}` + `${bio ? line(bio) : ""}`);
	},

	projects: () => {
		const { projects } = portfolioData;
		if (!projects.length) return w(line("nothing shipped publicly yet — soon though."));
		return w(`${line("here's what i've been building:")}` + projects.map((p) => line(`${hl(p.name)} ${dim("—")} ${p.description}`)).join(""));
	},

	skills: () => {
		const { programmingLanguages, frameworks, databases } = portfolioData.skills;
		return w(
			`${line("languages i write in:")} ${line(list(programmingLanguages))}` +
				`${line("frameworks i reach for:")} ${line(list(frameworks))}` +
				`${line("tools & databases:")} ${line(list(databases))}`
		);
	},

	education: () => {
		const { degree, school, period, details, certifications } = portfolioData.education;
		return w(
			`${line(`studying ${hl(degree)} at ${hl(school)} ${dim(`(${period})`)}.`)}` +
				`${line(details)}` +
				`${certifications.length ? line(`also certified in ${list(certifications)}.`) : ""}`
		);
	},

	contact: () => {
		const { email, github, linkedin } = portfolioData.contact;
		return w(
			`${line("best ways to reach me:")}` +
				`${line(`email ${dim("→")} ${hl(email)}`)}` +
				`${line(`github ${dim("→")} ${hl(github)}`)}` +
				`${line(`linkedin ${dim("→")} ${hl(linkedin)}`)}`
		);
	},

	whoami: () => w(`${line(`you're ${hl("visitor")} — welcome.`)}` + `${line(dim(new Date().toLocaleString()))}`),

	pwd: () => {
		const slug = portfolioData.personal.name.toLowerCase().replace(" ", "-");
		return w(line(hl(`/home/${slug}/portfolio/about`)));
	},

	hobbies: () => {
		const { hobbies } = portfolioData;
		if (!hobbies.length) return w(line("haven't filled this in yet — check back soon."));
		return w(`${line("when i'm not coding:")}` + `${line(list(hobbies))}`);
	},

	status: () => w(`${line(`${hl("now playing")} ${dim("—")} spotify integration coming soon.`)}` + `${line(dim("check back once it's wired up."))}`),

	clear: () => "CLEAR_COMMAND"
} as const;

// ── executor ──────────────────────────────────────────────────────────────────

export type Command = keyof typeof commandHandlers;

export const executeCommand = (cmd: string): string => {
	const trimmed = cmd.toLowerCase().trim();
	if (trimmed === "") return "";
	const c = trimmed as Command;
	if (c in commandHandlers) return commandHandlers[c]();
	return w(`${line(`hmm, i don't know ${hl(cmd)}.`)}` + `${line(`type ${hl("help")} to see what i can do.`)}`);
};
