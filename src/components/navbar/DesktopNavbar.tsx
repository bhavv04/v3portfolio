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
				"group relative px-4 py-2.5 text-sm font-medium text-white/70",
				"rounded-full transition-colors duration-300 ease-out",
				"hover:text-white",
				className
			)}
		>
			{/* Content */}
			<span className="relative z-10 flex items-center gap-2 before:absolute before:-bottom-1.5 before:left-0 before:right-0 before:h-px before:origin-right before:scale-x-0 before:bg-white/90 before:transition-transform before:duration-700 before:ease-in-out group-hover:before:origin-left group-hover:before:scale-x-100">
				{children}
			</span>
		</Comp>
	);
}
