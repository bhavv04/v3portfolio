"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { OutputLine } from "@/app/about/terminal/model";
import { executeCommand } from "@/app/about/terminal/commands";
import { X } from "lucide-react";

const WELCOME = `[OK] Initializing Portfolio Environment...
[OK] Loading Technical Stack Manifest...
[OK] Establishing Secure Session: bhav~default

Welcome to my site! Glad you're digging into the about section. 
I left the standard bio off the home page to keep things clean,
this terminal is your direct pipeline into bhav.

Type 'help' to list available system commands or click the buttons below for a quick demo.`;

const Terminal: React.FC = () => {
	const router = useRouter();
	const [input, setInput] = useState("");
	const [output, setOutput] = useState<OutputLine[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [isTyping, setIsTyping] = useState(false);
	const [welcomeText, setWelcomeText] = useState("");

	const outputRef = useRef<HTMLDivElement>(null);
	const inputDivRef = useRef<HTMLDivElement>(null);

	const typeWriter = useCallback(
		(text: string, speed = 15) => {
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

	const processResultAndAppend = useCallback(
		(cmd: string, result: string) => {
			if (result === "CLEAR_COMMAND") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");
				if (inputDivRef.current) inputDivRef.current.textContent = "";
				return;
			}

			if (result.startsWith("REDIRECT_TO_")) {
				const targetRoute = result.replace("REDIRECT_TO_", "");
				if (targetRoute.endsWith("_blank")) {
					window.open(targetRoute.replace("_blank", ""), "_blank");
				} else {
					router.push(targetRoute);
				}
				return;
			}

			const commandLine: OutputLine = {
				id: Date.now().toString(),
				content: `<span class="text-emerald-700">$</span> <span class="text-stone-300">${cmd}</span>`,
				type: "command"
			};

			const next: OutputLine[] = [...output, commandLine];
			if (result) next.push({ id: (Date.now() + 1).toString(), content: result, type: "output" });

			setOutput(next);
			setCommandHistory((prev) => [cmd, ...prev.slice(0, 49)]);
		},
		[output, router]
	);

	const handleQuickCommand = useCallback(
		(cmd: string) => {
			if (isTyping) return;
			const result = executeCommand(cmd);
			processResultAndAppend(cmd, result);
		},
		[isTyping, processResultAndAppend]
	);

	useEffect(() => {
		typeWriter(WELCOME);
	}, [typeWriter]);

	useEffect(() => {
		if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
	}, [output, welcomeText]);

	useEffect(() => {
		if (!isTyping) inputDivRef.current?.focus({ preventScroll: true });
	}, [isTyping]);

	const handleSubmit = useCallback(
		(e: React.KeyboardEvent | React.FormEvent) => {
			e.preventDefault();
			const cmd = input.trim();
			if (!cmd || isTyping) return;

			const result = executeCommand(cmd);
			processResultAndAppend(cmd, result);

			setHistoryIndex(-1);
			setInput("");
			if (inputDivRef.current) inputDivRef.current.textContent = "";
		},
		[input, isTyping, processResultAndAppend]
	);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (isTyping) return;

			// Helper function to force caret to the end of the text block
			const moveCaretToEnd = () => {
				// RequestAnimationFrame ensures the DOM has updated with the new text first
				requestAnimationFrame(() => {
					const el = inputDivRef.current;
					if (!el) return;

					const range = document.createRange();
					const sel = window.getSelection();

					// Select all contents of the editable div and collapse it to the end
					range.selectNodeContents(el);
					range.collapse(false); // false means collapse to end

					sel?.removeAllRanges();
					sel?.addRange(range);
				});
			};

			if (e.key === "ArrowUp") {
				e.preventDefault();
				const next = Math.min(historyIndex + 1, commandHistory.length - 1);
				if (commandHistory[next] !== undefined) {
					setHistoryIndex(next);
					setInput(commandHistory[next]);
					if (inputDivRef.current) {
						inputDivRef.current.textContent = commandHistory[next];
						moveCaretToEnd(); // Move cursor here
					}
				}
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
					if (inputDivRef.current) {
						inputDivRef.current.textContent = commandHistory[next] ?? "";
						moveCaretToEnd(); // Move cursor here too
					}
				}
			}
		},
		[commandHistory, historyIndex, isTyping]
	);

	return (
		<div
			className="scale-in flex h-[70vh] flex-col overflow-hidden rounded-xl bg-stone-900 text-sm"
			style={{ "--delay-index": 2 } as React.CSSProperties}
			onClick={() => !isTyping && inputDivRef.current?.focus()}
		>
			{/* Title bar */}
			<div className="grid grid-cols-3 items-center bg-stone-950 px-4 py-2">
				{/* Left side: Traffic light buttons */}
				<div className="flex items-center gap-2">
					<span className="h-3 w-3 rounded-full bg-red-500" />
					<span className="h-3 w-3 rounded-full bg-yellow-500" />
					<span className="h-3 w-3 rounded-full bg-green-500" />
				</div>

				{/* Center: Title */}
				<span className="text-center text-stone-600">bhav~default</span>

				{/* Right side: Close button */}
				<span className="text-right text-stone-600">
					<X className="inline-block h-4 w-4 cursor-pointer rounded hover:bg-stone-700/50" onClick={() => router.push("/about")} />
				</span>
			</div>

			{/* Body Logs */}
			<div ref={outputRef} className="flex-1 overflow-y-auto p-6 text-stone-500 [scrollbar-width:none]">
				<p className="mb-6 whitespace-pre-wrap leading-relaxed text-stone-400">
					{welcomeText}
					{isTyping && <span className="inline-block h-4 w-3 bg-stone-700 align-text-bottom" />}
				</p>

				{!isTyping && (
					<div className="fade-in-up mb-4 flex flex-wrap gap-2">
						{["help", "about", "books", "hobbies", "status", "neofetch", "sudo", "matrix"].map((cmd) => (
							<button
								key={cmd}
								onClick={() => handleQuickCommand(cmd)}
								className="group relative inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-stone-950 px-3 text-stone-400 transition-all duration-300 hover:bg-stone-700"
							>
								<span className="mr-1 font-bold text-emerald-600 transition-transform duration-300">{"$"}</span>
								{cmd}
							</button>
						))}
					</div>
				)}

				<div className="fade-in-up space-y-2">
					{output.map((line) => (
						<div
							key={line.id}
							className={`break-words leading-relaxed ${line.type === "error" ? "text-red-700" : "text-emerald-700"}`}
							dangerouslySetInnerHTML={{ __html: line.content }}
						/>
					))}
				</div>
			</div>

			{/* Interactive Footer Console Bar */}
			<div className="border-t border-stone-800 bg-stone-950 px-4 py-2">
				<div className="flex items-center gap-2">
					<div className="relative flex flex-1 items-center">
						{/* Placeholder — hidden once user has typed anything */}
						{!input && !isTyping && <span className="pointer-events-none absolute select-none text-stone-500">type a command ...</span>}

						<div
							ref={inputDivRef}
							contentEditable={!isTyping}
							suppressContentEditableWarning
							onInput={(e) => setInput(e.currentTarget.textContent ?? "")}
							onKeyDown={(e) => (e.key === "Enter" ? (e.preventDefault(), handleSubmit(e)) : handleKeyDown(e))}
							className="min-h-[1.25rem] w-full flex-1 border-none bg-transparent text-base text-stone-300 caret-stone-500 focus:outline-none focus:ring-0" //text-base makes ios safari zooming less aggressive
						/>
					</div>
					<span className="hidden select-none text-stone-500 sm:inline">↑↓ history · enter to run · clear to reset</span>
					<button type="button" onClick={handleSubmit} className="hidden" aria-hidden />
				</div>
			</div>
		</div>
	);
};

export default Terminal;
