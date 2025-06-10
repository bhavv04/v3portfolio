"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface PersonalInfo {
	name: string;
	title: string;
	location: string;
	email: string;
	github: string;
	linkedin: string;
	website: string;
	experience: string;
	education: string;
	bio: string;
	skills: Record<string, number>;
	projects: string[];
	hobbies: string[];
}

interface OutputLine {
	id: string;
	content: string;
	type: "command" | "output" | "error";
}

const TerminalAbout: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState<OutputLine[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [isTyping] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);
	const outputRef = useRef<HTMLDivElement>(null);

	// Personal information - customize this section
	const personalInfo: PersonalInfo = {
		name: "Bhavdeep Arora",
		title: "Student, Full Stack Developer & Embedded System Security Resarcher",
		location: "Toronto, ON, Canada",
		email: "bhavdeepsa@gmail.com",
		github: "github.com/bhav2134",
		linkedin: "linkedin.com/in/bhavdeeparora/",
		website: "bhavdeep.vercel.app",
		experience: "",
		education: "Computer Science • Toronto Metropolitan University",
		bio: "",
		skills: {
			"JavaScript/TypeScript": 92,
			"React/Next.js": 88,
			"Node.js/Express": 85,
			"Python/Django": 82,
			"UI/UX Design": 90,
			"Tailwind CSS": 95,
			"PostgreSQL/MongoDB": 78,
			"Docker/AWS": 75,
			"GraphQL/REST": 80
		},
		projects: [""],
		hobbies: [
			"Open Source Contributions",
			"Embedded System Security Research",
			"Coffee Brewing",
			"Basketball",
			"Rugby",
			"Chess",
			"Reading Fantasy Novels",
			"Gaming",
			"Hiking",
			"Playing My Guitar"
		]
	};

	const commands: Record<string, () => string> = {
		help: () => `
<div class="text-gray-300 mb-3 text-base">Available commands:</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
  <div><span class="text-green-400 font-medium">about</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Personal overview</span></div>
  <div><span class="text-green-400 font-medium">skills</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Technical expertise</span></div>
  <div><span class="text-green-400 font-medium">projects</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Featured work</span></div>
  <div><span class="text-green-400 font-medium">contact</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Get in touch</span></div>
  <div><span class="text-green-400 font-medium">experience</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Work history</span></div>
  <div><span class="text-green-400 font-medium">education</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Academic background</span></div>
  <div><span class="text-green-400 font-medium">hobbies</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Personal interests</span></div>
  <div><span class="text-green-400 font-medium">whoami</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Current session</span></div>
  <div><span class="text-green-400 font-medium">date</span> <span class="text-gray-500">→</span> <span class="text-gray-400">System time</span></div>
  <div><span class="text-green-400 font-medium">clear</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Clear terminal</span></div>
  <div><span class="text-green-400 font-medium">theme</span> <span class="text-gray-500">→</span> <span class="text-gray-400">Terminal aesthetics</span></div>
</div>`,

		about: () => `
<div class="space-y-4">
  <div class="border-l-2 border-green-400 pl-4">
    <div class="text-gray-200 text-lg font-medium">${personalInfo.name}</div>
    <div class="text-green-400 text-base">${personalInfo.title}</div>
    <div class="text-gray-400 text-sm flex items-center mt-1">
      <span class="mr-2">📍</span>${personalInfo.location}
    </div>
  </div>
  
  <div class="text-gray-300 leading-relaxed">
    ${personalInfo.bio}
  </div>
  
  <div class="flex items-center text-sm text-gray-400">
    <span class="text-green-400 mr-2">Experience:</span>
    <span>${personalInfo.experience}</span>
  </div>
</div>`,

		skills: () => {
			const skillsHtml = Object.entries(personalInfo.skills)
				.map(
					([skill, level]) => `
          <div class="flex items-center justify-between py-2 border-b border-gray-800/50 last:border-b-0">
            <div class="flex items-center space-x-3">
              <span class="text-gray-200 font-medium text-sm">${skill}</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-32 h-1.5 bg-gray-700 rounded-full relative overflow-hidden">
                <div class="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-700 ease-out" style="width: ${level}%"></div>
              </div>
              <span class="text-green-400 text-xs font-mono w-8 text-right">${level}%</span>
            </div>
          </div>
        `
				)
				.join("");

			return `
<div class="space-y-3">
  <div class="text-gray-300 text-base font-medium">Technical Skills & Proficiency</div>
  <div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
    ${skillsHtml}
  </div>
</div>`;
		},

		projects: () => {
			const projectsHtml = personalInfo.projects
				.map((project, index) => {
					const [title, tech] = project.split(" • ");
					return `
            <div class="bg-gray-900/40 rounded-lg p-4 border border-gray-800/50 hover:border-green-400/30 transition-colors">
              <div class="flex items-start justify-between mb-2">
                <span class="text-gray-200 font-medium">${title}</span>
                <span class="text-green-400 text-xs font-mono">#${String(index + 1).padStart(2, "0")}</span>
              </div>
              <div class="text-gray-400 text-sm">${tech || ""}</div>
            </div>
          `;
				})
				.join("");

			return `
<div class="space-y-3">
  <div class="text-gray-300 text-base font-medium">Featured Projects</div>
  <div class="grid gap-3">
    ${projectsHtml}
  </div>
</div>`;
		},

		contact: () => `
<div class="space-y-4">
  <div class="text-gray-300 text-base font-medium">Get In Touch</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
      <div class="flex items-center space-x-3">
        <span class="text-green-400">✉️</span>
        <div>
          <div class="text-gray-400 text-xs uppercase tracking-wide">Email</div>
          <div class="text-gray-200 font-mono text-sm">${personalInfo.email}</div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
      <div class="flex items-center space-x-3">
        <span class="text-green-400">🌐</span>
        <div>
          <div class="text-gray-400 text-xs uppercase tracking-wide">Website</div>
          <div class="text-gray-200 font-mono text-sm">${personalInfo.website}</div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
      <div class="flex items-center space-x-3">
        <span class="text-green-400">⚡</span>
        <div>
          <div class="text-gray-400 text-xs uppercase tracking-wide">GitHub</div>
          <div class="text-gray-200 font-mono text-sm">${personalInfo.github}</div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
      <div class="flex items-center space-x-3">
        <span class="text-green-400">💼</span>
        <div>
          <div class="text-gray-400 text-xs uppercase tracking-wide">LinkedIn</div>
          <div class="text-gray-200 font-mono text-sm">${personalInfo.linkedin}</div>
        </div>
      </div>
    </div>
  </div>
</div>`,

		experience: () => `
<div class="space-y-4">
  <div class="text-gray-300 text-base font-medium">Professional Experience</div>
  <div class="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50">
    <div class="flex items-center justify-between mb-3">
      <div class="text-gray-200 font-medium">${personalInfo.title}</div>
      <div class="text-green-400 text-sm font-mono">${personalInfo.experience}</div>
    </div>
    <div class="text-gray-400 text-sm leading-relaxed">
      Specializing in modern web development with a focus on user experience and scalable architecture. 
      Experience spans across frontend frameworks, backend systems, and cloud infrastructure.
    </div>
    <div class="mt-4 pt-4 border-t border-gray-800/50">
      <div class="text-gray-500 text-xs">For detailed work history and recommendations, visit my LinkedIn profile.</div>
    </div>
  </div>
</div>`,

		education: () => `
<div class="space-y-4">
  <div class="text-gray-300 text-base font-medium">Education & Learning</div>
  <div class="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50">
    <div class="flex items-center space-x-3 mb-3">
      <span class="text-green-400">🎓</span>
      <div class="text-gray-200 font-medium">${personalInfo.education}</div>
    </div>
    <div class="text-gray-400 text-sm leading-relaxed mb-4">
      Strong foundation in computer science principles, algorithms, and software engineering practices.
    </div>
    <div class="space-y-2">
      <div class="text-gray-500 text-xs uppercase tracking-wide">Continuous Learning</div>
      <div class="flex flex-wrap gap-2">
        ${["Advanced React Patterns", "System Design", "Cloud Architecture", "UI/UX Research"]
			.map((course) => `<span class="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">${course}</span>`)
			.join("")}
      </div>
    </div>
  </div>
</div>`,

		hobbies: () => {
			const hobbiesHtml = personalInfo.hobbies
				.map(
					(hobby, index) => `
          <div class="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg border border-gray-800/50">
            <span class="text-green-400 text-lg">${["🚀", "📟", "☕", "🏀", "🏉", "♟️", "📖", "🎮", "⛰️", "🎸"][index] || "💡"}</span>
            <span class="text-gray-200 text-sm">${hobby}</span>
          </div>
        `
				)
				.join("");

			return `
<div class="space-y-3">
  <div class="text-gray-300 text-base font-medium">Interests & Hobbies</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    ${hobbiesHtml}
  </div>
</div>`;
		},

		whoami: () => `
<div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
  <div class="flex items-center space-x-3">
    <span class="text-green-400">👤</span>
    <div>
      <div class="text-gray-200 font-mono">visitor</div>
      <div class="text-gray-500 text-xs">Guest session • Read-only access</div>
    </div>
  </div>
</div>`,

		date: () => {
			const now = new Date();
			return `
<div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
  <div class="flex items-center space-x-3">
    <span class="text-green-400">🕐</span>
    <div>
      <div class="text-gray-200 font-mono text-sm">${now.toLocaleString()}</div>
      <div class="text-gray-500 text-xs">System time • ${Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
    </div>
  </div>
</div>`;
		},

		clear: () => {
			setOutput([]);
			return "";
		},

		theme: () => `
<div class="space-y-4">
  <div class="text-gray-300 text-base font-medium">Terminal Theme</div>
  <div class="bg-gray-900/30 rounded-lg p-4 border border-gray-800/50">
    <div class="grid grid-cols-3 gap-4 text-center text-sm">
      <div>
        <div class="w-4 h-4 bg-green-400 rounded mx-auto mb-2"></div>
        <div class="text-gray-400">Primary</div>
      </div>
      <div>
        <div class="w-4 h-4 bg-gray-200 rounded mx-auto mb-2"></div>
        <div class="text-gray-400">Text</div>
      </div>
      <div>
        <div class="w-4 h-4 bg-gray-600 rounded mx-auto mb-2"></div>
        <div class="text-gray-400">Muted</div>
      </div>
    </div>
    <div class="mt-4 pt-4 border-t border-gray-800/50 text-center">
      <div class="text-gray-500 text-xs">Modern terminal with green accent theme</div>
    </div>
  </div>
</div>`
	};

	const executeCommand = useCallback(
		(cmd: string): string => {
			const command = cmd.toLowerCase().trim();

			if (input.toLowerCase().trim() === "clear") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");
				return "";
			}

			if (commands[command]) {
				return commands[command]();
			} else if (command === "") {
				return "";
			} else {
				return `
<div class="bg-red-900/20 border border-red-400/30 rounded-lg p-3">
  <div class="text-red-400 text-sm">Command not found: <span class="font-mono">${cmd}</span></div>
  <div class="text-gray-400 text-xs mt-1">Type <span class="text-green-400 font-mono">help</span> to see available commands</div>
</div>`;
			}
		},
		[commands]
	);

	const handleSubmit = useCallback(
		(e: React.KeyboardEvent | React.FormEvent) => {
			e.preventDefault();

			if (input.trim() === "") return;

			const command = input.toLowerCase().trim();

			// If clear, reset everything and return early
			if (command === "clear") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");
				return;
			}

			// Otherwise, add the command and output as usual
			const newOutput: OutputLine[] = [
				...output,
				{
					id: Date.now().toString(),
					content: `<span class="text-gray-500">visitor@portfolio</span><span class="text-green-400">:</span><span class="text-blue-400">~</span><span class="text-gray-300">$</span> <span class="text-gray-200">${input}</span>`,
					type: "command"
				}
			];

			const result = executeCommand(input);
			if (result) {
				newOutput.push({
					id: (Date.now() + 1).toString(),
					content: result,
					type: "output"
				});
			}

			setOutput(newOutput);
			setCommandHistory((prev) => [input, ...prev.slice(0, 49)]);
			setHistoryIndex(-1);
			setInput("");
		},
		[input, output, executeCommand]
	);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "ArrowUp") {
				e.preventDefault();
				if (historyIndex < commandHistory.length - 1) {
					const newIndex = historyIndex + 1;
					setHistoryIndex(newIndex);
					setInput(commandHistory[newIndex]);
				}
			} else if (e.key === "ArrowDown") {
				e.preventDefault();
				if (historyIndex > 0) {
					const newIndex = historyIndex - 1;
					setHistoryIndex(newIndex);
					setInput(commandHistory[newIndex]);
				} else if (historyIndex === 0) {
					setHistoryIndex(-1);
					setInput("");
				}
			}
		},
		[commandHistory, historyIndex]
	);

	const handleTerminalClick = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	const commandList = ["help", "about", "skills", "projects", "experience", "hobbies", "date", "skills", "contact", "education", "whoami", "clear", "theme"];

	const handleCommandChipClick = (cmd: string) => {
		setInput(cmd);
		inputRef.current?.focus();
	};

	useEffect(() => {
		setOutput([
			{
				id: "welcome",
				content: "",
				type: "output"
			}
		]);
	}, []);

	useEffect(() => {
		if (outputRef.current) {
			outputRef.current.scrollTop = outputRef.current.scrollHeight;
		}
	}, [output]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div className="w-full font-mono">
			<div
				className="bg-black-900/95 mx-auto -mt-10 flex h-[75vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl backdrop-blur-xl"
				onClick={handleTerminalClick}
			>
				{/* Terminal Header */}
				<div className="flex items-center justify-between border-b border-stone-700/50 bg-gray-800/60 px-4 py-3 sm:px-6 sm:py-4">
					<div className="flex items-center space-x-3 sm:space-x-4">
						<div className="flex space-x-2">
							<div className="h-3 w-3 rounded-full bg-red-500/80 transition-colors hover:bg-red-500"></div>
							<div className="h-3 w-3 rounded-full bg-yellow-500/80 transition-colors hover:bg-yellow-500"></div>
							<div className="h-3 w-3 rounded-full bg-green-500/80 transition-colors hover:bg-green-500"></div>
						</div>
						<div className="text-xs font-medium text-gray-400 sm:text-sm">terminal@portfolio</div>
					</div>
					<div className="text-xs text-gray-500">~/about</div>
				</div>

				{/* Terminal Content */}
				<div
					ref={outputRef}
					className="scrollbar-none flex-1 overflow-y-auto p-4 text-sm leading-relaxed text-gray-300 sm:p-6"
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none"
					}}
				>
					{/* Custom Welcome Message */}
					{output.length === 1 && output[0].id === "welcome" && (
						<div className="space-y-4">
							<div className="text-center">
								<div className="mb-2 text-lg font-medium text-gray-200">Welcome to Interactive Portfolio Terminal</div>
								<div className="text-sm text-gray-400">Explore my background through command-line interface</div>
							</div>
							<div className="rounded-lg border border-gray-800/50 bg-gray-900/30 p-4">
								<div className="mb-2 text-sm text-gray-300">Choose any of the following commands:</div>
								<div className="flex flex-wrap gap-2">
									{commandList.map((cmd) => (
										<span
											key={cmd}
											className="cursor-pointer rounded bg-gray-800/50 px-2 py-1 font-mono text-xs text-green-400 transition hover:bg-green-400/20"
											onClick={() => handleCommandChipClick(cmd)}
										>
											{cmd}
										</span>
									))}
								</div>
							</div>
						</div>
					)}

					{/* Output */}
					{output.map(
						(line) =>
							line.id !== "welcome" && (
								<div
									key={line.id}
									className={`mb-4 ${line.type === "command" ? "text-gray-400" : line.type === "error" ? "text-red-400" : "text-gray-300"}`}
									dangerouslySetInnerHTML={{ __html: line.content }}
								/>
							)
					)}

					{/* Input Line */}
					<div className="mt-4 flex items-center space-x-2">
						<span className="text-sm text-gray-500">visitor@portfolio</span>
						<span className="text-green-400">:</span>
						<span className="text-blue-400">~</span>
						<span className="text-gray-300">$</span>
						<textarea
							ref={inputRef as unknown as React.RefObject<HTMLTextAreaElement>}
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									handleSubmit(e);
								} else {
									handleKeyDown(e);
								}
							}}
							className="max-h-32 min-h-[1.5rem] flex-1 resize-none bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none"
							placeholder=""
							autoComplete="off"
							disabled={isTyping}
							rows={1}
							style={{ overflow: "hidden", whiteSpace: "pre-wrap" }}
						/>
					</div>
				</div>

				{/* Terminal Footer */}
				<div className="border-white-700/50 border-t bg-gray-800/40 px-6 py-2">
					<div className="flex items-center justify-between text-xs text-gray-500">
						<div>Use ↑↓ arrow keys for command history</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TerminalAbout;
