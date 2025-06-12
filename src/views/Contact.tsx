import React from "react";
import { SectionTitle } from "@/components/typography/SectionTitle";

export default function Contact() {
	return (
		<div className="mx-auto max-w-lg py-8 pl-8">
			<SectionTitle text="Contact Me" />
			<form className="space-y-5">
				<div>
					<label htmlFor="name" className="mb-1 block text-sm font-medium">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						autoComplete="name"
					/>
				</div>
				<div>
					<label htmlFor="email" className="mb-1 block text-sm font-medium">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						autoComplete="email"
					/>
				</div>
				<div>
					<label htmlFor="message" className="mb-1 block text-sm font-medium">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						className="w-full resize-none rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full rounded-md border border-gray-300 bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black"
					disabled
				>
					Send
				</button>
			</form>
		</div>
	);
}
