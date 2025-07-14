"use client";
import { IconContext } from "react-icons";
import { LuGithub, LuLinkedin, LuMail, LuExternalLink } from "react-icons/lu";

export default function Footer() {
	return (
		<footer className="relative mx-auto max-w-4xl rounded-2xl bg-transparent px-6 py-6 text-[#cbd5e1] shadow-lg backdrop-blur-sm">
			<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				{/* Left Side: Info */}
				<div className="text-center font-mono text-sm sm:text-left">
					<span>&copy; {new Date().getFullYear()} Bhavdeep Arora</span>
				</div>

				{/* Right Side: Social Links */}
				<IconContext.Provider value={{ size: "1.2rem" }}>
					<div className="flex flex-wrap justify-center gap-4 sm:justify-end">
						<FooterLink href="https://github.com/bhav2134" color="hover:text-white" icon={<LuGithub />} label="GitHub" />
						<FooterLink href="https://www.linkedin.com/in/bhavdeeparora/" color="hover:text-blue-400" icon={<LuLinkedin />} label="LinkedIn" />
						<FooterLink href="mailto:bhavdeepsa@gmail.com?subject=Hello%20Bhavdeep" color="hover:text-green-400" icon={<LuMail />} label="Email" />
						<FooterLink href="/resume.pdf" color="hover:text-orange-400" icon={<LuExternalLink />} label="Resume" newTab />
					</div>
				</IconContext.Provider>
			</div>
		</footer>
	);
}

function FooterLink({ href, icon, label, color, newTab = true }: { href: string; icon: JSX.Element; label: string; color: string; newTab?: boolean }) {
	return (
		<a
			href={href}
			target={newTab ? "_blank" : undefined}
			rel={newTab ? "noopener noreferrer" : undefined}
			className={`group flex items-center gap-2 text-sm text-[#cbd5e1] transition duration-200 ${color}`}
			aria-label={label}
		>
			<span className="transition-transform group-hover:scale-110">{icon}</span>
			<span className="hidden sm:inline">{label}</span>
		</a>
	);
}
