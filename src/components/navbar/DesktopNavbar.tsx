import Link from "next/link";
import { cn } from "@/lib/utils";

interface DesktopNavbarProps {
	className?: string;
}

export function DesktopNavbar({ className }: DesktopNavbarProps) {
	return (
		<nav
			className={cn(
				"before:to-white/5before:-z-10 sticky top-4 z-10 mx-auto flex w-fit items-center justify-center gap-8 rounded-full bg-[rgb(13,13,13,0)] px-8 py-3.5 backdrop-blur-xl backdrop-saturate-150 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/5 before:via-white/0 before:p-[1px] before:content-['']",
				className
			)}
		>
			<NavbarLink href="/" className="" useClientSideRouting>
				Home
			</NavbarLink>
			<NavbarLink href="/about" className="" useClientSideRouting>
				About
			</NavbarLink>
			<NavbarLink href="/timeline" className="" useClientSideRouting>
				Experience/Education
			</NavbarLink>
			<NavbarLink href="/projects" className="" useClientSideRouting>
				Projects
			</NavbarLink>
			<NavbarLink href="/research" className="" useClientSideRouting>
				Research
			</NavbarLink>
			<NavbarLink href="/resume.pdf" openInNewTab className="">
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
				"relative before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-0 before:-translate-x-1/2 before:bg-primary before:transition-[width] before:duration-200 before:content-[''] hover:before:w-full",
				className
			)}
		>
			{children}
		</Comp>
	);
}
