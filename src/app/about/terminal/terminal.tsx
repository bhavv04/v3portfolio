"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { OutputLine } from "@/app/about/terminal/model";
import { executeCommand } from "@/app/about/terminal/commands";
import { WELCOME_MESSAGE } from "@/app/about/terminal/data";
import { X, ChevronUp } from "lucide-react";

function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia(query);
		setMatches(mq.matches);
		const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, [query]);
	return matches;
}

function OutputBlock({ line }: { line: OutputLine }) {
	const base = "terminal-line-enter break-words leading-relaxed flex items-start gap-2";
	if (line.type === "command") return <div className={base} dangerouslySetInnerHTML={{ __html: line.content }} />;
	if (line.type === "error")
		return (
			<div className={`${base} text-red-500`}>
				<span className="select-none text-red-700">▸</span>
				<span dangerouslySetInnerHTML={{ __html: line.content }} />
			</div>
		);
	return (
		<div className={`${base} text-emerald-700`}>
			<span className="select-none text-stone-600">▸</span>
			<span className="flex-1" dangerouslySetInnerHTML={{ __html: line.content }} />
		</div>
	);
}

const Terminal: React.FC = () => {
	const router = useRouter();
	const isMobile = useMediaQuery("(max-width: 640px)");
	const [input, setInput] = useState("");
	const [output, setOutput] = useState<OutputLine[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [isTyping, setIsTyping] = useState(false);
	const [welcomeText, setWelcomeText] = useState("");
	const outputRef = useRef<HTMLDivElement>(null);
	const inputDivRef = useRef<HTMLDivElement>(null);
	const mobileInputRef = useRef<HTMLInputElement>(null);

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
				} else setIsTyping(false);
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
				const route = result.replace("REDIRECT_TO_", "");
				if (route.endsWith("_blank")) window.open(route.replace("_blank", ""), "_blank");
				else router.push(route);
				return;
			}
			const cmdLine: OutputLine = {
				id: Date.now().toString(),
				content: `<span class="text-emerald-600">$</span> <span class="text-stone-300">${cmd}</span>`,
				type: "command"
			};
			const next = [...output, cmdLine];
			if (result) next.push({ id: (Date.now() + 1).toString(), content: result, type: "output" });
			setOutput(next);
			setCommandHistory((prev) => [cmd, ...prev.slice(0, 49)]);
		},
		[output, router]
	);

	const handleQuickCommand = useCallback(
		(cmd: string) => {
			if (!isTyping) processResultAndAppend(cmd, executeCommand(cmd));
		},
		[isTyping, processResultAndAppend]
	);

	useEffect(() => {
		if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
	}, [output, welcomeText]);
	useEffect(() => {
		if (!isTyping) (isMobile ? mobileInputRef : inputDivRef).current?.focus({ preventScroll: true });
	}, [isTyping, isMobile]);
	useEffect(() => {
		typeWriter(WELCOME_MESSAGE);
	}, [typeWriter]);

	const handleSubmit = useCallback(
		(e?: React.KeyboardEvent | React.FormEvent) => {
			e?.preventDefault();
			const cmd = input.trim();
			if (!cmd || isTyping) return;
			processResultAndAppend(cmd, executeCommand(cmd));
			setHistoryIndex(-1);
			setInput("");
			if (inputDivRef.current) inputDivRef.current.textContent = "";
		},
		[input, isTyping, processResultAndAppend]
	);

	const moveCaretToEnd = () =>
		requestAnimationFrame(() => {
			const el = inputDivRef.current;
			if (!el) return;
			const range = document.createRange();
			const sel = window.getSelection();
			range.selectNodeContents(el);
			range.collapse(false);
			sel?.removeAllRanges();
			sel?.addRange(range);
		});

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (isTyping) return;
			if (e.key === "ArrowUp") {
				e.preventDefault();
				const next = Math.min(historyIndex + 1, commandHistory.length - 1);
				if (commandHistory[next] !== undefined) {
					setHistoryIndex(next);
					setInput(commandHistory[next]);
					if (inputDivRef.current) {
						inputDivRef.current.textContent = commandHistory[next];
						moveCaretToEnd();
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
						moveCaretToEnd();
					}
				}
			}
		},
		[commandHistory, historyIndex, isTyping]
	);

	const cycleMobileHistory = useCallback(() => {
		const next = Math.min(historyIndex + 1, commandHistory.length - 1);
		if (commandHistory[next] !== undefined) {
			setHistoryIndex(next);
			setInput(commandHistory[next]);
		}
	}, [commandHistory, historyIndex]);

	return (
		<div
			className="scale-in relative flex h-[70vh] flex-col overflow-hidden rounded-xl bg-stone-900 text-sm shadow-lg shadow-black/40"
			style={{ "--delay-index": 2 } as React.CSSProperties}
			onClick={() => !isTyping && (isMobile ? mobileInputRef : inputDivRef).current?.focus()}
		>
			<div className="terminal-scanlines" aria-hidden />

			{/* Title bar */}
			<div className="relative z-10 grid grid-cols-3 items-center bg-stone-950 px-4 py-2">
				<div className="terminal-dot-group flex items-center gap-2">
					<span className="dot-red h-3 w-3 rounded-full bg-red-500 transition-shadow duration-200" />
					<span className="dot-yellow h-3 w-3 rounded-full bg-yellow-500 transition-shadow duration-200" />
					<span className="dot-green h-3 w-3 rounded-full bg-green-500 transition-shadow duration-200" />
				</div>
				<span className="text-center text-xs text-stone-600">bhav~default</span>
				<span className="text-right text-stone-600">
					<X className="inline-block h-4 w-4 cursor-pointer rounded hover:bg-stone-700/50" onClick={() => router.push("/about")} />
				</span>
			</div>

			{/* Body */}
			<div ref={outputRef} className="relative z-10 flex-1 overflow-y-auto p-6 text-stone-500 [scrollbar-width:none]">
				<p className="mb-6 whitespace-pre-wrap leading-relaxed text-stone-400">
					{welcomeText}
					{isTyping && <span className="inline-block h-4 w-3 animate-pulse bg-stone-500 align-text-bottom" />}
				</p>
				{!isTyping && (
					<div className="fade-in-up mb-6 flex flex-wrap gap-2">
						{["help", "about", "books", "hobbies", "status", "neofetch", "sudo", "matrix"].map((cmd) => (
							<button
								key={cmd}
								onClick={() => handleQuickCommand(cmd)}
								className="min-h-[44px] rounded-md bg-stone-950 px-4 py-2 text-stone-400 transition-all duration-200 hover:bg-white hover:text-black active:scale-95 sm:min-h-0"
							>
								{cmd}
							</button>
						))}
					</div>
				)}
				<div className="space-y-2">
					{output.map((line) => (
						<OutputBlock key={line.id} line={line} />
					))}
				</div>
			</div>

			{/* Footer */}
			<div
				className="relative z-10 border-t border-stone-800 bg-stone-950 px-4 py-2"
				style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
			>
				<div className="flex items-center gap-2">
					<span className="select-none text-emerald-600">$</span>
					<div className="relative flex flex-1 items-center">
						{!input && !isTyping && <span className="pointer-events-none absolute select-none text-stone-600">type a command...</span>}
						{isMobile ? (
							<input
								ref={mobileInputRef}
								type="text"
								value={input}
								disabled={isTyping}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
								className="w-full border-none bg-transparent text-base text-stone-300 focus:outline-none focus:ring-0"
								autoComplete="off"
								autoCorrect="off"
								autoCapitalize="off"
								spellCheck={false}
							/>
						) : (
							<div
								ref={inputDivRef}
								contentEditable={!isTyping}
								suppressContentEditableWarning
								onInput={(e) => setInput(e.currentTarget.textContent ?? "")}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										handleSubmit(e);
									} else handleKeyDown(e);
								}}
								className="min-h-[1.25rem] w-full flex-1 border-none bg-transparent text-base text-stone-300 focus:outline-none focus:ring-0"
							/>
						)}
					</div>
					{isMobile ? (
						<div className="flex items-center gap-1">
							<button
								onClick={cycleMobileHistory}
								disabled={commandHistory.length === 0}
								className="flex h-8 w-8 items-center justify-center rounded text-stone-500 hover:bg-stone-800 disabled:opacity-30"
								aria-label="Previous command"
							>
								<ChevronUp className="h-4 w-4" />
							</button>
							<button onClick={() => handleSubmit()} className="rounded bg-stone-800 px-3 py-1 text-xs hover:bg-white hover:text-black">
								run
							</button>
						</div>
					) : (
						<span className="hidden select-none text-xs text-stone-600 sm:inline">↑↓ history · enter to run · clear to reset</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Terminal;
