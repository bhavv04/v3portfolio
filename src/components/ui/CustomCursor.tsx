"use client";
import React, { useEffect, useState } from "react";

const CURSOR_SIZE = 16; // Fairy light size
const AURA_SIZE = 48; // Magical aura size
const RUNE_COUNT = 8; // Number of floating runes

interface CustomCursorProps {
	className?: string;
}

interface Rune {
	x: number;
	y: number;
	angle: number;
	distance: number;
	rotation: number;
	scale: number;
	opacity: number;
	id: number;
	type: number;
}

interface Sparkle {
	x: number;
	y: number;
	life: number;
	maxLife: number;
	id: number;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ className = "" }) => {
	const [isClient, setIsClient] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [isClicking, setIsClicking] = useState(false);
	const [runes, setRunes] = useState<Rune[]>([]);
	const [sparkles, setSparkles] = useState<Sparkle[]>([]);
	const [enchantmentLevel, setEnchantmentLevel] = useState(0);
	const [magicRotation, setMagicRotation] = useState(0);

	// Nordic runes (Elder Futhark alphabet)
	const runeSymbols = ["ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛊ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛟ", "ᛞ"];
	const runeColors = ["#8a9ba8", "#a7b7c4", "#bfd1dd", "#5c7080", "#394b59"];

	useEffect(() => {
		setIsClient(true);

		// Initialize floating runes
		const initialRunes: Rune[] = Array.from({ length: RUNE_COUNT }, (_, i) => ({
			x: 0,
			y: 0,
			angle: (i / RUNE_COUNT) * Math.PI * 2,
			distance: Math.random() * 25 + 15,
			rotation: Math.random() * 360,
			scale: Math.random() * 0.4 + 0.6,
			opacity: Math.random() * 0.6 + 0.4,
			id: i,
			type: Math.floor(Math.random() * runeSymbols.length)
		}));
		setRunes(initialRunes);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		let animationFrame: number;
		let lastTime = 0;

		const animate = (currentTime: number) => {
			if (currentTime - lastTime > 30) {
				// Smooth 30fps animation
				// Rotate magical elements
				setMagicRotation((prev) => prev + 0.5);

				// Animate floating runes
				setRunes((prev) =>
					prev.map((rune) => ({
						...rune,
						angle: rune.angle + 0.015 + (isHovering ? 0.02 : 0),
						distance: rune.distance + Math.sin(currentTime * 0.001 + rune.id) * 0.3,
						rotation: rune.rotation + (isHovering ? 2 : 1),
						opacity: rune.opacity + Math.sin(currentTime * 0.003 + rune.id) * 0.1
					}))
				);

				// Update sparkles
				setSparkles((prev) => {
					const updated = prev
						.map((sparkle) => ({
							...sparkle,
							life: sparkle.life - 1
						}))
						.filter((sparkle) => sparkle.life > 0);

					// Add new sparkles occasionally
					if (Math.random() < (isHovering ? 0.3 : 0.1)) {
						const angle = Math.random() * Math.PI * 2;
						const distance = Math.random() * 30 + 10;
						updated.push({
							x: Math.cos(angle) * distance,
							y: Math.sin(angle) * distance,
							life: 60,
							maxLife: 60,
							id: Date.now() + Math.random()
						});
					}

					return updated;
				});

				lastTime = currentTime;
			}
			animationFrame = requestAnimationFrame(animate);
		};

		animationFrame = requestAnimationFrame(animate);

		const updatePosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });

			// Calculate enchantment level based on movement
			const deltaX = e.movementX || 0;
			const deltaY = e.movementY || 0;
			const movement = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
			setEnchantmentLevel(Math.min(movement * 0.05, 1));
		};

		const handleMouseEnter = (e: Event) => {
			setIsHovering(true);
			(e.target as HTMLElement).style.cursor = "none";
		};

		const handleMouseLeave = (e: Event) => {
			setIsHovering(false);
			(e.target as HTMLElement).style.cursor = "none";
		};

		const handleMouseDown = () => {
			setIsClicking(true);
			// Create burst of sparkles on click
			const burstSparkles: Sparkle[] = Array.from({ length: 12 }, (_, i) => {
				const angle = (i / 12) * Math.PI * 2;
				const distance = Math.random() * 40 + 20;
				return {
					x: Math.cos(angle) * distance,
					y: Math.sin(angle) * distance,
					life: 80,
					maxLife: 80,
					id: Date.now() + i
				};
			});
			setSparkles((prev) => [...prev, ...burstSparkles]);
		};

		const handleMouseUp = () => {
			setIsClicking(false);
		};

		// Hide default cursor
		document.body.style.cursor = "none";

		// Add event listeners
		window.addEventListener("mousemove", updatePosition);
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);

		const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		return () => {
			cancelAnimationFrame(animationFrame);
			document.body.style.cursor = "auto";
			window.removeEventListener("mousemove", updatePosition);
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
			interactiveElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
				(el as HTMLElement).style.cursor = "";
			});
		};
	}, [isClient, isHovering]);

	if (!isClient) return null;

	return (
		<div className={className}>
			{/* Floating runes */}
			{runes.map((rune) => {
				const runeX = position.x + Math.cos(rune.angle) * rune.distance;
				const runeY = position.y + Math.sin(rune.angle) * rune.distance;

				return (
					<div
						key={rune.id}
						className="pointer-events-none fixed left-0 top-0 z-40 select-none text-lg transition-all duration-300 ease-out"
						style={{
							transform: `translate(${runeX - 10}px, ${runeY - 10}px) 
								rotate(${rune.rotation}deg) 
								scale(${rune.scale})`,
							opacity: Math.max(0, Math.min(1, rune.opacity)),
							color: runeColors[rune.id % runeColors.length],
							filter: `drop-shadow(0 0 4px ${runeColors[rune.id % runeColors.length]})`,
							textShadow: `0 0 8px ${runeColors[rune.id % runeColors.length]}`
						}}
					>
						{runeSymbols[rune.type]}
					</div>
				);
			})}

			{/* Magical sparkles */}
			{sparkles.map((sparkle) => {
				const sparkleX = position.x + sparkle.x;
				const sparkleY = position.y + sparkle.y;
				const lifeRatio = sparkle.life / sparkle.maxLife;

				return (
					<div
						key={sparkle.id}
						className="z-42 pointer-events-none fixed left-0 top-0"
						style={{
							transform: `translate(${sparkleX - 2}px, ${sparkleY - 2}px) scale(${lifeRatio})`,
							opacity: lifeRatio
						}}
					>
						<div
							className="h-1 w-1 animate-pulse rounded-full"
							style={{
								background: runeColors[Math.floor(sparkle.id * 5) % runeColors.length],
								boxShadow: `0 0 6px ${runeColors[Math.floor(sparkle.id * 5) % runeColors.length]}`
							}}
						/>
					</div>
				);
			})}

			{/* Nordic aura */}
			<div
				className="z-45 pointer-events-none fixed left-0 top-0 rounded-full transition-all duration-300 ease-out"
				style={{
					width: `${AURA_SIZE}px`,
					height: `${AURA_SIZE}px`,
					transform: `translate(${position.x - AURA_SIZE / 2}px, ${position.y - AURA_SIZE / 2}px) 
						scale(${isClicking ? 1.4 : isHovering ? 1.2 : 1}) 
						rotate(${magicRotation}deg)`,
					background: `conic-gradient(from 0deg, 
						rgba(138, 155, 168, 0.1), 
						rgba(167, 183, 196, 0.15), 
						rgba(92, 112, 128, 0.1), 
						rgba(57, 75, 89, 0.15), 
						rgba(138, 155, 168, 0.1))`,
					opacity: isHovering ? 0.8 : 0.4,
					filter: `brightness(${1 + enchantmentLevel * 0.5}) blur(${isHovering ? 1 : 2}px)`,
					border: `1px solid rgba(138, 155, 168, ${isHovering ? 0.4 : 0.2})`
				}}
			/>

			{/* Runic core */}
			<div
				className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full transition-all duration-200 ease-out"
				style={{
					width: `${CURSOR_SIZE}px`,
					height: `${CURSOR_SIZE}px`,
					transform: `translate(${position.x - CURSOR_SIZE / 2}px, ${position.y - CURSOR_SIZE / 2}px) 
						scale(${isClicking ? 1.6 : isHovering ? 0.7 : 1})`,
					background: isHovering
						? `radial-gradient(circle at 30% 30%, 
							rgba(255, 255, 255, 0.9) 0%, 
							rgba(138, 155, 168, 0.8) 30%, 
							rgba(92, 112, 128, 0.6) 60%, 
							rgba(57, 75, 89, 0.4) 100%)`
						: `radial-gradient(circle at 30% 30%, 
							rgba(255, 255, 255, 0.8) 0%, 
							rgba(138, 155, 168, 0.6) 40%, 
							rgba(92, 112, 128, 0.3) 80%, 
							transparent 100%)`,
					boxShadow: isClicking
						? "0 0 20px rgba(138, 155, 168, 0.8), 0 0 40px rgba(92, 112, 128, 0.6)"
						: isHovering
							? "0 0 15px rgba(138, 155, 168, 0.6), 0 0 30px rgba(92, 112, 128, 0.4)"
							: "0 0 8px rgba(138, 155, 168, 0.4), 0 0 16px rgba(92, 112, 128, 0.2)",
					filter: `brightness(${1 + enchantmentLevel * 0.6})`
				}}
			>
				<span
					className="text-xs font-bold opacity-80"
					style={{
						color: runeColors[0],
						transform: `scale(${isClicking ? 1.5 : isHovering ? 0.8 : 1})`,
						textShadow: "0 0 4px rgba(138, 155, 168, 0.7)"
					}}
				>
					{runeSymbols[0]}
				</span>
			</div>

			{/* Runic magic burst on click */}
			{isClicking && (
				<div
					className="pointer-events-none fixed left-0 top-0 z-40 animate-ping rounded-full"
					style={{
						width: `${AURA_SIZE * 1.8}px`,
						height: `${AURA_SIZE * 1.8}px`,
						transform: `translate(${position.x - (AURA_SIZE * 1.8) / 2}px, ${position.y - (AURA_SIZE * 1.8) / 2}px)`,
						background: "radial-gradient(circle, rgba(138, 155, 168, 0.3) 0%, transparent 70%)",
						animationDuration: "0.8s"
					}}
				/>
			)}

			{/* Runic glow ring */}
			<div
				className="z-44 pointer-events-none fixed left-0 top-0 rounded-full"
				style={{
					width: `${AURA_SIZE + 12}px`,
					height: `${AURA_SIZE + 12}px`,
					transform: `translate(${position.x - (AURA_SIZE + 12) / 2}px, ${position.y - (AURA_SIZE + 12) / 2}px) 
						rotate(${-magicRotation * 0.7}deg)`,
					border: `1px solid rgba(138, 155, 168, ${isHovering ? 0.3 : 0.1})`,
					opacity: isHovering ? 0.8 : 0.3,
					filter: `drop-shadow(0 0 8px rgba(138, 155, 168, 0.3))`
				}}
			/>
		</div>
	);
};

export default CustomCursor;
