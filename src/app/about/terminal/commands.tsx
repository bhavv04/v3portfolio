import { portfolioData } from "./data";

// ── helpers ──────────────────────────────────────────────────────────────────

const w = (content: string) => `<div class="text-sm leading-relaxed space-y-1" style="color:#7a7570">${content}</div>`;

const hl = (text: string) => `<span style="color:#d4cfc9">${text}</span>`;

const dim = (text: string) => `<span style="color:#4a4642">${text}</span>`;

const list = (items: string[]) => items.map(hl).join(dim(" · "));

const line = (content: string) => `<div style="margin-top:4px">${content}</div>`;

const section = (label: string, content: string) => `${line(dim("── " + label + " ──"))}${line(content)}`;

// ── command definitions ───────────────────────────────────────────────────────

const commandHandlers = {
	help: () =>
		w(
			`${line(`available commands:`)}` +
				`${line(dim("──────────────────"))}` +
				`${line(`${hl("about")}       ${dim("→")} who i am and what i do`)}` +
				`${line(`${hl("projects")}    ${dim("→")} things i've built`)}` +
				`${line(`${hl("skills")}      ${dim("→")} languages, frameworks, tools`)}` +
				`${line(`${hl("education")}   ${dim("→")} where i studied and certifications`)}` +
				`${line(`${hl("contact")}     ${dim("→")} how to reach me`)}` +
				`${line(`${hl("hobbies")}     ${dim("→")} what i do outside of code`)}` +
				`${line(`${hl("status")}      ${dim("→")} what i'm up to right now`)}` +
				`${line(`${hl("whoami")}      ${dim("→")} you`)}` +
				`${line(`${hl("pwd")}         ${dim("→")} where you are`)}` +
				`${line(`${hl("clear")}       ${dim("→")} wipe the terminal`)}` +
				`${line(dim("──────────────────"))}`
		),

	about: () => {
		const { name, occupation, specialization, bio } = portfolioData.personal;
		return w(
			`${line(`${hl(name)}`)}` +
				`${line(dim("──────────────────"))}` +
				`${line(`${dim("role")}           ${occupation}`)}` +
				`${line(`${dim("focus")}          ${hl(specialization)}`)}` +
				`${bio ? line(`${dim("bio")}            ${bio}`) : ""}` +
				`${line(dim("──────────────────"))}` +
				`${line(`type ${hl("projects")} to see what i've built or ${hl("contact")} to reach me.`)}`
		);
	},

	projects: () => {
		const { projects } = portfolioData;
		if (!projects.length) return w(line("nothing shipped publicly yet — soon though."));
		return w(
			`${line(`${projects.length} projects`)}` +
				`${line(dim("──────────────────"))}` +
				projects.map((p, i) => `${line(`${dim(String(i + 1).padStart(2, "0"))}  ${hl(p.name)}`)}` + `${line(`    ${p.description}`)}`).join("") +
				`${line(dim("──────────────────"))}` +
				`${line(`see full write-ups at ${hl(portfolioData.contact.portfolio + "/projects")}`)}`
		);
	},

	skills: () => {
		const { programmingLanguages, frameworks, tools } = portfolioData.skills;
		return w(
			`${section("languages", list(programmingLanguages))}` +
				`${section("frameworks & libraries", list(frameworks))}` +
				`${section("tools & infrastructure", list(tools))}`
		);
	},

	education: () => {
		const { degree, school, period, details, certifications } = portfolioData.education;
		return w(
			`${line(`${hl(degree)} ${dim("@")} ${hl(school)}`)}` +
				`${line(dim(period))}` +
				`${line(dim("──────────────────"))}` +
				`${line(details)}` +
				`${
					certifications.length
						? `${line(dim("──────────────────"))}` + `${line("certifications:")}` + certifications.map((c) => line(`${dim("✓")} ${hl(c)}`)).join("")
						: ""
				}`
		);
	},

	contact: () => {
		const { email, github, linkedin, portfolio } = portfolioData.contact;
		return w(
			`${line("get in touch:")}` +
				`${line(dim("──────────────────"))}` +
				`${line(`${dim("email")}      ${hl(email)}`)}` +
				`${line(`${dim("github")}     ${hl(github)}`)}` +
				`${line(`${dim("linkedin")}   ${hl(linkedin)}`)}` +
				`${line(`${dim("portfolio")}  ${hl(portfolio)}`)}` +
				`${line(dim("──────────────────"))}` +
				`${line("i'm always open to interesting projects and conversations.")}`
		);
	},

	whoami: () =>
		w(
			`${line(`you're ${hl("visitor")} — welcome.`)}` +
				`${line(dim(new Date().toLocaleString()))}` +
				`${line(`type ${hl("about")} to learn who's on the other side.`)}`
		),

	pwd: () => {
		const slug = portfolioData.personal.name.toLowerCase().replace(" ", "-");
		return w(`${line(hl(`/home/${slug}/portfolio/about`))}` + `${line(dim("you're in the about section of the portfolio."))}`);
	},

	hobbies: () => {
		const { hobbies } = portfolioData;
		if (!hobbies.length) return w(line("haven't filled this in yet — check back soon."));
		return w(
			`${line("outside of code:")}` +
				`${line(dim("──────────────────"))}` +
				`${line(list(hobbies))}` +
				`${line(dim("──────────────────"))}` +
				`${line("always down to talk about any of these.")}`
		);
	},

	status: () =>
		w(
			`${line(dim("──────────────────"))}` +
				`${line(`${dim("studying")}     final year @ TMU`)}` +
				`${line(`${dim("building")}     Solace, Lacunae, Thunderhead`)}` +
				`${line(`${dim("open to")}      internships, research, interesting problems`)}` +
				`${line(dim("──────────────────"))}`
		),

	clear: () => "CLEAR_COMMAND"
} as const;

// ── executor ──────────────────────────────────────────────────────────────────

export type Command = keyof typeof commandHandlers;

export const executeCommand = (cmd: string): string => {
	const trimmed = cmd.toLowerCase().trim();
	if (trimmed === "") return "";
	const c = trimmed as Command;
	if (c in commandHandlers) return commandHandlers[c]();
	return w(`${line(`command not found: ${hl(cmd)}`)}` + `${line(`type ${hl("help")} to see what's available.`)}`);
};
