"use client";

import { useCat } from "@/context/CatContext";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function HeroIcons() {
	const [currentTime, setCurrentTime] = useState<string>("");
	const [currentDate, setCurrentDate] = useState<string>("");
	const { showCat, toggleCat } = useCat();

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
		<div className="flex flex-wrap items-center gap-1">
			<HeroIcon text="📍 Toronto, ON" className="" />
			<HeroIcon text={`🌅 ${currentDate}`} className="" />
			<HeroIcon text={`🕐 ${currentTime}`} className="" />
			<button onClick={toggleCat} className="inline-flex items-center rounded-full border-none bg-[rgba(255,255,255,0.2)] px-2 py-1 text-xs font-medium">
				{showCat ? "🙀 Hide Cat" : "🐱 Show Cat"}
			</button>
		</div>
	);
}

interface HeroIconProps {
	text: string;
	className?: string;
}

export function HeroIcon({ text, className }: HeroIconProps) {
	return (
		<div className={cn("inline-flex items-center rounded-full border-none bg-[rgba(255,255,255,0.2)] px-2 py-1 text-xs font-medium", className)}>
			{text}
		</div>
	);
}
