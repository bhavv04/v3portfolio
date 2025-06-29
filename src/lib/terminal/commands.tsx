import { portfolioData } from "./data";

const wrapStructured = (content: string) => `<div class="text-sm font-mono whitespace-pre-wrap leading-relaxed text-gray-300">${content}</div>`;

const createHeader = (title: string, icon: string = "→") =>
	`<span class="text-cyan-400 font-bold text-lg">${icon} ${title}</span>\n<span class="text-gray-600">${"─".repeat(title.length + 3)}</span>`;

const createBullet = (text: string, color: string = "text-blue-400") => `<span class="${color}">▸</span> <span class="text-gray-300">${text}</span>`;

export const commands = {
	help: (): string =>
		wrapStructured(`${createHeader("Available Commands", "🚀")}

<span class="text-yellow-400 font-bold">Terminal Commands:</span>

<span class="text-cyan-400 font-semibold">Personal Information:</span>
${createBullet("about", "text-blue-400")} - Display personal information and bio
${createBullet("whoami", "text-blue-400")} - Show current user and system info
${createBullet("contact", "text-blue-400")} - Get contact information and links

<span class="text-purple-400 font-semibold">Professional:</span>
${createBullet("skills", "text-orange-400")} - List technical skills and tools
${createBullet("education", "text-orange-400")} - Show educational background
${createBullet("experience", "text-orange-400")} - Work experience

<span class="text-pink-400 font-semibold">Personal:</span>
${createBullet("hobbies", "text-indigo-400")} - Explore interests and activities

<span class="text-red-400 font-semibold">System:</span>
${createBullet("clear", "text-gray-400")} - Clear the terminal screen
${createBullet("help", "text-gray-400")} - Show this help message

<span class="text-blue-400">💡 Tip:</span> <span class="text-gray-500">Commands are case-insensitive</span>`),

	about: (): string =>
		wrapStructured(`${createHeader("Profile Information", "👨‍💻")}

<span class="text-white font-bold text-xl">${portfolioData.personal.name}</span>
<span class="text-cyan-400 text-lg">${portfolioData.personal.occupation}</span> <span class="text-gray-500">|</span> <span class="text-blue-400 text-lg">${portfolioData.personal.specialization}</span>

<span class="text-purple-400 font-semibold">Bio:</span>
<span class="text-gray-300 leading-relaxed">${portfolioData.personal.bio}</span>

<span class="text-gray-500">─────────────────────────────────</span>
<span class="text-yellow-400">Last updated:</span> <span class="text-gray-400">${new Date().toLocaleDateString()}</span>`),

	hobbies: (): string =>
		wrapStructured(`${createHeader("Interests & Activities", "🎯")}

<span class="text-cyan-400">$ ls ~/interests/ -la</span>

<span class="text-gray-500">total 8</span>
<span class="text-blue-400">drwxr-xr-x</span>  8 user user  256 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-white">.</span>
<span class="text-blue-400">drwxr-xr-x</span>  3 user user   96 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-white">..</span>
<span class="text-blue-400">drwxr-xr-x</span>  2 user user   64 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-cyan-400">sports/</span>
<span class="text-blue-400">drwxr-xr-x</span>  2 user user   64 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-cyan-400">reading/</span>
<span class="text-blue-400">drwxr-xr-x</span>  2 user user   64 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-cyan-400">gaming/</span>
<span class="text-blue-400">drwxr-xr-x</span>  2 user user   64 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-cyan-400">tech/</span>
<span class="text-blue-400">drwxr-xr-x</span>  2 user user   64 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-cyan-400">creative/</span>
<span class="text-blue-400">drwxr-xr-x</span>  2 user user   64 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-cyan-400">travel/</span>

<span class="text-cyan-400">$ find ~/interests/ -type f -name "*.txt" | head -8</span>

<span class="text-orange-400">🏉</span> <span class="text-white">Rugby</span> <span class="text-gray-400">- Playing and watching</span>
<span class="text-blue-400">📚</span> <span class="text-white">Reading</span> <span class="text-gray-400">- Mostly fantasy novels</span>
<span class="text-purple-400">🎮</span> <span class="text-white">Gaming</span> <span class="text-gray-400">- Strategy and RPG games</span>
<span class="text-cyan-400">💻</span> <span class="text-white">Programming</span> <span class="text-gray-400">- Personal projects and learning</span>
<span class="text-yellow-400">🧠</span> <span class="text-white">Learning</span> <span class="text-gray-400">- Always exploring new technologies</span>
<span class="text-pink-400">🎸</span> <span class="text-white">Guitar</span> <span class="text-gray-400">- Acoustic fingerstyle</span>
<span class="text-red-400">👨‍🍳</span> <span class="text-white">Cooking</span> <span class="text-gray-400">- Experimenting with new recipes</span>
<span class="text-indigo-400">✈️</span> <span class="text-white">Traveling</span> <span class="text-gray-400">- Discovering new places and cultures</span>`),

	skills: (): string =>
		wrapStructured(`${createHeader("Technical Skills", "⚡")}

<span class="text-cyan-400">$ ls -la ~/skills</span>

<span class="text-gray-500">total 4</span>
<span class="text-blue-400">drwxr-xr-x</span> 2 dev dev 4096 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-purple-400">languages/</span>
  ${portfolioData.skills.programmingLanguages.map((lang) => `<span class="text-yellow-400">${lang}</span>`).join(" ")}

<span class="text-blue-400">drwxr-xr-x</span> 2 dev dev 4096 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-cyan-400">frameworks/</span>
  ${portfolioData.skills.frameworks.map((fw) => `<span class="text-blue-400">${fw}</span>`).join(" ")}

<span class="text-blue-400">drwxr-xr-x</span> 2 dev dev 4096 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-pink-400">databases/</span>
  ${portfolioData.skills.databases.map((db) => `<span class="text-purple-400">${db}</span>`).join(" ")}

<span class="text-blue-400">drwxr-xr-x</span> 2 dev dev 4096 <span class="text-yellow-400">${new Date().toLocaleDateString()}</span> <span class="text-orange-400">tools/</span>
  ${portfolioData.skills.others.map((tool) => `<span class="text-orange-400">${tool}</span>`).join(" ")}`),

	education: (): string =>
		wrapStructured(`${createHeader("Education", "🎓")}

<span class="text-cyan-400">$ cat ~/education/degree.json</span>

<span class="text-gray-400">{</span>
  <span class="text-blue-400">"degree"</span>: <span class="text-yellow-400">"${portfolioData.education.degree}"</span>,
  <span class="text-blue-400">"institution"</span>: <span class="text-yellow-400">"${portfolioData.education.school}"</span>,
  <span class="text-blue-400">"period"</span>: <span class="text-yellow-400">"${portfolioData.education.period}"</span>,
  <span class="text-blue-400">"status"</span>: <span class="text-cyan-400">"completed"</span>
<span class="text-gray-400">}</span>

<span class="text-cyan-400">$ cat ~/education/summary.md</span>

<span class="text-purple-400 font-semibold">## Academic Details</span>
<span class="text-gray-300">${portfolioData.education.details}</span>

<span class="text-cyan-400">$ ls ~/education/certifications/</span>

${portfolioData.education.certifications.map((cert) => `<span class="text-yellow-400">📜</span> <span class="text-white">${cert}</span>`).join("\n")}`),

	experience: (): string =>
		wrapStructured(`${createHeader("Experience", "💼")}

<span class="text-cyan-400">$ git log ~/career/ --oneline --graph</span>

<span class="text-yellow-400">*</span> <span class="text-orange-400">Coming soon...</span> 
<span class="text-gray-400">|\\</span> 
<span class="text-gray-400">|</span> <span class="text-yellow-400">*</span> <span class="text-blue-400">Work experience section under development</span>
<span class="text-gray-400">|/</span>  
<span class="text-yellow-400">*</span> <span class="text-purple-400">Initial portfolio setup</span>

<span class="text-cyan-400">$ echo "Check back soon for detailed work history!"</span>

<span class="text-white">Check back soon for detailed work history!</span>`),

	contact: (): string =>
		wrapStructured(`${createHeader("Contact Information", "📬")}

<span class="text-cyan-400">$ cat ~/.config/contact.json</span>

<span class="text-gray-400">{</span>
  <span class="text-blue-400">"contact"</span>: <span class="text-gray-400">{</span>
    <span class="text-purple-400">"email"</span>: <span class="text-yellow-400">"<a href="mailto:${portfolioData.contact.email}" class="text-cyan-400 underline hover:text-blue-400">${portfolioData.contact.email}</a>"</span>,
    <span class="text-purple-400">"github"</span>: <span class="text-yellow-400">"<a href="https://${portfolioData.contact.github}" target="_blank" class="text-cyan-400 underline hover:text-blue-400">${portfolioData.contact.github}</a>"</span>,
    <span class="text-purple-400">"linkedin"</span>: <span class="text-yellow-400">"<a href="https://${portfolioData.contact.linkedin}" target="_blank" class="text-cyan-400 underline hover:text-blue-400">${portfolioData.contact.linkedin}</a>"</span>,
    <span class="text-purple-400">"portfolio"</span>: <span class="text-yellow-400">"<a href="https://${portfolioData.contact.portfolio}" target="_blank" class="text-cyan-400 underline hover:text-blue-400">${portfolioData.contact.portfolio}</a>"</span>
  <span class="text-gray-400">},</span>
  <span class="text-blue-400">"status"</span>: <span class="text-orange-400">"open_to_opportunities"</span>,
  <span class="text-blue-400">"preferred_contact"</span>: <span class="text-cyan-400">"email"</span>
<span class="text-gray-400">}</span>`),

	whoami: (): string =>
		wrapStructured(`${createHeader("System Information", "🔍")}

<span class="text-cyan-400">$ whoami && hostname && pwd</span>

<span class="text-white">guest</span>
<span class="text-purple-400">portfolio-terminal</span>
<span class="text-blue-400">/home/guest/interactive-portfolio</span>

<span class="text-cyan-400">$ uptime</span>

<span class="text-yellow-400">System uptime:</span> <span class="text-white">Online and ready</span>
<span class="text-yellow-400">Session:</span> <span class="text-gray-300">Interactive portfolio browsing</span>
<span class="text-yellow-400">User permissions:</span> <span class="text-orange-400">Guest (read-only)</span>

<span class="text-cyan-400">$ ps aux | grep portfolio</span>

<span class="text-gray-400">guest</span>    <span class="text-blue-400">1234</span>  <span class="text-yellow-400">0.1</span>  <span class="text-yellow-400">0.5</span>  <span class="text-purple-400">portfolio-app</span>  <span class="text-white">running</span>
<span class="text-gray-400">guest</span>    <span class="text-blue-400">1235</span>  <span class="text-yellow-400">0.0</span>  <span class="text-yellow-400">0.1</span>  <span class="text-purple-400">terminal-ui</span>    <span class="text-white">active</span>`)
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
		return wrapStructured(`<span class="text-red-400 font-bold">bash:</span> <span class="text-white">${cmd}</span><span class="text-red-400">: command not found</span>

<span class="text-yellow-400">Did you mean one of these?</span>
${createBullet("help", "text-cyan-400")} - Show available commands
${createBullet("about", "text-blue-400")} - Personal information
${createBullet("skills", "text-purple-400")} - Technical skills
${createBullet("contact", "text-orange-400")} - Get in touch

<span class="text-gray-400">Type <span class="text-cyan-400">help</span> for a full list of commands.</span>`);
	}
};
