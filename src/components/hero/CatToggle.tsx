"use client";

import { useCat } from "@/context/CatContext";

export function CatToggleButton() {
	const { showCat, toggleCat } = useCat();

	return (
		<button
			onClick={toggleCat}
			className="duration-800 relative inline-flex h-6 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-stone-900 px-2 text-sm text-white transition-colors ease-in-out hover:bg-white hover:text-black"
		>
			{showCat ? "🙀 hide cat" : "🐱 show cat"}
		</button>
	);
}
