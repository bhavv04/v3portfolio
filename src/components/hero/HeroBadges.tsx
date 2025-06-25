"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconContext } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import { FaSpotify, FaSteam, FaGoodreads } from "react-icons/fa6";
import { SiOpengl } from "react-icons/si";

export function HeroBadges() {
	return (
		<div className="flex max-w-full flex-row flex-wrap gap-2">
			<HeroBadge
				text="Simulating: Newton's Playground"
				href="https://github.com/bhav2134/Newtons-Playground"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<SiOpengl />
					</IconContext.Provider>
				}
				className="bg-[#5a493d] hover:bg-[#6b5b4e]"
			/>

			<HeroBadge
				text="Playing: Witcher 3: The Wild Hunt"
				href="https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSteam />
					</IconContext.Provider>
				}
				className="bg-[#27395a] hover:bg-[#3e5a8f]"
			/>

			<HeroBadge
				text="Listening to: White Winter Hymnal - Fleet Foxes"
				href="https://open.spotify.com/track/0GegHVxeozw3rdjte45Bfx?si=c9871c7e70fc431c"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSpotify />
					</IconContext.Provider>
				}
				className="bg-[#137736] hover:bg-[#1c9245]"
			/>
			<HeroBadge
				text="Reading: Gardens of the Moon - Steven Erikson"
				href="https://www.goodreads.com/book/show/55399.Gardens_of_the_Moon"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaGoodreads />
					</IconContext.Provider>
				}
				className="bg-[#8e8a76] hover:bg-[#aeab97]"
			/>
		</div>
	);
}

interface HeroBadgeProps {
	icon: React.ReactNode;
	text: string;
	href: string;
	className?: string;
}

export function HeroBadge({ icon, text, href, className }: HeroBadgeProps) {
	return (
		<a
			href={href}
			target="_blank"
			className={cn("inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1 text-sm text-foreground transition-colors", className)}
		>
			{icon}

			{text}

			<LuArrowUpRight />
		</a>
	);
}
