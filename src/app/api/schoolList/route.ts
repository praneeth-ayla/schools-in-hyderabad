import { Place, SchoolCategory } from "@/lib/types";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const board = searchParams.get("board");
	const area = searchParams.get("area");
	const name = searchParams.get("name");

	// Build the 'where' clause dynamically based on provided parameters
	const whereClause: any = {};

	if (name) {
		whereClause.name = {
			contains: name,
			mode: "insensitive",
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
		const res = await prisma.school.findMany({
			where: Object.keys(whereClause).length ? whereClause : undefined, // If no filters are provided, return all schools
		});
		return Response.json(res);
	} catch (error: any) {
		return Response.json({ error: error.message });
	}
}
