import { portfolioData } from "./data";

const w = (content: string) => `<div class="space-y-1 pl-4 border-l border-stone-800 text-stone-400">${content}</div>`;
const hl = (text: string) => `<span class="text-stone-100">${text}</span>`;
const dim = (text: string) => `<span class="text-stone-300">${text}</span>`;
const list = (items: string[]) => items.map(hl).join(dim(" · "));
const line = (content: string) => `<div>${content}</div>`;
const section = (label: string, content: string) => `${line(dim("── " + label + " ──"))}${line(content)}`;

// ── dynamic matrix arrays ───────────────────────────────────────────────────
const FORTUNES = [
	"Plausible-looking output is the hardest bug to catch.",
	"A fragile network topology scrambles an ecosystem faster than low biomass.",
	"If the data pipeline and the UI share a language, architecture becomes transparent.",
	"Loading multidimensional climate arrays into pandas is structural heresy. Use xarray.",
	"Sudo won't save you from a bad pointer allocation.",
	"The climate signal is always visible if you split your training timeline cleanly."
];

const MATRIX_PHRASES = [
	"Reconstructing undersampled k-space arrays...",
	"Isolating multi-layer directed network nodes...",
	"Tracing cascading ecological collapses back to regional dead zones...",
	"Intercepting automated scrapers via Thunderhead proxy filter layers..."
];

