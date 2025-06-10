import TerminalAbout from "@/views/terminal";

export default function About() {
	return (
		<div className="-mt-40 min-h-screen">
			{/* Header Section */}
			<div className="relative overflow-hidden">
				{/* Background decoration */}
				<div className="bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,transparent,black)]" />

				<div className="relative px-6 py-16 sm:py-24 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						{/* Terminal icon */}
						<div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
							<svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</div>

						{/* Main heading */}
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Interactive
							<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Terminal</span>
						</h1>

						{/* Subtitle */}
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
							Explore my portfolio through a retro terminal interface. Type commands to navigate, discover projects, and learn more about my work.
						</p>

						{/* Quick tip */}
						<div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/50 px-4 py-2">
							<div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
							<span className="text-sm text-slate-400">
								Try typing <code className="rounded bg-slate-700 px-2 py-1 font-mono text-emerald-400">help</code> to get started
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Terminal Section */}
			<div className="relative px-6 pb-16 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<TerminalAbout />
				</div>
			</div>
		</div>
	);
}
