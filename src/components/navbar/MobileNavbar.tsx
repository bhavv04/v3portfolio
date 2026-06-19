"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, User, BriefcaseBusiness, Wrench, Microscope, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

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

export function MobileNavbar({ className }: { className?: string }) {
	const pathname = usePathname();
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			const atBottom = window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10;

			// Show at bottom
			if (atBottom) {
				setVisible(true);
			}
			// Scrolling down
			else if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setVisible(false);
			}
			// Scrolling up
			else if (currentScrollY < lastScrollY) {
				setVisible(true);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={cn(
				"fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300",
				visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
			)}
		>
			<nav className={cn("flex items-center gap-2 rounded-lg bg-stone-900 p-2", className)}>
				{navItems.map((item, i) =>
					item === null ? (
						<div key={i} className="mx-1 h-6 w-px bg-white/10" />
					) : (
						(() => {
							const { href, label, icon: Icon, ...rest } = item;

							const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

							const Comp = "useClientSideRouting" in rest && rest.useClientSideRouting ? Link : "a";

							const openInNewTab = "openInNewTab" in rest;

							return (
								<Comp
									key={href}
									href={href}
									target={openInNewTab ? "_blank" : "_self"}
									aria-label={label}
									className={cn(
										"relative flex size-10 items-center justify-center rounded-lg transition-all duration-200 md:size-12",
										"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
										isActive ? "bg-white text-black" : "text-white/35 hover:bg-white/10 hover:text-white"
									)}
								>
									<Icon size={18} strokeWidth={2} />
								</Comp>
							);
						})()
					)
				)}
			</nav>
		</div>
	);
}
