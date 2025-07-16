"use client";
import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Image from "next/image";

const ProfilePic = "/images/ProfilePic.jpeg";

function ProfileAvatar({ src, alt }: { src: string; alt: string }) {
	return <Image src={src} alt={alt} width={50} height={50} className="rounded-full object-cover shadow-md" />;
}

export function HeroSection() {
	return (
		<section id="home" className="mx-auto -mt-10 max-w-[40rem] space-y-4">
			{/* Profile + Title - First to appear */}
			<div className="fade-in-up flex items-center gap-4" style={{ "--delay-index": 0 } as React.CSSProperties}>
				<ProfileAvatar src={ProfilePic} alt="Bhavdeep Arora profile picture" />
				<SectionTitle className="mt-2" text="Hi, I'm Bhavdeep Arora 🐰" />
			</div>

			{/* Hero Icons - Second */}
			<div className="fade-in-up" style={{ "--delay-index": 2 } as React.CSSProperties}>
				<HeroIcons />
			</div>

			<div className="fade-in-up" style={{ "--delay-index": 3 } as React.CSSProperties}>
				<p className="mb-2">
					I&apos;m a computer science Student currently studying at{" "}
					<a
						href="https://www.torontomu.ca/programs/undergraduate/computer-science/"
						className="underline-dotted-highlight inline-flex"
						target="_blank"
						rel="noopener noreferrer"
					>
						Toronto Metropolitan University
					</a>{" "}
					(formerly known as Ryerson University).
				</p>
			</div>

			{/* Programming experience paragraph - Fourth */}
			<div className="fade-in-up" style={{ "--delay-index": 4 } as React.CSSProperties}>
				<p>
					I&apos;ve been programming for over six years, and I&apos;m obsessed with learning. I&apos;m currently focused on embedded systems and
					DevOps, particularly cloud infrastructure and vulnerability research, but I&apos;m always deep diving into various aspects of Computer
					Science.
				</p>
			</div>

			{/* Interests paragraph - Fifth */}
			<div className="fade-in-up" style={{ "--delay-index": 5 } as React.CSSProperties}>
				<p>Outside of programming, I love learning new things, reading fantasy books, and exploring outside! This is what I&apos;m currently up to:</p>
			</div>

			{/* Hero Badges - Sixth */}
			<div className="fade-in-up" style={{ "--delay-index": 6 } as React.CSSProperties}>
				<HeroBadges />
			</div>

			{/* Hero Buttons - Seventh */}
			<div className="fade-in-up" style={{ "--delay-index": 7 } as React.CSSProperties}>
				<HeroButtons />
			</div>
		</section>
	);
}
