import { Place } from "@/lib/types";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const area = searchParams.get("area") as Place;

		// Fetch schools with their events, filtering by area if provided
		const schools = await prisma.school.findMany({
			where: area
				? {
						area,
				  }
				: {}, // No filtering by area if area is not provided
			select: {
				events: {
					select: {
						id: true,
						description: true,
						title: true,
						date: true,
						image: true,
						school: {
							select: {
								area: true,
								name: true,
								logo: true,
							},
						},
					},
				},
			},
		});

		if (!schools || schools.length === 0) {
			return new Response(
				JSON.stringify({
					error: area
						? "No events found in the specified area"
						: "No events found",
				}),
				{
					status: 404,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Flatten the events into a single list
		const allEvents = schools.flatMap((school) => school.events);

		return new Response(JSON.stringify(allEvents), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: "Internal server error" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
