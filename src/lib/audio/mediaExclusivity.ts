// lib/audio/mediaExclusivity.ts
"use client";

let patched = false;
const activeElements = new Set<HTMLMediaElement>();

export function enforceSingleAudioPlayback() {
	if (patched || typeof window === "undefined") return;
	patched = true;

	const originalPlay = HTMLMediaElement.prototype.play;

	HTMLMediaElement.prototype.play = function (this: HTMLMediaElement) {
		activeElements.forEach((el) => {
			if (el !== this) el.pause();
		});
		activeElements.add(this);
		return originalPlay.apply(this);
	};

	// clean up on pause/end so paused elements don't linger in the set forever
	document.addEventListener(
		"pause",
		(e) => {
			activeElements.delete(e.target as HTMLMediaElement);
		},
		true
	);
}
