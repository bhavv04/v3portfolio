// @/components/activity/PhotoStack.tsx
"use client";

import { useState } from "react";

const images = [
	"https://picsum.photos/seed/act1/400/500",
	"https://picsum.photos/seed/act2/400/500",
	"https://picsum.photos/seed/act3/400/500",
	"https://picsum.photos/seed/act4/400/500",
	"https://picsum.photos/seed/act5/400/500",
	"https://picsum.photos/seed/act6/400/500",
	"https://picsum.photos/seed/act7/400/500"
];

const rotations = ["-rotate-4", "rotate-3", "-rotate-2", "rotate-5", "-rotate-3", "rotate-2", "-rotate-4"];

export default function PhotoStack() {
	const [active, setActive] = useState<number | null>(null);

	return (
		<div className="flex items-center justify-center pt-16">
			<div className="flex flex-col items-center gap-4">
				<span>mandatory berkely photos 🐶</span>

				<div className="flex items-center justify-center">
					{images.map((src, i) => {
						const isActive = active === i;

						return (
							<img
								key={i}
								src={src}
								alt=""
								draggable={false}
								onMouseEnter={() => setActive(i)}
								onMouseLeave={() => setActive(null)}
								onTouchStart={() => setActive(i)}
								onTouchEnd={() => setActive(null)}
								style={{
									zIndex: isActive ? 999 : i
								}}
								className={`h-28 w-20 flex-shrink-0 rounded-xl object-cover transition-all duration-300 ease-out select-none sm:h-35 sm:w-35 ${i === 0 ? "" : "-ml-10 sm:-ml-12"} ${
									isActive ? "-translate-y-3 scale-110 rotate-0" : rotations[i % rotations.length]
								} `}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
