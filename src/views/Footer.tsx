import { HeroButtons } from "@/components/hero/HeroButtons";

export default function Footer() {
	return (
		<footer className="w-full rounded-xl bg-zinc-900 px-0 py-4 text-[#cbd5e1]">
			<div className="flex flex-col items-center justify-between gap-4 px-8 md:flex-row">
				{/* Left: Copyright & Status */}
				<div className="flex items-center gap-3 font-mono text-sm">
					<span>&copy; {new Date().getFullYear()} Bhavdeep Arora</span>
					<span className="mx-1 text-[#475569]">-</span>
					<span className="flex items-center gap-1">
						<span className="relative flex h-3 w-3">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-80"></span>
							<span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
						</span>
						<span className="ml-1 tracking-wide text-[#cbd5e1]">All Services Nominal</span>
					</span>
				</div>
				{/* Right: Stats & Socials */}
				<div className="flex items-center gap-3 font-mono text-sm">
					<HeroButtons />
				</div>
			</div>
		</footer>
	);
}
