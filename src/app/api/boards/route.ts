import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
	try {
		const boards = await prisma.category.findMany();
		return new Response(JSON.stringify({ boards }), {
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

		const board = await prisma.category.create({
			data: { name },
		});

		return new Response(
			JSON.stringify({ message: "Board created successfully", board }),
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
