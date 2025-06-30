export const portfolioData = {
	personal: {
		name: "Your Name",
		role: "Software Developer",
		location: "Your City, Country",
		email: "hello@example.com",
		linkedin: "linkedin.com/in/yourname",
		github: "github.com/yourusername",
		portfolio: "yourportfolio.dev",
		status: "Available for opportunities",
		favoriteLanguage: "JavaScript/TypeScript",
		currentFocus: "Building awesome web experiences"
	},

	about: `Hi there! 👋

I'm a passionate developer who loves building things that matter.
I enjoy solving complex problems and learning new technologies.

Currently focused on creating meaningful digital experiences
and contributing to open source projects.

Always excited to collaborate on interesting projects!`,

	skills: {
		languages: ["JavaScript/TypeScript", "Python", "Java", "Go"],
		frontend: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind"],
		backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"],
		tools: ["Git", "Docker", "AWS", "Linux", "CI/CD"],
		currentlyLearning: ["Rust", "Machine Learning", "System Design"]
	},

	experience: [
		{
			title: "Software Developer",
			company: "TechCorp Inc.",
			period: "Jan 2024 - Present",
			responsibilities: [
				"Built responsive web applications using React and TypeScript",
				"Improved API performance by 40% through optimization",
				"Collaborated with cross-functional teams on product features"
			]
		},
		{
			title: "Frontend Developer Intern",
			company: "StartupXYZ",
			period: "Jun 2023 - Dec 2023",
			responsibilities: [
				"Developed user interfaces for mobile-first applications",
				"Implemented automated testing reducing bugs by 25%",
				"Participated in code reviews and agile development"
			]
		},
		{
			title: "Open Source Contributor",
			company: "",
			period: "2022 - Present",
			responsibilities: ["Active contributor to several popular JavaScript libraries", "Maintained documentation and helped with community support"]
		}
	],

	education: {
		degree: "Bachelor of Computer Science",
		institution: "University of Technology",
		period: "2020 - 2024",
		coursework: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Computer Networks", "Machine Learning Fundamentals"],
		certifications: ["AWS Cloud Practitioner", "MongoDB Developer Associate"]
	},

	hobbies: [
		"Reading sci-fi novels and tech blogs",
		"Exploring new programming languages",
		"Contributing to open source projects",
		"Playing chess and strategy games",
		"Hiking and photography",
		"Experimenting with new recipes"
	],

	contact: {
		openTo: ["Full-time opportunities", "Freelance projects", "Open source collaboration", "Tech discussions over coffee ☕"],
		message: "Feel free to reach out anytime!"
	},

	commands: {
		help: {
			description: "Available commands:",
			list: [
				{ command: "about", description: "Learn about me" },
				{ command: "skills", description: "Technical skills" },
				{ command: "experience", description: "Work experience" },
				{ command: "education", description: "Educational background" },
				{ command: "hobbies", description: "Personal interests" },
				{ command: "contact", description: "Get in touch" },
				{ command: "whoami", description: "Current status" },
				{ command: "clear", description: "Clear terminal" }
			]
		}
	}
};
