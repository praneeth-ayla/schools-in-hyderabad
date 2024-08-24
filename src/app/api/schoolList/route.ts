import { Place, SchoolCategory } from "@/lib/types";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const board = searchParams.get("board");
	const area = searchParams.get("area");
	const name = searchParams.get("name");

	// Build the 'where' clause dynamically based on provided parameters
	const whereClause: { [key: string]: any } = {};

	if (name && name.trim()) {
		whereClause.name = {
			contains: name.trim(),
		};
	}

	if (area) {
		whereClause.area = area as Place;
	}

	if (board) {
		whereClause.category = board as SchoolCategory;
	}

	// Fetch schools based on the constructed where clause
	try {
		const schools = await prisma.school.findMany({
			where: Object.keys(whereClause).length ? whereClause : undefined, // If no filters are provided, return all schools
		});
		return new Response(JSON.stringify(schools), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: (error as Error).message }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
}
