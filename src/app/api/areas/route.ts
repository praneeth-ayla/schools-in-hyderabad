// app/api/area/route.ts

import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const areas = await prisma.place.findMany();
		return new Response(JSON.stringify({ areas }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({ error: "Internal server error" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}

export async function POST(request: Request) {
	try {
		const { name } = await request.json();

		if (!name) {
			return new Response(
				JSON.stringify({ error: "Missing 'name' parameter" }),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			);
		}

		const area = await prisma.place.create({
			data: { name },
		});

		return new Response(
			JSON.stringify({ message: "Area created successfully", area }),
			{ status: 201, headers: { "Content-Type": "application/json" } }
		);
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({ error: "Internal server error" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