// command definitions
const commandHandlers = {
	help: () =>
		w(
			`${line(`available commands:`)}` +
				`${line(`${hl("about")}       ${dim("→")} who i am and what i do`)}` +
				`${line(`${hl("ls")}          ${dim("→")} list directory contents`)}` +
				`${line(`${hl("projects")}    ${dim("→")} navigate to projects write-ups`)}` +
				`${line(`${hl("skills")}      ${dim("→")} languages, frameworks, tools`)}` +
				`${line(`${hl("books")}       ${dim("→")} my favorite books and series`)}` +
				`${line(`${hl("education")}   ${dim("→")} jump to experience & education`)}` +
				`${line(`${hl("research")}    ${dim("→")} jump to research sections`)}` +
				`${line(`${hl("resume")}      ${dim("→")} view my resume (pdf)`)}` +
				`${line(`${hl("contact")}     ${dim("→")} how to reach me`)}` +
				`${line(`${hl("neofetch")}    ${dim("→")} display system specs summary`)}` +
				`${line(`${hl("fortune")}     ${dim("→")} read a random engineering proverb`)}` +
				`${line(`${hl("sudo")}        ${dim("→")} execute with root privileges`)}` +
				`${line(`${hl("matrix")}      ${dim("→")} monitor the streaming baseline simulation`)}` +
				`${line(`${hl("hobbies")}     ${dim("→")} what i do outside of code`)}` +
				`${line(`${hl("status")}      ${dim("→")} what i'm up to right now`)}` +
				`${line(`${hl("whoami")}      ${dim("→")} you`)}` +
				`${line(`${hl("pwd")}         ${dim("→")} where you are`)}` +
				`${line(`${hl("clear")}       ${dim("→")} wipe the terminal`)}`
		),

	// LS COMMAND
	ls: () => {
		// Mock directory entries reflecting your available portfolio routes/commands
		const entries = [
			{ name: "projects/", type: "dir" },
			{ name: "education/", type: "dir" },
			{ name: "research/", type: "dir" },
			{ name: "skills.json", type: "file" },
			{ name: "books.json", type: "file" },
			{ name: "resume.pdf", type: "file" },
			{ name: "contact.txt", type: "file" },
			{ name: "hobbies.txt", type: "file" }
		];

		// Style directories with highlight (stone-100) and plain files with dim (stone-300)
		const formattedEntries = entries.map((e) => (e.type === "dir" ? hl(e.name) : dim(e.name)));

		return w(
			`${line("total 8")}` +
				`${line(formattedEntries.join(dim(" · ")))}` +
				`${line(`\ntip: use these names directly as commands (e.g. type ${hl("projects")})`)}`
		);
	},

	about: () => {
		const { name, occupation, specialization, bio } = portfolioData.personal;
		return w(
			`${line(hl(name))}` +
				`${line(`${dim("role")}           ${occupation}`)}` +
				`${line(`${dim("focus")}          ${hl(specialization)}`)}` +
				`${bio ? line(`${dim("bio")}            ${bio}`) : ""}` +
				`${line(`type ${hl("projects")} or ${hl("education")} to skip straight to those sections.`)}`
		);
	},

	projects: () => "REDIRECT_TO_/projects",
	education: () => "REDIRECT_TO_/#timeline",
	research: () => "REDIRECT_TO_/#research",
	resume: () => "REDIRECT_TO_/resume.pdf_blank",

	skills: () => {
		const { programmingLanguages, frameworks, tools } = portfolioData.skills;
		return w(
			`${section("languages", list(programmingLanguages))}` +
				`${section("frameworks & libraries", list(frameworks))}` +
				`${section("tools & infrastructure", list(tools))}`
		);
	},

	contact: () => {
		const { email, github, linkedin, portfolio } = portfolioData.contact;
		return w(
			`${line("get in touch:")}` +
				`${line(`${dim("email")}      ${hl(email)}`)}` +
				`${line(`${dim("github")}     ${hl(github)}`)}` +
				`${line(`${dim("linkedin")}   ${hl(linkedin)}`)}` +
				`${line(`${dim("portfolio")}  ${hl(portfolio)}`)}`
		);
	},

	whoami: () => {
		const agent = typeof window !== "undefined" ? window.navigator.userAgent.split(" ")[0] : "SecureClient";
		return w(
			`${line(`you're ${hl("visitor")} parsing data via ${hl(agent)} — welcome.`)}` +
				`${line(dim(new Date().toLocaleString()))}` +
				`${line(`type ${hl("about")} to learn who's on the other side.`)}`
		);
	},

	pwd: () => {
		const slug = portfolioData.personal.name.toLowerCase().replace(" ", "-");
		return w(`${line(hl(`/home/${slug}/portfolio/about`))}`);
	},

	hobbies: () => {
		const { hobbies } = portfolioData;
		if (!hobbies || !hobbies.length) return w(line("haven't filled this in yet — check back soon."));

		const hobbyLines = hobbies.map((h) => line(` • ${hl(h.name)} ${dim("→")} ${h.detail}`)).join("");

		return w(`${line("outside of compile cycles:")}` + hobbyLines);
	},

	status: () => {
		const targetDate = new Date("2026-06-15");
		const currentDate = new Date();
		const msDiff = targetDate.getTime() - currentDate.getTime();
		const daysLeft = Math.ceil(msDiff / (1000 * 60 * 60 * 24));

		const gradString = daysLeft > 0 ? `final year @ TMU [~${daysLeft} days until target graduation]` : "CS Graduate @ TMU";

		return w(
			`${line(`${dim("studying")}     ${gradString}`)}` +
				`${line(`${dim("building")}     Verso, Gaia, Solace, Lacunae`)}` +
				`${line(`${dim("open to")}      collaboration, research, full-time opportunities`)}`
		);
	},

	fortune: () => {
		const randomIndex = Math.floor(Math.random() * FORTUNES.length);
		return w(`${line(`🔮 ${hl("Ecological Architecture Proverb:")}`)} ${line(FORTUNES[randomIndex])}`);
	},

	neofetch: () => {
		const ramUsage = (Math.random() * (4.2 - 2.1) + 2.1).toFixed(1);
		return w(
			`<div class="flex gap-4">
				<div class="text-emerald-700 font-bold select-none">
					<div>  /\\_/\\  </div>
					<div> ( o.o ) </div>
					<div>  &gt; ^ &lt;  </div>
				</div>
				<div>
					<div>${hl("bhavv04")}</div>
					<div>${dim("OS:")} Planetary Boundary Core OS v2026</div>
					<div>${dim("Host:")} Bhav's belly</div>
					<div>${dim("Kernel:")} Next.js 15 App Router Engine</div>
					<div>${dim("Uptime:")} i dont know lol </div>
					<div>${dim("Shell:")} Custom Web-POSIX v2.0</div>
					<div>${dim("Memory:")} ${ramUsage} GB / 8.0 GB (Allocated Sandbox)</div>
				</div>
			</div>`
		);
	},

	sudo: () => {
		return w(`${line(`<span class="text-red-700">Permission denied.</span> This incident has been written to system logs and sent to Santa Claus.`)}`);
	},

	matrix: () => {
		const targetAction = MATRIX_PHRASES[Math.floor(Math.random() * MATRIX_PHRASES.length)];
		return w(
			`${line(`<span class="text-emerald-600">[LIVE TELEMETRY ACTIVE]</span>`)}` +
				`${line(`<span class="text-emerald-600">❯ ${targetAction}</span>`)}` +
				`${line(`<span class="text-emerald-600">Wake up, Neo... The matrix has you... 🐇</span>`)}`
		);
	},

	books: () => {
		const { books } = portfolioData;

		// Map each book item into its own distinct line block
		const bookLines = books.map((b) => line(` • ${hl(b.title)} by ${b.author}`)).join("");

		return w(
			`${line("my favorite books are:")}` +
				bookLines +
				`${line(`want to discover your next read? skip to ${hl("projects")} and check out ${hl("Verso")}.`)}`
		);
	},

	clear: () => "CLEAR_COMMAND"
} as const;

export type Command = keyof typeof commandHandlers;

export const executeCommand = (cmd: string): string => {
	const trimmed = cmd.toLowerCase().trim();
	if (trimmed === "") return "";
	const c = trimmed as Command;
	if (c in commandHandlers) return commandHandlers[c]();
	return w(`${line(`command not found: ${hl(cmd)}`)}` + `${line(`type ${hl("help")} to see what's available.`)}`);
};
