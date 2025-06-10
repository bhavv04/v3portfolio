import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroButtons } from "@/components/hero/HeroButtons";
import { SectionTitle } from "@/components/typography/SectionTitle";
import Image from "next/image";
const ProfilePic = "../../public/images/profile.jpg";

export function HeroSection() {
	return (
		<section id="about" className="mx-auto max-w-[60rem] lg:-mt-10">
			<div className="mb-4 flex items-center gap-3">
				<Image src={ProfilePic} alt="Bhavdeep Arora" width={50} height={50} className="rounded-full object-cover" />
				<SectionTitle text="Hi, I'm Bhavdeep Arora 🐰" className="mb-0 font-sans" />
			</div>

			<div className="mb-2 text-lg">
				<p className="mb-2">
					Hey there! I&apos;m a computer science enthusiast currently studying at Toronto Metropolitan University (formerly known as Ryerson
					University), focused on mastering embedded system security engineering and cybersecurity. I love exploring how emerging technologies can
					solve real-world problems and continuously challenge myself with new projects.
				</p>
				<p>
					My expertise spans across secure firmware development, IoT vulnerability assessment, cryptographic protocol implementation, and penetration
					testing of embedded devices. I&apos;m particularly passionate about hardware-software security interfaces, reverse engineering, and
					developing robust security frameworks for resource-constrained systems.
				</p>
			</div>

			<div className="mb-4 text-lg">
				<p>Outside of programming, I love learning new things, Reading, and Exploring Outside!</p>
				<p className="mb-2">This is what I&apos;m currently up to:</p>

				<HeroBadges />
			</div>

			<HeroButtons />
		</section>
	);
}
