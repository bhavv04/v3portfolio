"use client";

import { useEffect, useRef, useState } from "react";

const FAVORITE_GAMES = [
	{
		title: "The Witcher 3",
		cover: "https://cdn.akamai.steamstatic.com/steam/apps/292030/library_600x900.jpg"
	},
	{
		title: "Stardew Valley",
		cover: "https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg"
	},
	{
		title: "Outer Wilds",
		cover: "https://cdn.akamai.steamstatic.com/steam/apps/753640/library_600x900.jpg"
	},
	{
		title: "Horizon Forbidden West",
		cover: "https://cdn.akamai.steamstatic.com/steam/apps/2420110/library_600x900.jpg"
	}
];

export function GameHoverText() {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (!open) return;
		const close = (e: PointerEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
		};
		document.addEventListener("pointerdown", close);
		return () => document.removeEventListener("pointerdown", close);
	}, [open]);

	return (
		<span
			ref={ref}
			className="group relative inline-block cursor-pointer underline decoration-white/50 underline-offset-3 transition-colors duration-300 hover:decoration-white"
			onClick={(e) => {
				e.stopPropagation();
				setOpen((o) => !o);
			}}
		>
			games
			<span
				className={`absolute bottom-full left-1/2 z-50 flex origin-bottom -translate-x-1/2 overflow-hidden rounded-xl border border-white/70 bg-stone-950 bg-gradient-to-b from-white/10 to-white/0 shadow-2xl shadow-black/40 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 ${
					open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-1 scale-90 opacity-0"
				}`}
			>
				{FAVORITE_GAMES.map((game) => (
					<img
						key={game.title}
						src={game.cover}
						alt={game.title}
						title={game.title}
						loading="lazy"
						className="h-24 w-16 shrink-0 object-cover shadow-md md:h-28 md:w-18"
					/>
				))}
			</span>
		</span>
	);
}
