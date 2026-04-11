"use client";

import { useCat } from "@/context/CatContext";

export function CatToggleButton() {
	const { showCat, toggleCat } = useCat();

	return (
		<button
			onClick={toggleCat}
			className="relative inline-flex h-6 items-center justify-center gap-2 rounded-lg bg-neutral-700 px-2 text-sm text-white hover:bg-white hover:text-black"
		>
			{showCat ? "🙀 hide cat" : "🐱 show cat"}
		</button>
	);
}
