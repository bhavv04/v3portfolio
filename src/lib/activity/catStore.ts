import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const PETS_KEY = "cat:pets";
const DIZZY_KEY = "cat:dizzy";
const LOG_KEY = "cat:log"; // list, newest first

export type CatEvent = {
	type: "pet" | "dizzy";
	at: number; // epoch ms
};

const MAX_LOG = 20;

export async function recordPet(): Promise<{ pets: number; dizzy: number }> {
	const [pets, dizzy] = await Promise.all([redis.incr(PETS_KEY), redis.get<number>(DIZZY_KEY).then((v) => v ?? 0)]);
	await pushLog({ type: "pet", at: Date.now() });
	return { pets, dizzy };
}

export async function recordDizzy(): Promise<{ pets: number; dizzy: number }> {
	const [dizzy, pets] = await Promise.all([redis.incr(DIZZY_KEY), redis.get<number>(PETS_KEY).then((v) => v ?? 0)]);
	await pushLog({ type: "dizzy", at: Date.now() });
	return { pets, dizzy };
}

async function pushLog(event: CatEvent) {
	await redis.lpush(LOG_KEY, JSON.stringify(event));
	await redis.ltrim(LOG_KEY, 0, MAX_LOG - 1);
}

export async function getCatState(): Promise<{
	pets: number;
	dizzy: number;
	log: CatEvent[];
}> {
	const [pets, dizzy, rawLog] = await Promise.all([
		redis.get<number>(PETS_KEY).then((v) => v ?? 0),
		redis.get<number>(DIZZY_KEY).then((v) => v ?? 0),
		redis.lrange<string>(LOG_KEY, 0, MAX_LOG - 1)
	]);
	const log = rawLog.map((item) => (typeof item === "string" ? (JSON.parse(item) as CatEvent) : (item as CatEvent)));
	return { pets, dizzy, log };
}
