import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Image from "next/image";
import profilePic from "../app/ProfilePic.jpeg";

export function HeroSection() {
	return (
		<section id="about" className="mx-auto lg:-mt-10 max-w-[60rem]">
			<div className="flex items-center gap-3 mb-4">
				<Image
					src={profilePic}
					alt="Bhavdeep Arora"
					width={50}
					height={50}
					className="object-cover rounded-full"
				/>
				<SectionTitle text="Hi, I&apos;m Bhavdeep Arora 🐰" className="font-sans mb-0" />
			</div>

			<div className="mb-2 text-base ">
				<p className="mb-2">
					Hey there! I&apos;m a computer science enthusiast currently studying at Toronto Metropolitan University (formerly known as Ryerson University), focused on mastering embedded system security engineering and cybersecurity.  I love exploring how emerging technologies can solve real-world problems and continuously challenge myself with new projects.
				</p>
				<p>
					My expertise spans across secure firmware development, IoT vulnerability assessment, cryptographic protocol implementation, and penetration testing of embedded devices. I&apos;m particularly passionate about hardware-software security interfaces, reverse engineering, and developing robust security frameworks for resource-constrained systems.
				</p>
			</div>

			<div className="mb-4 text-base">
				<p>
					Outside of programming, I love learning new things, Reading, and Exploring Outside!
				</p>
				<p className="mb-2">This is what I&apos;m currently up to:</p>

				<HeroBadges />
			</div>

			<HeroButtons />
		</section>
	);
}