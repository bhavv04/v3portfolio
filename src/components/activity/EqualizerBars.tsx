// @/components/activity/EqualizerBars.tsx
export default function EqualizerBars() {
	const bars = [
		{ delay: "0ms", duration: "600ms" },
		{ delay: "150ms", duration: "500ms" },
		{ delay: "300ms", duration: "700ms" },
		{ delay: "100ms", duration: "550ms" }
	];

	return (
		<div className="flex h-4 items-center gap-[3px]">
			{bars.map((bar, i) => (
				<span
					key={i}
					className="eq-bar h-full w-0.5 rounded-full bg-green-400"
					style={{
						animationDelay: bar.delay,
						animationDuration: bar.duration
					}}
				/>
			))}
		</div>
	);
}
