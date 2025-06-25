"use client";
import React, { useEffect, useState } from "react";

export function ScrollBackground() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const onScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const parallaxOffset = -scrollY * 0.5;

	return (
		<>
			{/* Background image that scrolls away */}
			<div
				className="fixed inset-0 -z-10 will-change-transform"
				style={{
					backgroundImage: `
                        linear-gradient(
                            to bottom,
                            transparent 0%,
                            transparent 60%,
                            rgba(13, 13, 13, 0.4) 80%,
                            #0d0d0d 100%
                        ),
                        url('/bg.jpg')
                    `,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					transform: `translateY(${parallaxOffset}px)`
				}}
			/>
			{/* Solid dark background behind */}
			<div
				className="fixed inset-0 -z-20"
				style={{
					background: "#0d0d0d"
				}}
			/>
		</>
	);
}
