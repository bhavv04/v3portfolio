// lib/audio/useAudioPlayer.ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Track {
	id: string;
	title: string;
	artist: string;
	cover: string;
	previewUrl: string;
	bgFrom: string;
	bgTo: string;
}

// Safari/iOS still expose AudioContext under the vendor-prefixed name
interface WindowWithWebkitAudio extends Window {
	webkitAudioContext?: typeof AudioContext;
}

export function useAudioPlayer(tracks: Track[]) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const audioCtxRef = useRef<AudioContext | null>(null);
	const gainNodeRef = useRef<GainNode | null>(null);
	const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

	const [trackIndex, setTrackIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [position, setPosition] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolumeState] = useState(0.5);

	const currentTrack = tracks[trackIndex];

	const nextTrack = useCallback(() => {
		setTrackIndex((i) => (i + 1) % tracks.length);
		setIsPlaying(true);
	}, [tracks.length]);

	const previousTrack = useCallback(() => {
		setTrackIndex((i) => (i - 1 + tracks.length) % tracks.length);
		setIsPlaying(true);
	}, [tracks.length]);

	// init the Audio element + Web Audio graph once on mount
	useEffect(() => {
		const audio = new Audio();
		audio.crossOrigin = "anonymous"; // needed if previewUrl is cross-origin
		audioRef.current = audio;

		const onTimeUpdate = () => setPosition(audio.currentTime);
		const onLoadedMetadata = () => setDuration(audio.duration);
		const onEnded = () => nextTrack();
		const onPause = () => setIsPlaying(false);
		const onPlay = () => setIsPlaying(true);

		audio.addEventListener("timeupdate", onTimeUpdate);
		audio.addEventListener("loadedmetadata", onLoadedMetadata);
		audio.addEventListener("ended", onEnded);
		audio.addEventListener("pause", onPause);
		audio.addEventListener("play", onPlay);

		return () => {
			audio.pause();
			audio.removeEventListener("timeupdate", onTimeUpdate);
			audio.removeEventListener("loadedmetadata", onLoadedMetadata);
			audio.removeEventListener("ended", onEnded);
			audio.removeEventListener("pause", onPause);
			audio.removeEventListener("play", onPlay);
			audioCtxRef.current?.close();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// lazily build the Web Audio graph on first play (must be inside a user gesture on iOS)
	const ensureAudioGraph = useCallback(() => {
		if (!audioRef.current || audioCtxRef.current) return;

		const AudioContextClass = window.AudioContext || (window as WindowWithWebkitAudio).webkitAudioContext;
		const ctx = new AudioContextClass();
		const source = ctx.createMediaElementSource(audioRef.current);
		const gain = ctx.createGain();

		source.connect(gain);
		gain.connect(ctx.destination);
		gain.gain.value = volume;

		audioCtxRef.current = ctx;
		sourceNodeRef.current = source;
		gainNodeRef.current = gain;
	}, [volume]);

	// keep gain node in sync with volume state (this now actually works on iOS)
	useEffect(() => {
		if (gainNodeRef.current) {
			gainNodeRef.current.gain.value = volume;
		}
		// fallback for browsers where Web Audio graph isn't set up yet
		if (audioRef.current && !gainNodeRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume]);

	// load + play new track when trackIndex changes
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio || !currentTrack) return;

		audio.src = currentTrack.previewUrl;
		setPosition(0);

		if (isPlaying) audio.play().catch(() => setIsPlaying(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [trackIndex]);

	const play = useCallback(() => {
		ensureAudioGraph(); // must happen inside the user gesture that calls play()
		audioCtxRef.current?.resume();
		audioRef.current?.play();
	}, [ensureAudioGraph]);

	const pause = useCallback(() => {
		audioRef.current?.pause();
	}, []);

	const togglePlay = useCallback(() => {
		if (isPlaying) {
			pause();
		} else {
			play();
		}
	}, [isPlaying, play, pause]);

	const setVolume = useCallback((v: number) => {
		setVolumeState(v);
	}, []);

	const seekTo = useCallback((seconds: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime = seconds;
			setPosition(seconds);
		}
	}, []);

	useEffect(() => {
		const handleToggle = () => togglePlay();
		document.addEventListener("music:toggle", handleToggle);
		return () => document.removeEventListener("music:toggle", handleToggle);
	}, [togglePlay]);

	// alongside your other useEffects in useAudioPlayer.ts
	useEffect(() => {
		document.dispatchEvent(new CustomEvent("music:state", { detail: isPlaying }));
	}, [isPlaying]);

	return {
		currentTrack,
		isPlaying,
		position,
		duration,
		volume,
		play,
		pause,
		togglePlay,
		nextTrack,
		previousTrack,
		setVolume,
		seekTo
	};
}
