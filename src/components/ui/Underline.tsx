// components/ui/hover-underline.tsx

import { cn } from "@/lib/utils";

export function HoverUnderline({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<span className={cn("relative inline-block", className)}>
			{children}
			<span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />
		</span>
	);
}
