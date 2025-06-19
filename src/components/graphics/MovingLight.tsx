"use client";
import React, { useEffect, useRef } from "react";

export default function EnhancedMovingLight() {
	const ref = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let angle = 0;
		let secondaryAngle = 0;
		let tertiaryAngle = 0;
		let pulsePhase = 0;
		let frame: number;

		const animate = () => {
			angle += 0.012;
			secondaryAngle += 0.008;
			tertiaryAngle += 0.015;
			pulsePhase += 0.04;

			// Primary light - large orbital motion
			const x1 = 50 + 35 * Math.cos(angle);
			const y1 = 50 + 25 * Math.sin(angle * 1.3);

			// Secondary light - opposite orbital
			const x2 = 50 + 28 * Math.cos(secondaryAngle + Math.PI * 0.7);
			const y2 = 50 + 32 * Math.sin(secondaryAngle * 0.8 + Math.PI);

			// Tertiary light - figure-8 pattern
			const x3 = 50 + 20 * Math.cos(tertiaryAngle) * Math.sin(tertiaryAngle * 2);
			const y3 = 50 + 15 * Math.sin(tertiaryAngle * 2);

			// Quaternary light - small chaotic movement
			const x4 = 50 + 15 * Math.cos(angle * 2.3 + pulsePhase);
			const y4 = 50 + 12 * Math.sin(angle * 1.7 + pulsePhase * 0.8);

			// Dynamic intensity based on pulse
			const intensity1 = 0.2 + 0.1 * Math.sin(pulsePhase);
			const intensity2 = 0.15 + 0.08 * Math.sin(pulsePhase + Math.PI * 0.5);
			const intensity3 = 0.12 + 0.06 * Math.sin(pulsePhase + Math.PI);
			const intensity4 = 0.08 + 0.04 * Math.sin(pulsePhase * 1.5);

			// Color shifting
			const hue1 = (angle * 50) % 360;
			const hue2 = (secondaryAngle * 70 + 120) % 360;
			const hue3 = (tertiaryAngle * 90 + 240) % 360;

			if (ref.current) {
				ref.current.style.background = `
                    radial-gradient(ellipse 400px 300px at ${x1}% ${y1}%, 
                        hsla(${hue1}, 70%, 80%, ${intensity1}) 0%, 
                        hsla(${hue1}, 60%, 70%, ${intensity1 * 0.6}) 25%, 
                        hsla(${hue1}, 50%, 60%, ${intensity1 * 0.3}) 50%, 
                        transparent 70%),
                    radial-gradient(ellipse 350px 250px at ${x2}% ${y2}%, 
                        hsla(${hue2}, 75%, 75%, ${intensity2}) 0%, 
                        hsla(${hue2}, 65%, 65%, ${intensity2 * 0.5}) 30%, 
                        transparent 70%),
                    radial-gradient(circle 200px at ${x3}% ${y3}%, 
                        hsla(${hue3}, 80%, 85%, ${intensity3}) 0%, 
                        hsla(${hue3}, 70%, 75%, ${intensity3 * 0.4}) 40%, 
                        transparent 80%),
                    radial-gradient(circle 150px at ${x4}% ${y4}%, 
                        hsla(${(hue1 + 180) % 360}, 85%, 90%, ${intensity4}) 0%, 
                        transparent 60%),
                    radial-gradient(ellipse 800px 600px at 50% 50%, 
                        hsla(${(hue1 + hue2) / 2}, 40%, 20%, 0.05) 0%, 
                        transparent 70%)
                `;
			}

			// Dynamic overlay noise
			if (overlayRef.current) {
				const noiseOpacity = 0.02 + 0.015 * Math.sin(pulsePhase * 0.7);
				overlayRef.current.style.opacity = noiseOpacity.toString();
				overlayRef.current.style.transform = `rotate(${angle * 5}deg) scale(${1 + 0.1 * Math.sin(pulsePhase * 0.5)})`;
			}

			frame = requestAnimationFrame(animate);
		};

		animate();
		return () => cancelAnimationFrame(frame);
	}, []);

	return (
		<>
			{/* Main light effect */}
			<div
				ref={ref}
				style={{
					width: "100vw",
					height: "100vh",
					position: "fixed",
					inset: 0,
					zIndex: -2,
					pointerEvents: "none",
					filter: "blur(60px) saturate(1.5)",
					mixBlendMode: "screen",
					transition: "filter 0.3s ease-out"
				}}
			/>

			{/* Secondary glow layer */}
			<div
				style={{
					width: "100vw",
					height: "100vh",
					position: "fixed",
					inset: 0,
					zIndex: -3,
					pointerEvents: "none",
					background: `
                        radial-gradient(ellipse 120% 80% at 50% 50%, 
                            rgba(100, 50, 200, 0.03) 0%, 
                            rgba(200, 100, 50, 0.02) 40%, 
                            transparent 70%)
                    `,
					filter: "blur(100px)",
					animation: "pulse 8s ease-in-out infinite alternate"
				}}
			/>

			{/* Enhanced noise overlay */}
			<div
				ref={overlayRef}
				style={{
					position: "fixed",
					inset: 0,
					zIndex: -1,
					pointerEvents: "none",
					backgroundImage: `
                        url("data:image/svg+xml;utf8,
                            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                                <defs>
                                    <filter id='noiseFilter'>
                                        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/>
                                        <feColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.2 0 0 0 1 0'/>
                                    </filter>
                                    <filter id='grainFilter'>
                                        <feTurbulence type='turbulence' baseFrequency='0.95' numOctaves='1' stitchTiles='stitch'/>
                                        <feColorMatrix values='0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0 0.05 0 0 0 0.5 0'/>
                                    </filter>
                                </defs>
                                <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
                                <rect width='100%' height='100%' filter='url(#grainFilter)' opacity='0.3'/>
                            </svg>
                        )
                    `,
					mixBlendMode: "overlay",
					transformOrigin: "center"
				}}
			/>

			{/* Subtle vignette */}
			<div
				style={{
					position: "fixed",
					inset: 0,
					zIndex: -4,
					pointerEvents: "none",
					background: `
                        radial-gradient(ellipse 100% 100% at 50% 50%, 
                            transparent 0%, 
                            transparent 60%, 
                            rgba(0, 0, 0, 0.1) 100%)
                    `
				}}
			/>

			<style jsx>{`
				@keyframes pulse {
					0% {
						opacity: 0.7;
						transform: scale(1);
					}
					100% {
						opacity: 1;
						transform: scale(1.05);
					}
				}
			`}</style>
		</>
	);
}
