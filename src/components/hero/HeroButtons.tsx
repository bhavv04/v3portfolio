"use client";

import { IconContext } from "react-icons";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export function HeroButtons() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-2">
			<Button asChild variant="default">
				<a href="#timeline" className="font-semibold" aria-label="Learn more link">
					Learn more{" "}
				</a>
			</Button>
			<Button asChild variant="default">
				<a href="/resume.pdf" target="_blank" className="font-semibold" aria-label="Resume link">
					Resume
				</a>
			</Button>

			<IconContext.Provider value={{ size: "1.5rem" }}>
				<Button size="icon" asChild variant="default">
					<a href="https://github.com/bhav2134" target="_blank" aria-label="GitHub link">
						<LuGithub />
					</a>
				</Button>
				<Button size="icon" asChild variant="default">
					<a href="https://www.linkedin.com/in/bhavdeeparora/" target="_blank" aria-label="Linkedin link">
						<LuLinkedin />
					</a>
				</Button>
			</IconContext.Provider>
		</div>
	);
}
