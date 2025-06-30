import Link from "next/link";
import { cn } from "@/lib/utils";

interface DesktopNavbarProps {
	className?: string;
}

export function DesktopNavbar({ className }: DesktopNavbarProps) {
	return (
		<nav
			className={cn(
				"sticky top-4 z-[100] mx-auto flex w-fit items-center justify-center gap-1",
				"rounded-full border border-white/10",
				"bg-[rgb(13,13,13,0)] backdrop-blur-xl backdrop-saturate-150",
				"px-2 py-2 shadow-2xl shadow-black/25",
				"before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r",
				"before:from-white/5 before:via-white/0 before:to-white/5",
				"before:-z-10 before:p-[1px] before:content-['']",
				className
			)}
		>
			<NavbarLink href="/#home">Home</NavbarLink>
			<NavbarLink href="/about" useClientSideRouting>
				About
			</NavbarLink>
			<NavbarLink href="/timeline">Experience/Education</NavbarLink>
			<NavbarLink href="/projects">Projects</NavbarLink>
			<NavbarLink href="/resume.pdf" openInNewTab>
				Resume
			</NavbarLink>
		</nav>
	);
}

interface NavbarLinkProps {
	href: string;
	openInNewTab?: boolean;
	useClientSideRouting?: boolean;
	className?: string;
	children: React.ReactNode;
}

function NavbarLink({ href, openInNewTab = false, useClientSideRouting, className, children }: NavbarLinkProps) {
	const Comp = useClientSideRouting ? Link : "a";

	return (
		<Comp
			href={href}
			target={openInNewTab ? "_blank" : "_self"}
			className={cn(
				"group relative px-4 py-2.5 text-sm font-medium text-white/80",
				"rounded-full transition-all duration-300 ease-out",
				"hover:bg-white/10 hover:text-white",
				"active:scale-95 active:bg-white/20",
				className
			)}
		>
			{/* Animated background on hover */}
			<span className="absolute inset-0 rounded-full bg-gradient-to-r from-black/10 via-white/0 to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			{/* Animated underline */}
			<span className="absolute bottom-1 left-1/2 h-[2px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-5/12 group-hover:-translate-x-1/2" />

			{/* Content */}
			<span className="relative z-10 flex items-center gap-2">{children}</span>
		</Comp>
	);
}
