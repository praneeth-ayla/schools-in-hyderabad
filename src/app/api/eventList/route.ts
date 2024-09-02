import prisma from "../../../../prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const area = searchParams.get("area");
	const name = searchParams.get("name");

	// Build the 'where' clause dynamically based on provided parameters
	const whereClause: {
		name?: { contains: string };
		area?: { name: string };
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

	try {
		// Fetch global settings to get the advertise time
		const advertiseSettings = await prisma.globalSettings.findFirst();
		const advertiseTime = advertiseSettings?.advertiseTime ?? 3; // Default to 3 days if not found

		// Calculate the date for the threshold based on advertiseTime
		const dateThreshold = new Date();
		dateThreshold.setDate(dateThreshold.getDate() - advertiseTime);

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
						date: {
							gte: dateThreshold,
						},
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

		// Flatten the events into a single list with associated school information
		const allEvents = schools.flatMap((school) =>
			school.events.map((event) => ({
				...event,
				school: {
					id: school.id,
					name: school.name,
					logo: school.logo,
				},
			}))
		);

		if (allEvents.length === 0) {
			return new Response(JSON.stringify([]), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		}

		return new Response(JSON.stringify(allEvents), {
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
