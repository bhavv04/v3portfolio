"use client";
import React, { useEffect, useState } from "react";

const CURSOR_SIZE = 16; // w-4 h-4 = 16px
const OUTLINE_SIZE = 32; // w-8 h-8 = 32px

const CustomCursor = () => {
	const [isClient, setIsClient] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		const updatePosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseEnter = (e: Event) => {
			setIsHovering(true);
			(e.target as HTMLElement).style.cursor = "none";
		};

		const handleMouseLeave = (e: Event) => {
			setIsHovering(false);
			(e.target as HTMLElement).style.cursor = "none";
		};

		document.body.style.cursor = "none";
		window.addEventListener("mousemove", updatePosition);

		const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		return () => {
			document.body.style.cursor = "auto"; // Reset to default on cleanup

			window.removeEventListener("mousemove", updatePosition);
			interactiveElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
				// Reset cursor style on cleanup
				(el as HTMLElement).style.cursor = "";
			});
		};
	}, [isClient]);

	if (!isClient) return null;

	return (
		<>
			<div
				className={`pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-white mix-blend-difference transition-transform duration-100 ease-out ${
					isHovering ? "scale-150" : "scale-100"
				}`}
				style={{
					transform: `translate(${position.x - CURSOR_SIZE / 2}px, ${position.y - CURSOR_SIZE / 2}px)`
				}}
			/>
			<div
				className="pointer-events-none fixed left-0 top-0 z-40 h-8 w-8 rounded-full border border-white mix-blend-difference transition-all duration-300 ease-out"
				style={{
					transform: `translate(${position.x - OUTLINE_SIZE / 2}px, ${position.y - OUTLINE_SIZE / 2}px) ${isHovering ? "scale(1.5)" : "scale(1)"}`,
					opacity: isHovering ? 0.8 : 0.3
				}}
			/>
		</>
	);
};

export default CustomCursor;
