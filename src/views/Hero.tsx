import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { HeroIcons } from "@/components/hero/HeroIcons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Image from "next/image";
const ProfilePic = "/images/ProfilePic.jpeg";

// Optional: Extract to a reusable component
function ProfileAvatar({ src, alt }: { src: string; alt: string }) {
	return <Image src={src} alt={alt} width={50} height={56} className="rounded-full border-2 object-cover shadow-md" priority sizes="50px" />;
}

export function HeroSection() {
	return (
		<section id="about" className="mx-auto max-w-[50rem] lg:-mt-10">
			<div className="mb-4 flex items-center gap-3">
				<ProfileAvatar src={ProfilePic} alt="Bhavdeep Arora profile picture" />
				<SectionTitle text="Hi, I'm Bhavdeep Arora 🐰" className="mt-2" />
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
					I&apos;ve been programming for over six years, and I&apos;m obsessed with learning. I&apos;m currently focused on{" "}
					<span className="font-bold">embedded systems</span> and <span className="font-bold">IoT security</span>, particularly{" "}
					<span className="font-bold">reverse engineering</span> and <span className="font-bold">vulnerability research</span>, but I&apos;m always
					deep diving into various aspects of <span className="font-bold">offensive security</span> and{" "}
					<span className="font-bold">cryptography</span>.
				</p>
			</div>

			<div className="mb-4">
				<p>Outside of programming, I love learning new things, Reading Fantasy Books, and Exploring Outside!</p>
				<p className="mb-2">This is what I&apos;m currently up to:</p>

				<HeroBadges />
			</div>

			<HeroButtons />
		</section>
	);
}
