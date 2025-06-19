"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MobileNavbarProps {
	className?: string;
}

export function MobileNavbar({ className }: MobileNavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={cn("sticky top-4 z-50", className)}>
			<button
				className={cn(
					"relative mx-auto flex w-full flex-col items-center justify-center",
					"border border-white/10 bg-black/40 backdrop-blur-xl",
					"py-3.5 text-lg font-medium text-white/90 shadow-none shadow-black/25",
					"before:absolute before:inset-0 before:bg-gradient-to-r",
					"before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10",
					"before:-z-10 before:p-[1px] before:content-['']",
					"transition-all duration-300 hover:text-white hover:shadow-none hover:shadow-slate-900",
					{ "rounded-sm": !isOpen },
					{ "rounded-none rounded-b-none": isOpen }
				)}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="relative z-10">Bhavdeep Arora</span>
				{/* Animated chevron */}
				<svg
					className={cn("absolute right-4 h-4 w-4 transition-transform duration-300", { "rotate-180": isOpen })}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			<nav
				className={cn(
					"absolute flex w-full flex-col items-center gap-1",
					"rounded-b-2xl border border-t-0 border-white/10 bg-black/40 backdrop-blur-xl",
					"py-4 shadow-2xl shadow-black/25",
					"before:absolute before:inset-0 before:rounded-b-2xl before:bg-gradient-to-r",
					"before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10",
					"before:-z-10 before:p-[1px] before:content-['']",
					"duration-300 animate-in slide-in-from-top-2",
					{ hidden: !isOpen }
				)}
			>
				<NavbarLink href="/" setIsOpen={setIsOpen} useClientSideRouting>
					Home
				</NavbarLink>
				<NavbarLink href="/#about" setIsOpen={setIsOpen} useClientSideRouting>
					About
				</NavbarLink>
				<NavbarLink href="/#timeline" setIsOpen={setIsOpen} useClientSideRouting>
					Experience/Education
				</NavbarLink>
				<NavbarLink href="/#projects" setIsOpen={setIsOpen} useClientSideRouting>
					Projects
				</NavbarLink>
				<NavbarLink href="/#contact" setIsOpen={setIsOpen} useClientSideRouting>
					Contact
				</NavbarLink>
				<NavbarLink href="/resume.pdf" setIsOpen={setIsOpen} openInNewTab>
					Resume
				</NavbarLink>
			</nav>
		</div>
	);
}

interface NavbarLinkProps {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
	href: string;
	openInNewTab?: boolean;
	useClientSideRouting?: boolean;
	className?: string;
	children: React.ReactNode;
}

function NavbarLink({ setIsOpen, href, openInNewTab = false, useClientSideRouting, className, children }: NavbarLinkProps) {
	const Comp = useClientSideRouting ? Link : "a";

	return (
		<Comp
			href={href}
			target={openInNewTab ? "_blank" : "_self"}
			className={cn(
				"group relative w-full px-6 py-2.5 text-center text-sm font-medium text-white/80",
				"rounded-full transition-all duration-300 ease-out",
				"hover:bg-white/10 hover:text-white",
				"active:scale-95 active:bg-white/20",
				"focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-transparent",
				className
			)}
			onClick={() => setIsOpen && setIsOpen(false)}
		>
			{/* Animated background on hover */}
			<span className="absolute inset-0 rounded-full bg-gradient-to-r from-zinc-500/20 via-stone-500/20 to-gray-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			{/* Animated underline */}
			<span className="absolute bottom-1 left-1/2 h-[2px] w-0 bg-gradient-to-r from-amber-300 to-orange-400 transition-all duration-300 ease-out group-hover:w-8 group-hover:-translate-x-1/2" />

			{/* Content */}
			<span className="relative z-10 flex items-center justify-center gap-2">
				{children}
				{openInNewTab && (
					<svg
						className="h-3 w-3 opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				)}
			</span>
		</Comp>
	);
}
