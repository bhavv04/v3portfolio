"use client";
import { useRef, FormEvent, useState } from "react";
import { SectionTitle } from "@/components/typography/SectionTitle";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formRef.current) return;
		setIsSending(true);

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
			)
			.finally(() => {
				setIsSending(false);
			});
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

					<div className="space-y-4">
						<p className="text-base leading-relaxed text-gray-400 sm:text-lg">
							I&apos;m always open to collaborating on exciting ideas or exploring new opportunities. Feel free to message me directly or connect
							with me on
						</p>
						<div className="flex flex-wrap gap-6 text-sm">
							<a
								href="https://www.linkedin.com/in/bhavdeeparora/"
								className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="text-gray-600 group-hover:text-gray-400">→</span>
								LinkedIn
							</a>
							<a
								href="mailto:bhavdeepsa@gmail.com?subject=Hello%20Bhavdeep"
								className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
							>
								<span className="text-gray-600 group-hover:text-gray-400">→</span>
								bhavdeepsa@gmail.com
							</a>
						</div>
					</div>
				</div>

				<form ref={formRef} onSubmit={sendEmail} className="space-y-5">
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
						<div className="space-y-1">
							<label htmlFor="from_name" className="block text-xs font-medium uppercase tracking-widest text-gray-500">
								Name
							</label>
							<input
								type="text"
								id="from_name"
								name="from_name"
								required
								disabled={isSending}
								className="w-full border-b border-gray-700 bg-transparent px-0 py-2 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none disabled:opacity-50"
								placeholder="your name"
							/>
						</div>

						<div className="space-y-1">
							<label htmlFor="from_email" className="block text-xs font-medium uppercase tracking-widest text-gray-500">
								Email
							</label>
							<input
								type="email"
								id="from_email"
								name="from_email"
								required
								disabled={isSending}
								className="w-full border-b border-gray-700 bg-transparent px-0 py-2 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none disabled:opacity-50"
								placeholder="your email"
							/>
						</div>
					</div>

					<div className="space-y-1">
						<label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-gray-500">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={4}
							disabled={isSending}
							className="w-full resize-none border-b border-gray-700 bg-transparent px-0 py-0 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none disabled:opacity-50"
							placeholder="what's on your mind?"
						/>
					</div>

					<button
						type="submit"
						disabled={isSending}
						className="duration-800 relative inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-neutral-800 px-4 py-2 text-sm text-white transition-colors ease-in-out hover:bg-white hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-neutral-800 disabled:hover:text-white"
					>
						<span className="relative z-10">{isSending ? "Sending..." : "Send Message"}</span>
					</button>
				</form>

				<div className="text-right text-sm text-zinc-500">&copy; {new Date().getFullYear()} Bhavdeep Arora.</div>
			</div>

			<Toaster position="bottom-right" reverseOrder={true} />
		</footer>
	);
}
