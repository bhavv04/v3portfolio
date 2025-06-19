import { cn } from "@/lib/utils";

interface GridBackgroundProps {
	className?: string;
}

export function GridBackground({ className }: GridBackgroundProps) {
	return <div className={cn("bg-gridlines [--line-color:var(--muted)/0] [--line-size:20px]", className)} />;
}
