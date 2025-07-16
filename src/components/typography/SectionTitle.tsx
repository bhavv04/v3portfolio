import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SectionTitleProps {
	text: ReactNode;
	className?: string;
}

export function SectionTitle({ text, className }: SectionTitleProps) {
	return <h1 className={cn("mb-2 text-3xl font-bold xs:text-[2.5rem]", className)}>{text}</h1>;
}
