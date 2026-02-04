"use client";
import { IconContext } from "react-icons";
import { Button } from "@/components/ui/Button";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { TbBrandLeetcode } from "react-icons/tb";

export function HeroButtons() {
	return (
		<div className="flex flex-col gap-2 sm:flex-row sm:gap-1.5">
			{/* Primary action buttons */}
			<div className="flex flex-row gap-1.5">
				<Button asChild variant="default">
					<a href="#timeline" aria-label="Learn more about me" className="">
						Learn More
					</a>
				</Button>

				<Button asChild variant="default" className="min-w-0 flex-shrink-0 px-4 py-2">
					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download my resume">
						Resume
					</a>
				</Button>
			</div>

			{/* Social media buttons */}
			<IconContext.Provider value={{ size: "1.2rem" }}>
				<div className="flex flex-row gap-1.5">
					<Button size="icon" asChild variant="default" className="">
						<a href="https://github.com/bhavv04" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
							<LuGithub />
						</a>
					</Button>

					<Button size="icon" asChild variant="default" className="">
						<a href="https://www.linkedin.com/in/bhavdeeparora/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
							<LuLinkedin />
						</a>
					</Button>

					<Button size="icon" asChild variant="default" className="">
						<a href="mailto:bhavdeepsa@gmail.com?subject=Hello%20Bhavdeep" aria-label="Send me an email">
							<LuMail />
						</a>
					</Button>

					<Button size="icon" asChild variant="default" className="">
						<a href="https://leetcode.com/u/bhavv04/" aria-label="My LeetCode profile">
							<TbBrandLeetcode />
						</a>
					</Button>
				</div>
			</IconContext.Provider>
		</div>
	);
}
