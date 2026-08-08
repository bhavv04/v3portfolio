"use client";

import { useEffect, useRef, useState } from "react";

const FAVORITE_BOOKS = [
	{
		title: "Piranesi",
		cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1773750050i/50202953.jpg"
	},
	{
		title: "Words of Radiance",
		cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1728768241i/17332218.jpg"
	},
	{
		title: "The Brothers Karamazov",
		cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1616243056i/4935._SX300_.jpg"
	},
	{
		title: "The Sword of Destiny",
		cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1537891490i/42054761._SX300_.jpg"
	}
];

export function BookHoverText() {
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
			books
			<span
				className={`absolute bottom-full left-1/2 z-50 flex origin-bottom -translate-x-1/2 overflow-hidden rounded-xl border border-white/70 bg-stone-950 bg-gradient-to-b from-white/10 to-white/0 shadow-2xl shadow-black/40 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 ${
					open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-1 scale-90 opacity-0"
				}`}
			>
				{FAVORITE_BOOKS.map((book) => (
					<img
						key={book.title}
						src={book.cover}
						alt={book.title}
						title={book.title}
						loading="lazy"
						className="h-24 w-16 shrink-0 object-cover shadow-md md:h-28 md:w-18"
					/>
				))}
			</span>
		</span>
	);
}
