import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Image from "next/image";
const ProfilePic = "/images/ProfilePic.jpeg";

export function HeroSection() {
	return (
		<section id="about" className="mx-auto max-w-[50rem] lg:-mt-10">
			<div className="mb-4 flex items-center gap-3">
				<Image src={ProfilePic} alt="Bhavdeep Arora" width={50} height={50} className="rounded-full object-cover" />
				<SectionTitle text="Hi, I'm Bhavdeep Arora 🐰" className="" />
			</div>

			<HeroIcons />

			<div className="mb-2">
				<p className="mb-2">
					I&apos;m a computer science Student currently studying at{" "}
					<span className="underline-dotted-highlight inline-block">Toronto Metropolitan University</span> (formerly known as Ryerson University).
				</p>
			</div>

			<div className="mb-2">
				<p>
					I&apos;ve been programming for over six years, and I&apos;m obssesed with learning. I&apos;m currently focused on embedded systems and IoT
					security, particularly reverse engineering and vulnerability research, but I&apos;m always deep diving into various aspects of offensive
					security and cryptography.
				</p>
			</div>

			<div className="mb-4">
				<p>Outside of programming, I love learning new things, Reading, and Exploring Outside!</p>
				<p className="mb-2">This is what I&apos;m currently up to:</p>

				<HeroBadges />
			</div>

			<HeroButtons />
		</section>
	);
}
