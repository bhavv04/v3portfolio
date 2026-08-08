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

export function useAudioPlayer(tracks: Track[]) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
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

	// init the Audio element once on mount
	useEffect(() => {
		const audio = new Audio();
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
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// keep audio element's volume in sync
	useEffect(() => {
		if (audioRef.current) audioRef.current.volume = volume;
	}, [volume]);

	// load + play new track when trackIndex changes
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio || !currentTrack) return;

		audio.src = currentTrack.previewUrl;
		setPosition(0);

		if (isPlaying) audio.play().catch(() => setIsPlaying(false));
		// only re-run when the track actually changes, not on every
		// isPlaying/currentTrack reference change (avoids restart loops)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [trackIndex]);

	const play = useCallback(() => {
		audioRef.current?.play();
	}, []);

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
