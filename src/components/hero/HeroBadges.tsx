"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { IconContext } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";
import { FaSpotify, FaSteam, FaGoodreads } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi2";

export function HeroBadges() {
	return (
		<div className="flex max-w-full flex-row flex-wrap gap-2">
			<HeroBadge
				text="Building: Wattwise"
				href="https://github.com/bhavv04/wattwise"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaPython />
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
				text="Listening to: Movement - Hozier"
				href="https://open.spotify.com/track/1djzKW3eYLyzjjHXazEWWh?si=fddc2e368b14456b"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaSpotify />
					</IconContext.Provider>
				}
				className="bg-[#137736] hover:bg-[#1c9245]"
			/>
			<HeroBadge
				text="Reading: War And Peace - Leo Tolstoy"
				href="https://www.goodreads.com/book/show/18243.War_and_Peace"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<FaGoodreads />
					</IconContext.Provider>
				}
				className="bg-[#8e8a76] hover:bg-[#aeab97]"
			/>
			<HeroBadge
				text="Studying: TCP/IP Illustrated - Stevens"
				href="https://www.goodreads.com/book/show/505560.TCP_IP_Illustrated_Volume_1"
				icon={
					<IconContext.Provider value={{ size: "1rem" }}>
						<HiBookOpen />
					</IconContext.Provider>
				}
				className="bg-[#5a3a4a] hover:bg-[#6f4a5d]"
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
