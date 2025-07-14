"use client";
import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Image from "next/image";

const ProfilePic = "/images/ProfilePic.jpeg";

function ProfileAvatar({ src, alt }: { src: string; alt: string }) {
	return <Image src={src} alt={alt} width={50} height={56} className="rounded-full border-2 object-cover shadow-md" />;
}

export function HeroSection() {
	return (
		<section id="home" className="mx-auto -mt-10 max-w-[45rem] space-y-4">
			<div className="flex items-center gap-4">
				<ProfileAvatar src={ProfilePic} alt="Bhavdeep Arora profile picture" />
				<SectionTitle className="mt-2" text="Hi, I'm Bhavdeep Arora 🐰" />
			</div>

			<div className="">
				<HeroIcons />
			</div>

			<div className="">
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

			<div className="">
				<p>
					I&apos;ve been programming for over six years, and I&apos;m obsessed with learning. I&apos;m currently focused on embedded systems and
					DevOps, particularly cloud infrastructure and vulnerability research, but I&apos;m always deep diving into various aspects of Computer
					Science.
				</p>
			</div>

			<div className="">
				<p>Outside of programming, I love learning new things, reading fantasy books, and exploring outside! This is what I&apos;m currently up to:</p>
			</div>

			<div className="">
				<HeroBadges />
			</div>

			<div className="">
				<HeroButtons />
			</div>
		</section>
	);
}
