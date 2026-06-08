export const WELCOME_MESSAGE = `[OK] Initializing Portfolio Environment...
[OK] Loading Technical Stack Manifest...
[OK] Establishing Secure Session: bhav~default

Welcome to my site! Glad you're digging into the about section. 
I left the standard bio off the home page to keep things clean,
this terminal is your direct pipeline into bhav.

Type 'help' to list available system commands or click the buttons below for a quick demo.`;

export const portfolioData = {
	personal: {
		name: "Bhavdeep Arora",
		occupation: "Student Developer",
		specialization: "Machine Learning, Data Engineering, Systems & Security, Full-stack Web Dev",
		bio: ""
	},

	skills: {
		programmingLanguages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "SQL"],
		frameworks: ["React", "Next.js", "Flask", "Plotly Dash", "PyTorch", "scikit-learn", "xarray"],
		tools: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Supabase", "Git", "GDAL"]
	},

	contact: {
		email: "bhavdeepsa@gmail.com",
		github: "github.com/bhavv04",
		linkedin: "linkedin.com/in/bhavdeeparora",
		portfolio: "bhavdeeparora.vercel.app"
	},

	hobbies: [
		{ name: "Reading", detail: "compiling physical stacks of sci-fi & philosophy" },
		{ name: "Trekking", detail: "off-grid route optimization & elevation testing" },
		{ name: "Lifting", detail: "heavy physical load state stress testing" },
		{ name: "Woodworking", detail: "subtractive manufacturing with real-world materials" },
		{ name: "Gaming", detail: "simulating multi-agent reinforcement learning environments" },
		{ name: "Cooking", detail: "experimental recipe development & flavor compound analysis" },
		{ name: "Rugby", detail: "chasing an oval ball" }
	],

	books: [
		{ title: "The Stormlight Archive series, especially Words Of Radiance", author: "Brandon Sanderson", category: "fantasy / epic" },
		{ title: "The Witcher Series", author: "Andrzej Sapkowski", category: "fantasy / epic" },
		{ title: "Piranesi", author: "Susanna Clarke", category: "fantasy / speculative" },
		{ title: "Recursion and Dark Matter", author: "Blake Crouch", category: "sci-fi / thriller" },
		{ title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", category: "classics / philosophy" },
		{ title: "War and Peace", author: "Leo Tolstoy", category: "classics / historical" },
		{ title: "A Tale of Two Cities", author: "Charles Dickens", category: "classics / historical" }
	]
};
