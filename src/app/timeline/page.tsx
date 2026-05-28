"use client";

import { useEffect, useRef } from "react";
import { education, experience } from "./data";
import { SectionTitle } from "@/components/typography/SectionTitle";
import { TbBriefcaseFilled } from "react-icons/tb";

export default function ExperiencePage() {
	const lineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = lineRef.current;
		if (!el) return;
		el.style.height = "0px";
		el.style.transition = "height 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
		requestAnimationFrame(() => {
			el.style.height = "calc(100% - 1rem)";
		});
	}, []);

	return (
		<main className="md:px min-h-screen px-4 pb-12 sm:px-8 md:pb-0 lg:px-32">
			<div className="mx-auto max-w-4xl">
				{/* Section Header */}
				<div className="mb-8">
					<SectionTitle
						text={
							<span className="fade-in-up flex items-center gap-2" style={{ "--delay-index": 0 } as React.CSSProperties}>
								<TbBriefcaseFilled />
								<span>My Journey</span>
							</span>
						}
					/>
					<p className="fade-in-up mt-2 text-sm sm:text-base" style={{ "--delay-index": 1 } as React.CSSProperties}>
						the things i&apos;ve done, the places i&apos;ve been, and the people i&apos;ve worked with along the way.
					</p>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Line — animates height on load */}
					<div ref={lineRef} className="absolute left-[5.5px] top-2 w-px overflow-hidden bg-white opacity-30" style={{ height: 0 }} />
					{/* Bottom cap */}
					<span className="absolute bottom-0 left-[2px] h-2 w-2 rounded-xl bg-white opacity-40" />

					{/* Education */}
					{education.map((ed, i) => (
						<TimelineItem key={ed.school} title={ed.school} subtitle={ed.degree} meta={ed.period} index={i}>
							<p className="mt-1 text-sm opacity-50">{ed.concentration}</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{ed.courses.map((c) => (
									<span key={c} className="rounded-xl border border-white border-opacity-20 px-2 py-1 text-xs opacity-60">
										{c}
									</span>
								))}
							</div>
						</TimelineItem>
					))}

					{/* Divider */}
					<div className="relative py-6 pl-10">
						<span className="text-xs opacity-60">work</span>
					</div>

					{/* Experience */}
					{experience.map((exp, i) => (
						<TimelineItem key={`${exp.org}-${exp.period}`} title={exp.org} subtitle={exp.role} meta={exp.period} index={education.length + 1 + i}>
							<ul className="mt-3 space-y-2">
								{exp.bullets.map((b, j) => (
									<li
										key={j}
										className="relative pl-3 text-sm leading-relaxed opacity-60 before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-1.5 before:bg-current"
									>
										{b}
									</li>
								))}
							</ul>
						</TimelineItem>
					))}
				</div>
			</div>
		</main>
	);
}

/* ── Timeline Item ─────────────────────────────────────────── */

type TimelineItemProps = {
	title: string;
	subtitle: string;
	meta: string;
	index: number;
	children?: React.ReactNode;
};

function TimelineItem({ title, subtitle, meta, index, children }: TimelineItemProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.style.opacity = "1";
					el.style.transform = "translateY(0)";
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className="relative mb-8 pl-10"
			style={{
				opacity: 0,
				transform: "translateY(16px)",
				transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`
			}}
		>
			{/* Dot */}
			<span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-stone-500" />

			{/* Card */}
			<div className="rounded-md bg-neutral-900 px-4 py-4 sm:px-5">
				<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
					<h2 className="text-sm font-semibold sm:text-base">{title}</h2>
					<span className="text-xs opacity-40">{meta}</span>
				</div>
				<p className="mt-1 text-sm opacity-50">{subtitle}</p>
				{children}
			</div>
		</div>
	);
}
