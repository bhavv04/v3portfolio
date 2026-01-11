"use client";
import { useRef, FormEvent } from "react";
import { SectionTitle } from "@/components/typography/SectionTitle";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
	const formRef = useRef<HTMLFormElement>(null);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formRef.current) return;

		emailjs
			.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, {
				publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			})
			.then(
				() => {
					toast.success("Message successfully sent!");
					formRef.current?.reset();
				},
				(error) => {
					toast.error("Failed to send the message, please try again");
					console.error("EmailJS error:", error);
				}
			);
	};

	return (
		<footer className="mx-auto max-w-2xl bg-transparent py-12 text-white sm:px-6">
			<div className="space-y-8">
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
					or send a message to <span className="font-semibold text-gray-300">bhavdeepsa@gmail.com </span>
					if you want to reach out to me directly.
				</p>

				<form ref={formRef} onSubmit={sendEmail} className="space-y-4">
					<input
						type="text"
						name="from_name"
						placeholder="Name"
						required
						className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gray-500 focus:outline-none"
					/>
					<input
						type="email"
						name="from_email"
						placeholder="Email"
						required
						className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gray-500 focus:outline-none"
					/>
					<textarea
						name="message"
						placeholder="Message"
						required
						rows={5}
						className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-gray-500 focus:outline-none"
					/>
					<button type="submit" className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200">
						Send Message
					</button>
				</form>

				<div className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Bhavdeep Arora. All rights reserved.</div>
			</div>

			<Toaster position="bottom-right" reverseOrder={true} />
		</footer>
	);
}
