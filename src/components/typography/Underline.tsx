// components/ui/hover-underline.tsx

import { cn } from "@/lib/utils";

export function HoverUnderline({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<span
			className={cn(
				"bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-bottom bg-no-repeat",
				"transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]",
				className
			)}
		>
			{children}
		</span>
	);
}
