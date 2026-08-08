// components/widget/music-widget.tsx
"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useAudioPlayer } from "@/lib/audio/useAudioPlayer";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import outerWildsTracks from "@/lib/widget/outer-wilds-tracks.json";

function formatTime(seconds: number) {
	if (!seconds || isNaN(seconds)) return "0:00";
	const m = Math.floor(seconds / 60);
	const s = Math.floor(seconds % 60);
	return `${m}:${s.toString().padStart(2, "0")}`;
}

export function MusicWidget() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);
	const { currentTrack, isPlaying, position, duration, volume, togglePlay, nextTrack, previousTrack, setVolume, seekTo } = useAudioPlayer(outerWildsTracks);

	// click anywhere outside the widget collapses it
	useEffect(() => {
		if (!isExpanded) return;

		function handleClickOutside(e: MouseEvent) {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				setIsExpanded(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isExpanded]);

	const getRatioFromEvent = useCallback((clientX: number) => {
		const bar = progressRef.current;
		if (!bar) return 0;
		const rect = bar.getBoundingClientRect();
		return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
	}, []);

	const handlePointerDown = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (!duration) return;
			setIsDragging(true);
			(e.target as HTMLElement).setPointerCapture(e.pointerId);
			seekTo(getRatioFromEvent(e.clientX) * duration);
		},
		[duration, seekTo, getRatioFromEvent]
	);

	const handlePointerMove = useCallback(
		(e: React.PointerEvent<HTMLDivElement>) => {
			if (!isDragging || !duration) return;
			seekTo(getRatioFromEvent(e.clientX) * duration);
		},
		[isDragging, duration, seekTo, getRatioFromEvent]
	);

	const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
		setIsDragging(false);
		(e.target as HTMLElement).releasePointerCapture(e.pointerId);
	}, []);

	// early return AFTER all hooks are declared
	if (!currentTrack) return null;

	const progressPct = duration > 0 ? (position / duration) * 100 : 0;

	return (
		<div ref={containerRef} className="fixed top-6 right-6 z-50 lg:left-6">
			{!isExpanded ? (
				// COLLAPSED — pill with marquee title + decorative controls
				<button
					onClick={() => setIsExpanded(true)}
					className="group flex h-10 items-center gap-2 rounded-full border border-white/15 bg-stone-950/50 bg-gradient-to-b from-white/[0.08] to-white/0 pr-3 pl-1 shadow-2xl shadow-lg shadow-black/50 backdrop-blur-2xl backdrop-saturate-150 transition-colors"
					aria-label="Expand music player"
				>
					<div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
						<img src={currentTrack.cover} alt={currentTrack.title} className="h-full w-full object-cover" />
						{isPlaying && <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-stone-950 bg-emerald-400" />}
					</div>

					{/* marquee title */}
					<div className="relative w-16 overflow-hidden">
						<div className="flex w-max animate-[marquee_9s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]">
							<span className="pr-6 text-xs font-medium text-white/90">
								{currentTrack.title} — {currentTrack.artist}
							</span>
							<span className="pr-6 text-xs font-medium text-white/90">
								{currentTrack.title} — {currentTrack.artist}
							</span>
						</div>
						<div className="pointer-events-none absolute inset-y-0 left-0 w-2" />
						<div className="pointer-events-none absolute inset-y-0 right-0 w-2" />
					</div>

					{/* decorative controls — visual only, whole button expands on click */}
					<div className="flex items-center gap-1.5 text-white/50">
						<SkipBack size={11} fill="currentColor" />
						{isPlaying ? (
							<Pause size={12} fill="currentColor" className="text-white/80" />
						) : (
							<Play size={12} fill="currentColor" className="text-white/80" />
						)}
						<SkipForward size={11} fill="currentColor" />
					</div>
				</button>
			) : (
				// EXPANDED — glass panel, click anywhere (except controls) to collapse
				<div
					onClick={() => setIsExpanded(false)}
					className="relative w-64 [animation:fade-in_0.3s_ease-out] cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-stone-950/50 bg-gradient-to-b from-white/[0.08] to-white/0 p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl backdrop-saturate-150"
				>
					<div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

					<div className="flex items-center gap-2.5 pr-1">
						<img
							src={currentTrack.cover}
							alt={currentTrack.title}
							className="h-12 w-12 shrink-0 rounded-md object-cover shadow-md ring-1 ring-white/10"
						/>
						<div className="min-w-0 flex-1">
							<p className="truncate text-[12px] leading-tight font-medium text-white">{currentTrack.title}</p>
							<p className="truncate text-[10px] leading-tight text-white/50">{currentTrack.artist}</p>
						</div>
					</div>

					{/* drag-to-seek scrubber — stop propagation so it doesn't collapse the widget */}
					<div
						ref={progressRef}
						onClick={(e) => e.stopPropagation()}
						onPointerDown={handlePointerDown}
						onPointerMove={handlePointerMove}
						onPointerUp={handlePointerUp}
						className="group/bar relative mt-3 flex h-3 cursor-pointer touch-none items-center"
					>
						<div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
							<div
								className="h-full rounded-full bg-white/80"
								style={{ width: `${progressPct}%`, transition: isDragging ? "none" : "width 0.2s linear" }}
							/>
						</div>
						<div
							className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow transition-opacity ${
								isDragging ? "opacity-100" : "opacity-0 group-hover/bar:opacity-100"
							}`}
							style={{ left: `calc(${progressPct}% - 5px)` }}
						/>
					</div>
					<div className="-mt-0.5 flex justify-between text-[9px] text-white/35 tabular-nums">
						<span>{formatTime(position)}</span>
						<span>{formatTime(duration)}</span>
					</div>

					{/* controls — each stops propagation individually */}
					<div className="mt-2.5 flex items-center justify-center gap-4">
						<button
							onClick={(e) => {
								e.stopPropagation();
								previousTrack();
							}}
							className="text-white/60 transition-colors hover:text-white"
							aria-label="Previous track"
						>
							<SkipBack size={14} fill="currentColor" />
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								togglePlay();
							}}
							className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-stone-950 transition-transform duration-200 hover:scale-105 active:scale-95"
							aria-label={isPlaying ? "Pause" : "Play"}
						>
							{isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								nextTrack();
							}}
							className="text-white/60 transition-colors hover:text-white"
							aria-label="Next track"
						>
							<SkipForward size={14} fill="currentColor" />
						</button>
					</div>

					{/* volume — stop propagation on the row */}
					<div className="mt-3 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setVolume(volume > 0 ? 0 : 0.5)}
							className="text-white/40 transition-colors hover:text-white"
							aria-label={volume === 0 ? "Unmute" : "Mute"}
						>
							{volume === 0 ? <VolumeX size={12} /> : <Volume2 size={12} />}
						</button>
						<input
							type="range"
							min={0}
							max={1}
							step={0.01}
							value={volume}
							onChange={(e) => setVolume(Number(e.target.value))}
							className="h-[3px] flex-1 cursor-pointer appearance-none rounded-full bg-white/10 accent-white/70"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
