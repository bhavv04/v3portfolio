import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface EncryptedTitleProps {
	text: ReactNode;
	className?: string;
	duration?: number;
}

export function EncryptedTitle({ text, className, duration = 500 }: EncryptedTitleProps) {
	const [displayText, setDisplayText] = useState("");
	const textString = typeof text === "string" ? text : String(text);

	useEffect(() => {
		const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
		let frame = 0;
		const totalFrames = duration / 30;

		const interval = setInterval(() => {
			setDisplayText(
				textString
					.split("")
					.map((char, index) => {
						if (char === " ") return " ";

						const progress = frame / totalFrames;
						const charProgress = index / textString.length;

						if (progress > charProgress) {
							return textString[index];
						}

						return chars[Math.floor(Math.random() * chars.length)];
					})
					.join("")
			);

			frame++;

			if (frame > totalFrames) {
				clearInterval(interval);
				setDisplayText(textString);
			}
		}, 30);

		return () => clearInterval(interval);
	}, [textString, duration]);

	return <h1 className={cn("mb-2 text-3xl font-bold xs:text-[2.5rem]", className)}>{displayText}</h1>;
}
