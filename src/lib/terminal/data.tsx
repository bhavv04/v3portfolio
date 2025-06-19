// data.tsx - All portfolio data
export const portfolioData = {
	personal: {
		name: "John Doe",
		occupation: "Full Stack Developer",
		specialization: "Web Development, System Architecture",
		bio: "Passionate developer with expertise in modern web technologies. Experienced in building scalable applications and solving complex problems."
	},

	projects: [
		{
			name: "PROJECT ALPHA",
			description: "E-commerce Platform | React, Node.js, MongoDB"
		},
		{
			name: "PROJECT BETA",
			description: "Mobile App | React Native, Firebase"
		},
		{
			name: "PROJECT GAMMA",
			description: "Data Analytics Dashboard | Python, Django, PostgreSQL"
		}
	],

	experience: [
		{
			title: "SENIOR DEVELOPER",
			company: "Tech Corp Inc.",
			period: "2022 - Present",
			description: "Led development of critical applications, mentored junior developers"
		},
		{
			title: "FULL STACK DEVELOPER",
			company: "StartupXYZ",
			period: "2020 - 2022",
			description: "Built scalable web applications from ground up"
		},
		{
			title: "JUNIOR DEVELOPER",
			company: "WebDev Solutions",
			period: "2019 - 2020",
			description: "Contributed to various client projects, gained full-stack experience"
		}
	],

	skills: {
		programmingLanguages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
		frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "Spring Boot"],
		databases: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Git"]
	},

	contact: {
		email: "john.doe@email.com",
		github: "github.com/johndoe",
		linkedin: "linkedin.com/in/johndoe",
		portfolio: "johndoe.dev"
	},

	education: {
		degree: "BACHELOR OF COMPUTER SCIENCE",
		school: "University of Technology",
		period: "2015 - 2019",
		details: "Graduated Magna Cum Laude | GPA: 3.8/4.0",
		certifications: ["AWS Certified Developer", "Google Cloud Professional", "MongoDB Certified Developer"]
	}
};
