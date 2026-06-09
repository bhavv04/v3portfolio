"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, User, BriefcaseBusiness, Wrench, Microscope, Coffee } from "lucide-react";

const navItems = [
	{ href: "/", label: "Home", icon: Home, useClientSideRouting: true },
	{ href: "/about", label: "About", icon: User, useClientSideRouting: true },
	{ href: "/timeline", label: "Experiences & Education", icon: BriefcaseBusiness, useClientSideRouting: false },
	null,
	{ href: "/projects", label: "Projects", icon: Wrench, useClientSideRouting: true },
	{ href: "/research", label: "Research", icon: Microscope, useClientSideRouting: true },
	null,
	{ href: "/Bhavdeep_s_Resume.pdf", label: "Resume", icon: Coffee, openInNewTab: true }
] as const;

export function DesktopNavbar({ className }: { className?: string }) {
	const pathname = usePathname();

	return (
		<nav className={cn("fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-1 rounded-lg bg-neutral-900 p-2", className)}>
			{navItems.map((item, i) =>
				item === null ? (
					<div key={i} className="my-1 h-px w-6 bg-white/20" />
				) : (
					<NavbarIconButton
						key={item.href}
						{...item}
						isActive={item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0])}
					/>
				)
			)}
		</nav>
	);
}

function NavbarIconButton({
	href,
	label,
	icon: Icon,
	isActive = false,
	openInNewTab = false,
	useClientSideRouting = false
}: {
	href: string;
	label: string;
	icon: React.ElementType;
	isActive?: boolean;
	openInNewTab?: boolean;
	useClientSideRouting?: boolean;
}) {
	const Comp = useClientSideRouting ? Link : "a";

	return (
		<div className="group relative flex items-center">
			<Comp
				href={href}
				target={openInNewTab ? "_blank" : "_self"}
				aria-label={label}
				className={cn(
					"relative flex size-10 items-center justify-center rounded-xl transition-all duration-200",
					"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
					"",
					isActive ? "bg-white text-black" : "text-white/35 hover:bg-white/10 hover:text-white"
				)}
			>
				<Icon size={18} strokeWidth={isActive ? 2 : 2} />
			</Comp>

			{/* tooltip */}
			<span className="pointer-events-none absolute right-[calc(100%+0.875rem)] top-1/2 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-lg border border-white/[0.08] bg-[rgba(13,13,13,0.9)] px-2.5 py-1 text-xs tracking-wide text-white/70 opacity-0 backdrop-blur-sm transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">
				{label}
				{openInNewTab && " ↗"}
			</span>
		</div>
	);
}
