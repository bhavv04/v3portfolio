import { NextResponse } from "next/server";
import { getCatState, recordPet, recordDizzy } from "@/lib/activity/catStore";

export async function GET() {
	const state = await getCatState();
	return NextResponse.json(state);
}

export async function POST(req: Request) {
	const { type } = await req.json();

	if (type !== "pet" && type !== "dizzy") {
		return NextResponse.json({ error: "invalid type" }, { status: 400 });
	}

	const state = type === "dizzy" ? await recordDizzy() : await recordPet();
	return NextResponse.json(state);
}
