"use client";
import { useRef, FormEvent } from "react";
import { SectionTitle } from "@/components/typography/SectionTitle";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/Button";

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
			<div className="space-y-12">
				<div className="space-y-4">
					<SectionTitle
						className="text-3xl font-bold tracking-tight sm:text-4xl"
						text={
							<>
								Let&apos;s Connect <span className="inline-block origin-bottom-right animate-waving-hand">👋🏻</span>
							</>
						}
					/>

					<p className="text-base leading-relaxed text-gray-400 sm:text-lg">
						I&apos;m always open to collaborating on exciting ideas or exploring new opportunities. Feel free to connect with me on{" "}
						<a
							href="https://www.linkedin.com/in/bhavdeeparora/"
							className="OpenInNewTab font-medium text-white transition-opacity duration-200 hover:opacity-70"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>{" "}
						or{" "}
						<a
							href="mailto:bhavdeepsa@gmail.com?subject=Hello%20Bhavdeep"
							className="font-medium text-white transition-opacity duration-200 hover:opacity-70"
						>
							Email
						</a>{" "}
						or send a message to <span className="leading-relaxed text-gray-400 text-white sm:text-lg">bhavdeepsa@gmail.com </span>
						if you want to reach out to me directly.
					</p>
				</div>

				<form ref={formRef} onSubmit={sendEmail} className="space-y-6">
					<div className="space-y-1">
						<label htmlFor="from_name" className="block text-xs font-medium uppercase tracking-wider text-gray-500">
							Name
						</label>
						<input
							type="text"
							id="from_name"
							name="from_name"
							required
							className="w-full border-b border-gray-700 bg-transparent px-0 py-2 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
						/>
					</div>

					<div className="space-y-1">
						<label htmlFor="from_email" className="block text-xs font-medium uppercase tracking-wider text-gray-500">
							Email
						</label>
						<input
							type="email"
							id="from_email"
							name="from_email"
							required
							className="w-full border-b border-gray-700 bg-transparent px-0 py-2 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
						/>
					</div>

					<div className="space-y-1">
						<label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-gray-500">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={4}
							className="w-full resize-none border-b border-gray-700 bg-transparent px-0 py-2 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
						/>
					</div>

					<Button type="submit" asChild variant="default">
						<span className="relative z-10">Send Message</span>
					</Button>
				</form>

				<div className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Bhavdeep Arora. All rights reserved.</div>
			</div>

			<Toaster position="bottom-right" reverseOrder={true} />
		</footer>
	);
}
