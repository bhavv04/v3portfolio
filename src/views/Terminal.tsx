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
	const [welcomeText, setWelcomeText] = useState("");
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const outputRef = useRef<HTMLDivElement>(null);

	const typeWriter = useCallback(
		(text: string, speed: number = 20) => {
			if (welcomeText === "") {
				setIsTyping(true);
				setWelcomeText("");

				let i = 0;
				const type = () => {
					if (i < text.length) {
						setWelcomeText(text.substring(0, i + 1));
						i++;
						setTimeout(type, speed);
					} else {
						setIsTyping(false);
					}
				};

				setTimeout(type, 800);
			}
		},
		[welcomeText]
	);

	const handleSubmit = useCallback(
		(e: React.KeyboardEvent | React.FormEvent) => {
			e.preventDefault();
			if (input.trim() === "" || isTyping) return;

			const command = input.toLowerCase().trim();

			if (command === "clear") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");
				return;
			}

			const newOutput: OutputLine[] = [
				...output,
				{
					id: Date.now().toString(),
					content: `<div class="flex items-center space-x-2 mb-2">
						<span class="text-emerald-400 font-medium">~/about</span>
						<span class="text-gray-500">:</span>
						<span class="text-cyan-400/80">~</span>
						<span class="text-emerald-500/70">❯</span>
						<span class="text-gray-100 break-all font-medium">${input}</span>
					</div>`,
					type: "command"
				}
			];

			const result = executeCommand(input);
			if (result === "CLEAR_COMMAND") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");

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
			if (isTyping) return;

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
		<div className="relative mt-10 flex min-h-screen items-center justify-center">
			<div className="relative max-w-3xl font-mono sm:w-full">
				<div className="mx-auto flex h-[80vh] flex-col rounded-xl bg-transparent backdrop-blur-xl" onClick={handleTerminalClick}>
					{/* Terminal Header */}
					<div className="flex items-center justify-between border-b border-emerald-500/30 bg-[rgba(13,13,13,0.98)] px-4 py-3 sm:px-6 sm:py-4">
						<div className="flex items-center space-x-3 sm:space-x-4">
							<div className="flex space-x-2">
								<div className="h-3 w-3 rounded-full bg-[#FF5F57]"></div>
								<div className="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
								<div className="h-3 w-3 rounded-full bg-[#28C840]"></div>
							</div>
							<div className="text-xs font-medium text-emerald-400 sm:text-sm">terminal@portfolio</div>
						</div>
					</div>

					{/* Terminal Content */}
					<div ref={outputRef} className="hide-scrollbar flex-1 overflow-y-auto p-4 text-sm leading-relaxed sm:p-6">
						{/* Welcome Message */}
						<div className="mb-8">
							<div className="font-medium text-emerald-400">
								{welcomeText}
								{isTyping && <span className="ml-1 animate-pulse text-emerald-400">█</span>}
							</div>
						</div>

						{/* Command Output */}
						<div className="space-y-3">
							{output.map((line) => (
								<div
									key={line.id}
									className={`break-words ${
										line.type === "command" ? "text-white" : line.type === "error" ? "text-red-400" : "text-gray-300"
									}`}
									dangerouslySetInnerHTML={{ __html: line.content }}
								/>
							))}
						</div>

						{/* Input Line */}
						<div className="mt-6 flex items-start space-x-2">
							<div className="flex flex-shrink-0 items-center space-x-2">
								{isTyping ? (
									<div className="flex items-center space-x-2">
										<span className="animate-pulse text-emerald-400/70">⏳</span>
										<span className="text-xs text-gray-500">Processing...</span>
									</div>
								) : (
									<>
										<span className="text-sm font-medium text-emerald-400">~/about</span>
										<span className="ml-1 animate-pulse text-cyan-400">❯</span>
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
									className="max-h-32 min-h-[1.5rem] w-full resize-none overflow-hidden break-words bg-transparent py-0 text-sm leading-normal text-white placeholder-gray-500 outline-none"
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
					<div className="border-t border-emerald-500/30 bg-[rgba(13,13,13,0.98)] px-4 py-2 sm:px-6">
						<div className="text-xs text-gray-500">
							<span>↑↓ History</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TerminalAbout;
