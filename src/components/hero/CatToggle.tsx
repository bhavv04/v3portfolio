"use client";

import { useCat } from "@/context/CatContext";

export function CatToggleButton() {
	const { showCat, toggleCat } = useCat();

	return (
		<button
			onClick={toggleCat}
			className="ms-center relative inline-flex justify-center gap-2 rounded-lg bg-zinc-800 px-2 py-1 text-sm transition-colors hover:bg-zinc-700"
		>
			{showCat ? "😿 hide cat" : "😺 show cat"}
		</button>
	);
}
