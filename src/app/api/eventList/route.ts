import prisma from "../../../../prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const area = searchParams.get("area");
	const name = searchParams.get("name");
	const board = searchParams.get("board");

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

	if (area) {
		whereClause.area = {
			name: area,
		};
	}

	if (board) {
		whereClause.category = {
			name: board,
		};
	}

	try {
		// Fetch schools based on the constructed where clause
		const schools = await prisma.school.findMany({
			where: whereClause,
			select: {
				id: true,
				name: true,
				logo: true, // Include the logo in the selection
				area: true,
				events: {
					where: {
						advertise: true,
					},
					select: {
						id: true,
						description: true,
						title: true,
						date: true,
						image: true,
					},
				},
				toppers: {
					where: {
						advertise: true,
					},
					select: {
						id: true,
						description: true,
						title: true,
						date: true,
						image: true,
					},
				},
			},
		});

		// Flatten the events and toppers into separate lists with associated school information
		const events = schools.flatMap((school) =>
			school.events.map((event) => ({
				...event,
				type: "event",
				school: {
					id: school.id,
					name: school.name,
					logo: school.logo,
				},
			}))
		);

		const toppers = schools.flatMap((school) =>
			school.toppers.map((topper) => ({
				...topper,
				type: "topper",
				school: {
					id: school.id,
					name: school.name,
					logo: school.logo,
				},
			}))
		);

		// Structure the response with separate arrays for events and toppers
		const response = {
			events,
			toppers,
		};

		return new Response(JSON.stringify(response), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error fetching schools and events:", error);
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
