import { Place } from "@/lib/types";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const area = searchParams.get("area") as Place;

		// Fetch global settings to get the advertise time
		const advertiseSettings = await prisma.globalSettings.findFirst();
		const advertiseTime = advertiseSettings?.advertiseTime ?? 3; // Default to 3 if not found

		// Calculate the date for the threshold based on advertiseTime
		const dateThreshold = new Date();
		dateThreshold.setDate(dateThreshold.getDate() - advertiseTime);

		// Fetch schools with their events, filtering by area and date
		const schools = await prisma.school.findMany({
			where: {
				area: area || undefined, // Filter by area if provided
				events: {
					some: {
						date: {
							gte: dateThreshold, // Only include events from the past 'advertiseTime' days
						},
					},
				},
			},
			select: {
				events: {
					where: {
						date: {
							gte: dateThreshold, // Only include events from the past 'advertiseTime' days
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
			return new Response(JSON.stringify([]), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
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
