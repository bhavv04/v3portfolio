// @/lib/activity/activity.ts
const GITHUB_USER = "bhavv04";

interface GithubRepo {
	name: string;
	fork: boolean;
	archived: boolean;
	pushed_at: string;
}

interface Commit {
	repo: string;
	message: string;
	date: string;
	url: string;
}

const EXCLUDED_REPOS = ["bhavdeeparora.dev"]; // add any others to skip

async function getRecentRepos(): Promise<GithubRepo[]> {
	const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=10`, {
		next: { revalidate: 3600 } // re-fetch at most once an hour
	});

	if (!res.ok) return [];

	const repos: GithubRepo[] = await res.json();

	return repos.filter((r) => !r.fork && !r.archived && !EXCLUDED_REPOS.includes(r.name));
}

async function getLatestCommits(): Promise<Commit[]> {
	const repos = await getRecentRepos();
	const topRepos = repos.slice(0, 5);

	const commitPromises = topRepos.map(async (repo) => {
		const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/commits?per_page=1`, { next: { revalidate: 3600 } });

		if (!res.ok) return null;

		const commits = await res.json();
		const latest = commits[0];
		if (!latest) return null;

		return {
			repo: repo.name,
			message: latest.commit.message.split("\n")[0],
			date: latest.commit.author.date,
			url: latest.html_url
		};
	});

	const results = await Promise.all(commitPromises);
	return results.filter((c): c is Commit => c !== null).slice(0, 4);
}

export { getLatestCommits };
export type { Commit };
