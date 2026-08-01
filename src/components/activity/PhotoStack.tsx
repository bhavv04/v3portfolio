// @/components/activity/PhotoStack.tsx
"use client";

const images = [
	"https://picsum.photos/seed/act1/400/500",
	"https://picsum.photos/seed/act2/400/500",
	"https://picsum.photos/seed/act3/400/500",
	"https://picsum.photos/seed/act4/400/500",
	"https://picsum.photos/seed/act5/400/500",
	"https://picsum.photos/seed/act6/400/500",
	"https://picsum.photos/seed/act7/400/500"
];

const rotations = ["-rotate-6", "rotate-3", "-rotate-2", "rotate-5", "-rotate-3", "rotate-2", "-rotate-4"];

export default function PhotoStack() {
	return (
		<div className="flex items-center justify-center pt-16">
			<div className="flex flex-col items-center gap-4">
				<span className="">mandatory berkely photos 🐶</span>
				<div className="flex items-center justify-center">
					{images.map((src, i) => (
						<img
							key={i}
							src={src}
							alt=""
							style={{ zIndex: i }}
							className={`h-28 w-20 flex-shrink-0 rounded-xl object-cover shadow-md ring-1 ring-black/5 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-3 hover:scale-110 hover:rotate-0 sm:h-40 sm:w-36 ${rotations[i % rotations.length]} ${
								i === 0 ? "" : "-ml-10 sm:-ml-12"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
