"use client";

import { IconContext } from "react-icons";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuLinkedin } from "react-icons/lu";

interface HeroButtonsProps {
	size?: "sm" | "md";
}

export function HeroButtons({ size = "md" }: HeroButtonsProps) {
	const isSmall = size === "sm";
	return (
		<div className={`flex flex-row flex-wrap items-center gap-2 ${isSmall ? "gap-1" : ""}`}>
			<Button asChild variant="default" className={isSmall ? "h-7 min-h-0 px-2 py-1 text-xs" : ""}>
				<a href="#timeline" className={`font-semibold ${isSmall ? "text-xs" : ""}`} aria-label="Learn more link">
					Learn More{" "}
				</a>
			</Button>
			<Button asChild variant="default" className={isSmall ? "h-7 min-h-0 px-2 py-1 text-xs" : ""}>
				<a href="/resume.pdf" target="_blank" className={`font-semibold ${isSmall ? "text-xs" : ""}`} aria-label="Resume link">
					Resume
				</a>
			</Button>

			<IconContext.Provider value={{ size: isSmall ? "0.95em" : "1.5rem" }}>
				<Button size="icon" asChild variant="default" className={isSmall ? "h-7 min-h-0 w-7" : ""}>
					<a href="https://github.com/bhav2134" target="_blank" aria-label="GitHub link">
						<LuGithub />
					</a>
				</Button>
				<Button size="icon" asChild variant="default" className={isSmall ? "h-7 min-h-0 w-7" : ""}>
					<a href="https://www.linkedin.com/in/bhavdeeparora/" target="_blank" aria-label="Linkedin link">
						<LuLinkedin />
					</a>
				</Button>
			</IconContext.Provider>
		</div>
	);
}
