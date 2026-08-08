// components/search/SearchTrigger.tsx
"use client";

import { Search } from "lucide-react";

export function SearchTrigger() {
	return (
		<button
			onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
			aria-label="Search"
			className="fixed top-6 left-4 z-50 flex items-center gap-2 rounded-xl bg-stone-900 p-3 text-white/50 transition-colors hover:text-white lg:right-4 lg:left-auto"
		>
			<Search size={16} />
		</button>
	);
}
