import { cn } from "@/lib/utils";

interface SectionTitleProps {
	text: string;
	className?: string;
}

export function SectionTitle({ text, className }: SectionTitleProps) {
	return <h1 className={cn("mb-2 font-mono text-3xl font-bold xs:text-4xl", className)}>{text}</h1>;
}
