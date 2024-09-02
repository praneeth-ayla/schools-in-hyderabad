import prisma from "../../../../prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const board = searchParams.get("board");
	const areaName = searchParams.get("area");
	const name = searchParams.get("name");

	// Build the 'where' clause dynamically based on provided parameters
	const whereClause: {
		name?: { contains: string };
		area?: { name: string };
		category?: { name: string };
	} = {};

	if (name && name.trim()) {
		whereClause.name = {
			contains: name.trim(),
		};
	}

	if (areaName) {
		whereClause.area = {
			name: areaName,
		};
	}

	if (board) {
		whereClause.category = {
			name: board,
		};
	}

	// Fetch schools based on the constructed where clause
	try {
		const schools = await prisma.school.findMany({
			where: whereClause,
			include: {
				area: true, // Include related area information
				category: true, // Include related category information
			},
		});
		return new Response(JSON.stringify(schools), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error fetching schools:", error);
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
