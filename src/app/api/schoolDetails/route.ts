import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		let name = searchParams.get("name")?.trim();
		let area = searchParams.get("area")?.trim();

		if (!name || !area) {
			return NextResponse.json(
				{ error: "Name and area parameters are required" },
				{ status: 400 }
			);
		}

		// Normalize the search string: convert hyphens to spaces, remove extra spaces, and convert to lowercase
		const normalizeString = (str: string) => {
			return str
				.replace(/-/g, " ") // Replace hyphens with spaces
				.toLowerCase() // Convert to lowercase
				.trim(); // Remove leading/trailing spaces
		};

		name = normalizeString(name);
		area = normalizeString(area);

		const wholeDetails = await prisma.school.findFirst({
			where: {
				name: {
					contains: name,
				},
				area: {
					name: {
						contains: area,
					},
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
				newsletter: true,
				showNewsletter: true,
			},
		});

		// Log the found school name for debugging
		if (wholeDetails) {
			console.log("Found school name:", wholeDetails.name);
		}

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
