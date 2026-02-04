"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconContext } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import { FaSpotify, FaSteam, FaGoodreads } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";

export function HeroBadges() {
	return (
		<div className="flex max-w-full flex-row flex-wrap gap-2">
			<HeroBadge
				text="Building: Ember Portal"
				href="https://github.com/bhavv04/ember"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<RiFirebaseFill />
					</IconContext.Provider>
				}
				className="bg-[#5a493d] hover:bg-[#6b5b4e]"
			/>

			<HeroBadge
				text="Playing: Stardew Valley"
				href="https://store.steampowered.com/app/413150/Stardew_Valley/"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSteam />
					</IconContext.Provider>
				}
				className="bg-[#27395a] hover:bg-[#3e5a8f]"
			/>

			<HeroBadge
				text="Listening to: Mykonos - Fleet Foxes"
				href="https://open.spotify.com/track/3Ck96jIZdVzpWbbZ6mojsE"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSpotify />
					</IconContext.Provider>
				}
				className="bg-[#137736] hover:bg-[#1c9245]"
			/>
			<HeroBadge
				text="Reading: The Count of Monte Cristo - Alexandre Dumas"
				href="https://www.goodreads.com/book/show/7126.The_Count_of_Monte_Cristo"
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
			className={cn("inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-sm text-foreground transition-colors", className)}
		>
			{icon}

			{text}

			<LuArrowUpRight />
		</a>
	);
}
