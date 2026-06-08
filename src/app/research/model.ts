export type ProjectStatus = "completed" | "in-progress" | "submitted" | "preprint";

export type ResearchTag =
	| "finance"
	| "medicine"
	| "mathematics"
	| "climate"
	| "geospatial"
	| "physics"
	| "neuroscience"
	| "economics"
	| "artificial-intelligence";

export interface CaseStudy {
	id: string;
	title: string;
	subtitle: string;
	tagline: string; // add this
	abstract: string;
	status: ProjectStatus;
	tags: ResearchTag[];
	year: number;
	methods: string[];
	stack: string[];
	links: {
		repo?: string;
		demo?: string;
		paper?: string;
		writeup?: string;
	};
	highlights?: string[];
}

export interface ResearchCardProps {
	study: CaseStudy;
	expanded: boolean;
	onToggle: () => void;
}
