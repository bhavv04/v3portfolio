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
			className="fade-in-down cursor-pointer rounded-full border-2 object-cover shadow-md transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-xl"
		/>
	);
}

export function HeroSection() {
	return (
		<section id="home" className="mx-auto max-w-[50rem] space-y-4 lg:-mt-10">
			<div className="flex items-center gap-3">
				<ProfileAvatar src={ProfilePic} alt="Bhavdeep Arora profile picture" />
				<SectionTitle className="fade-in-down mt-2" text={<TextEncrypted text="Hi, I'm Bhavdeep Arora 🐰" interval={40} />} />
			</div>

			<div className="fade-in-down">
				<HeroIcons />
			</div>

			<div className="fade-in-down">
				<p className="mb-2">
					<TextEncrypted text="I'm a computer science Student currently studying at " interval={30} />
					<a
						href="https://www.torontomu.ca/programs/undergraduate/computer-science/"
						className="underline-dotted-highlight inline-block"
						target="_blank"
						rel="noopener noreferrer"
					>
						<TextEncrypted text="Toronto Metropolitan University" interval={30} />
					</a>
					<TextEncrypted text=" (formerly known as Ryerson University)." interval={30} />
				</p>
			</div>

			<div className="fade-in-down">
				<p>
					<TextEncrypted text="I've been programming for over six years, and I'm obsessed with learning. I'm currently focused on " interval={30} />
					<span className="font-bold">
						<TextEncrypted text="embedded systems" interval={30} />
					</span>
					<TextEncrypted text=" and " interval={30} />
					<span className="font-bold">
						<TextEncrypted text="DevOps" interval={30} />
					</span>
					<TextEncrypted text=", particularly " interval={30} />
					<span className="font-bold">
						<TextEncrypted text="cloud infrastructure" interval={30} />
					</span>
					<TextEncrypted text=" and " interval={30} />
					<span className="font-bold">
						<TextEncrypted text="vulnerability research" interval={30} />
					</span>
					<TextEncrypted text=", but I'm always deep diving into various aspects of " interval={30} />
					<span className="font-bold">
						<TextEncrypted text="Computer Science" interval={30} />
					</span>
					<TextEncrypted text="." interval={30} />
				</p>
			</div>

			<div className="fade-in-down">
				<p>
					<TextEncrypted
						text="Outside of programming, I love learning new things, reading fantasy books, and exploring outside! This is what I'm currently up to:"
						interval={30}
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
