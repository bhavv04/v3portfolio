"use client";

import { useState } from "react";

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
	const [isHovering, setIsHovering] = useState(false);

	return (
		<span
			className="relative inline-block cursor-default underline decoration-white/30 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-white/70"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			books
			<span
				className={`pointer-events-none absolute bottom-full left-1/2 z-50 mb-5 flex -translate-x-1/2 gap-2 rounded-2xl border border-white/20 bg-stone-950/40 bg-gradient-to-b from-white/10 to-white/0 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ease-out ${
					isHovering ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
				}`}
			>
				{FAVORITE_BOOKS.map((book, i) => (
					<img
						key={book.title}
						src={book.cover}
						alt={book.title}
						title={book.title}
						className="h-30 w-20 shrink-0 rounded-md object-cover shadow-md transition-all duration-300 ease-out"
						style={{
							transitionDelay: isHovering ? `${i * 40}ms` : "0ms",
							transform: isHovering ? "translateY(0)" : "translateY(8px)",
							opacity: isHovering ? 1 : 0
						}}
					/>
				))}
				<span className="absolute top-full left-1/2 -translate-x-1/2 border-10 border-transparent border-t-white/40" />
			</span>
		</span>
	);
}
