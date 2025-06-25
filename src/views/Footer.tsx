"use client";
import { IconContext } from "react-icons";
import { LuGithub, LuLinkedin, LuMail, LuExternalLink } from "react-icons/lu";

export default function Footer() {
	return (
		<footer className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-6 text-[#cbd5e1] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_2px_rgba(255,255,255,0.03)]">
			<div className="flex flex-col items-center gap-6 px-4 sm:px-8 lg:flex-row lg:justify-between">
				{/* Left: Copyright & Status */}
				<div className="flex flex-col items-center gap-3 font-mono text-sm lg:items-start">
					<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
						<span>&copy; {new Date().getFullYear()} Bhavdeep Arora</span>
						<span className="mx-1 hidden sm:inline">-</span>
						<span className="flex items-center gap-2">
							<span className="relative flex h-2.5 w-2.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
							</span>
							<span className="text-[#94a3b8]">All Services Nominal</span>
						</span>
					</div>
				</div>

				{/* Right: Social Links */}
				<div className="flex flex-col items-center gap-4 lg:items-end">
					<IconContext.Provider value={{ size: "1.1rem" }}>
						<div className="flex items-center gap-4">
							<a
								href="https://github.com/bhav2134"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 text-[#cbd5e1] transition-colors duration-200 hover:text-white"
								aria-label="GitHub"
							>
								<LuGithub className="transition-transform duration-200 group-hover:scale-110" />
								<span className="hidden text-sm sm:inline">GitHub</span>
							</a>

							<a
								href="https://www.linkedin.com/in/bhavdeeparora/"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 text-[#cbd5e1] transition-colors duration-200 hover:text-blue-400"
								aria-label="LinkedIn"
							>
								<LuLinkedin className="transition-transform duration-200 group-hover:scale-110" />
								<span className="hidden text-sm sm:inline">LinkedIn</span>
							</a>

							<a
								href="mailto:bhavdeepsa@gmail.com?subject=Hello%20Bhavdeep"
								className="group flex items-center gap-2 text-[#cbd5e1] transition-colors duration-200 hover:text-green-400"
								aria-label="Email"
							>
								<LuMail className="transition-transform duration-200 group-hover:scale-110" />
								<span className="hidden text-sm sm:inline">Email</span>
							</a>

							<a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 text-[#cbd5e1] transition-colors duration-200 hover:text-orange-400"
								aria-label="Resume"
							>
								<LuExternalLink className="transition-transform duration-200 group-hover:scale-110" />
								<span className="hidden text-sm sm:inline">Resume</span>
							</a>
						</div>
					</IconContext.Provider>
				</div>
			</div>
		</footer>
	);
}
