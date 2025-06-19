"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { OutputLine } from "@/lib/terminal/types";
import { executeCommand } from "@/lib/terminal/commands";

const TerminalAbout: React.FC = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState<OutputLine[]>([]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [isTyping] = useState(false);

	const inputRef = useRef<HTMLTextAreaElement>(null);
	const outputRef = useRef<HTMLDivElement>(null);

	//const handleCommandChipClick = (cmd: string) => {
	//setInput(cmd);
	//inputRef.current?.focus();
	//};

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

			const newOutput: OutputLine[] = [
				...output,
				{
					id: Date.now().toString(),
					content: `<span class="text-gray-500">visitor@portfolio</span><span class="text-green-400">:</span><span class="text-blue-400">~</span><span class="text-gray-300">$</span> <span class="text-gray-200">${input}</span>`,
					type: "command"
				}
			];

			const result = executeCommand(input);
			if (result === "CLEAR_COMMAND") {
				setOutput([]);
				setCommandHistory([]);
				setHistoryIndex(-1);
				setInput("");
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
		[input, output]
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
					{output.length === 1 && output[0].id === "welcome" && <div dangerouslySetInnerHTML={{ __html: output[0].content }} />}

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
						<span className="text-sm text-gray-500">about</span>
						<span className="text-green-400">:</span>
						<span className="text-blue-400">~</span>
						<span className="text-gray-300">$</span>
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
