"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { OutputLine } from "@/lib/terminal/types";
import { executeCommand } from "@/lib/terminal/commands";

const WELCOME = "Welcome to my site. I'm glad you're exploring my about section, let me share some things that aren't on the home page.";

const Terminal: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState<OutputLine[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [isTyping, setIsTyping] = useState(false);
	const [welcomeText, setWelcomeText] = useState("");

	const outputRef = useRef<HTMLDivElement>(null);
	const inputDivRef = useRef<HTMLDivElement>(null);

	const typeWriter = useCallback(
		(text: string, speed = 25) => {
			if (welcomeText !== "") return;
			setIsTyping(true);
			let i = 0;
			const tick = () => {
				if (i < text.length) {
					setWelcomeText(text.substring(0, i + 1));
					i++;
					setTimeout(tick, speed);
				} else {
					setIsTyping(false);
				}
			};
			setTimeout(tick, 800);
		},
		[welcomeText]
	);

	const handleQuickCommand = useCallback(
		(cmd: string) => {
			if (isTyping) return;
			const commandLine: OutputLine = {
				id: Date.now().toString(),
				content: `<span style="color:#097d39">❯</span> <span style="color:#d4cfc9">${cmd}</span>`,
				type: "command"
			};
			const result = executeCommand(cmd);
			const next: OutputLine[] = [...output, commandLine];
			if (result) next.push({ id: (Date.now() + 1).toString(), content: result, type: "output" });
			setOutput(next);
			setCommandHistory((prev) => [cmd, ...prev.slice(0, 49)]);
		},
		[output, isTyping]
	);

	useEffect(() => {
		typeWriter(WELCOME);
	}, [typeWriter]);

	useEffect(() => {
		if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
	}, [output, welcomeText]);

	useEffect(() => {
		if (!isTyping) inputDivRef.current?.focus({ preventScroll: true });
		{
			/* prevent scroll so it doesnt scroll down when you press enter */
		}
	}, [isTyping]);

	const handleSubmit = useCallback(
		(e: React.KeyboardEvent | React.FormEvent) => {
			e.preventDefault();
			const cmd = input.trim();
			if (!cmd || isTyping) return;

			if (cmd.toLowerCase() === "clear") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");
				if (inputDivRef.current) inputDivRef.current.textContent = "";
				return;
			}

			const commandLine: OutputLine = {
				id: Date.now().toString(),
				content: `<span style="color:#097d39">❯</span> <span style="color:#d4cfc9">${cmd}</span>`,
				type: "command"
			};

			const result = executeCommand(cmd);
			if (result === "CLEAR_COMMAND") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");
				if (inputDivRef.current) inputDivRef.current.textContent = "";
				return;
			}

			const next: OutputLine[] = [...output, commandLine];
			if (result) next.push({ id: (Date.now() + 1).toString(), content: result, type: "output" });

			setOutput(next);
			setCommandHistory((prev) => [cmd, ...prev.slice(0, 49)]);
			setHistoryIndex(-1);
			setInput("");
			if (inputDivRef.current) inputDivRef.current.textContent = "";
		},
		[input, output, isTyping]
	);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (isTyping) return;
			if (e.key === "ArrowUp") {
				e.preventDefault();
				const next = Math.min(historyIndex + 1, commandHistory.length - 1);
				setHistoryIndex(next);
				setInput(commandHistory[next] ?? "");
				if (inputDivRef.current) inputDivRef.current.textContent = commandHistory[next] ?? "";
			} else if (e.key === "ArrowDown") {
				e.preventDefault();
				if (historyIndex <= 0) {
					setHistoryIndex(-1);
					setInput("");
					if (inputDivRef.current) inputDivRef.current.textContent = "";
				} else {
					const next = historyIndex - 1;
					setHistoryIndex(next);
					setInput(commandHistory[next] ?? "");
					if (inputDivRef.current) inputDivRef.current.textContent = commandHistory[next] ?? "";
				}
			}
		},
		[commandHistory, historyIndex, isTyping]
	);

	return (
		<div
			className="flex h-[70vh] flex-col text-sm"
			style={{ background: "#1c1a18", borderRadius: "15px", overflow: "hidden" }}
			onClick={() => !isTyping && inputDivRef.current?.focus()}
		>
			{/* Title bar */}
			<div className="flex items-center gap-2 px-5 py-3" style={{ background: "#161412", borderBottom: "0.5px solid #2a2825" }}>
				<span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
				<span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
			</div>

			{/* Body */}
			<div ref={outputRef} className="flex-1 overflow-y-auto p-6" style={{ color: "#7a7570", scrollbarWidth: "none" }}>
				<p className="mb-6 leading-relaxed">
					{welcomeText}
					{isTyping && (
						<span className="inline-block" style={{ width: "12px", height: "16px", background: "#4a4642", verticalAlign: "text-bottom" }} />
					)}
				</p>

				{!isTyping && (
					<div className="fade-in-up mb-4 flex flex-wrap gap-2">
						{["help", "about", "hobbies", "projects", "contact", "pwd", "status"].map((cmd) => (
							<button
								key={cmd}
								onClick={() => handleQuickCommand(cmd)}
								className="duration-800 relative inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-neutral-800 px-3 text-xs text-white transition-colors ease-in-out hover:bg-white hover:text-gray-900"
								style={{ fontFamily: "inherit" }}
							>
								{cmd}
							</button>
						))}
					</div>
				)}

				<div className="fade-in-up space-y-2">
					{output.map((line) => (
						<div
							key={line.id}
							className="break-words leading-relaxed"
							style={{ color: line.type === "error" ? "#a05050" : "#097d39" }}
							dangerouslySetInnerHTML={{ __html: line.content }}
						/>
					))}
				</div>

				<div className="mt-4 flex items-center gap-2">
					{!isTyping && (
						<span className="fade-in-up shrink-0 select-none" style={{ color: "#097d39" }}>
							❯
						</span>
					)}
					<div className="flex flex-1 items-center">
						<div
							ref={inputDivRef}
							contentEditable={!isTyping}
							suppressContentEditableWarning
							spellCheck={false}
							onInput={(e) => setInput(e.currentTarget.textContent ?? "")}
							onFocus={(e) => e.target.scrollIntoView({ block: "nearest" })}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									handleSubmit(e);
								} else {
									handleKeyDown(e);
								}
							}}
							style={{
								color: "#d4cfc9",
								outline: "none",
								whiteSpace: "pre-wrap",
								wordBreak: "break-word",
								minWidth: "2px",
								caretColor: "transparent"
							}}
						/>
						{!isTyping && (
							<span
								className="fade-in-up inline-block shrink-0 animate-pulse"
								style={{ width: "8px", height: "16px", background: "#4a4642", verticalAlign: "text-bottom" }}
							/>
						)}
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="px-5 py-2.5" style={{ background: "#161412", borderTop: "0.5px solid #2a2825" }}>
				<span className="text-xs" style={{ color: "#3d3a36" }}>
					{isTyping ? "loading..." : "↑↓ history · enter to run · clear to reset"}
				</span>
			</div>
		</div>
	);
};

export default Terminal;
