import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const name = searchParams.get("name");
		const area = searchParams.get("area");

		if (!name || !area) {
			return NextResponse.json(
				{ error: "Name and area parameters are required" },
				{ status: 400 }
			);
		}

		// Fetch the school details using the provided name and area
		const wholeDetails = await prisma.school.findFirst({
			where: {
				name: name.replace(/-/g, " "), // Assuming name is sent with hyphens instead of spaces
				area: {
					name: area.replace(/-/g, " "), // Same assumption for area
				},
			},
			select: {
				id: true,
				reviews: {
					take: 12,
					orderBy: {
						date: "desc",
					},
					select: {
						id: true,
						name: true,
						rating: true,
						date: true,
						message: true,
					},
				},
				area: true,
				category: true,
				facilities: true,
				events: true,
				images: true,
				contact: true,
				videos: true,
				aboutUs: true,
				awards: true,
				logo: true,
				name: true,
				rating: true,
				toppers: true,
				locationMap: true,
				showReviews: true,
			},
		});

		if (!wholeDetails) {
			return NextResponse.json(
				{ error: "School not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(wholeDetails);
	} catch (error) {
		console.error("Error fetching school details:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
