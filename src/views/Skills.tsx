"use client";
import { FaReact, FaJsSquare, FaFigma, FaDocker, FaLinux, FaJava, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import {
	SiSupabase,
	SiTailwindcss,
	SiExpress,
	SiRedis,
	SiAppwrite,
	SiClerk,
	SiPostgresql,
	SiVite,
	SiSpringboot,
	SiNginx,
	SiNextdotjs,
	SiSqlite,
	SiRust,
	SiFirebase
} from "react-icons/si";

const skills = [
	{ name: "React.js", icon: <FaReact className="font-sans text-2xl text-cyan-400" /> },
	{
		name: "Javascript",
		icon: <FaJsSquare className="text-2xl text-yellow-300" />,
		badgeClass: "bg-yellow-300 text-black"
	},
	{ name: "Supabase", icon: <SiSupabase className="text-2xl text-green-400" /> },
	{ name: "Figma", icon: <FaFigma className="text-2xl text-zinc-100" /> },
	{ name: "Docker", icon: <FaDocker className="text-2xl text-blue-400" /> },
	{ name: "Clerk", icon: <SiClerk className="text-2xl text-purple-400" /> },
	{ name: "Express", icon: <SiExpress className="text-2xl text-green-500" /> },
	{ name: "TailwindCSS", icon: <SiTailwindcss className="text-2xl text-cyan-300" /> },
	{
		name: "Redis",
		icon: <SiRedis className="text-2xl text-red-500" />,
		badgeClass: "bg-zinc-800 text-red-400"
	},
	{ name: "Linux", icon: <FaLinux className="font-sans text-2xl text-zinc-100" /> },
	{ name: "Appwrite", icon: <SiAppwrite className="text-2xl text-pink-400" /> },
	{ name: "Firebase", icon: <SiFirebase className="text-2xl text-yellow-400" /> },
	{ name: "PostgreSQL", icon: <SiPostgresql className="text-2xl text-blue-300" /> },
	{ name: "Vite", icon: <SiVite className="text-2xl text-purple-300" /> },
	{ name: "Spring Boot", icon: <SiSpringboot className="text-2xl text-green-400" /> },
	{ name: "Nginx", icon: <SiNginx className="text-2xl text-green-500" /> },
	{ name: "Next.js", icon: <SiNextdotjs className="text-2xl text-zinc-100" /> },
	{ name: "SQLite", icon: <SiSqlite className="text-2xl text-blue-400" /> },
	{ name: "Rust", icon: <SiRust className="text-2xl text-orange-400" /> },
	{ name: "Python", icon: <FaPython className="text-2xl text-yellow-400" /> },
	{ name: "Java", icon: <FaJava className="text-2xl text-red-400" /> },
	{ name: "AWS", icon: <FaAws className="text-2xl text-yellow-300" /> },
	{ name: "Git", icon: <FaGitAlt className="text-2xl text-orange-400" /> }
];

export function Skills() {
	const carouselSkills = [...skills, ...skills];

	return (
		<section id="skills" className="mx-auto max-w-[45rem] py-12">
			<div className="slide-in-up mt-8 space-y-4">
				{/* Row 1 */}
				<div className="skills-carousel-outer">
					<div className="skills-carousel-track animate-skills-carousel pause-on-hover">
						{carouselSkills.map((skill, idx) => (
							<span
								key={skill.name + "row1" + idx}
								className={`flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-4 py-4 font-mono text-base text-zinc-100 shadow-sm ${skill.badgeClass ? skill.badgeClass : ""} `}
							>
								{skill.icon}
								{skill.name}
							</span>
						))}
					</div>
				</div>
				{/* Row 2: right to left */}
				<div className="skills-carousel-outer">
					<div className="skills-carousel-track animate-skills-carousel-reverse pause-on-hover">
						{carouselSkills.map((skill, idx) => (
							<span
								key={skill.name + "row2" + idx}
								className={`flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-4 py-4 font-mono text-base text-zinc-100 shadow-sm ${skill.badgeClass ? skill.badgeClass : ""} `}
							>
								{skill.icon}
								{skill.name}
							</span>
						))}
					</div>
				</div>

				{/* Row 3: left to right */}
				<div className="skills-carousel-outer">
					<div className="skills-carousel-track animate-skills-carousel pause-on-hover">
						{carouselSkills
							.slice()
							.reverse()
							.map((skill, idx) => (
								<span
									key={skill.name + "row3" + idx}
									className={`flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-4 py-4 font-mono text-base text-zinc-100 shadow-sm ${skill.badgeClass ? skill.badgeClass : ""} `}
								>
									{skill.icon}
									{skill.name}
								</span>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}
