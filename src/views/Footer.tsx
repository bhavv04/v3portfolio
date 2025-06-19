import { HeroButtons } from "@/components/hero/HeroButtons";

export default function Footer() {
	return (
		<footer className="w-full rounded-xl border border-2 bg-[rgba(13,13,13,0.6)] px-0 py-4 text-[#cbd5e1]">
			<div className="flex flex-col items-center gap-4 px-4 sm:px-8 md:flex-row md:justify-between">
				{/* Left: Copyright & Status */}
				<div className="flex flex-col items-center gap-2 font-mono text-sm sm:flex-row sm:gap-3">
					<span>&copy; {new Date().getFullYear()} Bhavdeep Arora</span>
					<span className="mx-1 hidden text-[#475569] sm:inline">-</span>
					<span className="mt-1 flex items-center gap-1 sm:mt-0">
						<span className="relative flex h-3 w-3">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-80"></span>
							<span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
						</span>
						<span className="ml-1 whitespace-nowrap tracking-wide text-[#cbd5e1]">All Services Nominal</span>
					</span>
				</div>

				{/* Right: Stats & Socials */}
				<div className="flex w-full items-center justify-center gap-2 font-mono text-sm sm:gap-3 md:w-auto">
					<span className="block md:hidden">
						<HeroButtons size="sm" />
					</span>
					<span className="hidden md:block">
						<HeroButtons size="md" />
					</span>
				</div>
			</div>
		</footer>
	);
}
