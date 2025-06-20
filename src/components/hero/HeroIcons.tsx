"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function HeroIcons() {
	const [currentTime, setCurrentTime] = useState<string>("");
	const [currentDate, setCurrentDate] = useState<string>("");

	useEffect(() => {
		const updateDateTime = () => {
			const now = new Date();

			// Format time (12-hour format with AM/PM)
			const timeString = now.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "2-digit",
				timeZone: "America/Toronto"
			});

			// Format date
			const dateString = now.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric",
				timeZone: "America/Toronto"
			});

			setCurrentTime(timeString);
			setCurrentDate(dateString);
		};

		updateDateTime();

		// Update every second
		const interval = setInterval(updateDateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="mb-2 flex flex-row flex-wrap items-center gap-1.5">
			<HeroIcon text="📍 Toronto, ON" className="border-none bg-[rgba(255,255,255,0.2)] text-white backdrop-blur-3xl" />

			<HeroIcon text={`📅 ${currentDate}`} className="border-none bg-[rgba(255,255,255,0.2)] text-white backdrop-blur-3xl" />
			<HeroIcon text={`⏳ ${currentTime}`} className="border-none bg-[rgba(255,255,255,0.2)] text-white backdrop-blur-3xl" />
		</div>
	);
}

interface HeroIconProps {
	text: string;
	className?: string;
}

export function HeroIcon({ text, className }: HeroIconProps) {
	return <div className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors", className)}>{text}</div>;
}
