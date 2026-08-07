// @/components/activity/EqualizerBars.tsx
export default function EqualizerBars() {
	return (
		<div className="flex h-3 items-end gap-[2px]">
			<span className="eq-bar h-full w-[3px] rounded-sm bg-green-400" style={{ animationDelay: "0ms" }} />
			<span className="eq-bar h-full w-[3px] rounded-sm bg-green-400" style={{ animationDelay: "200ms" }} />
			<span className="eq-bar h-full w-[3px] rounded-sm bg-green-400" style={{ animationDelay: "400ms" }} />
		</div>
	);
}
