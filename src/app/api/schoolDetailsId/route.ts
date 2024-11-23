import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const idParam = searchParams.get("id");

		if (!idParam) {
			return NextResponse.json(
				{ error: "ID parameter is missing" },
				{ status: 400 }
			);
		}

		const id = parseInt(idParam, 10);
		if (isNaN(id)) {
			return NextResponse.json(
				{ error: "Invalid ID parameter" },
				{ status: 400 }
			);
		}

		const wholeDetails = await prisma.school.findUnique({
			where: { id },
			select: {
				reviews: {
					take: 12,
					orderBy: {
						date: "desc", // Changed from createdAt to date
					},
					select: {
						id: true,
						name: true,
						rating: true,
						date: true, // Changed from createdAt to date
						message: true, // Changed from content to message
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
				showNewsletter: true,
				newsletter: true,
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
