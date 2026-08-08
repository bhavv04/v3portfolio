// @/components/activity/EqualizerBars.tsx
export default function EqualizerBars() {
	const bars = [
		{ delay: "0ms", duration: "600ms" },
		{ delay: "150ms", duration: "500ms" },
		{ delay: "300ms", duration: "700ms" },
		{ delay: "100ms", duration: "550ms" }
	];

	return (
		<div className="flex h-4 items-end gap-[3px]">
			{bars.map((bar, i) => (
				<span
					key={i}
					className="eq-bar w-[3px] rounded-full bg-gradient-to-t from-green-500 via-green-400 to-emerald-300 shadow-[0_0_6px_rgba(74,222,128,0.7)]"
					style={{
						animationDelay: bar.delay,
						animationDuration: bar.duration
					}}
				/>
			))}
		</div>
	);
}
