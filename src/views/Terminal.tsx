"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { OutputLine } from "@/lib/terminal/types";
import { executeCommand } from "@/lib/terminal/commands";

const TerminalAbout: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState<OutputLine[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [isTyping, setIsTyping] = useState(false);
	const [, setHasInteracted] = useState(false);
	const [welcomeText, setWelcomeText] = useState("");
	const [showCursor, setShowCursor] = useState(true);

	const inputRef = useRef<HTMLTextAreaElement>(null);
	const outputRef = useRef<HTMLDivElement>(null);
	const typewriterRef = useRef<HTMLDivElement>(null);

	const typeWriter = useCallback(
		(text: string, speed: number = 15) => {
			// Only set typing state and reset welcome text if it's the initial load
			if (welcomeText === "") {
				setIsTyping(true);
				setWelcomeText("");
				setShowCursor(true);

				let i = 0;
				const type = () => {
					if (i < text.length) {
						setWelcomeText(text.substring(0, i + 1));
						i++;
						setTimeout(type, speed);
					} else {
						setIsTyping(false);
						setTimeout(() => {
							setShowCursor(false);
						}, 1);
					}
				};

				// Start typing after a short delay
				setTimeout(type, 500);
			}
		},
		[welcomeText]
	);

	const handleSubmit = useCallback(
		(e: React.KeyboardEvent | React.FormEvent) => {
			e.preventDefault();
			if (input.trim() === "" || isTyping) return;

			const command = input.toLowerCase().trim();
			setHasInteracted(true);

			// If clear, reset everything and return early
			if (command === "clear") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");

				if (welcomeText === "") {
					const welcomeMessage =
						"Welcome to my site fellow humans and bots. I'm glad you're exploring my about section. Let me share some additional information about myself that isn't on the home page...";
					typeWriter(welcomeMessage);
				}
				return;
			}

			const newOutput: OutputLine[] = [
				...output,
				{
					id: Date.now().toString(),
					content: `<span class="text-emerald-400/70">~/about</span><span class="text-green-300">:</span><span class="text-cyan-400/80">~</span><span class="text-gray-400">$</span> <span class="text-gray-100 break-all">${input}</span>`,
					type: "command"
				}
			];

			const result = executeCommand(input);
			if (result === "CLEAR_COMMAND") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");

				// Restart typewriter effect
				const welcomeMessage =
					"Welcome to my site fellow humans and bots. I'm glad you're exploring my about section. Let me share some additional information about myself that isn't on the home page...";
				typeWriter(welcomeMessage);
				return;
			}
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
		[input, output, isTyping, typeWriter]
	);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (isTyping) return; // Prevent input during typing animation

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
		[commandHistory, historyIndex, isTyping]
	);

	const handleTerminalClick = useCallback(() => {
		if (!isTyping) {
			inputRef.current?.focus();
		}
	}, [isTyping]);

	// Initialize typewriter effect on component mount
	useEffect(() => {
		const welcomeMessage =
			"Welcome to my site fellow humans and bots. I'm glad you're exploring my about section. Let me share some additional information about myself that isn't on the home page...";
		typeWriter(welcomeMessage);
	}, [typeWriter]);

	useEffect(() => {
		if (outputRef.current) {
			outputRef.current.scrollTop = outputRef.current.scrollHeight;
		}
	}, [output, welcomeText]);

	useEffect(() => {
		if (!isTyping) {
			inputRef.current?.focus();
		}
	}, [isTyping]);

	return (
		<div className="flex min-h-screen w-full items-center justify-center">
			<div className="w-full font-mono">
				<div
					className="mx-auto flex h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-emerald-900/30 bg-[rgba(13,13,13,0.8)] shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out"
					onClick={handleTerminalClick}
				>
					{/* Terminal Header */}
					<div className="flex items-center justify-between border-b border-emerald-900/20 bg-[rgba(13,13,13,0.9)] px-4 py-3 sm:px-6 sm:py-4">
						<div className="flex items-center space-x-3 sm:space-x-4">
							<div className="flex space-x-2">
								<div className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-lg shadow-red-500/20 transition-all hover:scale-110 hover:bg-[#FF5F57]/80"></div>
								<div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-lg shadow-yellow-500/20 transition-all hover:scale-110 hover:bg-[#FFBD2E]/80"></div>
								<div className="h-3 w-3 rounded-full bg-[#28C840] shadow-lg shadow-green-500/20 transition-all hover:scale-110 hover:bg-[#28C840]/80"></div>
							</div>
							<div className="text-xs font-medium text-emerald-500/70 sm:text-sm">terminal@portfolio</div>
						</div>
					</div>

					{/* Terminal Content */}
					<div
						ref={outputRef}
						className="scrollbar-none flex-1 overflow-y-auto p-4 text-sm leading-relaxed sm:p-6"
						style={{
							scrollbarWidth: "none",
							msOverflowStyle: "none"
						}}
					>
						{/* Welcome Message with Typewriter Effect */}
						<div className="mb-6">
							<div ref={typewriterRef} className="space-y-4" style={{ minHeight: "1.5rem" }}>
								{welcomeText}
								{showCursor && <span className="animate-pulse">|</span>}
							</div>
						</div>

						{/* Command Output */}
						{output.map((line) => (
							<div
								key={line.id}
								className={`mb-4 break-words ${
									line.type === "command" ? "text-emerald-300/90" : line.type === "error" ? "text-red-400" : "text-emerald-100/90"
								}`}
								dangerouslySetInnerHTML={{ __html: line.content }}
							/>
						))}

						{/* Input Line */}
						<div className="mt-4 flex items-start space-x-2">
							<div className="flex flex-shrink-0 items-center">
								{isTyping ? (
									<span className="animate-pulse text-sm text-emerald-500/50"></span>
								) : (
									<>
										<span className="text-sm text-emerald-500/70">~/about</span>
										<span className="ml-2 text-emerald-400">❯</span>
									</>
								)}
							</div>
							<div className="relative flex-1">
								<textarea
									ref={inputRef}
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
									className="max-h-32 min-h-[1.5rem] w-full resize-none overflow-hidden break-words bg-transparent py-0 text-sm leading-normal text-emerald-100/90 placeholder-emerald-500/50 outline-none"
									placeholder={isTyping ? "" : "Type a command..."}
									autoComplete="off"
									disabled={isTyping}
									rows={1}
									style={{
										whiteSpace: "pre-wrap",
										wordWrap: "break-word",
										overflowWrap: "break-word"
									}}
								/>
							</div>
						</div>
					</div>

					{/* Terminal Footer */}
					<div className="border-t border-emerald-900/20 bg-[rgba(13,13,13,0.9)] px-6 py-2">
						<div className="flex items-center justify-between text-xs text-emerald-500/50">
							<div className="flex items-center space-x-3">
								<span>Press ↑↓ to see history</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TerminalAbout;
