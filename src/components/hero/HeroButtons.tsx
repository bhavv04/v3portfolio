"use client";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuLinkedin } from "react-icons/lu";

interface HeroButtonsProps {
	size?: "sm" | "md";
}

export function HeroButtons({ size = "md" }: HeroButtonsProps) {
	const isSmall = size === "sm";

	// Debug: Log when component mounts/unmounts
	useEffect(() => {
		console.log("HeroButtons mounted/re-mounted");
		return () => {
			console.log("HeroButtons unmounted");
		};
	}, []);

	// Debug: Log when size changes
	useEffect(() => {
		console.log("HeroButtons size changed:", size);
	}, [size]);

	const handleLearnMoreClick = (e: React.MouseEvent) => {
		console.log("Learn More clicked - event:", e);
		console.log("Target element:", e.currentTarget);
		// Don't prevent default - let the anchor work normally
	};

	const handleResumeClick = (e: React.MouseEvent) => {
		console.log("Resume clicked - event:", e);
		console.log("Target element:", e.currentTarget);
	};

	const handleGithubClick = (e: React.MouseEvent) => {
		console.log("GitHub clicked - event:", e);
		console.log("Target element:", e.currentTarget);
	};

	const handleLinkedinClick = (e: React.MouseEvent) => {
		console.log("LinkedIn clicked - event:", e);
		console.log("Target element:", e.currentTarget);
	};

	console.log("HeroButtons rendering with size:", size, "isSmall:", isSmall);

	return (
		<div className={`flex flex-row flex-wrap items-center gap-2 ${isSmall ? "gap-1" : ""}`}>
			<Button asChild variant="default" className={isSmall ? "h-7 min-h-0 px-2 py-1 text-xs" : ""}>
				<a href="#timeline" className={`font-semibold ${isSmall ? "text-xs" : ""}`} aria-label="Learn more link" onClick={handleLearnMoreClick}>
					Learn More{" "}
				</a>
			</Button>

			<Button asChild variant="default" className={isSmall ? "h-7 min-h-0 px-2 py-1 text-xs" : ""}>
				<a
					href="/resume.pdf"
					target="_blank"
					className={`font-semibold ${isSmall ? "text-xs" : ""}`}
					aria-label="Resume link"
					onClick={handleResumeClick}
				>
					Resume
				</a>
			</Button>

			<IconContext.Provider value={{ size: isSmall ? "0.95em" : "1.5rem" }}>
				<Button size="icon" asChild variant="default" className={isSmall ? "h-7 min-h-0 w-7" : ""}>
					<a href="https://github.com/bhav2134" target="_blank" aria-label="GitHub link" onClick={handleGithubClick}>
						<LuGithub />
					</a>
				</Button>

				<Button size="icon" asChild variant="default" className={isSmall ? "h-7 min-h-0 w-7" : ""}>
					<a href="https://www.linkedin.com/in/bhavdeeparora/" target="_blank" aria-label="Linkedin link" onClick={handleLinkedinClick}>
						<LuLinkedin />
					</a>
				</Button>
			</IconContext.Provider>
		</div>
	);
}
