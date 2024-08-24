import { Place } from "@/lib/types";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const area = searchParams.get("area") as Place;

		// Calculate the date for 2 days ago
		const twoDaysAgo = new Date();
		twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

		// Fetch schools with their events, filtering by area and date
		const schools = await prisma.school.findMany({
			where: {
				area: area || undefined, // Filter by area if provided
				events: {
					some: {
						date: {
							gte: twoDaysAgo, // Only include events from the past 2 days
						},
					},
				},
			},
			select: {
				events: {
					where: {
						date: {
							gte: twoDaysAgo, // Only include events from the past 2 days
						},
					},
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
			return new Response(JSON.stringify([]));
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
