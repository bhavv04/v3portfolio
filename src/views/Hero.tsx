"use client";
import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { SectionTitle } from "@/components/typography/SectionTitle";
//import Image from "next/image";

export function HeroSection() {
	return (
		<section id="home" className="mx-auto -mt-8 max-w-[40rem] space-y-4 md:-mt-14">
			<div className="fade-in-up flex items-center gap-4" style={{ "--delay-index": 0 } as React.CSSProperties}>
				<SectionTitle className="mt-2" text="Hi, I'm Bhavdeep Arora" />
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 2 } as React.CSSProperties}>
				<HeroIcons />
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 3 } as React.CSSProperties}>
				<p className="mb-2">
					I&apos;m a computer science Student currently studying at Toronto Metropolitan University (formerly known as Ryerson University).
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 4 } as React.CSSProperties}>
				<p>
					I&apos;ve been programming for over six years, and I&apos;m obsessed with learning. I&apos;m currently focused on embedded systems and
					DevOps, particularly cloud infrastructure and vulnerability research, but I&apos;m always deep diving into various aspects of Computer
					Science.
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 5 } as React.CSSProperties}>
				<p>
					Outside of programming, I love learning new things, reading fantasy and classic books, and exploring outside! This is what I&apos;m
					currently up to:
				</p>
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 6 } as React.CSSProperties}>
				<HeroBadges />
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 7 } as React.CSSProperties}>
				<HeroButtons />
			</div>
		</section>
	);
}
