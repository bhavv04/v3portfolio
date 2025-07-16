"use client";
import { SectionTitle } from "@/components/typography/SectionTitle";

export default function Footer() {
	return (
		<footer className="w-full bg-transparent py-12 text-white sm:px-6">
			<div className="mx-auto max-w-xl space-y-8">
				{/* Heading */}
				<SectionTitle
					className="text-3xl font-bold tracking-tight sm:text-4xl"
					text={
						<>
							Let&apos;s Connect <span className="inline-block origin-bottom-right animate-waving-hand">👋🏻</span>
						</>
					}
				/>

				{/* Description */}
				<p className="text-base leading-relaxed text-gray-400 sm:text-lg">
					I&apos;m always open to collaborating on exciting ideas or exploring new opportunities. Feel free to connect with me on{" "}
					<a
						href="https://www.linkedin.com/in/bhavdeeparora/"
						className="OpenInNewTab font-semibold text-gray-300 underline transition-colors duration-200 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>{" "}
					or{" "}
					<a
						href="mailto:bhavdeepsa@gmail.com?subject=Hello%20Bhavdeep"
						className="font-semibold text-gray-300 underline transition-colors duration-200 hover:text-white"
					>
						Email
					</a>{" "}
					if you want to reach out to me.
				</p>

				{/* Copyright */}
				<div className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Bhavdeep Arora. All rights reserved.</div>
			</div>
		</footer>
	);
}
