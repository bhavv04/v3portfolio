"use client";
import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { TextEncrypted } from "@/components/hooks/TextEncrypted";
import Image from "next/image";

const ProfilePic = "/images/ProfilePic.jpeg";

function ProfileAvatar({ src, alt }: { src: string; alt: string }) {
	return (
		<Image
			src={src}
			alt={alt}
			width={50}
			height={56}
			className="fade-in-slow rounded-full border-2 object-cover shadow-md transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-xl"
		/>
	);
}

export function HeroSection() {
	return (
		<section id="home" className="mx-auto -mt-10 max-w-[45rem] space-y-4">
			<div className="flex items-center gap-4">
				<ProfileAvatar src={ProfilePic} alt="Bhavdeep Arora profile picture" />
				<SectionTitle className="mt-2" text={<TextEncrypted text="Hi, I'm Bhavdeep Arora 🐰" interval={40} />} />
			</div>

			<div className="fade-in">
				<HeroIcons />
			</div>

			<div className="">
				<p className="mb-2">
					<TextEncrypted text="I'm a computer science Student currently studying at " interval={30} />
					<a
						href="https://www.torontomu.ca/programs/undergraduate/computer-science/"
						className="underline-dotted-highlight inline-flex"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TextEncrypted text="Toronto Metropolitan University " interval={30} />{" "}
					</a>
					<TextEncrypted text=" (formerly known as Ryerson University)." interval={30} />
				</p>
			</div>

			<div className="">
				<p>
					<TextEncrypted text="I've been programming for over six years, and I'm obsessed with learning. I'm currently focused on " interval={10} />
					<TextEncrypted
						text="embedded systems and DevOps, particularly cloud infrastructure and vulnerability research, but I'm always deep diving into various aspects of Computer Science."
						interval={10}
					/>
				</p>
			</div>

			<div className="">
				<p>
					<TextEncrypted
						text="Outside of programming, I love learning new things, reading fantasy books, and exploring outside! This is what I'm currently up to:"
						interval={10}
					/>
				</p>
			</div>

			<div className="fade-in-slow">
				<HeroBadges />
			</div>

			<div className="fade-in-slow">
				<HeroButtons />
			</div>
		</section>
	);
}
